//海报视频
$(document).ready(function () {
    $(".play_open").click(function () {
        var $h = $(".play_open").height();
        $("#video_box").html('<video id="banner_player" controls="controls" autoplay="autoplay" src="video/bp.mp4"></video>');
        $("#video_box").height($h);
        $(this).hide();
    });
})

//活动报名
$(document).ready(function () {

    $(".reg_open").mouseenter(function () {
        $(this).stop();
        $(this).animate({"width": "80px"}, 300);
    }).mouseleave(function () {
        $(this).stop();
        $(this).animate({"width": "60px"}, 300);
    });

    $(".reg_open").click(function () {
        $(".reg").show(600);
    });

    $(".reg_close").click(function () {
        $(".reg").hide(600);
    });

    $(".submit").click(function () {
        alert("尽管叫我疯子，不准叫我萨比");
        $(".reg").hide(600);
    })
})


//日程表
$(document).ready(function () {
    var $calendar = $('.calendar');
    var $tb = $('.tb');
    var $drop = $('.backdrop');
    var t = 500;

    var calendarHide = function () {
        $tb.fadeOut(t);
        $drop.fadeOut(t);
        $('.calendar-nav li', $calendar).removeClass('active');
    };

    $calendar.on('mouseover', '.calendar-nav li', function () {
        $(this).off();
        var $this = $(this);
        var index = $this.index();
        if (!$this.is('.active')) {
            $this.addClass('active').siblings().removeClass('active');
            $drop.fadeIn(t);
            $tb.fadeOut(t).eq(index).fadeIn(t);
        }
    }).on('mouseleave', function () {
        calendarHide();
    }).on('mouseover', '.backdrop', function () {
        calendarHide();
    });
})

//圆形菜单
var menu, map, poster;
$(document).ready(function () {
    menu = $('.virtual');
    map = $(".mid_play360");
    poster = $(".mid_poster");
    $("area", "map").each(function () {
        var id = $(this).attr("id");
        $(this).mouseover(function () {
            activeMenuItem(id);
        });
    });
    activeMenuItem('c1')
});

function activeMenuItem(id) {
    if (!id || id == "mid_bg360") {
        return;
    }
    var item = id.split("c").pop();
    poster.attr("src", "images/snow/bg360_" + item + ".png");
    menu.find('.img').attr('class', 'img ' + id);
}

//手风琴
$(document).ready(function () {
    var $index;
    $(".desc > li").on("mouseenter", function () {
        $index = $(this).index()
        $(".play_video > li").eq($index).stop(true, false).animate({
            "width": "100%",
            "display": "block"
        }).siblings().stop(true, false).animate({"width": 0, "opacity": "none"});
    })

    $(".slide").on("mouseleave", function () {
        $(".play_video > li").stop(true, true).animate({"width": "25%", "hight": "100%", "display": "block"});
    })

    $(".play_video > li").on("click", function () {
        $(this).stop(true, false).animate({"width": "63%"}).siblings().stop(true, false).animate({"width": "12%"});
    })

})

//精彩瞬间

$(document).ready(function () {
    $(".img_list img").height(function () {
        return $(this).parent().height();
    })

    $(".img_list td").on("mouseenter", function () {
        $(this).children(".fore1").removeClass().addClass("fore2").siblings().removeClass().addClass("fore1");
    })

    $(".img_list td").on("click", function () {
        var $src = $(this).children(".fore1").attr("src");
        $(".pop_img").show().children().css({"backgroundImage": "url(" + $src + ")"});
    })
    $(".pop_img").on("click", function () {
        $(this).hide();
    })
})