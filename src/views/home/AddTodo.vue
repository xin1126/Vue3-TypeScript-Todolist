<template>
  <div class="flex mb-2">
    <input
      v-model="todoMsg"
      type="text"
      class="
        w-full
        rounded-l-lg
        border-l-2 border-y-2 border-indigo-300
        pl-4
        focus:outline-indigo-500 focus:outline-none focus:outline-offset-0
      "
      placeholder="請輸入你的代辦事項"
    >
    <button
      class="
        w-[50px]
        h-[50px]
        border-0
        bg-sky-500
        hover:bg-sky-600
        rounded-r-lg
        text-white
        transition
        duration-700
      "
      @click="add"
    >
      +
    </button>
  </div>
</template>

<script lang='ts' setup>
import { ref } from 'vue';

const todoMsg = ref<string>('');

const emit = defineEmits(['addTodo']);
const add = () => {
  if (todoMsg.value) {
    emit('addTodo', {
      msg: todoMsg.value,
      done: false,
      id: Date.now(),
    });
    todoMsg.value = '';
  }
};
</script>
