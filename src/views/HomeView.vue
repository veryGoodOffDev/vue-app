<template>
  <div>
    <UsersList v-bind:users="users"/>
  </div>
</template>

<script>
// @ is an alias to /src
import UsersList from '@/components/UsersList.vue'
import axios from 'axios'

export default {
  name: 'HomeView',
  data() {
    return {
      users:[]
    };
  },
  components: {
    UsersList
  },
  async mounted() {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users')
    const users = await res.data
    this.users = users
  }
}
</script>
