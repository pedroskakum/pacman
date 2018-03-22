var stage = document.createElement('canvas');
var w = stage.width = 200;
var h = stage.height = 200;
var colorBackground = stage.style.background = 'black';
document.body.appendChild(stage);

var cnv = stage.getContext('2d');
var r = 40;
var angle = 1;
var limit = 40;
var colorPacMan = 'yellow';
var opening = true;


function draw(){
  var ang = (Math.PI/180)*angle;
  
  cnv.strokeStyle = cnv.fillStyle = colorBackground;
  cnv.arc(w/2, h/2, r, 0, Math.PI*2);
  cnv.lineWidth = 82;
  cnv.stroke();
  cnv.fill();
  cnv.beginPath();
  cnv.fillStyle = colorPacMan;
  cnv.strokeStyle = colorPacMan;
  cnv.lineWidth = 81;
  cnv.arc(w/2, h/2, r, ang, -ang);
  cnv.stroke();
 
}

function animate(){
  setInterval(function(){
     draw();
     if(opening)
       ++angle;
     else
       --angle;
     if(angle <= 1 || angle >= limit)
       opening = !opening;
  }, 10);
}

animate();
