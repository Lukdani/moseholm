export class WindowResizeHandler {
  constructor(onResize, initiallyCallOnResize = false) {
    this.isMobile = this.checkForMobile();
    this.onResize = onResize;
    if (initiallyCallOnResize) {
      this.onResize(this.isMobile);
    }
    window.addEventListener("resize", this.handleResize);
  }

  // If a device is less than 992px wide, it should be considered a mobile device;
  checkForMobile = () => window.innerWidth <= 991;

  handleResize = () => {
    const isNowMobile = this.checkForMobile();

    // Only call onResize when the treshhold between mobile or not has been crossed;
    if (this.isMobile !== isNowMobile) {
      this.isMobile = isNowMobile;
      this.onResize(this.isMobile);
    }
  };
}
