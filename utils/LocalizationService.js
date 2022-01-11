import { localizedStrings } from "/moseholm/localization/localization.js";

export class LocalizationService {
  constructor() {
    // The object with localized strings;
    this.localizedStrings = localizedStrings;

    // If no language setting was found in local storage, default to "da";
    this.selectedLanguage = localStorage.getItem("lang") || "da";

    // Identify the language button that should be set to active;
    // Needed to call the changeLanguage method in the end of the constructor;
    this.activeLanguageButton = document.querySelector(
      `.languageButton[data-lang="${this.selectedLanguage || "da"}"]`
    );

    this.languageButtons = document.querySelectorAll(".languageButton");

    // Initialize translation;
    this.changeLanguage(this.selectedLanguage, this.activeLanguageButton);
  }

  // Method to find all elements with an translation key and find their pairing string in the object of localized strings;
  changeLanguage = (selectedLanguage, clickedLanguageButton) => {
    // Setting active view on relevant language button;
    this.languageButtons.forEach((langButton) =>
      langButton.classList.remove("languageButton--selected")
    );
    this.selectedLanguage = selectedLanguage;
    this.activeLanguageButton = clickedLanguageButton;
    localStorage.setItem("lang", selectedLanguage);

    this.activeLanguageButton.classList.toggle("languageButton--selected");

    // Find all elements with a translation key;
    const itemsToTranslate = document.querySelectorAll("[data-translationkey]");

    // For each found element, find the pairing localized string;
    itemsToTranslate?.forEach((translatedElement) => {
      const translationKey = translatedElement.getAttribute(
        "data-translationkey"
      );
      try {
        translatedElement.textContent =
          localizedStrings[translationKey][selectedLanguage];
      } catch (err) {
        console.log(
          "The passed translation key was not found in the dictionary"
        );
        console.log(err);
      }
    });
  };

  // Method used to activate buttons to toggle language;
  bindLanguageButtons = () => {
    this.languageButtons?.forEach((languageButtonElement) => {
      const selectedLanguage = languageButtonElement.getAttribute("data-lang");
      languageButtonElement.addEventListener("click", () =>
        this.changeLanguage(selectedLanguage, languageButtonElement)
      );
    });
  };
}
