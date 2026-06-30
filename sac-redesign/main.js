// ================= a 태그 링크 이동 막기 =================
document.querySelectorAll('.links-wrap a').forEach(a => {
    a.addEventListener('click', function(event) {
        event.preventDefault();
    });
});

// ================= header 스크롤 =================
window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY; 
    const header = document.querySelector("header");

    if (scrollTop >= 30) {
        header.classList.add("fixed");   
    } else {
        header.classList.remove("fixed"); 
    }
});

// ==================== header 반응형 메뉴 토글 ====================
const menuToggle = document.querySelector('.menu-toggle-btn');
const primaryNav = document.getElementById('primaryNav');
if (menuToggle && primaryNav) {
    menuToggle.addEventListener('click', function () {
        const isOpen = primaryNav.classList.toggle('is-open');
        menuToggle.setAttribute('aria-expanded', isOpen);
        menuToggle.setAttribute('aria-label', isOpen ? '전체 메뉴 닫기' : '전체 메뉴 열기');
        const icon = menuToggle.querySelector('i');
        icon.classList.toggle('fa-bars', !isOpen);
        icon.classList.toggle('fa-xmark', isOpen);
    });
}

// ==================== hero-section-slider ====================
const heroSwiper = new Swiper('.hero-swiper', {
    navigation: {
        prevEl: '.hero-slide-prev-btn',
        nextEl: '.hero-slide-next-btn',
    },
    pagination: {
        el: '.hero-pagination',
        clickable: true,
    },
    effect: 'fade',
        fadeEffect: {
        crossFade: true
    },
    speed: 800,
    loop: true,
});    

// ==================== event-section-slider ====================
const eventSwiper = new Swiper('.event-swiper', {
    slidesPerView: 1.2,
    spaceBetween: 12,
    navigation: {
        prevEl: '.event-slide-prev-btn',
        nextEl: '.event-slide-next-btn',
    },
    speed: 800,
    breakpoints: { 
        400: { slidesPerView: 1.6,
            spaceBetween: 14 },
        768: { slidesPerView: 2.4,
            spaceBetween:16 },
        1024: { slidesPerView: 3.2,
            spaceBetween: 18 },
        1370: { slidesPerView: 5,
            spaceBetween: 20 }
    }
});   

// ==================== new-ticket-section-slider ====================
    const newTicketSwiper = new Swiper('.new-ticket-swiper', {
    slidesPerView: 1.2,
    spaceBetween: 12,
    navigation: {
        prevEl: '.new-ticket-prev-btn',
        nextEl: '.new-ticket-next-btn',
    },
    speed: 800,
    breakpoints: { 
        400: { slidesPerView: 1.6,
            spaceBetween: 14 },
        768: { slidesPerView: 2.4,
            spaceBetween:16 },
        1024: { slidesPerView: 3.2,
            spaceBetween: 18 },
        1370: { slidesPerView: 5,
            spaceBetween: 20 }
    }
});    

// ==================== calendar-section ====================
document.addEventListener('DOMContentLoaded', function () {
    const calendarEl = document.getElementById('calendar');
    const calendar = new FullCalendar.Calendar(calendarEl, {
    
    // 기본 설정
    initialView: 'listWeek',
    locale: 'ko',
    height: 400,
    eventDisplay: 'list-item',
    events: [
        {
            title: '모네에서 앤디 워홀까지',
            start: '2026-05-20',
            end: '2026-06-25',
            location: '한가람미술관'
        },
        {
            title: 'KBS교향악단 정기연주회',
            start: '2026-06-25',
            location: '콘서트홀'
        },
        {
            title: '백조의 호수',
            start: '2026-05-26',
            end: '2026-06-27',
            location: '오페라극장'
        },
        {
            title: '피아노 리사이틀',
            start: '2026-06-30',
            end: '2026-07-30',
            location: 'IBK기업은행챔버홀'
        },
        {
            title: '현악사중주 시리즈',
            start: '2026-06-28',
            end: '2026-08-30',
            location: '리사이틀홀'
        },
        {
            title: '한국 현대미술 특별전',
            start: '2026-06-28',
            end: '2026-08-30',
            location: '한가람미술관'
        },
        {
            title: '오르간 오딧세이',
            start: '2026-06-29',
            location: '콘서트홀'
        },
        {
            title: '발레 갈라 콘서트',
            start: '2026-06-30',
            location: 'CJ 토월극장'
        }].map(event => {
            if(event.location.includes('미술관')){
                event.backgroundColor = '#8E44AD';
            }else if(event.location.includes('오페라극장')){
                event.backgroundColor = '#20325C'
            }else {
                event.backgroundColor = '#B8963E'
            }
            return event;
        })
    });

    calendar.render();
});