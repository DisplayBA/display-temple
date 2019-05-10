/**
 *
 */
export default class AbstractAnimation {
  /**
   *
   * @type {null|Array<HTMLElement>|HTMLElement}
   */
  element = null;

  constructor(element) {
    if (element instanceof NodeList || element instanceof Array) {
      this.element = Array.from(element);
    } else {
      this.element = element;
    }

    this.hide();
  }

  /**
   * Will Transition In
   * @return {Promise<void>}
   */

  async transitionIn() {
    return new Promise(resolve => this.getTransitionIn(resolve));
  }

  /**
   * Will Transition Out
   * @return {Promise<void>}
   */

  async transitionOut() {
    return new Promise(resolve => this.getTransitionOut(resolve));
  }

  getTransitionIn(complete) {
    const tl = new TimelineLite();
    tl.call(complete);
    return tl;
  }

  getTransitionOut(complete) {
    const tl = new TimelineLite();
    tl.call(complete);
    return tl;
  }

  /**
   * Hides all animation elements
   */
  hide() {
    if (this.element instanceof Array) {
      this.element.forEach(el => {
        el.classList.add('hide');
      });
    } else {
      this.element.classList.add('hide');
    }
  }

  /**
   * Shows all animation elements
   */
  show() {
    if (this.element instanceof Array) {
      this.element.forEach(el => {
        el.classList.remove('hide');
      });
    } else {
      this.element.classList.remove('hide');
    }
  }

  getTransitionInDuration() {
    const tl = this.transitionIn();
    tl.pause();
    return tl.duration();
  }

  getTransitionOutDuration() {
    const tl = this.transitionOut();
    tl.pause();
    return tl.duration();
  }
}
