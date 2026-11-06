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