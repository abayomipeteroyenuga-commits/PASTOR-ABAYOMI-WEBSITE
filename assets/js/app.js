
const header=document.querySelector('.header'),progress=document.querySelector('#scrollProgress');
const back=document.createElement('button');back.className='backtop';back.type='button';back.setAttribute('aria-label','Back to top');back.textContent='↑';document.body.appendChild(back);
function update(){const y=scrollY,d=document.documentElement.scrollHeight-innerHeight;header?.classList.toggle('scrolled',y>25);back.classList.toggle('show',y>500);if(progress)progress.style.width=(d>0?Math.min(100,y/d*100):0)+'%'}
addEventListener('scroll',update,{passive:true});update();back.addEventListener('click',()=>scrollTo({top:0,behavior:'smooth'}));
const toggle=document.querySelector('.menu-toggle'),mobile=document.querySelector('.mobile-menu');
toggle?.addEventListener('click',()=>{const o=mobile?.classList.toggle('open');toggle.setAttribute('aria-expanded',String(!!o));toggle.textContent=o?'×':'☰'});
mobile?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{mobile.classList.remove('open');toggle?.setAttribute('aria-expanded','false');if(toggle)toggle.textContent='☰'}));
const current=location.pathname.split('/').pop()||'index.html';document.querySelectorAll('[data-page]').forEach(a=>{if(a.dataset.page===current){a.classList.add('active');a.setAttribute('aria-current','page')}});
const modal=document.querySelector('#donateModal');const close=()=>modal?.classList.remove('open');
document.querySelectorAll('[data-donate]').forEach(b=>b.addEventListener('click',e=>{e.preventDefault();modal?.classList.add('open')}));
document.querySelector('.close')?.addEventListener('click',close);modal?.addEventListener('click',e=>{if(e.target===modal)close()});addEventListener('keydown',e=>{if(e.key==='Escape'){close();mobile?.classList.remove('open')}});
const msg=encodeURIComponent('Hello, I would like to support PASTOR ABAYOMI BIBLE STORIES. Please send me information on how I can make a donation.');
document.querySelectorAll('[data-wa]').forEach(a=>a.href=`https://wa.me/${a.dataset.wa}?text=${msg}`);
document.querySelectorAll('[data-social]').forEach(a=>{const u=window.SITE_CONFIG?.social?.[a.dataset.social];if(u){a.href=u;a.target='_blank';a.rel='noopener noreferrer'}else{a.classList.add('disabled');a.setAttribute('aria-disabled','true');a.addEventListener('click',e=>e.preventDefault())}});
const io=('IntersectionObserver'in window)?new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target)}}),{threshold:.06}):null;
document.querySelectorAll('.card,.mission,.story-banner,.quote-panel,.milestone').forEach(el=>{el.classList.add('reveal');if(io)io.observe(el);else el.classList.add('visible')});
if('serviceWorker'in navigator)addEventListener('load',()=>navigator.serviceWorker.register('./sw.js').catch(()=>{}));
