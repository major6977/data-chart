setInterval(function () {
  function getRandomNumbers(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  let sessionsNums = (document.querySelector("#sessionsNums").innerText =
    getRandomNumbers(2310, 2330));
  //  let sessionsTriRed = document.querySelector("#sessionsTriRed");

  if (sessionsNums < 2324) {
    sessionsTriRed.style.backgroundColor = "red";
    sessionsTriRed.style.display = "block";
    sessionsTriGreen.style.display = "none";
  } else if (sessionsNums > 2324) {
    sessionsTriGreen.style.backgroundColor = "green";
    sessionsTriGreen.style.display = "block";
    sessionsTriRed.style.display = "none";
  }
}, 2000);

// Bounce Rate Functions

setInterval(function () {
  function getRandomNumbers(min, max) {
    return Math.random() * (max - min + 1) + min;
  }

  let todayBrTriRed = document.querySelector("#todayBrTriRed");
  let todayBrTriGreen = document.querySelector("#todayBrTriGreen");
  let bounceRate = (document.querySelector("#todayBr").innerText =
    getRandomNumbers(4, 10).toFixed(2));
  if (bounceRate < 7) {
    todayBrTriRed.style.backgroundColor = "red";
    todayBrTriRed.style.display = "block";
    todayBrTriGreen.style.display = "none";
  } else if (bounceRate > 7) {
    todayBrTriGreen.style.backgroundColor = "green";
    todayBrTriGreen.style.display = "block";
    todayBrTriRed.style.display = "none";
  }
}, 1000);

// Movement Functions for ASD Numbers

setInterval(function () {
  function getRandomNumbers(min, max) {
    return Math.random() * (max - min + 1) + min;
  }

  let asdTriRed = document.querySelector("#asdTriRed");
  let asdTriGreen = document.querySelector("#asdTriGreen");
  let asdNumbs1 = (document.querySelector("#asdNumbs1").innerText =
    getRandomNumbers(125, 160).toFixed(1));

  if (asdNumbs1 < 142) {
      asdTriRed.style.display = "block";
      asdTriGreen.style.display = "none";  
  }
  else if (asdNumbs1 > 142) {
    asdTriGreen.style.display = "block";
    asdTriRed.style.display = "none";  
 }
}, 2500);


setInterval(function () {
  function getRandomNumbers(min, max) {
    return Math.random() * (max - min + 1) + min;
  }

  let asdTriRed2 = document.querySelector("#asdTriRed2");
  let asdTriGreen2 = document.querySelector("#asdTriGreen2");
  let asdNumbs2 = (document.querySelector("#asdNumbs2").innerText =
    getRandomNumbers(125, 160).toFixed(1));

  if (asdNumbs2 < 142) {
      asdTriRed2.style.display = "block";
      asdTriGreen2.style.display = "none";  
  }
  else if (asdNumbs2 > 142) {
    asdTriGreen2.style.display = "block";
    asdTriRed2.style.display = "none";  
 }
}, 2500);

// New Users 


setInterval(function () {
  function getRandomNumbers(min, max) { 
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const nuTriRed = document.querySelector("#nuTriRed");
  const nuTriGreen = document.querySelector("#nuTriGreen");
  const nuNumbs = getRandomNumbers(42987, 60223);
  const nuNumbsString = document.querySelector("#nuNumbs").innerText = nuNumbs.toLocaleString("en-US");
  
  if (nuNumbs < 50000) {
      nuTriRed.style.display = "block";
      nuTriGreen.style.display = "none";  
  } else {
    nuTriGreen.style.display = "block";
    nuTriRed.style.display = "none";  
  }
 
}, 3500);
