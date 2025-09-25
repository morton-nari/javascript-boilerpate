export function showExtendedSummary() {
    console.log("Showing extended summary...");
    document.getElementById("extended-summary").style.display = "block";
  }
  
  export function showBriefSummary() {
    console.log("User not alloed to see the extended summary");
  }
  
  export function makeFeedbackButtonVisible() {
    document.getElementById("feedback-dialog").style.display = "block";
    console.log("Making feedback button visible...");
  }

  export function notFeedbackAllowed() {
    document.getElementById("feedback-dialog").style.display = "none";
    console.log("User not alloed to see the extended summary");
  }