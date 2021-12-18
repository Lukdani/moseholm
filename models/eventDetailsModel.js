const initialComment = {
  ecomAuthor: "",
  ecomComment: "",
  ecomEventId: null,
};

export class EventDetailsModel {
  constructor() {
    this.state = { event: null, comment: { ...initialComment } };
  }

  setEvents = (event) => {
    this.state.event = event;
  };

  updateComment = (name, value) => {
    if (name) {
      this.state.comment[name] = value;
    }
  };

  resetComment = () => {
    this.state.comment = { ...initialComment };
  };
}
