'use strict';


//global variables
var pictureObjects = [];

var sectionEl = document.getElementById('item-blocks') //for event listener
var imgEl1 = document.getElementById('first-image');//for event listener
var imgEl2 = document.getElementById('second-image');//for event listener
var imgEl3 = document.getElementById('third-image');//for event listener
// var resultUl = document.getElementById('product-result');//for display

var totals;

var picture1Index = 0;
var picture2Index = 0;
var picture3Index = 2;
var totalClicks = 0;




//========================
function Picture (url, name) {  //constructor
  this.url = url;
  this.name = name;
  this.clicked = 0;
  
  
  pictureObjects.push(this);
}
if (localStorage.pictureObjects){

  pictureObjects = JSON.parse(localStorage.getItem('pictureObjects'));
  
  

}
else{
  new Picture('img/bathroom.jpg', 'bathroom');
  new Picture('img/boots.jpg', 'boots');
  new Picture('img/breakfast.jpg', 'breakfast');
  new Picture('img/banana.jpg', 'banana');
  new Picture('img/bag.jpg', 'bag');
  // new Picture('img/bubblegum.jpg', 'bubblegum');
  // new Picture('img/chair.jpg', 'chair');
  // new Picture('img/cthulhu.jpg', 'cthulu');
  // new Picture('img/dog-duck.jpg', 'dog duck');
  // new Picture('img/dragon.jpg', 'dragon');
  // new Picture('img/pen.jpg', 'pen');
  // new Picture('img/pet-sweep.jpg', 'pen');
  // new Picture('img/scissors.jpg', 'scissors');
  // new Picture('img/shark.jpg', 'shark');
  // new Picture('img/sweep.png', 'sweep');
  // new Picture('img/tauntaun.jpg', 'tauntaun');
  // new Picture('img/unicorn.jpg', 'unicorn');
  // new Picture('img/usb.gif', 'usb');
  // new Picture('img/water-can.jpg', 'water can');
  // new Picture('img/wine-glass.jpg', 'wine glass');
  
  
  // console.error('objects created');
};




sectionEl.addEventListener('click', sectionCallback);

function sectionCallback(event) {
  noRepeat();
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
var cantBE=[];
var picture2 = [];
function noRepeat(){
  cantBE.push(picture1Index);//picture1 = 0 so no other image can be index 0
  console.log(cantBE);
  for (var i = 0; i <cantBE.length; i++){

    if (picture2Index === picture1Index[i]){
  
      chooseNewPictures();
    };

  };
  

};

function checkTotalClicks() {
 
  if(totalClicks >= 5){
  getNames();
  drawChart();
    // renderTotals();
    localStorage.setItem('pictureObjects', JSON.stringify(pictureObjects));
    sectionEl.removeEventListener('click', sectionCallback);

  }
}




function chooseNewPictures() {
  checkTotalClicks()
  picture1Index = Math.floor(Math.random() * pictureObjects.length);//ie .8 * 15
  
  imgEl1.src = pictureObjects[picture1Index].url; 
  
  picture2Index = Math.floor(Math.random() * pictureObjects.length); //outputs a number between 0 and length -1
  picture2.push(picture2Index);
  // console.log(picture2);
  imgEl2.src = pictureObjects[picture2Index].url;
  
  picture3Index = Math.floor(Math.random() * pictureObjects.length);
  imgEl3.src = pictureObjects[picture3Index].url; //url is a parameter
}

// function renderTotals(){      //creates and renders list items
  
// for (var i = 0; i < pictureObjects.length; i++){

//   var ulEl = document.getElementById('product-results');
//   var liEl = document.createElement('li');
  
//   liEl.textContent = pictureObjects[i].name + ' clicked: ' + pictureObjects[i].clicked + ' times';
//   ulEl.appendChild(liEl);

// }

// };

var clicksArray=[];
var nameArray =[];


function getNames(){
  for (var i = 0; i < pictureObjects.length; i++){
    nameArray[i] = pictureObjects[i].name;
    clicksArray[i]=pictureObjects[i].clicked;
  };
  // console.log(clicksArray);
};


var data = {
  
  labels: nameArray, // titles array we declared earlier
  datasets: [{
    
    data: clicksArray, // votes array we declared earlier
    backgroundColor: [
      'pink',
      'navy',
      'navy',
      'navy',
      'navy',
      'navy',
      'navy',
      'navy',
      'navy',
      'navy',
      'navy',
      'navy',
      'navy',
      'navy',
      'navy',
      'navy',
      'navy',
      'navy',
      'navy',
      'navy',
      'navy',
    ],
    hoverBackgroundColor: [
      'purple',
      'purple',
      'purple',
      'purple',
      'purple',
      'purple',
      'purple',
      'purple',
      'purple',
      'purple',
      'purple',
      'purple',
      'purple',
      'purple',
      'purple',
      'purple',
      'purple',
      'purple',
      'purple',
      'purple',
    ]
  }]
};

function drawChart() {
  var ctx = document.getElementById('chart-render').getContext('2d');
  totals = new Chart(ctx, {
    type: 'horizontalBar',
    data: data,
    options: {
      responsive: false,
      animation: {
        duration: 1000,
        easing: 'easeOutBounce'
      }
    },
    scales: {
      yAxes: [{
        ticks: {
          max: 10,
          min: 0,
          stepSize: 1.0
        }
      }]
    }
  });
  // chartDrawn = true;
}

chooseNewPictures();
getNames();

