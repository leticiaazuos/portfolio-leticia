(function(){
var rm=matchMedia("(prefers-reduced-motion:reduce)").matches;
var fine=matchMedia("(hover:hover) and (pointer:fine)").matches;

function wrapReveal(el){
  if(!el||el.querySelector(":scope > .rv"))return;
  var html=el.innerHTML;
  el.innerHTML="<span class=\"rv\"><span>"+html+"</span></span>";
}

if(!rm){
  var sTit=document.querySelector(".sb-card h2");
  var mTit=document.querySelector(".mt-h");
  var nTit=document.querySelector(".rs-h");
  var cTit=document.querySelector("#contato h2 i");
  [sTit,mTit,nTit,cTit].forEach(wrapReveal);

  var groups=[
    {root:document.querySelector("#sobre"),items:[".sb-k",".sb-card h2",".sb-t p"]},
    {root:document.querySelector("#metodo"),items:[".mt-k",".mt-h",".mt-p li"]},
    {root:document.querySelector("#ia"),items:[".ai h2",".ai h3",".ai p",".ai .go"]},
    {root:document.querySelector("#numeros"),items:[".rs-k",".rs-h",".rs-c"]},
    {root:document.querySelector("#profissional"),items:[".pf-k",".pf h2",".pf p",".pf-l li"]},
    {root:document.querySelector("#contato"),items:[".ct-k","h2","p",".ct-row"]},
    {root:document.querySelector("#projetos"),items:[".sh h2",".sh p",".flt",".grid",".soon"]}
  ];
  groups.forEach(function(g){
    if(!g.root)return;
    var n=0;
    g.items.forEach(function(sel){
      g.root.querySelectorAll(sel).forEach(function(el){
        el.classList.add("ri");
        el.style.setProperty("--d",(n*70)+"ms");
        n++;
      });
    });
  });

  var io=new IntersectionObserver(function(es){
    es.forEach(function(e){
      if(!e.isIntersecting)return;
      e.target.classList.add("in");
      io.unobserve(e.target);
    });
  },{threshold:.16,rootMargin:"0px 0px -8% 0px"});
  groups.forEach(function(g){if(g.root)io.observe(g.root)});
}

var bar=document.getElementById("sp");
if(bar&&!rm){
  var ticking=false;
  function progress(){
    ticking=false;
    var doc=document.documentElement;
    var max=doc.scrollHeight-doc.clientHeight;
    var p=max>0?doc.scrollTop/max:0;
    bar.style.transform="scaleX("+p+")";
  }
  addEventListener("scroll",function(){if(!ticking){ticking=true;requestAnimationFrame(progress)}},{passive:true});
  progress();
}

var veil=document.getElementById("vx");
function sweep(fn){
  if(rm||!veil){fn();return}
  veil.classList.remove("on");
  void veil.offsetWidth;
  veil.classList.add("on");
  setTimeout(fn,180);
  setTimeout(function(){veil.classList.remove("on")},430);
}

document.querySelectorAll('a[href="#projetos"]').forEach(function(a){
  a.addEventListener("click",function(){sweep(function(){})},true);
});
document.querySelectorAll(".back,[data-home]").forEach(function(el){
  el.addEventListener("click",function(){sweep(function(){})},true);
});
document.getElementById("grid")&&document.getElementById("grid").addEventListener("click",function(e){
  if(e.target.closest("[data-case]"))sweep(function(){});
},true);

if(fine&&!rm){
  var mags=[].slice.call(document.querySelectorAll(".go,.ct-b,.res .btn,.op-btn,.bg-cta"));
  mags.forEach(function(el){el.classList.add("mg")});
  document.addEventListener("mousemove",function(e){
    if(document.documentElement.classList.contains("hm-pre"))return;
    mags.forEach(function(el){
      var r=el.getBoundingClientRect();
      var cx=r.left+r.width/2,cy=r.top+r.height/2;
      var dx=e.clientX-cx,dy=e.clientY-cy;
      var dist=Math.hypot(dx,dy);
      var reach=Math.max(r.width,r.height)*.9+48;
      if(dist>reach){el.style.transform="";return}
      var k=(1-dist/reach)*.12;
      el.style.transform="translate("+dx*k+"px,"+dy*k+"px)";
    });
  },{passive:true});
  document.addEventListener("mouseleave",function(){
    mags.forEach(function(el){el.style.transform=""});
  });
}
})();
