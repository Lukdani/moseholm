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

        if (this.categoryFilter?.length > 0 ) {
            this.productView.displayFilterButton(true);
        }

        this.productView.bindCategoryButton(this.setFilter);
        this.productView.bindResetFilterButton(this.deselectCategories);
    }

    deselectCategories = () => {
        this.productView.clearCategorySelection();
        this.productView.displayFilterButton(false);
        this.categoryFilter = [];
        this.populateProducts();
    }

    populateProducts = async () => {
        this.setSpinner(true);
        const fetchtedProducts =  await fetchJsonApi(`/moseholm/api/getProducts.php${this.categoryFilter?.length > 0 ? "?categories=" + this.categoryFilter.join(",") : ""}`);
        this.setSpinner(false);
        this.productModel.setProducts(fetchtedProducts);
        this.productView.renderProducts(this.productModel.state.products);

    }

    setFilter = (filter) => {
       this.categoryFilter = updateList(this.categoryFilter, filter);
       this.productView.displayFilterButton(this.categoryFilter?.length > 0);
       this.populateProducts();
    }

    setSpinner = show => {
        const spinner = document.getElementById("productSpinner");

        if (show && !spinner.classList.contains("shown")) {

            spinner.classList.toggle("shown");
            if (spinner.classList.contains("hidden")) {
                spinner.classList.remove("hidden")
            }
            console.log(spinner.classList);
        }
        else if (!show && !spinner.classList.contains("hidden")) {
            spinner.classList.toggle("hidden");
            if (spinner.classList.contains("shown")) {
                spinner.classList.remove("shown")
            }
        }
    }

}