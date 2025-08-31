// 모든 a 태그 기본 이동 동작 막기
document.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', function(event) {
        event.preventDefault();
    });
});

// 반응형 탭 토글
const userTab = document.querySelector('.res-user-tab');
const tabCloseBtn = document.querySelector('.tab-close-btn');
const tabOpenBtn = document.querySelector('.tab-open-btn');

tabOpenBtn.addEventListener('click', () => {
    userTab.classList.add('active')
    userTab.setAttribute('aria-expanded', 'false');
});
tabCloseBtn.addEventListener('click', () => {
    userTab.classList.remove('active')
    userTab.setAttribute('aria-expanded', 'true');
});

// 추천 아이템 슬라이드
const recommendSlider = new Swiper('.recommend-slider', {
    loop: true,
    slidesPerView: 1.2,
    spaceBetween: 30,
    navigation: {
        nextEl: '.recommend-next-btn',
        prevEl: '.recommend-prev-btn',
    },
    breakpoints: {
        600: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        }
    }
});

// 뉴스레터 팝업 
const newsletterBtn = document.querySelector('.newsletter-btn');
const newsletterPopup = document.querySelector('.newsletter-popup');
const closeBtn = document.querySelector('.close-btn');
const popupOverlay = document.querySelector('.newsletter-overlay');

closeBtn.addEventListener('click', () => {
    newsletterPopup.classList.add('close');
    newsletterPopup.setAttribute('aria-expanded', 'false');
    newsletterBtn.classList.add('on');
    popupOverlay.classList.add('off');   
});

newsletterBtn.addEventListener('click', () => {
    const isExpanded = newsletterPopup.getAttribute('aria-expanded') === 'true';
    if (isExpanded) {
        newsletterPopup.classList.add('close');
        newsletterBtn.classList.remove('on');
        newsletterPopup.setAttribute('aria-expanded', 'false');
    } else {
        newsletterPopup.classList.remove('close');
        newsletterBtn.classList.remove('on');
        popupOverlay.classList.remove('off');   
        newsletterPopup.setAttribute('aria-expanded', 'true');
    }
});

// 맨 위로 올라가기
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