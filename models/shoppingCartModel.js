import { formatCurrency } from "../utils/formatCurrency.js";

export class ShoppingCartModel {
    constructor() {
        this.state = {
            products: {},
            itemsCount: 0,
            totalPrice: 0,
            shippingInfo: {
                name: "",
                email: "",
                address: ""
            }
        }
    }

    setProducts = (products) => {
        this.state.products = products;
        this.state.itemsCount = Object.values(this.state.products)?.reduce(
            (total, currentProduct) => {
                const currentCount = currentProduct?.count || 0;
                return total + currentCount;
            }, 0);

            this.state.totalPrice = Object.values(this.state.products)?.reduce(
                (total, currentProduct) => {
                    const currentCount = (currentProduct?.count || 0) * currentProduct.product.prodPrice;
                    return +total + currentCount
                }, 0);
    }
    updateProducts = (product) => {
        if (!this.state.products[product.prodId]) {
            this.state.products[product.prodId] = {product: {...product}, count: 1};
            this.state.itemsCount++;
            return;
        }
        this.state.itemsCount++;
        this.state.products[product.prodId].count++;
    }

    updateProductAmount = (type, productId) => {
        if (type === "decrease") {
            const product = this.state.products[productId];
            if (product?.count > 0) {
                product.count--;
                return product.count;
            }
        }
        else if (type === "increase") {
            const product = this.state.products[productId];
            if (product && product.count != null) {
                product.count++;
                return product.count;
            }
        }
    }

    removeProduct = (productId) => {
        console.log(Object.keys(this.state.products).length < 2)
        if (Object.keys(this.state.products).length < 2) {
            this.state.products = {};
            console.log(this.state.products)
            return;
        }
        delete this.state.products[productId];
    }

    getProducts = () => this.state.products;
}