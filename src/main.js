var score1 = 0;
var score2 = 0;
var gameWrapper = ["r", "p", "s"];
var gameUserImg = document.querySelector("#gameUserImg");
var gameCompImg = document.querySelector("#gameCompImg");
var gameUserScore = document.querySelector("#gameUserScore")
var gameCompScore = document.querySelector("#gameCompScore")
var win1 = document.querySelector("#win1");
var win2 = document.querySelector("#win2");

function findRandom(arr) {
    var randomArray = Math.floor(Math.random() * gameWrapper.length);
    return arr[randomArray]
}

function Start(e) {

    var userSelect = e.key.toLowerCase();
    var compRandom = findRandom(gameWrapper);
    gameUserImg.src = `./assets/${userSelect}.png`
    gameCompImg.src = `./assets/${compRandom}.png`
    if (gameWrapper.indexOf(userSelect) === -1) {
        alert("Only: 'r' 'p' 's'")
        return
    }
    if (score1 >= 5 || score2 >= 5) {
        alert("Oyun bitdi, cigallig eleme :)");
        score1 = 0;
        score2 = 0;
        return
    }
    if (userSelect === compRandom) {
        console.log("Draw");
        win1.innerHTML = "DRAW";
        win2.innerHTML = "DRAW";
    } else if (userSelect === "r" && compRandom === "s") {
        gameUserScore.innerHTML = `${score1++}`
        win1.innerHTML = "WIN";
        win2.innerHTML = "LOSE";
    } else if (userSelect === "p" && compRandom === "s") {
        gameUserScore.innerHTML = `${score1++}`
        win1.innerHTML = "WIN";
        win2.innerHTML = "LOSE";
    } else if (userSelect === "s" && compRandom === "p") {
        gameUserScore.innerHTML = `${score1++}`
        win1.innerHTML = "WIN";
        win2.innerHTML = "LOSE";
    } else {
        gameCompScore.innerHTML = `${score2++}`
        win1.innerHTML = "LOSE";
        win2.innerHTML = "WIN";
    }
}
window.onkeypress = Start;