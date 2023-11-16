let valueOfButton=0;//מקבל את ערך המשתנה מהכפתור
let random=Math.floor(Math.random() * 3) + 1;// מספר רנדומלי לערך המחשב
let playerPoints=0;// מספר הנקודות שיש לשחקן
let computerPoint=0; // מספר הנקודות שיש למחשב
console.log("random: "+random);
document.getElementById("myPoint").innerHTML=playerPoints; // מכניס את הערך הראשוני(0) למספר הנקודות של השחקן
document.getElementById("computerPoint").innerHTML=computerPoint // מכניס את הערך הראשוני(0) למספר הנקודות של השחקן

// פןנקציה שחוסמת חזרה אחורה
function preventBack() {
    window.history.forward();
}

setTimeout("preventBack()", 0);
window.onunload = function() {
    null
}

// הוספת תמונה לבר
const imgDiv = document.getElementById("img");
fetch(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=1`).then(response => response.json()).then(data => { imgDiv.innerHTML = data.map(item => `<div> <img id="img" src="${item.url}" /> </div>`).join('') })
  
// מייבא את השם מהלוקלסטורג' מהדף כניסה
var data=window.localStorage.getItem("user");
console.log(data);

// מכניס את השם שהזנת בזמן כניסה למיקום השם בדף המשחק
document.getElementById("yourName").innerHTML=data;

// פונקציה הנמצאת בכפתור שמחשבת את הפונקציות הפנימיות על סמך הערך שנתנו לכל כפתור
function choice(num){
    valueOfButton=num; // מייב את המספר ששמנו בכפתור הנלחץ ומכניס למשתנה
    console.log(valueOfButton);
    calculatePointPlayer(); // פונקציה לחישוב נקודות השחקן
    calculatePointComputer();// פונקציה לחישוב נקודות המחשב
    random=Math.floor(Math.random() * 3) + 1; // אחרי הלחיצה והחישוב אני רוצה שוב מספר רנדומלי לתור הבא
    console.log("random: "+random);

}
// פונקציה המחשבת את נקודות השחקן
function calculatePointPlayer(){
    if(valueOfButton==1&&random==2){
        playerPoints+=1;
        console.log(playerPoints);
        document.getElementById("myPoint").innerHTML=playerPoints;
    }else if(valueOfButton==2&&random==3){
        playerPoints+=1;
        console.log(playerPoints);
        document.getElementById("myPoint").innerHTML=playerPoints;
    }else if(valueOfButton==3&&random==1){
        playerPoints+=1;
        console.log(playerPoints);
        document.getElementById("myPoint").innerHTML=playerPoints;
    }
}
// פונקציה המחשבת את נקודות המחשב
function calculatePointComputer(){
    if(valueOfButton==2&&random==1){
        computerPoint+=1;
        console.log(computerPoint);
        document.getElementById("computerPoint").innerHTML=computerPoint;
    }else if(valueOfButton==3&&random==2){
        computerPoint+=1;
        console.log(computerPoint);
        document.getElementById("computerPoint").innerHTML=computerPoint;
    }else if(valueOfButton==1&&random==3){
        computerPoint+=1;
        console.log(computerPoint);
        document.getElementById("computerPoint").innerHTML=computerPoint;
    }
}

