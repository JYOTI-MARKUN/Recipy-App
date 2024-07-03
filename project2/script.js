const menuIcon = document.querySelector(".menu-container");
const headerContent = document.querySelector(".header-content");
const crossIcon = document.querySelector(".cross-icon")
const gotToTop = document.querySelector("body > div > main > h3 > a");
const mainContent = document.querySelector(".all-content")
const nav = document.querySelector("nav");

menuIcon.addEventListener("click",(e)=>{
    e.stopPropagation()
    console.log("clicked")
    headerContent.classList.add("show-menu")
})

nav.addEventListener("click",(e)=>{
    e.stopPropagation()
})

crossIcon.addEventListener("click",()=>{
    console.log("clicked")
    headerContent.classList.remove("show-menu")
})

gotToTop.addEventListener("click",()=>{
    mainContent.scroll(0,0)
})


window.addEventListener("click",()=>{
    console.log("clicked")
    headerContent.classList.remove("show-menu")
})



