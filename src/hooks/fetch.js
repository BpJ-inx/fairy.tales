import { ref } from "vue";
import { isVisibleSpinner, animateText } from "../hooks/manipulationStoryBlock";

const responseFromServer = ref(" ");

async function sendRequest(promptText) {
  const requestData = {
    prompt: promptText,
    max_tokens: 100,
    temperature: 0.7,
    top_p: 1.0,
    n: 1,
  };

  try {
    const response = await fetch("http://localhost:3001/api/completion", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData),
    });

    const data = await response.json();
    console.log(JSON.stringify(data));
    responseFromServer.value = data.result.alternatives[0].message.text
      .replace(/\n*/g, "")
      .replace(/\*{1,2}/g, "")
      .trim();

    isVisibleSpinner.value = false;

    responsiveVoice.speak(responseFromServer.value, "Russian Female", {
      onstart: function () {
        animateText();
      },
    });
  } catch (error) {
    console.error("Ошибка при отправке запроса:", error);
  }
}

export { sendRequest, responseFromServer };
