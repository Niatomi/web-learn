<template>
    <li>
    <span>
      <strong>{{todo.id}}</strong>
      <span v-bind:class='{done: todo.completed}'>
        <input type="checkbox" v-on:change='todo.completed = !todo.completed'/>
        {{ todo.title }}
      </span>
    </span>
    <button class="rm" v-on:click="$emit('remove-todo', todo.id)">&times;</button>
</li>
</template>

<script>
export default {
  name: 'TodoItem',
  props: {
    todo: {
        type: Object,
        required: true
    }
  },
}
</script>

<style scoped>
li {
    border: 1px solid #ccc;
    display: flex;
    justify-content: space-between;
    padding: .5rem 2rem;
    margin-bottom: 1rem;
}

.rm {
  background: red;
  color: #fff;
  border-radius: 50%;
  font-weight: bold;
}

.done {
  text-decoration: line-through;
}
</style>

