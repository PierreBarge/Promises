const promises = [];

function startButton() {
  document.querySelector("#begin").removeEventListener("click", startButton);
  document.querySelector("#begin").textContent = "Loading in progress";
  document.querySelector("#begin").disabled = true;
  for (let i = 0; i < document.querySelectorAll(".progress").length; i++) {
    const promise = new Promise((resolve) => {
      document.querySelector(`#status-${i + 1}`).textContent = "In progress...";
      function timer() {
        setTimeout(() => {
          if (document.querySelectorAll(".progress")[i].value < 100) {
            document.querySelectorAll(".progress")[i].value +=
              Math.floor(Math.random() * 5) + 1;
            timer();
          } else {
            document.querySelector(`#status-${i + 1}`).textContent =
              "Complete!";
            resolve();
          }
        }, Math.floor(Math.random() * 200));
      }
      timer();
    });
    promises.push(promise);
  }
  Promise.all(promises).then(() => {
    document.querySelector("#begin").textContent = "Every loading is complete";
  });
}

document.querySelector("#begin").addEventListener("click", startButton);
