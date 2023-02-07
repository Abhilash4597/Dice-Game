const img1 = document.querySelector('.img1');
const img2 = document.querySelector('.img2');

const randomNum = Math.floor(Math.random() * 6) + 1;
const randomImg = `dice${randomNum}.png`;
const imgPath = `images/${randomImg}`;

img1.setAttribute('src', imgPath);