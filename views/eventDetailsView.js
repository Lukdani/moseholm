// Class to handle render of the event detail page;

import { createElement } from "../utils/createElement.js";
import { formatCurrency } from "../utils/formatCurrency.js";
import { formatDate } from "../utils/formatDate.js";
import { insertLineBreak } from "../utils/insertLineBreaks.js";

export class EventDetailsView {
  constructor(rootElement, commentsRoot) {
    this.rootElement = rootElement;
    this.commentsRoot = commentsRoot;
  }

  renderEvent = (event) => {
    if (event) {
      const eventContainer = createElement(
        "div",
        ["col-12", `col-lg-${this.widthOnLarge}`, "event-container"],
        null
      );
      const eventElement = createElement("div", ["eventDetails-item"], null);
      eventContainer.appendChild(eventElement);

      // IMAGE;
      const eventImage = createElement(
        "div",
        ["eventDetails-item-image"],
        null
      );
      eventImage.style.backgroundImage = `url(/moseholm/images/events/${event.eventImageName}.png)`;
      eventElement.appendChild(eventImage);

      // DATE;
      const dateContainer = createElement(
        "div",
        ["eventDetails-item-details", "overlay", "overlay--primary"],
        null
      );
      eventImage.appendChild(dateContainer);

      const eventDate = createElement(
        "p",
        ["eventDetails-item-date", "overlay-text"],
        null
      );
      const eventDateIcon = createElement(
        "i",
        ["fas", "fa-calendar-week"],
        null
      );
      eventDate.appendChild(eventDateIcon);
      const eventDateText = createElement("span", null, null);
      eventDateText.textContent = formatDate(event.eventDate, true);
      eventDate.appendChild(eventDateText);
      dateContainer.appendChild(eventDate);

      // EVENT TITLE;
      const headerContainer = createElement(
        "div",
        ["eventDetails-item-header", "overlay", "overlay--primary"],
        null
      );
      eventImage.appendChild(headerContainer);

      const eventTitle = createElement(
        "h3",
        ["eventDetails-item-title", "overlay-text"],
        null
      );
      eventTitle.textContent = event.eventTitle;
      headerContainer.appendChild(eventTitle);

      // EVENT DESCRIPTION;
      const detailsContainer = createElement(
        "div",
        ["eventDetails-item-details", "overlay", "overlay--primary"],
        null
      );
      eventImage.appendChild(detailsContainer);

      const eventDescription = createElement("p", ["overlay-text"], null);
      eventDescription.innerHTML = insertLineBreak(event.eventDescription);
      headerContainer.appendChild(eventDescription);

      // EVENT PRICE;
      const eventPrice = createElement(
        "p",
        ["eventDetails-item-price", "overlay-text"],
        null
      );
      eventPrice.textContent = `${formatCurrency(event.eventPrice)} kr.`;
      detailsContainer.appendChild(eventPrice);

      // SIGN UP BUTTON;
      const enrollButton = createElement(
        "button",
        ["btn", "btn-primary"],
        null
      );
      enrollButton.textContent = "Tilmeld dig nu";
      eventImage.appendChild(enrollButton);

      this.rootElement.appendChild(eventContainer);
    }
  };

  renderComments = (comments) => {
    // DISPLAY OF COMMENTS;
    if (comments && comments.length > 0) {
      this.commentsRoot.innerHTML = "";
      comments.forEach((commentItem) => {
        const eventCommentContainer = createElement(
          "div",
          ["col-12", "eventComments-container"],
          null
        );
        const eventCommentElement = createElement(
          "div",
          ["eventComment-item"],
          null
        );
        eventCommentContainer.appendChild(eventCommentElement);

        const eventCommentDate = createElement(
          "p",
          ["eventComment-item-date"],
          null
        );
        eventCommentDate.textContent = formatDate(
          new Date(commentItem.ecomDate).toString(),
          true
        );
        eventCommentElement.appendChild(eventCommentDate);

        const eventCommentAuthor = createElement(
          "p",
          ["eventComment-item-author"],
          null
        );

        const eventCommentAuthorPrefix = createElement("span", null, null);
        eventCommentAuthorPrefix.textContent = "Skrevet af ";
        eventCommentAuthor.appendChild(eventCommentAuthorPrefix);

        const eventCommentAuthorName = createElement(
          "span",
          ["eventComent-item-author-name"],
          null
        );
        eventCommentAuthorName.textContent = `${commentItem.ecomAuthor}`;

        eventCommentAuthor.appendChild(eventCommentAuthorName);
        eventCommentElement.appendChild(eventCommentAuthor);

        const eventComment = createElement(
          "p",
          ["eventComment-item-comment"],
          null
        );
        eventComment.textContent = commentItem.ecomComment;
        eventCommentElement.appendChild(eventComment);

        this.commentsRoot.appendChild(eventCommentContainer);
      });
    }
  };

  // Method to clear the form to post comments;
  clearForm = () => {
    const nameInput = document.getElementById(
      "eventDetails-commentForm-author"
    );
    nameInput.value = "";
    const commentInput = document.getElementById(
      "eventDetails-commentForm-comment"
    );
    commentInput.value = "";
  };

  bindFormSubmit = (callback) => {
    const form = document.getElementById("eventDetails-commentForm");
    form.addEventListener("submit", (e) => {
      // Preventing default to hinder page reload;
      e.preventDefault();
      callback(e);
    });
  };

  bindInputChange = (callback) => {
    const inputs = document.querySelectorAll(".form-control");
    if (inputs && inputs.length > 0) {
      inputs.forEach((inputElement) => {
        inputElement.addEventListener("input", (e) => {
          callback(e.target.name, e.target.value);
        });
      });
    }
  };
}
