const buttons = document.querySelectorAll("[data-carousel-button]");

buttons.forEach(button =>{
    button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1
    const slides = button
        .closest("[data-carousel]")
        .querySelector("[data-slides]")

    const activeSlide = slides.querySelector("[data-active]")
    let newIndex = [...slides.children].indexOf(activeSlide) + offset
    if (newIndex < 0) newIndex = slides.children.length - 1
    if (newIndex >= slides.children.length) newIndex = 0
    
    slides.children[newIndex].dataset.active = true
    delete activeSlide.dataset.active
}) 
})


let popup = document.getElementById("popup");
    function openPopup(){
        popup.classList.add("open-popup");
    }
    function closePopup(){
        popup.classList.remove("open-popup")
    }

function openDiv(){
    var x = document.getElementById("find").value;

    if( x === "home"){
        window.location.href="#home";
    }

    if( x === "product"){
        window.location.href="#product";
    }

    if( x === "about"){
        window.location.href="#about";
    }

}

function find(){
    var x = document.getElementById("find").value;

    if( x === "home"){
        window.location.href="#home";
    }

    if( x === "product"){
        window.location.href="#product";
    }

    if( x === "about"){
        window.location.href="#about";
    }
}