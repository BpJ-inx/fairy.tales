import { ref } from "vue";
import { responseFromServer } from "../hooks/fetch";

const isVisible = ref(false);
const isVisibleSpinner = ref(true);

function closeStoryBlock() {
  isVisible.value = false;
  isVisibleSpinner.value = true;
  responseFromServer.value = "";
}

export { isVisible, isVisibleSpinner, closeStoryBlock };
