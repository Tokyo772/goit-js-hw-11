import{i as c,S as d}from"./assets/vendor-8c59ed88.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();function h(i){const r="https://pixabay.com/api/",o=new URLSearchParams({key:"43457723-16bfd608d3311c06907a5c683",q:i,image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(`${r}?${o}`).then(s=>{if(!s.ok)throw new Error(s.statusText);return s.json()})}function f(i){return i.map(({webformatURL:r,largeImageURL:o,tags:s,likes:e,views:t,comments:a,downloads:m})=>`<li class="item">
      <a href="${o}"><img src="${r}" alt="${s}" class="image" /></a>
      <div class="content">
        <div>
          <h2 class="content-text">Likes</h2>
          <p class="number-text">${e}</p>
        </div>
        <div>
          <h2 class="content-text">Views</h2>
          <p class="number-text">${t}</p>
        </div>
        <div>
          <h2 class="content-text">Comments</h2>
          <p class="number-text">${a}</p>
        </div>
        <div>
          <h2 class="content-text">Downloads</h2>
          <p class="number-text">${m}</p>
        </div>
      </div>
    </li>`).join("")}const l={title:"❌",titleSize:"24px",messageColor:"white",messageSize:"16px",backgroundColor:"rgba(225, 0, 0, 0.3)",position:"topRight",timeout:3e3},n={form:document.querySelector(".js-form"),list:document.querySelector(".js-list"),loader:document.querySelector(".js-loader")};n.form.addEventListener("submit",y);function p(){n.loader.style.display="block"}function u(){n.loader.style.display="none"}u();function y(i){i.preventDefault();const r=n.form.elements.search.value.trim();if(r===""){c.show({...l,message:"Please enter a search term before submitting!"});return}p(),h(r).then(o=>{if(o.hits.length===0)throw new Error("error");n.list.innerHTML=f(o.hits),g.refresh()}).catch(o=>{n.list.innerHTML="",c.show({...l,message:"Sorry, there are no images matching your search query. Please try again!"})}).finally(()=>{u()})}const g=new d(".js-list a",{captionsData:"alt",captionDelay:250,captionPosition:"bottom"});
//# sourceMappingURL=commonHelpers.js.map
