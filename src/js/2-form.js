
const STORAGE_KEY = "feedback-form-state";
const form = document.querySelector(".feedback-form");



  // "Function to check if all form fields are filled"
  function isFormFilled() {
    const formData = new FormData(form);
    return Array.from(formData.values()).every((value) => value.trim() !== "");
  }
  

try {
  const initialForm = JSON.parse(localStorage.getItem(STORAGE_KEY));

  Array.from(form.elements).forEach((element) => {
    const storedValue = initialForm[element.name];
    if (storedValue) {
      element.value = storedValue;
    }
  });
} catch (error) {
  console.log("parse error");
}

form.addEventListener("input", () => {
 
    const formData = new FormData(form);
    const formObject = {};

    formData.forEach((value, key) => {
      formObject[key] = value.trim();
    });

    localStorage.setItem(STORAGE_KEY, JSON.stringify(formObject));

});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const emailInput = form.elements["email"];
  const messageInput = form.elements["message"];


  if (emailInput.checkValidity() && messageInput.checkValidity() && isFormFilled()) {
    const formData = new FormData(form);
    const formObject = {};

    formData.forEach((value, key) => {
      formObject[key] = value.trim();
    });

    console.log("Object form:", formObject);

    localStorage.removeItem(STORAGE_KEY);
    form.reset();
  } else {
    alert ("Enter your email and message, both input fields are mandatory")
  }
});


