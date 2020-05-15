# Strava Bulk Editing

Change the privacy setting of all your activities in Strava.
This is an updated version of [Gabriel K's](https://support.strava.com/hc/en-us/community/posts/208838917-Quick-Edit-list-of-Activities-for-bulk-editing).

To use:

1. Go to [https://www.strava.com/athlete/training](https://www.strava.com/athlete/training)
2. Open Chrome developer tools and enter the following into the console:

```javascript
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
  const nextButton = document.querySelector('button.next_page');
  if (nextButton != null) {
    nextButton.click();
    setTimeout(bulkEdit, 5000, privacySetting);
  }
}

// Allow everyone to view your activities
bulkEdit();
```

By default this makes all your activities public.

`bulkEdit('everyone')` - allow everyone to view your activities <br />
`bulkEdit('followers_only')` - allow followers to view your activities <br />
`bulkEdit('only_me')` - only allow yourself to view your activities
