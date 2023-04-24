const images = document.querySelectorAll('.sliderContainer img');
const nextBtn = document.querySelector('.arrowRight');
const prevBtn = document.querySelector('.arrowLeft');
const text = document.querySelector('.text');
const heading = document.querySelector('.heading');

console.log(images)

let currImgInd = 0;

const showPrevImg = () => {
    currImgInd--;
    if(currImgInd < 0){
        currImgInd = images.length - 1;
    }
    showImg();
}

const showNextImg = () => {
    currImgInd++;
    if(currImgInd >= images.length){
        currImgInd = 0;
    }
    showImg();
}

const showImg = () => {
    images.forEach((image) => image.classList.remove('active'));
    images[currImgInd].classList.add('active');
    heading.textContent = images[currImgInd].dataset.title;
    text.textContent = images[currImgInd].dataset.text;

}

nextBtn.addEventListener('click', showNextImg);
prevBtn.addEventListener('click', showPrevImg);

showImg();