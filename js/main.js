import { aleratoire, auto_equipe_add, auto_equipe_moi } from "./turns.js";
import { choisir_equipe, take_equipe, affiche_deck_vs, affiche_deck_moi } from "./ui.js";
// import { moi, adversaire } from "./state.js";
import { getjson, cardd } from "./cards.js";


const moi = JSON.parse(localStorage.getItem("moi"));
const advversaire = JSON.parse(localStorage.getItem("adversaire"))




const Modal = document.querySelector("#Modal");
const deck_vs = document.querySelector("#deck_vs");

affiche_deck_vs(advversaire, cardd)
affiche_deck_moi(moi, cardd)

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
            advversaire.equipe = etat[0]
            moi.equipe = etat[1];
            advversaire.equipe = etat[0];
            localStorage.setItem("moi", JSON.stringify(moi))
            localStorage.setItem("adversaire", JSON.stringify(adversaire))
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
        if (equipe === "la Lumière") {
            let etat = ["la Lumière", "le Ténèbre"];
            moi.equipe = etat[0];
            advversaire.equipe = etat[1];
            localStorage.setItem("moi", JSON.stringify(moi));
            localStorage.setItem("adversaire", JSON.stringify(advversaire));
        } else {
            let etat = ["le Ténèbre", "la Lumière"];
            moi.equipe = etat[0];
            advversaire.equipe = etat[1];
            localStorage.setItem("moi", JSON.stringify(moi));
            localStorage.setItem("adversaire", JSON.stringify(advversaire));
        }
    }
})




