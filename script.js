let products = JSON.parse(localStorage.getItem("products")) || [];
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function showProducts(){
let container=document.getElementById("products");
if(!container) return;
container.innerHTML="";
products.forEach((p,index)=>{
container.innerHTML+=`
<div class="card">
<h3>${p.name}</h3>
<p>قیمت: ${p.price} تومان</p>
<p>موجودی: ${p.stock}</p>
<button onclick="addToCart(${index})">افزودن به سبد</button>
</div>
`;
});
}
showProducts();

function addToCart(index){
if(products[index].stock<=0){
alert("موجود نیست ❌");
return;
}
cart.push(products[index]);
products[index].stock--;
localStorage.setItem("cart",JSON.stringify(cart));
localStorage.setItem("products",JSON.stringify(products));
alert("به سبد اضافه شد ✅");
showProducts();
}

let search=document.getElementById("searchInput");
if(search){
search.addEventListener("keyup",function(){
let value=this.value.toLowerCase();
let cards=document.querySelectorAll(".card");
cards.forEach(card=>{
if(card.innerText.toLowerCase().includes(value)){
card.style.display="block";
}else{
card.style.display="none";
}
});
});
}