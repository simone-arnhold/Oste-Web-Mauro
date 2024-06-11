const categorie = document.querySelectorAll(".categoria")

categorie.forEach(categoria => {
    categoria.addEventListener("click", () => {
        categorie.forEach(categoria => {
            categoria.classList.remove("selected")
        })
        categoria.classList.toggle("selected")
    })
})

function apriSottocategorie(params) {

}


