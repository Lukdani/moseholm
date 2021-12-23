import { formatCurrency } from "../utils/formatCurrency.js";
import { createElement } from "/moseholm/utils/createElement.js";

export class ShoppingCartView {
  constructor(cartSummaryRoot, cartIconCountRoot, cartRoot) {
    this.cartSummaryRoot = cartSummaryRoot;
    this.cartIconCountRoot = cartIconCountRoot;
    this.cartRoot = cartRoot;
  }

  generateBuyButton = (productId) => {
    const button = createElement(
      "button",
      ["btn", "btn-primary", "shopping-cart-buy-button"],
      null
    );
    const buttonIcon = createElement("i", ["fas", "fa-shopping-cart"], null);
    button.appendChild(buttonIcon);
    const buttonText = createElement("span", null, null);
    buttonText.textContent = "Læg i kurv";
    button.appendChild(buttonText);
    button.setAttribute("data-productId", productId);

    return button;
  };

  generateCartSummary = (productLines, totalPrice, restrictedView = false) => {
    if (restrictedView) {
      const shoppingCartContainerCol = document.getElementById(
        "shoppingCartContainer-col"
      );
      shoppingCartContainerCol.classList.add("col-lg-3");
    }
    this.cartSummaryRoot.innerHTML = "";
    const productSummaryContainer = createElement(
      "div",
      ["product-summary"],
      null
    );

    this.cartSummaryRoot.appendChild(productSummaryContainer);
    if (Object.values(productLines)?.length > 0) {
      const summaryTable = createElement(
        "table",
        ["table", "product-summary-table"],
        null
      );

      productSummaryContainer.appendChild(summaryTable);

      const summaryTableHead = createElement("thead", null, null);
      summaryTable.appendChild(summaryTableHead);

      const headRow = createElement("tr");
      summaryTableHead.appendChild(headRow);

      const productNameHead = createElement("th");
      productNameHead.textContent = "Produktnavn";
      headRow.appendChild(productNameHead);

      if (!restrictedView) {
        const productAmountHead = createElement("th");
        productAmountHead.textContent = "Antal";
        headRow.appendChild(productAmountHead);

        const productPriceHead = createElement("th");
        productPriceHead.textContent = "Stykpris";
        headRow.appendChild(productPriceHead);
      }

      const ProductTotalPriceHead = createElement("th");
      ProductTotalPriceHead.textContent = "I alt";
      headRow.appendChild(ProductTotalPriceHead);

      const summaryTableBody = createElement("tbody", null, null);
      summaryTable.appendChild(summaryTableBody);

      Object.values(productLines).forEach((productLine) => {
        const productRow = createElement("tr");
        productRow.setAttribute("data-productId", productLine.product.prodId);
        summaryTableBody.appendChild(productRow);

        const productName = createElement("td");
        productName.textContent = !restrictedView
          ? productLine.product.prodTitle
          : `${productLine.product.prodTitle} (${productLine.count})`;
        productRow.appendChild(productName);

        if (!restrictedView) {
          const productAmount = createElement("td");

          const productAmountDecrease = createElement(
            "button",
            ["btn", "product-amount-button", "product-amount-decrease"],
            null
          );
          productAmountDecrease.setAttribute(
            "data-productId",
            productLine.product.prodId
          );
          productAmountDecrease.textContent = "-";
          productAmount.appendChild(productAmountDecrease);

          const productAmountState = createElement(
            "span",
            ["product-amount-tag"],
            null
          );
          productAmountState.setAttribute(
            "data-productId",
            productLine.product.prodId
          );
          productAmountState.textContent = productLine.count;
          productAmount.appendChild(productAmountState);

          const productAmountIncrease = createElement(
            "button",
            ["btn", "product-amount-button", "product-amount-increase"],
            null
          );
          productAmountIncrease.setAttribute(
            "data-productId",
            productLine.product.prodId
          );
          productAmountIncrease.textContent = "+";
          productAmount.appendChild(productAmountIncrease);

          productRow.appendChild(productAmount);

          const productPrice = createElement("td");
          productPrice.textContent = formatCurrency(
            productLine.product.prodPrice,
            "kr."
          );
          productRow.appendChild(productPrice);
        }
        const productTotalPrice = createElement("td");
        productTotalPrice.textContent = formatCurrency(
          productLine.product.prodPrice * productLine.count,
          "kr."
        );
        productRow.appendChild(productTotalPrice);
      });
      const summaryRow = createElement("tr");
      summaryTableBody.appendChild(summaryRow);

      const productName = createElement("td");
      productName.textContent = "";
      summaryRow.appendChild(productName);

      if (!restrictedView) {
        const productAmount = createElement("td");
        productAmount.textContent = "";
        summaryRow.appendChild(productAmount);

        const productPrice = createElement("td");
        productPrice.textContent = "";
        summaryRow.appendChild(productPrice);
      }
      const productTotalPrice = createElement("td");
      const productPriceSpan = createElement("span");
      productPriceSpan.textContent = formatCurrency(totalPrice, "kr.");
      productTotalPrice.appendChild(productPriceSpan);

      summaryRow.appendChild(productTotalPrice);

      if (!restrictedView) {
        const checkOutButton = createElement(
          "button",
          ["btn", "btn-primary", "mt-2"],
          "checkOutButton"
        );
        checkOutButton.textContent = "Gå til betaling";
        productSummaryContainer.appendChild(checkOutButton);
      }
    } else if (!Object.values(productLines)?.length) {
      const noItemsContainer = createElement(
        "div",
        ["no-data-warning-container"],
        null
      );
      productSummaryContainer.appendChild(noItemsContainer);

      const noItems = createElement("p", ["no-data-warning"], null);
      const noItemsText = createElement("span", null, null);
      noItemsText.textContent = "Ingen varer i kurven";
      noItems.appendChild(noItemsText);
      noItemsContainer.appendChild(noItems);

      const productsLink = createElement(
        "a",
        ["btn", "btn-primary", "mt-2"],
        null
      );
      productsLink.href = "/moseholm/pages/products.php";
      productsLink.textContent = "Gå til produkter";

      noItemsContainer.appendChild(productsLink);
    }
  };

  generateOrderForm = (order, onSubmit, handleChange, handleCheckChange) => {
    const prevFormContainer = document.getElementById("formContainer");
    if (prevFormContainer) {
      prevFormContainer.remove();
    }
    const shoppingCartRow = document.getElementById("shoppingCartRow");
    this.generateCartSummary(order.products, order.totalPrice, true);
    const formContainer = createElement("div", ["col-9"], "formContainer");
    shoppingCartRow.appendChild(formContainer);

    const form = createElement(
      "form",
      ["order-submission-form"],
      "order-submission-form"
    );
    form.addEventListener("submit", onSubmit);
    formContainer.appendChild(form);

    const inputFields = [
      {
        name: "name",
        label: "Fulde navn",
        onChange: handleChange,
      },
      {
        name: "address",
        label: "Adresse",
        onChange: handleChange,
      },
      {
        name: "city",
        label: "By",
        onChange: handleChange,
      },
      {
        name: "email",
        label: "Email-adresse",
        onChange: handleChange,
      },
    ];

    inputFields.forEach((inputField) => {
      const inputContainer = createElement("div", ["form-group"], null);
      form.appendChild(inputContainer);

      const label = createElement("label", null, null);
      label.textContent = inputField.label;
      inputContainer.appendChild(label);

      const input = createElement("input", ["form-control"], null);
      input.required = true;
      input.name = inputField.name;
      input.addEventListener("input", handleChange);
      inputContainer.appendChild(input);
    });

    const paymentHeader = createElement("h3", ["mt-3"], null);
    paymentHeader.textContent = "Betalingsmåde";
    form.appendChild(paymentHeader);

    const paymentContainer = createElement("div", ["form-check"], null);
    form.appendChild(paymentContainer);

    const paymentCheckBox = createElement("input", ["form-check-input"], null);
    paymentCheckBox.required = true;
    paymentCheckBox.name = "paymentOption";
    paymentCheckBox.type = "checkbox";
    paymentCheckBox.addEventListener("change", handleCheckChange);
    paymentContainer.appendChild(paymentCheckBox);

    const paymentLabel = createElement("label", ["form-check-label"], null);
    paymentLabel.textContent = "Fantasi-dankort";
    paymentContainer.appendChild(paymentLabel);
    form.appendChild(paymentContainer);
    const payButton = createElement(
      "button",
      ["btn", "btn-primary", "mt-2"],
      "payButton"
    );
    payButton.textContent = "Gennemfør køb";
    form.appendChild(payButton);
  };

  generateOrderConfirmation = (order) => {
    if (order) {
      this.cartSummaryRoot.innerHTML = "";
      const formContainer = document.getElementById("formContainer");
      if (formContainer) {
        formContainer.remove();
      }
      this.cartSummaryRoot.innerHTML = "";
      const pageHeader = document.getElementById("shopping-cart-header");
      if (pageHeader) {
        pageHeader.remove();
      }
      const containerCol = document.getElementById("shoppingCartContainer-col");
      if (containerCol) {
        containerCol.classList.remove("col-lg-3");
        containerCol.classList.add("col-lg-6");
        containerCol.classList.add("offset-lg-3");
      }
      const orderConfirmationContainer = createElement("div", ["row"], null);
      this.cartSummaryRoot.appendChild(orderConfirmationContainer);

      const orderConfirmationCol = createElement("div", ["col", "p-4", "bg-white"], null);
      orderConfirmationContainer.appendChild(orderConfirmationCol);

      const orderConfirmationHeader = createElement("h3", ["d-flex"], null);
      orderConfirmationCol.appendChild(orderConfirmationHeader);

      const orderConfirmationHeaderIcon = createElement("i", ["fas", "fa-check", "text-success", ["mr-2"]], null);
      orderConfirmationHeaderIcon.style.marginRight = "1rem";
      orderConfirmationHeader.appendChild(orderConfirmationHeaderIcon);

      const orderConfirmationHeaderText = createElement("span", ["ml-2"], null);
      orderConfirmationHeaderText.textContent = "Ordre modtaget!";
      orderConfirmationHeader.appendChild(orderConfirmationHeaderText);
 

      const orderConfirmationText = createElement("p", null, null);
      orderConfirmationText.innerHTML = `
      <br>
      Tak for din ordre. Den har fået ordrenr. <strong>${order.orderId}</strong>. 
      <br>
      <br>
      Du kan nu glæde dig til at modtage 
      ${order.products?.map((productItem, index) => 
        {
          if (order.products.length < 2 || index === order.products.length -  2  ) {
            return `${productItem.prodTitle}`
          }
          else if (index === order.products.length - 1) {
          return ` og ${productItem.prodTitle}`
        }
        else {
          return `${productItem.prodTitle}, `
        }}).join(" ")} med posten ;-)
        <br>
        <br>
        Vi glæder os i hvert fald til at sende pakken af sted til dig ;-)
        <br>
        <br>
        Med landlig hilsen
        <br>
        <br>
        <strong>Moseholm<strong>
      `;
      orderConfirmationCol.appendChild(orderConfirmationText);

      const productLink = createElement(
        "a",
        ["btn", "btn-primary", "mt-4"],
        "productsButton"
      );
      productLink.href = "/moseholm/pages/products.php";
      productLink.textContent = "Se flere produkter";
      orderConfirmationCol.appendChild(productLink);
    }
  }

  buyButtonClicked = (callback, productId) => {
    if (callback && productId) {
      callback(productId);
    }
  };

  updateCartCounter = (count) => {
    if (count > 0) {
      this.cartIconCountRoot.textContent = count;
      return;
    }
    this.cartIconCountRoot.textContent = "";
  };

  bindBuyButtons = (callback) => {
    const buttons = document.querySelectorAll(".shopping-cart-buy-button");

    if (buttons && buttons.length > 0) {
      buttons.forEach((buttonItem) => {
        const productId = buttonItem.getAttribute("data-productId");
        buttonItem.removeEventListener("click", () =>
          this.buyButtonClicked(callback, productId)
        );
        buttonItem.addEventListener("click", () =>
          this.buyButtonClicked(callback, productId)
        );
      });
    }
  };

  amountButtonClicked = (callback, type, productId) => {
    if (callback && type && productId) {
      callback(type, productId);
    }
  };

  bindDecreaseButtons = (callback) => {
    const buttons = document.querySelectorAll(".product-amount-decrease");
    if (buttons && buttons.length > 0) {
      buttons.forEach((buttonItem) => {
        const productId = buttonItem.getAttribute("data-productId");
        buttonItem.removeEventListener("click", () =>
          this.amountButtonClicked(callback, "decrease", productId)
        );
        buttonItem.addEventListener("click", () =>
          this.amountButtonClicked(callback, "decrease", productId)
        );
      });
    }
  };

  bindIncreaseButtons = (callback) => {
    const buttons = document.querySelectorAll(".product-amount-increase");
    if (buttons && buttons.length > 0) {
      buttons.forEach((buttonItem) => {
        const productId = buttonItem.getAttribute("data-productId");
        buttonItem.removeEventListener("click", () =>
          this.amountButtonClicked(callback, "increase", productId)
        );
        buttonItem.addEventListener("click", () =>
          this.amountButtonClicked(callback, "increase", productId)
        );
      });
    }
  };

  toggleActivateCart = (active) => {
    if (active && !this.cartRoot.classList.contains("active")) {
      this.cartRoot.classList.add("active");
      return;
    } else if (!active) {
      this.cartRoot.classList.remove("active");
      return;
    }
  };

  bindCheckoutButton = (callback) => {
    const button = document.getElementById("checkOutButton");
    button.addEventListener("click", callback);
  };

  bindPayButton = (callback) => {
    const button = document.getElementById("payButton");
    button.addEventListener("click", callback);
  };
}
