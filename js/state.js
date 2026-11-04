// les donnes de les joueurs :

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

moi.moncart = JSON.parse(localStorage.getItem('mycartes'));
moi.deck = JSON.parse(localStorage.getItem('mydeck'));
adversaire.moncart = JSON.parse(localStorage.getItem('mycartes'));

// donnes de les joueurs :
while (adversaire.deck.length < 5) {
    let num = Math.floor(Math.random() * 40 )
    if(adversaire.deck.indexOf(num) === -1){
        adversaire.deck.push(num);
    }else {
        continue;
    }   
}
localStorage.setItem("adversaire", JSON.stringify(adversaire))
localStorage.setItem("moi", JSON.stringify(moi))

export {moi, adversaire};