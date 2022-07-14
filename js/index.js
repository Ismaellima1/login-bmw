// função para fazer login
function btnLogin() {
  let user = document.querySelector("#input-user").value;
  let pass = document.querySelector("#input-pass").value;

  console.log(user, pass);
}

function registrarOrLogin() {
  let arealogin = (document.querySelector(".area-login").style.display = "none");
  let areaRegister = (document.querySelector(".area-register").style.display = "flex");
  let animationBackground = (document.querySelector("main").style.animation = "transitionLR 1s");
}

// mostrar e ocultar password
function showOcultPass() {
  const input = document.querySelector("#input-pass");
  const icon = document.querySelector("#icon-olho");

  if (input.type == "password") {
    input.type = "text";
    icon.src = "./img/olho.png";
  } else {
    input.type = "password";
    icon.src = "./img/olho-slash.png";
  }
}
