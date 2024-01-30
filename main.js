function getProducts(){// Make a request for a user with a given ID
axios.get('https://dummyjson.com/products')
  .then(function (response) {
    // handle success
    const data=response.data;
    const products=data.products
    const result= products.map(
        function(product){
            const{id,title,description,price,thumbnail,category}=product;
            return `
            <div class="product" >
            <img src="${thumbnail}" class="productImg">
            <div class="detials">
            <div class="detials-top">
            <h2>${category}</h2>
            <h3>${title}</h3>
            <p>${description}</p>
            </div>
            <div class="detials-bottom">
            <span>price: ${price}$</span>
            <button onclick="window.open('detials.html?id=${id}','_self') ">more detials <i class="fa-solid fa-arrow-right"></i></button>
            </div>
            </div>
            </div>
            `
        }
    ).join('')
    document.querySelector(".products").innerHTML=result;
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
}

getProducts();
