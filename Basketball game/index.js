
let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")

let homeWinner = document.getElementById("home")
let guestWinner = document.getElementById("guest")

let home = homeWinner.textContent
let guest = guestWinner.textContent
let colorText = ""

let reset = 0
let countH = reset
let countG = reset

function ifClause(){
    if(homeScore.textContent > guestScore.textContent)
    {
        homeWinner.textContent = home + "🤩"

        guestWinner.textContent = guest + "😞"
    }
    else if(homeScore.textContent < guestScore.textContent)
    {
        guestWinner.textContent = guest + "🤩"
        homeWinner.textContent = home + "😞"
    }
    else if(homeScore.textContent === guestScore.textContent)
    {
        homeWinner.textContent = home + "🙂"
        guestWinner.textContent = guest + "🙂"
    }
}

function ifWin() {
    if(homeScore.textContent >= 24)
    {
        homeWinner.textContent = "WINNER" + "🥳"
        guestWinner.textContent = "LOSER" + "😡"
        setTimeout(PA, 5000)
    }
    else if (guestScore.textContent >= 24)
    {
        guestWinner.textContent = "WINNER" + "🥳"
        homeWinner.textContent = "LOSER" + "😡"
        setTimeout(PA, 5000)
    }
}

ifWin()
ifClause()

    //Home add

function Hadd1(){
    countH += 1
    homeScore.textContent = countH
    
    ifClause()
    ifWin()
}

function Hadd2(){
    countH += 2
    homeScore.textContent = countH
    
    ifClause()
    ifWin()
}

function Hadd3(){
    countH += 3
    homeScore.textContent = countH
    
    ifClause()
    ifWin()
}

    //Guest add

function Gadd1(){
    countG += 1
    guestScore.textContent = countG
    
    ifClause()
    ifWin()
}

function Gadd2(){
    countG += 2
    guestScore.textContent = countG
    
    ifClause()
    ifWin()
}

function Gadd3(){
    countG += 3
    guestScore.textContent = countG
    
    ifClause()
    ifWin()
}



    // PLAY AGAIN

function PA(){
    countG = reset
    countH = reset  
    homeScore.textContent = reset
    guestScore.textContent = reset

    ifClause()
    ifWin()
}

