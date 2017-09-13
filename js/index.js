$(function(){

	// 搜索框反馈
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

	//焦点图跟随鼠标的文字
	var bg=$('.header_banner').find('.bg');
	var txt=$('.header_banner').find('.text');
	var disX=0;
	var disY=0;

	bg.hover(function(ev){
		disX=ev.clientX;
		disY=ev.clientY;

		txt.css({left:ev.clientX,top:ev.lientY});
		txt.show();

		$(document).mousemove(function(ev){
			var offset_left=ev.clientX+20;
			var offset_top=ev.clientY-bg.offset().top-txt.height()/2+4;

			txt.css({left:offset_left,top:offset_top});
		});	
	},function(){
		txt.hide();
	});
	//nav导航栏顶部定位
	var $header_nav=$(".header_nav");

	$(window).scroll(function(){
		if ($(this).scrollTop()>=184) {
			$header_nav.addClass("header_nav_fixed");
		}
		else
		{
			$header_nav.removeClass("header_nav_fixed");
		}
	});

	//轮播图
	var x=0;
	function move(){
		x++;
		if(x>4){x=0}
		$("#items li").eq(x).siblings().stop(true,true).animate({opacity:0},1000);
		$("#items li").eq(x).stop(true,true).animate({opacity:1},1000);
		$("#dot span").eq(x).siblings().css({background:"#fff",width:10});
		$("#dot span").eq(x).css({background:"#fd4c5b",width:20,borderRadius:5});
	}
	var y=setInterval(move,2000);
	$("#dot span").mouseover(function(){
		clearInterval(y);
		x=$(this).index()-1;
		move();
	})
	$("#dot span").mouseout(function(){
		y=setInterval(move,2000);
	})

	//排行榜
	$("#month_rank").click(function(){
		$("#month_rank_div").css({display:"block"});
		$("#day_rank_div").css({display:"none"});
		$(".area_tab_btn").find("#month_rank").addClass("active");
		$(".area_tab_btn").find("#day_rank").removeClass("active");
	});
	$("#day_rank").click(function(){
		$("#day_rank_div").css({display:"block"});
		$("#month_rank_div").css({display:"none"});
		$(".area_tab_btn").find("#day_rank").addClass("active");
		$(".area_tab_btn").find("#month_rank").removeClass("active");
	});
	
	//选项卡
	var oli=$(".article_tab li");
	var odiv=$(".article_main .article_div");
	oli.mouseover(function(){
		oli.eq($(this).index()).addClass("active").siblings().removeClass("active");
		odiv.hide().eq($(this).index()).show();
	});

	//返回顶部
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
 	});

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
	
	//分类跳转
	var $nav=$(".nav_item");
	$nav.click(function(){
		$nav.eq($(this).index()).addClass("nav_cur")
		.siblings().removeClass("nav_cur");
	});

	$("#donghua").click(function(){
		$("#main_content").load("guid_item.html");
	})

	
})