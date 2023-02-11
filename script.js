let turn = "X";
let box = document.querySelectorAll(".box");
let marka = [];
let markb = [];
let p1 = "", p2 = "";
for (let i = 0; i < 9; i += 1) {
    box[i].addEventListener('click', move);
}
function condition(x, y) {
    return x - y;
}
function check(A) {
    let arr = A.sort(condition);
    for (let i = 0; i < arr.length - 2; i += 1) {
        if (arr[i] == 1 || arr[i] == 4 || arr[i] == 7) {
            if (arr[i + 1] == arr[i] + 1 && arr[i + 2] == arr[i] + 2) {
                return true;
            }
        }
        if (arr[i] == 1 || arr[i] == 2 || arr[i] == 3) {
            let val = false, temp = arr[i] + 3, cnt = 1;
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[j] === temp) {
                    cnt += 1;
                    temp += 3;
                    if (cnt === 3) {
                        return true;
                    }
                }
            }
        }
        if (arr[i] === 1) {
            let val = false, temp = arr[i] + 4, cnt = 1;
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[j] === temp) {
                    cnt += 1;
                    temp += 4;
                    if (cnt === 3) {
                        return true;
                    }
                }
            }
        }
        if (arr[i] === 3) {
            let val = false, temp = arr[i] + 2, cnt = 1;
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[j] === temp) {
                    cnt += 1;
                    temp += 2;
                    if (cnt === 3) {
                        return true;
                    }
                }
            }
        }
    }
    return false;
}
function move(e) {
    let tap = e.target;
    if (turn === "X") {
        document.getElementById(tap.id).innerHTML = turn;
        tap.style.backgroundColor="#333";
        tap.style.color="red";
        turn = "O"
        marka.push(Number(tap.id));
        if (check(marka)) {
            displayWinner(p1);
        }
    }
    else {
        document.getElementById(tap.id).innerHTML = turn;
        tap.style.backgroundColor="#333";
        tap.style.color="red";
        turn = "X";
        markb.push(Number(tap.id));
        if (check(markb)) {
            displayWinner(p2);
        }
    }
}
function displayWinner(name) {
    let msg = document.createElement('div');
    msg.id = "message";
    let d = `We have a winner <br> the winner is ${name}`;
    msg.innerHTML = d;
    document.querySelector(".view").appendChild(msg);
    msg = document.getElementById("message");
    msg.style.fontSize = "2rem";
    msg.style.backgroundColor = "darkcyan";
    msg.style.padding = "30px";
    msg.style.width = "80%";
    msg.style.margin = "auto";
    for (let i=0;i<9;i++){
        box[i].removeEventListener('click',move);
    }
}
function reset() {
    let temp = document.getElementById("message");
    if (temp != null) {
        document.querySelector(".view").removeChild(temp);
    }
    for (let i = 0; i < 9; i += 1) {
        box[i].innerHTML = "";
        box[i].style.backgroundColor="white";
    }
    marka = [];
    markb = [];
    turn = "X";
    for (let i = 0; i < 9; i += 1) {
        box[i].addEventListener('click', move);
    }
}
document.getElementById("start").addEventListener('click', start);
function start(e) {
    document.querySelector(".gameContainer").style.display = "block";
    const player1 = document.getElementById("player1");
    p1 = player1.value;
    const player2 = document.getElementById("player2");
    p2 = player2.value;
    e.preventDefault();
}