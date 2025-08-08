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

