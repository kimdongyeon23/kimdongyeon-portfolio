// ========== 링크 새페이지에서 열기 ==========
document.querySelectorAll('a').forEach(link => {
    link.setAttribute('target', '_blank');
    link.setAttribute('rel', 'noopener noreferrer');
});

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
