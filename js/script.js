const header = document.querySelector('#header');
const menuAll = document.querySelector('.btn-menuall');
const menuGnb = document.querySelector('.gnb');
const mainVisual = document.querySelector('.main-visual');
const subVisual = document.querySelector('.sub-visual');
const subMenu = document.querySelector('#sub-menu');
let lastScrollY = 0;

const titleList = document.querySelectorAll('.title');
const subTitleList = document.querySelectorAll('.sub-title');
const articleList = document.querySelectorAll('section article');

const btnTop = document.querySelector('.btn-top');
const siList = document.querySelector('.si .case-wrap');

const tabTitle = document.querySelector('.tab-title');
let selectedTab = document.querySelectorAll('.tab-title > *')[0];

const yearBtn = document.querySelector('.year');
const yearList = document.querySelectorAll('.year button');
const historyList = document.querySelectorAll('.history-section');
let selectedYear = document.querySelectorAll('.year button')[0];
let selectedGroup = document.querySelectorAll('.history-section')[0];

//사이트맵 & 모바일 메뉴
menuAll.addEventListener('click', function(){
    this.classList.toggle('active');
    header.classList.toggle('sitemap');
    document.querySelector('body').classList.toggle('no-scroll');
});
menuGnb.addEventListener('click', function(){
    header.classList.remove('sitemap');
})

window.addEventListener('scroll', function(){
    let currentScrollY = window.scrollY;

    if((lastScrollY > currentScrollY) || (currentScrollY < 100)) {
        header.classList.add('active');
        subMenu && subMenu.classList.add('active');
        mainVisual && mainVisual.classList.add('active');
    } else {
        header.classList.remove('active');
        subMenu && subMenu.classList.remove('active');
        mainVisual && mainVisual.classList.remove('active');
    }
    if(currentScrollY > 50) {
        mainVisual && mainVisual.classList.add('active');
        subVisual && subVisual.classList.add('active');
    } else {
        mainVisual && mainVisual.classList.remove('active');
        subVisual && subVisual.classList.remove('active');
    }
    currentScrollY > window.innerHeight ? btnTop.classList.add('active') : btnTop.classList.remove('active');
    lastScrollY = currentScrollY;
});


//메인 이미지 슬라이드
let swiper = new Swiper(".visualSwiper", {
    centeredSlides: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    }
});
//메인 고객사
let clientList = new Swiper(".clientSwiper", {
    autoplay: {
        delay: 0,        
        disableOnInteraction:false,
    },
    slidesPerView:'auto',
    speed:20000,
    loop:true,
    loopAdditionalSlides:1,
});

//위로가기버튼
btnTop.addEventListener('click', function(){
    window.scrollTo({top:0, behavior:'smooth'});
});

//연혁
yearBtn && yearBtn.addEventListener('click', function(e){    
    let currentYear = e.target.dataset.group;
    
    selectedYear.classList.remove('active');    
    e.target.classList.add('active');
    
    document.querySelector(`#${currentYear}`).scrollIntoView({behavior:'smooth'});
    
    selectedGroup.classList.remove('active');
    document.querySelector(`#${currentYear}`).classList.add('active');

    selectedYear = e.target;
    selectedGroup = document.querySelector(`#${currentYear}`);
});

//탭
tabTitle && tabTitle.addEventListener('click', function(e){
    let currentID = e.target.dataset.tab;
    let selectedID = selectedTab.dataset.tab;

    if(e.target.tagName !== 'BUTTON') return;

    selectedTab.classList.remove('active');
    e.target.classList.add('active');
    document.querySelector(`#${selectedID}`).classList.remove('active');
    document.querySelector(`#${currentID}`).classList.add('active');

    selectedTab = e.target;
});

//애니메이션 효과
const options = {
    root : null,
    rootMargin:'0px',
    threshold: .3,
}
const observer = new IntersectionObserver((entires, observer) => {
    entires.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target); 
        }        
    });
}, options);
const history = new IntersectionObserver(entires => {
    entires.forEach(entry => {
        if(entry.isIntersecting) {
            const groupID = entry.target.id;
            yearList.forEach(button => {
                if(button.getAttribute('data-group') === groupID) {
                    button.classList.add('active');
                } else {
                    button.classList.remove('active');
                }
            });
        }
    });
}, options);

titleList.forEach(el => observer.observe(el));
subTitleList.forEach(el => observer.observe(el));
articleList.forEach(el => observer.observe(el));
historyList.forEach(el => history.observe(el));
