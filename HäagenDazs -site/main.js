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
    const $tabBtn = $(".tab-overlay-btn");
    const $closeBtn = $(".tab-close-btn");

    $tabBtn.click(function() {
        $tabWrap.addClass("open").attr("aria-hidden", "false");
        $overlay.addClass("open").attr("aria-hidden", "false");
    });

    $closeBtn.click(function() {
        $tabWrap.removeClass("open").attr("aria-hidden", "true");
        $overlay.removeClass("open").attr("aria-hidden", "true");
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