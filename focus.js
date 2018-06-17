/*
function loadScript(url, callback)
{
    // Adding the script tag to the head as suggested before
    var head    = document.getElementsByTagName('head')[0];
    var script  = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;

    // Then bind the event to the callback function.
    // There are several events for cross browser compatibility.
    script.onreadystatechange = callback;
    script.onload = callback;

    // Fire the loading
    head.appendChild(script);
}
var myPrettyCode = function() {

   // Here, do what ever you want
};
debugger;
loadScript("focusBase.js", myPrettyCode);
loadScript("focusComposite.js", myPrettyCode);
*/
var lib1= document.createElement("script");
lib1.src = "focusBase.js";  //saved in "other js" folder
document.getElementsByTagName("head")[0].appendChild(lib1);

var lib2 = document.createElement("script");
lib2.src = "focusComposite.js";  //saved in "other js" folder
document.getElementsByTagName("head")[0].appendChild(lib2);
