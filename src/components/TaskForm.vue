<template>
    <div class="form">
        <form @submit.prevent>
            <input type="text" placeholder="Add an item here" :value="inputValue" v-on:input="inputTask">
            <div class="form--btnAddTask" @click="addTask">{{buttonText}}</div>
        </form>
    </div>
</template>

<script>
export default {
  name: 'TaskForm',
  data () {
    return {
      buttonText: 'Add item',
      inputValue: ''
    }
  },
  methods: {
    inputTask (e) {
      this.inputValue = e.target.value
    },
    addTask () {
      const todos = {
        _id: Math.random(1000), 
        title: this.inputValue, 
        selected: false
      }
      if (this.inputValue !== '') {
        this.$store.dispatch('addTasks', todos)
        this.inputValue = ''
      }
    }
  }
}
</script>

<style lang="scss">
.form {
  position: relative;
  background: #fff;
  height: 50px;
}
input[type=text], select {
  position: absolute;
  top: 8px;
  left: 0px;
  width: 200px;
  padding: 6px 3px;
  margin: 1px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 2px;
  box-sizing: border-box;
  border: none;
}
input:focus {
  outline: none;
}
.form .form--btnAddTask {
  position: relative;
  top: 8px;
  left: 20px;
  display: inline-block;
  padding: 6px 15px;
  font-size: 15px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  outline: none;
  color: #fff;
  background-color: #00bfff;
  border: none;
  border-radius: 15px;
}
.form .form--btnAddTask:active {
  background-color: #1e90ff;
  transform: translateY(1px);
}
</style>
