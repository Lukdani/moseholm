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

      const eventImage = createElement(
        "div",
        ["eventDetails-item-image"],
        null
      );
      eventImage.style.backgroundImage = `url(/moseholm/images/events/${event.eventImageName})`;
      eventElement.appendChild(eventImage);

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

      const detailsContainer = createElement(
        "div",
        ["eventDetails-item-details", "overlay", "overlay--primary"],
        null
      );
      eventImage.appendChild(detailsContainer);

      const eventDescription = createElement("p", ["overlay-text"], null);
      eventDescription.innerHTML = insertLineBreak(event.eventDescription);
      headerContainer.appendChild(eventDescription);

      const eventPrice = createElement(
        "p",
        ["eventDetails-item-price", "overlay-text"],
        null
      );
      eventPrice.textContent = `${formatCurrency(event.eventPrice)} kr.`;
      detailsContainer.appendChild(eventPrice);

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
        eventCommentAuthor.textContent = `Skrevet af ${commentItem.ecomAuthor}`;
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
