// toggle navigation 
let navToggle = document.querySelector(".nav__toggle");
let navBar = document.querySelector(".navbar");

// add eventlistener 
navToggle.addEventListener("click", navOpenToggleFunction);

//Functions
function navOpenToggleFunction (){
    document.body.classList.toggle("nav__open");
}


/*--------------------------------------------------- */
/* single product page | product details section */
/*-------------------------------------------------- */
let mainImg = document.querySelector(".MainImg");
let smallImg = document.querySelectorAll(".small-img");

smallImg[0].onclick = function () {
    mainImg.src = smallImg[0].src;
}
smallImg[1].onclick = function () {
    mainImg.src = smallImg[1].src;
}
smallImg[2].onclick = function () {
    mainImg.src = smallImg[2].src;
}
smallImg[3].onclick = function () {
    mainImg.src = smallImg[3].src;
}