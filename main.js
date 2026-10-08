// ========== 링크 새페이지에서 열기 ==========
document.querySelectorAll('a').forEach(link => {
    link.setAttribute('target', '_blank');
    link.setAttribute('rel', 'noopener noreferrer');
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
