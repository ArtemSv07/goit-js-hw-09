import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */const a="feedback-form-state",t=document.querySelector(".feedback-form");function s(){const r=new FormData(t);return Array.from(r.values()).every(e=>e.trim()!=="")}try{const r=JSON.parse(localStorage.getItem(a));Array.from(t.elements).forEach(e=>{const o=r[e.name];o&&(e.value=o)})}catch{console.log("parse error")}t.addEventListener("input",()=>{if(s()){const r=new FormData(t),e={};r.forEach((o,m)=>{e[m]=o.trim()}),localStorage.setItem(a,JSON.stringify(e))}else localStorage.removeItem(a)});t.addEventListener("submit",r=>{r.preventDefault();const e=t.elements.email,o=t.elements.message;if(e.checkValidity()&&o.checkValidity()&&s()){const m=new FormData(t),n={};m.forEach((c,l)=>{n[l]=c.trim()}),console.log("Object form:",n),localStorage.removeItem(a),t.reset()}else alert("Enter your email and message, both input fields are mandatory")});
//# sourceMappingURL=commonHelpers2.js.map
