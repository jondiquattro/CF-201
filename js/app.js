'use strict';


//global variables
var pictureObjects = [];
var sectionEl = document.getElementById('item-blocks') //for event listener
var imgEl1 = document.getElementById('first-image');//for event listener
var imgEl2 = document.getElementById('second-image');//for event listener
var imgEl3 = document.getElementById('third-image');//for event listener
// var resultUl = document.getElementById('product-result');//for display

var picture1Index = 0;
var picture2Index = 1;
var picture3Index = 2;
var totalClicks = 0;


//========================
function Picture (url, name) {  //constructor
  this.url = url;
  this.name = name;
  this.clicked = 0;
  
  
  pictureObjects.push(this);
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


sectionEl.addEventListener('click', sectionCallback);


function sectionCallback(event) {
 
  if(event.target.id === 'first-image'){//if id is the target vice div
    totalClicks++;
    pictureObjects[picture1Index].clicked++;
    imgEl1.src = pictureObjects[picture1Index].url;
        chooseNewPictures();
      
  } 
  else if(event.target.id === 'second-image'){
    totalClicks++;
    pictureObjects[picture2Index].clicked++;
    imgEl2.src = pictureObjects[picture2Index].url;
        chooseNewPictures();

  }
  else if(event.target.id === 'third-image'){
    totalClicks++;
    pictureObjects[picture3Index].clicked++;
    imgEl3.src = pictureObjects[picture3Index].url;
        chooseNewPictures();

  }
  else {
    alert('click on an image');
  }
      // renderTotals();
}


function checkTotalClicks() {
 
  if(totalClicks >= 6){
    // renderTotals();
    renderTotals();
    sectionEl.removeEventListener('click', sectionCallback);
  }
}




function chooseNewPictures() {
  checkTotalClicks()
  picture1Index = Math.floor(Math.random() * pictureObjects.length);//ie .8 * 15
  
  imgEl1.src = pictureObjects[picture1Index].url; 
  
  picture2Index = Math.floor(Math.random() * pictureObjects.length); //outputs a number between 0 and length -1
  
  imgEl2.src = pictureObjects[picture2Index].url;
  
  picture3Index = Math.floor(Math.random() * pictureObjects.length);
  imgEl3.src = pictureObjects[picture3Index].url; //url is a parameter



  // img1.src = pictureObjects[picture1index].url;
  // img1.id = picture1index; //sets the image id = to the reference of its corresponding object's position in the array of all images
  // img2.src = pictureObjects[picture2index].url;
  // img2.id = picture2index;
  // img3.src = pictureObjects[I].url;
  // img3.id = I;
}



function renderTotals(){      //creates and renders list items
  
for (var i = 0; i < pictureObjects.length; i++){

  var ulEl = document.getElementById('product-results');
  var liEl = document.createElement('li');
  
  liEl.textContent = pictureObjects[i].name + ' clicked: ' + pictureObjects[i].clicked + ' times';
  ulEl.appendChild(liEl);

}

}
// function renderTotals(){
//   for(var i in pictureObjects){
//     var newLiEl = document.createElement('li');
//     newLiEl.textContent = pictureObjects[i].name + ' clicked : ' + pictureObjects[i].clicked + ' Times';
//     resultUl.appendChild(newLiEl);
//   }
// }

chooseNewPictures();

