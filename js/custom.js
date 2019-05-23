$(document).ready(function() {
    "use strict";

    //PRE LOADING
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
    $('body').delay(350).css({
        'overflow': 'visible'
    });
	
	$(".tab-head ul li span").click(function(){
		$(".tab-head ul li span").removeClass("tact");
		$(this).addClass("tact");
	});
	$(".tic1").click(function(){$(".tab-body ul li").hide();$(".tshow-1").show();});
	$(".tic2").click(function(){$(".tab-body ul li").hide();$(".tshow-2").show();});
	$(".tic3").click(function(){$(".tab-body ul li").hide();$(".tshow-3").show();});
	$(".tic4").click(function(){$(".tab-body ul li").hide();$(".tshow-4").show();});
	$(".tic5").click(function(){$(".tab-body ul li").hide();$(".tshow-5").show();});

    //GOOGLE MAP - SCROLL REMOVE
    $('.land-3-agen-right')
        .on('click', function() {
            $(this).find('iframe').addClass('clicked')
        })
        .on('mouseleave', function() {
            $(this).find('iframe').removeClass('clicked')
        });


    $(window).scroll(function() {
        if ($(document).scrollTop() > 200) {
            $('.header').addClass('header1');
        } else {
            $('.header').removeClass('header1');
        }
    });
    $(window).scroll(function() {
        if ($(document).scrollTop() > 400) {
            $('.header').addClass('header2');
        } else {
            $('.header').removeClass('header2');
        }
    });

    $(document).on('click', 'a[href^="#"]', function(event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
    });


    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        var sec = $(".ball").offset().top - 0;
        if (scroll >= sec) {
            $(".b22").addClass('b2');
            $(".b33").addClass('b3');
            $(".b44").addClass('b4');
            $(".b55").addClass('b5');
            $(".b66").addClass('b6');
            $(".b77").addClass('b7');
            $(".b88").addClass('b8');
            $(".b99").addClass('b9');
            $(".b100").addClass('b10');
        }
    });



});