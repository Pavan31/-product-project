let cart = JSON.parse(localStorage.getItem("cart"))
let cartProduct = document.getElementById("cartProduct")
let totalPrice = document.getElementById("totalPrice")
console.log(cart);

let total = 0
function displayProduct() {
    if (cart.length == 0) {
        cartProduct.innerHTML = `Cart is Empty`
        totalPrice.innerHTML = `<h3 id="to">total Price : 0</h3>`
    }
    cart.map((val , id) => {
        total += val.price
        cartProduct.innerHTML += `
        <section class="se">
         <div id="products">
           <img src="${val.images[0]}" height="200" width="200"/>
           <h3>${val.title}</h3>
           <p><strong>category : </strong>${val.category} </p>
           <p><strong>shippingInformation : </strong>${val.shippingInformation} </p>
           <p><strong>availabilityStatus: </strong>${val.availabilityStatus} </p>
           <p><strong>warrantyInformation: </strong>${val.warrantyInformation} </p>
           <p><strong>stock: </strong>${val.stock} </p>
           <p><strong>price: </strong>$${val.price} </p>
        </div>
        <button class="remove" onclick="removeProduct(${id})">remove</button>
        </section>
        `
        totalPrice.innerHTML = `<h2 class="total" >Total Price : $${total.toFixed(2)}</h2>`

    })
}

function removeProduct(id){
    let cart = JSON.parse(localStorage.getItem("cart")) || []
    cart.splice(id , 1)
    localStorage.setItem("cart" , JSON.stringify(cart))
    console.log(id);    
    location.reload()
}

displayProduct()