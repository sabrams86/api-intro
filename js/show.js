var xhr = new XMLHttpRequest();

xhr.open('GET', 'http://www.reddit.com/'+url+'.json', true);
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
