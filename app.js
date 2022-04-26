function run(){
    
    getCard()
}

function getCard(){
    var r = Math.floor(Math.random() *10) +1
     var suitArray = ["C", "D" ,"H" ,"S"]
     var randonSuit = Math.floor(Math.random() * 4) // 0 to 3
    document.getElementById("card").insertAdjacentHTML("beforeend", "<img src= images/" + r + suitArray[randonSuit] + ".jpg>")
}

function randomNum() {
    do{
        var ran = getCard()
        CpTotal = CpTotal + a
    }while (CpTotal < 16);
    getCard()
    return CpTotal

    
}

function user() {
    do{
        var ran = getCard()
        usTotal = usTotal + ran; 
}while() {

}

function humanNumber() {
    let user = document.getElementById("getNumber").value;
    let w = document.getElementById("userNumber")
    w.innerHTML = user;
    w.style.color = "green"
    w.style.backgroundColor = "lightgreen"
    w.style.padding = "20px"
    w.style.textAlign = "center"
    return human;
}

// function compareNumbers() {
//     let c = userNumber();
//     let b = randomNum();
//     let d = document.getElementById("compare")
//     if (c != b) {
//         z.innerHTML = "Numbers are not the same. The computer got " + b + ", user got " + c;
//         z.style.color = "lightgreen"
//         z.style.backgroundColor = "darkgreen"
//         z.style.padding = "20px"
//         z.style.textAlign = "center"
//     } else if ( c == b) {
//         z.innerHTML = "Numbers are the same. The computer got " + b + ", user got " + c;
//         z.style.color = "darkgreen"
//         z.style.backgroundColor = "lightgreen"
//         z.style.padding = "20px"
//         z.style.textAlign = "center"
//     }