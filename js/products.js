import { ProductController } from "../controllers/productController.js";
import { ProductModel } from "../models/productModel.js";
import { ProductsView } from "../views/productsView.js";

const categoryRoot = document.getElementById("categoriesContainer");
const productsRoot = document.getElementById("productsContainer");

const productsModel = new ProductModel();
const productsView = new ProductsView(categoryRoot, productsRoot)

const productsController = new ProductController(productsModel, productsView);