document.write('<script src="Resultpre.js" type="text/javascript"></script>');






var phantom = require('phantom');
var express = require('express')
var bodyParser = require('body-parser')
var app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())



var tuplebaseroot;
var pagedownbaseroot;
var attributearray;







function phantombegin(url)
{
	phantom.create(function (ph) 
	{
		ph.createPage(function (page) 
		{
			page.open(url, function (status) 
			{
				console.log("opened ready? ", status);
				page.evaluate(function () { return document.title; }, function (result) 
				{
					console.log('Page title is ' + result);
					ph.exit();
				});
			});
		});
	});
}



app.use(function (req, res, next) {
  var post_data = req.body;
  //console.log(req.body); 
   //console.log(JSON.parse(Object.keys(req.body)[0]));
  
  var obj = JSON.parse(Object.keys(req.body)[0]);
  tuplebaseroot=obj.tuplebaseroot;
  pagedownbaseroot=obj.pagedownbaseroot;
  attributearray=obj.attributearray;
  phantombegin("http://www.ebay.com/sch/i.html?_from=R40&_trksid=m570.l1313&_nkw=games&_sacat=0");
//  console.log(tuplebaseroot);
//  console.log(attributearray[0]);
 
 // console.log(obj);
  //console.log(JSON.stringify(obj, null, 2));
})

app.listen(8080);