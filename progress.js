const progressReady = document.querySelector(".progress_ready");
const progressComplete = document.querySelector(".progress_complete");

function addReady(text) {
  const span = document.createElement("span");
  span.innerText = text;
  span.classList.add("ready_span");
  progressReady.appendChild(span);
}

function removeReady(text) {
  const readySpans = document.getElementsByClassName("ready_span");

  for (let i = 0; i < readySpans.length; i++) {
    if (readySpans[i].innerText === text) {
      readySpans[i].remove();
    }
  }
}

function addComplete(text) {
  removeReady(text);
  const span = document.createElement("span");
  span.innerText = text;
  span.classList.add("complete_span");
  progressComplete.appendChild(span);
}
