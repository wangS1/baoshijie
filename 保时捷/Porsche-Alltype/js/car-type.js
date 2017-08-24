/**
 * Created by bin on 2016/11/17.
 */

//生成内容列表
$(function (){
    var datas=[
        {'src':"images/porsche-thumbnail%20(7).png",'price':'588,000','type':'718 Cayman S'},
        {'src':"images/porsche-thumbnail%20(6).png",'price':'848,000','type':'718 Boxster'},
        {'src':"images/porsche-thumbnail%20(5).png",'price':'718,000','type':'718 Boxster S'},
        {'src':"images/porsche-thumbnail%20(4).png",'price':'1,318,000','type':'911 Carrera'},
        {'src':"images/porsche-thumbnail%20(3).png",'price':'1,521,000','type':'911 Carrera S'},
        {'src':"images/porsche-thumbnail%20(2).png",'price':'1,464,000','type':'911 Carrera Cabriolet'},
        {'src':"images/porsche-thumbnail%20(1).png",'price':'1,667,000','type':'911 Carrera S Cabriolet'},
        {'src':"images/porsche-thumbnail%20(8).png",'price':'4,072,000','type':'Panamera Exclusive Series'},
        {'src':"images/porsche-thumbnail%20(9).png",'price':'2,069,000','type':'911 Turbo'},
        {'src':"images/porsche-thumbnail%20(10).png",'price':'1586,000','type':'Cayenne Turbo S'},
        {'src':"images/porsche-thumbnail%20(11).png",'price':'2,214,000','type':'Cayenne Turbo S'},
        {'src':"images/porsche-thumbnail%20(12).png",'price':'1,355,000','type':'911 Turbo'},
        {'src':"images/porsche-thumbnail%20(13).png",'price':'2,038,000','type':'911 Turbo'},
        {'src':"images/porsche-thumbnail%20(14).png",'price':'4,072,000','type':'Panamera Exclusive Series'},
        {'src':"images/porsche-thumbnail%20(15).png",'price':'4,072,000','type':'Panamera Exclusive Series'},
        {'src':"images/porsche-thumbnail%20(16).png",'price':'2,839,000','type':'Cayenne Turbo S'},
        {'src':"images/porsche-thumbnail%20(17).png",'price':'4,072,000','type':'Panamera Exclusive Series'}
    ];

    var arr=[];
    for (var i = 0; i < datas.length; i++){
      var data=datas[i];
        var str='<li class=" con-list1 fl">'
            +'<div class="con-list">'
            +'<div class="con-li-top">'
            +'<ul>'
            +'<li><a href="#"><em>&gt;&nbsp;</em>比较</a></li>'
            +'<li><a href="../Porsche911/Porsche911.html"><em>&gt;&nbsp;</em>车辆配置器</a></li>'
            +'<li><a href="#"><em>&gt;&nbsp;</em>探索</a></li>'
            +'</ul>'
            +'</div>'
            +'</div>'
            +'<div class="con-li-pic"><a href="../Porsche911/Porsche911.html"><img src='+data.src+' alt=""/></a></div>'
            +'<div class="con-li-foot">'
            +'<div class="car-type">'+data.type+'</div>'
            +'<div class="car-price">'+data.price+'元，含增值税</div>'
            +'</div>'
            +'</li>';
        arr.push(str);
    }
    str= arr.join('');
    $('.con-box>ul').html(str);
})




//发现 滑动动画
 $(function (){
     var timer=null;
    var target=$('.content')[0].offsetTop;
   $('.selstyle').click(function (){
       clearInterval(timer);
      timer=setInterval(function (){
          var leader=scroll().top;
          var step=(target-leader)/10;
          step=Math.ceil(step);
          leader=leader+step;
          window.scrollTo(0,leader);
          if(target===leader){
              clearInterval(timer);
          }
      },15)
   });


})

function scroll() {
    return {
        top: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0,
        left: window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0
    };
}


//重置按钮
$(function (){
   $('.con-header').click(function (){
      $('.select-item').stop().slideToggle();
   });
    $('.reset').click(function (){
       $('.select-item input').prop('checked',false);
        $('.con-header span').remove();
        $('.select-item input').next().css('color','grey');
        $('.con-list1').show();
    });

})


//筛选按钮
$(function (){
    $('input').click(function (){
        $('.select-item input').next().css('color','grey');
        $('.select-item input:checked').next().css('color','red');


        $('.con-header span').remove();
        $('.con-header').append($('input:checked').next().clone());


    })

})

$(function (){
   var arr=[
       {name: '718', top:'硬顶' },
       {name: '718', top:'硬顶' },
       {name: '718', top:'敞蓬' },
       {name: '911', top:'敞蓬' },

       {name: '911', top: '硬顶'},
       {name: '911', top: '硬顶'},
       {name: '911', top: '敞蓬'},
       {name: 'Panamera', top: '硬顶'},

       {name: '911', top: '敞蓬'},
       {name: 'Cayenne', top: 'SUV'},
       {name: 'Cayenne', top: 'SUV'},
       {name: '911', top: '敞蓬'},

       {name: '911', top: '敞蓬'},
       {name: 'Panamera', top: '硬顶'},
       {name: 'Panamera', top: '硬顶'},
       {name: 'Cayenne', top: 'SUV'},

       {name: 'Panamera', top: '硬顶'}
   ];
    var arr2=[];
    var $lis=$('.con-box>ul>li');
    //for (var i = 0; i < $lis.length; i++){
    //  $lis[i].name=arr[i].name;
    //  $lis[i].top=arr[i].top;
    //}
    $('.l-item input').click(function (){
        arr2=[];
       var $spans= $('.con-header>span');
        for (var i = 0; i < arr.length; i++){
            var flag=true;
          for (var j = 0; j < $spans.length; j++){
            if(arr[i].name===$($spans[j]).text().trim()){
                $($lis[i]).show();
                $($lis[i]).addClass('add');
                flag=false;
                arr2.push(arr[i]);
                break;
            }
          }
          if(flag){
              $($lis[i]).removeClass('add');
              $($lis[i]).hide();
          }
        }
    });

    $('.r-item input').click(function (){
        var $shows=$('.con-box>ul>li').filter('.add');
        var $chos=$('.r-item input:checked');
        for (var i = 0; i < $shows.length; i++){
            var flag=true;
            for (var j = 0; j < $chos.length; j++){
                console.log($($chos[j]));
                console.log(arr2[i].top);
                if(arr2[i].top===$($chos[j]).next().text().trim()){
                    $($shows[i]).show();
                    flag=false;
                    break;
                }
            }
            if(flag){
                $($shows[i]).hide();
            }
        }
    })

})