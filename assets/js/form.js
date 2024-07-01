// form.js is the js to check the valid entries from the form and store it in the 
// localStorage.  Once stored, open blog.html.

// Global variables:
// submitButton - submit button reference variable

const submitButton = document.querySelector("#submit");

// submit button event listener
// parameter: click event
// return: none
// It checks for valid inputs.  If so, push the new entry to localstorage item
// blogPosts and then blog.html.  If not, alert the user till all forms have valid content.
submitButton.addEventListener('click', function (event) {
  event.preventDefault();
  const usernameInput = document.querySelector('#username').value.trim();
  const titleInput = document.querySelector('#title').value.trim();
  const contentInput = document.querySelector('#content').value.trim();
  let existingPosts = JSON.parse(localStorage.getItem("blogPosts"));
  let blogPosts = [];

  if (usernameInput.length === 0 || titleInput.length === 0 || contentInput.length === 0) {
    alert("Type something in each field, plz 🥺");
  } else {
    const post = {
      username: usernameInput,
      title: titleInput,
      content: contentInput,
    };
    if (existingPosts !== null) {
      blogPosts = existingPosts;
    }
    blogPosts.push(post);
    localStorage.setItem("blogPosts", JSON.stringify(blogPosts));
    window.location.href = "./blog.html"; 
  }
});
