let gameseq = [];
let userseq = [];
let started = false;
let level = 0;
let color = ["red", "blue", "green", "yellow"];
let h2 = document.querySelector("h2");


document.addEventListener("keypress", () => {
    if (started == false) {
        started = true;
        document.querySelector("h2").innerHTML = `level ${level}`
        levelup();
    }
   
})

function btnflash(btnn) {
    btnn.classList.add("flash");
    setTimeout(() => {
        btnn.classList.remove("flash");
    }, 250)

}

function levelup() {
    userseq = [];
    level++;
    h2.innerText = `level ${level}`;
    let rndindex = Math.floor(Math.random() * 3);
    let rndcolor = color[rndindex];
    // console.log(rndcolor);

    let btn = document.querySelector(`.${rndcolor}`);
    // console.log(btn);
    gameseq.push(rndcolor)
    console.log(gameseq);
    btnflash(btn);
}

function checkans(index) {
    
    if (userseq[index] == gameseq[index]) {
        if (gameseq.length == userseq.length) {
            setTimeout(levelup, 1000);
            
        }

    }
    else {
        h2.innerText = `Game over ! click any key to restart and your score is ${level}`
        let bc=document.querySelector("body");
        console.log(bc);
        bc.classList.add("bcc")
        setTimeout(()=>{
            bc.classList.remove(`bcc`)
        },200)
        var audio = document.getElementById('myAudio');
        audio.play();
        setTimeout(function() {
            
           audio.remove();
        }, 5000);





        reset();

    }

}



function btnpress() {
    let btn = this;
    btnflash(btn)
    let usercolor = btn.getAttribute("id");
    userseq.push(usercolor);
    checkans(userseq.length - 1);

}

let btns = document.querySelectorAll(".btn")

for (btn of btns) {
    btn.addEventListener("click", btnpress)
}

// btns.forEach((btn)=>{
//     btn.addEventListener("click",()=>{
//         btnpress(btn);
// })
// })


function reset() {
    gameseq = [];
    userseq = [];
    started = false;
    level = 0;
}