<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Advance Custom Editor</title>
     <!-- Bootstrap -->
    <link href="css/bootstrap.min.css" rel="stylesheet">
    
    
    <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
    <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <script src="//code.jquery.com/jquery.js"></script>
    <script src="js/jquery.json-2.4.js" type="text/javascript"></script>
    
    <style type="text/css">
	    div.title
	        {
	        	border: 0.5px solid black;
	        	height: 50px;
	        	width:900px; 
	        	font-size: 30px;
	            font-family: "Times New Roman", Times, serif;
	            text-align:center;
	        }
	    div.information
	        {
	        	border: 0.5px solid black;
	        	height: relative;
	        	width:900px; 
	        	font-size: 15px;
	            font-family: "Times New Roman", Times, serif;
	        }
	    div.modeandcontent
	        {
	        	
	        	height: relative;
	        	border: 0.5px solid black;
	        	width:900px;
	        	font-size: 15px;
	            font-family: "Times New Roman", Times, serif;
	        }
	    .button
	        {
		        vertical-align:middle;
	        }
	    div.main
	        {
	        	border: 0.5px solid black;
	        	width:900px; 
	        	font-size: 18px;
	            font-family: "Times New Roman", Times, serif;
	            font-style: !important;
	        }
   
        
        
    </style> 
    
    
    <script type="text/javascript">
   	 	 var i=0;
   	 	 console.log(parament);
    	 var obj = parament;
    	 var temp=new Array();
   // 	 console.log(obj);
    	 
    	 
    	 $(document).ready(function()
		 {
		 	showbasicinformation();
		 	
		 	if(obj.type=='text')
		 	{
	    		loadbuttonfortext();
	    	// $("#content").append("text contents here");
			}
    	 	if(obj.type=='select')
    	 	{
	    	 	loadbuttonforselect();	
    	 	}
    	 	
    	 	if(obj.type=='radio')
    	 	{
	    	 	loadbuttonforradio();	
    	 	}
		 	
    	 });
		 
		 
		 function showbasicinformation()
		 {
		 	$("#type").append(obj.type);
		 	$("#name").append(obj.name);
		 	$("#count").append(obj.count);
			
		 }
		 function loadbuttonfortext()
		 {
			 
			 $("#mode").append("<br><br><div class='btn-group'><button type='button' class='btn btn-default dropdown-toggle' data-toggle='dropdown'>Choose Crawler Mode<span class='caret'></span></button><ul class='dropdown-menu'><li><a href='#' onclick='Tocv()'>One Constant Value Model</a></li><li><a href='#'onclick='Tmv()'>Multiple Values Model(from '1' to '9')</a></li><li><a href='#' onclick='Ttxt()'>Multiple Values Model(from the text loaded in TXT file you upload)</a></li></ul></div>");
			  
			 $("#memo").append("Now we have three types for inserting values for text form! Just click dropdown menu! ");

			 
		 }
		 function loadbuttonforselect()
		 {
		 	$("#forlabellist").append("<p><b>Here we have followings options for this select box:</b></p>");
		 	$("#content").append("<br>");
		 	for(i=0;i<obj.labellist.length;i++)
		 	{
			 	$("#forlabellist").append((i+1)+"th: "+obj.labellist[i]+"<br>");
			 	$("#content").append("<input type='checkbox' id='"+obj.valuelist[i]+"'><label for='"+obj.valuelist[i]+"'>"+obj.labellist[i]+"</label><br>");	
		 	}
		 	$("#mode").append("<br><b>Multi-Options Multi-Results Mode</b><br><div class='btn-group' data-toggle='buttons'><button type='button' class='btn btn-success' onclick='RSv()'>OK!</button></div>");
		 	$("#memo").append("For options of this select box, if you want make some of them selected separately(which will make serval results as well), just checked the options here and clicked OK!");
				 	
		 }
		
		
		 function loadbuttonforradio()
		 {
			 $("#forlabellist").append("<p><b>Here we have followings options for this radio button:</b></p>");
		 	$("#content").append("<br>");
		 	for(i=0;i<obj.labellist.length;i++)
		 	{
			 	$("#forlabellist").append((i+1)+"th: "+obj.labellist[i]+"<br>");
			 	$("#content").append("<input type='checkbox' id='"+obj.valuelist[i]+"'><label for='"+obj.valuelist[i]+"'>"+obj.labellist[i]+"</label><br>");	
		 	}
		 	$("#mode").append("<br><b>Multi-Options Multi-Results Mode</b><br><div class='btn-group' data-toggle='buttons'><button type='button' class='btn btn-success' onclick='RSv()'>OK!</button></div>");
		 	$("#memo").append("For options of this radio button, if you want make some of them selected separately(which will make serval results as well), just click the mode you want and checked the options here");
		 }
		 
		 
		 
		 
		 function RSv()
		 {
		 	obj.valuelist.splice(0,obj.valuelist.length);
		 	obj.model="SV";
			$("input[type=checkbox]:checked").each(function()
				{
					temp.push($("label[for='"+this.id+"']").text());
					//temp.push($(this).attr("value"));
				 	obj.valuelist.push($(this).prop("id"));
				});
			if(obj.type=="radio")
			{
				obj.appendtext="<br>"+"For the radio button with related options:<br>";
				for(i=0;i<temp.length;i++)
				{
					obj.appendtext=obj.appendtext+"<font color='#FF0000'>"+temp[i]+"</font>;<br>";
				}
				obj.appendtext=obj.appendtext+"had been added into our results!<br>"+"This choice will let out multiple results!"+"<button type='button' class='btn btn-danger' id=deleteitem("+obj.count+") onclick=deleteitem("+obj.count+") style='float:right'>delete this</button></div><br>";
			}
			if(obj.type=="select")
			{
				obj.appendtext="<br>"+"For the select options:<br>";
				for(i=0;i<temp.length;i++)
				{
					obj.appendtext=obj.appendtext+"<font color='#FF0000'>"+temp[i]+"</font>;<br>";
				}
				obj.appendtext=obj.appendtext+"had been added into our results!<br>"+"This choice will let out multiple results!"+"<button type='button' class='btn btn-danger' id=deleteitem("+obj.count+") onclick=deleteitem("+obj.count+") style='float:right'>delete this</button></div><br>";
			}		
			$("#mode").empty();
			$("#content").empty();
			$("#memo").empty();
			$("#memo").append("Following options: ");
			for(i=0;i<temp.length;i++)
			{
				$("#memo").append("<b>"+temp[i]+"</b>; ");
			}
			$("#memo").append("have been added into our results (one more option will let out one more result)</b><br>Just Click submit now!");
			console.log(obj);
			$("#submit").removeAttr("disabled");
		 }
		 
		 function Tocv()
		 {
		 	$("#content").empty();
			$("#content").append("<br><br><input id='text1' type='text'><button type='button' class='btn btn-success' onclick='Tocvvalue()'>Go!</button><br><p>Input the words here</p>");
			$("#memo").empty();
			$("#memo").append("Please type the value you want to insert into this text form, this value will be always added into every results we have! ");
		 }
		 
		 function Tocvvalue()
		 {
		 
			obj.mode="TOCV";
			obj.value=$("#text1").val();
			obj.appendtext="<br>"+"For the text form with value:<br><b><i>'"+obj.count+"th you clicked'</i></b><br>The value: <font color='#FF0000'>"+obj.value+"</font> had been added into our results!<br>"+"This is a One-Constant Value!"+"<button type='button' class='btn btn-danger' id=deleteitem("+obj.count+") onclick=deleteitem("+obj.count+") style='float:right'>delete this</button></div><br>";
			$("#mode").empty();
			$("#content").empty();
			$("#memo").empty();
			$("#memo").append("<b>You have inserted the value: "+obj.value+" to this text form! Click Submit to continue!</b>");
			$("#submit").removeAttr("disabled");

		 }
		 
		 function Tmv()
		 {
			$("#content").empty();
			$("#content").append("<br><br><p>The values by '1', '2', '3'....'9' will be inserted into text form one by one, are you sure you want this?</p><button class='btn btn-success' onclick='Tmvvalue()'>Yes!</button>");
			 
			$("#memo").empty();
			$("#memo").append("Remember! This options will let out 9 results assuming other values unchanged.");
		 }
		 
		 function Tmvvalue()
		 {
		 	obj.mode="TMV";
		 	obj.valuelist=["1","2","3","4","5","6","7","8","9"];
		 	obj.appendtext="<br>"+"For the text form with value:<br><b><i>'"+obj.count+"th you clicked'</i></b><br>The value: <font color='#FF0000'>1, 2, 3, ... 9</font> had been added into our results!<br>"+"This is a Multi-Constant Value!"+"<button type='button' class='btn btn-danger' id=deleteitem("+obj.count+") onclick=deleteitem("+obj.count+") style='float:right'>delete this</button></div><br>";
			$("#mode").empty();
			$("#content").empty();
			$("#memo").empty();
			$("#memo").append("<b>You have inserted the value: '1,2,3,4,5,6,7,8,9' one by one to this text form! Click Submit to continue!</b>");
			$("#submit").removeAttr("disabled");

		 }
		 
		 function Ttxt()
		 {
		 	$("#content").empty();
		 	$("#content").append("<br>Please select a TXT file:<br><input type='file' id='fileInput'><button class='btn btn-success' onclick='Ttxtvalue()'>OK!</button><br>");
		 	$("#memo").empty();
			$("#memo").append("Remember! The words of TXT file should be separated by comma, no space. For example:word1,word2,word3...");
		 }
		 
		 function Ttxtvalue()
		 {
		 	obj.mode="TMV";
		 	obj.valuelist=new Array();
			var fileInput = document.getElementById('fileInput');
			 var tempvaluelist;
			var file = fileInput.files[0];
			var textType = /text.*/;
			/*

*/
			if (file.type.match(textType)) 
			{
				var reader = new FileReader();
				reader.onload = function(e) 
				{
					obj.appendtext="<br>"+"For the text form with value:<br><b><i>'"+obj.count+"th you clicked'</i></b><br>The value:<br> <font color='#FF0000'>";
					tempvaluelist=reader.result.split(",");
					console.log(tempvaluelist);
					for(i=0;i<tempvaluelist.length;i++)
					{	
						obj.valuelist.push(tempvaluelist[i]);
						obj.appendtext=obj.appendtext+tempvaluelist[i]+"<br>";
					}
					obj.appendtext=obj.appendtext+"</font> had been added into our results!<br>"+"This is a Multi-Constant Value!"+"<button type='button' class='btn btn-danger' id=deleteitem("+obj.count+") onclick=deleteitem("+obj.count+") style='float:right'>delete this</button></div><br>";
				}
				reader.readAsText(file);
				
				
				
					
				/*
for(i=0;i<tempvaluelist.length;i++)
				{
					obj.valuelist.push(tempvaluelist[i]);
					obj.appendtext=obj.appendtext+tempvaluelist[i]+"<br>";
				}
*/
				
				$("#mode").empty();
				$("#content").empty();
				$("#memo").empty();
				$("#submit").removeAttr("disabled");
				$("#memo").append("<b>You have successfully inserted the values! Click Submit to continue!</b>");
			} 
			else 
			{
				console.log("File not supported!");
			}
		

		 }
		 
		 
		 function submit()
		 {
			/*
window.opener.temp2=obj;
			window.close();
*/
			 try 
			 {
				 window.opener.ACeditorReturn(obj);
			 }
			 catch (err) {}
			 window.close();
			 return false;
		 }
		 
		 function exit()
		 {
			 window.close();
		 }
    </script>
</head>


<body style="background:#20B2AA">
	<div class="container theme-showcase">
        <div class="row">
        	<div class="title col-md-12">
        		Advance Custom Value Editor
        	</div>
        	<div class="information col-md-12">
        	<br>
        	<p>The detail attribute about this element you click is:<p>
        	<table class="table">
				<thead>
					<tr>
						<th>Count</th>
						<th>Type</th>
						<th>Name</th>
						
					</tr>
				</thead>
				<tbody>
					<tr>
						<td id='count'></td>
						<td id='type'></td>
						<td id='name'></td>
					</tr>
				</tbody>
			</table>
			<div class="col-md-12" id="forlabellist">
			</div>	
        	</div>
        	<div class="modeandcontent col-md-12">
        		<div id='row'>
        			<div id="mode" class="col-md-4">
        			
        				
					</div>
						
					<div id='content' class="col-md-8">
					
					</div>
        		</div>
        	</div>
        	<div id='memo' class="main col-md-12">
        	</div>
        	<div id='button' class="main col-md-12">
        		<button id='submit' class="btn btn-success" onclick='submit()' disabled="true">Submit</button>
        		<button id='cancel' class="btn btn-danger" onclick='exit()'>Cancel</button>
        		
        	</div>
        </div>
	</div>

	
	
	<script src="https://code.jquery.com/jquery.js"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="js/bootstrap.min.js"></script>
</body>
</html>