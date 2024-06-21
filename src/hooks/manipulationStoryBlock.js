import { ref } from "vue";
import { responseFromServer } from "../hooks/fetch";

const isVisible = ref(false);
const isVisibleSpinner = ref(true);
const animatedText = ref("");
let interval = null;

function closeStoryBlock() {
  isVisible.value = false;
  isVisibleSpinner.value = true;
  responseFromServer.value = "";
  animatedText.value = "";
  responsiveVoice.cancel();
}

function animateText() {
  let index = 0;
  interval = setInterval(() => {
    if (index >= responseFromServer.value.length) {
      clearInterval(interval);
    } else {
      animatedText.value += responseFromServer.value[index];
      index++;
    }
  }, 25);
}

function stopAnimateText() {
  clearInterval(interval);
  animatedText.value = responseFromServer.value;
}

function playPause() {
  let icon = document.getElementById("icon");
  if (icon.classList.contains("play_icon")) {
    responsiveVoice.resume();
    icon.classList.remove("play_icon");
    icon.classList.add("pause_icon");
  } else {
    responsiveVoice.pause();
    icon.classList.remove("pause_icon");
    icon.classList.add("play_icon");
  }
}

export {
  isVisible,
  isVisibleSpinner,
  closeStoryBlock,
  animatedText,
  animateText,
  stopAnimateText,
  playPause,
};
