// les donnes de les joueurs :
import { traitement_cart_jeux } from "./cards.js"

const moi = {
    nom : "batal",
    moncart : [] ,
    deck : [],
    equipe 
}


const adversaire = {
    nom : "l3adow",
    moncart : [] ,
    deck : [],
    equipe 
}

let moncart = JSON.parse(localStorage.getItem('mycartes'));
moi.deck = JSON.parse(localStorage.getItem('mydeck'));

moi.moncart = traitement_cart_jeux(moncart, moi.deck);

// export let cart_moi_game = [...moi.moncart];


// donnes de les joueurs :
while (adversaire.deck.length < 5) {
    let num = Math.floor(Math.random() * 40 )
    if(adversaire.deck.indexOf(num) === -1){
        adversaire.deck.push(num);
    }else {
        continue;
    }   
}

adversaire.moncart = traitement_cart_jeux(moncart, adversaire.deck);

localStorage.setItem("adversaire", JSON.stringify(adversaire))
localStorage.setItem("moi", JSON.stringify(moi))

export {moi, adversaire};