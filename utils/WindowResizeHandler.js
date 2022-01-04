export class WindowResizeHandler {
    constructor(onResize, initialCallOnResize = false) {
        this.isMobile = this.checkForMobile();
        this.onResize = onResize;
        if (initialCallOnResize) {
            this.onResize(this.isMobile);
        }
        window.addEventListener("resize", this.handleResize);
    }

    checkForMobile = () =>  window.innerWidth <= 991;

    handleResize = () => {
        const isNowMobile = this.checkForMobile();
        console.log(isNowMobile);

        if (this.isMobile !== isNowMobile) {
            this.isMobile = isNowMobile;
            this.onResize(this.isMobile);
        }
    }
}