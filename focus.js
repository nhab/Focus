function a()
{
	alert("Test");
}
/*__________________________________________________*/
function radioBoxes(parent,css,title,arr)
{
	
	var x = document.createElement("DIV");
    x.className =css;
	x.innerHTML=title;
	parent.appendChild(x);
	
	for(i=0;i<arr.length;i++)
	{
		var x1 = document.createElement("input");
		x1.className =css;
		x1.type="radio";
		x1.style="display:inline-block;";
		x.appendChild(x1);
		label(x,arr[i],css);
	}
	
	return x;
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
function checkBoxes(parent,css,title,arr)
{
	var x = document.createElement("DIV");
    x.className =css;
	x.innerHTML=title;
	parent.appendChild(x);
	
	for(i=0;i<arr.length;i++)
	{
		var x1 = document.createElement("input");
		x1.className =css;
		x1.type="checkbox";
		x1.style="display:inline-block;";
		x.appendChild(x1);
		label(x,arr[i],css);
	}
	
	return x;
}
/*__________________________________________________*/
var objVal;
function range(parent,title,css,min,max,val)
{
	var x = document.createElement("INPUT");
	x.setAttribute("type", "range");
	x.setAttribute("min", min);
	x.setAttribute("max", max);
	x.setAttribute("value", val);
    x.className =css;
	
	var t = document.createTextNode(title);
    //document.body.appendChild(t);
	
	parent.appendChild(x);
	
	objVal = label(parent,"income");
	objVal.innerHTML=x.value;
	

	var evt = $.Event('changed');
    evt.val = x.value;

    $(window).trigger(evt);
	x.onchange=function(){
		var event = new Event('chang');  // (*)
		x.dispatchEvent(event);	
		objVal.innerHTML=x.value;
	
	};
	return x;
	
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
	x.style="display:inline-block;";
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
function simpleDatePicker(parent,title)
	{
		var x = document.createElement("DIV");
		var lbl = document.createElement("DIV");
		
		objVal = label(x,title);
		//load year
		var ddY=document.createElement("SELECT");
		
		for(i=1850;i<=2100;i++)
		{
			var option = document.createElement("option");
			option.text = i.toString();
			ddY.add(option);
		}
		x.appendChild(ddY);
		
		//load mon
		var ddM=document.createElement("SELECT");
		
		for(i=1;i<=12;i++)
		{
			var option = document.createElement("option");
			option.text = i.toString();
			ddM.add(option);
		}
		x.appendChild(ddM);
		
		//load day
		var ddD=document.createElement("SELECT");
		
		for(i=1;i<=31;i++)
		{
			var option = document.createElement("option");
			option.text = i.toString();
			ddD.add(option);
		}
		x.appendChild(ddD);
		parent.appendChild(x);
		return x;
	}
/*__________________________________________________*/
function Clear(node)
{

	while (node.firstChild) {
		node.removeChild(node.firstChild);
	}
	return node;
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
	
	if(content!="" && content!=undefined)
	{
		var t = document.createTextNode(content);
		z.appendChild(t);
	}
    TableRow.appendChild(z);
	return z;
}
/*__________________________________________________*/
function link(parent,title,url,css)
{
	var x = document.createElement("A");
	x.setAttribute("href", url);
	x.innerHTML=title;
    x.className =css;
	parent.appendChild(x);
    
	return x;
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
