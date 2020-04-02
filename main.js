requirejs.config({
  paths: {
    jquery: "https://apps.bdimg.com/libs/jquery/2.1.4/jquery.min"
  }
});
require(["jquery"], function($) {
  $(function() {
    require(['carousel'],function(carousel){
      new carousel({
        container:'#box',
        time:1000,
        img:[
          'img/b1.png',
          'img/b2.png',
          'img/b3.png',
          'img/b4.png',
          'img/b5.png'
        ]
      }).show();
    })
  });
});
