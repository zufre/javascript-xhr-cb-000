

function getRepositories() {
  const req = new XMLHttpRequest();
  req.addEventListener("load", showRepositories);
  req.open("GET", "https://api.github.com/users/zufre/repos");
  req.send();
}
function showRepositories(event, data) {
  var repos = JSON.parse(this.responseText);
  console.log(repos);
  const repoList = `<ul>${repos
    .map(
      r =>
        "<li>" +
        r.name +
        ' - <a href="#" data-repo="' +
        r.name +
        '" onclick="getCommits(this)">Get Commits</a></li>'
    )
    .join("")}</ul>`;
  document.getElementById("repositories").innerHTML = repoList;
}