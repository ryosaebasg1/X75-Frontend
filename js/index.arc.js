/** Step 1  */

let retourPrompt = "";

retourPrompt = prompt("Entrez votre nom d'utilisateur");

console.log(retourPrompt);
console.warn(retourPrompt);
console.error(retourPrompt);

//Pass : abc123+
// let userName = "util";
// const PASSWORD = "password";

// userName = "Luc";

// alert(PASSWORD);
// alert(userName);

/**Step  2 */
//Fichier index.js
function getUserName() {
  let retourPrompt = "";

  retourPrompt = prompt("Entrez votre nom d'utilisateur");

  console.log(retourPrompt);
  console.warn(retourPrompt);
  console.error(retourPrompt);
}
//Fichier lib.js
getUserName();

/**Code JS pour attendre que le fichier HTML soit bien chargé */

/*

document.addEventListener("DOMContentLoaded", () => {

});

*/

/**
 Utiliser un écouteur dévènement sur le clic du bouton en utilisant QuerySelector qui utilise la syntax CSS

 document.addEventListener("DOMContentLoaded", () => {
  const LabelLogin = document.querySelector("#labelLogin");
  const BtnLogin = document.querySelector("#btnLogin");
  const InputLogin = document.querySelector("#inputLogin");

  BtnLogin.addEventListener("click", () => {
    console.log(LabelLogin);
    console.log(BtnLogin);
    console.log(InputLogin);
  });
});

 */
