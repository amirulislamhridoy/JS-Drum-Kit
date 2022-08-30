const buttons = document.getElementsByTagName("button");

window.addEventListener("keydown", (e) => {
  const button = document.querySelector(`button[data-key='${e.keyCode}']`);
  const audio = document.querySelector(`audio[data-key='${e.keyCode}']`);
  button?.classList.add("playing");
  audio?.play();
});

for (const button of buttons) {
  button.addEventListener("transitionend", (e) => {
    if (e.propertyName !== "transform") return;
    e.target.classList.remove("playing");
  });
  
  button.addEventListener("click", (e) => {
    if (e.target.tagName === "SPAN" || e.target.tagName === "B") {
      const selectButton = e.target.parentNode;
      const code = selectButton.getAttribute("data-key");
      const audio = document.querySelector(`audio[data-key='${code}']`);
      selectButton?.classList.add("playing");
      audio?.play();
    } else {
      const selectButton = e.target;
      const code = selectButton.getAttribute("data-key");
      const audio = document.querySelector(`audio[data-key='${code}']`);
      selectButton?.classList.add("playing");
      audio?.play();
    }
  });
}
