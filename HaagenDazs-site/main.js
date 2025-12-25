// ======================== 모든 a 태그 기본 이동 동작 막기 ========================
$('a').on('click', function(event) {
    event.preventDefault();
});

// ======================== 헤더 높이 변수 설정 ======================== 
$(function () {
    const $header = $('header');

    function setHeaderHeight() {
        const h = $header.outerHeight();
        document.documentElement.style.setProperty('--header-height', h + 'px');
    }

    setHeaderHeight();
    $(window).on('resize', setHeaderHeight);
});

// ======================== 헤더 스크롤 ======================== 
$(function() {
    $(window).on("scroll", function() {
        let scrollTop = $(this).scrollTop();

        if (scrollTop >= 80) {
            $("header").addClass("fixed");
        } else {
            $("header").removeClass("fixed");
        }
    });
});

// ======================== header 반응형 오버레이 탭 ======================== 
$(function() {
    const $tabWrap = $(".tab-wrap");
    const $overlay = $(".overlay");
    const $tabBtn = $(".tab-open-btn");

    $tabBtn.on("click", function() {
        $(this).toggleClass("open");
        $tabWrap.toggleClass("open");
        $overlay.toggleClass("open");

        if ($(this).hasClass("open")) {
            $(this).text("X");
            $(this).attr("aria-label", "탭 닫기");
            $(this).attr("aria-expanded", "true");
        }else{
            $(this).text("≡");
            $(this).attr("aria-label", "탭 열기");
            $(this).attr("aria-expanded", "false");
        }
    });
});

// ======================== 프로모션 섹션 slick slider ========================
$(document).ready(function(){
    $('.promotion-slide-wrap').slick({
        slidesToShow: 5,
        slidesToScroll: 3,     
        speed: 1000,   
        infinite: false, 
        dots: true,
        responsive: [
            {
            breakpoint: 1300,
            settings: {
                slidesToShow: 4
            }
            },
            {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3
            }
            },
            {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1     
            }
            },
            {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1     
            }
            }
        ]
    })
});

// ======================== 신제품 섹션 slick slider ========================
$(document).ready(function(){
    $('.new-slide-wrap').slick({
        slidesToShow: 1,            
        dots: true,
        speed: 1000   
    });
});