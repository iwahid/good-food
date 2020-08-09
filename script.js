console.log("Click")

let closeBtn = document.getElementById("mobile-menu__button--close")
let openBtn = document.getElementById("mobile-menu__button--open")
let mobileMenu = document.getElementById("mobile-menu")

console.log(closeBtn, mobileMenu)

closeBtn.addEventListener("click", () => {
  mobileMenu.classList.remove("mobile-menu--active")
  console.log("Click2")
})
openBtn.addEventListener("click", () => {
  mobileMenu.classList.add("mobile-menu--active")
  console.log("Click2")
})
console.log("Click3")