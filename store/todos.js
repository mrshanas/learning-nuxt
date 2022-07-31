export const state = () => ({
  todos: [],
})

export const getters = {
  getTodos(state) {
    return state.todos
  },
}

export const mutations = {
  addTodo(state, todo) {
    state.todos.push({ ...todo, done: false, id: Math.random() })
  },
  toggle(state, id) {
    const index = state.todos.findIndex((todo) => todo.id === id)
    state.todos[index].done = !state.todos[index].done
  },
  deleteTodo(state, id) {
    const index = state.todos.findIndex((todo) => todo.id === id)
    state.todos.splice(state.todos[index], 1)
  },
}
