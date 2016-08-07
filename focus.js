var fnWizPages=[];//an array of functions that create pages

//(__________________________________ Intraction concern functions: _____________________________________)
/*__________________________________________________*/
// onChangeFunction could have a parameter which contain every details related to the event
function onStateChange(obj,onChangeFunction)
{
	obj.addEventListener('change',onChangeFunction,false);
}
/*__________________________________________________*/
 //(__________________________________ look and feel concern functions : _________________________________)
 // you can also set style or css properties of each object to change its look and feel:
 //Positions,Dimentions, Colors, Fonts, Images and Animations. 
 //todo:providing the focus.js coders complete functionality of css with pure javascript ( no css)

function css (obj,cssName)
{
	
	obj.className =cssName;
}
/*__________________________________________________*/
function border(obj,width,color)
{
	var swidth="1",sColor="black";
	
	if(width!=undefined)
		swidth=width;
		
	if(color !=undefined)
		sColor=color;
	
	obj.style.borderStyle="solid";
	obj.style.borderWidth=width+"px";
	obj.style.borderColor=color;
	
//	obj.style= obj.style + ";border-style:solid;border-width:"+swidth+"px;border-color:"+sColor+";";
}
/*__________________________________________________*/
function styleButton(obj)
{
	obj.style.backgroundColor= hexToRgb("#4BCD37");
	obj.style.borderSize=3;
	obj.style.borderStyle="solid";
	obj.style.borderColor="white" ;
	obj.style.borderRadius=20;
	/*
	var s=".button {";
	s=s+"background-color: #4BCD37;";
	s=s+"border: 3px solid;";
	s=s+"border-color: white;";
	s=s+"border-radius: 20px;";
	s=s+"padding: 15px 32px;";
	s=s+"text-align: center;";
	s=s+"text-decoration: none;";
	s=s+"display: inline-block;";
	s=s+"font-size: 16px;";
	s=s+"margin: 4px 2px;";
	s=s+"cursor: pointer;";
	s=s+"box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);";
	s=s+"}";
	s=s+".button:hover {";
	s=s+"	background: #8db1c7;";
	s=s+"	text-decoration: none;";
	s=s+"}";
	styleAttribute(obj,"style",s);
	styleAttribute(obj,"css","button");
	*/
}
/*__________________________________________________*/
function dimention(obj,width,height)
{
	obj.style.width=width;
	obj.style.height=height;
	//obj.style =obj.style+";width:"+width;
	//obj.style =obj.style+";height:"+height+";";
}
/*__________________________________________________*/
function margin(obj,top,bottom,right,left)
{
	if(top!=undefined  && right==undefined && left==undefined)
	{
		if(bottom==undefined)	bottom =  top;
		if(right==undefined) right =  top;
		if(left==undefined) left =  top;	
	}
	obj.style.margin.top =  top;
	obj.style.margin.bottom = bottom;
	obj.style.margin.right =  right;
	obj.style.margin.left =  left;

}
/*__________________________________________________*/
function padding(obj,val)
{
	obj.style.padding = val+"px "+val+"px "+val+"px "+val+"px";
}
/*__________________________________________________*/
function AlignHCenter(obj)
{
	obj.style.marginLeft ="auto";
	obj.style.marginRight ="auto";;
}
/*__________________________________________________*/
function AlignVCenter(obj)
{
	
	obj.style.position="relative";// =obj.style+";display: flex;  justify-content: center;  flex-direction: column;";
	obj.style.top="50%";
	obj.style.webkitTransform="translateY(50%)";
	obj.style.msTransform= "translateY(50%)";
  	obj.style.transform="translateY(50%)";
}
function align(obj,vertical,horizontal)
{
	obj.style =obj.style+";vertical-align:"+vertical+";";
	obj.style =obj.style+";vertical-align:"+vertical+";";
}
 //(__________________________________ structure concern functions : ____________________________________)
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
function radioBoxes(parent,title,arrItems,name)
{
	var x = document.createElement("DIV");
    
	x.innerHTML=title;
	parent.appendChild(x);
	var len=arrItems.length;
	
	var sName;
	
	if(name==undefined)
	 	sName= "radio"+Math.floor((1 + Math.random()) * 0x1000000).toString();
	else
	 	sName=name;
	
	for(i=0;i<len;i++)
	{		
		var x1 = document.createElement("input");

		x1.type="radio";
		x1.style="display:inline-block;";
		x1.id="rb"+i;
		
		x1.name=sName;

		x1.onchange=function(){
			/*
			if(x1.checked=="checked")
			{*/
				//debugger;
				var event = new Event('change');
				x.dispatchEvent(event);
			//}
		};
		x.appendChild(x1);
		label(x,arrItems[i]);
	}
	
	return x;
}
/*__________________________________________________*/
function radioBoxes_setState(radioboxes,indx)
{
	var len=radioboxes.children.length;
	var id="rb"+indx;
	for(i=0;i<len;i++)
		if(radioboxes.children[i].id==id)
			radioboxes.children[i].checked=true;
}
/*__________________________________________________*/
function radioBoxes_getState(radioboxes)
{
	var len=radioboxes.children.length;
	for(i=0;i<len;i++)
		if(radioboxes.children[i].checked)
		   return radioboxes.children[i].id.substring(2);
	return undefined;
}
/*__________________________________________________*/
function checkBoxes(parent,title,arrItems)
{
	var x = document.createElement("DIV");

	x.innerHTML=title;
	parent.appendChild(x);
	
	for(i=0;i<arrItems.length;i++)
	{
		var x1 = document.createElement("input");
	
		x1.type="checkbox";
		x1.style="display:inline-block;";
		x1.id="cb"+i;
		x1.onchange=function(){
		
				var event = new Event('change');
				x.dispatchEvent(event);
		
		};
		x.appendChild(x1);
		label(x,arrItems[i]);
	}
	
	return x;
}
/*__________________________________________________*/
function checkBoxes_setState(checkboxes,indxes)
{
	var len=checkboxes.children.length;
	
	var j=0;
	for(i=0;i<len;i++)
		if(checkboxes.children[i].id=="cb"+indxes[j])
		{
			checkboxes.children[i].checked=true;
			j++;
		}
}
/*__________________________________________________*/
function checkBoxes_getState(checkboxes)
{
	
	var len=checkboxes.children.length;
	var ret=[];
	for(i=0;i<len;i++)
		if(checkboxes.children[i].checked)
		    ret.push( checkboxes.children[i].id.substring(2));
	return ret;
}
/*__________________________________________________*/
var objVal;
function range(parent,title,arrValues )
{
	var x = document.createElement("INPUT");
	x.setAttribute("type", "range");
	x.setAttribute("min", arrValues[0]);
	x.setAttribute("max", arrValues[1]);
	x.setAttribute("value", arrValues[2]);
	
	var t = document.createTextNode(title);
    parent.appendChild(t);
	
	parent.appendChild(x);
	
	objVal = label(parent,"income");
	objVal.innerHTML=x.value;

	x.onchange=function(){
		var event = new Event('change');  // (*)
		x.dispatchEvent(event);	
		objVal.innerHTML=x.value;
	
	};
	return x;
	
}
/*__________________________________________________*/
function listItem(parent,text)
{
	var x = document.createElement("LI");

	x.innerHTML=text;
	parent.appendChild(x);
	return x;
}
/*__________________________________________________*/
function Lists(parent,arrItems)
{
	var l = document.createElement("UL");

	parent.appendChild(l);

	var len = arrItems.length;
	for(i=0;i<len;i++)
		listItem(l,arrItems[i]);
	return l;
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
function button(parent,title,onclickFunction)
{
	var x = document.createElement("INPUT");
	x.setAttribute("type", "button");
	x.value= title;
    x.onclick=onclickFunction;
	parent.appendChild(x);
	x.onclick=function(){
		var event = new Event('clicked');  // (*)
		x.dispatchEvent(event);	
	};
	return x;
}
/*__________________________________________________*/
function div(parent)
{
	var x = document.createElement("div");
    
	parent.appendChild(x);
	return x;
}
/*__________________________________________________*/
function container(parent)
{
	var x = document.createElement("div");
    	x.style=x.style+"display:inline-block";
	parent.appendChild(x);
	return x;
}
/*__________________________________________________*/
function link(parent,title,url)
{
	var x = document.createElement("A");
	x.setAttribute("href", url);
	x.innerHTML=title;
    
	parent.appendChild(x);
    
	return x;
}
/*__________________________________________________*/
function label(parent,title)
{
	var x = document.createElement("DIV");
	x.innerHTML= title;
   
	x.style="display:inline-block; ";
	parent.appendChild(x);
	return x;
}
/*__________________________________________________*/
function checkBox(parent,title)
{
	var x = document.createElement("INPUT");
	x.setAttribute("type", "checkbox");

	parent.appendChild(x);
	var t = document.createTextNode(title);
    document.body.appendChild(t);
	return x;
}
/*__________________________________________________*/
function textBox(parent,title,val)
{
	if(title!="" && title !=undefined)
	{
		var t = document.createTextNode(title);
    		parent.appendChild(t);
	}
	var dvSpc=document.createElement("DIV");
	dvSpc.innerHTML="&nbsp";
	 parent.appendChild(dvSpcx);
	var x = document.createElement("INPUT");
	x.setAttribute("type", "Text");
	
	if(val!="" && val !=undefined)
		x.value=val;
	
	 parent.appendChild(x);
	 
	return x;
}
/*__________________________________________________*/
function dropDown(parent,title,arrItems)
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
function table(parent)
{ 
	var x = document.createElement("TABLE");

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
//__________________________________________		
function table_Row(tb,title,objs)
{
	var r = tableRow  ( tb);
	var c1 = tableCell ( r);
	label(c1, title);
	var c2 = tableCell ( r);
	for(var i=0;i<objs.length;i++)
	{
		switch (objs[i])
		{
			case "textbox":	textBox(c2,"");break;
			default:	textBox(c2,"");break;
		}
	}
}
//(__________________________________  miscellaneous/General __________________________________________)
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
function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}
/*__________________________________________________*/
function Clear(node)
{

	while (node.firstChild) {
		node.removeChild(node.firstChild);
	}
	return node;
}

function Attribute(obj,atrib,val)
{
	obj.setAttribute(atrib,val);
}
function a()//for testing purposes :)
{
	alert("Test");
}
