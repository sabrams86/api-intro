var xhr = new XMLHttpRequest();
var queryString = document.location.search;
var query = parseQueryString(queryString);
console.log(query);
xhr.open('GET', 'http://www.reddit.com/'+query.subrUrl.substring(1)+'.json', true);
xhr.addEventListener('load', function(){
  var data = JSON.parse(xhr.response);
  var items = data.data.children;
  var button = document.getElementsByClassName('button')[0];
  var div = document.body.getElementsByClassName('data')[0];
    for(i=0; i < items.length; i++){
      var title = items[i].data.title;
      var url = items[i].data.url;
      console.log(title, url);
      var a = document.createElement('a');
      var p = document.createElement('p');
      a.href = url;
      a.target = "_blank";
      a.innerHTML= title;
      p.innerHTML= "";
      div.appendChild(a);
      div.appendChild(p);
    }
});
xhr.send(null);
