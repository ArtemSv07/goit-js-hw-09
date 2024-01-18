const STORAGE_KEY = "feedback-form-state";

const form = document.querySelector(".feedback-form");


try{
  const initialForm = JSON.parse(localStorage.getItem(STORAGE_KEY));
 
   Array.from(form.elements).forEach(element =>{
    const storValue = initialForm[element.name];
    if(storValue){
      element.value = storValue;
    }
   })
  
} catch(error){
  console.log("parse error");
}

form.addEventListener("input", () => {
  const formData = new FormData(form);
  const formObject = {};
  formData.forEach((value, key) => {
    formObject[key] = value.trim(); 
  })
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formObject))
});


form.addEventListener("submit", (event) => {
  event.preventDefault();


  const emailInput = form.elements["email"];
  const messageInput = form.elements["message"];

  if (emailInput.checkValidity() && messageInput.checkValidity()) {

    const formData = new FormData(form);
    const formObject = {};
    
    formData.forEach((value, key) => {
      formObject[key] = value.trim();
    });

    
    console.log("Form Object:", formObject);

    
    localStorage.removeItem(STORAGE_KEY);
    form.reset();
  } else {
    
    console.log("Invalid form data. Please check your inputs.");
  }
});