import { ShoppingCartController } from "../controllers/shoppingCartController.js";
import { ShoppingCartModel } from "../models/shoppingCartModel.js";
import { ShoppingCartView } from "../views/shoppingCartView.js";

const shoppingCartCountRoot = document.querySelectorAll(".shoppingCartCount");
const shoppingCartRoot = document.querySelectorAll(".shoppingCart");
const shoppingCartModel = new ShoppingCartModel();
const shoppingCartView = new ShoppingCartView(
  null,
  shoppingCartCountRoot,
  shoppingCartRoot
);
const shoppingCartController = new ShoppingCartController(
  shoppingCartModel,
  shoppingCartView
);
