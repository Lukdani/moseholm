export class WindowResizeHandler {
    constructor(onResize, initiallyCallOnResize = false) {
        this.isMobile = this.checkForMobile();
        this.onResize = onResize;
        if (initiallyCallOnResize) {
            this.onResize(this.isMobile);
        }
        window.addEventListener("resize", this.handleResize);
    }

    checkForMobile = () =>  window.innerWidth <= 991;

    handleResize = () => {
        const isNowMobile = this.checkForMobile();

        if (this.isMobile !== isNowMobile) {
            this.isMobile = isNowMobile;
            this.onResize(this.isMobile);
        }
    }
}