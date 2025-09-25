import { getFeatureState } from './utilitis/feartureUtils';
import { showExtendedSummary, showBriefSummary, makeFeedbackButtonVisible, notFeedbackAllowed } from './utilitis/featureAction';

  const summary = () => {
  //   getFeatureState("extended-summary")
  //     .then(function(isEnabled) {
  //         if (isEnabled) {
  //           showExtendedSummary();
  //         } else {
  //           showBriefSummary();
  //         }
  // });
  // getFeatureState("feedback-dialog")
  //   .then(function(isEnabled) {
  //       if (isEnabled) {
  //         makeFeedbackButtonVisible();
  //       } else {
  //         notFeedbackAllowed();
  //       }
  // });


  // extended-summary  feedback-dialog
    getFeatureState('extended-summary')
      .then( isEnabled => isEnabled ? showExtendedSummary() : showBriefSummary());
    getFeatureState('feedback-dialog')
      .then( isEnabled => isEnabled ? makeFeedbackButtonVisible() : notFeedbackAllowed())
  }
  export default summary
   
