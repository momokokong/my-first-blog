// blog.js is the js to render the blog posts on blog.html.  
// If no blog post is available, leave a default message on the page.

// Global variables:
// blogPage - ".blog-page" element where the blog posts are located
// lightSwitch - represent the light/dark mode of the blog posts should be 
// blogPost - default as an empty array and used to store any blog posts from localStorage

const blogPage = document.querySelector(".blog-page");
const lightSwitch = (localStorage.getItem("light-switch") === "on" ? "light" : "dark");

let blogPosts = [];

// Initialize blog posts
// Function: init()
// parameter: none
// return: none
// Load stored posts from localstorage, assign them to blogPosts if not null then render blogPosts.
function init() {
  const storedPosts = JSON.parse(localStorage.getItem("blogPosts"));
  if (storedPosts !== null) {
    blogPosts = storedPosts;
  }
  renderPosts();
}

// Render blog posts
// Function: renderPosts()
// parameter: none
// return: none
// Clear whatever in .blogPage(main). Then for each post of blogPosts, create the 
// post element.  
// This should not happen following regular user flow: 
// If no post is available, show a default message.
function renderPosts() {
  blogPage.innerHTML = "";
  blogPosts.forEach( post => {
    blogPage.appendChild(createPost(post));
  });
  if (blogPage.innerHTML === "") {
    blogPage.textContent = "You know you should not peek this.  You are looking at a naked blog.";
  }
}

// Render blog posts
// Function: renderPosts()
// parameter: post (object from blogPosts)
// return: sectionCard: html element ready to be appended to .blogPage
// create the elements, assign the class attributes accordingly based on the value
// and the light-switch dark/light state.  Then append to a sectionCard which would be returned.
function createPost(post) {
  const sectionCard = document.createElement("section");
  const h2Title = document.createElement("h2");
  const hr = document.createElement("hr");
  const pContent = document.createElement("p");
  const pUser = document.createElement("p");
  
  sectionCard.setAttribute("class", "post-card " + lightSwitch);
  h2Title.setAttribute("class", "post-title " + lightSwitch);
  pContent.setAttribute("class", "post-content " + lightSwitch);
  pUser.setAttribute("class", "post-by " + lightSwitch);

  h2Title.textContent = post.title;
  pContent.textContent = post.content;
  pUser.textContent = "Posted by: " + post.username;

  sectionCard.appendChild(h2Title);
  sectionCard.appendChild(hr);
  sectionCard.appendChild(pContent);
  sectionCard.appendChild(pUser);

  return sectionCard;
}

init(); 