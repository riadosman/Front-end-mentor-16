/*show cart content */
let cart = document.querySelector("#cart");
let panel = document.querySelector(".cart-panel");
cart.addEventListener("click",()=>{
    if (panel.style.display == "block") {
        panel.style.display = "none";
    }else{
        panel.style.display = "block";
    }
})
/*change the product count*/
let addRemove = document.querySelectorAll(".add-to-card img");
let count = document.querySelector(".add-to-card span");
addRemove.forEach((e)=>{
    e.addEventListener("click",()=>{
        if (e.getAttribute("id") == "plus") {
            count.innerHTML++;
        } else if (e.getAttribute("id") == "minus") {
            if (count.innerHTML !== "0") {
                count.innerHTML--;
            }
        } 
    })
})
/*to add product count in the cart content*/
let addToCartBtn = document.querySelector(".add-to-card button");
let panelContent = document.querySelector(".cart-content");
let countspan = document.querySelector(".project-count");
addToCartBtn.addEventListener("click",()=>{
    if (count.innerHTML !== "0") {
        panelContent.innerHTML =`<div>
                <img src="./images/image-product-1-thumbnail.jpg" alt="1">
                <div class="cart-content-text">
                  <p>Fall Limited Edition Sneakers</p>
                  <span>$125.00 * ${count.innerHTML} <span>$${count.innerHTML * 125}.00</span></span>
                </div>
                <img src="./images/icon-delete.svg" class="del" alt="d">
              </div>
              <button>Checkout</button>`;
              deletefun();
              countspan.innerHTML = count.innerHTML;
              countspan.style.display = "block";
    }
})
/*active the light box*/
let mainFoto = document.getElementById("main-foto");
let lightBox = document.querySelector(".light-box");
let closeBtn = document.querySelector(".close");
mainFoto.addEventListener("click",()=>{
    if (window.innerWidth > 1000) {
        lightBox.style.display = "flex";
    }
})
closeBtn.addEventListener("click", () => {
    lightBox.style.display = "none";
})
/*change main foto*/
let imgs = document.querySelectorAll(".fotos .thumbnail img");
let newImgs = ["./images/image-product-1.jpg", "./images/image-product-2.jpg", "./images/image-product-3.jpg","./images/image-product-4.jpg"]
imgs.forEach((e,i)=>{
    e.addEventListener("click",()=>{
        mainFoto.src = newImgs[i];
        imgs.forEach((e)=>{
            e.classList.remove("active")
        })
        e.classList.add("active");
    })
})
// for mobile
let previousBtnM = document.querySelector(".previous-btn");
let nextBtnM = document.querySelector(".next-btn");
let indexM = 0;
previousBtnM.addEventListener("click",()=>{
    console.log(indexM);
    if (indexM !== 0) {
        indexM--;
        mainFoto.src = newImgs[indexM];
    }
})
nextBtnM.addEventListener("click",()=>{
    console.log(indexM);
    if(indexM !== newImgs.length - 1){
        indexM++;
        mainFoto.src = newImgs[indexM];
    }
})
/* change light box img*/
let lightBoxImg = document.querySelector(".light-box-img");
let previousBtn = document.querySelector(".light-box-container div:not(.thumbnail) img:first-child");
let nextBtn = document.querySelector(".light-box-container div:not(.thumbnail) img:last-child");
let lightBoxImgs = Array.from(document.querySelectorAll(".light-box .thumbnail img"));
let index = 0;
previousBtn.addEventListener("click",()=>{
    if (index !== 0) {
        index--;
        lightBoxImg.src = newImgs[index];
        lightBoxImgs.forEach((e)=>{
            e.classList.remove("active")
        })
        lightBoxImgs[index].classList.add("active");
    }
})
nextBtn.addEventListener("click", () => {
    if (index !== newImgs.length - 1) {
        index++;
        lightBoxImg.src = newImgs[index];
        lightBoxImgs.forEach((e) => {
            e.classList.remove("active")
        })
        lightBoxImgs[index].classList.add("active");
    }
})
/*delete the cart*/
function deletefun(){
    let deleteBtn = document.querySelector(".del")
    deleteBtn.addEventListener("click",()=>{
        panelContent.innerHTML = "<p class='empty'>Your cart is empty</p>";
        countspan.style.display = "none";
    })
}
/*mobile menu */
let menu = document.querySelector(".menu");
let closeMenu = document.querySelector(".menu svg");
let openMenu = document.querySelector(".humburger-menu");
closeMenu.addEventListener("click",()=>{
    menu.style.display = "none";
})
openMenu.addEventListener("click",()=>{
    menu.style.display = "block";
})