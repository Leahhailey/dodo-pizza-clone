 let cartIcon = document.querySelector('#cart-icon')
 let myorder = document.querySelector('.cart')
 let closeCart = document.querySelector('#close-cart')


 cartIcon.oneclick =() => {
    cart.classList.add("active");
 };

 closeCart.oneclick =() => {
    cart.classList.remove("active");
 };

 if(document.readystate == 'loading'){
    document.addEventListener("DOMContentLoaded",ready);
 } else {
    ready();
 }
 function ready (){
    let removeCartButton =document.getElementsByClassName('cart-remove')
    console.log(removeCartButtons)
    for(let i = 0; i <removeCartButton.length; i++ ){
        let button = removeaCartButton[i]
        button.addEventListener('click' removeCartItem)
    }
 }