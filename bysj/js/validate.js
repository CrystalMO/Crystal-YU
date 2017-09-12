var codeChars = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 
 'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',
'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z');
document.getElementById("checkCode").innerHTML="";
var code="";
function createCode(){
	document.getElementById("checkCode").innerHTML="";
	for(var i = 0; i < 4; i++) 
	{
		var charNum =parseInt(Math.random() * 62);
		code = codeChars[charNum];
		document.getElementById("checkCode").innerHTML+=code;
	}

}	
$("#inputCode").blur(function(){
	var inputCode=document.getElementById("inputCode").value;
	var inp2=document.getElementById("checkCode").innerHTML;
	if(inputCode.toUpperCase()!=inp2.toUpperCase()){
		$("#inputCode").css({background:"none"});
	}else{
	$("#inputCode").css({'background':'url("../image/succ.png") no-repeat 98% ',
		'background-size' :'15px 15px'});

}
	if(inputCode.toUpperCase()!=inp2.toUpperCase()){
	return false;

	}

})

function validateCode(){
	var inputCode=document.getElementById("inputCode").value;
	if(inputCode.length <= 0) 
	{	
		alert("请输入验证码！");
	}

	else if(inputCode.toUpperCase() != document.getElementById("checkCode").innerHTML.toUpperCase()) 
{	

	alert("验证码输入有误！");
	return false;
	}else {	

		}

 }
	createCode();
	$('#checkCode,#createma').click(function(){
		createCode();
	});
	$('#inputCode').blur(function(){
	validateCode();
	});
	$('#registe').click(function(){
		validateCode();
});
