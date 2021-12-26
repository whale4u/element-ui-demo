<template>
<div>
  <div>{{user}}</div>
</div>
</template>

<script>
import axios from 'axios';
// import { getData } from '../../../http'
export default {
  name: 'User',
  data() {
    return {
      user: []
    }
  },
  mounted() {
    console.log('22312321')
    this.getUser();
  },
  methods: {
    getUser() {
      axios.get('/model/user.json').then(res => {
        console.log('user', res)
        this.user.push(res)
      })
      // getData('/model/user.json').then(res => {
      //   console.log(res);
      //   this.user.push(res)
      // })
    }
  }
}
</script>

<style scoped>
</style>