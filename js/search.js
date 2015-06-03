

  var div = document.body.getElementsByClassName('data')[0];
  var head = document.body.getElementsByClassName('head')[0];
  var searchButton = document.getElementById('submit');
  var heading = document.getElementsByTagName('h1')[0];
  heading.innerHTML = "OMDB Search"


searchButton.addEventListener('click', function(){
  div.innerHTML = null;
  event.preventDefault();
  var searchField = document.getElementById('title').value;
  var xhr = new XMLHttpRequest();
  document.getElementsByTagName("title")[0].innerHTML = "OMDB Demo: "+searchField;
  xhr.open('GET', 'http://www.omdbapi.com/?s='+searchField+"&r=json", true);
  xhr.addEventListener('load', function(){
    var data = JSON.parse(xhr.response);
    console.log(data);
    var results = data.Search;
    var div = document.body.getElementsByClassName('data')[0];
    var head = document.body.getElementsByClassName('head')[0];
    var heading = document.getElementsByTagName('h1')[0];
    heading.innerHTML = "Search Results for: "+searchField;
    head.appendChild(heading);
    for(i=0; i < results.length; i++){
      var title = results[i].Title;
      var year = results[i].Year;
      var imdbId = results[i].imdbID;
      var type = results[i].Type
      var a = document.createElement('a');
      a.className = "subject";
      a.href = "/movie.html?i="+imdbId+"&title="+title;
      a.innerHTML= "<div class='button'>"+title+"</div>";
      div.appendChild(a);
      var p = document.createElement('p');
      p.innerHTML = "Year: "+year;
      var p1 = document.createElement('p');
      p1.innerHTML = "Type: "+type;
      div.appendChild(p);
      div.appendChild(p1);
    }
    var buttons = document.getElementsByClassName('button');
    for (var i = 0; i<buttons.length; i++){
      buttons[i].addEventListener('mouseout', function(){
        this.className = "button";
      });
    }
    for (var i = 0; i<buttons.length; i++){
      buttons[i].addEventListener('mouseenter', function(){
        this.className = "button hightlight";
      },1000);
    }
  });

  xhr.send(null);
});
