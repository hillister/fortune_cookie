let img = document.getElementById('img1');
let newBtn = document.getElementById('newBtn');
let crunch  = new Audio('crunch.mp3')

img.addEventListener('click',function(){
    crunch.play();
    changeImage();
    showButton();
    fadeOutImage();
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
/*
text for empty array:
  "You've exhausted the cookie. Are you proud of yourself?",
  "No more wisdom for you. Go live a little.",
  "Even the cookie needs a break sometimes.",*/

/*
list of fortune cookie ideas:
"You are seriously seeking wisdom from a cookie?"
"Even this cookie questions its own existence."
"You think therefore... you overthink."
"You will discover nothing. And it will be profound."
"The cookie sees all. It just doesn’t care."
"Your destiny has been outsourced."
"If life gives you lemons, question why it didn’t give cookies."
*/


/*
options under button:
"This is not how enlightenment works."
"The cookie is disappointed that you are disappointed."
The cookie judges in silence...
"The next fortune may or may not help. Probably not."
"You keep pushing the button. Who’s really in control here?"
"Each click shatters another piece of the cookie’s fragile ego.
you are breaking the cookie...and its heart
*/

