// import { arr } from "./main.js"
import { adversaire } from "./state.js"
// let copier = [...JSON.parse(localStorage.getItem("adversaire")).deck];
let copier = [...adversaire.deck]
console.log(copier);

/// bismi allah

export function id_for_play( cart, max_diff, max_att, aleratoire_choix ){
    
    const hp_vs = document.querySelector("#hp__vs");
    let hp_vvs = Number(hp_vs.textContent);
    const hp_moi = document.querySelector("#hp_moi");
    let hp_mmoi = Number(hp_moi.textContent);
    
    if( hp_mmoi < hp_vvs){
        return max_att(cart);
    }else if( hp_mmoi > hp_vvs ){
        return max_diff(cart);
    }else {
        return aleratoire_choix();
    }
}

export function max_diff(cart){
    let max = -Infinity;
    let index = 0;
    for(let i = 0 ; i < copier.length ; i++ ){
        if( cart[copier[i] - 1].defence > max){
            max = copier[i]
            index = i;
        }
    }
    copier.splice(index, 1)
    return [max , "defence"] ;
}

export function max_att(cart){
    let max = -Infinity;
    let index = 0;
    for(let i = 0 ; i < copier.length ; i++ ){
        if( cart[copier[i] - 1].defence > max){
            max = copier[i]
            index = i;
        }
    }
    copier.splice(index, 1)
    return [max , "attaque"] ;
}


export function aleratoire_choix(){
    console.log("-------------------");
    console.log(copier);
    let index = Math.floor( Math.random() * copier.length);
    console.log(index);
    console.log(copier[index]);
    let tactique = Math.floor( Math.random() * 2);
    let id = copier[index]
    copier.splice(index, 1 );
    console.log(copier);
    console.log(id);
    console.log("-------------------");
    if ( tactique === 0 ){
        return [id, "attaque"];
    }else {
        return [id, "defence"];
    }
}