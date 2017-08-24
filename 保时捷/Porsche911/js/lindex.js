/**
 * Created by Administrator on 2016/11/16.
 */
$(document).ready(function () {
    //一级隐藏显示
    $(".all").mouseenter(function () {
        $("#thbox01").show();
    });
    $(".all").mouseleave(function () {
        $("#thbox01").hide();
    });

    var menus = $(".menu-right").children();
    for (var i = 0; i < menus.length; i++) {
        var index1 = 0;
        $(menus[i]).mouseenter(function () {
            index1 = $(this).index() + 2;
            //console.log(index1);
            $("#thbox0" + index1 + "").show();
        });
        $(menus[i]).mouseleave(function () {
            $("#thbox0" + index1 + "").hide();
        });
    }

    //二级隐藏显示
    var lqqitems = $("#thbox01").children();
    for (var i = 1; i <= lqqitems.length; i++) {
        $(lqqitems[i]).mouseenter(function () {
            $("#lqq" + $(this).index() + "").show();
        });
        $(lqqitems[i]).mouseleave(function () {
            $("#lqq" + $(this).index() + "").hide();
        });
    }

    //三级隐藏显示 718
    var items1 = $("#lqqitem01").find(".menu-item");
    for (var i = 0; i < items1.length; i++) {
        $(items1[i]).mouseenter(function () {
            $("#thparticular" + $(this).index() + "").show();
        });
        $(items1[i]).mouseleave(function () {
            $("#thparticular" + $(this).index() + "").hide();
        });
    }
    //三级隐藏显示 911
    var items2 = $("#lqqitem02").find(".menu-item");
    for (var i = 0; i < items2.length; i++) {
        var index2 = 0;
        $(items2[i]).mouseenter(function () {
            index2 = $(this).index() + items1.length;
            $("#thparticular" + index2 + "").show();
        });
        $(items2[i]).mouseleave(function () {
            $("#thparticular" + index2 + "").hide();
        });
    }

    //左边一级菜单 当前高亮
    $("#lqqitem01").mouseenter(function () {
        $(this).css("backgroundColor", "#CC0001").siblings().css("backgroundColor", "#fff");
        $("#lqqitem01 .tha span,#lqqitem01 .tha b").css("color", "#fff");
        $("#lqqitem01 .tha").css("border-bottom", "1px solid #CC0001");
        $(".arrow").css("background-position","-23px -2731px");
    })
    $("#lqqitem02").mouseenter(function () {
        $(this).css("backgroundColor", "#CC0001").siblings().css("backgroundColor", "#fff");
        $("#lqqitem02 .tha span,#lqqitem02 .tha b").css("color", "#fff");
        $("#lqqitem02 .tha").css("border-bottom", "1px solid #CC0001");
    })
    $("#lqqitem03").mouseenter(function () {
        $(this).css("backgroundColor", "#CC0001").siblings().css("backgroundColor", "#fff");
        $("#lqqitem03 .tha span,#lqqitem03 .tha b").css("color", "#fff");
        $("#lqqitem03 .tha").css("border-bottom", "1px solid #CC0001");
    })
    $("#lqqitem04").mouseenter(function () {
        $(this).css("backgroundColor", "#CC0001").siblings().css("backgroundColor", "#fff");
        $("#lqqitem04.tha span,#lqqitem04 .tha b").css("color", "#fff");
        $("#lqqitem04 .tha").css("border-bottom", "1px solid #CC0001");
    })
    $("#lqqitem05").mouseenter(function () {
        $(this).css("backgroundColor", "#CC0001").siblings().css("backgroundColor", "#fff");
        $("#lqqitem05.tha span,#lqqitem05 .tha b").css("color", "#fff");
        $("#lqqitem05 .tha").css("border-bottom", "1px solid #CC0001");
    })

    $("#thbox01>div").mouseleave(function () {
        $(this).css({
            "backgroundColor": "#fff",
        });
        $(".tha>span,.tha>b").css("color", "black");
        $("#lqqitem01 .tha").css("border-bottom", "1px solid #DFDFDF");
        $("#lqqitem02 .tha").css("border-bottom", "1px solid #DFDFDF");
        $("#lqqitem03 .tha").css("border-bottom", "1px solid #DFDFDF");
        $("#lqqitem04 .tha").css("border-bottom", "1px solid #DFDFDF");
        $("#lqqitem05 .tha").css("border-bottom", "1px solid #DFDFDF");
        $(".arrow").css("background-position","0 -2731px");
    })

    //左边二级菜单 当前高亮
    $(".menu-item").mouseenter(function () {
        $(this).css("backgroundColor", "#CC0001").siblings().css("backgroundColor", "#fff");
        var node = this.childNodes[1];
        $(node).css("color", "#fff");
    })
    $(".menu-item").mouseleave(function () {
        $(this).css("backgroundColor", "#fff");
        var node = this.childNodes[1];
        $(node).css("color", "black");
    })

    //右边menu当前高亮
    $(".thitem>a").mouseenter(function () {
        $(this).css("backgroundColor", "#CC0001").siblings().css("backgroundColor", "#fff");
        $(this).css("color", "#fff");
        if (this.className === "first") {
            $(".arrow").css("background-position","-23px -2731px");
        }
    })
    $(".thitem>a").mouseleave(function () {
        $(this).css({
            "backgroundColor": "#fff",
            "color": "black"
        });
        $(".arrow").css("background-position","0 -2731px");
    })

});

//
$(document).ready(function () {
    $("#fuwimgList>li").mouseenter(function () {
        $(this).find(".play_box,.buttom_box").css("display", "block");
    });
    $("#fuwimgList>li").mouseleave(function () {
        $(this).find(".play_box,.buttom_box").css("display", "none");
    });
    //点击右箭头
    //找人
    var bigBox = document.getElementById("bigBox");
    var ulList = document.getElementById("fuwimgList");
    var ulListLis = ulList.children;
    var imgWidth = ulList.children[0].offsetWidth;
    //箭头
    var arrList = document.getElementById("fuw_arr");
    var leftList = document.getElementById("fuw_left");
    var rightList = document.getElementById("fuw_right");
    //s鼠标经过盒子显示箭头
    bigBox.onmouseover = function () {
        arrList.style.display = "block";
    };
    //s鼠标离开盒子隐藏箭头
    bigBox.onmouseout = function () {
        arrList.style.display = "none";
    };
    //计数器
    var pic = 0;
    //点击right
    rightList.onclick = function () {
        if (pic === ulListLis.length - 4) {
            ulList.style.left = 0 + "px";
            pic = 0;
        }
        pic++;
        var target = -pic * (imgWidth + 5);
        animate(ulList, target);
    };
    //点击left
    leftList.onclick = function () {
        if (pic === 0) {
            ulList.style.left = -(ulListLis.length - 4) * (imgWidth + 5) + "px";
            pic = ulListLis.length - 4;
        }
        pic--;
        var target = -pic * (imgWidth + 5);
        animate(ulList, target);
    };

    //封装 动画函数 能让任意对象移动 到指定位置
    function animate(obj, target) {
        clearInterval(obj.timer);
        obj.timer = setInterval(function () {
            var leader = obj.offsetLeft;//offsetLeft是就近取整
            var step = (target - leader) / 10;//自带正负
            //step如果是正 向上取整 是负 就要向下取整（负数向上区整 就会取到0）
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            leader = leader + step;
            obj.style.left = leader + "px";
            if (leader === target) {
                clearInterval(obj.timer);
            }
        }, 15);
    }
});