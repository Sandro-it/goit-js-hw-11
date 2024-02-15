import{i as l,S as d}from"./assets/vendor-5b791d57.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();function u(o){return fetch(`https://pixabay.com/api/?key=42389697-3421d6cd291bd0189edc17b09&q=${o}&image_type=photo&orientation=horizontal&safesearch=true`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()})}function f(o){o.total||l.error({title:"",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}function p(o,t){const s=o.hits.map(e=>` 
    <a href="${e.largeImageURL}" class="image-card">
        <img src="${e.webformatURL}" alt="${e.tags}"/>
            <div class="caption">
                <ul class="caption-list"><li class="caption-text">Views <span>${e.views}</span></li>
                    <li class="caption-text">Likes <span>${e.likes}</span></li>
                    <li class="caption-text">Comments <span>${e.comments}</span></li>
                    <li class="caption-text">Downloads <span>${e.downloads}</span></li>
                </ul>
            </div>
    </a>`).join("");t.innerHTML=s;const i=new d(".gallery a");i.on("show.simplelightbox"),i.refresh()}const m=document.querySelector("form"),a=document.querySelector(".gallery"),c=document.querySelector(".loader");m.addEventListener("submit",o=>{o.preventDefault(),a.innerHTML="";const t=o.target.elements.search.value;c.classList.remove("is-hidden"),u(t).then(s=>{f(s),p(s,a),c.classList.add("is-hidden")}).catch(s=>console.log(s)),o.target.reset()});
//# sourceMappingURL=commonHelpers.js.map
