const buildCarousel = (products, carouselTitle, carouselSubtitle) => {
    let section = document.createElement("section");
    section.classList.add("container");
    section.classList.add("carousel");
    let title = document.createElement("h3");
    title.innerHTML = carouselTitle;
    section.appendChild(title);
    if (carouselSubtitle !== undefined) {
        let subtitle = document.createElement("h4");
        subtitle.innerHTML = carouselSubtitle;
        section.appendChild(subtitle);
    }
    let productsContainer = document.createElement("div");
    productsContainer.classList.add("product-slider");
    let activeProductsCounter = 0;
    const buildProduct = (product) => {
        let productWrapper = document.createElement("div");
        productWrapper.classList.add("product");
        if (product.active) {
            productWrapper.classList.add("active");
        }
        let productImage = document.createElement("img");
        productImage.setAttribute("src", product.image);
        productWrapper.appendChild(productImage);
        let productTitle = document.createElement("h5");
        productTitle.innerHTML = product.name;
        productWrapper.appendChild(productTitle);
        let productPrice = document.createElement("small");
        productPrice.innerHTML = product.price + " Lei";
        productWrapper.appendChild(productPrice);
        let productButton = document.createElement("button");
        //@toDo deharcodare
        productButton.innerHTML = "Vezi produs";
        productWrapper.appendChild(productButton);
        return productWrapper;
    }

    for (let product of products) {
        if (activeProductsCounter < 4) {
            product.active = true;
            activeProductsCounter++;
        } else {
            product.active = false;
        }
        productsContainer.appendChild(buildProduct(product));
    }
    let arrowRight = document.createElement("i");
    ["fas", "fa-arrow-right", "arrow", "arrow-right"].forEach(el => arrowRight.classList.add(el));
    productsContainer.appendChild(arrowRight);
    let arrowLeft = document.createElement("i");
    ["fas", "fa-arrow-left", "arrow", "arrow-left"].forEach(el => arrowLeft.classList.add(el));
    productsContainer.appendChild(arrowLeft);
    section.appendChild(productsContainer);

    section.querySelector(".arrow-right").addEventListener('click',  event => {
        const firstInactiveProduct = products.find(product => !product.active);
        firstInactiveProduct.active = true;
        const firstActiveproduct = products.shift();
        firstActiveproduct.active = false;
        products.push(firstActiveproduct);
        renderElements(products);
    });
    section.querySelector(".arrow-left").addEventListener("click", event => {
        let lastElement = products.pop();
        lastElement.active = true;
        let lastActiveElement = products.filter(p => p.active).pop();
        lastActiveElement.active = false;
        products.unshift(lastElement);
        renderElements(products);
    });

    const renderElements = (products) => {
        section.querySelectorAll(".product").forEach(element => element.remove());
        let productWrapper = section.querySelector(".product-slider");
        for(let product of products) {
            productWrapper.appendChild(buildProduct(product));
        }
    }
    
    return section;
}
