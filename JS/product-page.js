const urlSearchParams = new URLSearchParams(window.location.search);
let productId = urlSearchParams.get("id") ?? 1;
const productDetailsSection = document.querySelector("section#product-details");
const productDescriptionSection = document.querySelector("section#product-description");
const product = productsList.filter((productItem) => productItem.id == productId)[0];
productDetailsSection.querySelector("h1").innerHTML = product.name;
productDetailsSection.querySelector("p").innerHTML = product.price + " Lei";

if (typeof product.image === "string") {
    let image = document.createElement("img");
    image.setAttribute("src", product.image);
    productDescriptionSection.querySelector(".image-expanded").appendChild(image);
} else {
    let smallImagesContainer = productDescriptionSection.querySelector(".images-small");
    let imageElement;
    for (let image of product.image) {
        imageElement = document.createElement("img");
        imageElement.setAttribute("src", image);
        imageElement.addEventListener("click", event => {
            console.log("works");
            event.target.parentElement.querySelector(".active").classList.remove("active");
            event.target.classList.add("active");
            document.querySelector(".image-expanded img").setAttribute("src", event.target.getAttribute("src"));
        });
        smallImagesContainer.appendChild(imageElement);
    }
    let image = document.createElement("img");
    image.setAttribute("src", product.image[0]);
    productDescriptionSection.querySelector(".image-expanded").appendChild(image);
    productDescriptionSection.querySelector(".images-small img").classList.add("active");
}
if (product.description) {
    let productDescriptionContainer = productDescriptionSection.querySelector("#details");
    let productDescriptionTitle = document.createElement("h2");
    productDescriptionTitle.innerHTML = "Detalii";
    productDescriptionContainer.appendChild(productDescriptionTitle);
    let productDescriptionParts = product.description.split("\n");
    productDescriptionParts.forEach(part => {
        let p = document.createElement("p");
        p.innerHTML = part;
        productDescriptionContainer.appendChild(p);
    })
}
if (product.specifications) {
    let productSpecificationContainer = productDescriptionSection.querySelector("#specifications");
    let productSpecificationsTtile = document.createElement("h2");
    productSpecificationsTtile.innerHTML = "Specificatii";
    productSpecificationContainer.appendChild(productSpecificationsTtile);
    let table = document.createElement("table");
    let tableRow, tableColumn;
    for (let specification of product.specifications) {
        tableRow = document.createElement("tr");
        tableColumn = document.createElement("td");
        tableColumn.innerHTML = specification.key;
        tableRow.appendChild(tableColumn);
        tableColumn = document.createElement("td");
        tableColumn.innerHTML = specification.value;
        tableRow.appendChild(tableColumn);
        table.appendChild(tableRow);
    }
    productSpecificationContainer.appendChild(table);
}
document.getElementById("related-products").appendChild(
    buildCarousel(
        productsList.filter(item => {
            if (typeof item.category === "string") {
                return item.category === product.category;
            } else {
                return item.category.indexOf(product.category) > -1;
            }
        }),
        "Produse similare"
    )
);