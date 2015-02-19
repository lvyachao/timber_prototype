	/*
var tempidarray=new Array();
var tempclassarray=new Array();
*/

function uniqueornot(node,array)
{
	var face=0;
	var repeat=new Array();
	
	for(var k=0;k<array.length;k++)
	{
		if(node==array[k])
		{
			repeat.push(k);
			face++;
		}	
		
	}
	
	return repeat;
	
	//return order number for the same value of node in this array
	
}

function findthisorder(repeat,number)
{
	var k;
//	number=number.toString();
	for(var p=0;p<repeat.length;p++)
	{
		if(number==repeat[p])
		{
			k=p;
			p=10000;
		}
		
	}

	return k;
}




function addourclass(dom,word)
{
	var model=0;

	var tempidarray=new Array();
	var tempclassarray=new Array();
	var temptagarray=new Array();
	
	for(var i=0;i<dom.children().length;i++)
	{
		tempidarray.push($(dom.children()[i]).prop('id'));
		tempclassarray.push($(dom.children()[i]).attr('class'));
		temptagarray.push($(dom.children()[i]).prop('tagName'));
	}
	

	


	for(var j=0;j<dom.children().length;j++)
		{
			var thisorderid="0";
			var thisorderclass;
			var thisordertag;
			
			if(tempidarray[j]!="")
			{
				var repeatid=uniqueornot(tempidarray[j],tempidarray);
				//console.log(uniqueornot(tempidarray[j],tempidarray).length);
				if(repeatid.length==1)
				{
					model=1;
					$(dom.children()[j]).attr("crawlmark",word+"||||"+"id,"+tempidarray[j]+";;;;"+"order,"+"0");
				}
				else
				{
					
					if((tempclassarray[j])&&(uniqueornot(tempclassarray[j],tempclassarray).length==1))
					{
						var repeatclass=uniqueornot(tempclassarray[j],tempclassarray);
				
						thisorderclass=findthisorder(repeatclass,j);
						thisorderclass=thisorderclass.toString();
						$(dom.children()[j]).attr("crawlmark",word+"||||"+"class,"+tempclassarray[j]+";;;;"+"order,"+thisorderclass);						
						model=2;
					}
					else
					{
						
						
						thisorderid=findthisorder(repeatid,j);
						thisorderid=thisorderid.toString();
						$(dom.children()[j]).attr("crawlmark",word+"||||"+"id,"+tempidarray[j]+";;;;"+"order,"+thisorderid);

					}

					
					
					
				}
			}
			
			
		
			else if(tempclassarray[j])
			{
				var repeatclass=uniqueornot(tempclassarray[j],tempclassarray);
				
				thisorderclass=findthisorder(repeatclass,j);
				thisorderclass=thisorderclass.toString();
				$(dom.children()[j]).attr("crawlmark",word+"||||"+"class,"+tempclassarray[j]+";;;;"+"order,"+thisorderclass);						
				model=2;
			}
			
			else
			{
				var repeattag=uniqueornot(temptagarray[j],temptagarray);
				
				thisordertag=findthisorder(repeattag,j);
				thisordertag=thisordertag.toString();
				$(dom.children()[j]).attr("crawlmark",word+"||||"+"tag,"+temptagarray[j]+";;;;"+"order,"+thisordertag);						
				
				model=3;
				
			}
			
			
			if($(dom.children()[j]).children().length!=0)
			{	
				if(model==1)
				{
					addourclass($(dom.children()[j]),word+"||||"+"id,"+tempidarray[j]+";;;;"+"order,"+thisorderid);
				}
				else if(model==2)
				{
					addourclass($(dom.children()[j]),word+"||||"+"class,"+tempclassarray[j]+";;;;"+"order,"+thisorderclass);
				}
				else 
				{
					addourclass($(dom.children()[j]),word+"||||"+"tag,"+temptagarray[j]+";;;;"+"order,"+thisordertag);	

				}
			}
			
		}
		
		
	
}


$(document).ready(function()
{
	var node=$("*").first();
	$("html").attr("crawlmark","beginherefromhtml");	
		
	addourclass(node,"beginherefromhtml");
		

});





//-------------------------this part is for node js part---------------//
/*
window.returnTitle=function()
{
	$("html").attr("crawlmark","0");			
	addourclass($("html"),"0");
	
	
	
	
	hrefs=$("#a-page").attr('crawlmark');

return JSON.stringify(hrefs);
}

*/
