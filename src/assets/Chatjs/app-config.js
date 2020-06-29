var applicationNameVar = 'D'
var infoElimentsVar = ['searchkey1', 'searchkey2'];
var infoLabelsVar = ['Reference ID', 'Quote ID'];
var domainVar = 'http://localhost:4200/';
var logSearchKeyVar = 'splunk';
var noHelpOptionVal = 3;
var lobKey = 'auto';
var searchKey = 1;
var screenKeyDriver = 'driver';
var screenKeyVehicle = 'vehicle';




// var applicationNameVar = 'Pekin'
// var infoElimentsVar = ['searchkey1', 'searchkey2'];
// var infoLabelsVar = ['Reference ID', 'Quote ID'];
// var domainVar = 'http://localhost:4200/';
// var logSearchKeyVar = 'splunk';
// var issueOptionsVar = 3;
// var lobKey = 'auto';
// var searchKey = 1;
// var screenKeyDriver = 'driver';
// var screenKeyVehicle = 'vehicle';

var mockResponse = true;
var KEDBResponse = '{"error":["915  2020-01-07 04:44:01,578  WARN Edge plotx:571bbeb-pc:e6c22f9 RegularJsonRpcCallProcessor  edge.jsonrpc.exception.JsonRpcApplicationException: Dto validation error  at edge.jsonrpc.endpoint.InvokableMethod.call(InvokableMethod.gs:28)  at edge.servlet.jsonrpc.JsonRpcMethod.call(JsonRpcMethod.gs:39)  at edge.servlet.jsonrpc.RegularJsonRpcCallProcessor$block_1_.invoke(RegularJsonRpcCallProcessor.gs:72)  at com.stateauto.edge.JsonRpcMethodCallProcessorChain.process(JsonRpcMethodCallProcessorChain.gs:22)  at edge.servlet.jsonrpc.RegularJsonRpcCallProcessor.process(RegularJsonRpcCallProcessor.gs:72)  at edge.servlet.jsonrpc.JsonRpcEndpointProcessor.handleCall(JsonRpcEndpointProcessor.gs:79)  at edge.servlet.JsonRpcServlet$block_1_.invoke(JsonRpcServlet.gs:51)  at gw.lang.function.Function0.invokeWithArgs(Function0.java:14)  at __proxy.generated.blocktointerface.ProxyForGWRunnable.run(Unknown Source)  at com.guidewire.pl.system.locale.CurrentLocaleProviderImpl.runAsCurrentLanguageAndLocale(CurrentLocaleProviderImpl.java:128)  at gw.api.util.LocaleUtil.runAsCurrentLocaleAndLanguage(LocaleUtil.java:241)  at gw.api.util.LocaleUtil.runAsCurrentLanguage(LocaleUtil.java:211)  at edge.PlatformSupport.Locale.runWithLocale(Locale.gs:15)  at edge.servlet.JsonRpcServlet.doPost(JsonRpcServlet.gs:47)  at javax.servlet.http.HttpServlet.service(HttpServlet.java:650)  at gw.servlet.AbstractGWAuthServlet.service(AbstractGWAuthServlet.gs:32)  at gw.servlet.AbstractBasicAuthenticationServlet.service(AbstractBasicAuthenticationServlet.gs:19)  at javax.servlet.http.HttpServlet.service(HttpServlet.java:731)  at com.guidewire.pl.system.servlet.GosuServlet.service(GosuServlet.java:109)  at javax.servlet.http.HttpServlet.service(HttpServlet.java:731)  at org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:303)  at org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:208)  at org.apache.tomcat.websocket.server.WsFilter.doFilter(WsFilter.java:52)  at org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:241)  at org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:208)  at org.apache.catalina.core.StandardWrapperValve.invoke(StandardWrapperValve.java:220)  at org.apache.catalina.core.StandardContextValve.invoke(StandardContextValve.java:122)  at org.apache.catalina.authenticator.AuthenticatorBase.invoke(AuthenticatorBase.java:505)  at org.apache.catalina.core.StandardHostValve.invoke(StandardHostValve.java:169)  at org.apache.catalina.valves.ErrorReportValve.invoke(ErrorReportValve.java:103)  at org.apache.catalina.valves.AccessLogValve.invoke(AccessLogValve.java:956)  at org.apache.catalina.core.StandardEngineValve.invoke(StandardEngineValve.java:116)  at org.apache.catalina.connector.CoyoteAdapter.service(CoyoteAdapter.java:436)  at org.apache.coyote.http11.AbstractHttp11Processor.process(AbstractHttp11Processor.java:1078)  at org.apache.coyote.AbstractProtocol$AbstractConnectionHandler.process(AbstractProtocol.java:625)  at org.apache.tomcat.util.net.JIoEndpoint$SocketProcessor.run(JIoEndpoint.java:316)  at java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1145)  at java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:615)  at org.apache.tomcat.util.threads.TaskThread$WrappingRunnable.run(TaskThread.java:61)  at java.lang.Thread.run(Thread.java:745)","915  2020-01-07 04:44:01,577 ERROR edge.jsonrpc.endpoint.RpcMethod plotx:571bbeb-pc:e6c22f9 quoteDTO:DraftData.Lobs.Homeowners.YourHome.IsHistroricalHome -> This is a required field   quoteDTO:DraftData.Lobs.Homeowners.YourHome.ExoticPet_Ext -> This is a required field   quoteDTO:DraftData.Lobs.Homeowners.YourHome.ConvictedOfArson_Ext -> This is a required field   quoteDTO:DraftData.Lobs.Homeowners.YourHome.IsforeclosureProceedingHome -> This is a required field","915  2020-01-07 04:44:01,577 ERROR Edge plotx:571bbeb-pc:e6c22f9 InvokableMethod Dto validation error"],"status":null,"ticketNumber":"RUNPCBC-23051","fixVersion":null,"userInputDescription":null,"errorSuggestion":["MSB Down","Replacement cost not found","Replacement cost null"],"errorWorkaround":"Add spouse details with valid license number.","notSupported":false,"errorPresentinKEDB":true,"ErrorCode":"MTEx0","ErrorDescription":"PLConnectSupport - 901 Error - DTO Validation Error Due To YourHome.FireDistrictPlaceCode,message:This is a required field"}';
var HelpResponse = '["License number invalid","Spouse validation","Unable to add multiple drivers","Unable to go to next after adding spouse","Address Scrubbing failed"]';






var test = 'connected';