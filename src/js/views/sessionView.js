import View from './View';

class SessionView extends View {
  stepForm = document.querySelectorAll('form');
  scrollIntoView = document.querySelector('header button');

  constructor() {
    super();
    this.addHandlerScrollIntoView();
  }

  addHandlerScrollIntoView() {
    this.scrollIntoView.addEventListener('click', () =>
      this.mainScreen.scrollIntoView({ behavior: 'smooth' })
    );
  }

  addHandlerSessionWatch(handler) {
    window.addEventListener('load', handler);
  }

  addHandlerAttributeWatch(handler) {
    const observer = new MutationObserver(handler);
    observer.observe(this.mainScreen, {
      attributeFilter: ['data-state'],
      attributeOldValue: true,
    });
  }

  addHandlerStoreScroll(handler) {
    document.addEventListener('scroll', handler, { passive: true });
  }

  stepWatch(mutationList) {
    const stepIcons = ['bi-1-circle', 'bi-2-circle'];
    mutationList.forEach((mutation) => {
      if (mutation.target.dataset.state !== mutation.oldValue) {
        stepIcons.forEach((stepIcon) =>
          this.iconHeading.classList.toggle(stepIcon)
        );
      }
    });
  }

  debounce(someFunction) {
    let frame;
    return (...parameters) => {
      if (frame) {
        cancelAnimationFrame(frame);
      }

      frame = requestAnimationFrame(() => {
        someFunction(...parameters);
      });
    };
  }

  storeScroll() {
    const elements = [this.stepHeading, this.checkingForWindow];
    document.documentElement.dataset.scroll = window.scrollY;

    if (window.scrollY >= window.innerHeight - window.innerHeight / 3) {
      elements.forEach((element) => element.setAttribute('data-visible', true));
    } else {
      elements.forEach((element) =>
        element.setAttribute('data-visible', false)
      );
    }
  }
}

export default new SessionView();
