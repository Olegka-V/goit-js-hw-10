import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{f as c,i}from"./assets/vendor-77e16229.js";const r=document.querySelector("#datetime-picker"),a=document.querySelector("[data-start]"),l=document.querySelector("[data-days]"),m=document.querySelector("[data-hours]"),S=document.querySelector("[data-minutes]"),f=document.querySelector("[data-seconds]");a.disabled=!0;let e=null,o=null,s=null;const p={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){t[0].getTime()<Date.now()?i.warning({message:"Please choose a date in the future"}):(s=t[0].getTime(),a.disabled=!1,r.disabled=!0)}},y=t=>{const n=Math.floor(t/1e3%60),d=Math.floor(t/1e3/60%60),u=Math.floor(t/1e3/60/60%24);return[Math.floor(t/1e3/60/60%24%7).toString().padStart(2,"0"),u.toString().padStart(2,"0"),d.toString().padStart(2,"0"),n.toString().padStart(2,"0")]};c(r,p);a.addEventListener("click",()=>{a.disabled=!0,o=setInterval(()=>{const t=Date.now(),n=s-t;if(e=y(n),l.textContent=e[0],m.textContent=e[1],S.textContent=e[2],f.textContent=e[3],n<1e3){clearInterval(o),a.disabled=!0;return}},1e3)});
//# sourceMappingURL=commonHelpers.js.map