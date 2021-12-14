import { fetchJsonApi } from "../utils/fetchJsonApi.js";
import { updateList } from "../utils/updateList.js";

export class ProductController {
    constructor(productModel, productView) {
        this.productModel = productModel;
        this.productView = productView;
        this.categoryFilter = [];

        const queryParams = new URLSearchParams(window.location.search);
        const parameters = Object.fromEntries(queryParams.entries()).categories;
        const listOfCategories = parameters?.split(",");
        if (listOfCategories?.length > 0 ) {
            listOfCategories.forEach(categoryItem => this.categoryFilter.push(categoryItem));
        }

        this.populateCategories();
    }

    populateCategories = async () => {

        const categories =  await fetchJsonApi("/moseholm/api/getCategories.php");

        this.productView.renderCategories(categories, this.categoryFilter);
        this.productView.bindCategoryButton(this.setFilter);
    }

    populateProducts = async () => {
        const fetchtedProducts =  await fetchJsonApi(`/moseholm/api/getProducts.php${this.categoryFilter?.length > 0 ? "?categories=" + this.categoryFilter.join(",") : ""}`);

        this.productModel.setProducts(fetchtedProducts);
        
        this.productView.renderProducts(this.productModel.state.products);

    }

    setFilter = (filter) => {
       this.categoryFilter = updateList(this.categoryFilter, filter);
       this.populateProducts();
    }

}