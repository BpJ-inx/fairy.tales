<template>
  <div class="mb-4">
    <label class="form-label block mb-2">Возраст аудитории</label>
    <select
      class="form-control w-full p-2 mb-4 border border-gray-300 rounded"
      v-model="modelValue"
      required
    >
      <option disabled value="" selected>
        {{ defaultOption }}
      </option>
      <option value="Малышей">Малыши</option>
      <option value="Школьников">Школьники</option>
      <option value="Подростков">Подростки</option>
    </select>
  </div>
</template>

<script setup>
const props = defineProps({
  modelValue: String,
});

const emit = defineEmits(["update:modelValue"]);

const updateValue = (value) => {
  emit("update:modelValue", value);
};

const modelValue = computed({
  get: () => props.modelValue,
  set: (value) => updateValue(value),
});

const defaultOption = computed(() => {
  return (props.modelValue = "Выберите возраст аудитории");
});
</script>

<style lang="scss" scoped>
@import "/src/assets/css/inputAndSelecorTagStyle.scss";
</style>
