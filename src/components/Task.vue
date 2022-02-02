<template>
  <div class="container">
    <div class="wrapper">
      <div>Pending</div>
      <div :class="{'complete' : complete === true}">Complete</div>
    </div>
    <div>
      <ul class="tasks-list">
        <li v-for="(todo, index) in todos" :key="index">
          <div class="task">
            <div class="task--checkbox">
              <input type="checkbox" v-model="todo.selected" @click="doneTask(index)">
            </div>
            <div class="task--text" v-if="todo.selected === false">
              {{todo.title}}
            </div>
            <div class="task--text--complete" v-else>
              {{todo.title}}
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      complete: false
    }
  },
  methods: {
    doneTask (index) {
      setTimeout(() => {
        this.complete = false;
        this.todos.forEach((todos) => (todos.selected = false));
        this.$store.dispatch('doneTodos', index);        
      }, 1000);
      this.complete = true;
    },
  },
  computed: {
    ...mapState([
      'todos'
    ])
  }
}
</script>

<style lang="scss">
.wrapper{
  display: flex;
  flex-direction: row;
  justify-content: start;
}
.complete{
  font-size: 20px;
}
.tasks-list {
  margin: 0px 0px 0px 0px;
  padding: 0px 0px 0px 0px;
}
.task {
  position: relative;
  height: 50px;
}
.task--checkbox {
  position: relative;
  left: 0px;
  top: 0px;
  text-align: left;
  width: 46px;
  height: 50px;
  margin-right: 0px;
}
.task--checkbox input {
  position: relative;
  left: 10px;
  top: 15px;
}
.task--text, .task--text--complete {
  position: absolute;
  padding-top: 15px;
  left: 45px;
  padding-left: 17px;
  top: 0px;
  text-align: left;
  width: 520px;
  height: 35px;
}
.task--text--complete {
  text-decoration: line-through;
}
ul {
  list-style: none;
}
</style>