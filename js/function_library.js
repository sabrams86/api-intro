var parseQueryString = function(queryString){
  var urlQuery = queryString;
  urlQuery = urlQuery.replace(/^\?/,"");
  var urlQueryObj = {};
  var queryArray = urlQuery.split('&');
  for(i=0; i<queryArray.length; i++){
      var querySet = queryArray[i].split('=');
      urlQueryObj[querySet[0]] = querySet[1];
  }
  return urlQueryObj
}
