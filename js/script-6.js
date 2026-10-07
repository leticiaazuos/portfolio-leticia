(function(){var mq=matchMedia("(hover:hover) and (pointer:fine)");if(!mq.matches)return;
var h=document.documentElement,c=document.getElementById("cc"),rm=matchMedia("(prefers-reduced-motion:reduce)").matches;
var tx=0,ty=0,x=0,y=0,raf=0,first=true;
var CL='a,button,[role="button"],[data-case],[data-c],summary,select,label,input,[tabindex]:not([tabindex="-1"])',BL=".mt-band,.wa-fab,.cta,.hd-th,.go i,.flt button[aria-pressed=true],.pj-x,.res .btn";
function loop(){x+=(tx-x)*.24;y+=(ty-y)*.24;if(Math.abs(tx-x)<.1&&Math.abs(ty-y)<.1){x=tx;y=ty;raf=0}else raf=requestAnimationFrame(loop);c.style.transform="translate3d("+x+"px,"+y+"px,0)"}
addEventListener("mousemove",function(e){tx=e.clientX;ty=e.clientY;
if(first){first=false;x=tx;y=ty;c.style.transform="translate3d("+x+"px,"+y+"px,0)";h.classList.add("cc-on")}
c.classList.add("show");
if(rm){x=tx;y=ty;c.style.transform="translate3d("+x+"px,"+y+"px,0)"}else if(!raf)raf=requestAnimationFrame(loop)},{passive:true});
document.addEventListener("mouseover",function(e){var t=e.target;if(!t.closest)return;c.classList.toggle("hov",!!t.closest(CL));c.classList.toggle("blue",!!t.closest(BL))},{passive:true});
document.addEventListener("mouseleave",function(){c.classList.remove("show")});
document.addEventListener("mouseenter",function(){if(!first)c.classList.add("show")});
addEventListener("mousedown",function(){c.classList.add("dn")});addEventListener("mouseup",function(){c.classList.remove("dn")});
mq.addEventListener&&mq.addEventListener("change",function(e){if(!e.matches){h.classList.remove("cc-on");c.classList.remove("show")}});
})();