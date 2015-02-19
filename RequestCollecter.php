<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>REQUEST INFORMATION COLLECTER</title>
    
    <!-- Bootstrap -->
    <link href="css/bootstrap.min.css" rel="stylesheet">
<!--     HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries 
     WARNING: Respond.js doesn't work if you view the page via file:// -->
    <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
    <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <script src="//code.jquery.com/jquery.js"></script>
    <script src="js/jquery.json-2.4.js" type="text/javascript"></script>
    
    
    <style type="text/css">
    	span.word1
    	{
	    	font-size: 17px;
    	}	
    </style>
    
    
    
    <script src="js/original/requestC/RequestC.js"></script>
    
    <script>
    function sendjson()
    {
    	var tempdomain='<?php echo $_GET["InputURL"]; ?>';
    	var tempdomain2=tempdomain.split("/");
    	autopart.domain=tempdomain2[0]+"//"+tempdomain2[2];
    
		console.log(dataarray);
		console.log(autopart);   	
    }
    	
    </script>
    
    
</head>
<body>
        <div class="row">
            <div class="col-md-4">
                <div class="panel panel-primary affix" style="overflow:scroll; max-height:650px;z-index: 9999">
                    <div class="panel-heading"> 
					<?php
	       	        echo "<p style=font-family:verdana;>1. Click all the input text form you want to adept into your crawler </p>";
                    echo "<p style=font-family:verdana;>2. Choose crawler mode for each input text form you clicked </p>";
                    ?> 
                    </div>
                    <div class="panel-body row">
                         <div id="forinput" class="col-md-12"></div>
                         
                         <div id="memo" class="col-md-12"></div>
                         <div id="submit" class="col-md-12"><button type='button' class='btn btn-success' onclick="sendjson()">submit</button></div>
                    </div>
                </div>
            </div>
            <div class="col-md-8 col-md-offset-4">
                <div class="panel-default">
                   	<?php
					$query="RequestCollecterinline.php?".$_SERVER['QUERY_STRING'];  
					?>
                    <iframe name="inline" src="<?php echo $query ?>"  width="800" height="1000">
                    </iframe>
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
        