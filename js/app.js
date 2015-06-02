var xhr = new XMLHttpRequest();

xhr.open('GET', 'http://www.reddit.com/subreddits.json', true);
xhr.addEventListener('load', function(){
  var data = JSON.parse(xhr.response);
  console.log(data);
  var items = data.data.children;
  var button = document.getElementsByClassName('button')[0];
  var div = document.body.getElementsByClassName('data')[0];
  button.addEventListener('click', function(){
    for(i=0; i<items[i].length; i++){
      var subr = items[i].data.display_name;
      var subrUrl = items.data.url;
      var p = document.createElement('p');
      var a = document.createElement('a');
      a.href = "/cats.html?subr="+subr+"&subrUrl="subrUrl;
      a.innerHTML= subr;
      p.innerHTML = subr;
      div.appendChild(p);
      div.appendChild(a);
    }
  });
});
xhr.send(null);

var parseQueryString = function(queryString){
  var urlQuery = document.location.search;
  urlQuery = urlQuery.replace(/^\?/,"");
  var urlQueryObj = {};
  var queryArray = urlQuery.split('&');
  for(i=0; i<queryArray.length; i++){
      var querySet = queryArray[i].split('=');
      urlQueryObj[querySet[0]] = querySet[1];
  }
  console.log(urlQueryObjbj);
}

//
// var xhr = new XMLHttpRequest();
//
// xhr.open('GET', 'http://www.reddit.com/r/earthporn.json', true);
// xhr.addEventListener('load', function(){
//   var data = JSON.parse(xhr.response);
//   console.log(data);
//   var items = data.data.children;
//   var button = document.getElementsByClassName('button')[0];
//   var div = document.body.getElementsByClassName('data')[0];
//   button.addEventListener('click', function(){
//     for(i=0; i<items.length; i++){
//       var title = items[i].data.title;
//       var image = items[i].data.thumbnail;
//       var img = document.createElement('img');
//       var p = document.createElement('p');
//       img.src = image;
//       p.innerHTML = title;
//       div.appendChild(p);
//       div.appendChild(img);
//     }
//   });
// });
// xhr.send(null);
//
//








//
// var xhr = new XMLHttpRequest();
//
// xhr.open('GET', 'http://www.omdbapi.com/?t=Frozen&y=&plot=short&r=json', true);
// xhr.addEventListener('load', function(){
//   var data = JSON.parse(xhr.response);
//   console.log(data);
//   var title = data.Title;
//   var year = data.Year;
//   var rating = data.Rated;
//   var image = data.Poster;
//   var output = "<h3>Title: "+title+"</h3>"+"<h3>Year: "+year+"</h3>"+"<h3>Rating: "+rating+"</h3>"+'<img src="'+image+'">';
//   var button = document.getElementsByClassName('button')[0];
//   button.addEventListener('click', function(){
//     document.body.getElementsByClassName('data')[0].innerHTML = output;
//   });
// })
// xhr.send(null);
