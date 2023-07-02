class FocusFileFolder  {	
	static getFolders(folderspec,fso){
		var s = "";
        var f = fso.GetFolder(folderspec);

		var subfolders = new Enumerator(f.SubFolders);
		var arr=[];
		var i=0;
		for (; !subfolders.atEnd(); subfolders.moveNext()){arr[i++]=subfolders.item() ;}
		return arr;
	}
	static getFiles(folderspec,fso)	{
		var s = "";		
        var f = fso.GetFolder(folderspec);
		
		var arr=[];
		var i=0;
		var fc = new Enumerator(f.files);
        
		for (; !fc.atEnd(); fc.moveNext()){arr[i++]=fc.item().Name ;}
		return arr;
	}
	static ReadFile(fpath){
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
	//for testing:
	static CreateDropDownList(arr){
		document.write("<select>")
		for(var i=0;i<arr.length;i++)
		{
			document.write("<option value='"+arr[i]+"'>");
			document.write(arr[i]);
			document.write("</option>");
		}
		document.write("</select>")	;
	}
	static ReadFile()	{
		document.write("<pre>"+ReadFile("d:\\d.txt")+"</pre>");
	}
}
