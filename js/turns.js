import { moi, adversaire} from "./state";

let turn = Math.floor(Math.random() * 10 );

if( turn > 5 ){
    let choix = Math.floor(Math.random() * 2 ) + 1;
    if(choix === 1){
        moi.equipe = "la Lumière";
        adversaire.equipe = "le Ténèbre";
    }else {
        moi.equipe = "le Ténèbre";
        adversaire.equipe = "la Lumière";
    }
}