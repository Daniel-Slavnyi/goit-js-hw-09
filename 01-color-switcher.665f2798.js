!function(){var t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),a=null;function n(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}t.addEventListener("click",(function(t){a=setInterval(n,1e3),t.target.disabled=!0,e.disabled=!1})),e.addEventListener("click",(function(e){clearInterval(a),t.disabled=!1,e.target.disabled=!0}))}();
//# sourceMappingURL=01-color-switcher.665f2798.js.map