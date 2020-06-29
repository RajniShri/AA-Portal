// config params
var applicationName = applicationNameVar;
var infoEliments = infoElimentsVar;
var infoLabels = infoLabelsVar;
var domain = domainVar;
var logSearchKey = logSearchKeyVar;
var noHelpOption = noHelpOptionVal;
var uniqueIssueSerchKey = null;
// application params
var lob;
var screen;
var errorCode;
var errorDescription;

var dataList = {};
var splunkResponse = {};
var feedbackRequest = {};
var helpRequest = {};
var helpOptionList = null;
var feedbackType = null;

// Mock
var mockResponseVal = mockResponse;
var mocKEDBResponse = KEDBResponse;
var mockHelpResponse = HelpResponse;

function displayWindow(reset) {
    loadBasicWindow();
    if(reset){
        this.uniqueIssueSerchKey = null;
        helpOptionList = null;
    }
    if (this.uniqueIssueSerchKey == null) {
        loadHelpDetails();
    } else {
        loadErrorDetails();
    }

}

function minWindow() {
    var windowid = document.getElementById('window-id')
    windowid.style.display = 'none';
    var help = document.getElementById('help')
    help.style.display = 'block';
}

function closeWindow() {
    uniqueIssueSerchKey = null;
    helpOptionList = null;
    var windowid = document.getElementById('window-id')
    windowid.style.display = 'none';
    var help = document.getElementById('help')
    help.style.display = 'block';
    helpOptionList = null;
}

function getHelpOptions(pageName, message) {
    var loader = document.getElementById('loader-id');
    loader.style.display = 'block';
    helpRequest.pageName =  pageName;
    helpRequest.message =  message;

    if(!mockResponseVal){
        const Http = new XMLHttpRequest();
        const url = 'http://localhost:8080/help';
        Http.open("POST", url, true);
        Http.setRequestHeader("Content-Type", "application/json");
        
        Http.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                displayHelpFlow(Http.responseText);
            }
            loader.style.display = 'none'; 
        }
        Http.send(JSON.stringify(helpRequest));
    }else {
        displayHelpFlow(mockHelpResponse);
        loader.style.display = 'none';
    }
}

function displayHelpFlow(response){
    var contentOptions = document.getElementById('content-optionsid');
    contentOptions.innerHTML = '';
    if (response !== '') {
        var issueList = JSON.parse(response);
        helpOptionList = issueList;
        displayHelpList(contentOptions,issueList);
    }else {
        displayHelpResource(contentOptions,response);
    }
}

function provideFeedback(feedback){
    feedbackType = feedback;
}

function submitFeedback() {
    if(feedbackType == null){
        console.log("dcsd")
        return;
    }
    const Http = new XMLHttpRequest();
    const url = 'http://localhost:8080/updateFeedback';
    Http.open("POST", url, true);
    Http.setRequestHeader("Content-Type", "application/json");
    Http.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            userfeedback.value = '';
            var feedback = document.getElementById('feedback');
            feedback.style.display = 'none';
            var feedbackok = document.getElementById('feedback-ok');
            feedbackok.style.display = 'block';
            if (!feedbackType) {
                feedbackok.innerText = 'Thank you for your feedback.\n We always try to improve our system to assist you better.';
            }
        }
    }
    feedbackRequest.ErrorCode = errorCode;
    feedbackRequest.ErrorDescription = errorDescription;
    feedbackRequest.action = 'merge';
    feedbackRequest.ErrorCode = errorCode;
    var userfeedback = document.getElementById('userfeedback');

    feedbackRequest.Feedback = userfeedback.value ? userfeedback.value.trim() : '';
    if (feedbackType) {
        feedbackRequest.FeedbackCount = 1;
        Http.send(JSON.stringify(feedbackRequest));
    } else {
        feedbackRequest.FeedbackCount = -1;
        Http.send(JSON.stringify(feedbackRequest));
    }
    feedbackType = null;
    var kedbEliment = document.getElementById('kedb-response');
    kedbEliment.style.display = 'none';
    var greetingId = document.getElementById('greeting-id');
    greetingId.style.display = 'none';
    var ticketResponse = document.getElementById('ticket-response');
    ticketResponse.style.display = 'none';
}


function searchSplunk() {
    var loader = document.getElementById('loader-id');
    loader.style.display = 'block';
    var kedbTrue = document.getElementById('kedb-true');
    kedbTrue.style.display = 'none';
    var kedbFalse = document.getElementById('kedb-false');
    kedbFalse.style.display = 'none';
    const Http = new XMLHttpRequest();
    if(!mockResponseVal){
        var url = 'http://localhost:8080/rest/search/'.concat(logSearchKey, '/', this.uniqueIssueSerchKey);
        Http.open("GET", url);
        Http.send();
        Http.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                displayKedbResponse(Http.responseText);
            }
        }
    }else {
        displayKedbResponse(mocKEDBResponse);
    }
    var kedbEliment = document.getElementById('kedb-response');
    kedbEliment.style.display = 'block';
}

function displayKedbResponse(responseText){
    splunkResponse = JSON.parse(responseText);
    errorCode = splunkResponse.ErrorCode;
    errorDescription = splunkResponse.ErrorDescription;
    if (splunkResponse.notSupported) {
        displayNotSupported();
    } else if (splunkResponse.errorPresentinKEDB) {
        displayErrorPresentinKEDB(splunkResponse);
    } else {
        displayErrorNotPresentinKEDB();
    }
    var loader = document.getElementById('loader-id');
    loader.style.display = 'none';
}

function logIncident(form) {
    
    var loader = document.getElementById('loader-id');
    loader.style.display = 'block';
    var contentid = document.getElementById('contentid')
    var errorScreen = document.getElementById('error-screen');
    
    splunkResponse.userInputDescription = contentid.innerText.concat(' : ', errorScreen.innerText, ' : ' + form.userInputDescription.value);
    
    const Http = new XMLHttpRequest();
    const url = 'http://localhost:8080/api/create';
    Http.open("POST", url, true);
    Http.setRequestHeader("Content-Type", "application/json");
    
    Http.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            displayLoggedIncident(Http , form);
        }
    }
    
    Http.send(JSON.stringify(splunkResponse));
}

function createIncident() {
    var incidentElement = document.getElementById('create-Incident');
    incidentElement.style.display = 'block';

    var errorScreen = document.getElementById('error-screen');
    errorScreen.innerText = 'Issue occurred in '.concat(screen, ' screen of ', lob);
    var kedbTrue = document.getElementById('kedb-response');
    kedbTrue.style.display = 'none';
    var feedbackSection = document.getElementById('feedback-section');
    feedbackSection.style.display = 'none';
}

//http://localhost:8080/rest/suggestion/Auto/CustomerInfo
//http://localhost:8080/rest/search/Splunk/plotx:571bbeb

//plotx:571bbeb



function loadHelpDetails(){
    var feedbackSection = document.getElementById('feedback-section');
    feedbackSection.style.display = 'block';
    if(helpOptionList !== null){
        var contentOptions = document.getElementById('content-optionsid');
        contentOptions.innerHTML = '';
        displayHelpList(contentOptions,helpOptionList);
    }
    else if (window.location.href.indexOf(screenKeyDriver) > -1) {
        lob = 'Personal Auto';
        screen = 'Driver';
        getHelpOptions( screen,null);
    } else if (window.location.href.indexOf(screenKeyVehicle) > -1) {
        lob = 'Personal Auto';
        screen = 'Vehicle';
        getHelpOptions( screen,null);
    } else {
        lob = 'Personal Auto';
        screen = 'Customer Info';
        getHelpOptions( screen,null);
    }
}

function loadErrorDetails(){
    var feedbackSection = document.getElementById('feedback-section');
    feedbackSection.style.display = 'block';
    if (window.location.href.indexOf(screenKeyDriver) > -1) {
        lob = 'Personal Auto';
        screen = 'Driver';
    } else if (window.location.href.indexOf(screenKeyVehicle) > -1) {
        lob = 'Personal Auto';
        screen = 'Vehicle';
    } else {
        lob = 'Personal Auto';
        screen = 'Customer Info';
    }
    var greetingId = document.getElementById('greeting-id');
    greetingId.style.display = 'none';
    searchSplunk();
    var help = document.getElementById('blink')
    help.style.animationName = 'flash';
    help.style.animationDuration = '0s';
}

function displayHelpList(contentOptions,issueList) {
    for (i = 0; i < noHelpOption && issueList[i] !== undefined; ++i) {
        listItem = document.createElement('div');
        listItem.innerHTML = '<li id="fourth-row" class="options" onclick="getHelpOptions(null,\''.concat(issueList[i], '\')"><a><i class="fa fa-angle-double-right" style="margin-right:10px"></i>',
            issueList[i] + '</a></li>');
        contentOptions.appendChild(listItem);
    }
    if(issueList.length>noHelpOption){
        listItem = document.createElement('div');
        listItem.innerHTML = '<li id="load-more" class="options load-more" onclick="loadMore(\''.concat(issueList, '\')"><i class="fa fa-refresh" style="margin-right:10px"></i>',
            'Load More' + '</li>');
    }
    contentOptions.appendChild(listItem);
}

function loadMore(issueList) {
    issueList = issueList.split(',');
    issueList.splice(0,noHelpOption);
    if(issueList.length > 0 ){
        var contentOptions = document.getElementById('content-optionsid');
        var loadMore = document.getElementById('load-more');
        loadMore.parentNode.removeChild(loadMore);

        displayHelpList(contentOptions,issueList);
    }
}

function displayHelpResource(contentOptions,response) {
    helpResource = document.createElement('div');
    helpResource.style.textAlign = "center";
    helpResource.innerHTML = '<br><a style="text-align: center;" target="_blank" href="http://localhost:4200/auto-driver">Click here</a> no navigate.';
    contentOptions.appendChild(helpResource);
}

function blink(uniqueIssueSerchKey) {
    var help = document.getElementById('blink')
    help.style.animationName = 'flash';
    help.style.animationDuration = '1s';
    this.uniqueIssueSerchKey = uniqueIssueSerchKey;
}

function loadBasicWindow(){
    var greetingId = document.getElementById('greeting-id');
    greetingId.style.display = 'block';
    var loader = document.getElementById('loader-id');
    loader.style.display = 'none';
    var contentid = document.getElementById('contentid')
    contentid.style.display = 'none';

    // var askMoreInfo = document.getElementById('ask-more-info')
    // askMoreInfo.style.display = 'none';

    var createIncident = document.getElementById('create-Incident')
    createIncident.style.display = 'none';

    var appName = document.getElementById('app-name')
    appName.innerHTML = applicationName;


    var windowid = document.getElementById('window-id')

    windowid.style.display = 'block';

    var help = document.getElementById('help')
    help.style.display = 'none';

    var kedbTrue = document.getElementById('kedb-response');
    kedbTrue.style.display = 'none';
    loadFeedbackSection();
    var ticketResponse = document.getElementById('ticket-response');
    ticketResponse.style.display = 'none';
    var contentOptions = document.getElementById('content-optionsid');
    contentOptions.innerHTML = '';
}

function loadFeedbackSection(){
    var feedbackSection = document.getElementById('feedback-section');
    feedbackSection.style.display = 'block';
    var feedback = document.getElementById('feedback');
    feedback.style.display = 'block';
    var feedbackok = document.getElementById('feedback-ok');
    feedbackok.style.display = 'none';
}

function displayNotSupported(){
    var kedbFalse = document.getElementById('kedb-false');
    kedbFalse.style.display = 'block';
    var logBtn = document.getElementById('button-id');
    logBtn.style.display = 'block';
    var notSupported = document.getElementById('not-supported');
    notSupported.innerText = 'Currently this feature is not supported.Work in progress.';
    notSupported.style.color = 'red'
    var kedbTrue = document.getElementById('kedb-true');
    kedbTrue.style.display = 'none';
}

function displayErrorPresentinKEDB(splunkResponse) {
    var kedbTrue = document.getElementById('kedb-true');
    kedbTrue.style.display = 'block';
    var ticketid = document.getElementById('ticketid');
    if (ticketid != null) {
        ticketid.innerText = '';

        ticketid.innerText = splunkResponse.ticketNumber;
    }
    if (splunkResponse.errorWorkaround !== null && splunkResponse.errorWorkaround !== undefined && splunkResponse.errorWorkaround!=='-') {
        var suggestion = document.getElementById('suggestion');
        suggestion.innerHTML = '<br><div style="font-size: 12px;">Meanwhile please try bellow workaround to avoid this isssue</div>';
        listItem = document.createElement('div');
        listItem.innerHTML = '<li style="font-size: 16px!important;list-style: circle;margin: 0px;  padding: 0px;" id="fourth-row" class="options">'.concat(
            splunkResponse.errorWorkaround, '</li>');
        suggestion.appendChild(listItem);
        
    }
    var feedback = document.getElementById('feedback');
        feedback.style.display = 'block';
        var feedback = document.getElementById('feedback-ok');
        feedback.style.display = 'none';
    var kedbFalse = document.getElementById('kedb-false');
    kedbFalse.style.display = 'none';
}

function displayErrorNotPresentinKEDB() {
    var kedbFalse = document.getElementById('kedb-false');
    kedbFalse.style.display = 'block';
    var notSupported = document.getElementById('not-supported');
    notSupported.innerText = 'Sorry! we did not find any related issue.';
    var kedbTrue = document.getElementById('kedb-true');
    kedbTrue.style.display = 'none';
    var feedbackSection = document.getElementById('feedback-section');
    feedbackSection.style.display = 'none';
}

function displayLoggedIncident(Http,form){
    
    form.userInputDescription.value = ''
    contentid.style.display = 'none';
    var incidentElement = document.getElementById('create-Incident');
    incidentElement.style.display = 'none';
    var kedbResponse = document.getElementById('kedb-response');
    kedbResponse.style.display = 'none'; // Uncomment before testing 
    var kedbResponse = document.getElementById('ticket-response');
    kedbResponse.style.display = 'block';
    var incident = document.getElementById('incident-id');
    if (Http.responseText.includes("Some thing went wrong", 0)) {
        incident.innerHTML = 'Sorry! Something went wrong. Please try after sometime.'
        incident.style.color = 'red';
        incident.style.fontSize = 'smaller';
    } else {
        incident.innerHTML = '<span id="incident-id" >'+
                'Incident has been created <br><b>'+ Http.responseText+ '</b></span><br><span class="thankyou">Thank you for contacting <br><b>'+applicationName+' Agent Assist.</b></span>';
    }
    var loader = document.getElementById('loader-id');
    loader.style.display = 'none';
    loadFeedbackSection();
}