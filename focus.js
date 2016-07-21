function a()
{
	alert("Test");
}
/*__________________________________________________*/
function radioBoxes(title,arr)
{
	s = "<div>";
	s = s + "<p>"+title+"</p>";
	for(i=0;i<arr.length;i++)
		s = s + "<input  name='rb" + i + "' type='radio'  />"+arr[i]+"</input>";//
	s=s+"</div>";
	//console.log(s);
	$( "body" ).append(s);
	
}
/*__________________________________________________*/
function line(parent)
{
	var x = document.createElement("HR");
	 parent = parent || document.body;
	parent.appendChild(x);
	return x;
}
/*__________________________________________________*/
function newLine(parent)
{
	var x = document.createElement("BR");
	parent = parent || document.body;
	parent.appendChild(x);
	return x;
}
/*__________________________________________________*/
function checkBoxes(title,arr)
{
	var s = "<div>";
	s = s + "<p>"+title+"</p>";
	for(i=0;i<arr.length;i++)
		s = s + "<input  name='rb" + i + "' type='checkbox'  >"+arr[i]+"</input>";//
	s=s+"</div>";
	//console.log(s);
	$( "body" ).append(s);
}
/*__________________________________________________*/
function range(title,val,id)
{
	var s = "<div>";
	s = s + "<p>"+title+"</p>";
	s = s + "<input type='range' value='"+val+"' id='"+id+"' >";
	s = s + "</div>";
	$( "body" ).append(s);
}
/*__________________________________________________*/
function list(parent,css)
{
	var x = document.createElement("UL");
    x.className =css;
	parent.appendChild(x);
	return x;
}
/*__________________________________________________*/
function listItem(parent,text,css)
{
	var x = document.createElement("LI");
    x.className =css;
	x.innerHTML=text;
	parent.appendChild(x);
	return x;
}
/*__________________________________________________*/
function Lists(parent,arrItems,css)
{
	var  l  = list(parent,css);
	
	var len = arrItems.length;
	for(i=0;i<len;i++)
		listItem(l,arrItems[i],css);
	
}
/*__________________________________________________*/
function image(parent,source,css)
{
	var x = document.createElement("IMG");
	x.src=source;
    x.className =css;
	parent.appendChild(x);
	return x;
}
/*__________________________________________________*/
function button(parent,title,css)
{
	var x = document.createElement("INPUT");
	x.setAttribute("type", "button");
	x.value= title;
    x.className =css;
	parent.appendChild(x);
	return x;
}
/*__________________________________________________*/
function label(parent,title,css)
{
	var x = document.createElement("DIV");
	x.innerHTML= title;
    x.className =css;
	parent.appendChild(x);
	return x;
}
/*__________________________________________________*/
function checkBox(parent,title,css)
{
	var x = document.createElement("INPUT");
	x.setAttribute("type", "checkbox");
	
    x.className =css;
	parent.appendChild(x);
	var t = document.createTextNode(title);
    document.body.appendChild(t);
	return x;
}
/*__________________________________________________*/
function table(parent,css)
{ 
	var x = document.createElement("TABLE");
    //x.setAttribute("id", id);
    x.className =css;
	parent.appendChild(x);
	return x;
}
/*__________________________________________________*/
function tableRow(table)
{
    var y = document.createElement("TR");
    //y.setAttribute("id", "myTr");
    return table.appendChild(y);
}
/*__________________________________________________*/
function tableCell(TableRow,content)
{
    var z = document.createElement("TD");
    var t = document.createTextNode(content);
    z.appendChild(t);
    return TableRow.appendChild(z);
}
/*__________________________________________________*/
function addEvent(element, event, fn) {
    if (element.addEventListener) {
        element.addEventListener(event, fn, false);
    } else {
        element.attachEvent("on" + event, function() {
            // set the this pointer same as addEventListener when fn is called
            return(fn.call(element, window.event));   
        });
    }
}
