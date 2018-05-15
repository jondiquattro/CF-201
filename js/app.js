'use strict';


//global variables
var allPictures = [];

var imgEl1 = document.getElementById('first-image');
var imgEl2 = document.getElementById('second-image');
var imgEl3 = document.getElementById('third-image');

var picture1Index = 0;
var picture2Index = 1;
var picture3index = 2;
//========================
function Picture (url, name) {  //constructor
  this.url = url;
  this.name = name;
  
  this.clicked = 0;
  
  allPictures.push(this);
}

new Picture('img/bathroom.jpg', 'bathroom');
new Picture('img/boots.jpg', 'boots');
new Picture('img/breakfast.jpg', 'breakfast');
new Picture('img/banana.jpg', 'banana');
new Picture('img/bag.jpg', 'bag');
new Picture('img/bubblegum.jpg', 'bubblegum');
new Picture('img/chair.jpg', 'chair');
new Picture('img/cthulhu.jpg', 'cthulu');
new Picture('img/dog-duck.jpg', 'dog duck');
new Picture('img/dragon.jpg', 'dragon');
new Picture('img/pen.jpg', 'pen');
new Picture('img/pet-sweep.jpg', 'pet sweep');
new Picture('img/scissors.jpg', 'scissors');
new Picture('img/shark.jpg', 'shark');
new Picture('img/sweep.png', 'sweep');
new Picture('img/tauntaun.jpg', 'tauntaun');
new Picture('img/unicorn.jpg', 'unicorn');
new Picture('img/usb.gif', 'usb');
new Picture('img/water-can.jpg', 'water can');
new Picture('img/wine-glass.jpg', 'wine glass');




imgEl1.addEventListener('click', function(){
  allPictures[picture1Index].clicked++;
  // console.log(allPictures[picture1Index]);
  chooseNewPictures();
});

imgEl2.addEventListener('click', function() {
  allPictures[picture2Index].clicked++;
  chooseNewPictures();

});

imgEl3.addEventListener('click', function() {
  allPictures[picture2Index].clicked++;
  chooseNewPictures();

});


function chooseNewPictures() {
  picture1Index = Math.floor(Math.random() * allPictures.length);
  
  imgEl1.src = allPictures[picture1Index].url;

  picture2Index = Math.floor(Math.random() * allPictures.length); //outputs a number between 0 and length -1
  console.log(picture2Index);
  imgEl2.src = allPictures[picture2Index].url;

  picture3index = Math.floor(Math.random() * allPictures.length);
  imgEl3.src = allPictures[picture3index].url; //url is a parameter of the object
}





chooseNewPictures();