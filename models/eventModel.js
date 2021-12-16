export class EventModel {
    constructor() {
        this.state = {events: []};
    }

    setEvents = (events) => {
        this.state.events = events;
    }
}