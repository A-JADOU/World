// document.onclick = function(){
//   console.log("Ahmed Jadou Did you click me?");
// }; 

var images = document.getElementById("images");
var imagesArray = ["./img/001.gif","./img/002.jpg","./img/003.png","./img/004.jpg"];
var imageIndex = 0;

function slideshow(){
  images.setAttribute("src",imagesArray[imageIndex]);
  imageIndex++;
  if(imageIndex >= imagesArray.length){
    imageIndex = 0;
  }
}
  // set a timeout
  //setTimeout(functionName,3000);

  // repeat timer
  var iH = setInterval(slideshow,5000);

  document.onclick=function(){
      console.log("youclick");
      clearInterval(iH);
    };
