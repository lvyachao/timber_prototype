    var urllist={};
	var modelcontrol=500;  // statue: 0 is for tuple; 1 is for attribute; 2 is for pagedown; 3 is for editing attributes; 500 is for nothing
	var attributecontrolnumber;
	
	tupleclickcount=0;
	attributeclickcount=0;
	pagedownclickcount=0;
	
	var highlighttuple=1;
	var highlightpagedown=1;
	var attnumber=0;
	
	var toptuplecrawlmark;
	
	
	
    function data(click,word)
    {
        this.clicktype=click;
        this.tagname;
        this.domnode;
        this.levelcount=0;          //only useful for calcualte distance between baseroot and click nodes.
        this.crawlmark;
        this.crawlmarkarray=new Array();
        this.highlightclass=word;
    }
    
    function attrdata(number,word)
    {
    	this.mainclass="";
	    this.count=number;
	    this.key;
	    this.value;
	    this.crawlmark;
	    this.crawlmarkarray=new Array();
	    this.highlightclass=word;
	    this.alterpartcrawlmark=new Array();
	    this.alterpartcrawlmarkarray=new Array();
    }
    
    
	var tuple1=new data("tuple1","forourtuple11");
	var tuple2=new data("tuple2","forourtuple11");
	var tuplebaseroot=new data("tuplebaseroot","");
	var tuplearray=new Array();
	
	var pagedown1=new data("pagedown1","forourpagedown11");
	var pagedown2=new data("pagedown2","forourpagedown11");
	var pagedownbaseroot=new data("pagedownbaseroot","");
	
    var attributearray=new Array();
    
    var classstring="";
    
    
    
    
    function testoo()
    {
		var aa=$("#ListViewInner li").first().attr("class");
		console.log(aa);
    }
    
    function sendoo()
    {
    	var sendjson={};
    	
    	sendjson.tuplebaseroot=tuplebaseroot;
    	sendjson.pagedownbaseroot=pagedownbaseroot;
    	sendjson.attributearray=attributearray;
    	console.log(sendjson);
    	$.post( "http://localhost:8080", JSON.stringify(sendjson),"json");
    	
	    
    }
    
    
    
    
    
    
    function tuplemodeloo()
    {
	    modelcontrol=0;
    }  
      
    function attributemodeloo()
    {
    	alert("Please click 'Add an attribute' button and then choose an attribute within the first tuple area you choose");
    }
    
    function pagedownmodeloo()
    {
	    modelcontrol=2;
    }
    
    function addattributeoo()
    {
	    modelcontrol=1;
		alert("please click the attribute and typing the name in textbox leftside and then click 'submit'");
		attributeclickcount++;
	
    }
    
    
    
    
	
    function editattributeoo(number)
    {
    	attributecontrolnumber=number;
	    modelcontrol=3;
    }
    
     function editattributesubmitoo(number)
    {
    	classstring="";
    	$(".forourattribute11").each(function()
		{
			$(this).removeClass("forourattribute11");
/* 			classstring=classstring+$(this).attr('class'); */
		});
		
		
/* 		console.log(classstring); */
		
		
		//here insert function for find most freduency word
	    locatesameattributes(number-1);
    }
    
    

    function addattributesubmitoo(value,number)
    {
    	attributearray[number-1].key=value;
  //  	console.log(number);
    	console.log(attributearray);
    	
    	
    	
   		//this step is for locate, which can share with server-end	 
    	locatesameattributes(number-1);
    	findmainclass(number-1);
    	
    }
    
    
    function getattributes(databit,dom)
    {
	    databit.domnode=$(dom);
		databit.tagname=$(dom).prop('tagName');
		databit.crawlmark=$(dom).attr('crawlmark');
		databit.crawlmarkarray=databit.crawlmark.split("||||");
    }
    
    function getbaseroot(data1,data2,base)
    {
	    if(data1.tagname!=data2.tagname)
	    {
		    alert("two tuples you choose may not the same, please choose again");
	    }
	    else
	    {
		    for(i=0;i<200;i++)
					{
			    		if($(data1.domnode).prop("parentNode")==$(data2.domnode).prop("parentNode"))
						{
							getattributes(base,$(data1.domnode).prop("parentNode"));	
							console.log(base);
							base.levelcount++;
							i=200;
						}
						else
						{
							data1.domnode=$(data1.domnode).prop("parentNode");
							data2.domnode=$(data2.domnode).prop("parentNode");
							base.levelcount++;
						}
						
					}

	    }
    }
    
   
  
      
      
    $(document).ready(function()
	{
				
		$( "*" )
			.mouseover(function(b) 
			{
				if((this.parentNode.tagName=="TR")&&(this.parentNode.style.border!="1px solid rgb(255,255,0)"))
				{
					this.parentNode.style.border="1px solid #E8272C";
				}
				else if(this.style.border!="1px solid rgb(255,255,0)")
				{
					this.style.border="1px solid #E8272C";
					b.stopPropagation();
				}
				
			})
			.mouseout(function() 
			{
				if(this.style.border=="1px solid rgb(232, 39, 44)")
				{
				this.style.border="";
				}
			})
		    .click(function(e)
			{
				if(modelcontrol==0)
				{			
					tupleclickcount++;		
					e.preventDefault();
					e.stopPropagation();
        
					if(tupleclickcount==1)
					{	
						$(this).addClass(tuple1.highlightclass);
						getattributes(tuple1,$(this));
		//				toptuplecrawlmark=$(this).attr('crawlmark');
					}
					else if(tupleclickcount==2)
					{
						$(this).addClass(tuple2.highlightclass);
						getattributes(tuple2,$(this));
						getbaseroot(tuple1,tuple2,tuplebaseroot);
						
			//this step is for locate, which can share with server-end			
						locatebaseroot(tuplebaseroot,"forourtuple11");

						//ssss
					}
				}
				else if(modelcontrol==1)
				{
					e.preventDefault();
					e.stopPropagation();
					var tempattr=new attrdata(attributeclickcount,"forourattribute11");
					tempattr.value=$(this).html();
					tempattr.crawlmark=$(this).attr("crawlmark");
					tempattr.crawlmarkarray=tempattr.crawlmark.split("||||");
					tempattr.partcrawlmark="";
					for(var j=tuple1.crawlmarkarray.length;j<tempattr.crawlmarkarray.length;j++)
					{
						tempattr.partcrawlmark=tempattr.partcrawlmark+tempattr.crawlmarkarray[j]+"||||";
					}
					tempattr.partcrawlmarkarray=tempattr.partcrawlmark.split("||||");					
					tempattr.partcrawlmarkarray.length--;
				
					attributearray.push(tempattr);
					
					$(this).addClass("forourattribute11");
					modelcontrol=500;
				}
				else if(modelcontrol==2) 
				{
					pagedownclickcount++;		
					e.preventDefault();
					e.stopPropagation();
					if(pagedownclickcount==1)
					{
						$(this).addClass(pagedown1.highlightclass);
						getattributes(pagedown1,$(this));
					}
					else if(pagedownclickcount==2)
					{
						$(this).addClass(pagedown2.highlightclass);
						getattributes(pagedown2,$(this));
						getbaseroot(pagedown1,pagedown2,pagedownbaseroot);
						
						//this step is for locate, which can share with server-end	
						locatebaseroot(pagedownbaseroot,"forourpagedown11");
					}
				}
				else if(modelcontrol=3)
				{
					e.preventDefault();
					e.stopPropagation();	
					var tempeditattr={};
					tempeditattr.value=$(this).html();
					tempeditattr.crawlmark=$(this).attr("crawlmark");
					tempeditattr.crawlmarkarray=tempeditattr.crawlmark.split("||||");
					tempeditattr.alterpartcrawlmark="";
					for(var j=tuple1.crawlmarkarray.length;j<tempeditattr.crawlmarkarray.length;j++)
					{
						tempeditattr.alterpartcrawlmark=tempeditattr.alterpartcrawlmark+tempeditattr.crawlmarkarray[j]+"||||";
					}
				//	tempeditattr.alterpartcrawlmark=tempeditattr.alterpartcrawlmark.substring(0, tempeditattr.alterpartcrawlmark.length-1);
					tempeditattr.alterpartcrawlmarkarray=tempeditattr.alterpartcrawlmark.split("||||");					
					tempattr.partcrawlmarkarray.length--;

					
					
					attributearray[attributecontrolnumber-1].value=tempeditattr.value;
					attributearray[attributecontrolnumber-1].editcrawlmark=tempeditattr.crawlmark;
					attributearray[attributecontrolnumber-1].editcrawlmarkarray=tempeditattr.crawlmarkarray;
					attributearray[attributecontrolnumber-1].alterpartcrawlmark.push(tempeditattr.alterpartcrawlmark);
					attributearray[attributecontrolnumber-1].alterpartcrawlmarkarray.push(tempeditattr.alterpartcrawlmarkarray);
					
					console.log(attributearray);
					$(this).addClass("foroureditattribute11");
					modelcontrol=500;

					
				}
				else
				{
					e.preventDefault();
					e.stopPropagation();
					alert("Please choose a clickmodel");
				}
			});
				

    	    	
	});
