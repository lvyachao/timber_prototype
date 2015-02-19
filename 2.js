var hrefs=0;
var addclass="0";




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


function addclassbegin()
{
	console.log("add class begin");
	var node=$("*").first();
	$("html").attr("crawlmark","0");			
	addourclass(node,"0");
}





window.prefileexcute=function()
{
	addclassbegin();
	//Resultpre.addclassbegin():
}




/*
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
*/

window.test=function()
{
	var aa=$("#CenterPanel").attr('crawlmark');
	return JSON.stringify(aa);
}



/*
window.returnTitle=function()
{
	setTimeout(function()
	{
		var b=$("*[crawlmark='0 1 5 1 2 0 0 0 5 0 0 3 1 1 0 2 0 0']");
		hrefs=b.html();
	}, 5000);
	
	
	/*
var node=$("*").first();
	$("html").attr("crawlmark","0");	
	addourclass(node,"0");
	
	var b=$("*[crawlmark='0 1 0 11 3 1 0 4 0 0 2 0']");
	
	hrefs=b.attr('href');
*/
//hrefs="aaaa";
//return JSON.stringify(hrefs);
//}



/*


window.parameterget=function(count){
	hrefs=count;
}

*/


