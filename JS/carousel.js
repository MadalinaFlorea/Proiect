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
    for (let product of products) {
        let productWrapper = document.createElement("div");
        productWrapper.classList.add("product");
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
        productsContainer.appendChild(productWrapper);
    }
    let arrowRight = document.createElement("i");
    ["fas", "fa-arrow-right", "arrow", "arrow-right"].forEach(el => arrowRight.classList.add(el));
    productsContainer.appendChild(arrowRight);
    let arrowLeft = document.createElement("i");
    ["fas", "fa-arrow-left", "arrow", "arrow-left"].forEach(el => arrowLeft.classList.add(el));
    productsContainer.appendChild(arrowLeft);
    section.appendChild(productsContainer);
    return section;
}

let heroElement = document.querySelector("main section.hero2");
heroElement.before(buildCarousel(
    productsList.filter(product => product.subcategory === "mancare umeda"),
    "Profita de reducerea de 25%",
    "Oferta valabila pana la finalul lunii august"
));
heroElement.after(buildCarousel(
    productsList.filter(product => product.subcategory === "jucarii"),
    "Fa-ti animalul fericit cu jucariile lui preferate"
));

document.querySelectorAll("main section.carousel").forEach(el => {
    let products = el.querySelectorAll(".product");
    for (let i = 0; i < 4; i++) {
        products[i].classList.add("active");
    }
    el.querySelector(".arrow-right").addEventListener('click',  event => {
        // remove active class from first element, add class to the first product that doesn't have active.
        event.target.parentElement.querySelector(".active").classList.remove("active");
        event.target.parentElement.querySelectorAll(".product:not(.active)").filter(element => {
            if (element.previousElementSibling.classList.contains("active")) {
                return false;
            }
            return true;
        })[0].classList.add("active");
    });

});
