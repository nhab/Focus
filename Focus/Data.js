export  class Data{
		constructor(){
			this.stuff = null;
		  } 
		static	  set_RadioBoxes(radioboxes,indx){
				var len=radioboxes.children.length;
				var id="rb"+indx;
				for(i=0;i<len;i++)
					if(radioboxes.children[i].id==id)
						radioboxes.children[i].checked=true;
			
			}
		static	 get_RadioBoxes(radioboxes){
				var len=radioboxes.children.length;
				for(var i=0;i<len;i++)
					if(radioboxes.children[i].checked)
					return radioboxes.children[i].id.substring(2);
				return undefined;
			}
		static	 set_Label(objLabel,title){
				objLabel.innerHTML= title;
			}
		static	 get_Label(objLabel){			
				return objLabel.innerHTML;
			}			
		static	 set_CheckBoxes(checkboxes,indxes){	
				var len=checkboxes.children.length;
				
				var j=0;
				for(var i=0;i<len;i++)
					if(checkboxes.children[i].id=="cb"+indxes[j])
					{
						checkboxes.children[i].checked=true;
						j++;
					}
			}
		static	 get_checkBoxes(checkboxes){
				
				var len=checkboxes.children.length;
				var ret=[];
				for(var i=0;i<len;i++)
					if(checkboxes.children[i].checked)
						ret.push( checkboxes.children[i].id.substring(2));
				return ret;
			}
		}
