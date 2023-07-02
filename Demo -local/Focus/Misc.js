class Misc{
		
		static AddHtml2Body(parent,sHtml){
			parent.insertAdjacentHTML( 'beforeend', sHtml );
		}
		
		static Addscript2Head(scriptUrl){
			var script = document.createElement('script');
			script.type = 'text/javascript';
			script.src = scriptUrl;    

			var h=	document.getElementsByTagName('head');
			if(h.length>0 )
				h[0].appendChild(script);
			else
				document.createElement('head').appendChild(script);
		}
		
		static objectClone(obj) {
			var clone = {};
			for(var i in obj) {
				if(typeof(obj[i])=="object" && obj[i] != null)
					clone[i] = cloneObject(obj[i]);
				else
					clone[i] = obj[i];
			}
			return clone;
		 }
	
	static setFunctionBulk(funct,arr,value){
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
		static Clear(node){
			while (node.firstChild) {
				node.removeChild(node.firstChild);
			}
			return node;
		}
		static Attribute(obj,atrib,val){
			obj.setAttribute(atrib,val);
		}

		static BackgroundImage(obj,val){
			obj.style.backgroundImage=val;
		}
		static a(){//for testing purposes :)
			alert("Test");
		}
	}
