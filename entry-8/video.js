const videoElement = document.getElementById('random-video');
const btn = document.getElementById('btn');

const srcArray = [
  "https://www.sakugabooru.com/data/82297fe1315214eb275378ee157ad314.mp4",
  "https://www.sakugabooru.com/data/15c2d0087c949362a036378098dd1d52.mp4",
  "https://www.sakugabooru.com/data/fbeee15fec95f19b4672a59a91c4edb2.mp4",
  "https://www.sakugabooru.com/data/94ed6c9a8541991f0a011566a7ced8ba.mp4",
  "https://www.sakugabooru.com/data/e82353d35c2366854a527c51d1b48728.mp4",
  "https://www.sakugabooru.com/data/c39d4afe02df73654599c9bf15072d1c.mp4",
  "https://www.sakugabooru.com/data/c14a06efe9860a4c0b33fef914835f1a.mp4",
  "https://www.sakugabooru.com/data/932b66fa5e8e9ab82eaebee832815ec8.mp4",
  "https://www.sakugabooru.com/data/c801683907f1c2571a132d5ccec474d2.mp4"
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


