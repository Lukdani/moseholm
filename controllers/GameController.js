export class GameController {
  constructor(gameModel, gameView) {
    this.gameModel = gameModel;
    this.gameView = gameView;
    this.gameView.renderStartGameButton();
    this.gameView.bindStartGameButton(this.startGame);
    this.gameView.renderEmptyBoard(9);
  }

  startGame = () => {
    const icons = this.gameModel.startGame();
    this.gameView.renderGamePanel();
    this.gameView.updateTriesLeft(this.gameModel.getTriesLeft());
    this.gameView.updateTargetsFound(this.gameModel.getTargetsFound());
    this.gameView.renderIcons(icons, this.handleIconButtonClicked);

   setTimeout(() => {
      this.gameView.renderDecoys(this.gameModel.getPendingIcons());
    }, 2000);
    
  };

  registerTurn = (icon) => {
    if (!this.gameModel.getTriesLeft() > 0){
      return;
    }
    this.gameModel.expiditeIcon(icon);
    this.gameView.turnIconButton(icon);
    this.gameView.updateTriesLeft(this.gameModel.getTriesLeft());
    this.gameView.updateTargetsFound(this.gameModel.getTargetsFound());

    if (this.gameModel.gameWon()) {
      this.gameView.displayGameWon();
      this.gameView.disableIconButtons();
      this.gameView.bindStartGameButton(this.startGame);
    }
    else if (this.gameModel.gameOver()) {
      this.gameView.disableIconButtons();
      this.gameView.displayGameLost();
      this.gameView.bindStartGameButton(this.startGame);
    }
  };

  handleIconButtonClicked = (iconItem) => {
    this.registerTurn(iconItem);
  }

  endGame = () => {};
}
