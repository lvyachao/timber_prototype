function addourclass(dom,word)
{
	
	
		for(var i=0;i<dom.children().length;i++)
		{
			$(dom.children()[i]).attr("crawlmark",word+" "+i);
			if($(dom.children()[i]).children().length!=0)
			{	
				addourclass($(dom.children()[i]),word+" "+i);
			}
			
		}
		
		
	
}


var addclass="0";
$(document).ready(function()
	{
	//	$("html").addClass("0");		
	//	addourclass($("html"),"0");
		console.log.log("ss");
		
	});
		



//-------------------------this part is for node js part---------------//
window.returnTitle=function()
{
	$("html").addClass("0");		
	addourclass($("html"),"0");
	hrefs=$("#a-page").attr('crawlmark');

return JSON.stringify(hrefs);
}

