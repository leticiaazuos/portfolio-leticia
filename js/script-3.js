(function(){var a=document.getElementById("ct-mail");if(!a)return;var to="leticiaapeiron@gmail.com";
function toast(m){var t=document.createElement("div");t.className="ct-toast";t.textContent=m;document.body.appendChild(t);requestAnimationFrame(function(){t.classList.add("on")});setTimeout(function(){t.classList.remove("on");setTimeout(function(){t.remove()},300)},3200)}
a.addEventListener("click",function(e){e.preventDefault();
try{window.open("mailto:"+to,"_blank")}catch(x){}
var done=function(){toast("E-mail copiado: "+to)};
try{navigator.clipboard.writeText(to).then(done,function(){toast(to)})}catch(x){toast(to)}})})();