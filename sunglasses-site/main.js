// a 태그 링크 이동 막기
document.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', function(event) {
        event.preventDefault();
    });
});

// shape-slider
const shapeSlider = new Swiper('.shape-slider', {
    slidesPerView: 3,
    spaceBetween: 20,
    pagination: {
        el: ".pager",
        clickable: true,
    },
    breakpoints: {
        768: {
            slidesPerView: 4,
        },
        1024: {
            slidesPerView: 6,
        }
    }
});

// recommend-slider
const recommendSlider = new Swiper('.recommend-slider', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
        el: ".pager",
        clickable: true,
    },
    breakpoints: {
        768: {
            slidesPerView: 1.4,
        },
        1024: {
            slidesPerView: 2.3,
        },
        1400: {
            slidesPerView: 3,
        }
    }
});

// lookbook-slider
const lookbookSlider = new Swiper('.lookbook-slider', {
    loop: true,
    slidesPerView: 1.4,
    spaceBetween: 30,
    centeredSlides: true,
    pagination: {
        el: ".pager",
        clickable: true,
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3.6,
        }
    }
});

// 오버레이 탭 토글
const userTab = document.querySelector('.overlay-tab');
const tabCloseBtn = document.querySelector('.tab-close-btn');
const tabOpenBtn = document.querySelector('.tab-open-btn');

tabOpenBtn.addEventListener('click', () => {
    userTab.classList.add('active')
    userTab.setAttribute('aria-expanded', 'true');
    tabOpenBtn.setAttribute('aria-expanded', 'true');
    document.body.classList.add('no-scroll'); 
});
tabCloseBtn.addEventListener('click', () => {
    userTab.classList.remove('active')
    userTab.setAttribute('aria-expanded', 'false');
    tabOpenBtn.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('no-scroll'); 
});

// 화면 상단 이동
const scrollTopBtn = document.querySelector('.scroll-top-btn');
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollTopBtn.classList.remove('hidden');
    } else {
        scrollTopBtn.classList.add('hidden');
    }
});
scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
});

