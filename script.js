let img = document.getElementById('img1');
let newBtn = document.getElementById('newBtn');
let crunch  = new Audio('crunch.mp3')

img.addEventListener('click',function(){
    crunch.play();
    changeImage();
    showButton();
    fortune();
    btn();
})

function changeImage(){
    img.src = 'broken.png';
}

function showButton(){
    newBtn.style.display = 'inline';
}


/*function fadeOutImage() {
    setTimeout(() => {
        img.classList.add("fade-out");
      }, 2000);
}*/

let fortuneList = [
    "You are seriously seeking wisdom from a cookie?",
    "Even this cookie questions its own existence.",
    "You think therefore... you overthink.",
    "You will discover nothing. And it will be profound.",
    "The cookie sees all. It just doesnt care.",
    "Your destiny has been outsourced.",
    "If life gives you lemons, question why it didnt give cookies."
]

let displayText = document.querySelector('.fortuneText')

function fortune(){

    if(fortuneList.length > 0){
        while (fortuneList.length > 0){
            const random = Math.floor(Math.random() * fortuneList.length);
            displayText.innerHTML = fortuneList[random]
            fortuneList.splice(random, 1)
            return
        }
    } else {
        displayText.innerHTML = "You've exhausted the cookie. Are you proud of yourself?"
    }

}

let btnText = [
    "This is not how enlightenment works.",
    "The cookie is disappointed that you are disappointed.",
    "The cookie judges in silence...",
    "The next fortune may or may not help. Probably not.",
    "You keep pushing the button. Who is really in control here?",
    "Each click shatters another piece of the cookies fragile ego.",
    "You are breaking the cookie...and its heart"
]

let extraText = document.querySelector('.extraText');
function btn(){


    if(btnText.length > 0){
        while (btnText.length > 0){
            const random = Math.floor(Math.random() * fortuneList.length);
            extraText.innerHTML = btnText[random];
            btnText.splice(random, 1)
            return
        }
    } else {
        extraText.innerHTML = "No more wisdom for you. Go live a little."
    }

}

function reset(){
    newBtn.style.display = 'none'
    img.src = "cookie.png";
    displayText.innerHTML = "";
    extraText.innerHTML = "";
}

newBtn.addEventListener("click", reset)