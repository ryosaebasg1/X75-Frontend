document.addEventListener("DOMContentLoaded", () => {
  //Récupère dasn des constantes les élemetn du DOM qui ont l'id correspondant
  const LabelLogin = document.querySelector("#labelLogin");
  const LabelPassword = document.querySelector("#labelPassword");
  const BtnLogin = document.querySelector("#btnLogin");
  const InputLogin = document.querySelector("#inputLogin");
  const InputPassword = document.querySelector("#inputPassword");
  const InputPassword3 = document.querySelector("#inputPassword");

  BtnLogin.addEventListener("click", () => {
    //Supprime les classe error et success de mes deux span
    LabelLogin.classList.remove("success");
    LabelPassword.classList.remove("success");
    LabelLogin.classList.remove("error");
    LabelPassword.classList.remove("error");
    // Récupère la valeur du contenu de l'input qui a l'id inputLogin (voire ligne 5)
    let loginVerif = InputLogin.value;
    //Vérifie si l'entére utilisateur de l'input est vide
    if (loginVerif == "") {
      //Ajoute la classe error au span
      LabelLogin.classList.add("error");
    } else {
      //Ajoute la classe success au span
      LabelLogin.classList.add("success");
      //Affiche le login entré par l'utilisateur dans la console
      console.log("Login : " + loginVerif);
    }
    // Récupère la valeur du contenu de l'input qui a l'id inputLogin (voire ligne 6)
    let passVerif = InputPassword.value;
    //Vérifie si l'entére utilisateur de l'input est vide
    if (passVerif == "") {
      //Ajoute la classe error au span
      LabelPassword.classList.add("error");
    } else {
      //Ajoute la classe success au span
      LabelPassword.classList.add("success");
      //Affiche le login entré par l'utilisateur dans la console
      console.log("Password : " + passVerif);
    }
  });
});
