// 프로젝트 슬라이드
const swiper = new Swiper('.swiper', {
    loop: true,
    slidesPerView: 1.2,     
    spaceBetween: 30,
    pagination: {
    el: '.slide-pagination',
    type: 'fraction',
    clickable: true,
    },
    navigation: {
    nextEl: '.slide-next-btn',
    prevEl: '.slide-prev-btn',
    },
});

// 모달 열기
const projectDetail = document.querySelectorAll('.project-detail')
const swiperSlides = document.querySelectorAll('.swiper-slide')

swiperSlides.forEach(slide=>{
    slide.addEventListener('click', ()=>{
        const targetId = slide.dataset.id;
        projectDetail.forEach(detail=>{
            if(slide.classList.contains('swiper-slide-active') && targetId === detail.id){
                detail.hidden = false;
                document.body.style.overflow = 'hidden';
            }else {
                detail.hidden = true
            }
        })
    })
});

// 모달 닫기
const closeModalBtns = document.querySelectorAll('.close-modal');
closeModalBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const modal = btn.closest('.project-detail');
        if (modal) {
            modal.hidden = true;
            document.body.style.overflow = '';
        }
    });
});

// 링크 새페이지에서 열기
document.querySelectorAll('a').forEach(link => {
    link.setAttribute('target', '_blank');
    link.setAttribute('rel', 'noopener noreferrer');
});