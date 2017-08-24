/**
 * Created by Administrator on 2016/11/17.
 */
    //����li��JS
    //��꾭�� ��ʾpaly �뿪 ����
window.onload = function () {
    var arr = document.getElementById("arr");
    var imgList = document.getElementById("imgList");

    var bigBox = document.getElementById("bigBox");
    var ul = document.getElementById("ul");
    var ol = document.getElementById("ol");
    var ulLis = ul.children;
    var imgWidth = ul.children[0].offsetWidth;
//��ͷ
    for (var i = 0; i < ulLis.length; i++) {
        var li = document.createElement("li");
        ol.appendChild(li);
    }
    var olLis = ol.children;
    olLis[0].className = "current";
    var left = document.getElementById("left");
    var right = document.getElementById("right");
//s��꾭��������ʾ��ͷ
    imgList.onmouseover = function () {
        arr.style.display = "block";
    };
//s����뿪�������ؼ�ͷ
    imgList.onmouseout = function () {
        arr.style.display = "none";
    };
    var firstImg = ulLis[0].cloneNode(true);//��¡������ �ٵĵ�һ��
    ul.appendChild(firstImg);
//������
    var pic = 0;
    var square = 0;
//���right

    right.onclick = function () {
        if (pic === ulLis.length - 1) {
            ul.style.left = 0 + "px";
            pic = 0;
        }
        pic++;
        var target = -pic * imgWidth;
        animate(ul, target);
        if (square < olLis.length - 1) {
            square++;
        } else {
            square = 0;
        }
        //�ɵ�������
        for (var i = 0; i < olLis.length; i++) {
            olLis[i].className = "";
        }
        //���¶�Ӧ��
        olLis[square].className = "current";
    };
//���left
    left.onclick = function () {
        if (pic === 0) {
            ul.style.left = -(ulLis.length - 1) * imgWidth + "px";
            pic = ulLis.length - 1;
        }
        pic--;
        var target = -pic * imgWidth;
        animate(ul, target);
        if (square > 0) {//���ڵ�һ����ť������
            square--;
        } else {
            square = olLis.length - 1;//�������һ����ť������
        }
        //����
        //�ɵ�������
        for (var i = 0; i < olLis.length; i++) {
            olLis[i].className = "";
        }
        //���¶�Ӧ��
        olLis[square].className = "current";
    };

//��װ �������� ������������ƶ� ��ָ��λ��
    function animate(obj, target) {
        clearInterval(obj.timer);
        obj.timer = setInterval(function () {
            var leader = obj.offsetLeft;//offsetLeft�Ǿͽ�ȡ��
            var step = (target - leader) / 10;//�Դ�����
            //step������� ����ȡ�� �Ǹ� ��Ҫ����ȡ���������������� �ͻ�ȡ��0��
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            leader = leader + step;
            obj.style.left = leader + "px";
            if (leader === target) {
                clearInterval(obj.timer);
            }
        }, 15);
    }
    var red=document.getElementById("red");
    var yellow=document.getElementById("yellow");
    var white=document.getElementById("white");
    var org=document.getElementById("org");
    var green=document.getElementById("green");
    var blue=document.getElementById("blue");
    var ss=document.getElementsByTagName("s");
    function getRed(obj){
        for(var i=0;i<ss.length;i++){
            ss[i].style.display="none";
        }
        obj.children[0].style.display="block";
    }
    getRed(yellow);
    var jRed = [
        {"src": "images/r1.jpg"},
        {"src": "images/r2.jpg"},
        {"src": "images/r3.jpg"},
        {"src": "images/r4.jpg"},
        {"src": "images/r5.jpg"},
        {"src": "images/r6.jpg"},
        {"src": "images/r1.jpg"}
    ];
    red.onclick= function () {
        getRed(this);
        for(var j=0;j<ulLis.length;j++){
            ulLis[j].children[0].src=jRed[j].src;
        }
    }
    var jwhite = [
        {"src": "images/w1.jpg"},
        {"src": "images/w2.jpg"},
        {"src": "images/w3.jpg"},
        {"src": "images/w4.jpg"},
        {"src": "images/w5.jpg"},
        {"src": "images/w6.jpg"},
        {"src": "images/w1.jpg"}
    ];
    white.onclick= function () {
        getRed(this);
        for(var j=0;j<ulLis.length;j++){
            ulLis[j].children[0].src=jwhite[j].src;
        }
    }
    var jorg = [
        {"src": "images/o1.jpg"},
        {"src": "images/o2.jpg"},
        {"src": "images/o3.jpg"},
        {"src": "images/o4.jpg"},
        {"src": "images/o5.jpg"},
        {"src": "images/o6.jpg"},
        {"src": "images/o1.jpg"}
    ];
    org.onclick= function () {
        getRed(this);
        for(var j=0;j<ulLis.length;j++){
            ulLis[j].children[0].src=jorg[j].src;
        }
    }
    var jgreen = [
        {"src": "images/g1.jpg"},
        {"src": "images/g2.jpg"},
        {"src": "images/g3.jpg"},
        {"src": "images/g4.jpg"},
        {"src": "images/g5.jpg"},
        {"src": "images/g6.jpg"},
        {"src": "images/g1.jpg"}
    ];
    green.onclick= function () {
        getRed(this);
        for(var j=0;j<ulLis.length;j++){
            ulLis[j].children[0].src=jgreen[j].src;
        }
    }
    var jblue = [
        {"src": "images/b1.jpg"},
        {"src": "images/b2.jpg"},
        {"src": "images/b3.jpg"},
        {"src": "images/b4.jpg"},
        {"src": "images/b5.jpg"},
        {"src": "images/b6.jpg"},
        {"src": "images/b1.jpg"}
    ];
    blue.onclick= function () {
        getRed(this);
        for(var j=0;j<ulLis.length;j++){
            ulLis[j].children[0].src=jblue[j].src;
        }
    }
    var jyellow = [
        {"src": "images/y1.jpg"},
        {"src": "images/y2.jpg"},
        {"src": "images/y3.jpg"},
        {"src": "images/y4.jpg"},
        {"src": "images/y5.jpg"},
        {"src": "images/y6.jpg"},
        {"src": "images/y1.jpg"}
    ];
    yellow.onclick= function () {
        getRed(this);
        for(var j=0;j<ulLis.length;j++){
            ulLis[j].children[0].src=jyellow[j].src;
        }
    }
    $(function () {
        $("#r-top").click(function () {
            $("#r-top-co").stop().slideToggle(function () {
                if($("#r-top-co").css("display")==="block"){
                    $("#r-top i").addClass("rotate");
                }
                if($("#r-top-co").css("display")==="none") {
                    $("#r-top i").removeClass();
                }
            });
        })
        $("#r-cen").click(function () {
            $("#r-cen-lt").slideToggle(function () {
                if($("#r-cen-lt").css("display")==="block"){
                    $("#r-cen i").addClass("rotate");
                }
                if($("#r-cen-lt").css("display")==="none") {
                    $("#r-cen i").removeClass();
                }
            });
        })
        $("#r-bot").click(function () {
            $("#r-bot-yc").slideToggle(function () {
                if($("#r-bot-yc").css("display")==="block"){
                    $("#r-bot i").addClass("rotate");
                }
                if($("#r-bot-yc").css("display")==="none") {
                    $("#r-bot i").removeClass();
                }
            })
        })
    })
    var ltul=document.getElementById("ltul");
    var ltLis=ltul.children;
    for(var k=0;k<ltLis.length;k++){
        ltLis[k].style.background="url(images/tiles-ar.jpg) 0px " + (-95 * k) + "px no-repeat"
    }
}