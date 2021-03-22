const COLLECTION = document.querySelectorAll(".piano-button");
const PIANO = document.getElementById("piano");

const startSound = (event) => {
  event.target.classList.add("active");
};

const stopSound = (event) => {
  event.target.classList.remove("active");
};

const startCorrespondOver = (event) => {
  if (event.target.classList.contains("piano-button")) {
    event.target.classList.add("active");
  }

  COLLECTION.forEach((elem) => {
    elem.addEventListener("mouseover", startSound);
    elem.addEventListener("mouseout", stopSound);
  });
};

const stopCorrespondOver = () => {
  COLLECTION.forEach((elem) => {
    elem.classList.remove("active");
    elem.removeEventListener("mouseover", startSound);
    elem.removeEventListener("mouseout", stopSound);
  });
};

PIANO.addEventListener("mousedown", startCorrespondOver, false);

PIANO.addEventListener("mouseup", stopCorrespondOver);
