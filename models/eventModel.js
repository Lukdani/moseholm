export class EventModel {
  constructor() {
    this.state = { events: [] };
  }

  setEvents = (events, limitiedLoad) => {
    if (limitiedLoad && events) {
      this.state.events = [...this.state.events, ...events];
      return;
    }
    this.state.events = events || [];
  };
}
