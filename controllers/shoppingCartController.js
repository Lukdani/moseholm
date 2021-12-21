import { tryJsonParse } from "../utils/tryJsonParse.js";
import { tryJsonStringify } from "../utils/tryJsonStringify.js";

export class ShoppingCartController {
    constructor(shoppingCartModel, shoppingCartView, products, loadSummary) {
        this.shoppingCartModel = shoppingCartModel;
        this.shoppingCartView = shoppingCartView;
        this.products = products;
        this.getShoppingCartFromCache();    
        if (loadSummary) {
            this.generateCartSummary()
        }
    }

    generateCartSummary = () => {
        this.shoppingCartView.generateCartSummary(this.shoppingCartModel.state.products, this.shoppingCartModel.state.totalPrice);
        this.shoppingCartView.bindDecreaseButtons((type, productId) => this.handleProductAmountChanged(type, productId));
        this.shoppingCartView.bindIncreaseButtons((type, productId) => this.handleProductAmountChanged(type, productId));
    }

    handleProductAmountChanged = (type, productId) => {
        if (type === "decrease") {
            const newAmount = this.shoppingCartModel.updateProductAmount(type, productId);
            if (newAmount === 0) {
                this.shoppingCartModel.removeProduct(productId);
            }
        }
        else if (type === "increase") {
            this.shoppingCartModel.updateProductAmount(type, productId);
        }

        this.cacheShoppingCart();
        this.updateShoppingCart();
        this.generateCartSummary();
    }

    getShoppingCartFromCache = () => {
        const items = localStorage.getItem("shoppingCart");
        let parsedItems = null;
        if (items != null) {
       
            parsedItems = tryJsonParse(items);
            if (Object.keys(parsedItems)?.length > 0 ){
                console.log(parsedItems);
                this.shoppingCartView.toggleActivateCart(true);
            }
            this.shoppingCartModel.setProducts({... parsedItems});
            this.shoppingCartView.updateCartCounter(this.shoppingCartModel.state.itemsCount)
            return;
        }
    }

    cacheShoppingCart = () => {
        const items = this.shoppingCartModel.getProducts();
        if (items != null){
            if ( Object.values(items)?.length > 0 ) {
                this.shoppingCartView.toggleActivateCart(true);
            }
            else {
                this.shoppingCartView.toggleActivateCart(false);
            }

            const stringifiedItems = tryJsonStringify(items);
            localStorage.setItem("shoppingCart", stringifiedItems);
            return;
        }
    }

    updateShoppingCart = (product) => {
        this.getShoppingCartFromCache();
        if (product) {
            this.shoppingCartModel.updateProducts(product);
        }
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