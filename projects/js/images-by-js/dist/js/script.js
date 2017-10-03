"use strict";!function(){function e(e){function i(e,t){for(var n=document.createDocumentFragment(),i=s*t>e.length?e.length:s*t,a=s*(t-1);a<i;a++)!function(t){var i=document.createElement("li");i.className="images__item";var a=document.createElement("img");a.setAttribute("src","https://unsplash.it/"+e[t].filename),a.setAttribute("alt","image by "+e[t].author),a.className="images__img",a.addEventListener("click",function(){var n=document.createElement("div");n.className="modal",n.style.backgroundImage='url("https://unsplash.it/'+e[t].filename+'")',document.body.appendChild(n),window.onkeydown=function(){n.className="hidden"},n.onclick=function(){n.className="hidden"}}),i.appendChild(a),n.appendChild(i)}(a);var l=document.getElementById("images-container");l.innerHTML="",l.appendChild(n)}function a(e,t){var a=document.getElementById("pagination");if(a.className="hidden",e.length>s){var l=function(){u.classList="prev",t<Math.ceil(e.length/s)&&(++t,n(t),i(e,t)),t===Math.ceil(e.length/s)&&(r.classList="next disabled")},c=function(){r.classList="next",--t,n(t),i(e,t),1===t&&(u.classList="prev disabled")};a.className="pagination",n(t);var r=document.getElementById("next");r.addEventListener("click",l);var u=document.getElementById("prev");u.addEventListener("click",c)}}function l(n){n.preventDefault();var l=e.filter(function(e){return e.author===this.innerHTML},this);c=1,i(l,c),a(l,c),t("author-link"),this.classList="author-link filters__sublink filters__sublink--active"}var s=20,c=1;i(e,c),a(e,c),function(e){for(var t=[],n=0;n<e.length;n++)t.indexOf(e[n].author)===-1&&t.push(e[n].author);t.sort();for(var i=document.createDocumentFragment(),a=0;a<t.length;a++){var s=document.createElement("li"),c=document.createElement("a");c.classList="author-link filters__sublink",c.setAttribute("href","#"),c.innerHTML=t[a],c.addEventListener("click",l),s.appendChild(c),i.appendChild(s)}document.getElementById("author-container").appendChild(i)}(e),function(e,n){function l(l){l.preventDefault(),t("size-link"),this.classList="size-link filters__sublink filters__sublink--active",n=1;var s=e.filter(function(e){return e.width>1500});i(s,n),a(s,n)}function s(l){l.preventDefault(),t("size-link"),this.classList="size-link filters__sublink filters__sublink--active",n=1;var s=e.filter(function(e){return e.width<1499&&e.width>800});i(s,n),a(s,n)}function c(l){l.preventDefault(),t("size-link"),this.classList="size-link filters__sublink filters__sublink--active",n=1;var s=e.filter(function(e){return e.width<799});i(s,n),a(s,n)}document.getElementById("large").addEventListener("click",l),document.getElementById("medium").addEventListener("click",s),document.getElementById("small").addEventListener("click",c)}(e,c)}function t(e){for(var t=document.getElementsByClassName(e),n=0;n<t.length;n++)t[n].classList=e+" filters__sublink"}function n(e){document.getElementById("pag-number").innerHTML=e}function i(){document.getElementById("pagination").className="hidden";var e=document.createElement("li");e.innerHTML="Sorry, images are not available at the moment";var t=document.getElementById("images-container");t.innerHTML="",t.appendChild(e)}fetch("https://unsplash.it/list").then(function(e){if(200===e.status)return e.json()}).then(function(t){e(t)}).catch(function(){i()})}();