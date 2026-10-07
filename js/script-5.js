(function(){
const B=document.body,P=document.getElementById("proj-panel"),H=document.querySelector("header");
const links=[...document.querySelectorAll('a[href="#projetos"]')];
const setH=()=>P.style.setProperty("--hh",H.offsetHeight+"px");
function openP(){setH();B.classList.remove("case");delete B.dataset.case;B.classList.add("pj-open");P.scrollTop=0;links.forEach(l=>l.setAttribute("aria-expanded","true"));try{history.replaceState(null,"","#projetos")}catch(e){}}
function closeP(){B.classList.remove("pj-open");links.forEach(l=>l.setAttribute("aria-expanded","false"))}
links.forEach(l=>l.addEventListener("click",e=>{e.preventDefault();e.stopImmediatePropagation();B.classList.contains("pj-open")&&!B.classList.contains("case")?closeP():openP()},true));
document.querySelectorAll("header nav a:not([href='#projetos']),header .logo").forEach(a=>a.addEventListener("click",closeP));
document.getElementById("pj-x").onclick=closeP;
addEventListener("keydown",e=>{if(e.key==="Escape")closeP()});
addEventListener("resize",setH);
document.getElementById("grid").addEventListener("click",e=>{if(e.target.closest("[data-case]"))B.classList.remove("pj-open")},true);
document.querySelectorAll(".back").forEach(b=>b.addEventListener("click",()=>setTimeout(openP,0)));
if(location.hash==="#projetos")setTimeout(openP,0);
})();