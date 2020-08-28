/*Declaration of products */

const product=[{name: 'yellow T-shirt',price: 14.99,count: 0},{name: 'red T-shirt',price: 29.99,count: 0},{name: 'blue T-shirt',price: 17.99,count: 0}];

/*Adding quantity eventlistener*/

const total=document.getElementsByClassName("full-price");
const price=document.getElementsByClassName("price");
const cart = document.getElementsByClassName("qt-plus");
const quantityAdded = document.getElementsByClassName("qt");
for (let i=0; i < cart.length; i++){
    cart[i].addEventListener('click',function(){
    cart[i].previousElementSibling.innerHTML++
    let priceOfSinglElement = parseFloat(price[i].textContent.replace("€",""));
    let quantityValue = parseInt(quantityAdded[i].textContent);
    total[i].innerHTML = (priceOfSinglElement * quantityValue) + " €" ;

});
}

/*Reducing quantity eventListner*/

const cartReduce=document.getElementsByClassName("qt-minus");
const quantity=document.getElementsByClassName("qt");
for (let i=0; i < cartReduce.length; i++){
    cartReduce[i].addEventListener('click',function(){
   if(quantity[i].innerHTML>1){
    cartReduce[i].nextElementSibling.innerHTML--
    let priceOfSinglElement = parseFloat(price[i].textContent.replace("€",""));
    let quantityValue = parseInt(quantity[i].textContent);
    total[i].innerHTML = (priceOfSinglElement * quantityValue) + " €" ;
   }
   else   {cartReduce[i].nextElementSibling.innerHTML = 0 
   total[i].innerHTML = 0 + " €" ;}
    });
}


/*Remove item*/

const removeCartItem = document.getElementsByClassName('remove');
for(let i = 0; i < removeCartItem.length; i++){
    let button=removeCartItem[i];
button.addEventListener('click',function(event){
   let buttonClicked = event.target;
   buttonClicked.parentElement.parentElement.parentElement.remove();
});

}

/* heart event */ 

const heart=document.getElementsByClassName("fa");
for(let i=0; i <heart.length; i++){
    heart[i].addEventListener('click',function(){
        heart[i].classList.toggle("red-heart");
    });
}


