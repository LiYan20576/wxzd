$(function() {
    $('.nav-btn').on('click', function(e) {
        e.stopPropagation();
        if ($(this).hasClass('cur')) {
            $(this).removeClass('cur');
            $('.m-nav').stop().slideUp();
            // onTouchMove(false);
            $('body').css("top", "").removeClass('no-scroll');
            $(window).scrollTop(bodyScroll);
        } else {
            $(this).addClass('cur');
            $('.m-nav').stop().slideDown();
            bodyScroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
            $('body').addClass('no-scroll').css({ top: -bodyScroll });
        }
    });

    $('.m-nav li .tit').on('click', function(e) {
        e.stopPropagation();
        var _this = $(this);
        var thisLi = _this.parent();
        if (thisLi.hasClass('on')) {
            thisLi.removeClass('on');
            _this.next().stop().slideUp();
        } else {
            thisLi.addClass('on').siblings().removeClass('on');
            $('.m-nav li .navson').stop().slideUp();
            _this.next().stop().slideDown();
        }
    })






})