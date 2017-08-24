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