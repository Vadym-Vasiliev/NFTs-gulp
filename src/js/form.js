//звертаємось до класів
let form = document.querySelector(".modal-form");
let formInputs = document.querySelectorAll(".modal-form__input");
let formInputPhone = document.querySelector(".modal-form__input-phone");
let formInputEmail = document.querySelector(".modal-form__input-email");

//перевірки на цифри
function validatePhone(phone) {
  let symbols = /^[0-9\s]*$/;
  return symbols.test(String(phone));
}

//перевірка на пошту
function validateEmail(email) {
  let symbols =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return symbols.test(String(email).toLowerCase());
}

//перевірка на домен
function validateCountry(country) {
  let symbols = new RegExp(".co$");
  return symbols.test(String(country).toLowerCase());
}

//перевірка на пусті поля
form.onsubmit = function () {
  let phoneValue = formInputPhone.value;
  let emailValue = formInputEmail.value;

  //вертаємо ретюрн  фолс якщо інпути пусті
  let emptyInputs = Array.from(formInputs).filter(
    (input) => input.value === ""
  );

  // перебираємо
  formInputs.forEach(function (input) {
    if (input.value === "") {
      input.classList.add("error");
    } else {
      input.classList.remove("error");
    }
  });

  if (emptyInputs.length !== 0) {
    console.log("Поля не заповнені!");
    return false;
  }

  if (!validatePhone(phoneValue)) {
    console.log("Поле телефона не заповнено!");
    formInputPhone.classList.add("error");
    return false;
  } else {
    formInputPhone.classList.remove("error");
  }

  if (!validateEmail(emailValue)) {
    console.log("Поле пошти не заповнено!");
    formInputEmail.classList.add("error");
    return false;
  } else {
    formInputEmail.classList.remove("error");
  }

  if (validateCountry(emailValue)) {
    console.log("З Колумбією не працюємо!");
    formInputEmail.classList.add("error");
    return false;
  } else {
    formInputEmail.classList.remove("error");
  }
};
