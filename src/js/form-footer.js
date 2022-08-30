let form = document.querySelector(".footer-list__form");
let formInput = document.querySelector(".footer-list__input");

function validateEmail(email) {
  let symbols =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return symbols.test(String(email).toLowerCase());
}

form.onsubmit = function () {
  let inputValue = formInput.value;

  if (inputValue === "") {
    console.log("Поле не заповнено!");
    formInput.classList.add("error");
    return false;
  } else {
    formInput.classList.remove("error");
  }

  if (!validateEmail(inputValue)) {
    console.log("Поле заповнено не вірно!");
    formInput.classList.add("error");
    return false;
  } else {
    formInput.classList.remove("error");
  }
};
