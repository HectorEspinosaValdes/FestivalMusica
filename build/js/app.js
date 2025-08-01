function iniciarApp() {
    navegacionFija(), crearGaleria(), scrollNav()
}
function crearGaleria() {
    const e = document.querySelector(".galeria-img");
    for (let t = 1; t <= 12; t++) {
        const n = document.createElement("picture");
        n.innerHTML = `\n<source srcset="build/img/thumb/${t}.avif" type="image/avif">\n<source srcset="build/img/thumb/${t}.webp" type="image/webp">\n<img loading="lazy" width="200" height="300" src="src/img/thumb/${t}" alt="imagen galeria">\n `,
            n.onclick = function () {
                mostrarImagen(t)
            },
            e.appendChild(n)
    }
}
function mostrarImagen(e) {
    const t = document.createElement("picture");
    t.innerHTML = `\n<source srcset="build/img/grande/${e}.avif" type="image/avif">\n <source srcset="build/img/grande/${e}.webp" type="image/webp">\n <img loading="lazy" width="200" height="300" src="src/img/grande/${e}" alt="imagen galeria">\n `;
    const n = document.createElement("DIV");
    n.appendChild(t), n.classList.add("overlay"),
        n.onclick = function () {
            document.querySelector("body").classList.remove("fijar-body"),
                n.remove()
        };
    const c = document.createElement("P");
    c.textContent = "X",
        c.classList.add("btn-cerrar"),
        c.onclick = function () {
            document.querySelector("body").classList.remove("fijar-body"), n.remove()
        },
        n.appendChild(c);
    const i = document.querySelector("body");
    i.appendChild(n), i.classList.add("fijar-body")
}
function scrollNav() {
    document.querySelectorAll(".navegacion-principal a").forEach(e => {
        e.addEventListener("click", (function (e) {
            e.preventDefault();
            const t = e.target.attributes.href.value;
            document.querySelector(t).scrollIntoView({ behavior: "smooth" })
        }))
    })
}
function navegacionFija() {
    const e = document.querySelector(".header"),
        t = document.querySelector(".sobre-festival"),
        n = document.querySelector("body");
    window.addEventListener("scroll", (function () {
        t.getBoundingClientRect().bottom < 0 ? (e.classList.add("fijo"),
            n.classList.add("body-scroll")) : (e.classList.remove("fijo"),
                n.classList.remove("body-scroll"))
    }))
}
document.addEventListener("DOMContentLoaded", (function () { iniciarApp() }));