const header=document.querySelector('.site-header');
const menuButton=document.querySelector('.menu-button');
const mobileNav=document.querySelector('.mobile-nav');
menuButton.addEventListener('click',()=>{const open=mobileNav.classList.toggle('open');menuButton.classList.toggle('open',open);menuButton.setAttribute('aria-expanded',String(open));menuButton.setAttribute('aria-label',open?'メニューを閉じる':'メニューを開く')});
mobileNav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{mobileNav.classList.remove('open');menuButton.classList.remove('open');menuButton.setAttribute('aria-expanded','false')}));
window.addEventListener('scroll',()=>header.classList.toggle('scrolled',scrollY>24),{passive:true});
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
const slides=[...document.querySelectorAll('.gallery-slide')];
const number=document.querySelector('.slide-number');
let current=0;
function showSlide(next){slides[current].classList.remove('active');current=(next+slides.length)%slides.length;slides[current].classList.add('active');number.textContent=String(current+1).padStart(2,'0')}
document.querySelector('.gallery-next').addEventListener('click',()=>showSlide(current+1));
document.querySelector('.gallery-prev').addEventListener('click',()=>showSlide(current-1));
let autoplay=setInterval(()=>showSlide(current+1),6000);
document.querySelector('.gallery-stage').addEventListener('mouseenter',()=>clearInterval(autoplay));
