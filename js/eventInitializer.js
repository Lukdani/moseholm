import { EventController } from "../controllers/eventController.js";
import { EventModel } from "../models/eventModel.js";
import { EventView } from "../views/eventView.js";

export class EventInitializer {
  constructor(widthOnLarge = "3", showOrderBy = false, orderEventsBy) {
    this.eventRoot = document.getElementById("eventsContainer");

    this.eventModel = new EventModel();
    this.eventView = new EventView(this.eventRoot, widthOnLarge);

    this.eventController = new EventController(
      this.eventModel,
      this.eventView,
      showOrderBy,
      orderEventsBy
    );
  }
}
