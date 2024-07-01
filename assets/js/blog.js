const blogPage = document.querySelector(".blog-page");
const lightSwitch = (localStorage.getItem("light-switch") === "on" ? "light" : "dark");

let blogPosts = [];

function init() {
  const storedPosts = JSON.parse(localStorage.getItem("blogPosts"));
  if (storedPosts !== null) {
    blogPosts = storedPosts;
  }
  renderPosts();
}

function renderPosts() {
  blogPage.innerHTML = "";
  blogPosts.forEach( post => {
    blogPage.appendChild(createPost(post));
  });
  if (blogPage.innerHTML === "") {
    blogPage.textContent = "You know you should not peek this.  You are looking at a naked blog.";
  }
}

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