var attclickcount1=0;
function test()
{
	inline.window.testoo();
}

function send()
{
	inline.window.sendoo();
}		
		
function tuplemodel()
{
	inline.window.tuplemodeloo();
}

function attributemodel()
{
	inline.window.attributemodeloo();
}

function pagedownmodel()
{
	inline.window.pagedownmodeloo();
}


function addattribute()
{
	attclickcount1++;
	$("#attributearea").append("<input id='attr"+attclickcount1+"' type='text'></input><button type='button' onclick='addattributesubmit("+attclickcount1+")'>Submit</button><button type='button' onclick='editattribute("+attclickcount1+")'>Choose fixed attribute</button><button type='button'onclick='editattributesubmit("+attclickcount1+")'>submit</button><button type='button' onclick='manualattribute("+attclickcount1+")'>manualfix</button>");
	inline.window.addattributeoo();
}

function addattributesubmit(number)
{
	
	inline.window.addattributesubmitoo($("#attr"+attclickcount1).val(),number);
}

function editattribute(number)
{
	inline.window.editattributeoo(number);
}

function editattributesubmit(number)
{
	inline.window.editattributesubmitoo(number);
}