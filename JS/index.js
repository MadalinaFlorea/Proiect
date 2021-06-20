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

window.localStorage.getItem("users").first_name;
