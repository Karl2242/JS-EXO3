// let monNombre = parseInt(prompt("Donne moi ton chiffre"))

// for(let i = 1; i <= monNombre; i++){ // compte autant que le chiffre donnée
//  let etoile = "";

// for(let x = 0; x < i; x++){
//      etoile += "*";
// }
// console.log(etoile);
// }

// let superHero = ["Spiderm-man", "Captain-America", "Wolverine"
//     , "Jeremy-Prime-Dev", "Toobo-Le-"
// ]

// superHero.forEach((Element) => {

// console.log("Je suis fan de " + Element)

// })

// let prenom = ["karl", "sam", "nathan", "hamza"];

// for (let i = 0; i < prenom.length; i++) {
//     // Initialisation du compteur
//     let compteur = 0;
  
//     // Boucle pour afficher le prénom autant de fois que sa position (en commençant à 1)
//     while (compteur <= i) {
//       console.log(prenom[i]);
//       compteur++;
//     }
//   }


  // exo 5.1



let leNombreDuUsers = prompt()
let confirm = false

if(leNombreDuUsers == 1 || leNombreDuUsers == 2 || leNombreDuUsers == 3){
    console.log("cest bien")
} else{
    
while(confirm = false){

    if(leNombreDuUsers < 3){
leNombreDuUsers = prompt("redonne un chiffre")

    } else {

confirm = true

    }

}

}

