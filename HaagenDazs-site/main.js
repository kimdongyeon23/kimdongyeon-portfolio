// ================= 모든 a 태그 기본 이동 동작 막기 =================
$('a').on('click', function(event) {
    event.preventDefault();
});

// ================= 헤더 스크롤 =================
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

// ================= 반응형 헤더 오버레이 탭 =================
$(function() {
    const $tabWrap = $(".tab-wrap");
    const $overlay = $(".overlay");
    const $tabBtn = $(".overlay-toggle-btn");

    $tabBtn.on("click", function() {
        $(this).toggleClass("open");
        $tabWrap.toggleClass("open");
        $overlay.toggleClass("open");

        if ($(this).hasClass("open")) {
            $(this).text("X");
            $(this).attr("aria-label", "탭 닫기");
        }else{
            $(this).text("≡");
            $(this).attr("aria-label", "탭 열기");
        }
    });
});

// ================= 신제품 슬릭 슬라이더 =================
$(document).ready(function(){
    $('.item-slide-wrap').slick({
        slidesToShow: 4.2,       
        slidesToScroll: 4,     
        infinite: false,        
        dots: false,                    
        responsive: [         
            {
                breakpoint: 1025,
                settings: { slidesToShow: 3.2, slidesToScroll: 3 }
            },
            {
                breakpoint: 770,
                settings: { slidesToShow: 2.2, slidesToScroll: 2 }
            },
            {
                breakpoint: 482,
                settings: { slidesToShow: 1.3, slidesToScroll: 1 }
            }
        ]
    });
});

// ================= 레시피 슬릭 슬라이더 =================
$(document).ready(function(){
    $('.recipes-slide-wrap').slick({
        slidesToShow: 4.2,       
        slidesToScroll: 4,     
        infinite: false,        
        dots: false,                    
        responsive: [         
            {
                breakpoint: 1025,
                settings: { slidesToShow: 3.2, slidesToScroll: 3 }
            },
            {
                breakpoint: 770,
                settings: { slidesToShow: 2.2, slidesToScroll: 2 }
            },
            {
                breakpoint: 482,
                settings: { slidesToShow: 1.3, slidesToScroll: 1 }
            }
        ]
    });
});