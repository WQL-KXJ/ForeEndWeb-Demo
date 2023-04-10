<template>
  <div id="app">
    <Students/>
    <hr>
    <Teachers/>
  </div>
</template>

<script>
import Students from './components/students.vue'
import Teachers from './components/teachers.vue'
export default {
  name: 'App',
  components: {
    Students,
    Teachers
  }
}
</script>

<style>

</style>