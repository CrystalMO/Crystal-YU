$(function(){
	
	//搜索框
	$('.search_txt').focus(function(){
		$('.search_feedback').show();
	}).blur(function(){
		$('.search_feedback').hide();
	});

	//顶部右侧hover
	$('.member_item').hover(function(){
		$(this).addClass('hover');
	},function(){
		$(this).removeClass('hover');
	})

	//返回顶部按钮
	var $backTop=$("#back_top");
	
	$(window).scroll(function(){
		if ($(this).scrollTop()>=400) {
			$backTop.show();
		}
		else
		{
			$backTop.hide();
		}
	});
	$("#back_top").click(function(){
		var sc=$(window).scrollTop();
		$('body,html').animate({scrollTop:0},500);
 	})

	//点击头像修改资料
	var $tx=$(".thumb");

	$tx.click(function(){
		$(".title_title").each(function(){	//更改大标题
			var mytitle='编辑资料';
			$(this).html(mytitle);
		});
		$(".content").eq(0).load('user_page.html #infor');
	})
	
	//签到
	var $sign_in_1=$(".sign_in_1");
	var $sign_in_2=$(".sign_in_2");

	$sign_in_1.click(function(){
		$sign_in_1.hide();
		$sign_in_2.show();
	})

	//个人签名
	var hide_icon=$(".desx");
	var icon=$(".desx .iconfont");

	hide_icon.click(function(){
		icon.hide();
	})

	//城市选择控件
	var pHtmlStr = '';  
       for(var name in pc){  
        	pHtmlStr = pHtmlStr + '<option>'+name+'</option>';  
       }  
       $(".province").html(pHtmlStr);  
       $(".province").change(function(){  
		var pname = $(".province option:selected").text();  
		var pHtmlStr = '';  
		var cityList = pc[pname];  
		for(var index in cityList){  
			pHtmlStr = pHtmlStr + '<option>'+cityList[index]+'</option>';  
		}  
		$(".city").html(pHtmlStr);  
	});  
	$(".province").change(); 

	//左侧按钮
	
	$("#collect_btn").click(function(){
		$(".title_title").each(function(){	//更改大标题
			var mytitle='收藏管理';
			$(this).html(mytitle);
		});
		$(".content").eq(0).load('user_menu.html #collect');
	})
	$("#history_btn").click(function(){
		$(".title_title").each(function(){	
			var mytitle='浏览历史';
			$(this).html(mytitle);
		});
		$(".content").eq(0).load('user_menu.html #history');
	})
	$("#upload_btn").click(function(){
		$(".title_title").each(function(){	
			var mytitle='上传稿件';
			$(this).html(mytitle);
		});
		$(".content").eq(0).load('user_menu.html #upload');
	})

	//收藏部分
	$("#list_menu button").click(function(){
		$(this).addClass("active").siblings().removeClass("active");
	})

	//退出登陆
	$(".logout").hide();

 	// 用户登陆
	$('#user_login').hide();
	if($.cookie('user')){
		$('#user_login').show();
		$('#login_reg').hide();
		$('#user_login').html($.cookie('user'));
		$("#user_login").mouseover(function(){
			$(".logout").show();
			$('.logout').click(function(){
				$.removeCookie('user');
				window.location.href='index.html';
			});
		})
		$("#user_login").mouseout(function(){
			setTimeout(function(){
				$(".logout").hide();
			},500);
		})
	}else{
		$('#user_login').hide();
		$('#login_reg').show();
	};

})