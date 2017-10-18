/**
 * Created by Administrator on 2017/9/30.
 */
'use strict';
$(function () {
    /*swiper*/
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        slidesPerView: 5,
        centeredSlides: true,
        loop: true,
        autoplay: 5000,
        paginationClickable: true,
        spaceBetween: 30
    });
    $('.phyletic').mouseenter(function () {
        swiper.stopAutoplay()
    }).mouseleave(function(){
       swiper.startAutoplay()
    });
    /*fullpage*/
    $('#dookbook').fullpage({
        anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6', 'page7'],
        scrollingSpeed: 1000,
        // keyboardScrolling: false,
        scrollBar: true,
        menu: '#menu',
        onLeave: function (index, nextIndex, direction) {
//                console.log(nextIndex + "=----" + direction)

            if (nextIndex > 1) {
                if (nextIndex == 2 && direction == 'down') {
                    setTimeout(function () {
                        $("#menu").show();
                    }, 100);
                } else {
                    $("#menu").show();
                }
            } else {
                $("#menu").hide();
            }
            if (nextIndex == 7) {
                $.fn.fullpage.setAutoScrolling(false);
            } else {
                $.fn.fullpage.setAutoScrolling(true);
            }
        },
    });
    $('.phyletic .swi-dis li:first-child').css('display', 'block');
    $('.bigbooks ul li:last-child').css('display', 'block');
    var clearTime = null;
    var num = 0;
    var sum = 0;
    $('.swiper-slide').mouseenter(function () {
        var el = $(this).children('.swi-dis');
        var els = el.children('li').length;
        var bl = $('.bigbooks').children('ul');
        var bls = bl.children('li').length;
        clearTime = setInterval(function () {
            num++;
            sum++;
            if (num == els || sum == bls) {
                num = -1;
                sum = -1;
            } else {
                $(el).children('li').hide();
                $(el).children('li').eq(num).show();
                $(bl).children('li').hide();
                $(bl).children('li').eq(sum).show();
            }
        }, 2000);
    });
    $('.swiper-slide').mouseleave(function () {
        clearInterval(clearTime);
    });
});