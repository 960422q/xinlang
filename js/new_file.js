$(function(){
	$(".headerBar .leftNav li").hover(function(){
		$(this).find(".showList").stop().slideToggle()
	})
	$(".searchTxt").click(function(){
		$(this).siblings(".list").toggle();
		$('.list li').click(function(){
					$('.searchTxt').html($(this).html())
					$('.list').hide();
				})

	})
	
	
		$('#span i').click(function(){
			$('#span i').removeClass('active');
			$('.comList').removeClass('show');
			$(this).addClass('active');	
			$('.comList').eq($(this).index()).addClass('show');
		})
		
		$('.tab_title li').click(function(){
				$('.tab_title li div').removeClass('active');
				$(this).find('div').addClass('active');

				$('.item').removeClass('show');
				$('.item').eq($(this).index()).addClass('show');
			})

		//全选
			$('.allChecked').click(function(){
				$('.list_item li label :checkbox').prop('checked',true);
			})
			//全不选
			$('.noChecked').click(function(){
				$('.list_item li label :checkbox').prop('checked',false);
			})
			//反选
			$('.fanChecked').click(function(){
				$('.list_item li label :checkbox').each(function(index){
					$('.list_item li label :checkbox').eq(index).prop('checked',!$('.list_item li label :checkbox').eq(index).prop("checked"));
				})
			})
		
		function tab(top,con){
				$(top).hover(function(){
					$(top).removeClass('active');
					$(this).addClass('active');
					$(con).addClass('hide');
					$(con).eq($(this).index()).removeClass('hide');
				})
			}
		
		function qh(top,con){
				$(top).hover(function(){
					$(top).removeClass('active');
					$(this).addClass('active');
					$(con).removeClass('show');
					$(con).eq($(this).index()).addClass('show');
				})
			}

		
		tab('.video li','.vid');
		tab('.cai li','.love');
		tab('.play li','.new');
		qh('.che li','.chexin div');
		qh('.yl li','.ylcon>div');
		qh('.cj li','.cjcon>div');
		qh('.tu li','.tulove>div');
		qh('.titBg li div','.smList ul');
		qh('.ds li ','.dsxs div');
		qh('.kj li ','.kjts div');
		qh('.yx span ','.yxhd div');
		qh('.sj li ','.sjsm div');
		qh('.yy span ','.yyzx div');

})
