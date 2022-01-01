import { randomizeArray } from "../utils/randomizeArray.js";

const icons = [
  {
    label: "egg",
    icon: "fa-egg",
    key: 0,
    amount: 3,
  },
  {
    label: "cat",
    icon: "fa-cat",
    key: 1,
    amount: 2,
  },
  {
    label: "chess",
    icon: "fa-chess",
    key: 2,
    amount: 2,
  },
  {
    label: "couch",
    icon: "fa-couch",
    key: 3,
    amount: 2,
  },
];

const initialState = {
  pendingIcons: [],
  expeditedIcons: [],
  triesLeft: 5,
  requiredToWin: 3,
  targetsFound: 0,
  target: "egg",
  timeStarted: null,
  timeEnded: null,
  gameOver: false,
  gameStarted: false,
  gameWon: null,
};

export class GameModel {
  constructor() {
    this.resetGame();
  }

  setPendingIcons = () => {
    const computedIcons = [];
    icons.forEach((icon) => {
      for (let index = 0; index < icon.amount; index++) {
        computedIcons.push({ ...icon, key: `${icon.label}-${index}`, turned: false });
      }
    });
    this.state.pendingIcons = randomizeArray(computedIcons);
  };

  getPendingIcons = () => this.state.pendingIcons;

  incrementTries = () => {
    this.state.tries++;
    this.state.triesLeft > 0 ? this.state.triesLeft-- : 0;
  };

  getTriesLeft = () => this.state.triesLeft;

  getTargetsFound = () => this.state.targetsFound;


  gameWon = () => this.state.targetsFound === this.state.requiredToWin;
  gameOver = () => this.state.triesLeft === 0;

  timeUsed = () => {
    this.state.timeEnded - this.state.timeStarted;
  }

  startGame = () => {
    this.resetGame();
    this.state.timeStarted = new Date();
    this.setPendingIcons();
    this.state.gameStarted = true;
    return this.getPendingIcons();
  }

  expiditeIcon = (iconKey) => {
    const clickedIcon = this.state.pendingIcons.find(iconElement => iconElement.key === iconKey);
    clickedIcon.turned = true;
    if (clickedIcon.label === this.state.target) {
      this.state.targetsFound = this.state.targetsFound+ 1;
    }
    this.state.triesLeft = this.state.triesLeft > 0 ? this.state.triesLeft -1 : 0;
    iconKey.label === this.state.target ? targetsFound++ : null  
  }
  
  endGame = () => {
    this.gameOver = true;
    return this.state.targetsFound === this.state.requiredToWin ? true : false;
  }

  resetGame = () => {
    this.state = { ...initialState, pendingIcons: [], expeditedIcons: [] };
  }
}
