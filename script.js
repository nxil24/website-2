const stages = [
  {
    gif: "22885016",
    title: "Do you love me? 🤗",
    subtitle: "~ neil is yours",
  },
  {
    gif: "22050818",
    title: "Think about it 🙄",
    subtitle: "dont tell it soo soon already 🙄",
  },
  {
    gif: "15195810",
    title: "Think again 😣",
    subtitle: "why are u doing this to meeee 😣",
  },
  {
    gif: "15974530976611222074",
    title: "Accept nowww! pleaseee 😭",
    subtitle: "Im such a good boy 😭",
    escape: true,
  },
];

let currentStage = 0;

const gifDiv = document.getElementById("gif");
const title = document.getElementById("title");
const subtitle = document.getElementById("subtitle");
const noBtn = document.getElementById("no-btn");

function loadStage(stage) {
  gifDiv.innerHTML = "";
  gifDiv.setAttribute("data-postid", stage.gif);
  title.innerText = stage.title;
  subtitle.innerText = stage.subtitle;

  // reload tenor
  const script = document.createElement("script");
  script.src = "https://tenor.com/embed.js";
  script.async = true;
  document.body.appendChild(script);
}

noBtn.addEventListener("click", (e) => {
  e.preventDefault();

  if (currentStage < stages.length - 1) {
    currentStage++;
    loadStage(stages[currentStage]);
  }
});

function moveRandom(elm) {
  elm.style.position = "absolute";
  elm.style.top = Math.random() * 80 + 10 + "%";
  elm.style.left = Math.random() * 80 + 10 + "%";
}

/* Desktop */
noBtn.addEventListener("mouseenter", () => {
  if (stages[currentStage].escape) {
    moveRandom(noBtn);
  }
});

/* Mobile */
noBtn.addEventListener("touchstart", (e) => {
  if (stages[currentStage].escape) {
    e.preventDefault();
    moveRandom(noBtn);
  }
});

