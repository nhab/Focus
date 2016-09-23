var fnWizPages=[];//an array of functions that create pages

//(__________________________________ Intraction concern functions: _____________________________________)
    //(_Evnts)__________________________________________________________
/*__________________________________________________*/
// onChangeFunction could have a parameter which contain every details related to the event
function onStateChange(obj,onChangeFunction)
{
	obj.addEventListener('Intract',onChangeFunction,false);
}
/*__________________________________________________*/
function hoverStyle(obj,style)
{
    
    var color1=obj.style.backgroundColor;
    var color2=style.backgroundColor;
    obj.onmouseover=function(){
        
        obj.style.backgroundColor=color2;
    };

    obj.onmouseleave=function(){
        obj.style.backgroundColor=color1;
        obj.style.boxShadow="0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19)";
    };
    obj.onmouseenter=function(){
     obj.style.boxShadow="0 0 0 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19)";
    }
}
    //(_Data)____________________________________________________________
/*__________________________________________________*/
function set_RadioBoxes(radioboxes,indx)
{
	var len=radioboxes.children.length;
	var id="rb"+indx;
	for(i=0;i<len;i++)
		if(radioboxes.children[i].id==id)
			radioboxes.children[i].checked=true;
}
/*__________________________________________________*/
function get_RadioBoxes(radioboxes)
{
	var len=radioboxes.children.length;
	for(i=0;i<len;i++)
		if(radioboxes.children[i].checked)
		   return radioboxes.children[i].id.substring(2);
	return undefined;
}
/*__________________________________________________*/
function set_Label(objLabel,title)
{
	objLabel.innerHTML= title;
}
/*__________________________________________________*/
function get_Label(objLabel)
{
	return objLabel.innerHTML;
}
/*__________________________________________________*/
function set_CheckBoxes(checkboxes,indxes)
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
function get_checkBoxes(checkboxes)
{
	
	var len=checkboxes.children.length;
	var ret=[];
	for(i=0;i<len;i++)
		if(checkboxes.children[i].checked)
		    ret.push( checkboxes.children[i].id.substring(2));
	return ret;
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
function boxShadow(obj)
{
    obj.style.boxShadow="0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19)";
}
/*__________________________________________________*/
function styleButton(objBtn)
{
    
	objBtn.style.backgroundColor="#4BCD37";
	objBtn.style.borderSize=3;
	objBtn.style.borderStyle="solid";
	objBtn.style.borderColor="white" ;
	objBtn.style.borderRadius="20px";
    objBtn.style.padding="15px 32px";
    //objBtn.style.textAlign="left";
    //objBtn.style.display="inlineBlock"; 
    objBtn.style.textDecoration="none";
    objBtn.style.fontSize="16px";
    objBtn.style.cursor="pointer";
    objBtn.style.margin="4px 2px";
    objBtn.style.boxShadow="0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19)";

    var st = document.createElement("STYLE");
    st = objectClone( objBtn.style) ; 
    st.backgroundColor="#8db1c7";
    
    hoverStyle( objBtn , st );
	/*
	var s=".button {";

	
	s=s+"text-align: center;";
	s=s+"text-decoration: none;";
	s=s+"display: inline-block;";

	s=s+"box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);";
	s=s+"}";
	s=s+".button:hover {";
	s=s+"	background: #8db1c7;";
	s=s+"	text-decoration: none;";
	s=s+"}";
	styleAttribute(obj,"style",s);
	styleAttribute(obj,"css","button");
	*/
       
    return objBtn.style;
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
function margin(obj,val)//top,bottom,right,left)
{
  /* 
	if(top!=undefined  && right==undefined && left==undefined)
	{
		if(bottom==undefined)	bottom =  top+"px";
		if(right==undefined) right =  top+"px";
		if(left==undefined) left =  top+"px";	
	}
	obj.style.margin.top =  top+"px";
	obj.style.margin.bottom = bottom+"px";
	obj.style.margin.right =  right+"px";
	obj.style.margin.left =  left+"px";
    */
    obj.style.margin = val+"px "+val+"px "+val+"px "+val+"px";
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
function font(obj,family,size)
{
	if(family!=undefined )
		obj.style.fontFamily=family;
	else
		obj.style.fontFamily="Helvetica Neue,Helvetica,sans-serif";
	if(size!=undefined )
		obj.style.fontSize=size;
	else
		obj.style.fontSize="17px";
	obj.style.lineHeight="21px";
}
function colors(obj,color,bkColor)
{
	if(color!=undefined )
		obj.style.color=color;
	else
		obj.style.color="#000066";
	if(bkColor!=undefined )
		obj.style.BackgroundColor=bkColor;
	else
		obj.style.BackgroundColor="#9999FF";

}
 //(__________________________________ layout and structure concern functions : ____________________________________)
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
				
				var event = new Event('Intract');
				x.dispatchEvent(event);
			//}
		};
		x.appendChild(x1);
		label(x,arrItems[i]);
	}
	
	return x;
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
		
				var event = new Event('Intract');
				x.dispatchEvent(event);
		
		};
		x.appendChild(x1);
		label(x,arrItems[i]);
	}
	
	return x;
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
	
	objVal = label(parent,x.value);
	//objVal.innerHTML=x.value;

	x.onchange=function(e){
		var event = new Event('Intract');  // (*)
		
	
		x.dispatchEvent(event);	
		/*if(e.target.innerHTML!=x.value)	*/
		//	console.log(e);
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
    var i=0;
    while(title.substring(i++,1)==" ")
        x.innerHTML=x.innerHTML+"&nbsp";

	x.innerHTML= x.innerHTML+ title;

    while(title.substring(i--,1)==" ")
        x.innerHTML=x.innerHTML+"&nbsp";

	x.style="display:inline-block;";
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
		/*var dvSpc=document.createElement("DIV");
	dvSpc.style.innerHTML="&nbsp";
	//dvSpc.style.display="inline";
	
	parent.appendChild(dvSpc);
	
		var t = document.createTextNode(title);
	
		 t.style.marginRight="3px";
    		parent.appendChild(t);
			*/
			var l=label(parent,title);
			l.style.marginRight="10px";
	}
	
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
 //(__________________________________ File and folder operations : _________________________________)
  	
	///----------------------------------------------------------
	function getFolders(folderspec,fso)
	{
		var s = "";
        var f = fso.GetFolder(folderspec);

		var subfolders = new Enumerator(f.SubFolders);
		var arr=[];
		var i=0;
		for (; !subfolders.atEnd(); subfolders.moveNext()){arr[i++]=subfolders.item() ;}
		return arr;
	}
	/// ----------------------------------------------------------
	function getFiles(folderspec,fso)
	{
		var s = "";
		
        	var f = fso.GetFolder(folderspec);

		
		var arr=[];
		var i=0;
		var fc = new Enumerator(f.files);
        
		for (; !fc.atEnd(); fc.moveNext()){arr[i++]=fc.item().Name ;}
		return arr;
	}
	// ------------------------------------------------------------
	function ReadFile(fpath)
	{
		var fso, f1, ts, s;
		var ForReading = 1;
		if (window.DOMParser)
		{ // Firefox, Chrome, Opera, etc.
		    alert("ActiveXobject is only working with IE.Use Ie to view.")
		}
		else // Internet Explorer
		{
			fso = new ActiveXObject("Scripting.FileSystemObject");   
		} 
		fso = new ActiveXObject("Scripting.FileSystemObject");
		ts = fso.OpenTextFile(fpath, ForReading);
		s = ts.ReadAll();
		ts.Close();
		return s;
	}
	// ------------------------------------------------------------
	//for testing:
	function CreateDropDownList(arr)
	{
		document.write("<select>")
		for(var i=0;i<arr.length;i++)
		{
			document.write("<option value='"+arr[i]+"'>");
			document.write(arr[i]);
			document.write("</option>");
		}
		document.write("</select>")	;
	}
	function ReadFile()
	{
		document.write("<pre>"+ReadFile("d:\\d.txt")+"</pre>");
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
 function objectClone(obj)
 {
    var clone = {};
    for(var i in obj) {
        if(typeof(obj[i])=="object" && obj[i] != null)
            clone[i] = cloneObject(obj[i]);
        else
            clone[i] = obj[i];
    }
    return clone;
 }
 /*__________________________________________________*/
 function setFunctionBulk(funct,arr,value)
 {
     
     for(var i=0;i<arr.length;i++)
     {
         if(arr[i]!=undefined)
         {
             if(value==undefined)
                funct(arr[i])
            else
                funct(arr[i],value);
         }
     }
 }
 /*__________________________________________________*/
/*
function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? rgb(
         parseInt(result[1], 16), //r
         parseInt(result[2], 16), //g
         parseInt(result[3], 16)  //b
    ) : null;
}*/
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
/*------------------ Complex components --------------*/

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
function MenuDropdownContainer(parent)
{
	var x = document.createElement("DIV");
	Attribute(x,"style","position: relative; display: inline-block;");
	parent.appendChild(x);
	return x;
}
/*__________________________________________________*/
function MenuDropdown(menuContainer,menuTitle)
{
	var x=button(menuContainer,menuTitle);
	var s= "background-color: #4CAF50;"
    	s=s+"color: white;";
    	s=s+"padding: 16px;";
    	s=s+"font-size: 16px;";
    	s=s+"border: none;";
    	s=s+"cursor: pointer;";
	Attribute(x,"style",s);
	menuContainer.appendChild(x);
	return x;
}
/*__________________________________________________*/
function subMenu(menu,title,url)
{
	var l=link(menu,title,url);
	
	var s="display: none;";
    	s=s+"position: absolute;";
    	s=s+"background-color: #f9f9f9;";
    	s=s+"min-width: 160px;";
    	s=s+"box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);";
    	Attribute(l,"style",s);
    	menu.appendChild(l);
    	return l; 
}
/* ============================================================================*/
/*_____________________________________________________________________________*/
/*                    Object oriented implementation					       */
var Data=
{
	
	setCheckBoxes:function (checkboxes,indxes)
	{
		return set_CheckBoxes(checkboxes,indxes);
	},
	// _________________________________________________
	
	setRadioBoxes:function (radioboxes,indx)
	{
		return set_RadioBoxes(radioboxes,indx);
	},

	// _________________________________________________
	getRadioBoxes:function (radioboxes)
	{
		return get_RadioBoxes(radioboxes);
	},
	// _________________________________________________
	set_Label:function (objLabel,title)
	{
		return set_Label (objLabel,title);
	},
	// _________________________________________________
	get_Label:function (objLabel)
	{
		return get_Label(objLabel);
	},
	
	// _________________________________________________
	get_checkBoxes:function (checkboxes)
	{
		return get_checkBoxes(checkboxes);
	}
}
var Intraction  =
 {
	
	onStateChange:function (obj,onChangeFunction)
	{
		return obj.addEventListener('Intract',onChangeFunction,false);
	},

	hoverStyle:function (obj,style)
	{
		return hoverStyle(obj,style);
	}
}

var LookFeel={	
	css:function  (obj,cssName)
	{
		return css(obj,cssName);
	},
	/*__________________________________________________*/
	border:function (obj,width,color)
	{
		return border (obj,width,color);
	},
	/*__________________________________________________*/
	boxShadow:function (obj)
	{
		return boxShadow(obj);
	},
	/*__________________________________________________*/
	styleButton:function (objBtn)
	{
		return styleButton (objBtn);
	},
	/*__________________________________________________*/
	dimention:function (obj,width,height)
	{
		return dimention(obj,width,height);
	},
	/*__________________________________________________*/
	margin:function (obj,val)//top,bottom,right,left)
	{
		return margin(obj,val);
	},
	/*__________________________________________________*/
	padding: function (obj,val)
	{
		return padding (obj,val);
	},
	/*__________________________________________________*/
	AlignHCenter: function (obj)
	{
		return AlignHCenter(obj);
	},
	/*__________________________________________________*/
	AlignVCenter: function (obj)
	{
		return AlignVCenter(obj);
	},
	align: function (obj,vertical,horizontal)
	{
		return align(obj,vertical,horizontal);
	},
	font :function (obj,family,size)
	{
		return font  (obj,family,size);
	},
	colors:function (obj,color,bkColor)
	{
		return colors(obj,color,bkColor);

	}

}
var Structure={

	line:function (parent)
	{
		return line (parent);
	},
	newLine:function (parent)
	{
		return newLine (parent);
	},
	radioBoxes:function (parent,title,arrItems,name)
	{
		return radioBoxes (parent,title,arrItems,name);
	},
	checkBoxes:function (parent,title,arrItems)
	{
		return checkBoxes(parent,title,arrItems);
	},
	
	listItem:function (parent,text)
	{
		return listItem(parent,text);
	},
	Lists:function (parent,arrItems)
	{
		return Lists(parent,arrItems);
	},
	image:function (parent,source,css)
	{
		 return image(parent,source,css);
	},
	button:function (parent,title,onclickFunction)
	{
		return button(parent,title,onclickFunction);
	},
	range:function (parent,title,arrValues )
	{
		return range(parent,title,arrValues );
	},
	div:function (parent)
	{
		return div(parent);
	},
	container:function (parent)
	{
		return container(parent);
	},
	link:function (parent,title,url)
	{
		return link(parent,title,url)
	},
	label:function (parent,title)
	{
		return label(parent,title)
	},
	checkBox:function (parent,title)
	{
		return checkBox(parent,title)
	},
	textBox:function (parent,title,val)
	{
		return textBox(parent,title,val)
	},
	dropDown:function (parent,title,arrItems)
	{
		return  dropDown(parent,title,arrItems)
	},
	table:function (parent)
	{
		return table(parent)
	},
	tableRow:function (table)
	{
		return tableRow(table)
	},
	tableCell:function (TableRow,content)
	{
		return tableCell(TableRow,content)
	},
	wizard:function (parent,fnWizPages,data)
	{
		return wizard(parent,fnWizPages,data);
	}
	,
	simpleDatePicker:function (parent,title)
	{
		return simpleDatePicker(parent,title)
	},
	MenuDropdownContainer:function (parent)
	{
		return MenuDropdownContainer(parent)
	},
	MenuDropdown:function (menuContainer,menuTitle)
	{
		return MenuDropdown(menuContainer,menuTitle);
	},
	subMenu:function (menu,title,url)
	{
		return subMenu(menu,title,url)
	}
}

var FileSystem={
	//ActiveXObject works for IE 
	fso: new ActiveXObject("Scripting.FileSystemObject"),
	
	getFiles:function(folderspec)
	{
		getFiles(folderspec) ;
	},
	getFolderes:function(folderspec)
	{
		getFolderes(folderspec)	;
	},
	ReadFile:function(filePathAndName)
	{
		ReadFile(filePathAndName);
	}

}
