import LocomotiveScroll from 'locomotive-scroll';

/**
 * ScrollManager encapsulates initialization of Locomotive Scroll
 * and exposes basic control methods.
 */
export class ScrollManager {
  private scroll?: LocomotiveScroll;

  init(container: HTMLElement): void {
    this.scroll = new LocomotiveScroll({
      el: container,
      smooth: true
    });
  }

  scrollTo(target: string | HTMLElement): void {
    this.scroll?.scrollTo(target);
  }
}
