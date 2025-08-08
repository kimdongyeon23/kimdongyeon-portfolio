// 모든 a 태그 기본 이동 동작 막기
document.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', function(event) {
        event.preventDefault();
    });
});

// 헤더메뉴
const gnbItems = document.querySelectorAll('.gnb-item');
gnbItems.forEach(item => {
    const menuText = item.querySelector('.submenu-text');
    const submenu = item.querySelector('.submenu-list');
    
    item.addEventListener('mouseenter', () => {
    menuText.setAttribute('aria-expanded', 'true');
    submenu.style.display = 'block';
    });

    item.addEventListener('mouseleave', () => {
    menuText.setAttribute('aria-expanded', 'false');
    submenu.style.display = 'none';
    });
});

// 반응형 토글 버튼
const toggleBtn = document.querySelector('.res-gnb-toggle');
const gnb = document.querySelector('.res-gnb');

toggleBtn.addEventListener('click', () => {
    const isOpen = gnb.classList.toggle('open');
    gnb.setAttribute('aria-expanded', 'false');

    toggleBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    toggleBtn.textContent = gnb.classList.contains('open') ? 'X' : '☰'
});

// 팝업 슬라이드
const popupSwiper = new Swiper(".popup-swiper", {
    slidesPerView: 1,
    loop: true,
    navigation: {
    nextEl: ".next-btn",
    prevEl: ".prev-btn"
    }
});

// 책 카테고리 탭
const tabBtn = document.querySelectorAll('.tab-btn')
const tabContent = document.querySelectorAll('.tab-content')

tabBtn.forEach(button => {
    button.addEventListener('click', () => {
        tabBtn.forEach(btn => {
            btn.classList.remove('active');
            btn.setAttribute('aria-selected', 'false');
        });

        button.setAttribute('aria-selected', 'true');
        button.classList.add('active');

        const target = button.dataset.tab;
        tabContent.forEach(content => {
            content.classList.remove('active');
            if (target === content.id) {
                content.classList.add('active');
            }
        })
    })
});

// 새로운 책 카테고리 탭 슬라이드
const newSwiper = new Swiper(".new-swiper", {
    slidesPerView: 1.5,
    spaceBetween: 20,
    loop: true,
    navigation: {
    nextEl: ".new-next-btn",
    prevEl: ".new-prev-btn"
    },
breakpoints: {
    720: {      
    slidesPerView: 2.5,
    },
    1024: {      
    slidesPerView: 3.5,
    },
    1400: {      
    slidesPerView: 4.5,
    }
    }
});

// 베스트 책 카테고리 탭 슬라이드
const bestSwiper = new Swiper(".best-swiper", {
    slidesPerView: 4.5,
    spaceBetween: 20,
    loop: true,
    navigation: {
    nextEl: ".best-next-btn",
    prevEl: ".best-prev-btn"
    },
breakpoints: {
    720: {      
    slidesPerView: 2.5,
    },
    1024: {      
    slidesPerView: 3.5,
    },
    1400: {      
    slidesPerView: 4.5,
    }
    }
});

// 추천 책 카테고리 탭 슬라이드
const recommendSwiper = new Swiper(".recommend-swiper", {
    slidesPerView: 4.5,
    spaceBetween: 20,
    loop: true,
    navigation: {
    nextEl: ".recommend-next-btn",
    prevEl: ".recommend-prev-btn"
    },
breakpoints: {
    720: {      
    slidesPerView: 2.5,
    },
    1024: {      
    slidesPerView: 3.5,
    },
    1400: {      
    slidesPerView: 4.5,
    }
    }
});

// 휴관일 슬라이드
const holidaySwiper = new Swiper(".holiday-swiper", {
    spaceBetween: 20,
    navigation: {
    nextEl: ".day-next-btn",
    prevEl: ".day-prev-btn"
    },
});