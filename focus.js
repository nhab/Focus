function a()
{
	alert("dgdfg");
	
}
/*__________________________________________________*/
function radioBox(title,arr)
{
	s = "<div>";
	s = s + "<p>"+title+"</p>";
	for(i=0;i<arr.length;i++)
		s = s + "<input  name='rb" + i + "' type='radio'  />"+arr[i]+"</input>";//
	s=s+"</div>";
	//console.log(s);
	$( "body" ).append(s);
	
}
/*__________________________________________________*/
function line()
{
	$( "body" ).append("<hr>");
}
/*__________________________________________________*/
function checkBox(title,arr)
{
	s = "<div>";
	s = s + "<p>"+title+"</p>";
	for(i=0;i<arr.length;i++)
		s = s + "<input  name='rb" + i + "' type='checkbox'  />"+arr[i]+"</input>";//
	s=s+"</div>";
	//console.log(s);
	$( "body" ).append(s);
}
/*__________________________________________________*/
function range(title,val,id)
{
	s = "<div>";
	s = s + "<p>"+title+"</p>";
	s = s + "<input type='range' value='"+val+"' id='"+id+"' >";
	s=s+"</div>";
	$( "body" ).append(s);
}
/*__________________________________________________*/
function label(title,css)
{
	s=s+"<div class='"+css+"'>";
	s=s+title;
	s=s+"</div>";
	$( "body" ).append(s);
	
}
/*__________________________________________________*/
function table()
{ 
	var x = document.createElement("TABLE");
    //x.setAttribute("id", id);
    document.body.appendChild(x);
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
    var t = document.createTextNode(content);
    z.appendChild(t);
    return TableRow.appendChild(z);
}
/*__________________________________________________*/
