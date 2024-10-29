const form = document.querySelector(".login-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.target;
  if (!(form.elements.email.value && form.elements.password.value)) {
    return alert("All form fields must be filled in");
  }
  const email = form.elements.email.value.trim();
  const password = form.elements.password.value.trim();
  const data = {
    email,
    password,
  };
  console.log(data);
  form.reset();
});
