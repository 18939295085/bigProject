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
        // autoplay: 3000,
        paginationClickable: true,
        spaceBetween: 30
    });
    /*fullpage*/
    $('#dookbook').fullpage({
        anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6', 'page7'],
        scrollingSpeed: 1000,
        // keyboardScrolling: false,
        // scrollBar: true,
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
            /* if (nextIndex == 7) {
             $.fn.fullpage.setAutoScrolling(false);
             } else if (nextIndex < 7) {
             $.fn.fullpage.setAutoScrolling(true);
             }*/
        },
    });
    $('.phyletic .swi-dis li:first-child').css('display', 'block');
    var clearTime = null;
    var num = 0;
    $('.swiper-slide').mouseenter(function () {
        var el = $(this).children('.swi-dis');
        var els = el.children('li').length;
        clearTime = setInterval(function () {
            num++;
            if (num == els) {
                num = -1;
            } else {
                $(el).children('li').hide();
                $(el).children('li').eq(num).show();
            }
        }, 1000);
    });
    $('.swiper-slide').mouseleave(function () {
        clearInterval(clearTime);
    });
});