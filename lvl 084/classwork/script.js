const products = [
    {
      name: "Red Sneakers",
      price: "$50",
      image: "https://cdna.lystit.com/300/375/tr/photos/cettire/cae338b3/adidas-Red-Originals-Gazelle-Indoor-Low-top-Sneakers.jpeg",
    },
    {
      name: "Jacket",
      price: "$70",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSunpjazTx9FK16M9_S4J6uYnrniCntGJGXxw&s",
    },
    {
      name: "Black Backpack",
      price: "$40",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI3DktnTmJC1q1pLt0V7j-EbycKGLosHLYKQ&s",
    }
  ];
  
  const displayProducts = () => {
    const container = document.getElementById("product-container");
  
    products.forEach(product => {
      const card = document.createElement("div");
      card.classList.add("card");
  
      const img = document.createElement("img");
      img.src = product.image;
      img.alt = product.name;
      
      const title = document.createElement("h3");
      title.textContent = product.name;
      
      const description = document.createElement("p");
      description.textContent = product.description;
      
      const price = document.createElement("p");
      price.textContent = product.price;
      
      const button = document.createElement("button");
      button.textContent = "Add to Cart";
      
      card.append(img, title, description, price, button);
  
      container.appendChild(card);
    });
  };
  
  displayProducts();