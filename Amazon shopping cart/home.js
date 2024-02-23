let productsHtml = '';
let price;

products.forEach((product)=>{
  price = (product.priceCents / 100).toFixed(2)
  productsHtml += `
      <div class="flex flex-col w-60 border py-8 gap-y-2 px-4 shrink-0">
        <div class="w-48 h-56">
          <img class="w-full h-full object-fit" src="${product.image}" alt="image">
        </div>
        <div  class="w-44">
          ${product.name}
        </div>
       
        <div class="flex flex-row gap-x-2">
          <img class="w-24" src="./images/ratings/rating-${product.rating.stars * 10}.png" alt="image">
          <p class="text-blue-500">${product.rating.count}</p>
        </div>
        
        <div class="font-semibold">
          $${price}
        </div>
        <div class="border w-12">
          <select id="select-${product.id}">
            <option selected value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>
        <div id="addedMark-${product.id}" style="visibility: hidden;" class="flex flex-row items-center justify-center">
          <img class="w-6" src="./images/icons/checkmark.png" alt="">
          <p class="text-green-500 font-bold">Added</p> 
        </div>
        <div id="addToCart" data-product-name="${product.name}" data-product-image="${product.image}" data-product-price="${price}" data-product-id="${product.id}" class=" w-48 bg-yellow-400 hover:bg-yellow-500 rounded-3xl py-1 px-8 text-center cursor-pointer active:w-44">
          <button class="">Add to Cart</button>
        </div>
      </div>
  `  
})



document.querySelector("#productContainer").innerHTML = productsHtml

  document.querySelectorAll('#addToCart').forEach((button)=>{
  button.addEventListener('click', ()=>{

    const proImage = button.dataset.productImage;
    const proName = button.dataset.productName;   
    const proPrice = button.dataset.productPrice;
    const proId = button.dataset.productId


    const quantitySelect = document.querySelector(`#select-${proId}`)
    const quantity = Number(quantitySelect.value)
    quantitySelect.value = 1

    let duplicateItem;
  
    cart.forEach((item)=>{
      if(proName === item.productName){
        duplicateItem = item
      }
    })
  

    if(duplicateItem){
      duplicateItem.quantity += 1
    }else{
      cart.push({
        productImage: proImage,
        productName: proName,
        productPrice: proPrice,
        productId : proId,
        quantity: quantity
      })
    }  
    localStorage.setItem('cart', JSON.stringify(cart)); 
 

    var cartQuantity = 0
    cart.forEach((item)=>{
      cartQuantity += item.quantity
    })
    document.querySelector('#cartCount').innerHTML = cartQuantity

    document.querySelectorAll(`#addedMark-${proId}`).forEach((item)=>{
      item.style.visibility = 'visible'
      setTimeout(() => {
        item.style.visibility = 'hidden'
      }, 1000);
    })

  }) 
})




