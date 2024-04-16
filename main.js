const checker = () => {
  setTimeout(() => {
    let check = 0;
    for (let i = 0; i < document.querySelectorAll(".progress").length; i++) {
      if (document.querySelectorAll(".progress")[i].value >= 100) {
        check = check + 1;
      }
    }
    if (check === 7) {
      document.querySelector("#begin").textContent =
        "Every loading is complete";
    } else {
      checker();
    }
  }, 100);
};

const timerGoing = () => {
  let delay = Math.floor(Math.random() * 2000);
  setTimeout(() => {
    for (let i = 0; i < document.querySelectorAll(".progress").length; i++) {
      if (document.querySelectorAll(".progress")[i].value < 100) {
        document.querySelector(`#status-${i + 1}`).textContent =
          "In progress...";
        document.querySelectorAll(".progress")[i].value +=
          Math.floor(Math.random() * 5) + 1;
      } else {
        document.querySelector(`#status-${i + 1}`).textContent = "Complete!";
      }
    }
    timerGoing();
  }, delay);
};

function startButton() {
  console.log("Bonjour");
  document.querySelector("#begin").removeEventListener("click", startButton);
  document.querySelector("#begin").textContent = "Loading in progress";
  document.querySelector("#begin").disabled = true;
  timerGoing();
  checker();
}

document.querySelector("#begin").addEventListener("click", startButton);
