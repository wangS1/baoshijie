/**
 * Created by Administrator on 2016/11/17.
 */
    //单独li得JS
    //鼠标经过 显示paly和底部条 离开 隐藏
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
    console.log(imgWidth);
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