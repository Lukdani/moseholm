import { tryJsonParse } from "../utils/tryJsonParse.js";
import { tryJsonStringify } from "../utils/tryJsonStringify.js";
import { postRequest } from "../utils/postRequest.js";
import { fetchJsonApi } from "../utils/fetchJsonApi.js";

export class ShoppingCartController {
  constructor(shoppingCartModel, shoppingCartView, products, loadSummary) {
    this.shoppingCartModel = shoppingCartModel;
    this.shoppingCartView = shoppingCartView;
    this.products = products;
    this.getShoppingCartFromCache();
    if (loadSummary) {
      this.generateCartSummary();
    }
  }

  generateCartSummary = () => {
    this.shoppingCartView.generateCartSummary(
      this.shoppingCartModel.state.products,
      this.shoppingCartModel.state.totalPrice
    );
    this.shoppingCartView.bindDecreaseButtons((type, productId) =>
      this.handleProductAmountChanged(type, productId)
    );
    this.shoppingCartView.bindIncreaseButtons((type, productId) =>
      this.handleProductAmountChanged(type, productId)
    );
    if (Object.values(this.shoppingCartModel.state.products)?.length > 0) {
      this.shoppingCartView.bindCheckoutButton(() => {
        this.shoppingCartView.generateOrderForm(
          {
            products: this.shoppingCartModel.state.products,
            totalPrice: this.shoppingCartModel.state.totalPrice,
          },
          (e) => {
            console.log(e);
            this.completeOrder();
            e.preventDefault();
          },
          (e) => {
            this.shoppingCartModel.updateCustomer(
              e?.target.name,
              e?.target.value
            );
            console.log(this.shoppingCartModel.state.customer);
          },
          (e) => console.log(e?.target.name, "test 3")
        );
        this.shoppingCartView.bindPayButton(() => console.log("click"));
      });
      this.shoppingCartView.bindClearCartButton(() => {
        this.clearCart();
        this.shoppingCartView.generateCartSummary(
          this.shoppingCartModel.state.products,
          this.shoppingCartModel.state.totalPrice
        );
      });
    }
  };

  // METHOD TO HANDLE INCREASE OR DECREASE OF PRODUCTS;
  handleProductAmountChanged = (type, productId) => {
    if (type === "decrease") {
      const newAmount = this.shoppingCartModel.updateProductAmount(
        type,
        productId
      );
      if (newAmount === 0) {
        this.shoppingCartModel.removeProduct(productId);
      }
    } else if (type === "increase") {
      this.shoppingCartModel.updateProductAmount(type, productId);
    }

    this.cacheShoppingCart();
    this.updateShoppingCart();
    this.generateCartSummary();
  };

  // METHOD TO RETRIEVE CACHED SHOPPING CART;
  getShoppingCartFromCache = () => {
    const items = localStorage.getItem("shoppingCart");
    let parsedItems = null;
    if (items != null) {
      parsedItems = tryJsonParse(items);
      if (Object.keys(parsedItems)?.length > 0) {
        this.shoppingCartView.toggleActivateCart(true);
      }
      this.shoppingCartModel.setProducts({ ...parsedItems });
      this.shoppingCartView.updateCartCounter(
        this.shoppingCartModel.state.itemsCount
      );
      return;
    }
  };

  // METHOD TO CACHE CART;
  cacheShoppingCart = () => {
    const items = this.shoppingCartModel.getProducts();
    if (items != null) {
      if (Object.values(items)?.length > 0) {
        this.shoppingCartView.toggleActivateCart(true);
      } else {
        this.shoppingCartView.toggleActivateCart(false);
      }

      const stringifiedItems = tryJsonStringify(items);
      localStorage.setItem("shoppingCart", stringifiedItems);
      return;
    }
  };

  // METHODS TO HANDLE ADDING OF PRODUCTS TO CART;
  updateShoppingCart = (product) => {
    this.getShoppingCartFromCache();
    if (product) {
      this.shoppingCartModel.updateProducts(product);
    }
    this.shoppingCartView.updateCartCounter(
      this.shoppingCartModel.state.itemsCount
    );
    this.cacheShoppingCart();
  };

  addToCart = (productId) => {
    const product = this.products.find(
      (productItem) => productItem.prodId === productId
    );
    if (product) {
      this.updateShoppingCart(product);
    }
  };

  setProducts = (products) => {
    this.products = products;
  };

  bindBuyButtons = () => {
    this.shoppingCartView.bindBuyButtons(this.addToCart);
  };

  // METHOD TO CALL API ETC. WHEN ORDER IS BEING COMPLETED;
  completeOrder = async () => {
    const response = await postRequest("/moseholm/api/postOrder.php", {
      products: Object.values(
        this.shoppingCartModel.state.products
      ).map((x) => ({ product: x.product, quantity: x.count })),
      customer: this.shoppingCartModel.state.customer,
    });
    if (response) {
      const order = await fetchJsonApi(
        `/moseholm/api/getOrder.php?orderId=${response}`
      );
      if (order) {
        this.shoppingCartView.generateOrderConfirmation(order);
        this.clearCart();
      }
    }
    console.log(response);
  };

  // METHOD TO CLEAR CART;
  clearCart = () => {
    this.shoppingCartModel.emptyCart();
    this.cacheShoppingCart();
    this.shoppingCartView.updateCartCounter(0);
    this.shoppingCartView.toggleActivateCart(false);
  };
}
