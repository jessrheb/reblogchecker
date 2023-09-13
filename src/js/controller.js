import * as model from './model.js';

import stepOneView from './views/stepOneView.js';
import stepTwoView from './views/stepTwoView.js';
import sessionView from './views/sessionView.js';
import outputView from './views/outputView.js';

function controlSessionWatch() {
  if (!sessionStorage.getItem(`CheckingFor`)) {
    stepOneView.stepScreenInit();
  } else {
    stepTwoView.stepScreenInit();
    stepTwoView.setCheckingForBlogname(model.sessionData.getBlogname());
  }
}

function controlStepWatch(mutationList) {
  sessionView.stepWatch(mutationList);
}

function controlStoreScroll() {
  sessionView.debounce(sessionView.storeScroll);
  sessionView.storeScroll();
}

async function controlBlognameForm(blognameInput) {
  try {
    sessionView.renderSpinner();

    const blogBasics = await model.retrieveBlogBasics(blognameInput);

    stepOneView.inputValidation(true);

    await model.retrieveBlogPosts(blogBasics);

    sessionView.loadStopAnimation().then(() => {
      stepOneView.resetScreen(false);
      stepTwoView.stepScreenInit();
      stepTwoView.setCheckingForBlogname(model.sessionData.getBlogname());
    });
  } catch (error) {
    console.error(error);
    stepOneView.errorManager(error);
  }
}

async function controlPostForm(postInput) {
  try {
    sessionView.renderSpinner();

    const postCredentials = await model.extractPostCredentials(postInput);
    const postRootID = await model.retrievePostRootID(postCredentials);

    stepTwoView.inputValidation(true);

    model.sessionData.postRootID = postRootID;

    sessionView.loadStopAnimation().then(() => {
      stepTwoView.resetScreen(false);
      stepTwoView.stepScreenInit();
      controlCheckResult();
    });
  } catch (error) {
    console.error(error);
    stepTwoView.errorManager(error);
  }
}

function controlCheckResult() {
  const reblogCheckData = model.reblogCheck(
    model.sessionData.getBlogname(),
    model.sessionData.postRootID
  );

  if (!reblogCheckData) {
    outputView.showResult('negative');
    return;
  }

  const [numberOfInstances, instancesURLs] = reblogCheckData;

  outputView.setReblogInstances(numberOfInstances);
  outputView.setReblogURLs(instancesURLs);
  outputView.showResult('positive');
}

function controlStepBackward() {
  if (
    window.confirm(
      `Done checking for ${model.sessionData.getBlogname()}? This will take you back to the previous step.`
    )
  ) {
    sessionStorage.clear();
    sessionView.resetForm();
    sessionView.resetScreen();
    stepOneView.stepScreenInit();
  }
}

function init() {
  sessionView.addHandlerSessionWatch(controlSessionWatch);
  sessionView.addHandlerAttributeWatch(controlStepWatch);
  sessionView.addHandlerStoreScroll(controlStoreScroll);
  stepOneView.addHandlerBlognameForm(controlBlognameForm);
  stepTwoView.addHandlerPostForm(controlPostForm);
  stepTwoView.addHandlerStepBackward(controlStepBackward);
}

init();
