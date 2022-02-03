<template>
  <div class="Todo">
    <TaskList/>
  </div>
</template>

<script>
// @ is an alias to /src
import TaskList from '@/components/TaskList.vue'
import { mapState } from 'vuex'
export default {
  name: 'Todo',
  components: {
    TaskList
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapState([
      'todos'
    ])
  }
}
</script>
