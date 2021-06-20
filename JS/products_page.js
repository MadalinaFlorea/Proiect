const categories = [];
const subcategories = [];

for (let product of productsList) {
  if (typeof product.category === "string") {
    if (!categories.includes(product.category)) {
      categories.push(product.category);
    }
  }
  if (!subcategories.includes(product.subcategory)) {
    subcategories.push(product.subcategory);
  }
}
const productsContainer = document.getElementById("products_list");
const productPage = {
  categories: [],
  subcategories: [],
  order: "asc",
  addCategoryFilter: (category) => productPage.categories.push(category),
  addSubcategoryFilter: (subcategory) =>
    productPage.subcategories.push(subcategory),
  changeFilter: (event) => {
    if (event.target.checked) {
      switch (event.target.parentElement.parentElement.getAttribute("id")) {
        case "category":
          productPage.addCategoryFilter(event.target.value);
          break;
        case "subcategory":
          productPage.addSubcategoryFilter(event.target.value);
          break;
      }
    } else {
      let filterIndex;
      switch (event.target.parentElement.parentElement.getAttribute("id")) {
        case "category":
          filterIndex = productPage.categories.indexOf(event.target.value);
          productPage.categories.splice(filterIndex, 1);
          break;
        case "subcategory":
          filterIndex = productPage.subcategories.indexOf(event.target.value);
          productPage.subcategories.splice(filterIndex, 1);
          break;
      }
    }
    productPage.renderProducts(productsContainer);
  },
  renderProducts: (parentNode) => {
    parentNode.innerHTML = "";
    if (
      productPage.subcategories.length === 0 &&
      productPage.categories.length === 0
    ) {
      productPage
        .renderSorting()
        .forEach((element) => parentNode.appendChild(element));
      productPage
        .sortProducts(productsList, productPage.order)
        .forEach((product) =>
          parentNode.appendChild(productPage.renderProduct(product))
        );
      return;
    }
    let filteredProducts = productPage.sortProducts(
      productPage.getFilteredProducts(),
      productPage.order
    );
    if (filteredProducts.length === 0) {
      let noResultsMessage = document.createElement("p");
      noResultsMessage.innerHTML =
        "Ne pare rau, nu am gasit nici un rezultat pentru cautarea dumneavoastra.";
      parentNode.appendChild(noResultsMessage);
      return;
    }
    productPage
      .renderSorting()
      .forEach((element) => parentNode.appendChild(element));
    filteredProducts.forEach((product) =>
      parentNode.appendChild(productPage.renderProduct(product))
    );
  },
  getFilteredProducts: () => {
    return productsList.filter((product) => {
      let hasCategory = false;
      let hasSubcategory = false;
      for (let category of productPage.categories) {
        if (
          typeof product.category === "string" &&
          product.category === category
        ) {
          hasCategory = true;
        }
        if (typeof product.category !== "string") {
          for (let productCategory of product.category) {
            if (productCategory === category) {
              hasCategory = true;
            }
          }
        }
      }
      for (let subcategory of productPage.subcategories) {
        if (product.subcategory === subcategory) {
          hasSubcategory = true;
        }
      }
      return (
        (hasCategory && hasSubcategory) ||
        (hasCategory &&
          productPage.subcategories.length === 0 &&
          !hasSubcategory) ||
        (hasSubcategory && productPage.categories.length === 0 && !hasCategory)
      );
    });
  },
  renderProduct: (product) => {
    let viewDetailsButton = document.createElement("a");
    viewDetailsButton.innerHTML = "Vizualizeaza produs";
    //@toDo link button to product
    let productWrapper = document.createElement("div");
    productWrapper.appendChild(viewDetailsButton);
    productWrapper.classList.add("product");
    let productImage = document.createElement("img");
    productImage.setAttribute("src", product.image);
    let productTitle = document.createElement("p");
    productTitle.innerHTML = product.name;
    let productPrice = document.createElement("span");
    productPrice.innerHTML = product.price + " Lei";
    productWrapper.appendChild(productImage);
    productWrapper.appendChild(productTitle);
    productWrapper.appendChild(productPrice);
    return productWrapper;
  },
  renderFilter: (filters, id) => {
    let filterList = document.createElement("ul");
    filterList.setAttribute("id", id);
    let filterItem, filterCheckbox, filterCheckboxLabel, checked;
    for (let filter of filters) {
      checked = false;
      if (id === "category" && productPage.categories.indexOf(filter) > -1) {
        checked = true;
      }
      if (
        id === "subcategory" &&
        productPage.subcategories.indexOf(filter) > -1
      ) {
        checked = true;
      }
      filterItem = document.createElement("li");
      filterCheckbox = document.createElement("input");
      filterCheckbox.setAttribute("type", "checkbox");
      filterCheckbox.setAttribute("value", filter);
      filterCheckbox.setAttribute("id", filter);
      filterCheckbox.checked = checked;
      filterCheckbox.addEventListener("change", productPage.changeFilter);
      filterCheckboxLabel = document.createElement("label");
      filterCheckboxLabel.setAttribute("for", filter);
      filterCheckboxLabel.innerHTML =
        filter.charAt(0).toUpperCase() + filter.slice(1);
      filterItem.appendChild(filterCheckbox);
      filterItem.appendChild(filterCheckboxLabel);
      filterList.appendChild(filterItem);
    }
    return filterList;
  },
  sortProducts: (products, order) => {
    if (order === "asc") {
      return products.sort((a, b) => {
        if (a.name < b.name) {
          return -1;
        }
        if (b.name < a.name) {
          return 1;
        }
        return 0;
      });
    } 
    if (order === "desc") {
      return products.sort((a, b) => {
        if (a.name > b.name) {
          return -1;
        }
        if (b.name > a.name) {
          return 1;
        }
        return 0;
      });
    }
  },
  renderSorting: () => {
    let sortingDropdown = document.createElement("select");
    [
      { order: "asc", name: "A - Z" },
      { order: "desc", name: "Z - A" },
    ].forEach((element) => {
      let option = document.createElement("option");
      option.setAttribute("value", element.order);
      option.innerHTML = element.name;
      if (productPage.order === element.order) {
        option.setAttribute("selected", "selected");
      }
      sortingDropdown.appendChild(option);
    });
    sortingDropdown.addEventListener("change", event => {
        productPage.order = event.target.value;
        productPage.renderProducts(productsContainer);
    });
    let item = document.createElement("i");
    item.classList.add("after-select");
    return [sortingDropdown, item];
  },
};

const urlSearchParams = new URLSearchParams(window.location.search);
if (urlSearchParams.get("category")) {
  productPage.addCategoryFilter(urlSearchParams.get("category"));
}
if (urlSearchParams.get("subcategory")) {
  productPage.addSubcategoryFilter(urlSearchParams.get("subcategory"));
}
productPage.renderProducts(productsContainer);

let filter = document.getElementById("filter");
let filterResults = document.createElement("h4");
filterResults.innerHTML = "Filtreaza";
filter.appendChild(filterResults);
let filterCategoriesTitle = document.createElement("p");
filterCategoriesTitle.innerHTML = "Categorii";
filter.appendChild(filterCategoriesTitle);
filter.appendChild(productPage.renderFilter(categories, "category"));
filterCategoriesTitle = document.createElement("p");
filterCategoriesTitle.innerHTML = "Subcategorii";
filter.appendChild(filterCategoriesTitle);
filter.appendChild(productPage.renderFilter(subcategories, "subcategory"));
