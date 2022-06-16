
let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")

let reset = 0
let countH = reset
let countG = reset

    //Home add

function Hadd1(){
    countH += 1
    homeScore.textContent = countH
}

function Hadd2(){
    countH += 2
    homeScore.textContent = countH
}

function Hadd3(){
    countH += 3
    homeScore.textContent = countH
}

    //Guest add

function Gadd1(){
    countG += 1
    guestScore.textContent = countG
}

function Gadd2(){
    countG += 2
    guestScore.textContent = countG
}

function Gadd3(){
    countG += 3
    guestScore.textContent = countG
}

    // PLAY AGAIN

function PA(){
    countG = reset
    countH = reset
    homeScore.textContent = reset
    guestScore.textContent = reset
}