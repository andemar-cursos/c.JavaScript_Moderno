const miModulo=(()=>{"use strict";let e=[],t=[];const r=["C","D","H","S"],l=["A","J","Q","K"],n=document.querySelector("#btnPedir"),a=document.querySelector("#btnDetener"),s=document.querySelector("#btnNuevo"),d=document.querySelectorAll("small"),o=document.querySelectorAll(".divCartas"),c=(r=2)=>{e=i(),t=[];for(let e=0;e<r;e++)t[e]=0;d.forEach(e=>e.innerText=0),document.querySelectorAll(".carta").forEach(e=>e.remove()),a.disabled=!1,n.disabled=!1},i=()=>{e=[];for(let t=2;t<11;t++)for(let l of r)e.push(t+l);for(let t of r)for(let r of l)e.push(r+t);return _.shuffle(e)},u=()=>{if(0===e.length)throw"No hay cartas en el deck";return e.shift()},f=(e,r)=>(t[e]+=(e=>{const t=e.substring(0,e.length-1);return isNaN(t)?"A"===t?11:10:1*t})(r),d[e].innerText=t[e],t[e]),h=(e,t)=>{const r=document.createElement("img");r.src=`assets/cartas/${t}.png`,r.classList.add("carta"),o[e].append(r)},m=e=>{let r=0;do{const e=u();r=f(t.length-1,e),h(t.length-1,e)}while(r<e&&e<=21);(()=>{const[e,r]=t;setTimeout(()=>{e===r?alert("Nadie gana"):e>21?alert("Perdiste !!"):r>21?alert("Ganaste !!"):r>e?alert("Perdiste !!"):alert("Ganaste !!")},20)})()};return n.addEventListener("click",()=>{const e=u();t[0]=f(0,e),h(0,e),t[0]>21?(n.disabled=!0,a.disabled=!0,m(t[0])):21===t[0]&&(n.disabled=!0,a.disabled=!0,m(t[0]))}),a.addEventListener("click",()=>{n.disabled=!0,a.disabled=!0,m(t[0])}),s.addEventListener("click",()=>{c()}),{nuevoJuego:c}})();