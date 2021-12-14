import { createElement } from "../utils/createElement.js";

export class ProductsView {
    constructor(categoryRoot, productRoot) {
        this.categoryRoot = categoryRoot;
        this.productRoot = productRoot;
    }

    renderCategories = (categories, selectedCategories) => {
        if (categories?.length > 0) {
            categories.forEach(categoryItem => {
                console.log(categoryItem);
                const categoryButton = createElement("button", ["btn", "product-category-button"], null);
                if (selectedCategories.includes(categoryItem.catKey)) {
                    categoryButton.classList.add("selected");
                }
                categoryButton.setAttribute("data-category", categoryItem.catKey);
                this.categoryRoot.appendChild(categoryButton);
                const categoryButtonText = createElement("span", null, null)
                const selectedIcon = createElement("i", ["fas", "fa-check-square"], null)
                categoryButton.appendChild(selectedIcon);
                categoryButtonText.textContent = categoryItem.catLabel;
                categoryButton.appendChild(categoryButtonText);
     
            })
        }
    }

    renderProducts = (products) => {
        this.clearProducts();
        if (products?.length > 0) {
            products.forEach(productItem => {
                console.log(productItem);
            const productContainer = createElement("div", ["col-6", "col-lg-3", "product-container"], null);
            const productElement = createElement("div", ["product-item"], null);
            productContainer.appendChild(productElement);

            const productCategory = createElement("span", ["product-item-category"], null);
            productCategory.textContent = productItem.catLabel;
            productElement.appendChild(productCategory);

            const productImage = createElement("img", ["product-item-image"], null);
            productImage.src = `/moseholm/images/products/${productItem.prodImageName}`;
            productElement.appendChild(productImage);

            const productTitle = createElement("h3", ["product-item-title"], null);
            productTitle.textContent = productItem.prodTitle;
            productElement.appendChild(productTitle);

            const productDescription = createElement("p", ["product-item-description", null]);
            productDescription.textContent = productItem.prodDescription;
            productElement.appendChild(productDescription);

            const productPrice = createElement("p", ["product-item-price", null]);
            productPrice.textContent = `${productItem.prodPrice} kr.`;
            productElement.appendChild(productPrice);

            this.productRoot.appendChild(productContainer);
            })
    }
}

clearProducts = () => {
    this.productRoot.innerHTML = "";
}

    categoryButtonClicked = (categoryButton, callback) => {
        categoryButton.classList.toggle("selected");
        if (callback) {
            callback(categoryButton.getAttribute("data-category"));
        }
    }

    bindCategoryButton = (callback) => {
        const categoryButtons = document.querySelectorAll(".product-category-button");
        categoryButtons.forEach(categoryButtonItem => {
            categoryButtonItem.removeEventListener("click", () => this.categoryButtonClicked(categoryButtonItem, callback));
            categoryButtonItem.addEventListener("click", () => this.categoryButtonClicked(categoryButtonItem, callback));
        })
    }


}