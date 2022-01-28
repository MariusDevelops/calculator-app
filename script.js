///////////////////// THEME /////////////////////
const themeSelectorBtn = document.getElementById("theme-selector-button");
const app = document.querySelector("html");

themeSelectorBtn.addEventListener("input", () => {
  let currentValue = themeSelectorBtn.value;
  if (currentValue == 0) {
    app.dataset.colormode = "theme-1";
  } else if (currentValue == 1) {
    app.dataset.colormode = "theme-2";
  } else {
    app.dataset.colormode = "theme-3";
  }
});

// document.querySelector("body").classList;

////////////////////// BUTTONS /////////////////////////
let display = document.querySelector(".display");
let buttons = Array.from(document.getElementsByClassName("button"));
// console.log(buttons);

buttons.map((button) => {
  button.addEventListener("click", (e) => {
    // console.log("clicked");
    // console.group(e);
    // console.log(e.target);
    // console.log(e.target.innerText);
    switch (e.target.innerText) {
      case "RESET":
        display.innerText = "";
        break;
      case "DEL":
        if (display.innerText) {
          display.innerText = display.innerText.slice(0, -1);
        }
        break;
      case "=":
        try {
          display.innerText = eval(display.innerText);
        } catch {
          display.innerText = "Error!";
        }

        break;
      default:
        display.innerText += e.target.innerText;
    }
  });
});
