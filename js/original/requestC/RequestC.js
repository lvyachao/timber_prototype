    var dataarray= new Array();
    var autopart;
    var appendcode="";
    var i=0;
    
    
    
    
    
    
    function sendautopart(pack)
    {
    	if(i==0)
    	{
	    autopart=pack;
	    
	 //   console.log(dataarray);
	    i++;
	    }
    }
    
    function send(data)
    {
       // console.log(data);
        dataarray.push(data);
        $("#forinput").empty();
        appendcode="";
	    for(var i=0;i<dataarray.length;i++)
	    {
	    	if(dataarray[i]!=""){
		    appendcode=appendcode+dataarray[i].appendtext;
		    }
	    }
	//    console.log(dataarray);
	    $("#forinput").append(appendcode);
        
    }
    
    function deleteitem(number)
    {	
    	inline.window.deleteitem(number);
	    number=number-1;
	    dataarray.splice(number, 1,"");
	 //   console.log(dataarray);
	    $("#forinput").empty();
        appendcode="";
	    for(var i=0;i<dataarray.length;i++)
	    {
	    	if(dataarray[i]!=""){
		    appendcode=appendcode+dataarray[i].appendtext;
		    }
	    }
	    $("#forinput").append(appendcode);
	    
    }
        
    function ACeditor(number)    
    {
    	var temp;
    	number=number-1;
    	var strWindowFeatures = "menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes,width=1000,height=600";
    	temp=window.open("ACeditor.php","Advance Custom Editor",strWindowFeatures);
    	temp.parament=dataarray[number];
	    
    }
    
    function ACeditorReturn(result)
    {
	    //console.log(result);
	    //console.log(dataarray[(result.count-1)]);
	 
	    dataarray[(result.count-1)]=result;
	    /* dataarray[(result.count-1)].appendtext="<p><br><span class='word1'>Values has been successful added into our results!</span><button type='button' class='btn btn-danger' id=deleteitem("+(result.count)+") style='float:right' onclick=deleteitem("+(result.count)+")>delete this</button><br></p>"; */
	    
	  $("#forinput").empty();
        appendcode="";
	    for(var i=0;i<dataarray.length;i++)
	    {
	    	if(dataarray[i]!=""){
		    appendcode=appendcode+dataarray[i].appendtext;
		    }
	    }
	    $("#forinput").append(appendcode);
    }
    
    function Call(number)
    {
    	number=number-1;
	    dataarray[number].model="CA";
	    dataarray[number].appendtext="<br>"+"For the checkbox button with label:<br><b><i>'"+dataarray[number].label+"'</i></b><br>You choose<font color='#FF0000'> 'Always Checked' </font>option, which will affect all results.<br><button type='button' class='btn btn-danger' id=deleteitem("+(number+1)+") style='float:right' onclick=deleteitem("+(number+1)+")>delete this</button><div><br>";
	    $("#forinput").empty();
        appendcode="";
	    for(var i=0;i<dataarray.length;i++)
	    {
	    	if(dataarray[i]!="")
	    	{
		    appendcode=appendcode+dataarray[i].appendtext;
		    }
	    }
	    $("#forinput").append(appendcode);
    }
    function Callno(number)
    {
	   number=number-1;
	   dataarray[number].model="CAN";
	   dataarray[number].appendtext="<br>"+"For the checkbox button with label:<br><b><i>'"+dataarray[number].label+"'</i></b><br>You choose<font color='#FF0000'> 'Always not Checked' </font>option, which will affect all results.<br><button type='button' class='btn btn-danger' id=deleteitem("+(number+1)+") style='float:right' onclick=deleteitem("+(number+1)+")>delete this</button><div><br>";
	   $("#forinput").empty();
       appendcode="";
	   for(var i=0;i<dataarray.length;i++)
	   {
	       if(dataarray[i]!="")
	       {
		   appendcode=appendcode+dataarray[i].appendtext;
		   }
	   }
	    $("#forinput").append(appendcode); 
	}
