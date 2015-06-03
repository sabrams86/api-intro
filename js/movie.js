var xhr = new XMLHttpRequest();
var queryString = document.location.search;
var query = parseQueryString(queryString);
document.getElementsByTagName("title")[0].innerHTML = "OMDB Demo: "+decodeURIComponent(query.title);
xhr.open('GET', 'http://www.omdbapi.com/?i='+query.i+"&r=json", true);
xhr.addEventListener('load', function(){
  var movie = JSON.parse(xhr.response);
  console.log(movie.Title);
  var div = document.body.getElementsByClassName('data')[0];
  var head = document.body.getElementsByClassName('head')[0];
  var heading = document.createElement('h1');
  heading.innerHTML = movie.Title;
  head.appendChild(heading);
  for(key in movie){
    if (key === "Poster"){
      var poster = document.getElementsByClassName('poster')[0];
      var img = document.createElement('img');
      img.src = movie[key];
      img.style.display = "inline-block";
      img.style.clear= "both";
      img.style.marginTop = "50px;"
      poster.appendChild(img);
    }
    var h5 = document.createElement('h4');
    h5.innerHTML = key;
    var p = document.createElement('p');
    p.innerHTML = movie[key];
    p.className = "p-result";
    div.appendChild(h5);
    div.appendChild(p);
  }
});
xhr.send(null);
