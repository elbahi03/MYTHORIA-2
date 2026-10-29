const modal = document.querySelector(".modal");
const btn = document.querySelector(".btn");

modal.addEventListener('click', (e) => {
    console.log(e.target.classList.contains('btn'));
    if (e.target.classList.contains('btn')) {
        modal.style.display = "none";
    }
})
