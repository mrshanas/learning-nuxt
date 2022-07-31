<template>
  <v-container>
    <div class="">
      <v-app-bar elevation="3" dark>
        <v-app-bar-nav-icon />
        <v-spacer></v-spacer>
        <v-toolbar-title>ToDo App</v-toolbar-title>
        <!-- <v-icon>mdi-dots-vertical</v-icon> -->
        <v-spacer></v-spacer>
        <v-menu left bottom>
          <template #activator="{ on, attrs }">
            <v-btn icon v-bind="attrs" v-on="on">
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </template>

          <v-list>
            <v-list-item v-for="n in 5" :key="n" @click="() => {}">
              <v-list-item-title>Option {{ n }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-app-bar>
    </div>

    <form style="margin-top: 3%" @submit="onSubmit">
      <v-row>
        <v-col cols="10">
          <v-textarea v-model="text"></v-textarea>
        </v-col>
        <v-col cols="2"><v-btn type="submit">+</v-btn></v-col>
      </v-row>
    </form>
    <v-card>
      <v-list-item v-for="todo in todos" :key="todo.id">
        <v-checkbox
          style="padding-right: 2%"
          value="todo.done"
          @click="toggle(todo.id)"
        />
        <!-- <h2>{{ getTodos }}</h2> -->
        <!-- <v-spacer></v-spacer> -->
        <v-list-item-content>
          <v-list-item-title :class="{ done: todo.done }">{{
            todo.title
          }}</v-list-item-title>
          <!-- <v-list-item-subtitle>{{ todo.sub }}</v-list-item-subtitle> -->
        </v-list-item-content>
        <v-icon style="padding-right: 1%" @click="editTodo(todo)"
          >mdi-pencil</v-icon
        >
        <v-icon @click="deleteTodo(todo.id)">mdi-delete</v-icon>
      </v-list-item>
    </v-card>

    <!-- <v-input>Add todo</v-input> -->
  </v-container>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  data: () => ({
    text: '',
  }),
  computed: {
    todos() {
      return this.$store.state.todos.todos
    },
  },
  methods: {
    onSubmit(e) {
      e.preventDefault()
      this.$store.commit('todos/addTodo', { title: this.text })
      this.text = ''
    },
    editTodo(todo) {
      this.text = todo.title
    },
    // toggle(id) {
    //   this.$store.commit('todos/toggle', id)
    // },
    // deleteTodo(id) {
    //   this.$store.commit('todos/deleteTodo', id)
    // },
    ...mapMutations({
      //   addTodo: 'todos/addTodo',
      toggle: 'todos/toggle',
      deleteTodo: 'todos/deleteTodo',
    }),
  },
}
</script>
<style>
.done {
  text-decoration: line-through;
}
</style>
