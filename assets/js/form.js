const submitButton = document.querySelector('#submit');


submitButton.addEventListener('click', function (event) {
  event.preventDefault();
  const usernameInput = document.querySelector('#username').value.trim();
  const titleInput = document.querySelector('#title').value.trim();
  const contentInput = document.querySelector('#content').value.trim();
  
  if (usernameInput.length === 0 || titleInput.length === 0 || contentInput.length === 0) {
    alert("Type something in each field, plz 🥺");
  } else {
    const blogPost = {
      username: usernameInput,
      title: titleInput,
      content: contentInput,
    }
    localStorage.setItem("blogPost", JSON.stringify(blogPost));
    console.log(JSON.parse(localStorage.getItem("blogPost")));
    window.location.href = "./blog.html"; 
  }
});
