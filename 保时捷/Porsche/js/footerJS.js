

    function footer(){
        // 一、动态创建四个列表  dl dt dd
        var footer_top = document.getElementById("footer_top");
        var ft_list = footer_top.children[1];
// 数据Arr
        var listArr1 = ["购买支持", "打造您的保时捷", "车型比较", "搜索易手车", "查找经销商"]
        var listArr2 = ["在线服务","订阅"]
        var listArr3 = ["幕后", "赛车 & 活动", "保时捷驾驭非凡", "保时捷驾驶体验", "参观博物馆"]
        var listArr4 = ["公司", "新闻发布", "At a Glance", "工作机会", "联系信息", "“Christophorus” 杂志"]

// 封装插入列表函数
        function createList(element,arr) {
            var dl = document.createElement("dl");
            dl.className = "ft_dl fl";
            var txt = '<dt class="ft_dt">' + arr[0] + '</dt>';
            for (var i = 1; i < arr.length; i++) {
                txt += '<dd class="ft_dd"><a href="javascript:void(0)">' + arr[i] + '</a></dd>'
            }
            dl.innerHTML = txt;
            element.appendChild(dl);
        }
//调用函数
        createList(ft_list,listArr1);
        createList(ft_list,listArr2);
        createList(ft_list,listArr3);
        createList(ft_list,listArr4);
//二、给dd里的a添加css3过渡
//封装
        function linkCss3(parentElement,textDecoration){
            var links = parentElement.getElementsByTagName("a");
            for (var i = 0; i < links.length; i++) {
                links[i].onmouseover = function () {
                    this.style.color = "#c00"
                    this.style.textDecoration = "none";

                }
                links[i].onmouseout = function () {
                    this.style.color = "#000"
                    if(textDecoration){
                        this.style.color = "#FFF"
                        this.style.textDecoration = "underline";
                    }
                }
            }
        }
//调用
        linkCss3(ft_list);
//三、底部信息的a标签css3过渡
        var lg_copyright = document.getElementById("lg_copyright");
        var lg_msg = document.getElementById("lg_msg");
        linkCss3(lg_copyright,true);
        linkCss3(lg_msg,true);


//四 动态创建按钮
        var socialLis1 = document.getElementById("socialLis1");
        var socialLis2 = document.getElementById("socialLis2");
        var socialArr1 = [{"color":"#FFC028","class":"icon-kongjian"},
            {"color":"#71C5F2","class":"icon-weixintubiao"},
            {"color":"#3A6DBC","class":"icon-QQ"},
            {"color":"#EF1F25","class":"icon-xinlang"},
            {"color":"#0058A4","class":"icon-renren"},
            {"color":"#ED3C4C","class":"icon-kaixinwang"},
            {"color":"#FFCF46","class":"icon-souhu"},
            {"color":"#2D23D7","class":"icon-baidu"}]
        for (var k = 0; k < socialArr1.length; k++) {
            var link = document.createElement("a");
            link.href = "javascript:void(0)";
            link.className = "iconfont " + socialArr1[k].class;
            link.style.backgroundColor = socialArr1[k].color;
            var li = document.createElement("li");
            li.appendChild(link);
            socialLis1.appendChild(li);
            link.onmouseover =function () {
                this.style.opacity = "0.5";
            }
            link.onmouseout =function () {
                this.style.opacity = "1";
            }
        }
        var socialArr2 = [
            {"color":"#EF1F25","class":"icon-xinlang"},
            {"color":"#EF1F25","class":"icon-weixin"},
            {"color":"#EF1F25","class":"icon-youku"},
            {"color":"#EF1F25","class":"icon-g"},
            {"color":"#EF1F25","class":"icon-weixintubiao"},
            {"color":"#0058A4","class":"icon-zhaoxiangji"},
            {"color":"#0058A4","class":"icon-lingying"}]
//动态创建元素
        for (var i = 0; i < socialArr2.length; i++) {

            var link = document.createElement("a");
            link.href = "javascript:void(0)";
            link.className = "iconfont " + socialArr2[i].class;
            var li = document.createElement("li");
            li.appendChild(link);
            socialLis2.appendChild(li);
        }
        var socialLinks = socialLis2.getElementsByTagName("a");
//动态赋予事件
        for (var j = 0; j < socialLinks.length; j++) {
            socialLinks[j].index = j;
            socialLinks[j].onmouseover = function () {
                this.style.backgroundColor = socialArr2[this.index].color;
            }
            socialLinks[j].onmouseout = function () {
                this.style.backgroundColor = "#3e4146";
            }
        }
//进入分享 盒子出现 离开消失
        var shareBtn = document.getElementById("shareBtn");
        shareBtn.onmouseover = function () {
            this.children[0].style.backgroundColor = "#c00";
            socialLis1.style.display = "block";
        }
        shareBtn.onmouseout = function () {
            this.children[0].style.backgroundColor = "#3e4146";
            socialLis1.style.display = "none";
        }
// 五  为国家按钮箭头添加css3效果
        var lg_btn_l = document.getElementById("lg_btn_l");
        var lg_btn_r = document.getElementById("lg_btn_r");
        var lg_btn = document.getElementById("lg_btn");
        turnArrow(lg_btn_l);
        turnArrow(lg_btn_r);
        function turnArrow(element){
            var icon = element.getElementsByTagName("i")[0];
            var box = element.children[2];
            element.onclick = function () {
                icon.className = "icon_turn";
                box.style.display = "block";
                animate(box,{"opacity":1})
            }
            box.onclick = function (event) {
                if(event){
                    event.stopPropagation();
                }else{
                    window.event.cancelBubble = true;
                }
                icon.className = "";
                element.children[0].innerHTML = box.innerHTML;
                this.style.display = "none";
            };
        }

        document.onclick = function(event) {
            var event = event || window.event;
            var target = event.target || event.srcElement;
            //如果点击的不是show才应该消失
            if (target !== lg_btn_r && target !== lg_btn_l) {
                lg_btn_r.children[2].style.display = "none";
                lg_btn_r.children[1].children[0].className = "";
                lg_btn_l.children[2].style.display = "none";
                lg_btn_l.children[1].children[0].className = "";
            }
        }
    }
    footer()

