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

	//退出登陆
	$(".logout").hide();

 	// 用户登陆
	// $('#user_login').hide();
	// if($.cookie('user')){
	// 	$('#user_login').show();
	// 	$('#login_reg').hide();
	// 	$('#user_login').html($.cookie('user'));
	// 	$("#user_login").mouseover(function(){
	// 		$(".logout").show();
	// 		$('.logout').click(function(){
	// 			$.removeCookie('user');
	// 			window.location.href='index.html';
	// 		});
	// 	})
	// 	$("#user_login").mouseout(function(){
	// 		setTimeout(function(){
	// 			$(".logout").hide();
	// 		},500);
	// 	})
	// }else{
	// 	$('#user_login').hide();
	// 	$('#login_reg').show();
	// };
	

})