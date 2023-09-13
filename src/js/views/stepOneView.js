import View from './View';

class StepOneView extends View {
  activeStep = 'step-one';
  activeScreen = document.querySelector('#step-one');
  stepForm = document.querySelector('.blogname-form');

  constructor() {
    super();
    this.addHandlerScreenReset();
  }

  addHandlerBlognameForm(handler) {
    this.stepForm.addEventListener('submit', (event) => {
      event.preventDefault();

      const formData = new FormData(event.target);
      const blognameInput = Object.fromEntries(formData).blognameForm;

      handler(blognameInput);
    });
  }
}

export default new StepOneView();
