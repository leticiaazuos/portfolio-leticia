(function(){
const L=(t,id)=>"https://www.instagram.com/"+(t=="reel"?"reel":"p")+"/"+id+"/";
const R=(...a)=>a.map(x=>["reel",x]);
const OP=[
{n:"Cinderella",sub:"",cat:"Fashion / Retail",f:"fashion",m:"C",t:"Produção de conteúdo audiovisual para redes sociais, com foco em moda, produto, movimento e linguagem digital.",it:R("DYfqdfjhurF","DY0PDV1tqhG","DPeNaaODZUe","DQC5xR6jTlu","DRw-0TXkayQ")},
{n:"Colégio Supra",sub:"",cat:"Education / Institutional",f:"education",m:"CS",t:"Conteúdos institucionais para redes sociais, com foco em comunicação, rotina e posicionamento da marca.",it:[["reel","DTObjgfDuqa"],["post","DTftJBMDFy8"],["reel","DRdGRNSjgqI"],["reel","DQ7bfHFDjfg"],["reel","DCT7_8gO3i1"]]},
{n:"Ápice",sub:"Consultoria e Gestão de RH",cat:"Business / Corporate",f:"business",m:"Á",t:"Vídeos para redes sociais com linguagem profissional e acessível, apresentando a atuação da marca em consultoria e gestão de RH.",it:R("DcXDpPKJTmu","Dcw5G-KJI1z","DcKLp09JSMo")},
{n:"Souvikings",sub:"Hamburgueria",cat:"Food / Restaurant",f:"food",m:"S",t:"Captação e edição de vídeos para valorizar o produto, o ambiente e a identidade da hamburgueria.",it:R("C6FHwMFuwMr","C6Y1QaWuJQC")},
{n:"Emilly Carmo",sub:"Psicóloga",cat:"Health / Personal Brand",f:"health",m:"EC",t:"Vídeo para redes sociais com foco em marca pessoal, proximidade e posicionamento profissional na área da saúde.",it:R("C9vXOhsxiL0")},
{n:"Espaço Psi",sub:"",cat:"Health / Psychology",f:"health",m:"EP",t:"Conteúdo em vídeo para redes sociais, com linguagem acolhedora e clara para o universo da psicologia.",it:R("DUlw_hMEbBa")},
{n:"Cinderella × Gregor Mendel",sub:"",cat:"Fashion / Collaboration",f:"fashion",collab:1,m:"C × G",t:"Conteúdo em vídeo criado em colaboração entre marcas, unindo moda, estética e narrativa digital.",it:R("DTko2SrjeYk")},
{n:"Cinderella × Detroit",sub:"",cat:"Fashion / Collaboration",f:"fashion",collab:1,m:"C × D",t:"Conteúdo em vídeo criado em colaboração entre marcas, unindo moda, estética e narrativa digital.",it:R("DVrZHZhD63G")}
];
OP[0].it[0][2]="img/img-105-81be8d5ebc.jpg";OP[0].it[1][2]="img/img-106-a832aac076.jpg";OP[0].it[2][2]="img/img-107-fa2cb93dc4.jpg";OP[0].it[3][2]="img/img-108-ac91b502e4.jpg";OP[0].cv=OP[0].it[0][2];OP[0].it[4][2]="img/img-109-cd1bbe9229.jpg";OP[1].it[0][2]="img/img-110-e923249b54.jpg";OP[1].it[1][2]="img/img-111-a5ac022ccc.jpg";OP[1].it[2][2]="img/img-112-dae26fc7bb.jpg";OP[1].it[3][2]="img/img-113-1b833b2f65.jpg";OP[1].it[4][2]="img/img-114-b02459c029.jpg";OP[2].it[0][2]="img/img-115-e4716066da.jpg";OP[2].it[1][2]="img/img-116-be400b8fdf.jpg";OP[2].it[2][2]="img/img-117-784d077ab9.jpg";OP[3].it[0][2]="img/img-118-c7a3c332cd.jpg";OP[3].it[1][2]="img/img-119-404b448767.jpg";OP[4].it[0][2]="img/img-120-cec29b590a.jpg";OP[5].it[0][2]="img/img-121-fc27d10f9b.jpg";OP[6].it[0][2]="img/img-122-1c1a8f5c60.jpg";OP[7].it[0][2]="img/img-123-c210ed3b2f.jpg";OP[1].cv=OP[1].it[0][2];OP[2].cv=OP[2].it[0][2];OP[3].cv=OP[3].it[0][2];OP[4].cv=OP[4].it[0][2];OP[5].cv=OP[5].it[0][2];OP[6].cv=OP[6].it[0][2];OP[7].cv=OP[7].it[0][2];
const FL=[["all","Todos"],["fashion","Fashion"],["health","Health"],["food","Food"],["business","Business"],["education","Education"]];
const $=s=>document.querySelector(s),p2=n=>String(n).padStart(2,"0");let cur="all",last=null;
const esc=s=>s.replace(/&/g,"&amp;").replace(/</g,"&lt;");
function cover(o,cls){return o.cv?`<img src="${o.cv}" alt="Capa ${esc(o.n)}" loading="lazy">`:`<span class="mo" aria-hidden="true">${o.m}</span>`}
function draw(){
$("#op-flt").innerHTML=FL.map(f=>`<button aria-pressed="${f[0]==cur}" data-f="${f[0]}">${f[1]}</button>`).join("");
$("#op-grid").innerHTML=OP.map((o,i)=>[o,i]).filter(x=>cur=="all"||x[0].f==cur).map(([o,i])=>`<button class="op-c" data-i="${i}" aria-label="${esc(o.n)}, ${o.it.length} conteúdos"><div class="op-cv">${cover(o)}${o.collab?'<span class="op-tag">COLLAB</span>':""}</div><div class="op-ct"><b>${esc(o.n)}</b><em>${o.cat}</em><span>${p2(o.it.length)} ${o.it.length>1?"conteúdos":"conteúdo"} →</span></div></button>`).join("")}
function open(i){const o=OP[i];last=document.activeElement;
$("#op-mc").textContent=o.cat+(o.collab?" · COLLAB":"");$("#op-mt").textContent=o.n;$("#op-ms").textContent=o.sub;$("#op-mp").textContent=o.t;
const c={reel:0,post:0};
$("#op-rail").innerHTML=o.it.map(([t,id,cv])=>{c[t]++;const lab=(t=="reel"?"Reel ":"Post ")+p2(c[t]);
return `<a class="op-i" href="${L(t,id)}" target="_blank" rel="noopener noreferrer" aria-label="${lab} no Instagram"><span class="op-il">${lab}</span><div class="op-iv ${t}">${cv?`<img src="${cv}" alt="${lab}" loading="lazy">`:`<span class="mo" aria-hidden="true">${o.m}</span>`}${t=="reel"?'<u class="op-p" aria-hidden="true"></u>':""}</div><em>Ver no Instagram ↗</em></a>`}).join("");
const m=$("#op-m");m.hidden=false;m.scrollTop=0;$("#op-rail").scrollLeft=0;document.body.style.overflow="hidden";
const r=$("#op-rail");$("#op-nav").style.visibility=r.scrollWidth>r.clientWidth+4?"visible":"hidden";$("#op-x").focus()}
function close(){$("#op-m").hidden=true;document.body.style.overflow="";if(last)last.focus()}
$("#op-flt").onclick=e=>{const b=e.target.closest("[data-f]");if(b){cur=b.dataset.f;draw()}};
$("#op-grid").onclick=e=>{const b=e.target.closest("[data-i]");if(b)open(+b.dataset.i)};
$("#op-x").onclick=close;$("#op-m").addEventListener("click",e=>{if(e.target.id=="op-m")close()});
document.addEventListener("keydown",e=>{if(e.key=="Escape"&&!$("#op-m").hidden)close()});
const sc=d=>{const r=$("#op-rail");r.scrollBy({left:d*(r.clientWidth*.8),behavior:"smooth"})};
$("#op-pv").onclick=()=>sc(-1);$("#op-nx").onclick=()=>sc(1);
document.querySelectorAll(".back,[data-home]").forEach(b=>b.addEventListener("click",()=>{if(!$("#op-m").hidden)close()}));
draw()})();