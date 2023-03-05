

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
    
      localStorage.setItem('response',JSON.stringify(res))
      function getbuttons(){

        mens.map( (item)=>{
       
          menClothing.innerHTML+= `<div class="item">
          <div class='siblingcart'>
          <img src=${item.image} alt="Item" />
          <div class="info">
          <h5>${item.title}</h5>
            <div class="row">
              <div class="price">$${item.price}</div>
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
            <div class="row">Rating:${item.rating.rate}</div>
          </div></div>
          <button class="addBtn" >Add to Cart</button>
          </div>`    
         
         
          
        }
        )
        
        
        
        womens.map( (item)=>{
        womenClothing.innerHTML+= `<div class="item">
        <div class='siblingcart'>
         <img src=${item.image} alt="Item" />
         <div class="info">
           <h5>${item.title}</h5>
           <div class="row">
            <div class="price">$${item.price}</div>
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
        <div class="row">Rating:${item.rating.rate}</div>
        </div>
        </div>
        <button class="addBtn" >Add to Cart</button>
        </div>`  
      
        
      
        }
        
        )
        
        jewelery.map( (item)=>{
        jeweleryStore.innerHTML+= `<div class="item">
        <div class='siblingcart'>
        <img src=${item.image} alt="Item" />
        <div class="info">
        <h5>${item.title}</h5>
        <div class="row">
          <div class="price">$${item.price}</div>
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
        <div class="row">Rating:${item.rating.rate}</div>
        </div>
        </div>
        <button class="addBtn">Add to Cart</button>
        </div>`  
        }
        ) 
        
        electronics.map( (item)=>{
        electronicsStore.innerHTML+= `<div class="item">
        <div class='siblingcart'>
       
        <img src=${item.image} alt="Item" />
        <div class="info">
        <h5>${item.title}</h5>
        <div class="row">
          <div class="price">$${item.price}</div>
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
        <div class="row">Rating:${item.rating.rate}</div>
        </div>
        </div>
        <button class="addBtn">Add to Cart</button>
        </div>`  
        }
        )
      }
      getbuttons();
     let cart=document.querySelectorAll('.addBtn')
     
       let cartitems=[];
       let productinfo=[];

        console.log(cart);
        let itemTitle , price;
        for(let i=0; i<cart.length; i++){
          console.log('addtocart')
          cart[i].addEventListener('click',(e)=>{
           itemTitle=e.target.previousElementSibling.firstElementChild.nextElementSibling.firstElementChild.innerText;
            price=e.target.previousElementSibling.firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.firstElementChild.innerText;
            productinfo.push({'itemTitle':itemTitle, 'price':price})
              cart[i].style.backgroundColor='green'; 
              cart[i].innerText='Added to cart'; 
              localStorage.setItem('specification', JSON.stringify(productinfo))
            console.log(productinfo)
            cartitems.push(e.target.previousElementSibling.innerHTML);
           // console.log(cartitems)
            localStorage.setItem('cart', JSON.stringify(cartitems))
          })
       
        }
       // let addtocart=document.querySelectorAll('.addBtn');
        
      
    
    
    const btns=document.querySelectorAll('.btns');
    const products=document.querySelectorAll('.items');
    
    for(let i=0;i<btns.length;i++) {
    btns[i].addEventListener('click',(e)=>{
        e.preventDefault();
        const filter=e.target.dataset.filter;
        console.log(filter);
        let current=document.querySelector('.active')
      
      if(
        !btns[i].classList.contains('active')){
          btns[i].classList.add('active');
          current.classList.remove('active');
        }
        products.forEach(product=>{
    if(filter=='all'){
        product.style.display='flex';
        product.style.flexdirection ='column';
    }
    else{
        if(product.classList.contains(filter)){
            product.style.display='flex';
        }
        else{
            product.style.display='none';
    
        }
    }
    
        })
    })  
    
    
    
    }
    
  
    const search=document.getElementById('search');
  
    search.addEventListener("keyup",(e)=>{
        e.preventDefault();        
        const searchValue=search.value;
        console.log(searchValue);
//         res.forEach(data=>{
// if(data.title.includes(search.value)){
// console.log(data.title);
// }
         for(i=0;i<products.length;i++){
           if(products[i].classList.contains(searchValue)){
        console.log("insideif")
            products[i].style.display='flex';
               }
               else if(searchValue===''){
                products[0].style.display='flex';
               }
             else{                 
            products[i].style.display='none';
        
             }
           }
        })
        
    })
   
    
    
    
