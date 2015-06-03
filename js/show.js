var xhr = new XMLHttpRequest();
var queryString = document.location.search;
var query = parseQueryString(queryString);
document.getElementsByTagName("title")[0].innerHTML = "Reddit Demo: "+query.subrUrl.substring(3, query.subrUrl.length-1);
xhr.open('GET', 'http://www.reddit.com/'+query.subrUrl.substring(1)+'.json', true);
xhr.addEventListener('load', function(){
  var data = JSON.parse(xhr.response);
  console.log(data);
  var items = data.data.children;
  var div = document.body.getElementsByClassName('data')[0];
  var head = document.body.getElementsByClassName('head')[0];
  var heading = document.createElement('h1');
  heading.innerHTML = query.subrUrl.substring(3, query.subrUrl.length-1);
  head.appendChild(heading);
    for(i=0; i < items.length; i++){
      var title = items[i].data.title;
      var url = items[i].data.url;
      var a = document.createElement('a');
      a.className = "list-link";
      a.href = url;
      a.target = "_blank";
      a.innerHTML= "<div class='listItems'>"+title+"</div>";
      div.appendChild(a);
    }
});
xhr.send(null);
