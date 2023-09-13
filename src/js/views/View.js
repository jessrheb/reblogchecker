export default class View {
  inputSet = ['.input', 'input'];
  errorMessage = '.message[data-type="error"]';
  mainScreen = document.querySelector('main');
  stepHeading = document.querySelector('.step-heading');
  iconHeading = document.querySelector('.icon-heading');
  checkingForWindow = document.querySelector('.checking-for');

  addHandlerScreenReset(activeScreen = this.activeScreen) {
    activeScreen
      .querySelectorAll('input')
      .forEach(() => addEventListener('input', this.resetScreen.bind(this)));
  }

  stepScreenInit(activeStep = this.activeStep) {
    [this.mainScreen, this.stepHeading, this.checkingForWindow].forEach(
      (element) => element.setAttribute('data-state', activeStep)
    );
  }

  loadStopAnimation() {
    const loadingSpinnerAnimation = this.stepHeading
      .getAnimations({ subtree: true })
      .find((animation) => animation.animationName === 'loadingSpinner');

    loadingSpinnerAnimation.pause();

    const currentFrame = getComputedStyle(this.stepHeading).transform;

    const loadingStopAnimation = this.stepHeading.animate(
      [{ transform: currentFrame }, { transform: 'matrix(1, 0, 0, 1, 0, 0)' }],
      { duration: 300, fill: 'forwards' }
    );

    return loadingStopAnimation.finished;
  }

  renderSpinner() {
    this.stepHeading.setAttribute('data-state', 'loading-spinner');
  }

  inputValidation(entryValidity, activeScreen = this.activeScreen) {
    this.inputSet.forEach((element) =>
      activeScreen
        .querySelector(element)
        .setAttribute('data-valid', entryValidity)
    );

    if (!entryValidity) {
      activeScreen.querySelector('button').setAttribute('disabled', true);
    }
  }

  renderError(activeScreen, error) {
    const activeErrorMessage = activeScreen.querySelector(this.errorMessage);
    activeErrorMessage.setAttribute('data-active', true);
    activeErrorMessage.querySelector('p').innerText = `${error.message}`;
  }

  errorManager(error, activeScreen = this.activeScreen) {
    this.loadStopAnimation().then(() => {
      this.renderError(activeScreen, error);
      this.stepScreenInit();
      this.inputValidation(false);
    });
  }

  resetForm() {
    this.stepForm[1].localName !== 'button'
      ? this.stepForm.forEach((form) => form.reset())
      : this.stepForm.reset();
  }

  resetScreen(resetEverything = true) {
    const resettableAttributes = ['data-active', 'data-valid', 'disabled'];

    if (!resetEverything) resettableAttributes.shift();

    resettableAttributes.forEach((attribute) =>
      this.mainScreen
        .querySelectorAll(`[${attribute}]`)
        .forEach((activeElement) => activeElement.removeAttribute(attribute))
    );
  }
}
