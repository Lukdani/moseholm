import { formatCurrency } from "../utils/formatCurrency.js";
import {createElement} from "/moseholm/utils/createElement.js";

export class ShoppingCartView {
    constructor(cartSummaryRoot, cartIconCountRoot, cartRoot) {
        this.cartSummaryRoot = cartSummaryRoot;
        this.cartIconCountRoot = cartIconCountRoot;
        this.cartRoot = cartRoot;
        console.log(cartRoot);
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

    generateCartSummary = (productLines, totalPrice) => {
        const productSummaryContainer = createElement("div", ["product-summary"], null);
        this.cartSummaryRoot.appendChild(productSummaryContainer);
        if (Object.values(productLines)?.length > 0) {
            const summaryTable = createElement("table", ["table", "product-summary-table"], null);
       
        productSummaryContainer.appendChild(summaryTable);

        const summaryTableHead = createElement("thead", null, null);
        summaryTable.appendChild(summaryTableHead);

        const headRow = createElement("tr");
        summaryTableHead.appendChild(headRow);

        const productNameHead = createElement("th");
        productNameHead.textContent = "Produktnavn"
        headRow.appendChild(productNameHead);

        const productAmountHead = createElement("th");
        productAmountHead.textContent = "Antal"
        headRow.appendChild(productAmountHead);

        const productPriceHead = createElement("th");
        productPriceHead.textContent = "Pris pr. stk."
        headRow.appendChild(productPriceHead);

        const ProductTotalPriceHead = createElement("th");
        ProductTotalPriceHead.textContent = "Pris i alt"
        headRow.appendChild(ProductTotalPriceHead);

        const summaryTableBody = createElement("tbody", null, null);
        summaryTable.appendChild(summaryTableBody);

        Object.values(productLines).forEach(productLine => {
            const productRow = createElement("tr");
            summaryTableBody.appendChild(productRow);

            const productName = createElement("td");
            productName.textContent = productLine.product.prodTitle;
            productRow.appendChild(productName);

            const productAmount = createElement("td");
            productAmount.textContent = productLine.count;
            productRow.appendChild(productAmount);

            const productPrice = createElement("td");
            productPrice.textContent = (formatCurrency(productLine.product.prodPrice, "kr."));
            productRow.appendChild(productPrice);

            const productTotalPrice = createElement("td");
            productTotalPrice.textContent = (formatCurrency(productLine.product.prodPrice * productLine.count, "kr.")) 
            productRow.appendChild(productTotalPrice);
             })
             const summaryRow = createElement("tr");
             summaryTableBody.appendChild(summaryRow);
 
             const productName = createElement("td");
             productName.textContent = ""
             summaryRow.appendChild(productName);
 
             const productAmount = createElement("td");
             productAmount.textContent = "";
             summaryRow.appendChild(productAmount);
 
             const productPrice = createElement("td");
             productPrice.textContent = "";
             summaryRow.appendChild(productPrice);
 
             const productTotalPrice = createElement("td");
             const productPriceSpan = createElement("span");
             productPriceSpan.textContent = formatCurrency(totalPrice, "kr.");
             productTotalPrice.appendChild(productPriceSpan);

             summaryRow.appendChild(productTotalPrice);
     
         }


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

    toggleActivateCart = (active) => {
        if (active && !this.cartRoot.classList.contains("active")) {
            this.cartRoot.classList.add("active");
            return;
        }
        else if (!active) {
            this.cartRoot.classList.remove("active");
            return;
        }
    }
}