var cart =  JSON.parse(localStorage.getItem('cart')) || [];
localStorage.clear()

// console.log(cart)
let cartHtml = '';

let orderPage = "";

orderPage += `
<div class="w-96 h-2/3 border mb-4 px-4 py-5 leading-8">
  <div class="text-xl font-bold">
    Order Summary
  </div>
  <div  class="flex flex-row justify-between">
    <a id=orderItem>Items (2)</a>: <span>$<span id="realPrice">0</span></span>
  </div>
  <div class="flex flex-row justify-between">
    Shipping & handling: <span>$<span id="handlingPrice">4.99</span></span>
  </div>
  <div class="flex flex-row justify-between">
    Total before tax: <span>$<span id="beforeTax">0</span></span>
  </div>
  <div class="flex flex-row justify-between">
    Estimated tax (10%): <span>$<span id="afterTax">0</span></span>
  </div>
  <hr>
  <div class="my-4 text-xl text-red-700 font-bold flex flex-row justify-between">
    Order total: <span>$<span id="totalOrder">0</span></span>
  </div>
  <div class="w-auto mx-1 py-1 bg-yellow-400 rounded-xl hover:bg-yellow-500 text-center">
    <button>Place your order</button>
  </div>
</div>
`
document.querySelector('#orderView').innerHTML = orderPage




cart.forEach((product)=>{
  cartHtml += `
        <div class="w-auto mb-4 py-8 px-5 border">
          <div class="ml-6 text-green-900 text-xl font-semibold">
            Delivery date: Tuesday, June 21
          </div>
        
          <div class="w-auto pt-6 flex flex-col md:flex-row">
            <div class=" w-auto flex flex-row space-x-5 mb-8">
              <div class="ml-4 w-24 h-24">
                <img src="${product.productImage}" alt="">
              </div>
          
              <div>
                <div class="font-semibold">
                  ${product.productName}
                </div>
                <div id="productPrice" class="text-red-700 font-semibold">
                  $${product.productPrice}
                </div>
                <div>
                  Quantity: ${product.quantity} <span class="text-blue-500 hover:text-red-600 cursor-pointer">Update</span> <span class="text-blue-500 hover:text-red-600 cursor-pointer">Delete</span>
                </div>
              </div>
            </div>
            
            <div class="ml-3">
              <div class="font-semibold">
                Choose a delivery option:
              </div>
              <div class="space-y-4">
                <div class="flex flex-row gap-x-2  items-center">
                  <div>
                    <input type="checkbox">
                  </div>
                  <div>
                    <a class="text-green-900 font-bold">Tuesday, June 21</a> <br> <span>FREE Shipping</span>
                  </div>
                </div>
                <div class="flex flex-row gap-x-2 items-center">
                  <div>
                    <input type="checkbox">
                  </div>
                  <div>
                    <a class="text-green-900 font-bold">Wednesday, June 15</a> <br> <span> $4.99 - Shipping</span>
                  </div>
                </div>
                <div class="flex flex-row gap-x-2 items-center">
                  <div>
                    <input type="checkbox">
                  </div>
                  <div>
                    <a class="text-green-900 font-bold">Monday, June 13</a><br> <span>$9.99 - Shipping</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  `
  // console.log(cartHtml)
  document.querySelector('#cartPage').innerHTML = cartHtml

  realPrice = product.productPrice
})

var checkItems = 0
cart.forEach((item)=>{
  checkItems += item.quantity
})
document.querySelector('#numItems').innerHTML = checkItems + ' items'
document.querySelector('#orderItem').innerHTML = ('items ' + checkItems) 

let initPrice = 0
cart.forEach((items)=>{
  initPrice += Number(items.productPrice)
  document.querySelector("#realPrice").innerHTML = (initPrice).toFixed(2)
})


const handlingPrice = Number(document.querySelector('#handlingPrice').innerHTML)
document.querySelector("#beforeTax").innerHTML = (handlingPrice + initPrice).toFixed(2)
const afterTax = document.querySelector("#afterTax") 
afterTax.innerHTML = ((handlingPrice + initPrice) * 0.1).toFixed(2)
document.querySelector('#totalOrder').innerHTML = (initPrice + handlingPrice + Number(afterTax.innerHTML)).toFixed(2)







