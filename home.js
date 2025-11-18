let con = document.getElementById("con")
let products = []
let productDetails = ""
function fetchdata() {
    fetch("https://dummyjson.com/products")
        .then(val => val.json())
        .then(res => {
            products = res.products
            localStorage.setItem("products" , JSON.stringify(products) )
            displayData(products)
        }
        )
}


function displayData(products) {
    productDetails = ""
   console.log(products);
    products.map(val=>{
        productDetails += `
           <div class="card">
            <img src = "${val.images[0]}" height="200" width="200" /> 
            <p>${val.title} </p>
            <main class="rating">
            <span>${val.rating}</span>
            <i class="fa-solid fa-star"></i>
            </main>
            <div class="price">
             <p>$${val.price}</p>
             <button class="view" onclick="view(${val.id})">view more</button>
             </div>
           </div>
        `
    })
    con.innerHTML = productDetails
}

function view(selectedId){
    localStorage.setItem("selectedId" , selectedId)
    console.log(selectedId);
    
    location.href ="productView.html"
}

function searchProduct(e){
    let search = e.target.value.toLowerCase()
    let res= products.filter(val=>
        val.title.toLowerCase().includes(search) ||
        val.category.toLowerCase().includes(search)
    )

    displayData(res)

  console.log(val);
  
}

document.getElementById("input").addEventListener("input" , searchProduct)

fetchdata()


