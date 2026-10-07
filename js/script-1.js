(function(){var h=document.documentElement,pl=document.getElementById("pl");if(!pl)return;
function go(){h.classList.add("hm-go");setTimeout(function(){h.classList.remove("hm-pre","hm-go")},3800)}
if(h.classList.contains("pl-skip")){pl.remove();go();return}
var t0=Date.now(),fin=false,loaded=document.readyState==="complete";
function done(){if(fin)return;fin=true;pl.classList.add("out");h.classList.remove("pl-lock");go();try{sessionStorage.setItem("pl","1")}catch(e){}
setTimeout(function(){pl.remove()},800);}
function check(){var w=Math.max(0,1900-(Date.now()-t0));setTimeout(done,w)}
if(loaded)check();else addEventListener("load",check);
setTimeout(done,4500)})();