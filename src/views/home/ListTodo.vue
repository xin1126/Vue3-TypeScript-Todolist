<template>
  <ul v-if="lists.length">
    <li
      v-for="(item, index) in lists"
      :key="item.id"
      class="py-4 flex items-center justify-between"
    >
      <label class="text-2xl flex items-center">
        <input
          v-model="item.done"
          type="checkbox"
          class="w-[30px] h-[20px]"
          @change="emit('updateDone')"
        >
        <span :class="{ done: item.done }">{{ item.msg }}</span>
      </label>
      <span
        class="cursor-pointer text-xl"
        @click="emit('deleteItem', index)"
      >❎</span>
    </li>
  </ul>
  <div
    v-else
    class="py-10 text-xl font-bold"
  >
    無資料
  </div>
</template>

<script lang="ts" setup>
// import { ref } from 'vue';

defineProps({
  lists: {
    type: Array,
    default: () => [],
  },
});

defineEmits(['updateDone', 'deleteItem']);
</script>
