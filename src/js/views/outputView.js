import View from './View';

class OutputView extends View {
  outputWindow = document.querySelectorAll('.output');
  numberOfInstances = document.querySelector('.instances');
  postURLs = document.querySelector('.post-urls');

  setReblogInstances(numberOfInstances) {
    this.numberOfInstances.innerText =
      numberOfInstances > 1
        ? `${numberOfInstances} times`
        : `${numberOfInstances} time`;
  }

  setURLAttributes(element, attributes) {
    Object.keys(attributes).forEach((attribute) => {
      element.setAttribute(attribute, attributes[attribute]);
    });
  }

  setReblogURLs(instancesURLs) {
    instancesURLs.forEach((URL) => {
      const hrefAttributes = {
        href: URL,
        target: '_blank',
        rel: 'noopener noreferrer',
      };
      const aHref = document.createElement('a');
      aHref.innerText = URL;
      this.setURLAttributes(aHref, hrefAttributes);
      this.postURLs.appendChild(aHref);
    });
  }

  resetReblogURLs() {
    if (this.postURLs.hasChildNodes()) {
      this.postURLs
        .querySelectorAll('a')
        .forEach((element) => this.postURLs.removeChild(element));
    }
  }

  showResult(outcome) {
    this.outputWindow.forEach(
      (output) =>
        output.dataset.result === outcome &&
        output.setAttribute('data-active', true)
    );
  }
}

export default new OutputView();
