var request = new XMLHttpRequest();
request.open(
  "GET",
  "https://api.edamam.com/api/food-database/parser?ingr=red%20apple&app_id={c3ed774e}&app_key={06cbdea958770dde2eeb5d1ae551a11e	}",
  true
);
request.onload = function() {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
  console.log(data);
};
request.send();
