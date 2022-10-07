<template>
  <div class="bg-gray-700 p-10 min-h-screen flex justify-center">
    <div class="max-w-[768px] bg-white p-5 rounded-lg w-full">
      <h1 class="text-center text-2xl mb-4">
        Vue3 TypeScript ToDoList
      </h1>
      <AddTodo @add-todo="addTodo" />
      <div>
        <ButtonUtils
          class="mr-2"
          color="primary"
          @click="selectData('all')"
        >
          全部
        </ButtonUtils>
        <ButtonUtils
          class="mr-2"
          color="primary"
          @click="selectData('undone')"
        >
          已完成
        </ButtonUtils>
        <ButtonUtils
          color="primary"
          @click="selectData('completed')"
        >
          未完成
        </ButtonUtils>
      </div>
      <ListTodo
        @update-done="updateDone"
        @delete-item="deleteItem"
      />
      <div class="flex justify-between items-center">
        <p>目前有 <span class="font-medium">{{ hasDone }}</span> 個事項待完成</p>

        <div>
          <ButtonUtils
            class="mr-2"
            color="secondary"
            @click="clearHasDone"
          >
            清除完成事項
          </ButtonUtils>
          <ButtonUtils
            color="rose"
            @click="lists.length = 0"
          >
            全部清除
          </ButtonUtils>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang='ts' setup>
import { ref, computed, onMounted } from 'vue';

interface TodoItem {
  msg: string;
  done: boolean;
  id: number;
}

const tempLists: TodoItem[] = [
  { msg: '打code', done: true, id: 1 },
  { msg: '打遊戲', done: false, id: 2 },
  { msg: '吃飯', done: false, id: 3 },
  { msg: '睡覺', done: false, id: 4 },
];
const lists = ref<TodoItem[]>([]);

let selectStatus: string;
const selectData = (target: string = 'all') => {
  selectStatus = target;
  switch (target) {
    case 'all':
      lists.value = [...tempLists];
      break;
    case 'undone':
      lists.value = [...tempLists].filter((item) => item.done);
      break;
    default:
      lists.value = [...tempLists].filter((item) => !item.done);
      break;
  }
};

const addTodo = (data: TodoItem) => {
  tempLists.push(data);
  selectData(selectStatus);
};

const updateDone = () => selectData(selectStatus);

const hasDone = computed(() => lists.value.filter((item) => item.done).length);

const deleteItem = (index: number) => {
  lists.value.splice(index, 1);
};

const clearHasDone = () => {
  lists.value = lists.value.filter((item) => !item.done);
};

onMounted(() => selectData());
</script>

<style>
.done {
  text-decoration: line-through;
  color: gray;
}
</style>
