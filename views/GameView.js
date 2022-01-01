import { createElement } from "../utils/createElement.js";

export class GameView {
  constructor() {
    this.rootElement = document.getElementById("eggGame-container");
    this.gameIndicatorRoot = document.getElementById("eggGame-indicators");
  }

  renderEmptyBoard = (numberOfItems) => {
    if (numberOfItems > 0) {
      console.log(numberOfItems)
      this.rootElement.innerHTML = "";

      const iconsRow = createElement("div", ["row", "g-2"], null);
      this.rootElement.appendChild(iconsRow);

      for (let index = 0; index < numberOfItems; index++) {
        const iconCol = createElement("div", ["col-4"], null);
        iconsRow.appendChild(iconCol);

        const iconButton = createElement("button", ["btn", "eggGame-button", "iconButtonDecoy"], null);
        iconButton.disabled = true;

        const decoyIcon = createElement("i", ["fas", "fa-question", "iconButton-decoyIcon"], null)
        iconButton.appendChild(decoyIcon);

        iconCol.appendChild(iconButton);
      };
    }
  }

  renderIcons = (icons, buttonCallback) => {
    if (icons?.length > 0) {
      this.rootElement.innerHTML = "";

      const iconsRow = createElement("div", ["row", "g-2"], null);
      this.rootElement.appendChild(iconsRow);

      icons.forEach((iconItem) => {

        const iconCol = createElement("div", ["col-4"], null);
        iconsRow.appendChild(iconCol);

        const iconButton = createElement("button", ["btn", "eggGame-button"], null);
        iconButton.disabled = true;
        iconButton.setAttribute("data-eggkey", iconItem.key);
        iconCol.appendChild(iconButton);
        const icon = createElement("i", ["fas", iconItem.icon, "iconButton-icon"], null);
        iconButton.appendChild(icon);

        const decoyIcon = createElement("i", ["fas", "fa-question", "iconButton-decoyIcon"], null)
        iconButton.appendChild(decoyIcon);

        iconButton.addEventListener("click", () => this.handleClickIconButton(iconItem.key, buttonCallback));
      });
    }
  };

  renderGamePanel = () => {
    this.gameIndicatorRoot.innerHTML = "";
    const gamePanel = createElement("div", null, "gamePanel");
    this.gameIndicatorRoot.appendChild(gamePanel);

    // TRIES LEFT;
    const triesLeftContainer = createElement("span", ["gamePanel-item"], "triesLeftIndContainericatorContainer");
    gamePanel.appendChild(triesLeftContainer);

    const triesLeftLabel = createElement("span", null, null);
    triesLeftLabel.textContent = "Forsøg tilbage:"
    triesLeftContainer.appendChild(triesLeftLabel);

    const triesLeftIndicator = createElement("span", ["gamePanel-item-counter"], "triesLeftIndicator");
    triesLeftContainer.appendChild(triesLeftIndicator);

    // FOUND TARGETS;

    const foundTargetsContainer = createElement("span", ["gamePanel-item"], "triesLeftIndContainericatorContainer");
    gamePanel.appendChild(foundTargetsContainer);

    const foundTargetsLabel = createElement("span", null, null);
    foundTargetsLabel.textContent = "Fundne æg:"
    foundTargetsContainer.appendChild(foundTargetsLabel);
    const targetsFoundIndicator = createElement("span", ["gamePanel-item-counter"], "targetsFoundIndicator");
    foundTargetsContainer.appendChild(targetsFoundIndicator);
  }

  handleClickIconButton = (iconItem, callBack) => {
    callBack(iconItem);
  }

  renderDecoys = () => {
    const iconButtons = document.querySelectorAll(".eggGame-button");
    iconButtons?.forEach((iconButton, index) => {
      console.log(iconButton);
      iconButton.disabled = false;
      setTimeout(() => {
        iconButton.classList.add("iconButtonDecoy");
      }, index * 100);
      
    })
  }

  disableIconButtons = () => {
    const iconButtons = document.querySelectorAll(".eggGame-button");
    iconButtons?.forEach((iconButton) => {
    iconButton.disabled = true;
    })
  }

  turnIconButton = (iconKey) => {
    const clickedButton = document.querySelector(`.eggGame-button[data-eggkey='${iconKey}']`);
    if (clickedButton) {
      clickedButton.classList?.remove("iconButtonDecoy");
      clickedButton.disabled = true;
    }
  }

  updateTriesLeft = (tries) => {
    const triesLeft = document.getElementById("triesLeftIndicator");
    if (triesLeft) {
      triesLeft.textContent = tries;
    }
  }

  updateTargetsFound = (foundItems) => {
    const targetsFound = document.getElementById("targetsFoundIndicator");
    if (targetsFound) {
      targetsFound.textContent = foundItems;
    }
  }

  renderStartGameButton = (buttonText) => {
    const button = createElement("button", ["btn", "btn-primary", "mt-2"], "startGameButton");
    this.gameIndicatorRoot.appendChild(button);

    const startGameIcon = createElement("i", ["fas", "fa-search"], null);
    button.appendChild(startGameIcon);

    const startGameText = createElement("span", null, null);
    startGameText.textContent = buttonText || "Begynd";
    button.appendChild(startGameText);
  }

  bindStartGameButton = (callback) => {
    const button = document.getElementById("startGameButton");

    if (button) {
      button.addEventListener("click", callback)
    }
  }

  displayGameWon = () => {
    const gameWon = createElement("span", null, "gameWonIndicator");
    this.gameIndicatorRoot.appendChild(gameWon);

    const gameWonIcon = createElement("i", ["fas", "fa-award"], null);
    gameWon.appendChild(gameWonIcon);

    const gameWonText = createElement("span", null, null);
    gameWonText.textContent = "Tillykke - du fandt alle Moster Odas æg!"

    gameWon.appendChild(gameWonText);

    const targets = document.querySelectorAll(".fa-egg");

    targets?.forEach(targetItem => {
      targetItem.classList.add("highlight-iconButton-icon")
    })
    this.renderStartGameButton("Prøv igen");
  }

  displayGameLost = () => {
    const gameLost = createElement("span", null, "gameLostIndicator");
    this.gameIndicatorRoot.appendChild(gameLost);

    const gameLostIcon = createElement("i", ["fas", "fa-sad-cry"], null);
    gameLost.appendChild(gameLostIcon);

    const gameLostText = createElement("span", null, null);
    gameLostText.textContent = "Desværre - nissen havde gemt æggene for godt."

    gameLost.appendChild(gameLostText);

    const targets = document.querySelectorAll(".fa-egg");

    targets?.forEach(targetItem => {
      const button = targetItem.closest("button")
      console.log(button)
      button.classList.remove("iconButtonDecoy");
      targetItem.classList.add("highlight-iconButton-icon")
    })
    this.renderStartGameButton("Prøv igen");
  }

}
