(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "from chat app component??\r\n\r\n<chat-dialog></chat-dialog>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");
/* harmony import */ var _chat_chat_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chat/chat.module */ "./src/app/chat/chat.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]
            ],
            entryComponents: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _chat_chat_module__WEBPACK_IMPORTED_MODULE_5__["ChatModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeModule"]
            ],
            providers: [{
                    provide: 'plugins',
                    useValue: [{
                            name: 'app-root',
                            component: _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]
                        }],
                    multi: true
                }],
            exports: [
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/chat/chat-dialog/chat-dialog.component.css":
/*!************************************************************!*\
  !*** ./src/app/chat/chat-dialog/chat-dialog.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**.container{\r\noverflow: scroll;\r\n/* or \r\noverflow-x: scroll;\r\noverflow-y: scroll;\r\n}\r\n*/\r\n\r\n.button {\r\n    margin: 10px;\r\n    font-size: 18px;\r\n    padding: 10px 20px;\r\n    border-radius: 10px;\r\n    margin-bottom: 28px;\r\n    color: white;\r\n    background-color: rgb(2, 204, 2);\r\n}\r\n\r\n.bubble {\r\n    margin: 40px;\r\n    display: inline-block;\r\n    position: relative;\r\n    width: 200px;\r\n    height: auto;\r\n    background-color: lightyellow;\r\n}\r\n\r\n.tri-right.border.btm-right-in:before {\r\n    content: ' ';\r\n    position: absolute;\r\n    width: 0;\r\n    height: 0;\r\n    left: auto;\r\n    right: 30px;\r\n    bottom: -40px;\r\n    border: 20px solid;\r\n    border-color: #666 #666 transparent transparent;\r\n}\r\n\r\n.tri-right.btm-right-in:after {\r\n    content: ' ';\r\n    position: absolute;\r\n    width: 0;\r\n    height: 0;\r\n    left: auto;\r\n    right: 38px;\r\n    bottom: -20px;\r\n    border: 12px solid;\r\n    border-color: lightyellow lightyellow transparent transparent;\r\n}\r\n\r\n.init-message {\r\n    background-color: rgb(218, 218, 218);\r\n    color: black;\r\n    border-radius: 10px;\r\n    text-align: center;\r\n    min-height: 50px;\r\n    font-size: 17px;\r\n    padding-top: 10px;\r\n    width: 400px;\r\n    margin-top: 15px;\r\n    margin-left: 17px;\r\n    padding-left: -16px;\r\n    padding-right: 10px;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.first-row {\r\n    display: inline-block;\r\n}\r\n\r\n.second-row {\r\n    display: inline-block;\r\n}\r\n\r\n.third-row {\r\n    display: inline-block;\r\n}\r\n\r\n.fourth-row {\r\n    float: right;\r\n    display: inline-block;\r\n}\r\n\r\n.init-button-message {\r\n    background-color: white;\r\n    color: black;\r\n    text-align: center;\r\n    min-height: 50px;\r\n    font-size: 10px;\r\n    /* padding-top: 20px; */\r\n    margin-top: 20px;\r\n    margin-left: 22px;\r\n    padding-left: 10px;\r\n    padding-right: 10px;\r\n}\r\n\r\n.init-button-message .badge {\r\n    position: absolute;\r\n    padding: 5px 16px;\r\n    border-radius: 50%;\r\n    background: red;\r\n    color: white;\r\n    top: 150px;\r\n    margin-left: -9px;\r\n}\r\n\r\n.message.to {\r\n    width: 65%;\r\n    background-color: #009fc7;\r\n    color: white;\r\n    border-radius: 10px;\r\n    text-align: center;\r\n    min-height: 35px;\r\n    font-size: 20px;\r\n    padding-top: 5px;\r\n    margin-bottom: 5px;\r\n    padding-bottom: 6px;\r\n    padding-top: 10px;\r\n    font-family: PTSans-Regular, sans-serif;\r\n    padding-right: 15px;\r\n    padding-left: 15px;\r\n    display: inline-block;\r\n}\r\n\r\n.message.from {\r\n    background-color: rgb(236, 236, 236);\r\n    color: black;\r\n    border-radius: 10px;\r\n    text-align: left;\r\n    min-height: 35px;\r\n    font-size: 20px;\r\n    padding-top: 5px;\r\n    margin-bottom: 5px;\r\n    margin-left: 10px;\r\n    font-family: PTSans-Regular, sans-serif;\r\n    width: -webkit-fit-content;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n    padding-right: 15px;\r\n}\r\n\r\nbody {\r\n    font-family: Arial;\r\n}\r\n\r\n* {\r\n    box-sizing: border-box;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\nh2 {\r\n    position: absolute;\r\n    left: 50%;\r\n    top: 25%;\r\n    -webkit-transform: translate(-50%);\r\n            transform: translate(-50%);\r\n    font-size: 50px;\r\n    color: rgba(255, 255, 255, 1);\r\n    font-family: Comic Sans MS;\r\n}\r\n\r\n.open-button {\r\n    background-color: rgba (255, 255, 255, 0.8);\r\n    color: rgba (0, 0, 0, 0.7);\r\n    padding: 16px 20px;\r\n    border: none;\r\n    cursor: pointer;\r\n    opacity: 0.8;\r\n    position: fixed;\r\n    button: 23px;\r\n    right: 28px;\r\n    width: 280 px;\r\n}\r\n\r\n.chat-popup {\r\n    position: fixed;\r\n    bottom: 0;\r\n    right: 5px;\r\n    border: 0px solid black;\r\n    background-color: rgb(255, 255, 255);\r\n    z-index: 9;\r\n}\r\n\r\n.font-container {\r\n    max-width: 400px;\r\n    padding: 10px;\r\n    background-color: white;\r\n}\r\n\r\n.form-container textarea {\r\n    width: 100%;\r\n    padding: 15px;\r\n    margin: 5px 0 22px 0;\r\n    border: none;\r\n    background: #f1f1f1;\r\n    min-height: 200px;\r\n}\r\n\r\n.greetings {\r\n    position: relative;\r\n    font-size: 24px!important;\r\n    font-family: PTSans-Regular, sans-serif;\r\n    font-weight: 700;\r\n    letter-spacing: 0;\r\n}\r\n\r\n.size-20 {\r\n    margin-right: 10px;\r\n    margin-left: 5px;\r\n    position: relative;\r\n    color: #041e41;\r\n    font-size: 20px!important;\r\n    font-family: PTSans-Regular, sans-serif;\r\n    font-weight: 700;\r\n    letter-spacing: 0;\r\n}\r\n\r\n.greetings.main {\r\n    background: #009fc7;\r\n    padding: 10px;\r\n    color: white;\r\n    border-radius: 10px 10px 0px 0px;\r\n}\r\n\r\n.greetings.second {\r\n    font-size: 19px !important;\r\n    font-weight: 500;\r\n    padding-left: 10px;\r\n}\r\n\r\n.window {\r\n    overflow: auto;\r\n    padding-bottom: 1px;\r\n    border-radius: 10px;\r\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n}\r\n\r\n/* .btn:hover {background-color: rgb(241, 241, 241);} */\r\n\r\n.btn {\r\n    border: none;\r\n    background-color: rgb(255, 255, 255);\r\n    color: black;\r\n    padding-bottom: 1%;\r\n    padding-top: 1%;\r\n}\r\n\r\n.disabledBtn {\r\n    background-color: rgb(219, 216, 216);\r\n    opacity: 0.3;\r\n}\r\n\r\n.width-30 {\r\n    width: 30%;\r\n}"

/***/ }),

/***/ "./src/app/chat/chat-dialog/chat-dialog.component.html":
/*!*************************************************************!*\
  !*** ./src/app/chat/chat-dialog/chat-dialog.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<head>\n    <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\n</head>\n\n<section class=\"container\">\n\n    <div class=\"chat-popup\" id=myform [ngClass]=\"{'width-30':showWindow}\">\n        <div *ngIf=\"!showWindow \">\n            <button style=\"float: right; \" class=\"button \" (click)=\"displayWindow() \" type=\"button \">Help!</button>\n        </div>\n        <div *ngIf=\"showWindow \" class=\"window \" style=\"height: 450px;\">\n\n            <div class=\"greetings main \">Hi! I am D Agent Assist\n                <span style=\"right: 20px; position: fixed; \">\n\t\t\t\t\t<button style='font-size: 26px;\n\t\t\t\t\t\tfont-weight: bolder;position: relative;margin-right: 30px;border: none;\n\t\t\t\t\t\t\tbackground-color: #009fc7;' (click)=\"closeWindow() \">&#x2198;</button>\n\t\t\t\t\t<button style='border: none;font-size: 26px;\n\t\t\t\t\t\t\tbackground-color: #009fc7;' (click)=\"exit() \">&#10006;</button></span></div>\n            <h3 class=\"size-20 \">How can I help you today?</h3>\n            <br>\n            <div>\n                <div *ngIf=\"issueData.content \" id=\"fourth-row \">\n                    <button *ngIf=\"backList.length> 1\" class=\"button btn\" (click)=\"back()\" type=\"button\">\n\t\t\t\t\t<fa-icon [icon]=\"faArrowCircleLeft\"></fa-icon>\n\t\t\t\t</button>\n                    <span style=\"border-radius: 20px;background-color: #eeeeee;\n\t\t\t\tcolor: #2a3466;font-weight: 700;\" class=\"message to\">{{issueData.content}}</span>\n                    <button *ngIf=\"backList.length > 1\" class=\"button btn\" (click)=\"forward()\" type=\"button\">\n\t\t\t\t\t<fa-icon [icon]=\"faArrowCircleRight\"></fa-icon>\n\t\t\t\t</button>\n                </div>\n                <ng-container *ngFor=\"let opt of issueData.options\">\n                    <li style=\"list-style: none;color: #11294b;\" id=\"fourth-row\" class=\"message from\" (click)=\"next(opt)\">\n                        <fa-icon style=\"margin-left: 10px;\" [icon]=\"faAngleRight\"></fa-icon> {{opt.content}}\n                    </li>\n                </ng-container>\n            </div>\n            <ng-container *ngIf=\"!issueData.options\" id=\"fourth-row\">\n                <input rows=\"2\" cols=\"20\" name=\"usrtxt\" wrap=\"hard\" placeholder=\"Tell us about your issue here\" style=\"height: 45px;width: 65%;background-color: #F5F5F5;font-weight: 700;border: 2px solid;margin-left: 15%;\" [(ngModel)]=\"longDescription\" type=\"textarea\">\n                <button class=\"button btn\" (click)=\"logIncident()\" type=\"button\">\n\t\t\t\t\t<fa-icon [icon]=\"faArrowCircleRight\"></fa-icon>\n                </button> {{incidentId}}\n            </ng-container>\n\n        </div>\n\n    </div>\n</section>"

/***/ }),

/***/ "./src/app/chat/chat-dialog/chat-dialog.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/chat/chat-dialog/chat-dialog.component.ts ***!
  \***********************************************************/
/*! exports provided: ChatDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatDialogComponent", function() { return ChatDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _chat_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../chat.service */ "./src/app/chat/chat.service.ts");
/* harmony import */ var rxjs_add_operator_scan__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/scan */ "./node_modules/rxjs-compat/_esm5/add/operator/scan.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _assets_assistConstants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../assets/assistConstants */ "./src/assets/assistConstants.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ChatDialogComponent = /** @class */ (function () {
    function ChatDialogComponent(chat) {
        this.chat = chat;
        this.faCoffee = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faCoffee"];
        this.faAngleRight = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faAngleRight"];
        this.faArrowCircleLeft = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faArrowCircleLeft"];
        this.faArrowCircleRight = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faArrowCircleRight"];
        this.issueData = new _chat_service__WEBPACK_IMPORTED_MODULE_1__["Issue"]();
        this.backList = [];
        this.forwardList = [];
        this.enableForward = false;
    }
    ChatDialogComponent.prototype.ngOnInit = function () {
        var dataJson = JSON.parse('{\"options\":[{\"content\":\"Issue With the issuance of Policy\",\"options\":[{\"content\":\"Purchase failed\"},{\"content\":\"Payment account invalid\"},{\"content\":\"Discount not applied\"}]},{\"content\":\"Issue With Quote\",\"options\":[{\"content\":\"Personal Auto\"},{\"content\":\"Homeowners\"},{\"content\":\"Personel Umbrella\"},{\"content\":\"option 4\"}]},{\"content\":\"Issue With Policy Search\",\"options\":[{\"content\":\"Account not found\"},{\"content\":\"Policy number unavailable\"}]},{\"content\":\"Issue With document Generation\",\"options\":[{\"content\":\"Not able to download document\"},{\"content\":\"Wrong information\"}]},{\"content\":\"Issue With Premium\",\"options\":[{\"content\":\"Charged more than quoted price\"},{\"content\":\"Discounts not applied\"}]},{\"content\":\"Other\",\"options\":[{\"content\":\"Thank you for connecting Agent assist.\"}]}]}');
        //this.issueData = Object.assign(new Issue, dataJson);
        if (window.location.href.indexOf('driver') > -1) {
            this.issueData = _assets_assistConstants__WEBPACK_IMPORTED_MODULE_4__["driverIssues"];
        }
        else if (window.location.href.indexOf('vehicle') > -1) {
            this.issueData = _assets_assistConstants__WEBPACK_IMPORTED_MODULE_4__["VehicleIssues"];
        }
        else {
            this.issueData = _assets_assistConstants__WEBPACK_IMPORTED_MODULE_4__["issueListMaster"];
        }
        this.backList = [this.issueData];
        console.log(window.location.href);
    };
    ChatDialogComponent.prototype.displayWindow = function () {
        this.showWindow = true;
    };
    ChatDialogComponent.prototype.closeWindow = function () {
        this.showWindow = false;
    };
    ChatDialogComponent.prototype.exit = function () {
        this.showWindow = false;
        var dataJson = JSON.parse('{\"options\":[{\"content\":\"Issue With the issuance of Policy\",\"options\":[{\"content\":\"Purchase failed\"},{\"content\":\"Payment account invalid\"},{\"content\":\"Discount not applied\"}]},{\"content\":\"Issue With Quote\",\"options\":[{\"content\":\"Personal Auto\"},{\"content\":\"Homeowners\"},{\"content\":\"Personel Umbrella\"},{\"content\":\"option 4\"}]},{\"content\":\"Issue With Policy Search\",\"options\":[{\"content\":\"Account not found\"},{\"content\":\"Policy number unavailable\"}]},{\"content\":\"Issue With document Generation\",\"options\":[{\"content\":\"Not able to download document\"},{\"content\":\"Wrong information\"}]},{\"content\":\"Issue With Premium\",\"options\":[{\"content\":\"Charged more than quoted price\"},{\"content\":\"Discounts not applied\"}]},{\"content\":\"Other\",\"options\":[{\"content\":\"Thank you for connecting Agent assist.\"}]}]}');
        this.issueData = Object.assign(new _chat_service__WEBPACK_IMPORTED_MODULE_1__["Issue"], dataJson);
    };
    ChatDialogComponent.prototype.next = function (selectedOption) {
        if (this.forwardList[0] !== selectedOption) {
            this.enableForward = false;
            console.log(this.forwardList[0]);
            console.log(selectedOption);
        }
        this.backList.splice(0, 0, selectedOption);
        this.issueData = this.backList[0];
    };
    ChatDialogComponent.prototype.back = function () {
        this.forwardList.splice(0, 0, this.backList[0]);
        if (this.backList.length > 1) {
            this.backList.splice(0, 1);
        }
        this.enableForward = true;
        this.issueData = this.backList[0];
    };
    ChatDialogComponent.prototype.forward = function () {
        if (this.enableForward === true) {
            this.backList.splice(0, 0, this.issueData);
            this.issueData = this.forwardList[0];
        }
    };
    ChatDialogComponent.prototype.logIncident = function () {
        var _this = this;
        this.chat.logIncident(this.issueData.content, this.longDescription).subscribe(function (result) {
            _this.incidentId = result;
        });
        this.longDescription = '';
    };
    ChatDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'chat-dialog',
            template: __webpack_require__(/*! ./chat-dialog.component.html */ "./src/app/chat/chat-dialog/chat-dialog.component.html"),
            styles: [__webpack_require__(/*! ./chat-dialog.component.css */ "./src/app/chat/chat-dialog/chat-dialog.component.css")]
        }),
        __metadata("design:paramtypes", [_chat_service__WEBPACK_IMPORTED_MODULE_1__["ChatService"]])
    ], ChatDialogComponent);
    return ChatDialogComponent;
}());



/***/ }),

/***/ "./src/app/chat/chat.module.ts":
/*!*************************************!*\
  !*** ./src/app/chat/chat.module.ts ***!
  \*************************************/
/*! exports provided: ChatModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatModule", function() { return ChatModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _chat_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chat.service */ "./src/app/chat/chat.service.ts");
/* harmony import */ var _chat_dialog_chat_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chat-dialog/chat-dialog.component */ "./src/app/chat/chat-dialog/chat-dialog.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







// import { FontAwesomeModule } from '@fortawesome/fontawesome-svg-core';
// import { FontAwesomeModule } from '@fortawesome/free-solid-svg-icons';
var ChatModule = /** @class */ (function () {
    function ChatModule() {
    }
    ChatModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]
            ],
            declarations: [_chat_dialog_chat_dialog_component__WEBPACK_IMPORTED_MODULE_3__["ChatDialogComponent"]],
            exports: [_chat_dialog_chat_dialog_component__WEBPACK_IMPORTED_MODULE_3__["ChatDialogComponent"]],
            providers: [_chat_service__WEBPACK_IMPORTED_MODULE_2__["ChatService"]]
        })
    ], ChatModule);
    return ChatModule;
}());



/***/ }),

/***/ "./src/app/chat/chat.service.ts":
/*!**************************************!*\
  !*** ./src/app/chat/chat.service.ts ***!
  \**************************************/
/*! exports provided: Message, Issue, ChatService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Message", function() { return Message; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Issue", function() { return Issue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatService", function() { return ChatService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Message = /** @class */ (function () {
    function Message(content, sentBy) {
        this.content = content;
        this.sentBy = sentBy;
    }
    return Message;
}());

var Issue = /** @class */ (function () {
    function Issue() {
    }
    return Issue;
}());

var ChatService = /** @class */ (function () {
    function ChatService(http) {
        this.http = http;
    }
    ChatService.prototype.logIncident = function (shortDesc, longDesc) {
        return this.http.get('http://localhost:8080/api/create?shortDesc=' + shortDesc + '&longDesc=' + longDesc);
    };
    ChatService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ChatService);
    return ChatService;
}());



/***/ }),

/***/ "./src/assets/assistConstants.ts":
/*!***************************************!*\
  !*** ./src/assets/assistConstants.ts ***!
  \***************************************/
/*! exports provided: driverIssues, VehicleIssues, issueListMaster */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "driverIssues", function() { return driverIssues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehicleIssues", function() { return VehicleIssues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "issueListMaster", function() { return issueListMaster; });
var driverIssues = {
    'options': [{
            'content': 'Driving License'
        },
        {
            'content': 'Driver Status'
        },
        {
            'content': 'Secondary Named Insured'
        }
    ]
};
var VehicleIssues = {
    'options': [{
            'content': 'Driving License'
        },
        {
            'content': 'Driver Status'
        },
        {
            'content': 'Secondary Named Insured'
        }
    ]
};
var issueListMaster = {
    'options': [{
            'content': 'Issue With the issuance of Policy',
            'options': [{
                    'content': 'Purchase failed'
                },
                {
                    'content': 'Payment account invalid'
                },
                {
                    'content': 'Discount not applied'
                }
            ]
        },
        {
            'content': 'Issue With Quote',
            'options': [{
                    'content': 'Personal Auto'
                },
                {
                    'content': 'Homeowners'
                },
                {
                    'content': 'Personel Umbrella'
                },
                {
                    'content': 'Other'
                }
            ]
        },
        {
            'content': 'Issue With Policy Search',
            'options': [{
                    'content': 'Account not found'
                },
                {
                    'content': 'Policy number unavailable'
                }
            ]
        },
        {
            'content': 'Issue With document Generation',
            'options': [{
                    'content': 'Not able to download document'
                },
                {
                    'content': 'Wrong information'
                }
            ]
        },
        {
            'content': 'Issue With Premium',
            'options': [{
                    'content': 'Charged more than quoted price'
                },
                {
                    'content': 'Discounts not applied'
                }
            ]
        },
        {
            'content': 'Other'
        }
    ]
};


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    dialogflow: {
        //angularBot : 'b27f0c36a0b740a89a54c5a99216199a'
        angularBot: 'd61c405fdb4c4f7baee2f995570502ff '
    }
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\tpandit\Desktop\Plugin\SaConnect\SAChat\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map