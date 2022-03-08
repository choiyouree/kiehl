$(document).ready(function(){
    // 윈도우에 load, resize 이벤트설정
    $(window).on('load resize',function(){
        // 윈도우의 가로길이를 bodyW변수에 저장
        var bodyW=$(this).width();
        // 만약 윈도우의 가로길이가 1280보다 같거나 작으면 (태블릿, 모바일 버전) 세로아코디언메뉴
        if(bodyW <= 1199){
            $('.acc_item').removeClass('active');
            // sitemap의 세로 아코디언 메뉴
            $('.site_nav > ul > li > a').click(function(){
                if($(this).attr('class') != 'active'){
                    $('.site_nav .sub').slideUp();
                    $('.site_nav > ul > li > a').removeClass('active');
                    $(this).next().slideDown();
                    $(this).addClass('active')
                }else{
                    $(this).removeClass('active');
                    $(this).next().slideUp();
                }
            });

        // 윈도우의 가로길이가 1200보다 같거나 크면 (pc버전)
        }else{
            // 주메뉴에 마우스 오버 이벤트 설정
            $('header nav').hover(function(){
                // 서브메뉴 내려옴
                $('header nav .sub').stop().slideDown(300);
                // 서브메뉴 배경 내려옴
                $('.sub_bg').stop().slideDown(300);
                // header_wrap에 active설정
                // header 부분 투명에서 흰색
                $('.header_wrap').addClass('active');
            }, function(){
                // 서브메뉴 내려옴
                $('header nav .sub').stop().slideUp(300);
                // 서브메뉴 배경 내려옴
                $('.sub_bg').stop().slideUp(300);
                // header_wrap에 active설정
                $('.header_wrap').removeClass('active');
            });
            // s5 섹션 5 아코디언갤러리 (accordion gallery)
            $('.acc_item').click(function(){
                $('.acc_item').removeClass('active');
                $(this).addClass('active');
            });
        }
    }); //load risize 이벤트
    // 화면이 스크롤되어서 첫번째 section이 지나가면 header에 active 설정
    $(window).scroll(function(){
        // 윈도우의 scrollTop 값을 top변수에 저장
        var top=$(this).scrollTop();
        // 만약 top변수의 값이 0보다 크면 header에 active 설정
        if(top > 0){
            $('header').addClass('active');
            // top변수의 값이 0보다 작거나 같음면 header에서 active제거
        }else{
            $('header').removeClass('active');
        }
        // 각 section 안의 객체들 애니메이션
        // 각 section 영역의 위쪽 위치값을 구해서 각 변수에 저장
        var sTop1=$('section.s2').offset().top-600;
        var sTop2=$('section.s3').offset().top-600;
        var sTop3=$('section.s4').offset().top-600;
        var sTop4=$('section.s5').offset().top-600;
        var sTop5=$('section.s6').offset().top-600;
        var sTop6=$('section.s7').offset().top-600;
        // 만약 각 section의 위쪽 위치값이 window의 scrollTop값보다 작으면
        // && ('그리고'라는 뜻의 논리연산자, 조건 2개 모두 true일 때 실행)
        if(sTop1 < top && top < sTop2){
            $('.company_txt').addClass('active');
            $('.company_img').addClass('active');
        }
        if(sTop2 < top && top < sTop3){
            $('.s3 .fade_animation').addClass('active');
            $('.s3 .up_animation').addClass('active');
        }
        if(sTop3 < top && top < sTop4){
            $('.s4 .s4_ani1').addClass('active');
            $('.s4 .s4_ani2').addClass('active');
            $('.s4 .s4_ani3').addClass('active');
            $('.s4 .s4_ani4').addClass('active');
            $('.s4 .fade_animation').addClass('active');
        }
        if(sTop4 < top && top < sTop5){
            $('.s5 .up_animation').addClass('active');
        }
        if(sTop5 < top && top < sTop6){
            $('.s6 .up_animation').addClass('active');
        }
        if(sTop6 < top){
            $('.s7 .up_animation').addClass('active');
        }
    });
    // header에 마우스 오버했을때 header에 adtive 설정
    $('header').hover(function(){
        $('.header_wrap').addClass('active');
    }, function(){
        $('.header_wrap').removeClass('active');
    });

    // mian swiper slide
    var swiper = new Swiper(".mySwiper", {
        autoplay: {
          effec: 'fade',
          delay: 4000,
          disableOnInteraction: false,
        },
        pagination: {
          el: "section.s1 .swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: "section.s1 .swiper-button-next",
          prevEl: "section.s1 .swiper-button-prev",
        },
      });
    //  swiper에 play/stop
    $('section.s1 .swiper-pagination').append('<span class="swiper-play-stop"></span>');
    //   swiper-play-stop 버튼을 클릭할때마다 배경 이미지도 변경하고 멈췄다가 다시 자동 재생 되는 기능
    var sw=0;
    $('.swiper-play-stop').click(function(){
        if(sw==0){
            sw=1;
            swiper.autoplay.stop();
            $(this).css('background-image','url(img/play.png)')
        }else{
            sw=0;
            swiper.autoplay.start();
            $(this).css('background-image','url(img/pause.png)')
        }
    });
    // s3 섹션 3 상품슬라이드 (product swiper slide)
    var swiper2 = new Swiper(".mySwiper2", {
        slidesPerView: 4,
        spaceBetween: 15,
        loop:true,
        pagination: {
            el: "section.s3 .swiper-pagination",
        },
        breakpoints:{
            1200:{                   //가로길이 1280픽셀 이상 (pc버전)
                slidesPerView: 4
            },
            1119:{                   //가로길이 480~`1279 픽셀 사이 ()
                slidesPerView: 3,
            },
            840:{
                slidesPerView: 2,
            },
            480: {
                slidesPerView: 1.2,
            },
            1: {
                slidesPerView: 1
            }
        }
      });
    
    // footer  푸터 .family 클릭 이벤트 설정
    var on=0;
    $('.family .fa_btn').click(function(){
        if(on==0){
            on=1;
            $('.family').addClass('active');
        }else{
            on=0;
            $('.family').removeClass('active');
        }
        return false;
    });
    // top 버튼
    $('.top').click(function(){
        $('html, body').animate({'scrollTop':0});
    });
    // 햄버거버튼(메뉴버튼) 클릭하면 사이트맵 나타남
    $('.menu').click(function(){
        $('.sitemap').addClass('active');
    });
    // 닫기 버튼 클릭하면 사이트맵 사라짐
    $('.site_close').click(function(){
        $('.sitemap').removeClass('active');
    });
}); //document
