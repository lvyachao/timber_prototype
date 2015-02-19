



function Resultdowntree(root,count,word)
    {	
    	
    	if(root.children.length==0)
    	{
	    	return;
    	}
	    if(count<=1)
	    {
	        $($(root).children()[0]).nextAll().addClass(word);
		  	$($(root).children()[0]).addClass(word);
		  	
		  	
		    return;
	    }
	    else
	    {
	   
	
	    	count--;
	    	
				
					for(var j=0;j<=root.children.length;j++)
					{
							Resultdowntree($($(root).children()[j]),count,word);
					}
			
		return;
	    }
   }


function locatebaseroot(base,word)
{
	//console.log("it works");
	var basenode=$(base.tagname+"[crawlmark='"+base.crawlmark+"']");
	for(var i=0;i<=base.levelcount;i++)
	{
		if(base.levelcount<=1)
		{
			
			$($(basenode).children()[0]).nextAll().addClass(word);
		  	$($(basenode).children()[0]).addClass(word);
		  	
		    return;
		}
		else
		{
			/* base.levelcount--; */
/* 			console.log(basenode.children()); */
			for(var j=0;j<=basenode.children.length;j++)
					{
						
						Resultdowntree($($(basenode).children()[j]),base.levelcount-1,word);
					
					}
		}
	}

//here we need to do downtree




//here we need to do locate every attributes

}




/*
function locatealterattribute(dom,attributearray[number],count)
{
	var node1=dom;
	for(var i=0;i<attributearray[number].alterpartcrawlmarkarray[count].length;i++)
	{
		console.log("ss");
	}
}
*/



function locatesameattributes(number)
{
	$(".forourtuple11").each(function()
	{
		var node=$(this);
		var partcontrol=0;

		for(var i=0;i<attributearray[number].partcrawlmarkarray.length;i++)
		{
		//	console.log(attributearray[number].alterpartcrawlmark.length);			
			if(attributearray[number].alterpartcrawlmark.length==0)
			{
				node=$(node).children()[attributearray[number].partcrawlmarkarray[i]];
			}
			else
			{
				if(!node)
				{
					i=10000;
					partcontrol=1;
				}
				else
				{
					partcontrol=0;
					node=$(node).children()[attributearray[number].partcrawlmarkarray[i]];
				}
			}
			
			
		}
		if(partcontrol==1)
		{
				locatealterattributes($(this),attributearray[number],0);
				
		}
		else
		{
		$(node).addClass("forourattribute11");
		}
	});
}





function locatealterattributes(dom,array,number)
{
	var node1=dom;
	for(var i=0;i<array.alterpartcrawlmarkarray[number].length;i++)
	{	
		if(!node1)
		{
			if(!array.alterpartcrawlmarkarray[number+1])
			{
				i=10000;
			}
			else
			{
				locatealterattributes(dom,array,number+1);
				i=10000;
			}
		}
		else
		{
			node1=$(node1).children()[array.alterpartcrawlmarkarray[number][i]];
		}
		
	}
	$(node1).addClass("foroureditattribute11");

}








function findmax(array)
{
    if(array.length == 0)
    	return null;
    var modeMap = {};
    var maxEl = array[0], maxCount = 1;
    for(var i = 0; i < array.length; i++)
    {
    	var el = array[i];
    	if(modeMap[el] == null)
    		modeMap[el] = 1;
    	else
    		modeMap[el]++;	
    	if(modeMap[el] > maxCount)
    	{
    		maxEl = el;
    		maxCount = modeMap[el];
    	}
    }
    return maxEl;
}



function findmainclass(number)
{
	var classstring="";
	$(".forourattribute11").each(function()
	{
		classstring=classstring+" "+$(this).attr("class");
	//	attributearray[number]
	});
	//console.log(classstring);
	var classarray=classstring.split(" ");
	for(var i=0;i<classarray.length;i++)
	{
		if(classarray[i]=="forourattribute11")
		{
			classarray.splice(i, 1);
		}
	}
	var maxclassname=findmax(classarray);
	console.log(maxclassname);
	attributearray[number].mainclass=maxclassname;
}








function locateattributes(attarray)
{
	
}




