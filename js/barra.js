(function(){
var root=document.getElementById("case12");
if(!root)return;
var rm=matchMedia("(prefers-reduced-motion:reduce)").matches;
var $=function(q,r){return Array.prototype.slice.call((r||root).querySelectorAll(q))};
var started=false,tickT=0,onScroll=null;
function reveal(el){
  if(el.classList.contains("in"))return;
  el.classList.add("in");
  var k=el.classList.contains("stats")?el.firstElementChild.children:el.children;
  for(var i=0;i<k.length;i++)k[i].style.transitionDelay=(i*(el.classList.contains("ev")?160:90))+"ms";
  if(el.classList.contains("stats"))$(".num[data-n]",el).forEach(count);
  setTimeout(function(){el.classList.add("done");for(var i=0;i<k.length;i++)k[i].style.transitionDelay=""},2400);
}
function count(el){
  var n=+el.dataset.n,L=el.dataset.n.length,s=el.dataset.s,t0=performance.now();
  (function f(t){var p=Math.min((t-t0)/1300,1),e=1-Math.pow(1-p,3);el.textContent=String(Math.round(n*e)).padStart(L,"0")+s;if(p<1)requestAnimationFrame(f)})(t0);
}
function prepNums(){
  $(".num").forEach(function(el){
    if(el.dataset.ready)return;
    var t=el.textContent.trim(),m=t.match(/^(\d+)(\D*)$/);
    el.dataset.ready="1";
    if(m){el.dataset.n=m[1];el.dataset.s=m[2];el.setAttribute("aria-label",t);if(!rm)el.textContent=m[1].replace(/\d/g,"0")+m[2]}
    else{el.setAttribute("aria-label",t);if(!rm)el.innerHTML=t.split("").map(function(c,i){return '<span class="ch" aria-hidden="true" style="transition-delay:'+(i*70)+'ms">'+(c===" "?"&nbsp;":c)+"</span>"}).join("")}
  });
}
function start(){
  if(started||rm){if(!rm)root.classList.add("bg-js");if(rm)prepNums();return}
  started=true;
  root.classList.add("bg-js");
  prepNums();
  var hero=$(".hero")[0],end=$(".end")[0],sw=$(".sweep")[0],cont=sw&&sw.nextElementSibling;
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){io.unobserve(e.target);reveal(e.target)}})},{threshold:.15});
  $(".head,.icons,.posts,.ev,.kpis,.stats").forEach(function(el){io.observe(el)});
  if(cont){$(".head,.posts",cont).forEach(function(el){io.unobserve(el)})}
  if(sw&&cont){
    new IntersectionObserver(function(es,o){if(es[0].isIntersecting){o.disconnect();sw.classList.add("in");setTimeout(function(){$(".head,.posts",cont).forEach(reveal)},800)}},{rootMargin:"0px 0px -35% 0px"}).observe(sw);
  }
  var N=7,c=0,sp=$(".tg span");
  tickT=setInterval(function(){sp.forEach(function(s,i){s.classList.toggle("on",i%N===c)});c=(c+1)%N},1100);
  var tk=false;
  function upd(){
    tk=false;
    var y=window.pageYOffset,vh=innerHeight;
    if(hero&&y<vh*1.3){hero.style.setProperty("--py",Math.min(y*.03,18)+"px");hero.style.setProperty("--px",Math.min(y*.04,22)+"px")}
    if(end){var r=end.getBoundingClientRect();end.style.setProperty("--rp",Math.max(0,Math.min(1,(vh-r.top)/(vh*.9))).toFixed(3))}
  }
  onScroll=function(){if(!tk){tk=true;requestAnimationFrame(upd)}};
  addEventListener("scroll",onScroll,{passive:true});
  addEventListener("resize",upd);
  upd();
}
function stop(){
  if(tickT){clearInterval(tickT);tickT=0}
}
function sync(){
  if(document.body.dataset.case==="barra")start();
}
sync();
new MutationObserver(sync).observe(document.body,{attributes:true,attributeFilter:["data-case","class"]});
})();
