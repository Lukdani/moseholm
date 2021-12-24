export class EventModel {
  constructor() {
    this.state = { events: [] };
  }

  setEvents = (events, limitiedLoad) => {
    console.log(events);
    if (limitiedLoad && events) {
      this.state.events = [...this.state.events, ...events];
      return;
    }
    this.state.events = events || [];
  };
}
