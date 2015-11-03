var repo = $('.repo');
var prof_url = 'https://api.github.com/users/pllewis1';
var repos_url = 'https://api.github.com/users/pllewis1/repos';


function displayRepos(data){
  var repoItem = $('#repoItem');
  var repoTemplate = repoItem.html();
  var compiledrepoTemplate = _.template(repoTemplate);
  repo.append(compiledrepoTemplate(data));
  console.log(data);
}

function displayProfile(info){
  var profileItem = $('#profileItem');
  var profileTemplate = profileItem.html();
  var compiledprofileTemplate = _.template(profileTemplate);
  info.updated_at = moment(info.updated_at).fromNow();
  $('.summary').append(compiledprofileTemplate(info));
  console.log(info);

}

function getRepos(){
  $.ajax(repos_url).done(function(data){
    data.forEach(displayRepos);
    console.log (data);
  });
}

function getProfile(){
  $.ajax(prof_url).done(function(data){
    displayProfile(data);

  });
}
getRepos();
getProfile();

$.getJSON('https://api.github.com/users/pllewis1').done(function(data) {
  console.log(data);
  profileObj = data;
   $(".image_container").append("<img src=" + profileObj.avatar_url + ">");
});
