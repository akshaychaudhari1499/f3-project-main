

fetch( "https://fakestoreapi.com/products").then(res=>res.json()).then( 
  
res=>{
    let All=document.getElementById('all');
    let menClothing=document.getElementById(`men's clothing`);
    let womenClothing=document.getElementById("women's clothing" );
    let jeweleryStore=document.getElementById('jewelery');
    let electronicsStore=document.getElementById('electronics'); 
    let classes=document.querySelectorAll('.items')
  let mensstore=document.getElementById('mens');
let buttons=document.querySelectorAll('.filter');
for(let i=0;i<buttons.length;i++)
{
buttons[i].addEventListener('click', (e)=>
{
    e.preventDefault();
    
    console.log(buttons[i].id.includes('men'))
   let current=document.querySelector('.active')
    currentClass=document.querySelector('.hide')
    if(
      !buttons[i].classList.contains('active')){
        buttons[i].classList.add('active');
        current.classList.remove('active');
        let products= res.filter( (product)=>product.category===buttons[i].id)   
    products.map(item =>{
        console.log(item)
        classes[i].innerHTML+= `<div class="item">
    <img src=${item.image} alt="Item" />
    <div class="info">
    <h5>${item.title}</h5>
      <div class="row">
        <div class="price">$100</div>
        <div class="sized">S,M,L</div>
      </div>
      <div class="colors">
        Colors:
        <div class="row">
          <div class="circle" style="background-color: #000"></div>
          <div class="circle" style="background-color: #4938af"></div>
          <div class="circle" style="background-color: #203d3e"></div>
        </div>
      </div>
      <div class="row">Rating:</div>
    </div>
    <button id="addBtn">Add to Cart</button>
    </div>`
    
       })
      }
   
       
       
       })}})

   


