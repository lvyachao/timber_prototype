
    var send={};
    var autopart=new Array();
    var countnumber=1;
    
    
    
    function clicked(type,countnumber)
    {
        this.type=type;
        this.name="";
        this.value="";
        this.appendtext="";
        this.count=countnumber;
       
    }
    var textclicked=new clicked("text",countnumber);
    var radioclicked=new clicked("radio",countnumber);
    var selectclicked=new clicked("select",countnumber);
    var checkboxclicked=new clicked("checkbox",countnumber);
    
    var tempappendtext;     
    var hiddenname;
    var hiddenvalue;
    var hiddenlist;
    var selectname=[];
    var selectvalue=[];
    var selectlist="";
      
    function deleteitem(number)
    {
    	var temp=$("."+number+"thclicked");
	    //var temp=getElementsByClassName(number+"thclicked");
	   
	    temp.removeClass("fordelete");
	    temp.val("");

	    temp.removeClass(number+"thclicked");
    }

	$(document).ready(function()
	{                                        
    	$("form").click(function()
    	{                                                         //form click
			autopart.method=this.method;                                                           //method
			var beforeaction=this.action;   
			var formaction="";
      
			for(var t=3;t<beforeaction.split("/").length;t++)                                                        //action
			{
				formaction=formaction+"/"+beforeaction.split("/")[t];
			}
			var formdomain='temp';

			autopart.domain=formdomain;
			autopart.action=formaction;
                                              
            
			hiddenname=[];
			hiddenvalue=[];
			hiddenlist="";
			$(this).find("input[type=hidden]").each(function()
			{                               //hidden part
				hiddenname.push($(this).attr("name"));
				hiddenvalue.push($(this).val());
			});
			
			for(t=0;t<hiddenname.length;t++)
			{
				hiddenlist=hiddenlist+hiddenname[t]+"="+hiddenvalue[t]+";    ";
				autopart[hiddenname[t]]=""+hiddenvalue[t];
			}
  
//     
     
     		selectname=[];
	 		selectvalue=[];
	 		selectlist="";
	 		$(this).find("select:not(:disabled)").each(function()
	 		{                         //select part
		 		selectname.push($(this).attr("name"));
		 		selectvalue.push($(this).val());
		 	});
//     
      		for(t=0;t<selectname.length;t++)
	  		{
		  		selectlist=selectlist+selectname[t]+"="+selectvalue[t]+";    ";
		  		autopart[selectname[t]]=""+selectvalue[t];
		  	}
          
		  	radioname=[];
		  	radiovalue=[];
		  	radiolist="";
		  	$(this).find(":radio:checked:not(:disabled)").each(function()
		  	{                                 //radio part
			  	radioname.push($(this).attr("name"));
			  	radiovalue.push($(this).val());
			});
      
			for(t=0;t<radioname.length;t++)
			{
				radiolist=radiolist+radioname[t]+"="+radiovalue[t]+";    ";
				autopart[radioname[t]]=""+radiovalue[t];
			}

      
			checkname=[];
			checkvalue=[];
			checklist="";
			$(this).find(":checkbox:checked").each(function()
			{
				checkname.push($(this).attr("name"));
				checkvalue.push($(this).val()); 
			});
      
			for(t=0;t<checkname.length;t++)
			{
				checklist=checklist+checkname[t]+"="+checkvalue[t]+";    ";
				autopart[checkname[t]]=""+checkvalue[t];
			}
			parent.sendautopart(autopart);
      
    });

    
	$("input[type=text]").click(function()
	{
		if(!$(this).hasClass("fordelete"))
        { 
	    	this.value=countnumber+"th you clicked";
	        $(this).addClass(countnumber+"thclicked");
	        $(this).addClass("fordelete");
			tempappendtext="<br>"+"For the text form with value:<br><b><i>'"+countnumber+"th you clicked'</i></b><br>";
			tempappendtext=tempappendtext+"<font color='#FF0000'>Please click the Advance Custom Editor</font><br>";
			tempappendtext=tempappendtext+"<button type='button' class='btn btn-primary' onclick='ACeditor("+countnumber+")'>Advance Custom Editor</button>";
			tempappendtext=tempappendtext+"<button type='button' class='btn btn-danger' id=deleteitem("+countnumber+") onclick=deleteitem("+countnumber+") style='float:right'>delete this</button></div><br>";
	    
			var textdata=Object.create(textclicked);
			textdata.count=countnumber;
			textdata.name=this.name;
			textdata.appendtext=tempappendtext;
			
			parent.send(textdata);
			countnumber++;
		}
	}); 


	$("input[type=radio]").click(function()
	{
        
        if(!$(this).hasClass("fordelete"))
        { 
    		tempappendtext="<br>"+"For the radio button with label:<br><b><i>'"+$("label[for='"+this.id+"']").text()+"'</i></b><br>";
			tempappendtext=tempappendtext+"<font color='#FF0000'>Please click the Advance Custom Editor</font><br>";
			tempappendtext=tempappendtext+"<button type='button' class='btn btn-primary' onclick='ACeditor("+countnumber+")'>Advance Custom Editor</button>";
			$(this).addClass(countnumber+"thclicked");
			$(this).addClass("fordelete");
		 
			tempappendtext=tempappendtext+"<button type='button' class='btn btn-danger' id=deleteitem("+countnumber+") onclick=deleteitem("+countnumber+") style='float:right'>delete this</button></div><br>";
    
			var radiodata=Object.create(radioclicked);
			radiodata.count=countnumber;
			radiodata.name=this.name;
			radiodata.valuelist=new Array();
			radiodata.labellist=new Array();
			$("input[name="+this.name+"]").each(function()
			{
				radiodata.valuelist.push(this.value);
				radiodata.labellist.push($("label[for='"+this.id+"']").text());
			});
		//radiodata.label=$("label[for='"+this.id+"']").text();
			radiodata.appendtext=tempappendtext;
			parent.send(radiodata);
			countnumber++;
		}
	}); 


    $("input[type=checkbox]").click(function()
    {
    	if(!$(this).hasClass("fordelete"))
        { 
	    	tempappendtext="<br>"+"For the checkbox button with label:<br><b><i>'"+$("label[for='"+this.id+"']").text()+"'</i></b><br>";
	    	tempappendtext=tempappendtext+"<font color='#FF0000'>We got two crawler options for this checkbox</font><br>";
			tempappendtext=tempappendtext+"<button type='button' class='btn btn-primary' onclick='Call("+countnumber+")'>Always Checked</button>";
			tempappendtext=tempappendtext+"<button type='button' class='btn btn-primary' onclick='Callno("+countnumber+")'>Always not Checked</button>";    
			tempappendtext=tempappendtext+"<button type='button' class='btn btn-danger' id=deleteitem("+countnumber+") style='float:right' onclick=deleteitem("+countnumber+")>delete this</button><div><br>";
	        $(this).addClass(countnumber+"thclicked");
	        $(this).addClass("fordelete");
	        
	        
			var checkboxdata=Object.create(checkboxclicked);
			checkboxdata.count=countnumber;
			checkboxdata.name=this.name;
			checkboxdata.value=this.value;
			checkboxdata.label=$("label[for='"+this.id+"']").text();
			checkboxdata.appendtext=tempappendtext;
	        parent.send(checkboxdata);
			countnumber++;
		}
   }); 






   $("select").click(function()
   {
	   if(!$(this).hasClass("fordelete"))
       { 
		   tempappendtext="<br>"+"For the select dropdown menu whose first option is:<br><b><i>'"+this.options[0].innerHTML+"'</i></b><br>";
		   tempappendtext=tempappendtext+"<font color='#FF0000'>Please click the Advance Custom Editor</font><br>";
		   tempappendtext=tempappendtext+"<button type='button' class='btn btn-primary' onclick='ACeditor("+countnumber+")'>Advance Custom Editor</button>";
		   tempappendtext=tempappendtext+"<button type='button' class='btn btn-danger' id=deleteitem("+countnumber+") style='float:right' onclick=deleteitem("+countnumber+")>delete this</button><div><br>";
		   $(this).addClass(countnumber+"thclicked");
	       $(this).addClass("fordelete");
		   
		   
		   var selectdata=Object.create(selectclicked);
		   selectdata.count=countnumber;
		   selectdata.valuelist=new Array();
		   selectdata.labellist=new Array();
		   for(i=0;i<this.options.length;i++)
	       {
	       	   selectdata.valuelist.push(this.options[i].value);
		       selectdata.labellist.push(this.options[i].innerHTML);
	       }
		   selectdata.name=this.name;
		   selectdata.appendtext=tempappendtext;
		   parent.send(selectdata); 
		   countnumber++;
	  }

   }); 



    
    
    
});

