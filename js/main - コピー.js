(function () {


    //メディアクエリ
    var breakPoint = window.matchMedia('screen and (max-width: 862px)');

    //ヘッダの高さ
    var viewPoint = $('header').outerHeight(true);

    //イベント
    $(window).on('load', function(){
        breakPoint.addListener(checkDrawerSize);
        checkDrawerSize();
    });

    $(document).ready(function(){
        setDrawer();
        initHome();
        initArchive();
    })

    $(window).on('load scroll', function(){
        scrollDrawer();
    });


    //fixedナビの表示切替
    var scrollDrawer = function() {
        var scrollPosition = $(window).scrollTop();
        if( scrollPosition > viewPoint ) {
            if(!(breakPoint.matches)){
                openDrawer(true);
            }
            $('.box-drawer').slideDown('fast');
        } else {
            $('.box-drawer').slideUp('fast', function() {
                if(breakPoint.matches){
                    closeDrawer(true);
                }
            });
        }
    };

    //ブレイクポイント時のメニュー表示切替
    var checkDrawerSize = function() {
        viewPoint = $('header').outerHeight(true);

        if(breakPoint.matches){
            closeDrawer(true);
        }else{
            openDrawer(true);
        }
    };

    //ドロワーメニューボタンの開閉
    var setDrawer = function() {
        $('.btn-nav-drawer').click(function() {
            if($('.btn-nav-drawer').hasClass('active')){
                closeDrawer();
            }else{
                openDrawer();
            }
            return false;
        });
    };
    var openDrawer = function(flg=false) {
        if(!($('.btn-nav-drawer').hasClass('active'))){
            $('.btn-nav-drawer').addClass('active');
            if(flg){
                $('.nav-drawer').show();
            }else{
                $('.nav-drawer').slideDown();
            }
        }
    };
    var closeDrawer = function(flg=false) {
        if($('.btn-nav-drawer').hasClass('active')){
            $('.btn-nav-drawer').removeClass('active');
            if(flg){
                $('.nav-drawer').hide();
            }else{
                $('.nav-drawer').slideUp();
            }
        }
    };



    //HOME,tagアーカイブ設定
    var initHome = function() {

        if($("body").hasClass("home") || $("body").hasClass("tag")){

            var $gallery = $('.box-home-gallery');

            // ロード前リンク制御
            $gallery.addClass("loading");
            setTimeout(function() {
                $gallery.removeClass("loading");
            }, 3000);

            $(window).on('load',function(){
               // グリッドセット
                var $grid = $('#mix-gallery').masonry({
                  // options
                  itemSelector: '.box-home-gallery-item'
                });

                // ロード前リンク制御解除
                $gallery.removeClass("loading");
            });

            // ギャラリーセット
            $('a.swipe').photoSwipe();

            // 続きを読むリンク
            $('.js-more-link').click(function(e) {
                e.preventDefault()
                $(this).closest('.box-home-gallery-item').find('a.swipe').click();
            });

        }

    };


    //固定archive設定
    var initArchive = function() {

        if($("body").hasClass("page")　&& $("body").hasClass("archive")){

            var $gallery = $('.box-archive');

            // ロード前リンク制御
            $gallery.addClass("loading");
            setTimeout(function() {
                $gallery.removeClass("loading");
            }, 3000);

            $(window).on('load',function(){
                // ロード前リンク制御解除
                $gallery.removeClass("loading");
            });

            // ギャラリーセット
            $('a.swipe').photoSwipe();

        }

    };


}());





