
/*
The JavaScript navigator object is used for browser detection. It can be used to get browser information such as appName, appCodeName, userAgent etc.

    NAVIGATOR properties include:
     -appName, appVersion,
     -appCodeName, userAgent,
     - cookieEnabled, cpuClass,
     - cpuLine, platform, systemLanguage
     - browserLanguage, plugins

this allows me to collect information about a visitor to my page
*/


let val;

// NAVIGATOR OBJECT: The navigator object contains information about the browser.
val = window.navigator.geolocation;
val = window.navigator.appName;
val = window.navigator.appVersion;
val = window.navigator.userAgent;
val = window.navigator.platform;
val = window.navigator.vendor;
console.log(val)
