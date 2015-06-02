var xhr = new XMLHttpRequest();

xhr.open('GET', 'http://www.reddit.com/subreddits.json', true);
xhr.addEventListener('load', function(){
  var data = JSON.parse(xhr.response);
  var items = data.data.children;
  var button = document.getElementsByClassName('button')[0];
  var div = document.body.getElementsByClassName('data')[0];
    for(i=0; i < items.length; i++){
      var subr = items[i].data.display_name;
      var subrUrl = items[i].data.url;
      console.log(subr, subrUrl);
      var a = document.createElement('a');
      var p = document.createElement('p');
      a.href = "/show.html?subr="+subr+"&subrUrl="+subrUrl;
      a.innerHTML= subr;
      p.innerHTML= "";
      div.appendChild(a);
      div.appendChild(p);
    }
});
xhr.send(null);
