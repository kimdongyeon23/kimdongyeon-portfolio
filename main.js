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

// 

const skillButtons = document.querySelectorAll('.skill-wrap');

skillButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const desc = btn.nextElementSibling;
        skillButtons.forEach(otherBtn => {
            const otherDesc = otherBtn.nextElementSibling;
            if (otherBtn !== btn) {
                otherBtn.classList.remove('active');
                otherDesc.style.maxHeight = null;
                otherDesc.style.opacity = 0;
                otherDesc.style.padding = 0;
            }
        });
        btn.classList.toggle('active');
        if (btn.classList.contains('active')) {
            desc.style.maxHeight = "200px";
            desc.style.opacity = 1;
            desc.style.padding = '1rem';
        } else {
            desc.style.maxHeight = null;
            desc.style.opacity = 0;
            desc.style.padding = 0;
        }
    });
});

$(document).ready(function(){
    $('.project-slider').slick({
        dots: true,          // 하단 점 표시
        infinite: false,      // 무한 슬라이드
        slidesToShow: 1,     // 한 번에 보여줄 슬라이드 수
        slidesToScroll: 1,   // 한 번에 이동할 슬라이드 수
        arrows: true         // 좌우 화살표 표시
    });
});