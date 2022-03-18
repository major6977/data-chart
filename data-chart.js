setInterval(function(){
    function getRandomNumbers(min, max){
         return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    let sessionsNums = document.querySelector("#sessionsNums").innerText = getRandomNumbers(2310, 2330);
    //  let sessionsTriRed = document.querySelector("#sessionsTriRed");
     
     if (sessionsNums < 2324) {
         sessionsTriRed.style.backgroundColor = "red";
         sessionsTriRed.style.display="block";
         sessionsTriGreen.style.display="none";


     } else if(sessionsNums > 2324) {
         sessionsTriGreen.style.backgroundColor = "green";
         sessionsTriGreen.style.display="block";
         sessionsTriRed.style.display="none";
     }
}, 2000);



