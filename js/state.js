// les donnes de les joueurs :
const moi = {
    nom : "batal",
    moncart : [] ,
    deck : [],
    equipe : []
}

localStorage.setItem('moi', moi);

const adversaire = {
    nom : "l3adow",
    moncart : [] ,
    deck : [],
    equipe : []
}

localStorage.setItem('adversaire', adversaire);


moi.moncart = localStorage.getItem('mycartes');
moi.moncart = JSON.parse(moi.moncart);
moi.deck = localStorage.getItem('mydeck');
moi.deck = JSON.parse(moi.deck);

adversaire.moncart = localStorage.getItem('mycartes');
adversaire.moncart = JSON.parse(moi.moncart);

while (adversaire.deck.length < 5) {
    let num = Math.floor(Math.random() * 40 )
    if(adversaire.deck.indexOf(num) === -1){
        adversaire.deck.push(num);
    }else {
        continue;
    }   
}

export {moi, adversaire} from "state.js";