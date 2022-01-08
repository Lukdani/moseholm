import { localizedStrings } from "../localization/localization.js";

export class LocalizationService {
    constructor() {
        this.localizedStrings = localizedStrings;

        this.selectedLanguage = localStorage.getItem("lang") || "da";
        console.log(this.selectedLanguage);
        this.activeLanguageButton = document.querySelector(`.languageButton[data-lang="${this.selectedLanguage || "da"}"]`);
       
        this.languageButtons = document.querySelectorAll(".languageButton");

        this.changeLanguage(this.selectedLanguage, this.activeLanguageButton);
    }

    changeLanguage = (selectedLanguage, clickedLanguageButton) => {
        this.languageButtons.forEach(langButton => langButton.classList.remove("languageButton--selected"));
        this.selectedLanguage = selectedLanguage;
        this.activeLanguageButton = clickedLanguageButton;
        localStorage.setItem("lang", selectedLanguage);

        this.activeLanguageButton.classList.toggle("languageButton--selected");
    

        const itemsToTranslate = document.querySelectorAll("[data-translationkey]");
        itemsToTranslate?.forEach(translatedElement => {
          const translationKey = translatedElement.getAttribute("data-translationkey");
          try {
            translatedElement.textContent = localizedStrings[translationKey][selectedLanguage]
          }
          catch(err) {
            console.log("The passed translation key was not found in the dictionary");
            console.log(err);
          }
        })
      }

      bindLanguageButtons = () => {
        this.languageButtons?.forEach(languageButtonElement => {
            const selectedLanguage = languageButtonElement.getAttribute("data-lang");
            languageButtonElement.addEventListener("click", () => this.changeLanguage(selectedLanguage, languageButtonElement))
          })
      }
    
}