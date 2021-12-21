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

    getProducts = () => this.state.products;
}