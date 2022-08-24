let form = document.querySelector(".footer-list__form");
let formInputs = document.querySelectorAll(".footer-list__input");
let formInputEmail = document.querySelector(".footer-list__input-email");

//перевірка пошти на символи
function validateEmail(email) {
  let symbols =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return symbols.test(String(email).toLowerCase());
}

//перевірка  на пусті поля
form.onsubmit = function () {
  let emailValue = formInputEmail.value;

  //вертає ретюрн фолс якщо інпут пустий
  let emptyInput = Array.from(formInputs).filter((input) => input.value === "");

  formInputs.forEach(function (input) {
    if (input.value === "") {
      input.classList.add("error");
    } else {
      input.classList.remove("error");
    }
  });

  if (emptyInput.length !== 0) {
    console.log("Поля не заповнені!");
    return false;
  }

  //перевірка на пошту
  if (!validateEmail(emailValue)) {
    console.log("Поле не заповнено!");
    formInputEmail.classList.add("error");
    return false;
  } else {
    formInputEmail.classList.remove("error");
  }
};
