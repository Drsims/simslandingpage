(function(){
'use strict';
var WA='2348165401686'; // WhatsApp number, country code first, no "+"
var nav=document.getElementById('nav'),btn=document.getElementById('menu');
btn.addEventListener('click',function(){var o=nav.classList.toggle('open');btn.setAttribute('aria-expanded',o);});
nav.addEventListener('click',function(e){if(e.target.closest('a')){nav.classList.remove('open');btn.setAttribute('aria-expanded','false');}});
document.addEventListener('keydown',function(e){if(e.key==='Escape'&&nav.classList.contains('open')){nav.classList.remove('open');btn.setAttribute('aria-expanded','false');btn.focus();}});
document.getElementById('yr').textContent=new Date().getFullYear();
// highlight active nav item
var links=[].slice.call(document.querySelectorAll('nav a.l'));
if('IntersectionObserver' in window){
 var io=new IntersectionObserver(function(en){en.forEach(function(x){if(x.isIntersecting){links.forEach(function(a){var on=a.getAttribute('href')==='#'+x.target.id;a.classList.toggle('active',on);if(on)a.setAttribute('aria-current','true');else a.removeAttribute('aria-current');});}});},{rootMargin:'-45% 0px -50% 0px'});
 links.forEach(function(a){var s=document.querySelector(a.getAttribute('href'));if(s)io.observe(s);});
}
// product links preselect the interest dropdown
[].forEach.call(document.querySelectorAll('[data-i]'),function(a){a.addEventListener('click',function(){document.getElementById('interest').value=a.getAttribute('data-i');});});
// contact form -> WhatsApp (nothing is stored or sent to a server)
var f=document.getElementById('cf'),st=document.getElementById('status');
function setErr(id,msg){var i=document.getElementById(id),e=document.getElementById(id+'-e');e.textContent=msg||'';if(msg){i.setAttribute('aria-invalid','true');}else{i.removeAttribute('aria-invalid');}return !msg;}
f.addEventListener('submit',function(ev){
 ev.preventDefault();st.className='';st.textContent='';
 var n=f.name.value.trim(),i=f.interest.value,m=f.message.value.trim(),c=f.consent.checked;
 var ok=true;
 ok=setErr('name',n.length<2?'Please enter your name.':'')&&ok;
 ok=setErr('interest',!i?'Please choose what you need.':'')&&ok;
 ok=setErr('message',m.length<5?'Please tell us a little about what you need.':'')&&ok;
 ok=setErr('consent',c?'':'Please tick the box to continue.')&&ok;
 if(!ok){st.className='bad';st.textContent='Please fix the highlighted fields.';var b=f.querySelector('[aria-invalid=true]');if(b)b.focus();return;}
 var text='Hello Dr Sims, my name is '+n.slice(0,80)+'. I am interested in: '+i+'.\n'+m.slice(0,800);
 var w=window.open('https://wa.me/'+WA+'?text='+encodeURIComponent(text),'_blank','noopener');
 if(w){st.className='ok';st.textContent='Opening WhatsApp with your message. Just press send.';f.reset();}
 else{st.className='bad';st.textContent='Your browser blocked WhatsApp. Please message us directly on +234 816 540 1686.';}
});
})();
