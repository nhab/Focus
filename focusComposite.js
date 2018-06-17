function MenuDropdownContainer(parent){
	var x = document.createElement("DIV");
	Miscellaneous.Attribute(x,"style","position: relative; display: inline-block;");
	parent.appendChild(x);
	return x;
}
function MenuDropdown(menuContainer,menuTitle){
	var x=Focus_Layout.button(menuContainer,menuTitle);

    	var s=s+"padding: 16px;";
    	s=s+"font-size: 16px;";
    	s=s+"border: none;";
    	s=s+"cursor: pointer;";
	Miscellaneous.Attribute(x,"style",s);
	menuContainer.appendChild(x);
	return x;
}
function subMenu(menu,title,url){
	var l=link(menu,title,url);
	
	var s="display: none;";
    	s=s+"position: absolute;";
    	s=s+"background-color: #f9f9f9;";
    	s=s+"min-width: 160px;";
    	s=s+"box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);";
    	Miscellaneous.Attribute(l,"style",s);
    	menu.appendChild(l);
    	return l; 
}