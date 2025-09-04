// ========== 링크 새페이지에서 열기 ==========
document.querySelectorAll('a').forEach(link => {
    link.setAttribute('target', '_blank');
    link.setAttribute('rel', 'noopener noreferrer');
});

// ========== 스킬 섹션 아코디언 탭 ========== 
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

// ========== 프로젝트 슬라이더 ==========
$(document).ready(function(){
    $('.project-slider').slick({
        dots: true,          
        infinite: false,     
        slidesToShow: 1,    
        slidesToScroll: 1,   
        arrows: true         
    });
});