# Tier 2. Module 2 - Advanced JavaScript
## Topic 2. Code modularity. Homework

### Task 1. Image gallery

Create an image gallery using the SimpleLightbox library, which handles image clicks, modal window opening and closing, and keyboard scrolling.

You can watch a video of the gallery's work at the following [link](https://goitlmsstorage.b-cdn.net/72b3206c-79a1-4c68-a5f4-7c1da2ae9641Video%201.mp4).

### Task 2. Feedback form

Add form markup to HTML. In JS, write a script that will save the field values ​​to local storage when the user types something:

1. Declare outside any functions a `formData` object with `email` and `message` fields that initially have empty strings as values: `{ email: "", message: "" }`.
2. Use the delegate method to track changes to the form through the `input` event. Store the current data from the `email` and `message` fields in `formData` and write this object to local storage. Use the `"feedback-form-state"` key to store data in the repository.
3. When loading the page, check if the data is in local storage. If so, use them to populate the form and the `formData` object. If not, leave the form fields blank.
4. Before submitting the form, make sure that both fields of the form are filled out. If any of the fields (properties of the `formData` object) are empty, show a notification with the text "Fill please all fields". If all the fields are filled, output the `formData` object with current values ​​to the console, clear the local storage, the `formData` object and the form fields.
