let counter1 = 33;
let counter2 = 33;
let counter3 = 33;
let counter4 = 10;
let counter5 = 100;
let counter6 = 100;

let counters = counter1 + counter2 + counter3 + counter4 + counter5 + counter6;

var counter0 = `
<div class="result">
  <span>المجموع</span>
  <span>${counters}</span>
</div>`;

let body = document.querySelector(".inner");
body.innerHTML = `
<div class="container">
  <div class="parent">
  <div class="slider" id="slider1">
    <div class="text">سبحان الله</div>
    <button onclick="go()" id="btn1">${counter1}</button>
  </div>
  
  <div class="slider" id="slider2">
    <div class="text">الحمد لله</div>
    <button onclick="goo()" id="btn2">${counter2}</button>
  </div>
  
  <div class="slider" id="slider3">
    <div class="text">الله أكبر</div>
    <button onclick="gooo()" id="btn3">${counter3}</button>
  </div>
  
  <div class="slider" id="slider4">
    <div class="text">لا إله إلا الله</div>
    <button onclick="goooo()" id="btn4">${counter4}</button>
  </div>
  
  <div class="slider" id="slider5">
    <div class="text">اللهم صل على محمد</div>
    <button onclick="gooooo()" id="btn5">${counter5}</button>
  </div>
  
  <div class="slider" id="slider6">
    <div class="text">أستغفر الله</div>
    <button onclick="goooooo()" id="btn6">${counter6}</button>
  </div>
  </div>
</div>
`;

function go() {
  if (counter1 > 0) {
    counter1 -= 1;
    document.querySelector("#btn1").innerHTML = counter1;
    navigator.vibrate([20]);
    
    if (counter1 == 0) {
      document.querySelector("#slider1").style.opacity = "0";
      
      setTimeout(function() {
        document.querySelector("#slider1").style.display = "none";
      }, 500);
      
      if (counter1 == 0 && counter2 == 0 && counter3 == 0 && counter4 == 0 && counter5 == 0 && counter6 == 0) {

      body.innerHTML = counter0;
      navigator.vibrate([100])
      } else {
      console.error("not equal 0");
      }
    }
  } else {
    console.error("error call Mohamed Zaky");
  }
};

function goo() {
  if (counter2 > 0) {
    counter2 -= 1;
    document.querySelector("#btn2").innerHTML = counter2;
    navigator.vibrate([20]);
    
    if (counter2 == 0) {
      document.querySelector("#slider2").style.opacity = "0";
      setTimeout(function() {
        document.querySelector("#slider2").style.display = "none";
      }, 500);
      
      if (counter1 == 0 && counter2 == 0 && counter3 == 0 && counter4 == 0 && counter5 == 0 && counter6 == 0) {

      body.innerHTML = counter0;
      navigator.vibrate([100])
      } else {
      console.error("not equal 0");
      }
    }
  } else {
    console.error("error call Mohamed Zaky");
  }
};

function gooo() {
  if (counter3 > 0) {
    counter3 -= 1;
    document.querySelector("#btn3").innerHTML = counter3;
    navigator.vibrate([20]);
    
    if (counter3 == 0) {
      document.querySelector("#slider3").style.opacity = "0";
      setTimeout(function() {
        document.querySelector("#slider3").style.display = "none";
      }, 500);
      
      if (counter1 == 0 && counter2 == 0 && counter3 == 0 && counter4 == 0 && counter5 == 0 && counter6 == 0) {

      body.innerHTML = counter0;
      navigator.vibrate([100]);
      } else {
      console.error("not equal 0");
      }
      
    }
  } else {
    console.error("error call Mohamed Zaky");
  }
};

function goooo() {
  if (counter4 > 0) {
    counter4 -= 1;
    document.querySelector("#btn4").innerHTML = counter4;
    navigator.vibrate([20]);
    
    if (counter4 == 0) {
      document.querySelector("#slider4").style.opacity = "0";
      setTimeout(function() {
        document.querySelector("#slider4").style.display = "none";
      }, 500);
      
      if (counter1 == 0 && counter2 == 0 && counter3 == 0 && counter4 == 0 && counter5 == 0 && counter6 == 0) {

      body.innerHTML = counter0;
      navigator.vibrate([100]);
      } else {
      console.error("not equal 0");
      }
      
    }
  } else {
    console.error("error call Mohamed Zaky");
  }
};

function gooooo() {
  if (counter5 > 0) {
    counter5 -= 1;
    document.querySelector("#btn5").innerHTML = counter5;
    navigator.vibrate([20]);
    
    if (counter5 == 0) {
      document.querySelector("#slider5").style.opacity = "0";
      setTimeout(function() {
        document.querySelector("#slider5").style.display = "none";
      }, 500);
      
      if (counter1 == 0 && counter2 == 0 && counter3 == 0 && counter4 == 0 && counter5 == 0 && counter6 == 0) {
      body.innerHTML = counter0;
      navigator.vibrate([100]);

      } else {
      console.error("not equal 0");
      }
      
    }
  } else {
    console.error("error call Mohamed Zaky");
  }
};

function goooooo() {
  if (counter6 > 0) {
    counter6 -= 1;
    document.querySelector("#btn6").innerHTML = counter6;
    navigator.vibrate([20]);
    
    if (counter6 == 0) {
      document.querySelector("#slider6").style.opacity = "0";
      setTimeout(function() {
        document.querySelector("#slider6").style.display = "none";
      }, 500);
      
      if (counter1 == 0 && counter2 == 0 && counter3 == 0 && counter4 == 0 && counter5 == 0 && counter6 == 0) {
      body.innerHTML = counter0;
      navigator.vibrate([100]);

      } else {
      console.error("not equal 0");
      }
      
    }
  } else {
    console.error("error call Mohamed Zaky");
  }
};
