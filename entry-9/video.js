const videoElement = document.getElementById('random-video');
const btn = document.getElementById('btn');

const srcArray = [
  "https://www.sakugabooru.com/data/9bc13607250b5cdf41cc2efb9416c043.mp4",
  "https://www.sakugabooru.com/data/2f5e1da5ece686bdff8806f938206d98.mp4",
  "https://www.sakugabooru.com/data/536cb006812a33fd9cec473651a4fc80.mp4",
  "https://www.sakugabooru.com/data/8f7ed45b3a37dd50ec6a32673ff74f6c.mp4",
  "https://www.sakugabooru.com/data/4b0fabbb5ae36b4bff580cc6513424f3.mp4",
  "https://www.sakugabooru.com/data/67b2ebd767a9804a55f53892c9d8471d.mp4",
  "https://www.sakugabooru.com/data/f628de44ca086a7c263f482f248590c8.mp4",
  "https://www.sakugabooru.com/data/3ded99087e3548f6c32d61dab7f7bb08.mp4",
  "https://www.sakugabooru.com/data/de1abe524330d0486ca2eb90f97b1e94.mp4"
];

btn.addEventListener('click', () => {
    randomVideo()
})

randomVideo();
function randomVideo() {
    const randomIndex = Math.floor(Math.random() * srcArray.length);
    
    if (randomIndex !== Number(localStorage.getItem('index'))) {
        videoElement.src = srcArray[randomIndex];
        localStorage.setItem('index', randomIndex); 
    } else {
        randomVideo()
    }
}


