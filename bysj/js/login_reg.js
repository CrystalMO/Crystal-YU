$(function(){
	// 注册/登陆表单界面切换
	$(".btn_reg").click(function(){
		$(".main_right_login").hide();
		$(".main_right_reg").show();
		$(".title").css({left:"50%"});
	});
	$(".back_btn").click(function(){
		$(".main_right_login").show();
		$(".main_right_reg").hide();
		$(".title").css({left:"35%"});
	});


	//注册验证
	//输入验证
	$("#users_name").blur(function(){
		if($('#users_name').val()==""||$('#users_name').val().length<2||$('#users_name').val().length>12){
			// alert("222")
			$("#e1").eq(0).css({display:"inline-block"});
			$("#users_name").parent().eq(0)
						.css({border:"1px solid red"});
		}else{
			$("#e1").eq(0).css({display:"none"});
			$("#users_name").parent().eq(0)
						.css({border:"1px solid #0c0"});
		}
	})
	$("#users_paw").blur(function(){
		if($('#users_paw').val()==""||$('#users_paw').val().length<6
						||$('#users_name').val().length>12){
			$("#e2").eq(0).css({display:"inline-block"});
			$("#users_paw").parent().eq(0)
						.css({border:"1px solid red"});
		}else{
			$("#e2").eq(0).css({display:"none"});
			$("#users_paw").parent().eq(0)
						.css({border:"1px solid #0c0"});
		}
	})
	$("#paw_confirm").blur(function(){
		if($('#paw_confirm').val()==""||$('#paw_confirm').val()!=$('#users_paw').val()){
			$("#e3").eq(0).css({display:"inline-block"});
			$("#paw_confirm").parent().eq(0)
						.css({border:"1px solid red"});
		}else{
			$("#e3").eq(0).css({display:"none"});
			$("#paw_confirm").parent().eq(0)
						.css({border:"1px solid #0c0"});
		}
	})
	// 提交注册
	$("#submit").click(function(){
		var xml1=new XMLHttpRequest();
		xml1.open("POST","php1/register.php");
		var x1=$("#users_name").val();
		var x2=$("#users_paw").val();
		
		var postr="x1="+x1+"&x2="+x2;
		xml1.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		xml1.send(postr);
		
		xml1.onreadystatechange=function(){
			if(xml1.readyState==4&&xml1.status==200){
				// alert(xml1.responseText);
				$.cookie('user',$('#users_name').val());
				window.location.href="index.html";
			}
		}
		return false;
	})

	/*$(".reg_form").validate({
		// 通过验证后
		submitHandler:function(form){
			$(form).ajaxSubmit({
				url:"php/add.php",
				type:"POST",
		
				success:function(responseText,statusText){
					
					if (responseText) {
						$.cookie('users_name',$("#users_name").val());
						setTimeout(function(){
							location.href="../index.html";
						},1000);
					}
				}
			});
		},
		highlight:function(element,errorClass){
			$($(element).parent()).css('border','1px solid red');
		},
		unhighlight:function(element,errorClass){
			$($(element).parent()).css('border','1px solid #0c0');
		},
		rules:{
			user:{
				required:true,
				minlength:2,
				maxlength:12,
				remote:{
					url:"php/is_user.php",
					type:"POST",
				},
			},
			password:{
				required:true,
				minlength:6,
				maxlength:12
			},
			pawConfirm:{
			required:true,
			equalTo:"#users_paw"
			},
		},
		messages:{
			user:{
				required:"*用户名不得为空",
				minlength:"*用户名不得少于2位",
				remote:"*用户名被占用",
				maxlength:"*用户名不得多于12位"
			},
			password:{
				required:"*密码不得为空",
				minlength:"*密码长度不得少于6位",
				maxlength:"*密码不得多于12位"
			},
			pawConfirm:{
			required:"*请输入确认密码",
			equalTo:"*两次密码输入不一致"
			}
		},
	});*/

	//登陆验证
	$(".btn_login").click(function(){
		var xml2=new XMLHttpRequest();
		xml2.open("POST","php1/login.php");
		var postr2="x1="+$("#login_name").val()+"&y="+$("#login_pwd").val();
		
		if ($("#login_name").val()==""||$("#login_pwd").val()=="") {
			alert("请输入账号密码！");
		}else{
			xml2.setRequestHeader("Content-type","application/x-www-form-urlencoded");
			xml2.send(postr2);
			xml2.onreadystatechange=function(){
				if(xml2.readyState==4&&xml2.status==200){
					var res=xml2.responseText;
					// alert(res)
					if(res){
						window.location="index.html";
						$.cookie('user',$('#login_name').val());
					}else{
						alert("用户名或者密码错误！");
					}
					
					
				}
			}
				return false;
			}
	})
	




});
