const Eupho = [
  "E-konte 1/eupho 1.png",
  "E-konte 1/eupho 2.png",
  "E-konte 1/eupho 3.png",
  "E-konte 1/eupho 4.png",
  "E-konte 1/eupho 5.png"
];

const Miyazaki = [
  "E-konte 1/miyazaki 1.png",
  "E-konte 1/miyazaki 2.png",
  "E-konte 1/miyazaki 3.png",
  "E-konte 1/miyazaki 4.png",
  "E-konte 1/miyazaki 5.png"
];

const Madoka = [
    "E-konte 1/madoka 1.png",
    "E-konte 1/madoka 2.png",
    "E-konte 1/madoka 3.png",
    "E-konte 1/madoka 4.png",
    "E-konte 1/madoka 5.png"
];

const Chainsaw = [
    "E-konte 1/chainsaw 1.png",
    "E-konte 1/chainsaw 2.png",
    "E-konte 1/chainsaw 3.png",
    "E-konte 1/chainsaw 4.png",
    "E-konte 1/chainsaw 5.png"
]
const SteinsGate = [
    "E-konte 1/steins gate 1.png",
    "E-konte 1/steins gate 2.png",
    "E-konte 1/steins gate 3.png",
    "E-konte 1/steins gate 4.png",
    "E-konte 1/steins gate 5.png"
]
const Sangatsu = [
    "E-konte 1/3gatsu 1.png",
    "E-konte 1/3gatsu 2.png",
    "E-konte 1/3gatsu 3.png",
    "E-konte 1/3gatsu 4.png",
    "E-konte 1/3gatsu 5.png"
]

const Frieren = [
    "E-konte 1/frieren 1.png",
    "E-konte 1/frieren 2.png",
    "E-konte 1/frieren 3.png",
    "E-konte 1/frieren 4.png",
    "E-konte 1/frieren 5.png"
]

const Shinbo = [
    "E-konte 1/shinbo 1.png",
    "E-konte 1/shinbo 2.png",
    "E-konte 1/shinbo 3.png",
    "E-konte 1/shinbo 4.png",
    "E-konte 1/shinbo 5.png"

]



const srcArray = [Eupho, Miyazaki, Madoka, Chainsaw, SteinsGate, Sangatsu, Frieren, Shinbo];

const slots = [
  document.getElementById("random_layout"),
  document.getElementById("random_layout2"),
  document.getElementById("random_layout3"),
  document.getElementById("random_layout4"),
  document.getElementById("random_layout5")
];

displayAllChildren();

function displayAllChildren() {
  let parentIndex = Math.floor(Math.random() * srcArray.length);
  let lastIndex = Number(localStorage.getItem("lastParent"));

  // ❗ If the same parent is chosen → run the function again
  if (parentIndex === lastIndex) {
    return displayAllChildren(); 
  }

  // Save new parent choice
  localStorage.setItem("lastParent", parentIndex);

  const parentArray = srcArray[parentIndex];

  parentArray.forEach((childSrc, i) => {
    if (slots[i]) {
      slots[i].src = childSrc;
    }
  });
}


// const imgEl = document.getElementById('random_layout'); 


// const Eupho = ["E-konte 1/eupho 1.png", 'E-konte 1/eupho 2.png', 'E-konte 1/eupho 3.png', 'E-konte 1/eupho 4.png', 'E-konte 1/eupho 5.png']
// const Miyazaki = ["E-konte 1/miyazaki 1.png", "E-konte 1/miyazaki 2.png", "E-konte 1/miyazaki 3.png", "E-konte 1/miyazaki 4.png", "E-konte 1/miyazaki 5.png"]
// const srcArray = [Eupho, Miyazaki]

// console.log(srcArray[1][0])

// imgEl.src = [0][1]

// let imgEl1 = document.getElementById('random_layout2'); 
// let imgEl2 = document.getElementById('random_layout3'); 
// let imgEl3 = document.getElementById('random_layout4'); 
// let imgEl4 = document.getElementById('random_layout5'); 


// randomLayout();
// function randomLayout() {
    
//     const FirstIndex = Math.floor(Math.random()*srcArray.length);
//     const SecondIndex = Math.floor(Math.random()*Eupho.length);

//     if (randomIndex !== Number(localStorage.getItem('index'))) {
//         imgEl.src = [FirstIndex][SecondIndex]
//         // imgEl1.src = srcArray[randomIndex];
//         localStorage.setItem('index', randomIndex)
//     } else {
//         randomLayout()
//     }
// }

// sequenceLayout ();
// function sequenceLayout () {
    
//     if (randomIndex = [0]) {
//         imgEl1.src = srcArray[1]
//     } else {
//         randomLayout()
//     }
// }

// sequenceLayout2 ();
// function sequenceLayout2 () {
    
//     if (randomIndex = [1]) {
//         imgEl2.src = srcArray[2]
//     } else {
//         randomLayout()
//     }
// }

// sequenceLayout3 ();
// function sequenceLayout3 () {
    
//     if (randomIndex = [2]) {
//         imgEl3.src = srcArray[3]
//     } else {
//         randomLayout()
//     }
// }

// sequenceLayout4 ();
// function sequenceLayout4 () {
    
//     if (randomIndex = [3]) {
//         imgEl4.src = srcArray[4]
//     } else {
//         randomLayout()
//     }
// }

// randomLayout2();
// function randomLayout2() {
    
//     const randomIndex = Math.floor(Math.random()*srcArray.length);
//     if (randomIndex !== Number(localStorage.getItem('index'))) {
//         imgEl1.src = srcArray[randomIndex];
//         localStorage.setItem('index', randomIndex)
//     } else {
//         randomLayout()
//     }
// }


