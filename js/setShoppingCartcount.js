import { ShoppingCartController } from "../controllers/shoppingCartController.js";
import { ShoppingCartModel } from "../models/shoppingCartModel.js";
import { ShoppingCartView } from "../views/shoppingCartView.js";

const shoppingCartCountRoot = document.getElementById("shoppingCartCount");
const shoppingCartModel = new ShoppingCartModel();
const shoppingCartView = new ShoppingCartView(null, shoppingCartCountRoot);
const shoppingCartController = new ShoppingCartController(shoppingCartModel, shoppingCartView);
