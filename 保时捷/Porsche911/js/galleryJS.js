/**
 * Created by dell on 2016-11-17.
 */
//图库列表数据
$(function(){
    var galleryDatas = [
        {"class":"gl_li_top","src":"img/porsche-zoom_000.jpg"},
        {"class":"gl_li_btm","src":"img/porsche-zoom_001.jpg"},
        {"class":"gl_li_btm","src":"img/porsche-zoom_002.jpg"},
        {"class":"gl_li_btm","src":"img/porsche-zoom_003.jpg"},
        {"class":"gl_li_btm","src":"img/porsche-zoom_004.jpg"},
        {"class":"gl_li_top","src":"img/porsche-zoom_005.jpg"},
        {"class":"gl_li_top","src":"img/porsche-zoom_006.jpg"},
        {"class":"gl_li_btm","src":"img/porsche-zoom_007.jpg"},
        {"class":"gl_li_btm","src":"img/porsche-zoom_008.jpg"},
        {"class":"gl_li_btm","src":"img/porsche-zoom_009.jpg"},
        {"class":"gl_li_btm","src":"img/porsche-zoom_010.jpg"},
        {"class":"gl_li_top","src":"img/porsche-zoom_011.jpg"},
        {"class":"gl_li_top","src":"img/porsche-zoom_012.jpg"},
        {"class":"gl_li_btm","src":"img/porsche-zoom_013.jpg"},
        {"class":"gl_li_btm","src":"img/porsche-zoom_014.jpg"}
    ];
//动态生成图库列表
    var arr = [];
    for (var i = 0; i < galleryDatas.length-2; i += 3) {
        var str = '<ul class="gl_ul fl">'+
            '<li class="'+galleryDatas[i].class+' fl"><img src='+galleryDatas[i].src+' alt=""/></li>'+
            '<li class="'+galleryDatas[i+1].class+' fl"><img src='+galleryDatas[i+1].src+' alt=""/></li>'+
            '<li class="'+galleryDatas[i+2].class+' fl"><img src='+galleryDatas[i+2].src+' alt=""/></li>'+
            '</ul>';
        arr.push(str);
    }
    $("#gallery_lis").html(arr.join(""));
})
//事件
$(function(){
    //动态生成bar
    //容器宽度/内容宽度 * 容器宽度 = bar宽度
    var barWidth = $("#gallery_content").width() / $("#gallery_lis").width() * $("#gallery_content").width();
    //console.log(barWidth);
    $("#gallery_bar").append('<div class="gl_bar_slider" id="gl_bar_slider">|||</div>')
    $('#gl_bar_slider').width(barWidth);
    $('#gl_bar_slider').mouseenter(function(){
        $(this).css({"backgroundColor":"#c00","color":"#FFF"})
    })
    $('#gl_bar_slider').mouseleave(function(){
        $(this).css({"backgroundColor":"#FFF","color":"#999"})
    })
    var distanceBar = ($("#gallery").outerWidth(true) - $("#gallery").width())/2;



    //设置滑动效果
    $('#gl_bar_slider')[0].onmousedown = function(event) {
        var event = event || window.event;
        var leftVal = event.clientX - this.offsetLeft - distanceBar;
        console.log(leftVal);
        var that = this;
        console.log($("#gallery_bar").width());
        document.onmousemove = function(event){
            var event = event || window.event;
            that.style.left = event.clientX - leftVal - distanceBar + "px";
            //限制条件
            if(that.offsetLeft < 0 ) {
                that.style.left = 0;
            }
            var max = $("#gallery_bar").width() - barWidth;
            if (that.offsetLeft > max){
                that.style.left = max + "px";
            }
            //内容图片移动的距离为 bar移动距离 * 内容宽度 / 容器宽度
            var contentDistance = -that.offsetLeft * $("#gallery_lis").width() / $("#gallery_content").width();
            $("#gallery_lis")[0].style.left = contentDistance + "px";
            window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
        }
        document.onmouseup = function() {
                document.onmousemove = null;   // 弹起鼠标不做任何操作
        }

    }

    //所有li的鼠标进入效果
    //设置遮罩
    $("#gallery_lis li").append('<div class="gl_li_warp"><span>911 Carrera 4S</span></div>')
    $("#gallery_lis li").mouseenter(function(){
        $(this).children("div").show();
    })
    $("#gallery_lis li").mouseleave(function(){
        $(this).children("div").hide();
    })

    //按钮设置事件
    $("#gallery_btn").mouseenter(function(){
        $(this).css({"backgroundColor":"#c00"})
        $(this).children("i").css({"color":"#FFF"})
    })
    $("#gallery_btn").mouseleave(function(){
        $(this).css({"backgroundColor":"#3e4146"})
        $(this).children("i").css({"color":"#c00"})
    })

    //
})