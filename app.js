
// const itemsContainer = document.querySelector('.product');

window.onload = () => {
  const splashScreen = document.querySelector('.splash');
  // splashScreen.style.display = 'block';

  setTimeout(() => {
    splashScreen.classList.add('display-none');
    //splashScreen.style.display = 'none';
  }, 5000);
};



fetch('items-data.json')
  .then(response => response.json())
  .then(data => {
    data.Laptops.forEach(laptop => {
      const productEl = document.createElement('div');
      productEl.classList.add('product');

      const nameEl = document.createElement('h3');
      nameEl.innerText = laptop.name;
      productEl.appendChild(nameEl);

      const specsEl = document.createElement('p');
      specsEl.innerText = laptop.specifications;
      productEl.appendChild(specsEl);

      const priceEl = document.createElement('price');
      priceEl.innerText = laptop.price;
      productEl.appendChild(priceEl);

      const imageEl = document.createElement('img');
      imageEl.src = laptop.image;
      productEl.appendChild(imageEl);

      const offerEl = document.createElement('button');
      offerEl.innerText = "Make  Offer";
      productEl.appendChild(offerEl);

      // Create other elements like price, offer button

      // Append the product element to the appropriate section
      const sectionEl = document.querySelector('#laptops');
      sectionEl.appendChild(productEl);
    });
  });


  fetch('items-data.json')
  .then(response => response.json())
  .then(data => {
    data.Furniture.forEach(furn => {
      const productEl = document.createElement('div');
      productEl.classList.add('product');

      const nameEl = document.createElement('h3');
      nameEl.innerText = furn.name;
      productEl.appendChild(nameEl);

      const specsEl = document.createElement('p');
      specsEl.innerText = furn.specifications;
      productEl.appendChild(specsEl);

      const priceEl = document.createElement('price');
      priceEl.innerText = furn.price;
      productEl.appendChild(priceEl);

      const imageEl = document.createElement('img');
      imageEl.src = furn.image;
      productEl.appendChild(imageEl);

      const offerEl = document.createElement('button');
      offerEl.innerText = "Make Offer";
      productEl.appendChild(offerEl);

      // Create other elements like price, offer button

      // Append the product element to the appropriate section
      const sectionEl = document.querySelector('#furniture');
      sectionEl.appendChild(productEl);
    });
  });

  fetch('items-data.json')
  .then(response => response.json())
  .then(data => {
    data.Electronics.forEach(elec => {
      const productEl = document.createElement('div');
      productEl.classList.add('product');

      const nameEl = document.createElement('h3');
      nameEl.innerText = elec.name;
      productEl.appendChild(nameEl);

      const specsEl = document.createElement('p');
      specsEl.innerText = elec.specifications;
      productEl.appendChild(specsEl);

      const priceEl = document.createElement('price');
      priceEl.innerText = elec.price;
      productEl.appendChild(priceEl);

      const imageEl = document.createElement('img');
      imageEl.src = elec.image;
      productEl.appendChild(imageEl);

      const offerEl = document.createElement('button');
      offerEl.innerText = "Make Offer";
      productEl.appendChild(offerEl);

      // Create other elements like price, offer button

      // Append the product element to the appropriate section
      const sectionEl = document.querySelector('#electronics');
      sectionEl.appendChild(productEl);
    });
  });




  const searchInput = document.getElementById('search-input');
  searchInput.addEventListener('input', handleSearch);

  function handleSearch(event) {
    const searchTerm = event.target.value.toLowerCase();
    const products = document.querySelectorAll('.product');
    products.forEach(product => {
      const productName = product.querySelector('h3').innerText.toLowerCase();
      if(productName.includes(searchTerm)) {
        product.style.display = 'block';
      } else {
        product.style.display = 'none';
      }
    });
  }
