<template>
  <div class="home">
    <TaskList/>
  </div>
</template>

<script>
// @ is an alias to /src
import TaskList from '@/components/TaskList.vue'
import { mapState } from 'vuex'
export default {
  name: 'Home',
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
