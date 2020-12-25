



<script>
    var contentsInit = function() {

        $('.sec-performance .performance').on('init', function() {
            console.log("init")
            $('.performance-image > img').load(function() {
              $('.sec-performance .performance-inner').matchHeight();
          });
        });

        $('.sec-performance .performance').slick({
            autoplay: false,
            swipe: true,
            pauseOnHover: false,
            arrows: true,
            dots: true,
            centerMode: true,
            variableWidth: true,
            responsive: [{
                breakpoint: 768,
                settings: {
                    centerMode: false,
                    variableWidth: false,
                }
            }]
        });

    }

    window.addEventListener('load', contentsInit);
</script>


<script>
    var contentsInit = function() {

$(function() {
    
  // ページ内スクロールリンク
  // ---------------------------------------
  $('a[href^=#]').click(function(){
  var speed = 500;
  var href= $(this).attr("href");
  var target = $(href == "#" || href == "" ? 'html' : href);
  var position = target.offset().top;
  // 移動先を調整する場合 var position = target.offset().top - 調整値;
  $("html, body").animate({scrollTop:position}, speed, "swing");
  return false;
});

//アニメーション
var scrollAnimationClass = 'sa';
var scrollAnimationShowClass = 'show';
var triggerMarginDefault = 100;

var scrollAnimationElm = document.querySelectorAll('.' + scrollAnimationClass);
var scrollAnimationFunc = function() {
  var dataMargin = scrollAnimationClass + '_margin';
  var dataTrigger = scrollAnimationClass + '_trigger';
  var dataDelay = scrollAnimationClass + '_delay';
  var dataRepeat = scrollAnimationClass + '_repeat';
  var dataTarget = scrollAnimationClass + '_target';
  for(var i = 0; i < scrollAnimationElm.length; i++) {
    var triggerMargin = triggerMarginDefault;
    var elm = scrollAnimationElm[i];
    var showPos = 0;
    if(elm.dataset[dataMargin] != null) {
      triggerMargin = parseInt(elm.dataset[dataMargin]);
    }
    if(elm.dataset[dataTrigger]) {
      showPos = document.querySelector(elm.dataset[dataTrigger]).getBoundingClientRect().top + triggerMargin;
    } else {
      showPos = elm.getBoundingClientRect().top + triggerMargin;
    }
    var delay = (elm.dataset[dataDelay])? elm.dataset[dataDelay] : 0;
    if (window.innerHeight > showPos) {
      setTimeout(function(index) {
        var target = (elm.dataset[dataTarget])
        ? document.querySelector('#'+scrollAnimationElm[index].dataset[dataTarget])
        : scrollAnimationElm[index];
        target.classList.add('show');
      }.bind(null, i), delay);
    }else if( elm.dataset[dataRepeat] != null ){
      setTimeout(function(index) {
        target = (elm.dataset[dataTarget])
          ? document.querySelector('#'+scrollAnimationElm[index].dataset[dataTarget])
        : scrollAnimationElm[index];
        target.classList.remove('show');
      }.bind(null, i), delay);
    }
  }
}
window.addEventListener('load', scrollAnimationFunc);
window.addEventListener('scroll', scrollAnimationFunc ,{passive: true});


//slick設定後画像読み込みしてから高さをそろえる
$('.sec-performance .performance').on('init', function() {
  $('.performance-image > img').load(function() {
    $('.sec-performance .performance-inner').matchHeight();
  });
});


$(function() {
  $('.sec-performance .performance').slick({
    autoplay: false,
    swipe: true,
    pauseOnHover: false,
    arrows: true,
    dots: true,
    centerMode: true,
    variableWidth: true,
    responsive: [{
      breakpoint: 768,
      settings: {
        centerMode: false,
        variableWidth: false,
      }
    }
          ]
  });
});


});

}

window.addEventListener('load', contentsInit);
</script>