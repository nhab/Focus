import {Misc} from './Misc.js'
//(__________________________________ look and feel concern functions : _________________________________)
 // you can also set style or css properties of each object to change its look and feel:
 //Positions,Dimentions, Colors, Fonts, Images and Animations. 
 //todo:providing the focus.js coders complete functionality of css with pure javascript ( no css)
export default class LookFeel{
	constructor(){
		this.stuff = null;
	  } 
	static css (obj,cssName){
		obj.className =cssName;
	}
	static border(obj,width,color){
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
	static boxShadow(obj){
		obj.style.boxShadow="0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19)";
	}
	static FullWidth(obj){
		obj.style.width="100%";
	}
	static styleButton(objBtn){
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
		st = Misc.objectClone( objBtn.style) ; 
		st.backgroundColor="#8db1c7";
		
		LookFeel.hoverStyle( objBtn , st );
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
	static dimention(obj,width,height){
		obj.style.width=width;
		obj.style.height=height;
		//obj.style =obj.style+";width:"+width;
		//obj.style =obj.style+";height:"+height+";";
	}
	static margin(obj,val){
		obj.style.margin = val+"px "+val+"px "+val+"px "+val+"px";
	}
	static padding(obj,val){
		obj.style.padding = val+"px "+val+"px "+val+"px "+val+"px";
	}
	static AlignHCenter(obj)	{
		obj.style.marginLeft ="auto";
		obj.style.marginRight ="auto";;
	}
	static AlignVCenter(obj)	{
		
		obj.style.position="relative";// =obj.style+";display: flex;  justify-content: center;  flex-direction: column;";
		obj.style.top="50%";
		obj.style.webkitTransform="translateY(50%)";
		obj.style.msTransform= "translateY(50%)";
		obj.style.transform="translateY(50%)";
	}
	static align(obj,vertical,horizontal)	{
		obj.style =obj.style+";vertical-align:"+vertical+";";
		obj.style =obj.style+";vertical-align:"+vertical+";";
	}
	static font(obj,family,size)	{
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
	static colors(obj,color,bkColor)	{
		if(color!=undefined )
			obj.style.color=color;
		else
			obj.style.color="#000066";
		if(bkColor!=undefined )
			obj.style.backgroundColor =bkColor;
		else
			obj.style.backgroundColor ="#9999FF";

	}
	static hoverStyle(obj,style){
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
}