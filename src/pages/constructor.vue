<template>
  <div class="min-h-screen flex items-center justify-center">
    <div class="main_block mx-auto text-center">
      <h1 class="title_name text-6xl mb-6">Волшебный Сказочник</h1>
      <p class="text-gray-700 text-lg mb-8">
        Поделитесь с нашим сказочником деталями своего героя и его приключений,
        и он сотворит для вас уникальную сказку.
      </p>
      <div class="form">
        <SelectorTheme v-model="theme" />

        <InputTag
          v-model="hero"
          label="Имя главного героя"
          placeholder="Введите имя вашего героя"
        />

        <InputTag
          v-model="goal"
          label="Цель героя"
          placeholder="Что стремится достичь ваш герой?"
        />

        <InputTag
          v-model="setting"
          label="Место действия"
          placeholder="Опишите волшебное место"
        />

        <InputTag
          v-model="obstacles"
          label="Препятствия на пути"
          placeholder="Какие трудности предстоит преодолеть?"
        />

        <InputTag
          v-model="characters"
          label="Другие персонажи"
          placeholder="Кто еще участвует в приключении?"
        />

        <SelectorAudience v-model="audience" />

        <SelectorTone v-model="tone" />

        <ButtonBig @click="showAndCombine()">Сотворить сказку</ButtonBig>
      </div>
    </div>

    <div class="background_story" v-if="isVisible">
      <div class="story_block mt-4 p-4 rounded">
        <div class="spiner" v-if="isVisibleSpinner"></div>
        <div class="mb-5" v-if="!isVisibleSpinner">
          <h5 class="title_name flex justify-center text-4xl mb-4">Сказка</h5>
          <p id="story-text ">{{ responseFromServer }}</p>
        </div>
        <ButtonBig @click="closeStoryBlock()">Закрыть</ButtonBig>
      </div>
    </div>
  </div>
</template>

<script>
import { responseFromServer, sendRequest } from "../hooks/fetch";
import {
  isVisible,
  isVisibleSpinner,
  closeStoryBlock,
} from "../hooks/manipulationStoryBlock";
import {
  theme,
  hero,
  goal,
  setting,
  obstacles,
  characters,
  audience,
  tone,
  combineRequestTags,
} from "../hooks/createRequest";

export default {
  setup() {
    function showAndCombine() {
      isVisible.value = true;
      combineRequestTags();
    }

    return {
      hero,
      goal,
      setting,
      obstacles,
      characters,
      audience,
      theme,
      tone,
      combineRequestTags,
      responseFromServer,
      sendRequest,
      isVisible,
      isVisibleSpinner,
      closeStoryBlock,
      showAndCombine,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "/src/assets/css/constructorStyle.scss";
</style>
