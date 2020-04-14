var mainTitle = document.getElementById("mainTitle");

window.addEventListener("scroll",function(e){
  if(window.scrollY > 7){
    mainTitle.style.animationName = "toWhite";
    mainTitle.style.animationDuration = "0.3s";
    mainTitle.style.backgroundColor = "white";
    mainTitle.style.borderBottom = "1px solid #cccccc";
  }
  else
  {
    mainTitle.style.animationName = "toClear";
    mainTitle.style.animationDuration = "0.3s";
    mainTitle.style.backgroundColor = "transparent";
    mainTitle.style.borderBottom = "1px solid transparent";
  }
})
var hamButton = document.getElementById("hamburgerButton");
var hamTop = document.getElementById("TopHamburger");
var hamMid = document.getElementById("MidHamburger");
var hamLow = document.getElementById("LowHamburger");
var sidebar1 = document.getElementById("sidebar1");
sidebar1.style.height = window.innerHeight.toString()+"px";
var toggle = false;
sidebar1.addEventListener("animationend",function(e){
    hamLow.style.animationPlayState = "paused";
    hamMid.style.animationPlayState = "paused";
    hamTop.style.animationPlayState = "paused";
    sidebar1.style.animationPlayState = "paused";
    hamTop.style.animationName = "unset";
    hamMid.style.animationName = "unset";
    hamLow.style.animationName = "unset";
    sidebar1.style.animationName = "unset";
});
hamButton.addEventListener('click',function(e){
  if(toggle == false){
    toggle = true;
    hamTop.style.animationName = "toDownX";
    hamTop.style.animationDuration = "0.3s";
    hamTop.style.animationDirection = "normal";
    hamTop.style.animationPlayState = "running";
    hamTop.style.left = "15px";
    hamTop.style.top = "23px";
    hamTop.style.transform = "rotate(45deg)";
    
    /*        left:15px; 
        top:25px; 
        transform:rotate(45deg);*/
    hamLow.style.animationName = "toUpX";
    hamLow.style.animationDuration = "0.3s";
    hamLow.style.left = "15px";
    hamLow.style.top = "15px";
    hamLow.style.transform = "rotate(-45deg)";
    hamLow.style.animationDirection = "normal";
    hamLow.style.animationPlayState = "running";

    hamMid.style.animationName = "toNoX";
    hamMid.style.animationDuration = "0.3s";
    hamMid.style.width = "0px";
    hamMid.style.animationDirection = "normal";
    hamMid.style.animationPlayState = "running";

    sidebar1.style.animationName = "toOpenSidebar";
    sidebar1.style.animationDirection = "normal";
    sidebar1.style.animationDuration = "0.3s";
    sidebar1.style.width = "220px";
    sidebar1.style.padding = "0px 20px 0px 20px";
    sidebar1.style.animationPlayState = "running";
  }
  else
  {
    
    toggle = false;
    hamTop.style.animationName = "toDownX";
    hamTop.style.animationDuration = "0.3s";
    hamTop.style.animationDirection = "reverse";
    hamTop.style.left = "15px";
    hamTop.style.top = "15px";
    hamTop.style.transform = "rotate(0deg)";
    hamTop.style.animationPlayState = "running";
    /*        left:15px; 
        top:25px; 
        transform:rotate(45deg);*/
    hamLow.style.animationName = "toUpX";
    hamLow.style.animationDuration = "0.3s";
    hamLow.style.left = "15px";
    hamLow.style.top = "22px";
    hamLow.style.transform = "rotate(0deg)";
    hamLow.style.animationDirection = "reverse";
    hamLow.style.animationPlayState = "running";

    hamMid.style.animationName = "toNoX";
    hamMid.style.animationDuration = "0.3s";
    hamMid.style.width = "20px";
    hamMid.style.animationDirection = "reverse";
    hamMid.style.animationPlayState = "running";

    sidebar1.style.animationName = "toOpenSidebar";
    sidebar1.style.animationDirection = "reverse";
    sidebar1.style.animationDuration = "0.3s";
    sidebar1.style.width = "0px";
    sidebar1.style.padding = "0px 0px 0px 0px"
    sidebar1.style.animationPlayState = "running";
  }
});

window.addEventListener('resize',function(e){
    sidebar1.style.height = window.innerHeight.toString()+"px";
});
