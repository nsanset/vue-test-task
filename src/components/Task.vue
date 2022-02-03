<template>
  <div class="tasks">
    <div class="status">
      <div class="status--pending">Pending</div>
      <div v-if="complete"  class="status--complete-done animate__animated animate__heartBeat">Completed</div>
      <div v-else class="status--complete">Completed</div>
    </div>
    <div v-if="todos.length">
      <ul class="tasks-list">
        <li v-for="(todo, index) in todos" :key="index" class="animate__animated animate__fadeInUp">
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
    <div v-else class="tasks--empty animate__animated animate__zoomIn">List empty...</div>
    <div class="tasks--label">label</div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Task',
  data () {
    return {
      complete: false,
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
.status{
  display: flex;
  flex-direction: row;
}
.status--pending{
  background: #BFBFBF;
  padding: 7px;
  border-radius: 15px;
  color: #fff;
  margin-right: 30px;
}
.status--complete, .status--complete-done {
  padding: 7px;
  color: #BFBFBF;
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
  left: 30px;
  padding-left: 17px;
  top: 0px;
  text-align: left;
  max-width: 350px;
  overflow: hidden;
  height: 25px;
}
.task--text--complete {
  text-decoration: line-through;
}
.tasks--empty {
  padding: 15px;
}
.tasks--label{
  position: relative;
  left: 13px;
  top: 15px;
  text-align: left;
  height: 20px;
  border: 1px solid #BFBFBF;
  color: #BFBFBF;
  margin-bottom: 15px;
  padding: 2px 1px 0px 5px;
  font-size: 14px;
  width: 35px;
}
ul {
  list-style: none;
}
</style>
