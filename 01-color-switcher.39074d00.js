const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]");let a=null;function d(){document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}t.addEventListener("click",(t=>{a=setInterval(d,1e3),t.target.disabled=!0,e.disabled=!1})),e.addEventListener("click",(e=>{clearInterval(a),t.disabled=!1,e.target.disabled=!0}));
//# sourceMappingURL=01-color-switcher.39074d00.js.map
