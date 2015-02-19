//window.returnTitle=function()
//{
//	
//var hs={obj:"10"};
//
//var hrefs = new Array();
//$("a").each(function(){
//	hrefs.push($(this).attr("href"));
//});
//return JSON.stringify(hrefs);
//}
//
var hrefs=0;
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





window.returnTitle=function()
{
	
	var node=$("*").first();
	$("html").attr("crawlmark","0");	
	addourclass(node,"0");
	
	var b=$("*[crawlmark='0 1 0 11 3 1 0 4 0 0 2 0']");
	
	hrefs=b.attr('href');
return JSON.stringify(hrefs);
}




window.parameterget=function(count){
	hrefs=count;
}



