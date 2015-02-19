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
			for(var j=0;j<=basenode.children.length;j++)
					{
						
						Resultdowntree($($(basenode).children()[j]),base.levelcount-1,word);
					
					}
		}
	}

//here we need to do downtree




//here we need to do locate every attributes

}



function locatesameattributes(number)
{
	$(".forourtuple11").each(function()
	{
		var node=$(this);
		//because here attributearray[number].partcrawlmarkarray[0]is " ", so here i begin with 1;
		for(var i=0;i<attributearray[number].partcrawlmarkarray.length;i++)
		{
			node=$(node).children()[attributearray[number].partcrawlmarkarray[i]];
		}
		$(node).addClass("forourattribute11");
	});
}