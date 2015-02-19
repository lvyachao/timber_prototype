function autodowntree(root,count,word)
{	
    
    if(root.children.length==0)
    {
	   	return;
    }
    
	if(count<=2)
	{
	
		$(root.children[0]).nextAll().addClass(word);
		$(root.children[0]).addClass(word);
		  	
		return;
	}
	else
	{
		
	    count--;
	    console.log(count);	
	    
		for(var j=0;j<root.children.length;j++)
		{
			
			autodowntree(root.children[j],count,word);
					
		}
			
	return;
	}
}



function highlight(base,count,word)
{
	console.log(base);
	if(count==2)
	{
		$(childnode).nextAll().addClass(word);
	}
	else
	{
		count--;
		for(var i=0;i<base.children.length;i++)
		{
					
			autodowntree(base.children[i],count,word);
		}
	}
}


//usage: highlight(baseroot,3,"selectedtuple11");