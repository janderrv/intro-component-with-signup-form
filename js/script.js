const clain = () => {
  let firstname = document.getElementById("firstname");
  let lastname = document.getElementById("lastname");
  let email = document.getElementById("email");
  let password = document.getElementById("password");
  if (!firstname.value) {
    showWarning("checkFirstName");
  } else {
    removeWarning("checkFirstName");
  }
  if (!lastname.value) {
    showWarning("checkLastName");
  } else {
    removeWarning("checkLastName");
  }
  if (!email.value) {
    showWarning("checkEmail");
  } else {
    let check = validateEmail(email.value);
    if (!check) {
      showEmailWarning("checkEmail", "emailWarning");
    } else {
      removeWarning("checkEmail");
    }
  }
  if (!password.value) {
    showWarning("checkPassword");
  } else {
    removeWarning("checkPassword");
  }
};

const showWarning = (id) => {
  try {
    let element = document.getElementsByClassName(id);
    element.item(0).classList.add("error");
  } catch (error) {}
};

const showEmailWarning = (id, id2) => {
  try {
    let element2 = document.getElementById(id2);
    element2.innerText = "Looks like this is not an email";
    let element = document.getElementsByClassName(id);
    element.item(0).classList.add("error");
  } catch (error) {}
};

const removeWarning = (id) => {
  try {
    let element = document.getElementsByClassName(id);
    element.item(0).classList.remove("error");
  } catch (error) {}
};

const validateEmail = (email) =>
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
