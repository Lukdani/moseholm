import { fetchJsonApi } from "../utils/fetchJsonApi.js";

export class EventController {
  constructor(
    eventModel,
    eventView,
    showOrderBy = false,
    sortEventsBy = false,
    limitiedLoad = false
  ) {
    this.eventModel = eventModel;
    this.eventView = eventView;
    this.showOrderBy = showOrderBy;
    this.orderBy = sortEventsBy ? "eventDate" : "";
    this.ascOrDesc = sortEventsBy ? sortEventsBy : "";
    this.limitiedLoad = limitiedLoad;

    if (this.limitiedLoad) {
      this.currentlyFetched = 0;
      this.take = 3;
      this.eventView.bindLoadMoreButton(() =>
        this.populateEvents(this.orderBy, false)
      );
    }

    const queryParams = new URLSearchParams(window.location.search);
    const parameters = Object.fromEntries(queryParams.entries()).categories;
    const listOfCategories = parameters?.split(",");
    if (listOfCategories?.length > 0) {
      listOfCategories.forEach((categoryItem) =>
        this.categoryFilter.push(categoryItem)
      );
    }

    if (this.showOrderBy) {
      this.eventView.renderSortButtons();
      this.eventView.bindOrderByButton((orderBy) => {
        this.populateEvents(orderBy);
      });
    }

    this.populateEvents(this.orderBy, true);
  }

  populateEvents = async (orderBy, initialLoad) => {
    if (orderBy && orderBy !== this.orderBy) {
      this.orderBy = orderBy;
      this.ascOrDesc = "ASC";
    } else if (orderBy && orderBy === this.orderBy) {
      if (this.ascOrDesc === "ASC") {
        this.ascOrDesc = "DESC";
      } else {
        this.ascOrDesc = this.ascOrDesc === "" ? "ASC" : "";
      }
    } else if (!orderBy) {
      this.orderBy = "";
      this.ascOrDesc = "";
    }

    if (orderBy && !initialLoad && !this.limitiedLoad)
      this.eventView.renderSortIcon(orderBy, this.ascOrDesc);

    if (initialLoad) this.setSpinner(true);
    const fetchtedEvents = await fetchJsonApi(
      `/moseholm/api/getEvents.php${orderBy ? "?orderBy=" + orderBy : ""}${
        this.ascOrDesc ? "&direction=" + this.ascOrDesc : ""
      }${
        this.limitiedLoad
          ? `&take=${this.take}&skip=${this.currentlyFetched}`
          : ""
      }`
    );

    if (initialLoad) this.setSpinner(false);
    this.eventModel.setEvents(fetchtedEvents, this.limitiedLoad);
    this.eventView.renderEvents(
      this.limitiedLoad && this.currentlyFetched > 0
        ? [...this.eventModel.state.events].slice(this.currentlyFetched)
        : [...this.eventModel.state.events],
      this.limitiedLoad
    );

    if (this.limitiedLoad) {
      this.currentlyFetched += fetchtedEvents?.length;
      if (fetchtedEvents?.length < 2) {
        this.eventView.setLoadMoreButtonActive(false);
      }
    }
  };

  setSpinner = (show) => {
    const spinner = document.getElementById("eventSpinner");

    if (show && !spinner.classList.contains("shown")) {
      spinner.classList.toggle("shown");
      if (spinner.classList.contains("hidden")) {
        spinner.classList.remove("hidden");
      }
    } else if (!show && !spinner.classList.contains("hidden")) {
      spinner.classList.toggle("hidden");
      if (spinner.classList.contains("shown")) {
        spinner.classList.remove("shown");
      }
    }
  };
}
