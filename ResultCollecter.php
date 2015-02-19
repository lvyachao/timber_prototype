<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>RESULT INFORMATION COLLECTER</title>

    <link href="css/bootstrap.min.css" rel="stylesheet">
<!--     HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries 
     WARNING: Respond.js doesn't work if you view the page via file:// -->
    <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
    <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <script src="//code.jquery.com/jquery.js"></script>
    <script src="js/jquery.json-2.4.js" type="text/javascript"></script>
    
    
    <style type="text/css"> 
	#drag{position:fixed;top:20px;left:20px;width:375px;height:200px;background:#e9e9e9;border:1px solid #444;border-radius:5px;box-shadow:0 1px 3px 2px #666;}
	</style>
    
    
    
    <script src="js/original/resultC/ResultC.js"></script>
    
</head>




<body>
    <div class="row">
            
       <div class="col-md-2">
	   		<div class="sidebar-menu">
				<font size="5">Result Collector</font>
						   
				<hr/>
					<button onclick="tuplemodel()"><font  size="6">Tuples</font></a></button>
					<button onclick="attributemodel()"><font  size="6">Attribute</font></a></button>
					<button onclick="addattribute()"><font  size="4">Add an attribute</font></a></button>
					<div id="attributearea"></div>
					<button onclick="pagedownmodel()"><font  size="6">Pagedown</font></a>
				    <button onclick="test()"><font  size="6">TEST</font></a>
					<button onclick="send()"><font  size="4">Send to Server</font></a>

				</div>
            </div>
		    <div id="mainscreen" class="col-md-10">
            <iframe name="inline" src="ResultCollecterinline.php"  width="100%" height="100%" scrolling="auto"></iframe>
            </div>
    	</div>
    </div>
        
    <!-- Bootstrap core JavaScript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
    <script src="https://code.jquery.com/jquery.js"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="js/bootstrap.min.js"></script>
</body>
</html>
        