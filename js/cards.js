export async function getjson() {
    try{
        const response = await fetch('./data/carts.json')
        const data = await response.json();
        return data;
    }catch(error){
        console.log(error);
    }
}

export const cardd = await getjson();

// function affiche(cardd) {
//     console.log("mycartes =", cardd);
//     console.log("cartes =", cardd);

//     for (let i = 0; i < cardd.length; i++) {
//         console.log("Loop index:", i+1);
//         console.log("Value:", cardd[i]);
//         console.log("img : ", cardd[i].imga);
        

//         if (cardd[i] === undefined) {
//             console.error("PROBLEM: No card found for:", cardd[i]);
//         }
//     }
// }
// affiche(cardd)

export function traitement_cart_jeux(cart_moi, deck){
    let game = [];
    for ( let i=0 ; i< cart_moi.length ; i++){
        if (  game.indexOf(cart_moi[i]) === -1 && deck.indexOf(cart_moi[i]) === -1 ){
            game.push(cart_moi[i])
        }
    }
    return game ;
}

export function traitement_cart_jeux_vs(){

}