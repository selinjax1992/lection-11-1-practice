import"./assets/modulepreload-polyfill-B5Qt9EMX.js";import{i as l}from"./assets/vendor-iVKk4foX.js";const n="lIkfQ4xr_wc7GJ3j7-Xaa9ByHDD2R61EhCU-9GjEkQA",i=e=>{const t=new URLSearchParams({query:e,orientation:"portrait",client_id:n,per_page:20});return fetch(`https://api.unsplash.com/search/photos?${t}`).then(r=>{if(!r.ok)throw new Error(`HTTP error! status: ${r.status}`);return r.json()})},c=({alt_description:e,urls:{regular:t}})=>`
  <li class="gallery-card">
    <img class="gallery-img" src="${t}" alt="${e}" />
  </li>
  `,a={form:document.querySelector(".js-search-form"),gallery:document.querySelector(".js-gallery"),loader:document.querySelector(".js-loader")},u=e=>{e.preventDefault();const t=e.target.elements.user_query.value.trim();if(t===""){l.error({title:"Error",message:"Please enter a search query.",position:"topRight"});return}a.gallery.innerHTML="",a.loader.classList.remove("is-hidden"),i(t).then(r=>{const s=r.results.map(o=>c(o)).join("");a.gallery.innerHTML=s,console.log(s)}).catch(r=>{console.error(r)}).finally(()=>{a.loader.classList.add("is-hidden")})};a.form.addEventListener("submit",u);
//# sourceMappingURL=02-gallery.js.map
