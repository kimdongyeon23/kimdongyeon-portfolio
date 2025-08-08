// 모든 a 태그 기본 이동 동작 막기
document.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', function(event) {
        event.preventDefault();
    });
});

// 헤더 공지 배너
const headerAlert = document.querySelector('.header-top')
const closeBtn = document.querySelector('.close-btn')
const bookingSec = document.querySelector('.booking-sec')
const tabmMenu = document.querySelector('.res-user-menu')
closeBtn.addEventListener('click', ()=>{
    headerAlert.classList.add('close')
    bookingSec.style.marginTop = '62px'
    tabmMenu.style.top = '62px'
})

// booking 탭
const tabBtn = document.querySelectorAll('.tab-btn')
const tabForm = document.querySelectorAll('.tab-form')

tabBtn.forEach(btn=>{
    btn.addEventListener('click', ()=>{
        const targetId = btn.dataset.target;

        tabBtn.forEach(item => {
        item.setAttribute('aria-selected', 'false');
        item.classList.remove('active');
        btn.classList.add('active')
        btn.setAttribute('aria-selected', 'true');
        });

        tabForm.forEach(form => {
            form.classList.remove('active')
            if(targetId === form.id){
                form.classList.add('active')
            }
        });
    })
});

// 여행 정보 슬라이드
const infoSwiper = new Swiper('.info-swiper', {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 20,
    navigation: {
    nextEl: '.info-next-btn',
    prevEl: '.info-prev-btn',
    },
    breakpoints: {
    320: {      
    slidesPerView: 1,
    },
    720: {      
    slidesPerView: 2,
    },
    1110: {      
    slidesPerView: 3,
    }
    }
});

// 공지사항 슬라이드
const noticeSwiper = new Swiper('.notice-swiper', {
    slidesPerView: 1,
    loop: true,
    navigation: {
    nextEl: '.notice-next-btn',
    prevEl: '.notice-prev-btn',
    }
});

// 반응형 헤더 버튼 토글
const gnbToggleBtn = document.querySelector('.res-user-toggle');
const resUserMenu = document.querySelector('.res-user-menu');

gnbToggleBtn.addEventListener('click', () => {
    const isHidden = resUserMenu.hasAttribute('hidden');

    if(isHidden) {
    resUserMenu.removeAttribute('hidden'); 
    gnbToggleBtn.setAttribute('aria-expanded', 'true');
    gnbToggleBtn.textContent= 'X'
} else {
    resUserMenu.setAttribute('hidden', '');
    gnbToggleBtn.setAttribute('aria-expanded', 'false');
    gnbToggleBtn.textContent= '☰'
    } 
});

// faq 아코디언탭
const items = document.querySelectorAll('.accordion-item');
items.forEach(item => {
    item.addEventListener('click', () => {
    items.forEach(prev => {
        if (prev !== item) prev.classList.remove('active');
        });
    item.classList.toggle('active')
    });
});

// 반응형 푸터 아코디언탭
const accordionBtn = document.querySelectorAll('.footer-accordion-btn')
accordionBtn.forEach(header=>{
    header.addEventListener('click',()=>{
        const expanded = header.getAttribute('aria-expanded') === 'true';
        accordionBtn.forEach(btn => {
            btn.setAttribute('aria-expanded','false');
            btn.nextElementSibling.hidden = 'true'
        })
        if(!expanded){
            header.setAttribute('aria-expanded', 'true');
            header.nextElementSibling.hidden = false
        }
    })
})