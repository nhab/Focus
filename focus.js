function a()
{
	alert("Test");
}
var fnWizPages=[];//an array of functions that create pages
/*__________________________________________________*/
function wizard(parent,fnWizPages)
{
	 wizard1(parent,0,fnWizPages);
}
/*__________________________________________________*/
function wizard1(parent,i,fnWizPages)
{
	Clear(parent);
	fnWizPages[i](parent);
	btnNext = button (parent,"next","","button");
	btnNext.addEventListener('clicked', 
		function (e) {
			wizard1(parent,++i,fnWizPages);
		}  ,
	false);

	btnPrev = button (parent,"prev","","button");
	btnPrev.addEventListener('clicked', 
		function (e) {
			wizard1(parent,--i,fnWizPages);
		}  ,
	false);
}
/*__________________________________________________*/
function radioBoxes(parent,title,arrItems,css)
{
	var x = document.createElement("DIV");
    x.className =css;
	x.innerHTML=title;
	parent.appendChild(x);
	var len=arrItems.length;
	for(i=0;i<len;i++)
	{
		var x1 = document.createElement("input");
		x1.className =css;
		x1.type="radio";
		x1.style="display:inline-block;";
		x.appendChild(x1);
		label(x,arrItems[i],css);
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
function checkBoxes(parent,title,arrItems,css)
{
	var x = document.createElement("DIV");
    x.className =css;
	x.innerHTML=title;
	parent.appendChild(x);
	
	for(i=0;i<arrItems.length;i++)
	{
		var x1 = document.createElement("input");
		x1.className =css;
		x1.type="checkbox";
		x1.style="display:inline-block;";
		x.appendChild(x1);
		label(x,arrItems[i],css);
	}
	
	return x;
}
/*__________________________________________________*/
var objVal;
function range(parent,title,arrValues ,css)
{
	var x = document.createElement("INPUT");
	x.setAttribute("type", "range");
	x.setAttribute("min", arrValues[0]);
	x.setAttribute("max", arrValues[1]);
	x.setAttribute("value", arrValues[2]);
    x.className =css;
	
	var t = document.createTextNode(title);
    parent.appendChild(t);
	
	parent.appendChild(x);
	
	objVal = label(parent,"income");
	objVal.innerHTML=x.value;

	x.onchange=function(){
		var event = new Event('chang');  // (*)
		x.dispatchEvent(event);	
		objVal.innerHTML=x.value;
	
	};
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
	var l = document.createElement("UL");
    l.className =css;
	parent.appendChild(l);

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
function button(parent,title,onclickFunction,css)
{
	var x = document.createElement("INPUT");
	x.setAttribute("type", "button");
	x.value= title;
    x.className =css;
	x.onclick=onclickFunction;
	parent.appendChild(x);
	x.onclick=function(){
		var event = new Event('clicked');  // (*)
		x.dispatchEvent(event);	
	};
	return x;
}
/*__________________________________________________*/
function div(parent,css)
{
	var x = document.createElement("div");
    x.className =css;
	parent.appendChild(x);
	return x;
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
function label(parent,title,css)
{
	var x = document.createElement("DIV");
	x.innerHTML= title;
    x.className =css;
	x.style="display:inline-block; ";
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
function textBox(parent,title,css)
{
	var x = document.createElement("INPUT");
	x.setAttribute("type", "Text");
	
    x.className =css;
	x.value=title;
    parent.appendChild(x);
	return x;
}
/*__________________________________________________*/
function dropDown(parent,title,arrItems,css)
{
	var x = document.createElement("SELECT");
	var len=arrItems.length;
   	for(i=0;i<len;i++)
	{
		var option = document.createElement("option");
		option.text = arrItems[i];
		x.add(option);
	}
	parent.appendChild(x);
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
function AddHtml2Body(parent,sHtml)
{
	
	parent.insertAdjacentHTML( 'beforeend', sHtml );
	
}
/*__________________________________________________*/
function Addscript2Head(scriptUrl)
{
	var script = document.createElement('script');
	script.type = 'text/javascript';
	script.src = scriptUrl;    

	var h=	document.getElementsByTagName('head');
	if(h.length>0 )
		h[0].appendChild(script);
	else
		document.createElement('head').appendChild(script);

}
/*__________________________________________________*/

function Clear(node)
{

	while (node.firstChild) {
		node.removeChild(node.firstChild);
	}
	return node;
}

