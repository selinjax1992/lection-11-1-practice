import"./assets/modulepreload-polyfill-B5Qt9EMX.js";console.log(window.fetch);fetch("https://jsonplaceholder.typicode.com/posts?_limit=10").then(o=>{if(console.log(o),!o.ok)throw new Error(o.status);return console.log(o),o.json()}).then(o=>{console.log(o)}).catch(o=>{o.message==="404"&&alert("Page not found")});
//# sourceMappingURL=01-basic.js.map
