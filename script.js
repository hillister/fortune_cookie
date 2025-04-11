let img = document.getElementById('img1');
let newBtn = document.getElementById('newBtn');
let crunch  = new Audio('crunch.mp3')

img.addEventListener('click',function(){
    crunch.play();
    changeImage();
    showButton();
    fadeOutImage();
    fortune()
})

function changeImage(){
    img.src = 'broken.png';
}

function showButton(){
    newBtn.style.display = 'inline';
}


function fadeOutImage() {
    setTimeout(() => {
        img.classList.add("fade-out");
      }, 2000);
}

let fortuneList = [
    "You are seriously seeking wisdom from a cookie?",
    "Even this cookie questions its own existence.",
    "You think therefore... you overthink.",
    "You will discover nothing. And it will be profound.",
    "The cookie sees all. It just doesnt care.",
    "Your destiny has been outsourced.",
    "If life gives you lemons, question why it didnt give cookies."
]

function fortune(){
    if(fortuneList.length > 0){
        while (fortuneList.length > 0){
            const random = Math.floor(Math.random() * fortuneList.length);
            console.log(fortuneList[random])
            fortuneList.splice(random, 1)
            return
        }
    } else {
        console.log("You've exhausted the cookie. Are you proud of yourself?") 
        console.log("No more wisdom for you. Go live a little.")
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


