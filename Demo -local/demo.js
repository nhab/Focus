window.onload = function() {
					// Initial states data
					var data={};
					data["rng"]=10;	
					//____________ elements _______________________________________
					
					
					document.body = document.createElement("body");
					var bdy=document.body;
					var form = document.createElement("FORM");
					document.body.appendChild(form);
	  
					Misc.Attribute(bdy,"style","background:linear-gradient(45deg,#9380ff,#7931aa  )");
					Misc.BackgroundImage(bdy,"linear-gradient(45deg,#9380ff,#7931aa  )");
					
					//var head1=container(bdy);
					//Attribute(head1,"style","background-color: #aa9add");
					//debugger;
					
					// Add top menu {
					 var mnu=Composite.MenuDropdownContainer(bdy);
					 var mm1=Composite.MenuDropdown(mnu,"File");
					 var mm2=Composite.MenuDropdown(mnu,"edit");
					 var mm2=Composite.MenuDropdown(mnu,"View");
					 var mm2=Composite.MenuDropdown(mnu,"Tools");
					 var mm2=Composite.MenuDropdown(mnu,"Help");
					//}
					var doc = FocusLayout.container(bdy);
					
					var lbl1 = FocusLayout.label(doc,"Data Input");
					
					FocusLayout.newLine(doc);
					
					//Add table {
					var tbl= FocusLayout.table   (doc)      ;
 					var r  = FocusLayout.tableRow(tbl)      ;
 					var c  = FocusLayout.tableCell(r,"ghjg");
 					//}
					
					var txtName = FocusLayout.textBox(c,"name");
					
					FocusLayout.newLine(c);
					
					var rbs = FocusLayout.radioBoxes(c ,"a-Type : ",["Conventinal","formal","traditional"]);
					var cbs = FocusLayout.checkBoxes(c ,"Features  : ",["cashback","Lifestyle","Travel"]);
					var rng = FocusLayout.range     (c ," Range of it  ",90,"myRange");
					
					FocusLayout.label(c,  " prefferation" ,"head1");
					FocusLayout.line(c);
					
					var lblRng = FocusLayout.label(c,"range:"+data["rng"]);
					
					FocusLayout.line(doc);
					
					var b=FocusLayout.button(doc,"wipe the screen and see selected values");
					
					//look and feel :__________________________________
					
					 LookFeel.font(doc,"Open Sans,sans-serif","16px");
					 Misc.Attribute(doc,"style","	background-color: #baadff");
					
					 LookFeel.font(lbl1,"Advent Pro Thin,Open Sans,sans-serif","26px");
					 LookFeel.colors(lbl1);
					 var margin=20;
					 LookFeel.border(c); 
					 LookFeel.padding(c,"20");
					 LookFeel.margin(c,"20");
					 LookFeel.colors(c,undefined,"#ccaaff");
					 LookFeel.boxShadow(txtName);
					 LookFeel.font(b,"Arial Narrow,sans-serif Narrow,sans-serif","22px");
                     Misc.setFunctionBulk(LookFeel.margin,[txtName,rbs,cbs],10);
					 LookFeel.styleButton(b);
                 
					 //cssSet(b,"waves-effect waves-light btn-large");
					 //
					 LookFeel.dimention(doc,"70%");
					 LookFeel.border(doc);
					 LookFeel.AlignHCenter(doc);
					
					 //AlignVCenter(doc);
					 LookFeel.padding(doc,40);
					 LookFeel.margin(txtName,10);
					
					//____________data		__________________________________ 			
					Data.set_CheckBoxes(cbs,[1]);

					//state and intraction :__________________________________	
                     // radio buttons intraction event {			
					 var rbs_onIntract= function(e)  {
						var atype=Focus_Data.get_RadioBoxes(rbs);
						data["a-type"]=atype;
					  };
					  rbs.addEventListener('Intract',rbs_onIntract,false);
					 //}
					 
					 // checkboxes intraction event {
					 var cbs_onIntract = function oncheckBoxesChange(e) {
						var ii = Focus_Data.get_checkBoxes(cbs);
						data.Features=ii;
					  };
					  cbs.addEventListener('Intract',cbs_onIntract,false);
					 //}
					 
					 // range intraction event {
					var  rng_onIntract = function onRangeChange(e){
                    	data["rng"]=e.target.value;
                    	Focus_Data.set_Label(lblRng,data["rng"]);
					  }
					  rng[0].addEventListener('Intract',rng_onIntract,false);
					 //}
					
					b.onclick=function(){
						//next page :
						data["a-name"]=txtName.value;
						Misc.Clear(doc);
						FocusLayout.label(doc,"Summery");
						FocusLayout.newLine(doc);
						
						var t  = FocusLayout.table(doc);
						var r  = FocusLayout.tableRow(t);
						var c1 = FocusLayout.tableCell(r,"name:");
						var c2 = FocusLayout.tableCell(r,data["a-name"]);
						
						var r  = FocusLayout.tableRow(t);
						var c3 = FocusLayout.tableCell(r,"type");
						var c4 = FocusLayout.tableCell(r,data["a-type"]);

						var r  = FocusLayout.tableRow(t);
						var c3 = FocusLayout.tableCell(r,"Features");
						var c4 = FocusLayout.tableCell(r,data["Features"]);
					
                    	var r  = FocusLayout.tableRow(t);
						var c3 = FocusLayout.tableCell(r,"Rang");
						var c4 = FocusLayout.tableCell(r,data["rng"]);
					
						t.style="border-style:solid; border-width: 1px;border-color:#aaaaaa;";
						c3.style="border-style:solid; border-width: 1px;border-color:red;";
						
					};
					
				};