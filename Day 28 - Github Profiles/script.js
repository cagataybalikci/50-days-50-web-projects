const API_URL = "https:/api.github.com/users/";

const form = document.getElementById("form");
const search = document.getElementById("search");
const main = document.getElementById("main");


async function getRepos(username) {
    try {
        const { data } = await axios(API_URL + username + '/repos?sort=created');
        addReposToCard(data)
      } catch (err) {
        if (err) {
          createErrorCard("Problem fetching repos.");
        }
      }
}


async function getUser(username) {
  try {
    const { data } = await axios(API_URL + username);
    createUserCard(data);
    getRepos(username)
  } catch (err) {
    if (err.response.status == 404) {
      createErrorCard("No profile with this username.");
    }
  }
}

function createUserCard(data) {
  const cardHTML = `
    <div class="card">
        <img src="${data.avatar_url}" alt="" class="avatar">
        <div class="user-info">
        <h2>${data.login}</h2>
        <p>${data.bio}</p>
        <ul>
            <li>${data.followers}<strong>Followers</strong></li>
            <li>${data.following}<strong>Following</strong></li>
            <li>${data.public_repos}<strong>Repos</strong></li>
        </ul>
        <div id="repos"></div>
        </div>
    </div>
    `;

  main.innerHTML = cardHTML;
}

function addReposToCard(repos) {
    const reposEl = document.getElementById("repos")

    repos
        .slice(0,5)
        .forEach(repo => {
            const repoEl = document.createElement("a")
            repoEl.classList.add("repo")
            repoEl.href = repo.html_url
            repoEl.target = "_blank"
            repoEl.innerText = repo.name
            reposEl.appendChild(repoEl)
        });
}

function createErrorCard(msg) {
  const cardHTML = `
        <div class="card">
            <h1>${msg}</h1>
        </div
    
    `;
  main.innerHTML = cardHTML;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const user = search.value;

  if (user) {
    getUser(user);
    search.value = "";
  }
});
