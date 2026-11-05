import { aleratoire } from "./turns.js";
// import { moi, adversaire } from "./state.js";
import { getjson, cardd } from "./cards.js";

export function choisir_equipe(aleratoire) {
    let ale = aleratoire
    const dialog = document.createElement("dialog");
    dialog.id = "dialog";
    dialog.className = " bg-[url('./assets/img/carre_bg.png')] flex bg-center bg-no-repeat bg-cover bg-auto w-[600px] h-[600px] bg-cover m-auto  flex-col justify-center items-center p-[50px] m-[50px]"
    const h2 = document.createElement("h2");
    h2.textContent = "Choisir equipe par :"
    h2.className = "text-[60px] text-[white]"
    const h3 = document.createElement("h3");
    h3.textContent = ale;
    h3.className = "text-[40px] text-[white] mb-[20px]"
    const btn = document.createElement("button");
    btn.textContent = "Passer";
    btn.id = "Passer";
    btn.className = "btn bg-[url('./assets/img/bg-boutton.png')] bg-no-repeat bg-cover bg-auto w-[200px] h-[80px] text-[white] mb-[20px] ease-[0.5s] hover:scale-[1.2]";
    btn.name = ale;

    dialog.appendChild(h2);
    dialog.appendChild(h3);
    dialog.appendChild(btn);
    // dialog.appendChild(div);
    const body = document.querySelector("body");
    body.appendChild(dialog);
    dialog.showModal();
}

export function take_equipe() {
    Modal.addEventListener('click', (e) => {
        console.log(e.target.classList.contains(`btn`))
        if (e.target.classList.contains(`btn`)) {
            let equipe = e.target.name;
            Modal.style.display = "none";
            console.log(e.target.name);
            if (equipe === "la Lumière") {
                return ["la Lumière", "le Ténèbre"];
            } else {
                return ["le Ténèbre", "la Lumière"];
            }
        }
    })
}

export function affiche_deck_vs(adversaire, cardd) {
    const deck_vs = document.querySelector("#deck_vs");
    deck_vs.textContent = "";
    for (let i = 0; i < adversaire.deck.length; i++) {
        const div = document.createElement("div");
        div.id = `cart_deck_vs_${adversaire.deck[i]}`;
        div.className = "cart_deck_vs  w-[75px] h-[100px]  rounded-lg"
        const img = document.createElement("img");
        img.src = cardd[adversaire.deck[i] -1].imga;
        img.alt = cardd[adversaire.deck[i] -1].nom + " : " + cardd[adversaire.deck[i] - 1].description;
        img.style.width = "75px";
        img.style.height = "100px";
        img.style.objectFit = "cover";
        img.className = "cart_deck_vs";
        img.dataset.name = `${adversaire.deck[i]}`;
        div.appendChild(img)
        deck_vs.append(div)
    }
}

export function affiche_deck_moi(moi, cardd) {
    const deck_moi = document.querySelector("#deck_moi");
    for (let i = 0; i < moi.deck.length; i++) {
        const div = document.createElement("div");
        div.id = `cart_deck_moi_${moi.deck[i]}`;
        div.className = "cart_moi_vs  w-[75px] h-[100px]  rounded-lg";
        const img = document.createElement("img");
        img.src = cardd[moi.deck[i] -1].imga;
        img.alt = cardd[moi.deck[i] -1].nom + " : " + cardd[moi.deck[i] - 1].description;
        img.style.width = "75px";
        img.style.height = "100px";
        img.style.objectFit = "cover";
        img.className = "cart_deck_moi";
        img.dataset.name = `${moi.deck[i]}`;
        div.appendChild(img);
        deck_moi.append(div);
    }
}

export function affiche_equipe(moi, adversaire){
    const span_moi = document.querySelector("#moi_equipe_span");
    const span_vs = document.querySelector("#addversaire_equipe_span");

    span_moi.textContent = moi.equipe;
    span_vs.textContent = adversaire.equipe;
}

export function dialog_choisir(){
    const body = document.querySelector("body")
    const dialog = document.createElement("dialog");
    const button_attack = document.createElement("button");
    const button_deffence = document.createElement("button");

    dialog.id = "choisir_place";
    dialog.className = "bg-[url('./assets/img/bg-div.png')] flex bg-center bg-no-repeat bg-cover bg-auto bg-cover m-auto  justify-center items-center p-[50px] m-[50px]";
    dialog.style.display = "flex";

    button_attack.id = "attack_btn";
    button_attack.textContent = "Attack"
    button_attack.className = "btn bg-[url('./assets/img/bg-boutton.png')] bg-no-repeat bg-cover bg-auto w-[200px] h-[80px] text-[white] mb-[20px] ease-[0.5s] hover:scale-[1.2]";
    button_attack.name = "attack";

    button_deffence.id ="deffence_btn";
    button_deffence.textContent= "Deffence";
    button_deffence.className = "btn bg-[url('./assets/img/bg-boutton.png')] bg-no-repeat bg-cover bg-auto w-[200px] h-[80px] text-[white] mb-[20px] ease-[0.5s] hover:scale-[1.2]";
    button_deffence.name = "deffence";

    dialog.appendChild(button_attack);
    dialog.appendChild(button_deffence);
    body.appendChild(dialog);
    dialog.showModal();
}

export function choix_play(choix, id, cardd){
    if( choix === "attack" ){
        const cart_attack_moi = document.querySelector("#attack_place");
        const img = document.createElement("img");
        img.src = cardd[id -1].imga;
        img.alt = cardd[id -1].nom + " : " + cardd[id - 1].description;
        img.style.width = "75px";
        img.style.height = "100px";
        img.style.objectFit = "cover";
        img.className = "cart_att_moi";
        img.dataset.name = `${id}`;
        
        cart_attack_moi.appendChild(img);
        cart_attack_moi.id = "attack_plain";
        cart_attack_moi.name = `${cardd[id -1].attaque}`;
    }else {
        const cart_attack_moi = document.querySelector("#deffence_place");
        const img = document.createElement("img");
        img.src = cardd[id -1].imga;
        img.alt = cardd[id -1].nom + " : " + cardd[id - 1].description;
        img.style.width = "75px";
        img.style.height = "100px";
        img.style.objectFit = "cover";
        img.className = "cart_deff_moi";
        img.dataset.name = `${id}`;
        
        cart_attack_moi.appendChild(img);
        cart_attack_moi.id = "deffence_plain";
        cart_attack_moi.name = `${cardd[id -1].attaque}`;
    }
}

export function kkkk(choix_play, id_cart){
    const dialog_choix = document.querySelector("#choisir_place");
    dialog_choix.addEventListener('click', (e)=>{
            console.log("kkkkkkkkkkkkkkkkkkkkk");
            
            console.log(e.target.classList.contains('btn'));
            if(e.target.classList.contains('btn')){
                let choix = e.target.name;
                choix_play(choix, id_cart, cardd)
                dialog_choix.remove();
            }
        })
}