class Composite{
	static MenuDropdownContainer(parent){
		var x = document.createElement("DIV");
		Misc.Attribute(x,"style","position: relative; display: inline-block;");
		parent.appendChild(x);
		return x;
	}
	static MenuDropdown(menuContainer,menuTitle){
		var x=FocusLayout.button(menuContainer,menuTitle);

			var s=s+"padding: 16px;";
			s=s+"font-size: 16px;";
			s=s+"border: none;";
			s=s+"cursor: pointer;";
		Misc.Attribute(x,"style",s);
		menuContainer.appendChild(x);
		return x;
	}
	static  subMenu(menu,title,url){
		var l=link(menu,title,url);
		
		var s="display: none;";
			s=s+"position: absolute;";
			s=s+"background-color: #f9f9f9;";
			s=s+"min-width: 160px;";
			s=s+"box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);";
			Misc.Attribute(l,"style",s);
			menu.appendChild(l);
			return l; 
	}
}