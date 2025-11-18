let products =JSON.parse(localStorage.getItem("products")) 
let searchProductID =localStorage.getItem("selectedId")
let productDetails = document.getElementById("section")

if(searchProductID){
  let selectedProduct =  products.find(val => val.id == searchProductID)
  productDetails.innerHTML = `
     <div class="product">
        <img src="${selectedProduct.images[0]}" height="350" width="300"/>
        <main>
        <h1>${selectedProduct.title}</h1>
        <p><strong> Category : </strong> ${selectedProduct.category}</p>
        <p><strong>Description :</strong> ${selectedProduct.description}</p>
        <p><strong>Price :</strong> $${selectedProduct.price}</p>
        <div class="button">
        <button id="addToCart">add to cart</button>
        <button><a href="./home.html"> Home</a></button>
        </div>
        </main>
      </div>

      <h1 class="h1">Customer Reviews</h1>
      ${selectedProduct.reviews.map(val=>`
          <div class="review">
            <p> ${'❤️'.repeat(val.rating)} ${'🖤'.repeat(5-val.rating)}</p>
            <p>${val.comment}</p>
            <p>By ${val.reviewerName} on ${new Date(val.date).toLocaleDateString()}</p>
            <hr width="570">
            </div> 
        `).join("")}
  `

  document.getElementById("addToCart").addEventListener("click" , ()=>{

    addTocart(selectedProduct)
  }
  )
}else{
    
}

function addTocart(product){
  let cart = JSON.parse(localStorage.getItem("cart")) || []
  cart.push(product)
   localStorage.setItem("cart" , JSON.stringify(cart) )
   alert("added to cart")
}


