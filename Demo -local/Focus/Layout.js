class FocusLayout{
		static wizard(parent,fnWizPages,data){
			 return wizard1(parent,0,fnWizPages,data);
		}
		static wizard1(parent,i,fnWizPages,data){
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
		static line(parent){
			var x = document.createElement("HR");
			 parent = parent || document.body;
			parent.appendChild(x);
			return x;
		}
		static newLine(parent){
			var x = document.createElement("BR");
			parent = parent || document.body;
			parent.appendChild(x);
			return x;
		}
		static radioBoxes(parent,title,arrItems,name){
			var x = document.createElement("DIV");
			
			x.innerHTML=title;
			parent.appendChild(x);
			var len=arrItems.length;
			
			var sName;
			
			if(name==undefined)
				sName= "radio"+Math.floor((1 + Math.random()) * 0x1000000).toString();
			else
				sName=name;
			var i;
			for(i=0;i<len;i++)
			{		
				var x1 = document.createElement("input");

				x1.type="radio";
				x1.style="display:inline-block;";
				x1.id="rb"+i;
				
				x1.name=sName;

				x1.onchange=function(){	var event = new Event('Intract');x.dispatchEvent(event);};
				x.appendChild(x1);
				FocusLayout.label(x,arrItems[i]);
			}
			
			return x;
		}
		static checkBoxes(parent,title,arrItems){
			var x = document.createElement("DIV");

			x.innerHTML=title;
			parent.appendChild(x);
			
			for(var i=0;i<arrItems.length;i++){
				var x1 = document.createElement("input");
			
				x1.type="checkbox";
				x1.style="display:inline-block;";
				x1.id="cb"+i;
				x1.onchange=function(){
						var event = new Event('Intract');
						x.dispatchEvent(event);			
				};
				x.appendChild(x1);
				FocusLayout.label(x,arrItems[i]);
			}
			
			return x;
		}
		static range(parent,title,arrValues )	{
			var x = document.createElement("INPUT");
			x.setAttribute("type", "range");
			x.setAttribute("min", arrValues[0]);
			x.setAttribute("max", arrValues[1]);
			x.setAttribute("value", arrValues[2]);
			
			var t = document.createTextNode(title);
			parent.appendChild(t);
			
			parent.appendChild(x);
			
			var objVal = FocusLayout.label(parent,x.value);
			//objVal.innerHTML=x.value;

			x.onchange=function(e){
				var event = new Event('Intract');  // (*)
				x.dispatchEvent(event);	
				
				objVal.innerHTML=x.value;

			};
			return [x,objVal];
			
		}
		static listItem(parent,text)	{
			var x = document.createElement("LI");

			x.innerHTML=text;
			parent.appendChild(x);
			return x;
		}
		static Lists(parent,arrItems)	{
			var l = document.createElement("UL");

			parent.appendChild(l);

			var len = arrItems.length;
			for(i=0;i<len;i++)
				listItem(l,arrItems[i]);
			return l;
		}
		static image(parent,source,css)	{
			var x = document.createElement("IMG");
			x.src=source;
			x.className =css;
			parent.appendChild(x);
			return x;
		}
		static button(parent,title,onclickFunction)	{
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
		static div(parent)	{
			var x = document.createElement("div");
			
			parent.appendChild(x);
			return x;
		}
		static container(parent)	{
			var x = document.createElement("div");
				x.style=x.style+"display:inline-block";
			parent.appendChild(x);
			return x;
		}
		static link(parent,title,url)	{
			var x = document.createElement("A");
			x.setAttribute("href", url);
			x.innerHTML=title;
			
			parent.appendChild(x);
			
			return x;
		}
		static label(parent,title)	{
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
		static checkBox(parent,title)	{
			var x = document.createElement("INPUT");
			x.setAttribute("type", "checkbox");

			parent.appendChild(x);
			var t = document.createTextNode(title);
			document.body.appendChild(t);
			return x;
		}
		static textBox(parent,title,val)	{
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
					var l=FocusLayout.label(parent,title);
					l.style.marginRight="10px";
			}
			
			var x = document.createElement("INPUT");
			x.setAttribute("type", "Text");
			
			if(val!="" && val !=undefined)
				x.value=val;
			
			 parent.appendChild(x);
			 
			return x;
		}
		static dropDown(parent,title,arrItems)	{
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
		static table(parent){ 
			var x = document.createElement("TABLE");

			parent.appendChild(x);
			return x;
		}
		static tableRow(table)	{
			var y = document.createElement("TR");
			//y.setAttribute("id", "myTr");
			return table.appendChild(y);
		}
		static tableCell(TableRow,content)	{
			var z = document.createElement("TD");
			
			if(content!="" && content!=undefined)
			{
			
				var t = document.createTextNode(content);
				z.appendChild(t);
				
			}
			TableRow.appendChild(z);
			return z;
		}
		static tableRowTextbox(tb,title)	{
			
			var r = tableRow  ( tb);
			var c1 = tableCell ( r);
			label(c1, title);
			var c2 = tableCell ( r);
			textBox(c2);
		}
		static table_Row(tb,title,objs)	{
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
		static Header(parent, title)	{
		var l=label(parent,title);
		AlignHCenter(l);
		AlignVTop(l);
	}
}

