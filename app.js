var rockButton = document.getElementById("rock");
var paperButton = document.getElementById("paper");
var scissorButton = document.getElementById("scissor");
var playerDisp = document.getElementById("playerScore");
var cpuDisp = document.getElementById("cpuScore");
var outputImage = document.getElementById("outputImg");
var resetGame = document.getElementById("reset");
var giveUp = document.getElementById("giveup");
var playerScore = 0;
var cpuScore = 0;
var gameOver = false;


function cpuGame() {
    var cpuSelection = Number(Math.floor((Math.random() * 3) + 1));
    if (cpuSelection === 1) {
        outputImage.src = "img/rock.png";
    } else if (cpuSelection === 2) {
        outputImage.src = "img/paper.jpg";
    } else if (cpuSelection === 3) {
        outputImage.src = "img/scissor.png";
    }
    return cpuSelection;
}

rockButton.addEventListener("click", function () {
    if (!gameOver) {
        var choice = cpuGame();
        if (choice === 1) {
            playerDisp.textContent = playerScore;
            cpuDisp.textContent = cpuScore;
        } else if (choice === 2) {
            cpuScore++;
            playerDisp.textContent = playerScore;
            cpuDisp.textContent = cpuScore;
        } else if (choice === 3) {
            playerScore++;
            playerDisp.textContent = playerScore;
            cpuDisp.textContent = cpuScore;
        }
    }
    if (playerScore === 10) {
        playerDisp.textContent = "You win!";
        cpuDisp.textContent = "You lose.";
        gameOver = true;

    } else if (cpuScore === 10) {
        playerDisp.textContent = "You lose.";
        cpuDisp.textContent = "You win!";
        gameOver = true;

    }
});

paperButton.addEventListener("click", function () {
    if (!gameOver) {
        var choice = cpuGame();
        if (choice === 1) {
            playerScore++;
            playerDisp.textContent = playerScore;
            cpuDisp.textContent = cpuScore;
        } else if (choice === 2) {
            playerDisp.textContent = playerScore;
            cpuDisp.textContent = cpuScore;
        } else if (choice === 3) {
            cpuScore++;
            playerDisp.textContent = playerScore;
            cpuDisp.textContent = cpuScore;

        }
    }
    if (playerScore === 10) {
        playerDisp.textContent = "You win!";
        cpuDisp.textContent = "You lose.";
        gameOver = true;

    } else if (cpuScore === 10) {
        playerDisp.textContent = "You lose.";
        cpuDisp.textContent = "You win!";
        gameOver = true;

    }
});

scissorButton.addEventListener("click", function () {
    if (!gameOver) {
        var choice = cpuGame();
        if (choice === 1) {
            cpuScore++;
            playerDisp.textContent = playerScore;
            cpuDisp.textContent = cpuScore;
        } else if (choice === 2) {
            playerScore++;
            playerDisp.textContent = playerScore;
            cpuDisp.textContent = cpuScore;

        } else if (choice === 3) {
            playerDisp.textContent = playerScore;
            cpuDisp.textContent = cpuScore;
        }
    }
    if (playerScore === 10) {
        playerDisp.textContent = "You win!";
        cpuDisp.textContent = "You lose.";
        gameOver = true;
    } else if (cpuScore === 10) {
        playerDisp.textContent = "You lose.";
        cpuDisp.textContent = "You win!";
        gameOver = true;
    }
});

function reset() {
    playerScore = 0;
    cpuScore = 0;
    playerDisp.textContent = playerScore;
    cpuDisp.textContent = cpuScore;
    gameOver = false;
}

resetGame.addEventListener("click", function () {
    reset();
})

giveUp.addEventListener("click", function () {
    if (!gameOver) {
        playerDisp.textContent = "You gave up!";
        cpuDisp.textContent = "You win!";
    }

})
=======
});

