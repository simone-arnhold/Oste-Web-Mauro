const categorie = document.querySelectorAll(".categoria")
const sottocategorie = document.querySelectorAll(".sottocategoria")

categorie.forEach(categoria => {
    categoria.addEventListener("click", () => {
        categorie.forEach(categoria => {
            categoria.classList.remove("selected")
        })
        categoria.classList.toggle("selected")
        // if the <li> contains a <ul>, or if a list contains another sublist:
        if (categoria && categoria.querySelector('ul')) {
            // sottocategorie.forEach(sottocategoria => {
            //     sottocategoria.classList.remove("expanded")
            // })
            let sottocategorieCorrenti = categoria.querySelector('ul');
            sottocategorieCorrenti.classList.toggle("expanded")
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