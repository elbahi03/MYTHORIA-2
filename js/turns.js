import { moi } from "./state.js";



// function de coin de start game :
export function aleratoire() {
    let equipe = Math.floor(Math.random() * 10);
    if (equipe > 5) {
        return "adversaire";
    } else {
        return "moi";
    }
}



export function auto_equipe_add(aleratoire) {
    if (aleratoire === "adversaire") {
        let choix = Math.floor(Math.random() * 2) + 1;
        if (choix === 1) {
            return ["la Lumière", "le Ténèbre"];
        } else {
            return ["le Ténèbre", "la Lumière"];
        }
    }
}

export function auto_equipe_moi(aleratoire) {
    if (aleratoire === "moi") {
        const Modal = document.querySelector("#Modal");
        Modal.style.display = "flex";
    }
}



