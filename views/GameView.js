import { createElement } from "../utils/createElement.js";

export class GameView {
  constructor() {
    this.rootElement = document.getElementById("eggGame-container");
    this.gameIndicatorRoot = document.getElementById("eggGame-indicators");
  }

  renderEmptyBoard = (numberOfItems) => {
    if (numberOfItems > 0) {
      this.rootElement.innerHTML = "";

      const iconsRow = createElement("div", ["row", "g-2"], null);
      this.rootElement.appendChild(iconsRow);

      for (let index = 0; index < numberOfItems; index++) {
        const iconCol = createElement("div", ["col-4"], null);
        iconsRow.appendChild(iconCol);

        const iconButton = createElement(
          "button",
          ["btn", "eggGame-button", "iconButtonDecoy"],
          null
        );
        iconButton.disabled = true;

        const decoyIcon = createElement(
          "i",
          ["fas", "fa-question", "iconButton-decoyIcon"],
          null
        );
        iconButton.appendChild(decoyIcon);

        iconCol.appendChild(iconButton);
      }
    }
  };

  renderIcons = (icons, buttonCallback) => {
    if (icons?.length > 0) {
      this.rootElement.innerHTML = "";

      const iconsRow = createElement("div", ["row", "g-2"], null);
      this.rootElement.appendChild(iconsRow);

      icons.forEach((iconItem) => {
        const iconCol = createElement("div", ["col-4"], null);
        iconsRow.appendChild(iconCol);

        const iconButton = createElement(
          "button",
          ["btn", "eggGame-button"],
          null
        );
        iconButton.disabled = true;
        iconButton.setAttribute("data-eggkey", iconItem.key);
        iconCol.appendChild(iconButton);
        const icon = createElement(
          "i",
          ["fas", iconItem.icon, "iconButton-icon"],
          null
        );
        iconButton.appendChild(icon);

        const decoyIcon = createElement(
          "i",
          ["fas", "fa-question", "iconButton-decoyIcon"],
          null
        );
        iconButton.appendChild(decoyIcon);

        iconButton.addEventListener("click", () =>
          this.handleClickIconButton(iconItem.key, buttonCallback)
        );
      });
    }
  };

  displayGamePanel = () => {
    const gamePanel = document.getElementById("gamePanel");
    gamePanel.style["visibility"] = "visible";
  };

  displayRunningTroll = () => {
    let direction = "right";
    const prevGoblin = document.getElementById("eggGame-goblin");
    if (prevGoblin) prevGoblin.remove();

    const goblinImage = createElement(
      "img",
      ["eggGame-goblin"],
      "eggGame-goblin"
    );
    this.rootElement.appendChild(goblinImage);
    goblinImage.src = "/moseholm/images/skovnisse.png";
    let prevLeft = Math.floor(Math.random() * this.rootElement.clientWidth);
    let prevTop = Math.floor(Math.random() * this.rootElement.clientHeight);
    goblinImage.style.left = `${prevLeft}px`;
    goblinImage.style.top = `${prevTop}px`;

    const runningAnimation = () => {
      if (
        prevLeft + goblinImage.clientWidth >= this.rootElement.clientWidth ||
        prevLeft <= 0
      ) {
        direction = direction === "right" ? "left" : "right";
        prevLeft = 0;
        if (direction === "right") {
          goblinImage.style.right = "unset";
        } else if (direction === "left") {
          goblinImage.style.left = "unset";
        }
        goblinImage.style.transform = `rotateY(${
          direction === "right" ? "0deg" : "180deg"
        })`;
      }
      if (prevTop >= this.rootElement.clientHeight || prevTop <= 0) {
        prevTop = Math.floor(Math.random() * this.rootElement.clientHeight);
      }
      prevLeft = prevLeft + 30;
      prevTop = Math.random(0, 1) > 0.5 ? prevTop + 3 : prevTop - 3;
      direction === "right"
        ? (goblinImage.style.left = `${prevLeft}px`)
        : (goblinImage.style.right = `${prevLeft}px`);

      goblinImage.style.top = `${prevTop}px`;
      goblinImage.style.opacity = Math.random(0, 1);
    };

    const animationInterval = setInterval(runningAnimation, 125);

    setTimeout(() => {
      clearInterval(animationInterval);
      const prevGoblin = document.getElementById("eggGame-goblin");
      if (prevGoblin) prevGoblin.remove();
    }, 2000);
  };

  handleClickIconButton = (iconItem, callBack) => {
    callBack(iconItem);
  };

  renderDecoys = () => {
    const iconButtons = document.querySelectorAll(".eggGame-button");
    iconButtons?.forEach((iconButton, index) => {
      setTimeout(() => {
        iconButton.classList.add("iconButtonDecoy");
        iconButton.disabled = false;
      }, index * 100);
    });
  };

  renderInstructions = () => {
    const gameBoard = document.getElementById("eggGame-container");
    if (gameBoard) {
      const eggGameOverlay = createElement(
        "div",
        null,
        "eggGame-container-overlay"
      );
      gameBoard.appendChild(eggGameOverlay);

      const instructionsContainer = createElement(
        "div",
        null,
        "eggGame-instructions"
      );
      eggGameOverlay.appendChild(instructionsContainer);

      const startGameImg = createElement("img", null, null);
      startGameImg.src = "/moseholm/images/skovnisse.png";
      startGameImg.alt = "Et billede af den fr??kke skovnisse";
      instructionsContainer.appendChild(startGameImg);

      const instructionsHeader = createElement("h3", null, null);
      instructionsHeader.textContent = "Hj??lp moster Oda!";
      instructionsContainer.appendChild(instructionsHeader);

      const instructions = createElement("p", null, null);
      instructions.innerHTML =
        "Den fr??kke skov-nisse har skjult Moster Odas ??g.<br>L??g m??rke til, hvor nissen har gemt ??ggene, og pr??v s?? at finde dem.";
      instructionsContainer.appendChild(instructions);
    }
  };

  disableIconButtons = () => {
    const iconButtons = document.querySelectorAll(".eggGame-button");
    iconButtons?.forEach((iconButton) => {
      iconButton.disabled = true;
    });
  };

  turnIconButton = (iconKey) => {
    const clickedButton = document.querySelector(
      `.eggGame-button[data-eggkey='${iconKey}']`
    );
    if (clickedButton) {
      clickedButton.classList?.remove("iconButtonDecoy");
      clickedButton.disabled = true;
    }
  };

  updateTriesLeft = (tries) => {
    const triesLeft = document.getElementById("triesLeftIndicator");
    if (triesLeft) {
      triesLeft.textContent = tries;
    }
  };

  updateTargetsFound = (foundItems) => {
    const targetsFound = document.getElementById("targetsFoundIndicator");
    if (targetsFound) {
      targetsFound.textContent = `${foundItems}/3`;
    }
  };

  renderStartGameButton = (buttonText) => {
    const gameBoard = document.getElementById("eggGame-container-overlay");
    if (gameBoard) {
      const button = createElement(
        "button",
        ["btn", "btn-primary", "mt-2"],
        "startGameButton"
      );
      gameBoard.appendChild(button);

      const startGameText = createElement("span", null, null);
      startGameText.textContent = buttonText || "Begynd";
      button.appendChild(startGameText);
    }
  };

  bindStartGameButton = (callback) => {
    const button = document.getElementById("startGameButton");
    if (button) {
      button.addEventListener("click", callback);
    }
  };

  displayGameWon = () => {
    const gameBoard = document.getElementById("eggGame-container");
    const eggGameOverlay = createElement(
      "div",
      null,
      "eggGame-container-overlay"
    );
    gameBoard.appendChild(eggGameOverlay);

    const gameWon = createElement("span", null, "gameWonIndicator");
    eggGameOverlay.appendChild(gameWon);

    const gameWonIcon = createElement("i", ["fas", "fa-award"], null);
    gameWon.appendChild(gameWonIcon);

    const gameWonText = createElement("span", null, null);
    gameWonText.innerHTML = "Flot!<br> Du fandt alle Moster Odas ??g!";

    gameWon.appendChild(gameWonText);

    const targets = document.querySelectorAll(".fa-egg");

    targets?.forEach((targetItem) => {
      targetItem.classList.add("highlight-iconButton-icon");
    });
    this.renderStartGameButton("Spil igen");
  };

  displayGameLost = () => {
    const gameBoard = document.getElementById("eggGame-container");
    const eggGameOverlay = createElement(
      "div",
      null,
      "eggGame-container-overlay"
    );
    gameBoard.appendChild(eggGameOverlay);

    const gameLost = createElement("span", null, "gameLostIndicator");
    eggGameOverlay.appendChild(gameLost);

    const gameLostIcon = createElement("i", ["fas", "fa-sad-cry"], null);
    gameLost.appendChild(gameLostIcon);

    const gameLostText = createElement("span", null, null);
    gameLostText.innerHTML = "Desv??rre!<br>Nissen havde gemt ??ggene for godt.";

    gameLost.appendChild(gameLostText);

    const targets = document.querySelectorAll(".fa-egg");

    targets?.forEach((targetItem) => {
      const button = targetItem.closest("button");
      button.classList.remove("iconButtonDecoy");
      targetItem.classList.add("highlight-iconButton-icon");
    });
    this.renderStartGameButton("Pr??v igen");
  };
}
