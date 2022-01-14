import { fetchJsonApi } from "../utils/fetchJsonApi.js";
import { postRequest } from "../utils/postRequest.js";

export class EventDetailsController {
  constructor(eventDetailsModel, eventDetailsView) {
    this.eventDetailsModel = eventDetailsModel;
    this.eventDetailsView = eventDetailsView;

    const queryParams = new URLSearchParams(window.location.search);
    this.eventId = queryParams.get("eventId");

    if (this.eventId) {
      this.populateEvent(this.eventId);
    }
    this.eventDetailsView.bindInputChange(this.handleChange);
    this.eventDetailsView.bindFormSubmit(this.postComment);
  }

  populateEvent = async (eventId) => {
    this.setSpinner(true);
    const fetchtedEvent = await fetchJsonApi(
      `/moseholm/api/getEvents.php?eventId=${eventId}`
    );

    this.setSpinner(false);

    if (fetchtedEvent && fetchtedEvent.length > 0) {
      this.eventDetailsModel.setEvents(fetchtedEvent[0]);
      this.eventDetailsView.renderEvent(this.eventDetailsModel.state.event);
      this.eventDetailsView.renderComments(
        this.eventDetailsModel.state.event?.eventComments
      );
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

  postComment = async (e) => {
    this.eventDetailsModel.updateComment("ecomEventId", this.eventId);
    const response = await postRequest("/moseholm/api/postEventComment.php", {
      ...this.eventDetailsModel.state.comment,
    });
    if (response) {
      this.eventDetailsModel.setEvents({
        ...this.eventDetailsModel.state.event,
        eventComments: [
          {
            ...this.eventDetailsModel.state.comment,
            ecomDate: new Date().toISOString(),
          },
          ...this.eventDetailsModel.state.event.eventComments,
        ],
      });
      this.eventDetailsView.renderComments(
        this.eventDetailsModel.state.event?.eventComments
      );
      this.eventDetailsModel.resetComment();
      this.eventDetailsView.clearForm();
    }
  };

  handleChange = (name, value) => {
    if (name) {
      this.eventDetailsModel.updateComment(name, value);
    }
  };
}
