<template>
  <button
    class="
      min-w-[100px]
      p-2
      rounded-md
      text-white
      transition
      duration-700
    "
    :class="[bg, hoverBg]"
  >
    <slot />
  </button>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const props = defineProps({
  color: {
    type: String,
    default: 'emerald',
  },
});

const bg = ref<string>('');
const hoverBg = ref<string>('');

switch (props.color) {
  case 'primary':
    bg.value = 'bg-emerald-400';
    hoverBg.value = 'bg-emerald-600';
    break;
  case 'secondary':
    bg.value = 'bg-cyan-400';
    hoverBg.value = 'bg-cyan-600';
    break;
  default:
    bg.value = 'bg-rose-400';
    hoverBg.value = 'bg-rose-600';
    break;
}
</script>
