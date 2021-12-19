import { createElement } from "../utils/createElement.js";
import { formatCurrency } from "../utils/formatCurrency.js";
import { formatDate } from "../utils/formatDate.js";
import { removeLineBreaks } from "../utils/removeLineBreaks.js";
import { truncateString } from "../utils/truncateString.js";

export class EventView {
  constructor(rootElement, widthOnLarge) {
    this.rootElement = rootElement;
    this.widthOnLarge = widthOnLarge;
  }

  renderEvents = (events) => {
    this.clearEvents();
    if (events?.length > 0) {
      events.forEach((eventItem) => {
        const eventContainer = createElement(
          "div",
          ["col-12", `col-lg-${this.widthOnLarge}`, "event-container"],
          null
        );
        const eventElement = createElement("div", ["event-item"], null);
        eventContainer.appendChild(eventElement);

        const flexItem = createElement("div", ["flexItem"], null);
        eventElement.appendChild(flexItem);
        const eventImage = createElement("img", ["event-item-image"], null);
        eventImage.src = `/moseholm/images/events/${eventItem.eventImageName}`;
        flexItem.appendChild(eventImage);

        const eventDate = createElement("p", ["event-item-date"], null);
        eventDate.textContent = formatDate(eventItem.eventDate, true);
        flexItem.appendChild(eventDate);

        const eventTitle = createElement("h3", ["event-item-title"], null);
        eventTitle.textContent = eventItem.eventTitle;
        flexItem.appendChild(eventTitle);

        const eventDescription = createElement("p", [
          "event-item-description",
          null,
        ]);
        eventDescription.textContent = truncateString(
          removeLineBreaks(eventItem.eventDescription),
          80 * this.widthOnLarge
        );
        flexItem.appendChild(eventDescription);

        const flexItem2 = createElement("div", ["flexItem"], null);
        eventElement.appendChild(flexItem2);
        const eventPrice = createElement("p", ["event-item-price", null]);
        eventPrice.textContent = `${formatCurrency(eventItem.eventPrice)} kr.`;
        flexItem2.appendChild(eventPrice);

        const eventLink = createElement(
          "a",
          ["event-item-link", "btn", "btn-primary"],
          null
        );
        eventLink.href = `/moseholm/pages/eventDetails.php?eventId=${eventItem.eventId}`;
        eventLink.textContent = "Læs mere";
        flexItem2.appendChild(eventLink);

        this.rootElement.appendChild(eventContainer);
      });
    }
  };

  renderSortButtons = () => {
    const eventContainer = document.getElementById("orderByContainer");
    const orderByDateButton = createElement(
      "btn",
      ["btn", "product-category-button", "order-by-button"],
      null
    );
    orderByDateButton.textContent = "Sorter efter dato";
    orderByDateButton.setAttribute("data-orderby", "eventDate");
    const orderDateIcon = createElement(
      "i",
      ["sortIcon", "fas"],
      "orderBy-eventDate-icon"
    );
    orderByDateButton.appendChild(orderDateIcon);
    eventContainer.appendChild(orderByDateButton);

    const orderByPriceButton = createElement(
      "btn",
      ["btn", "product-category-button", "order-by-button"],
      null
    );
    orderByPriceButton.textContent = "Sorter efter pris";
    const orderPriceIcon = createElement(
      "i",
      ["sortIcon", "fas"],
      "orderBy-eventPrice-icon"
    );
    orderByPriceButton.appendChild(orderPriceIcon);
    orderByPriceButton.setAttribute("data-orderby", "eventPrice");
    eventContainer.appendChild(orderByPriceButton);
  };

  clearEvents = () => {
    this.rootElement.innerHTML = "";
  };

  renderSortIcon = (orderType, orderDirection) => {
    const sortIcons = document.querySelectorAll(".sortIcon");
    if (sortIcons && sortIcons.length > 0) {
      sortIcons.forEach((sortIconElement) => {
        sortIconElement.classList.remove("fa-caret-up");
        sortIconElement.classList.remove("fa-caret-down");
      });
    }

    const orderIcon = document.getElementById(`orderBy-${orderType}-icon`);
    if (!orderDirection) {
      return;
    } else if (orderDirection === "ASC") {
      orderIcon.classList.add("fa-caret-up");
    } else if (orderDirection === "DESC") {
      orderIcon.classList.add("fa-caret-down");
    }
  };

  handleOrderBy = (event, buttonElement, callback) => {
    if (
      event.target.getAttribute("data-orderby") ===
      buttonElement.getAttribute("data-orderby")
    ) {
      callback(event.currentTarget.getAttribute("data-orderby"));
    }
  };
  bindOrderByButton = (callback) => {
    const orderByButtons = document.querySelectorAll(".order-by-button");
    orderByButtons?.forEach((orderByButtonItem) => {
      orderByButtonItem.addEventListener("click", (e) =>
        this.handleOrderBy(e, orderByButtonItem, callback)
      );
    });
  };
}
