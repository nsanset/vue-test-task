<template>
    <div class="TaskList">
        <TaskHeader/>
        <Task/>
        <TaskForm/>
    </div>
</template>

<script>
import TaskHeader from '@/components/TaskHeader.vue'
import Task from '@/components/Task.vue'
import TaskForm from '@/components/TaskForm.vue'
import { mapState } from 'vuex'
export default {
  name: 'TaskList',
  components: {
    TaskHeader,
    TaskForm,
    Task
  },
  computed: {
    ...mapState([
      'todos'
    ])
  }
}
</script>

<style lang="scss">
.TaskList {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  background: #ffffff;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid rgba(228, 228, 228, .4);
  margin-bottom: 40px;
  padding: 20px;
}
</style>
