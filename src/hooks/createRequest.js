import { sendRequest } from "../hooks/fetch";
import { ref } from "vue";

const theme = ref("");
const hero = ref("");
const goal = ref("");
const setting = ref("");
const obstacles = ref("");
const characters = ref("");
const audience = ref("");
const tone = ref("");

const combineRequestTags = () => {
  const storyRequest = `
    Придумай сказку историю для детей ${audience.value}, в ${tone.value} тоне на тему ${theme.value}.
    Про главного героя по имени ${hero.value}, цель которого ${goal.value}, но который встречается с препядствием в виде ${obstacles.value}.
    В его приключениях ему так же встретяться например ${characters.value}, придумай сам будут ли они друзья или противники.
    Вся эта сказка происходит в ${setting.value}.
    История должна быть с поучительным финалом.
  `;

  sendRequest(storyRequest.trim());
};

export {
  theme,
  hero,
  goal,
  setting,
  obstacles,
  characters,
  audience,
  tone,
  combineRequestTags,
};
