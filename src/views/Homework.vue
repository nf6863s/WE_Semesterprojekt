<template>
  <ol>
    <li>Task
      <ul>
        <li><a href='http://www2.inf.h-brs.de/~nfrit12s/Components/Uebung_1/task1_3.html' target="_blank">Task 1.3</a></li>
      </ul>
    </li>
  </ol>
</template>

<script>
import Homework from '../../homework/hw.json';
export default {
  name: "Homework",
  data() {
    return {
    };
  },
  mounted() {
    console.log(Homework.msg);
  },
  methods: {
  }
}
</script>

<style scoped>

</style>