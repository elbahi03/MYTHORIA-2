import { aleratoire, auto_equipe_add, auto_equipe_moi } from "./turns.js";
import { choisir_equipe, take_equipe } from "./ui.js";
import { moi, adversaire } from "./state.js";
import { getjson } from "./cards.js";

console.log("hello world")

let cardd = []
cardd = await getjson();
console.log("--------------------------------")
console.log(cardd);
console.log("--------------------------------")

console.log(moi)
console.log(adversaire)
const Modal = document.querySelector("#Modal");
const deck_vs = document.querySelector("#deck_vs");

// const btn = document.querySelector(".btn");


// Modal.addEventListener('click', (e) => {
//     console.log(e.target.classList.contains('btn'));
//     if (e.target.classList.contains('btn')) {
//         Modal.style.display = "none";
//     }
// })


Modal.style.display = "none";
let ale = aleratoire();
console.log(ale);

choisir_equipe(ale);

const dialog = document.querySelector('#dialog')

dialog.addEventListener("click", (e) => {
    if (ale === "adversaire") {
        console.log(e.target.id === 'Passer');
        if (e.target.id === 'Passer') {
            dialog.close();
            dialog.style.display = "none";
            let etat = auto_equipe_add(ale);
            adversaire.equipe = etat[0]
            moi.equipe = etat[1];
            adversaire.equipe = etat[0];
            localStorage.setItem("moi", JSON.stringify(moi))
            localStorage.setItem("adversaire", JSON.stringify(adversaire))
            console.log(moi)
            console.log(adversaire)
            console.log(auto_equipe_add(ale))
        }
    }
    else {
        console.log(e.target.id === 'Passer');
        if (e.target.id === 'Passer') {
            dialog.close();
            dialog.style.display = "none";
            auto_equipe_moi(ale);
        }
    }
})



Modal.addEventListener('click', (e) => {
    console.log(e.target.classList.contains(`btn`))
    if (e.target.classList.contains(`btn`)) {
        let equipe = e.target.name;
        Modal.style.display = "none";
        console.log(e.target.name);
        if (equipe === "la Lumière") {
            let etat = ["la Lumière", "le Ténèbre"];
            moi.equipe = etat[0];
            adversaire.equipe = etat[1];
            localStorage.setItem("moi", JSON.stringify(moi));
            localStorage.setItem("adversaire", JSON.stringify(adversaire));
            console.log(moi)
            console.log(adversaire)
        } else {
            let etat = ["le Ténèbre", "la Lumière"];
            moi.equipe = etat[0];
            adversaire.equipe = etat[1];
            localStorage.setItem("moi", JSON.stringify(moi));
            localStorage.setItem("adversaire", JSON.stringify(adversaire));
            console.log(moi)
            console.log(adversaire)
        }
    }
})






