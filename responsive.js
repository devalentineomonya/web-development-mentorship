const toggle = document.querySelector(".navbar-toggle")
const mobileMenu = document.getElementById("nav-menu");

toggle.addEventListener("click",()=>{
    const isOpen = mobileMenu.classList.toggle("is-open")
})
toggle.setAttribute('aria-expanded',String(isOpen))
