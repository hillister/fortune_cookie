let img = document.getElementById('img1');
let newBtn = document.getElementById('newBtn');

img.addEventListener('click',function(){
    changeImage();
    showButton();
})

function changeImage(){
    img.src = 'broken.png';
}

function showButton(){
    newBtn.style.display = 'inline';
}