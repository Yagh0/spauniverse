import { Router } from "./router.js"

const home = document.querySelector("#home")
const universe = document.querySelector("#universe")
const explore = document.querySelector("#explore")

function removeSelecteds() {
    home.classList.remove('selected')
    universe.classList.remove('selected')
    explore.classList.remove('selected')
}

home.addEventListener("click", function() {
    removeSelecteds()
    home.classList.add('selected')
})

universe.addEventListener("click", function() {
    removeSelecteds()
    universe.classList.add('selected')
})

explore.addEventListener("click", function() {
    removeSelecteds()
    explore.classList.add('selected')
})


const router = new Router()
router.add("/", "/pages/home.html")
router.add("/explore", "/pages/explore.html")
router.add("/universe", "/pages/universe.html")
router.add(404, "/pages/404.html")


router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()