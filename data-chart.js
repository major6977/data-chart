setInterval(function() {
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

            // Bounce Rate Functions

 setInterval(function() {
    function getRandomNumbers(min, max){
        return Math.floor(Math.random() * (max - min +1)) + min;
    }
    let bounceRate = document.querySelector("#todayBr").innerText = getRandomNumbers(4.59, 9.10);
        if (bounceRate < 7.99) {
            todayBrTriRed.style.backgroundColor = "red";
            todayBrTriRed.style.display="block";
            todayBrTriGreen.style.display="none";

        } else if(bounceRate > 7.99) {
            todayBrTriGreen.style.backgroundColor = "green";
            todayBrTriGreen.style.display="block";
            todayBrTriRed.style.display="none";
        }
 }, 1000);    



