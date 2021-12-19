import { createElement } from "../utils/createElement.js";
import { formatCurrency } from "../utils/formatCurrency.js";

export class ProductsView {
  constructor(categoryRoot, productRoot) {
    this.categoryRoot = categoryRoot;
    this.productRoot = productRoot;
  }

  renderCategories = (categories, selectedCategories) => {
    this.clearCategories();
    if (categories?.length > 0) {
      categories.forEach((categoryItem) => {
        const categoryButton = createElement(
          "button",
          ["btn", "product-category-button"],
          null
        );
        if (selectedCategories.includes(categoryItem.catKey)) {
          categoryButton.classList.add("selected");
        }
        categoryButton.setAttribute("data-category", categoryItem.catKey);
        this.categoryRoot.appendChild(categoryButton);
        const categoryButtonText = createElement("span", null, null);
        const selectedIcon = createElement(
          "i",
          ["fas", "fa-check-square"],
          null
        );
        categoryButton.appendChild(selectedIcon);
        categoryButtonText.textContent = categoryItem.catLabel;
        categoryButton.appendChild(categoryButtonText);
      });
    }
    const resetFilterButton = createElement(
      "button",
      ["btn", "hidden"],
      "clearFilterButton"
    );
    resetFilterButton.textContent = "Nulstil filter";
    this.categoryRoot.appendChild(resetFilterButton);
  };

  renderProducts = (products) => {
    this.clearProducts();
    if (products?.length > 0) {
      products.forEach((productItem) => {
        const productContainer = createElement(
          "div",
          ["col-6", "col-lg-3", "product-container"],
          null
        );
        const productElement = createElement("div", ["product-item"], null);
        productContainer.appendChild(productElement);

        const flexItemContainer = createElement("span", null, null);
        productElement.appendChild(flexItemContainer);

        const productCategory = createElement(
          "span",
          ["product-item-category"],
          null
        );
        productCategory.textContent = productItem.catLabel;
        flexItemContainer.appendChild(productCategory);

        const productImage = createElement("img", ["product-item-image"], null);
        productImage.src = `/moseholm/images/products/${productItem.prodImageName}`;
        flexItemContainer.appendChild(productImage);

        const productTitle = createElement("h3", ["product-item-title"], null);
        productTitle.textContent = productItem.prodTitle;
        flexItemContainer.appendChild(productTitle);

        const productDescription = createElement("p", [
          "product-item-description",
          null,
        ]);
        productDescription.textContent = productItem.prodDescription;
        flexItemContainer.appendChild(productDescription);

        const priceContainer = createElement("span", [
          "product-item-priceContainer",
        ]);
        productElement.appendChild(priceContainer);

        const shopNotification = createElement("span", [
          "product-item-shopNotification",
        ]);
        priceContainer.appendChild(shopNotification);

        const productPrice = createElement("p", ["product-item-price", null]);
        productPrice.textContent = `${formatCurrency(
          productItem.prodPrice
        )} kr.`;
        priceContainer.appendChild(productPrice);

        shopNotification.textContent = "Købes i gårdbutikken";

        this.productRoot.appendChild(productContainer);
      });
    }
  };

  clearCategories = () => {
    this.categoryRoot.innerHTML = "";
  };

  clearProducts = () => {
    this.productRoot.innerHTML = "";
  };

  clearCategorySelection = () => {
    const categoryButtons = document.querySelectorAll(
      ".product-category-button"
    );
    categoryButtons?.forEach((categoryButtonItem) => {
      categoryButtonItem.classList.remove("selected");
    });
  };

  categoryButtonClicked = (categoryButton, callback) => {
    categoryButton.classList.toggle("selected");
    if (callback) {
      callback(categoryButton.getAttribute("data-category"));
    }
  };

  bindCategoryButton = (callback) => {
    const categoryButtons = document.querySelectorAll(
      ".product-category-button"
    );
    categoryButtons?.forEach((categoryButtonItem) => {
      categoryButtonItem.removeEventListener("click", () =>
        this.categoryButtonClicked(categoryButtonItem, callback)
      );
      categoryButtonItem.addEventListener("click", () =>
        this.categoryButtonClicked(categoryButtonItem, callback)
      );
    });
  };

  resetFilterButtonClicked = (callback, buttonElement) => {
    if (callback) {
      callback();
    }
  };

  displayFilterButton = (shown) => {
    console.log(shown);
    const resetFilterButton = document.getElementById("clearFilterButton");
    if (shown) {
      resetFilterButton.classList.remove("hidden");
      resetFilterButton.classList.add("shown");
    } else if (!shown) {
      resetFilterButton.classList.remove("shown");
      resetFilterButton.classList.add("hidden");
    }
  };

  bindResetFilterButton = (callback) => {
    const resetFilterButton = document.getElementById("clearFilterButton");
    resetFilterButton.removeEventListener("click", () =>
      this.resetFilterButtonClicked(callback, resetFilterButton)
    );
    resetFilterButton.addEventListener("click", () =>
      this.resetFilterButtonClicked(callback, resetFilterButton)
    );
  };
}
