export class ProductModel {
    constructor() {
        this.state = {
            products: [],
            categories: []
        };
    }
    
    setProducts = (products) => {
        this.state.products = products;
    }

    setCategories = (categories) => {
        categories?.forEach(categoryItem => this.state.categories[categoryItem.catId] = {... categoryItem, count: 0}); 
    }
    
    getCategories = () => {
        return Object.values(this.state.categories);
    }

    updateCategoriesCount = () => {
        this.state.products.forEach(productItem => {
            if (productItem.catId && this.state.categories[productItem.catId]) {
                this.state.categories[productItem.catId].count++;
            }
        });
    }

}