function getDetials() {
  // Make a request for a user with a given ID
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get('id');
  axios.get(`https://dummyjson.com/products/${id}`)
    .then(function (response) {
      // handle success
      const data = response.data;
      const { title, thumbnail, brand, category, stock, description, price } = data;
      const result = ` 
      <h2>${title}</h2>
      <img src="${thumbnail}"/>
      <div class="moreDetials">
      <p>${description}</p>
      <div class="row">
        <div class="col">
            <span>price : ${price}$</span>
            <span>brand: ${brand} </span>
        </div>
        <div class="col">
        <span>stock: ${stock} </span>
            <span>category: ${category} </span>
        </div>
        </div>
      </div>
      <button onclick="window.open('index.html','_self') ">.<i class="fa-solid fa-arrow-right"></i></button>
  `
      document.querySelector(".detailsProduct").innerHTML = result;
    })

    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
}
getDetials();