import {
    ShoppingCartController
} from "../controllers/shoppingCartController.js";
import {
    ShoppingCartModel
} from "../models/shoppingCartModel.js";
import {
    ShoppingCartView
} from "../views/shoppingCartView.js";

const shoppingCartContainer = document.getElementById("shoppingCartContainer");
const shoppingCartCountRoot = document.getElementById("shoppingCartCount");
const shoppingCartRoot = document.getElementById("shoppingCart");

const shoppingCartModel = new ShoppingCartModel();
const shoppingCartView = new ShoppingCartView(shoppingCartContainer, shoppingCartCountRoot, shoppingCartRoot);
const shoppingCartController = new ShoppingCartController(shoppingCartModel, shoppingCartView, null, true);