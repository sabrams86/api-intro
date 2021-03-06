var xhr = new XMLHttpRequest();
xhr.open('GET', 'http://www.reddit.com/subreddits.json', true);
xhr.addEventListener('load', function(){
  var data = JSON.parse(xhr.response);
  var items = data.data.children;
  var div = document.body.getElementsByClassName('data')[0];
  var head = document.body.getElementsByClassName('head')[0];
  var heading = document.createElement('h1');
  heading.innerHTML = "Reddit's hottest topics"
  head.appendChild(heading);
    for(i=0; i < items.length; i++){
      var subr = items[i].data.display_name;
      var subrUrl = items[i].data.url;
      var a = document.createElement('a');
      a.className = "subject"
      a.href = "/show.html?subr="+subr+"&subrUrl="+subrUrl;
      a.innerHTML= "<div class='button'>"+subr+"</div>";
      div.appendChild(a);
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
