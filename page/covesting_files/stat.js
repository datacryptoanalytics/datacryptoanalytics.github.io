(function(){'use-strict';function a(){var a=function(a){return"[object SafariRemoteNotification]"===a.toString()}(!window.safari||safari.pushNotification),b=window.navigator.userAgent,c=b.indexOf("MSIE"),d=b.indexOf("Trident/");return 0<c||0<d||a}var b=-1<location.href.indexOf("ccdebug"),c=b?console.log:()=>{},d="undefined"!=typeof window&&"function"==typeof window.define&&window.define.amd&&window.require,e=d?window.require:function(a,b){var c=document.createElement("script");c.onload=b,c.src=a,document.head.appendChild(c)};c("Has requirejs",d),c("installScript",e),c("notSupported",a()),e(["https://cdnjs.cloudflare.com/ajax/libs/fingerprintjs2/2.0.0/fingerprint2.min.js"],function(b){if(d&&(window.Fingerprint2=b),c("notSupported() || !navigator.cookieEnabled",a()||!navigator.cookieEnabled),c("After fingerprint, inside install script \"this\" object",this),c("!navigator.cookieEnabled:",!navigator.cookieEnabled),a()||!navigator.cookieEnabled){try{Fingerprint2.getV18(function(a){var b=decodeURI(document.referrer),c={referrer:b,Fp:a,href:window.location.href},d=new XMLHttpRequest;d.open("POST","https://monitor.clickcease.com/monitor/api/statsV2",!0),d.send(JSON.stringify(c))})}catch(a){console.log(a)}return c("Sent fingerprint and return, cc related files would not be fetched")}e(["https://www.clickcease.com/monitor/cc-snapshot.js"],function(a){d&&(window.ccWebRecorder=a),c("cc-snapshot.js loaded"),e(["https://www.clickcease.com/monitor/cc-recorder.js"],function(a){d&&(window.ccWebRecorderInit=a),c("cc-recorder.js loaded"),c("The end.")})})})})();