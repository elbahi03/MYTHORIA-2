import { aleratoire } from "./turns.js";


export function choisir_equipe(aleratoire) {
    let ale = aleratoire
    const dialog = document.createElement("dialog");
    dialog.id = "dialog";
    dialog.className = " bg-[url('./assets/img/carre_bg.png')] flex bg-center bg-no-repeat bg-cover bg-auto w-[600px] h-[600px] bg-cover m-auto  flex flex-col justify-center items-center p-[50px] m-[50px]"
    const h2 = document.createElement("h2");
    h2.textContent = "Choisir equipe par :"
    h2.className = "text-[60px] text-[white]"
    const h3 = document.createElement("h3");
    h3.textContent = ale;
    h3.className = "text-[40px] text-[white] mb-[20px]"
    const btn = document.createElement("button");
    btn.textContent = "Passer";
    btn.id = "Passer";
    btn.className = "bg-[url('./assets/img/bg-boutton.png')] bg-no-repeat bg-cover bg-auto w-[200px] h-[80px] text-[white] mb-[20px] ease-[0.5s] hover:scale-[1.2]"
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