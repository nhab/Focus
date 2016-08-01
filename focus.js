function a()
{
	alert("Test");
}
var fnWizPages=[];//an array of functions that create pages

/*__________________________________________________*/
function wizard(parent,fnWizPages,data)
{
	 return wizard1(parent,0,fnWizPages,data);
}
/*__________________________________________________*/
function wizard1(parent,i,fnWizPages,data)
{
	Clear       ( parent);

	data=fnWizPages[i](parent,data)  ;
			
	if(i<fnWizPages.length-1)
	{
		btnNext = button (parent,"next","","button");
		btnNext.addEventListener('clicked', 
		function (e) {
			var event = new Event('nextClicked');
			this.dispatchEvent(event);
			console.log(e.target);
	
			data= wizard1(parent,++i,fnWizPages,data);
		}
		,	false );
	};

	if(i>0)
	{
		btnPrev = button (parent,"prev","","button");
		btnPrev.addEventListener('clicked', 
			function (e) {
		var event = new Event('prevClicked');
		this.dispatchEvent(event);
		console.log("prev pressed:",data);	
		data= wizard1(parent,--i,fnWizPages,data);
		}
		,	false);
	};
	
	return data;
}



/*__________________________________________________*/

function radioBoxes(parent,title,arrItems,css,radioBoxesModel)//radioBoxesModel has selectedIndex property of type int
{
	var x = document.createElement("DIV");
    x.className =css;
	x.innerHTML=title;
	parent.appendChild(x);
	var len=arrItems.length;
	var sName= "radio"+Math.floor((1 + Math.random()) * 0x1000000).toString();
	
	for(i=0;i<len;i++)
	{		
		var x1 = document.createElement("input");
		x1.className =css;
		x1.type="radio";
		x1.style="display:inline-block;";
		x1.id="rb"+i;
		
		x1.name=sName;
		/*
		if(radioBoxesModel.selectedIndex==i)
		{
			x1.checked="checked";			
		}
		*/
		x1.onchange=function(){
			if(x1.checked=="checked")
			{
				var event = new Event('change');
				event.selected = x1.id.substring(2);
				x.dispatchEvent(event);	
			  	
				//radioBoxesModel.selectedIndex=	x1.id.substring(2);
			  
			}
		};
		x.appendChild(x1);
		label(x,arrItems[i],css);
	}
	
	return x;
}

function radioBoxes_set(radioboxes,indx)
{
	var len=radioboxes.children.length;
	var id="rb"+indx;
	for(i=0;i<len;i++)
		if(radioboxes.children[i].id==id)
			radioboxes.children[i].checked=true;
	console.log(radioboxes);
}
/*__________________________________________________*/
// onChangeFunction has a parameter which contain every details related to the event
function radioBoxes_OnChange(radioboxes,onChangeFunction)
{
	radioboxes.addEventListener('change',onChangeFunction,false);
}
/*__________________________________________________*/
function rbGetData(rbx)
{
	rbx.addEventListener('change',onRadioBoxesChange,false);
	function onRadioBoxesChange(e) {
			if(e.target.checked)
			return  e.target.id.substring(2);
		};
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
function textBox(parent,title,val,css)
{
	if(title!="" && title !=undefined)
	{
		var t = document.createTextNode(title);
    	parent.appendChild(t);
	}
	var x = document.createElement("INPUT");
	x.setAttribute("type", "Text");
	
	
    x.className =css;
	if(val!="" && val !=undefined)
		x.value=val;
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
function tableRowTextbox(tb,title)
{
	
	var r = tableRow  ( tb);
	var c1 = tableCell ( r);
	label(c1, title);
	var c2 = tableCell ( r);
	textBox(c2);
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

