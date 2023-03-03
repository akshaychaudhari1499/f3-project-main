
 
fetch( "https://fakestoreapi.com/products").then(res=>res.json()).then( 
  
res=>{
  let menClothing=document.getElementById('mens');
  let womenClothing=document.getElementById('womens');
  let jeweleryStore=document.getElementById('jewelery');
  let electronicsStore=document.getElementById('electronics');  
  let current;
  let buttons=document.querySelectorAll('.filter');  
  
  let mens ,womens,jewelery,electronics;
  mens=res.filter( (product)=>product.category==="men's clothing")
  console.log(mens)
   womens=res.filter( (product)=>product.category==="women's clothing")
  console.log(womens)
   jewelery=res.filter( (product)=>product.category==="jewelery");
  console.log(jewelery)
  electronics=res.filter( (product)=>product.category==="electronics");
  console.log(electronics) 
  


  mens.map( (item)=>{
    menClothing.innerHTML+= `<div class="item">
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
  
  }
  )
  
  
  womens.map( (item)=>{
  womenClothing.innerHTML+= `<div class="item">
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
  }
  )
  
  jewelery.map( (item)=>{
  jeweleryStore.innerHTML+= `<div class="item">
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
  }
  ) 
  
  electronics.map( (item)=>{
  electronicsStore.innerHTML+= `<div class="item">
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
  }
  )
  let products=document.querySelectorAll('.products')
  let currentClass;
for(let i=0; i<buttons.length;i++)
  {
  buttons[i].addEventListener('click', (e)=>{
   e.preventDefault();
  current=document.querySelector('.active')
  currentClass=document.querySelector('.hide')
  if(
    !buttons[i].classList.contains('active')){
      buttons[i].classList.add('active');
      current.classList.remove('active');
    }
    if(buttons[i].classList.contains('active')){
      products[i].classList.remove('hide');  
      products[i].classList.add('show');   
    console.log(products[i].classList);
    }  
     
    }
  )
    
   }} 
     
   )
   