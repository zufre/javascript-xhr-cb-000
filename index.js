function getRepositories() {
  const req = new XMLHttpRequest();
  req.open("GET", "https://api.github.com/zufre/octocat/repos");
  req.send();
}
