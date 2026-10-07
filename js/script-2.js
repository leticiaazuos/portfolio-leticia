
const P=[["Helder da Bet","Social Media e Estratégia",["Social Media"],"helder","helder"],["Bruno Karttos","Social Media e Estratégia",["Social Media"],"bruno","bruno"],["Agro Pontes","Social Media e Campanhas",["Social Media","Campanhas"],"agro","agro"],["Fitbay Sports Wear","Fotografia e Videomaker",["Fotografia","Vídeo"],"fitbay","fitbay"],["Maris Fitness Wear","Lançamento de Marca",["Lançamento de Marca"],"maris","maris"],["Barra Grande Corretora","Social Media e ID Visual",["Social Media","Identidade Visual"],"barra","barra"],["Pet Seguro","Criação de Marca e ID Visual",["Identidade Visual","Lançamento de Marca"],"pet","pet"],["Connect","Social Media / Identidade Visual",["Social Media","Identidade Visual"],"connect","connect"],["Connecta","Criação de Marca e ID Visual",["Identidade Visual"],"conecta","conecta"],["Saúde Mais","Criação de Marca e ID Visual",["Identidade Visual"],"saude","saude"],["Tropa do Melzinho","Identidade Visual / Equipe de Gincana",["Identidade Visual"],"tropa","tropa"],["Outros projetos","Videomaker Mobile",["Vídeo"],"outros","outros"]];
const IM={"helder": "img/img-093-a1e2fec231.jpg", "bruno": "img/img-094-453a98e9c2.jpg", "agro": "img/img-095-dc0da27a00.jpg", "fitbay": "img/img-096-3b47d19d51.jpg", "maris": "img/img-097-adc64244cd.jpg", "barra": "img/img-098-117fd4495e.jpg", "pet": "img/img-099-2c602a7473.jpg", "connect": "img/img-100-395149ead4.jpg", "conecta": "img/img-101-0703af2dd9.jpg", "saude": "img/img-102-1722093523.jpg", "tropa": "img/img-103-f176442e53.jpg", "outros": "img/img-104-d3d9aff8fa.jpg"};
const cats=["Todos","Social Media","Identidade Visual","Fotografia","Vídeo","Campanhas","Lançamento de Marca"];
const $=s=>document.querySelector(s);let cur="Todos";
function draw(){
$("#flt").innerHTML=cats.map(c=>`<button aria-pressed="${c==cur}" data-c="${c}">${c}</button>`).join("");
$("#grid").innerHTML=P.filter(p=>cur=="Todos"||p[2].includes(cur)).map(p=>`<button class="pc" ${p[4]?`data-case="${p[4]}"`:""}><div><img src="${IM[p[3]]}" alt="Projeto ${p[0]}"></div><span><span style="display:block;padding:0"><b>${p[0]}</b><em>${p[1]}</em><i class="vc">Ver case ↗</i></span><u>›</u></span></button>`).join("")}
$("#flt").onclick=e=>{const c=e.target.dataset.c;if(c){cur=c;draw()}};
function openCase(k){document.body.dataset.case=k;document.body.classList.add("case");scrollTo(0,0);try{history.replaceState(null,"","#"+k)}catch(e){}}
function closeCase(){document.body.classList.remove("case");delete document.body.dataset.case;try{history.replaceState(null,"","#projetos")}catch(e){}setTimeout(()=>$("#projetos").scrollIntoView(),0)}
$("#grid").onclick=e=>{const b=e.target.closest("[data-case]");if(b)openCase(b.dataset.case)};
document.querySelectorAll(".back").forEach(b=>b.onclick=closeCase);
document.querySelectorAll("[data-home]").forEach(a=>a.addEventListener("click",()=>{document.body.classList.remove("case");delete document.body.dataset.case}));
function route(){const k=location.hash.slice(1);if(k=="pet"||k=="saude"||k=="conecta"||k=="helder"||k=="connect"||k=="maris"||k=="fitbay"||k=="outros"||k=="connecta"||k=="tropa"||k=="agro"||k=="barra"||k=="bruno"){openCase(k);return}if(location.hash)setTimeout(()=>document.querySelector(location.hash)?.scrollIntoView(),0)}
draw();route();
const rm=matchMedia("(prefers-reduced-motion:reduce)").matches;
const io=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;io.unobserve(e.target);const el=e.target,n=+el.dataset.to,t=el.querySelector("i");if(!t)return;if(rm){t.textContent=n;return}t.textContent="0";let s=null;const f=ts=>{s??=ts;const k=Math.min((ts-s)/1100,1);t.textContent=Math.round(n*(1-Math.pow(1-k,3)));if(k<1)requestAnimationFrame(f)};requestAnimationFrame(f)}),{threshold:.45});
document.querySelectorAll("[data-to]").forEach(el=>io.observe(el));

(function(){const t=document.querySelector(".mq-t");if(!t||matchMedia("(prefers-reduced-motion:reduce)").matches||!t.animate)return;
const a=t.animate([{transform:"translateX(0)"},{transform:"translateX(-25%)"}],{duration:30000,iterations:Infinity,easing:"linear"});
let target=1,rate=1,raf=0;const step=()=>{rate+=(target-rate)*.08;if(Math.abs(target-rate)<.005){rate=target;a.playbackRate=rate;raf=0;return}a.playbackRate=rate;raf=requestAnimationFrame(step)};
const go=v=>{target=v;if(!raf)raf=requestAnimationFrame(step)};
const m=t.parentElement;m.addEventListener("pointerenter",e=>{if(e.pointerType==="mouse")go(0)});m.addEventListener("pointerleave",()=>go(1))})();
