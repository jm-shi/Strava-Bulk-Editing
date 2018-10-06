/**
 * Change the privacy setting of all your activities in Strava
 *  Makes all activities public by default
 * @param {string} privacySetting -  Which privacy setting to change all activites into
 *    valid inputs: 'everyone', 'followers_only', 'only_me'
 */
function bulkEdit(privacySetting = 'everyone') {
  for (editButton of document.querySelectorAll('.quick-edit')) {
    editButton.click();
  }
  for (privacyControl of document.querySelectorAll(
    '.form-group .visibility-select select'
  )) {
    privacyControl.value = privacySetting;
  }
  for (saveButton of document.querySelectorAll(
    '.edit-actions button[type="submit"]'
  )) {
    saveButton.click();
  }
  const nextButton = document.querySelector('.btn.next_page');
  if (nextButton != null) {
    nextButton.click();
    setTimeout(bulkEdit, 5000);
  }
}

// Allow everyone to view your activities
bulkEdit();
// bulkEdit('everyone');

// Only allow you and your followers to view your activities
// bulkEdit('followers_only');

// Only you can view your activities
// bulkEdit('only_me');
