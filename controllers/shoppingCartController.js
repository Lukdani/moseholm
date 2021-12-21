import { tryJsonParse } from "../utils/tryJsonParse.js";
import { tryJsonStringify } from "../utils/tryJsonStringify.js";

export class ShoppingCartController {
    constructor(shoppingCartModel, shoppingCartView, products) {
        this.shoppingCartModel = shoppingCartModel;
        this.shoppingCartView = shoppingCartView;
        this.products = products;
        this.getShoppingCartFromCache();    
    }

    getShoppingCartFromCache = () => {
        const items = localStorage.getItem("shoppingCart");
        let parsedItems = null;
        if (items) {
            parsedItems = tryJsonParse(items);
            this.shoppingCartModel.setProducts({... parsedItems});
            this.shoppingCartView.updateCartCounter(this.shoppingCartModel.state.itemsCount)

            return;
        }
    }

    cacheShoppingCart = () => {
        const items = this.shoppingCartModel.getProducts();
        if (items && Object.values(items)?.length > 0 ){
            const stringifiedItems = tryJsonStringify(items);
            localStorage.setItem("shoppingCart", stringifiedItems);
            return;
        }
    }

    updateShoppingCart = (product) => {
        this.getShoppingCartFromCache();
        this.shoppingCartModel.updateProducts(product);
        this.shoppingCartView.updateCartCounter(this.shoppingCartModel.state.itemsCount)
        this.cacheShoppingCart();
    }

    addToCart = (productId) => {
        const product = this.products.find(productItem => productItem.prodId === productId);
        if (product) {
            this.updateShoppingCart(product);
        }
    }

    setProducts = (products) => {
        this.products = products;
    }

    bindBuyButtons = () => {
        this.shoppingCartView.bindBuyButtons(this.addToCart);
    }
}