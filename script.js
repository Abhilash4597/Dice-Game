const img1 = document.querySelector('.img1');
const img2 = document.querySelector('.img2');

const randomNum1 = Math.floor(Math.random() * 6) + 1;
const randomImg1 = `dice${randomNum1}.png`;
const imgPath1 = `images/${randomImg1}`;

img1.setAttribute('src', imgPath1);

const randomNum2 = Math.floor(Math.random() * 6) + 1;
const randomImg2 = `dice${randomNum2}.png`;
const imgPath2 = `images/${randomImg2}`;

img2.setAttribute('src', imgPath2);