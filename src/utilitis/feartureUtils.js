// export function fetchAllFeatures() {
//   return new Promise((resolve) => {
//     const sampleFeatures = {
//       "extended-summary": true,
//       "feedback-dialog": false
//     };
//     setTimeout(() => {
//       resolve(sampleFeatures);
//     }, 100);
//   })

// }

// // Utility function to fetch the state of a specific feature
// export function getFeatureState(featureName) {
//   return new Promise(resolve => {
//     fetchAllFeatures()
//       .then(features => {
//         // short way => const isEnabled = features[featureName] || false;
//         let isEnabled;
//         if (features[featureName]) {
//           isEnabled = features[featureName];
//         } else {
//           isEnabled = false;
//         }
//         console.log('this is "is enabled"',isEnabled)
//         resolve(isEnabled);
//       })
//       .catch(error => {
//         console.error( error);
//         resolve(false); // Return false if there's an error
//       });
//   });
// }
export function fetchAllFeatures() {
  return new Promise((resolve) => {
    const sampleFeatures = {
      "extended-summary": true,
      "feedback-dialog": true
    }
    
    setTimeout(() => {
      resolve(sampleFeatures);
    }, 100);
  })
}

export function getFeatureState(featureName) {
  return new Promise((resolve) => {
    fetchAllFeatures()
      .then(features => {
        let isEnabled;
        if (features[featureName]) {
          isEnabled = features[featureName]
        } else {
          isEnabled = false;
        }
      resolve(isEnabled)
      })
      .catch(err => {
        console.error(err);
        resolve(false);
      })
  })
}