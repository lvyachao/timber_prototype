 



function firstpagegetpagedownurl()
{
	$(".forourpagedown11").each(function()
	{
		for(value in urllist)
		{
			if((urllist[value]==$(this).html())&&$(this).attr('href')!="")
			{
				var key=$(this).html();
				urllist[key]=$(this).attr('href');
			}
		}
	});
}


function getpagedownurl()
{
	
}