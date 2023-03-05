console.log('Running')
let cartResult=JSON.parse(localStorage.getItem('cart'))
let specification = JSON.parse(localStorage.getItem('specification'));
console.log(specification)
console.log(cartResult[0])
let parentCart=document.querySelector('.cartProducts')
let billItem=document.querySelector('.bill')
for(let i=0;i<cartResult.length;i++){
    let item=document.createElement('div')
    item.className="cartItem"
    item.innerHTML=cartResult[i];
    parentCart.appendChild(item);
    let bill=document.createElement('bill')
    bill.innerHTML=`<div class='bitem'><h3>${i+1}.</h3><h3>${specification[i].itemTitle}</h3><h3>${specification[i].price}</h3></div>`
    billItem.appendChild(bill)
}

