import{i as l,S as u}from"./assets/vendor-5b791d57.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();function d(r){return fetch(`https://pixabay.com/api/?key=42389697-3421d6cd291bd0189edc17b09&q=${r}&image_type=photo&orientation=horizontal&safesearch=true`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()})}function p(r){r.total||l.error({title:"",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}function f(r,t){const s=r.hits.map(e=>` 
    <a href="${e.largeImageURL}" class="image-card">
        <img src="${e.webformatURL}" alt="${e.tags}"/>
            <div class="caption">
                <ul class="caption-list"><li class="caption-text">Views <span>${e.views}</span></li>
                    <li class="caption-text">Likes <span>${e.likes}</span></li>
                    <li class="caption-text">Comments <span>${e.comments}</span></li>
                    <li class="caption-text">Downloads <span>${e.downloads}</span></li>
                </ul>
            </div>
    </a>`).join("");t.innerHTML=s;const i=new u(".gallery a",m);i.on("show.simplelightbox"),i.refresh()}const m={captions:!0,captionSelector:"img",captionType:"attr",captionsData:"alt",captionPosition:"bottom",captionDelay:250},h=document.querySelector("form"),a=document.querySelector(".gallery"),c=document.querySelector(".loader");h.addEventListener("submit",r=>{r.preventDefault(),a.innerHTML="";const t=r.target.elements.search.value;c.classList.remove("is-hidden"),d(t).then(s=>{p(s),f(s,a),c.classList.add("is-hidden")}).catch(s=>console.log(s)),r.target.reset()});
//# sourceMappingURL=commonHelpers.js.map
