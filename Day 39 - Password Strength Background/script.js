const passwordField = document.getElementById("password");
const bg = document.getElementById("background");

passwordField.addEventListener("input", (e) => {
  const inputLenght = e.value.length
  
  let blurValue = 20;

  if (blurValue > 0) {
    bg.style.filter = `blur(${valueForBlur - inputLenght * 2}px)`;
  } else {
    bg.style.filter = `blur(0px)`;
  }
});
