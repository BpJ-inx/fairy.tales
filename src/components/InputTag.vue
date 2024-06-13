<template>
  <div class="mb-4">
    <label class="form-label block mb-2">{{ label }}</label>
    <input
      type="text"
      class="form-control w-full p-2 mb-4 border border-gray-300 rounded"
      :value="modelValue"
      @input="updateValue"
      :placeholder="placeholder"
      required
    />
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
    required: false,
    default: "",
  },
});

const emits = defineEmits(["update:modelValue"]);

const updateValue = (event) => {
  emits("update:modelValue", event.target.value);
};
</script>

<style lang="scss" scoped>
@import "/src/assets/css/inputAndSelecorTagStyle.scss";
</style>
