'use strict';


//global variables
var pictureObjects = [];

var sectionEl = document.getElementById('item-blocks') //for event listener
var imgEl1 = document.getElementById('first-image');//for event listener
var imgEl2 = document.getElementById('second-image');//for event listener
var imgEl3 = document.getElementById('third-image');//for event listener


var totals;

var picture1Index = 0;
var picture2Index = 0;
var picture3Index = 0;
var totalClicks = 0;



function Picture(src, name) {
  this.url = src;
  this.name = name;
  this.clicked = 0;

  pictureObjects.push(this);
}



if (localStorage.pictureObjects){//pictureobject is the key

  pictureObjects = JSON.parse(localStorage.getItem('pictureObjects'));
  
  

}
else{
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
  new Picture('img/pet-sweep.jpg', 'pen');
  new Picture('img/scissors.jpg', 'scissors');
  new Picture('img/shark.jpg', 'shark');
  new Picture('img/sweep.png', 'sweep');
  new Picture('img/tauntaun.jpg', 'tauntaun');
  new Picture('img/unicorn.jpg', 'unicorn');
  new Picture('img/usb.gif', 'usb');
  new Picture('img/water-can.jpg', 'water can');
  new Picture('img/wine-glass.jpg', 'wine glass');
  
  
  // console.error('objects created');
};




sectionEl.addEventListener('click', sectionCallback);

function sectionCallback(event) {
  checkTotalClicks();

  if(event.target.id){
    totalClicks++;
    pictureObjects[event.target.id].clicked++;

    chooseNewPictures();
  } else {
    alert('click on an image');
  }
};


function checkTotalClicks() {
 
  if(totalClicks >= 25){
  getNames();
  drawChart();
   alert('Thanks for your input! Have a nice day (:')
    localStorage.setItem('pictureObjects', JSON.stringify(pictureObjects));
    sectionEl.removeEventListener('click', sectionCallback);

  }
};



function chooseNewPictures() {

  var cantBeThis = [picture1Index, picture2Index, picture3Index];
  var previous1 = picture1Index; 0
  var previous2 = picture2Index; 1
  var previous3 = picture3Index; 2

  do{
    picture1Index = Math.floor(Math.random() * pictureObjects.length);
  } while (cantBeThis.includes(picture1Index));
  cantBeThis.push(picture1Index);

  do{
    picture2Index = Math.floor(Math.random() * pictureObjects.length);
  } while (cantBeThis.includes(picture2Index));
  cantBeThis.push(picture2Index);

  do {
    picture3Index = Math.floor(Math.random() * pictureObjects.length);
  } while (cantBeThis.includes(picture3Index));

  imgEl1.src = pictureObjects[picture1Index].url;
  imgEl1.id = picture1Index; //sets the image id = to the reference of its corresponding object's position in the array of all images
  imgEl2.src = pictureObjects[picture2Index].url;
  imgEl2.id = picture2Index;
  imgEl3.src = pictureObjects[picture3Index].url;
  imgEl3.id = picture3Index;

};



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
      'yellow',
      'yellow',
      'yellow',
      'yellow',
      'yellow',
      'yellow',
      'yellow',
      'yellow',
      'yellow',
      'yellow',
      'yellow',
      'yellow',
      'yellow',
      'yellow',
      'yellow',
      'yellow',
      'yellow',
      'yellow',
      'yellow',
      'yellow',
      'yellow',
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

