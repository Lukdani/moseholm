import { GameController } from "../controllers/GameController.js";
import { GameModel } from "../models/GameModel.js";
import { GameView } from "../views/GameView.js";


const gameModel = new GameModel();
const gameView = new GameView();

const gameController = new GameController(gameModel, gameView);