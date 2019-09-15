

fetch("https://api.edamam.com/api/food-database/parser?upc=070303022085&health=fish-free&app_id=c3ed774e&app_key=06cbdea958770dde2eeb5d1ae551a11e")
  .then(resp => resp.json())
  .then(function(resp){
    let labelName = resp.hints[0].food.label;
    let imgLink = resp.hints[0].food.image;
    let foodContents = resp.hints[0].food.foodContentsLabel;
    console.log(labelName);
    console.log(imgLink);
    console.log(foodContents);
  })
  .catch(function(data){
    console.log("Error receiving data from server");
  })

  let upcCode = document.getElementById('UserUpc');
  console.log(upcCode);
// function amIAllergic(){
//   if (labelName.includes()
// }
