// ========== 링크 새페이지에서 열기 ==========
document.querySelectorAll('a').forEach(link => {
    link.setAttribute('target', '_blank');
    link.setAttribute('rel', 'noopener noreferrer');
});

<<<<<<< HEAD
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
=======
// ========== 헤더 nav 이동 ========== 
const navLinks = document.querySelectorAll('.nav-list a');
navLinks.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// ================= 헤더 스크롤 =================
window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY; 
    const header = document.querySelector("header");

    if (scrollTop >= 30) {
        header.classList.add("fixed");   
    } else {
        header.classList.remove("fixed"); 
    }
});

// ========== skill open btn ========== 
const skillOpenBtn = document.querySelector('.open-btn');
const skillDescList = document.querySelector('.skill-desc-list')
skillOpenBtn.addEventListener('click',()=>{
    skillOpenBtn.classList.toggle('close')
    if(skillOpenBtn.classList.contains('close')){
        skillDescList.style.maxHeight = '100%'
        skillDescList.style.opacity = '1'
        window.scrollBy({ top: 150, behavior: 'smooth' });
    }else {
        skillDescList.style.maxHeight = '0'
        skillDescList.style.opacity = '0'
    }
})
>>>>>>> c11cec2 (edit portfolio)
