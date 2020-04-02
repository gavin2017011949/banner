define(["jquery"], function ($) {
    var Carousel = function () {
      function animate(conf){
        var cfg = {
            container: "body",
            idx: 0,
            time: 2000,
            disapper: 1000,
            timer: "",
            img: [
                "img/b1.png",
                "img/b2.png",
                "img/b3.png",
                "img/b4.png",
                "img/b5.png"
            ],
        };
        $.extend(cfg, conf);
        // 初始化
        var $box = $(conf.container),
            $slider = $('<div class="slider" id="slider"></div>'),
            $left = $('<span id="left"><</span>'),
            $right = $('<span id="right">></span>'),
            $navs = $('<ul class="nav" id="navs"></ul>');
            complete=true;
         $slider.append($('<div class="slide"><img src="' +cfg.img[cfg.img.length - 1]+'" alt=""></div>'));
         for (var i = 0; i < cfg.img.length; i++) {
            var $div = $('<div class="slide"><img src="' + cfg.img[i] + '" alt=""></div>');
            var $li = $("<li>" + (i + 1) + "</li>");
            $slider.append($div);
            $navs.append($li);
         }
         $slider.append($('<div class="slide"><img src="' + cfg.img[0] + '" alt=""></div>'));
         $box.append($slider);
         $slider.after($left);
         $left.after($right);
         $right.after($navs);
         changeNav(cfg.idx);

        //切换图片
        function changeImg(){
         $slider.stop().animate({ left: -(cfg.idx + 1) * 1200 }, cfg.disapper,()=>{
           if(complete===false){complete=true;}
          })
        }

        // 左箭头
       $left.click(function(){
         if(complete===false){
           return;
         }else{
           complete=false;
           cfg.idx--;
           if(cfg.idx<0){
             $slider.css('left',(cfg.img.length+1)*(-1200)+'px');
             cfg.idx=cfg.img.length-1;
           };
           changeImg(cfg.idx);
           changeNav(cfg.idx);          
         }
       }); 

        // 右箭头
        $right.click(function(){
          if(complete===false){
            return;
          }else{
            complete=false;
            cfg.idx++;
            if(cfg.idx>cfg.img.length){
                $slider.css('left','-1200px');
                cfg.idx=1;
            };
            changeImg(cfg.idx);             
            changeNav(cfg.idx);
          }                
        }); 
        // 下标
        for (var n = 0; n < $navs.children("li").length; n++) {
          $("#navs li").click(function () {
            cfg.idx = $(this).index();
            changeImg(cfg.idx);
            changeNav(cfg.idx);
        });
    }
        function changeNav(idx) {
          if (idx < 0) {
            idx = cfg.idx - 1;
          } else if (idx > cfg.img.length - 1) {
            idx = 0;
          }
          $navs.children("li").siblings().removeClass("active");
          $navs.children("li").eq(idx).addClass("active");
        }

        //自动轮播
       function automatic() {
          cfg.idx++;
          if(cfg.idx>cfg.img.length){
            $slider.css('left','-1200px');
            cfg.idx=1;
          };
          changeImg(cfg.idx);
          changeNav(cfg.idx);
      }  
  
      // function show() {
       //   cfg.timer = setInterval(automatic, cfg.time+cfg.disapper);
     // } 
       //鼠标滑入
       $box.mouseover(function () {
          $left.css("opacity", "50%");
          $right.css("opacity", "50%");
          clearInterval(cfg.timer);
      });
       //鼠标滑出
       $box.mouseout(function () {
          $left.css("opacity", "0");
          $right.css("opacity", "0");
          cfg.timer=setInterval(automatic,cfg.time+cfg.disapper);
      });
      return {
        animate: animate
      };
    };
    return  Carousel;
});
/*
define(["jquery"], function ($) {
    var carousel = function (conf) {
        var cfg = {
            container: "body",
            idx: 0,
            time: 2000,
            disapper: 1000,
            timer: "",
            img: [
                "img/b1.png",
                "img/b2.png",
                "img/b3.png",
                "img/b4.png",
                "img/b5.png"
            ],
        };
        $.extend(cfg, conf);

        // 初始化
        var $box = $(conf.container),
            $slider = $('<div class="slider" id="slider"></div>'),
            $left = $('<span id="left"><</span>'),
            $right = $('<span id="right">></span>'),
            $navs = $('<ul class="nav" id="navs"></ul>');
            complete=true;
         $slider.append($('<div class="slide"><img src="' +cfg.img[cfg.img.length - 1]+'" alt=""></div>'));
         for (var i = 0; i < cfg.img.length; i++) {
            var $div = $('<div class="slide"><img src="' + cfg.img[i] + '" alt=""></div>');
            var $li = $("<li>" + (i + 1) + "</li>");
            $slider.append($div);
            $navs.append($li);
         }
         $slider.append($('<div class="slide"><img src="' + cfg.img[0] + '" alt=""></div>'));
         $box.append($slider);
         $slider.after($left);
         $left.after($right);
         $right.after($navs);
         changeNav(cfg.idx);

        //切换图片
        function changeImg(){
         $slider.stop().animate({ left: -(cfg.idx + 1) * 1200 }, cfg.disapper,()=>{
           if(complete===false){complete=true;}
          })
        }

        // 左箭头
       $left.click(function(){
         if(complete===false){
           return;
         }else{
           complete=false;
           cfg.idx--;
           if(cfg.idx<0){
             $slider.css('left',(cfg.img.length+1)*(-1200)+'px');
             cfg.idx=cfg.img.length-1;
           };
           changeImg(cfg.idx);
           changeNav(cfg.idx);          
         }
       }); 

        // 右箭头
        $right.click(function(){
          if(complete===false){
            return;
          }else{
            complete=false;
            cfg.idx++;
            if(cfg.idx>cfg.img.length){
                $slider.css('left','-1200px');
                cfg.idx=1;
            };
            changeImg(cfg.idx);             
            changeNav(cfg.idx);
          }                
        }); 
        // 下标
        for (var n = 0; n < $navs.children("li").length; n++) {
          $("#navs li").click(function () {
            cfg.idx = $(this).index();
            changeImg(cfg.idx);
            changeNav(cfg.idx);
        });
    }
        function changeNav(idx) {
          if (idx < 0) {
            idx = cfg.idx - 1;
          } else if (idx > cfg.img.length - 1) {
            idx = 0;
          }
          $navs.children("li").siblings().removeClass("active");
          $navs.children("li").eq(idx).addClass("active");
        }

        //自动轮播
       function automatic() {
          cfg.idx++;
          if(cfg.idx>cfg.img.length){
            $slider.css('left','-1200px');
            cfg.idx=1;
          };
          changeImg(cfg.idx);
          changeNav(cfg.idx);
      }  

       function show() {
          cfg.timer = setInterval(automatic, cfg.time+cfg.disapper);
      } 
       //鼠标滑入
       $box.mouseover(function () {
          $left.css("opacity", "50%");
          $right.css("opacity", "50%");
          clearInterval(cfg.timer);
      });
       //鼠标滑出
       $box.mouseout(function () {
          $left.css("opacity", "0");
          $right.css("opacity", "0");
          cfg.timer=setInterval(automatic,cfg.time+cfg.disapper);
      });
      return {
        show: show
      };
    };
    return carousel;
});
*/

