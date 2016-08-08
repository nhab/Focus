<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" 
   "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en" xml:lang="en">
	<head>
         <meta charset="UTF-8"> 
		<!--link rel="stylesheet" type="text/css" href="stylesheets/styles.css" /-->
		<!--link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.7/css/materialize.min.css" /-->
		<!--script src="https://raw.githubusercontent.com/nhab/Focus/master/focus.js"></script-->
		<!--script src="https://raw.githack.com/nhab/Focus/master/focus.js"></script-->
		<!--script src="https://cdn.rawgit.com/nhab/Focus/master/focus.js"></script-->
		<!--script src="https://rawgit.com/nhab/Focus/master/focus.js"></script-->
		<!--script src="https://rawgit.com/nhab/Focus/master/focus.js"></script-->
		<script src="focus.js"></script>

	</head>
	<body>
		<form>
			<script>
				window.onload = function() {
					//____________ elements _______________________________________
					var bdy=document.body;
					doc=container(bdy);
					
					var data={};
					
					var txtName=textBox(doc,"name");
					newLine(doc);
					var rbs=radioBoxes(doc,"a-Type : ",["Conventinal","formal","traditional"]);
				
					line(doc);
					var cbs = checkBoxes(doc,"Features  : ",["cashback","Lifestyle","Travel"]);
					newLine(doc);
					var rng=range(doc," Range of it  ",90,"myRange");
					label(doc,  " prefferation" ,"head1");
					line(doc);
					label(doc,"range:"+data["rng"]);
					
					var b=button(doc,"wipe the screen and see selected values");

					//look and feel :__________________________________
                    boxShadow(txtName);
					
                                       
                    setFunctionBulk(margin,[txtName,rbs,cbs],10);
					styleButton(b);
                 
					//cssSet(b,"waves-effect waves-light btn-large");
					//
					dimention(doc,"70%");
					border(doc);
					AlignHCenter(doc);
					//debugger;
					AlignVCenter(doc);
					padding(doc,40);
					margin(txtName,10);
					//state and itractions :__________________________________					
					onStateChange(rbs,
					  function(e)
					  {
						//console.log(e);
                        
						var atype=radioBoxes_getValue(rbs);
						data["a-type"]=atype;
					  }
					);
					onStateChange(cbs,
						function oncheckBoxesChange(e) {
							var ii = checkBoxes_getValue(cbs);
							data.Features=ii;
						}
					);
					
					onStateChange(rng,
						function onRangeChange(e){
						data["rng"]=e.target.value;
						}
					);
					
					b.onclick=function(){
						data["a-name"]=txtName.value;
						Clear(doc);
						var t=table(doc);
						var r=tableRow(t);
						var c1=tableCell(r,"name:");
						var c2=tableCell(r,data["a-name"]);
						
						var r=tableRow(t);
						var c3=tableCell(r,"type");
						var c4=tableCell(r,data["a-type"]);

						var r=tableRow(t);
						var c3=tableCell(r,"Features");
						var c4=tableCell(r,data["Features"]);
					
						t.style="border-style:solid; border-width: 1px;border-color:#aaaaaa;";
					c3.style="border-style:solid; border-width: 1px;border-color:red;";
						
					};
					
				};
			</script>
		</form>
	</body>
</html>
