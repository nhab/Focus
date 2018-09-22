function IncludeJS(jsFileName)
{
    var lib1= document.createElement("script");
    lib1.src =jsFileName; 
//debugger;
/*
    for (i=0;i< document.getElementsByTagName("head")[0].childNodes.length;i++) 
        if (document.getElementsByTagName("head")[0].childNodes[i].name == name) { // 1 == Element
            return;
        }*/
    document.getElementsByTagName("head")[0].appendChild(lib1);
}

IncludeJS("focusBase.js");  
IncludeJS("focusComposite.js");
