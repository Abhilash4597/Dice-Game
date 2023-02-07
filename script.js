const img1 = document.querySelector('.img1');
const img2 = document.querySelector('.img2');
const heading = document.querySelector('.heading');
const play = document.querySelector('.refresh');


play.addEventListener('click', () => {
  const randomNum1 = Math.floor(Math.random() * 6) + 1;
  const randomImg1 = `dice${randomNum1}.png`;
  const imgPath1 = `images/${randomImg1}`;
  img1.setAttribute('src', imgPath1);
  
  const randomNum2 = Math.floor(Math.random() * 6) + 1;
  const randomImgPath2 = `images/dice${randomNum2}.png`;
  img2.setAttribute('src', randomImgPath2);
  
  if (randomNum1 > randomNum2) {
    heading.innerHTML = '🎉 Player-1 is Winner';
  } else if (randomNum1 < randomNum2) {
    heading.innerHTML = 'Player-2 is Winner 🎉';
  } else {
    heading.innerHTML = '🎃 Draw 🎃';
  }
})

