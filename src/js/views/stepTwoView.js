import View from './View';

class StepTwoView extends View {
  activeStep = 'step-two';
  activeScreen = document.querySelector('#step-two');
  stepForm = document.querySelector('.post-form');

  constructor() {
    super();
    this.addHandlerScreenReset();
  }

  addHandlerPostForm(handler) {
    this.stepForm.addEventListener('submit', (event) => {
      this.resetScreen();
      event.preventDefault();

      const formData = new FormData(event.target);
      const postInput = Object.fromEntries(formData).postForm;

      handler(postInput);
    });
  }

  setCheckingForBlogname(blogname) {
    this.buttonTag.innerText = blogname;
  }
}

export default new StepTwoView();
