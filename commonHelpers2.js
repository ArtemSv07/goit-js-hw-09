import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */const c="feedback-form-state",e=document.querySelector(".feedback-form");try{const o=JSON.parse(localStorage.getItem(c));Array.from(e.elements).forEach(t=>{const r=o[t.name];r&&(t.value=r)})}catch{console.log("parse error")}e.addEventListener("input",()=>{const o=new FormData(e),t={};o.forEach((r,a)=>{t[a]=r.trim()}),localStorage.setItem(c,JSON.stringify(t))});e.addEventListener("submit",o=>{o.preventDefault();const t=e.elements.email,r=e.elements.message;if(t.checkValidity()&&r.checkValidity()){const a=new FormData(e),s={};a.forEach((n,m)=>{s[m]=n.trim()}),console.log("Form Object:",s),localStorage.removeItem(c),e.reset()}else console.log("Invalid form data. Please check your inputs.")});
//# sourceMappingURL=commonHelpers2.js.map
