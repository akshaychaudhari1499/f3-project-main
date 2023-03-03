

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
        <button class="addBtn" >Add to Cart</button>
        </div>`    
       
       
        
      }
      )
      
      
      womens.map( (item)=>{
      womenClothing.innerHTML+= `<div class="item">
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
      <button class="addBtn" >Add to Cart</button>
      </div>`  
    
      
    
      }
      
      )
      
      jewelery.map( (item)=>{
      jeweleryStore.innerHTML+= `<div class="item">
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
      <button class="addBtn">Add to Cart</button>
      </div>`  
      }
      ) 
      
      electronics.map( (item)=>{
      electronicsStore.innerHTML+= `<div class="item">
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
      <button class="addBtn" class='adbtn' >Add to Cart</button>
      </div>`  
      }
      )
    
    
    
    
    const btns=document.querySelectorAll(
    '.btns');
    const products=document.querySelectorAll('.items');
    
    console.log(products);
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
        for(i=0;i<products.length;i++){
            if(products[i].classList.contains(searchValue)){
    products[i].style.display='flex';
            }
            else if(searchValue==''){
                products[i].style.display='flex';
            }
            else{
                
                products[i].style.display='none'; 
              
            }
        }
    })
    return products;
    
    })
    


 