import View from './View';

class StepTwoView extends View {
  activeStep = 'step-two';
  activeScreen = document.querySelector('#step-two');
  stepForm = document.querySelector('.post-form');
  buttonTag = document.querySelector('.button-tag');

  constructor() {
    super();
    this.addHandlerScreenReset();
  }

  addHandlerPostForm(handler) {
    this.stepForm.addEventListener('submit', (event) => {
      event.preventDefault();

      const formData = new FormData(event.target);
      const postInput = Object.fromEntries(formData).postForm;

      handler(postInput);
    });
  }

  addHandlerStepBackward(handler) {
    this.buttonTag.addEventListener('click', handler);
  }

  setCheckingForBlogname(blogname) {
    this.buttonTag.innerText = blogname;
  }
}

export default new StepTwoView();
