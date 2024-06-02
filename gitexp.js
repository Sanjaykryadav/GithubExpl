const ApiUrl = "https://api.github.com/users/";

const UserPic = document.getElementById("pic");
const UserLogo = document.getElementById("logo");
const UsrName = document.getElementById("userNmae");
const NavUserName = document.getElementById("user-name");
const UserId = document.getElementById("userId");
const Bio = document.getElementById("Bio");
const Followers = document.getElementById("Follower");
const Following = document.getElementById("Following");
const RepoCount = document.getElementById("repoCount");
const SearchBar = document.getElementById("seArchBar");
const SearchUser = document.getElementById("Search");


const screenOne = document.getElementById("main");
const screenTwo = document.getElementById("two");
const screenChange = () => {
  screenOne.classList.add("none");
  screenTwo.classList.remove("none");
}

const GetUserName = async (username) => {
  const Response = await fetch(ApiUrl + username);
  const Data = await Response.json();
 // console.log(Data);
  UserPic.innerHTML = `<img src="${Data.avatar_url}">`;
  UserLogo.innerHTML = `<img src="${Data.avatar_url}">`;
  UsrName.innerText = Data.name;
  NavUserName.innerText = Data.name;
  UserId.innerText = Data.login;
  Bio.innerText = Data.bio;
  Followers.innerText = Data.followers;
  Following.innerText = Data.following;
  RepoCount.innerText = Data.public_repos;

  GetRepo(username);
    
  
};

const GetRepo = async (username) => {
  const RepoAll = document.getElementById("repoall");
  RepoAll.innerHTML = "";
  const reponse = await fetch(ApiUrl + username + "/repos");
  const repdata = await reponse.json();
  //console.log(repdata);
  repdata.forEach((Repo) => {
    //console.log(Repo);
    const Element = document.createElement("a");
    Element.classList.add("repo");
    Element.href = Repo.html_url;
    Element.innerText = Repo.name;
    Element.target = "_blank";
    RepoAll.appendChild(Element);
  });
};
const formSubmit = () => {
  if (SearchUser.value != "") {
    GetUserName(SearchUser.value);
    SearchUser.value = "";
  }
  return false;
};
SearchUser.addEventListener("focusout", function () {
  formSubmit();
});
GetUserName("sanjaykryadav");

