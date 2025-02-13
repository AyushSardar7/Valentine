const container = document.getElementById("container");
const imageOne = document.querySelector(".image-1");
const imageTwo = document.querySelector(".image-2");
const btnYes = document.querySelector(".btn-yes");
const btnNo = document.querySelector(".btn-no");

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function moveButton() {
  const containerRect = container.getBoundingClientRect();
  const btnRect = btnNo.getBoundingClientRect();

  let newTop = btnRect.top;
  let newLeft = btnRect.left;

  while (Math.abs(newTop - btnRect.top) < containerRect.height / 3) {
    newTop = getRandomNumber(0, containerRect.height - btnRect.height);
  }

  while (Math.abs(newLeft - btnRect.left) < containerRect.width / 3) {
    newLeft = getRandomNumber(0, containerRect.width - btnRect.width);
  }

  btnNo.style.position = "absolute";
  btnNo.style.top = `${newTop}px`;
  btnNo.style.left = `${newLeft}px`;
}

// Desktop hover event
btnNo.addEventListener("mouseover", moveButton);

// Mobile touch event
btnNo.addEventListener("touchstart", moveButton);

// Yes button click event
btnYes.addEventListener("click", () => {
  btnNo.classList.add("hide");
  imageOne.classList.add("hide");
  imageTwo.classList.remove("hide");
});
