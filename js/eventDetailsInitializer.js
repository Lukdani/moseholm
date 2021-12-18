import { EventDetailsController } from "../controllers/eventDetailsController.js";
import { EventDetailsModel } from "../models/eventDetailsModel.js";
import { EventDetailsView } from "../views/eventDetailsView.js";

export class EventDetailsInitializer {
  constructor() {
    this.eventRoot = document.getElementById("eventDetailsContainer");
    this.commentsRoot = document.getElementById("eventCommentsContainer");

    this.eventDetailsModel = new EventDetailsModel();
    this.eventDetailsView = new EventDetailsView(
      this.eventRoot,
      this.commentsRoot
    );

    this.eventController = new EventDetailsController(
      this.eventDetailsModel,
      this.eventDetailsView
    );
  }
}
