document.documentElement.classList.add('js');
var L='fr',root=document.documentElement;
// Âge
(function(){var n=new Date(),b=new Date(2004,4,12),a=n.getFullYear()-b.getFullYear();
if(n<new Date(n.getFullYear(),4,12))a--;var e=document.getElementById('age');if(e)e.textContent=a})();
// Thème
var th=document.getElementById('th');
root.dataset.theme='light';try{var s=localStorage.getItem('theme');if(s)root.dataset.theme=s}catch(e){}
th&&th.addEventListener('click',function(){var t=root.dataset.theme==='light'?'dark':'light';root.dataset.theme=t;try{localStorage.setItem('theme',t)}catch(e){}});
// Langues : les traductions sont dans i18n-en.js et i18n-pt.js (window.I18N)
var I18N=window.I18N||{},
FR_WORDS=['FPGA & SystemVerilog','Systèmes embarqués','Robotique','Management & leadership'],
HTML_LANG={fr:'fr',en:'en',pt:'pt-BR'};
// Texte qui s'écrit
(function(){var el=document.getElementById('rot');if(!el)return;
var i=0,j=0,d=false;
function t(){var w=(I18N[L]&&I18N[L].words)||FR_WORDS,x=w[i%w.length];j+=d?-1:1;el.textContent=x.slice(0,j);var p=d?35:70;
if(!d&&j===x.length){d=true;p=1400}else if(d&&j===0){d=false;i=(i+1)%w.length;p=400}setTimeout(t,p)}t()})();
// Filtre projets
var tabs=document.querySelectorAll('.tabs button'),cards=document.querySelectorAll('#pj .card');
tabs.forEach(function(b){b.addEventListener('click',function(){tabs.forEach(function(x){x.setAttribute('aria-pressed',x===b)});
cards.forEach(function(c){c.style.display=(b.dataset.f==='all'||c.dataset.t===b.dataset.f)?'':'none'})})});
// Lien actif
var links=document.querySelectorAll('.top nav a');
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting)links.forEach(function(l){l.classList.toggle('on',l.getAttribute('href')==='#'+e.target.id)})})},{rootMargin:'-40% 0px -55% 0px'});
document.querySelectorAll('section[id]').forEach(function(s){io.observe(s)});

// Apparition de la ligne temporelle
var rv=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('vis');rv.unobserve(e.target)}})},{threshold:.15});
document.querySelectorAll('.tlx>.card').forEach(function(c){rv.observe(c)});

// Traduction FR / EN / PT-BR
var txt=[],tw=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT,{acceptNode:function(n){
  var p=n.parentNode.nodeName;return(p==='SCRIPT'||p==='STYLE'||!n.nodeValue.trim())?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT}});
while(tw.nextNode())txt.push({n:tw.currentNode,o:tw.currentNode.nodeValue});
var lbs=document.querySelectorAll('#langs button'),md=document.querySelector('meta[name=description]'),
A=[['#th','Changer de thème','th'],['.tabs','Filtrer les projets','tabs']],
TITLE_FR=document.title,DESC_FR=md&&md.content;
function setLang(l){
  var d=I18N[l];if(l!=='fr'&&!d)l='fr';
  L=l;root.lang=HTML_LANG[l];
  txt.forEach(function(x){var k=x.o.trim().replace(/[\u00a0\u202f]/g,' '),v=d&&d.t[k];
    x.n.nodeValue=(l!=='fr'&&v)?x.o.replace(x.o.trim(),function(){return v}):x.o});
  document.title=l==='fr'?TITLE_FR:d.title;
  if(md)md.content=l==='fr'?DESC_FR:d.desc;
  A.forEach(function(a){var e=document.querySelector(a[0]);if(e)e.setAttribute('aria-label',l==='fr'?a[1]:d.aria[a[2]])});
  lbs.forEach(function(b){b.setAttribute('aria-pressed',b.dataset.l===l)});
  try{localStorage.setItem('lang',l)}catch(e){}
}
lbs.forEach(function(b){b.addEventListener('click',function(){setLang(b.dataset.l)})});
try{var sl=localStorage.getItem('lang');if(sl&&sl!=='fr')setLang(sl)}catch(e){}