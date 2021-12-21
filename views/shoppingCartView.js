import {createElement} from "/moseholm/utils/createElement.js";

export class ShoppingCartView {
    constructor(cartSummaryRoot, cartIconCountRoot) {
        this.cartSummaryRoot = cartSummaryRoot;
        this.cartIconCountRoot = cartIconCountRoot;
    }

    generateBuyButton = (productId) => {
        const button = createElement("btn", ["btn", "btn-primary", "shopping-cart-buy-button"], null);
        const buttonIcon = createElement("i", ["fas", "fa-shopping-cart"], null);
        button.appendChild(buttonIcon);
        const buttonText = createElement("span", null, null);
        buttonText.textContent = "Læg i kurv";
        button.appendChild(buttonText);
        button.setAttribute("data-productId", productId);

        return button;
    }

    buyButtonClicked = (callback, productId) => {

        if (callback && productId) {
            callback(productId);
        }
    }

    updateCartCounter = (count) => {
        if (count > 0) {
            this.cartIconCountRoot.textContent = count;
            return;
        }
            this.cartIconCountRoot.textContent = "";
    }

    bindBuyButtons = (callback) => {
        const buttons = document.querySelectorAll(".shopping-cart-buy-button");

        if (buttons && buttons.length > 0) {
            buttons.forEach(buttonItem => {
                const productId = buttonItem.getAttribute("data-productId");
                buttonItem.removeEventListener("click", () => this.buyButtonClicked(callback, productId));
                buttonItem.addEventListener("click", () => this.buyButtonClicked(callback, productId))
            })
        }
    }
}