
<script>
    var pageTop = document.getElementById("page-top");
    var ticking = false;

function func() {
  if (!ticking) {
        requestAnimationFrame(function () {
            ticking = true;
            if (window.pageYOffset > 380) {
                pageTop.style.opacity = "0.5";
                pageTop.style.visibility = "visible";
            } else {
                pageTop.style.opacity = "0";
                pageTop.style.visibility = "hidden";
            }
            ticking = false;
        });
}
}
document.addEventListener('scroll', func, {passive: true});
document.addEventListener('DOMContentLoaded', func, false);


var Ease = {
        easeInOut: t => t<.5 ? 4*t*t*t : (t-1)*(2*t-2)*(2*t-2)+1
}
var duration = 500;
window.addEventListener('DOMContentLoaded', () => {
  var smoothScrollTriggers = document.querySelectorAll('a[href^="#"]');
  smoothScrollTriggers.forEach(function (smoothScrollTrigger) {
        smoothScrollTrigger.addEventListener('click', function (e) {
            var href = smoothScrollTrigger.getAttribute('href');
            var currentPostion = document.documentElement.scrollTop || document.body.scrollTop;
            var targetElement = document.getElementById(href.replace('#', ''));
            if (targetElement) {
                e.preventDefault();
                e.stopPropagation();
                var targetPosition = window.pageYOffset + targetElement.getBoundingClientRect().top - 10;
                var startTime = performance.now();
                var loop = function (nowTime) {
                    var time = nowTime - startTime;
                    var normalizedTime = time / duration;
                    if (normalizedTime < 1) {
                        window.scrollTo(0, currentPostion + ((targetPosition - currentPostion) * Ease.easeInOut(normalizedTime)));
                        requestAnimationFrame(loop);
                    } else {
                        window.scrollTo(0, targetPosition);
                    }
                }
                requestAnimationFrame(loop);
            }
        });
  });

  pageTop.addEventListener('click', function (e) {
        console.log("click")
    var currentPostion = document.documentElement.scrollTop || document.body.scrollTop;
    e.preventDefault();
    e.stopPropagation();
    var targetPosition = 0;
    var startTime = performance.now();
    var loop = function (nowTime) {
      var time = nowTime - startTime;
      var normalizedTime = time / duration;
      if (normalizedTime < 1) {
        window.scrollTo(0, currentPostion + ((targetPosition - currentPostion) * Ease.easeInOut(normalizedTime)));
        requestAnimationFrame(loop);
      } else {
        window.scrollTo(0, targetPosition);
      }
    }
    requestAnimationFrame(loop);
  });
});
</script>