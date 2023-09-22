"use a strict"

/* On a trois variables : a=4, b=4 et c=3
si a=b -> console.log( " A égale à B !")
si a+c -> console.log(" A égale à C !")
sinon afficher console.log(" Pas d'égalité")
*/

let a=4
let b=4
let c=3

switch (a) {
    case b:
        console.log("A égale à B !");
        break;
    case c:
        console.log("A égale à C !");
        break;

    default:
        break;
}