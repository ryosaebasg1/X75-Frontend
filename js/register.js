document.addEventListener("DOMContentLoaded", () => {
  const INPUT_USER_NAME = document.querySelector("#userName");
  const INPUT_USER_EMAIL = document.querySelector("#userEmail");
  const INPUT_USER_PASSWORD = document.querySelector("#userpassword");
  const INPUT_CONFIRM_PASSWORD = document.querySelector("#confirmPassword");
  const SPAN_MESSAGE = document.querySelector("#message");

  const BTN_SEND_FORM = document.querySelector("#btnRegister");

  BTN_SEND_FORM.addEventListener("click", (event) => {
    event.preventDefault();
    let User = {};
    User.name = INPUT_USER_NAME.value;
    User.email = INPUT_USER_EMAIL.value;
    User.password = INPUT_USER_PASSWORD.value;
    User.action = "RegsiterNewUser";
    //Verifeir le password
    // console.log(User);

    // console.log(JSON.stringify(User));

    sendToBack(User);
  });

  INPUT_USER_EMAIL.addEventListener("keyup", (event) => {
    console.log("Touche clavier : " + event.key);
  });

  INPUT_USER_PASSWORD.addEventListener("focusout", (event) => {
    console.log("pass");
  });
  INPUT_CONFIRM_PASSWORD.addEventListener("focusout", (event) => {
    verifPassword(INPUT_USER_PASSWORD.value, INPUT_CONFIRM_PASSWORD.value);
  });
  function verifPassword(password, passwordToVerif) {
    if (password === passwordToVerif) {
      SPAN_MESSAGE.style.display = "none";
      console.log("C'est OK");
    } else {
      console.log("PAS OK");
      SPAN_MESSAGE.style.display = "block";
    }
  }

  function sendToBack(user) {
    console.log(user);
    fetch("register.php", {
      method: "POST",
      //   headers: {
      //     "content-type": "application/json",
      //   },
      //   body: JSON.stringify(user),
      body: {
        userName: user.name,
      },
    })
      .then((response) => {
        return response.text();
      })
      .then((data) => {
        console.log(data);
      });
  }
});

/*
ToDo : 
- Ajouter le texte html
- cacher le texte (CSS)
- Mettre le texte en rouge (CSS)
quand l'utilisateur quiutte l'input de vérif password
- Récupérer la valeur du password
- récupérer la velur du verif
- Afficher en console OK si les deux correspondent et PASok si l'un 
des deux ne correspond pas




*/
