export class ProductModel {
    constructor() {
        this.state = {products: []};
    }

    setProducts = (products) => {
        this.state.products = products;
        this.state.categories = Array.from(new Set(this.state.products.map(categoryItem => categoryItem.category)));
    }
}