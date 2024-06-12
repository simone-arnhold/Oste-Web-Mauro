const categorie = document.querySelectorAll(".categoria")
const sottocategorie = document.querySelectorAll(".sottocategorie")

categorie.forEach(categoria => {
    categoria.addEventListener("click", () => {
        categorie.forEach(categoria => {
            categoria.classList.remove("selected")
        })

        categoria.classList.toggle("selected")
        // apriSottocategorie()
        // const sottocategoria = categoria.("ul");
        // sottocategoria.classList.toggle("expanded")

        if (categoria && categoria.querySelector('ul')) {
            console.log("contains ul")
            // if the <li> contains a <ul>
            let sottocategorie = categoria.querySelector('ul');
            sottocategorie.classList.toggle("expanded")
        } else {
            console.log("does not contain ul")
        }
    })
})

// function apriSottocategorie() {
//     sottocategorie.forEach(sottocategoria => {
//         sottocategoria.classList.toggle("expanded")
//     })
// }