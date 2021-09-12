<template>
  <ol>
    <li v-for="task_no of homework_list" v-bind:key="task_no[0]">
      <span>{{task_no[0]}}</span>
      <ul>
        <li v-for="file_name in task_no[1]" v-bind:key="task_no[0] + file_name">
          <a v-bind:href="'http://www2.inf.h-brs.de/~nfrit12s/homework/' + task_no[0] + '/' + file_name"
             target="_blank">
            {{file_name}}
          </a>
        </li>
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
      homework_list: []
    };
  },
  created() {
    let res = new Map();
    for (let file of Homework.files) {
      let file_split = file.split('/')
      if (res.has(file_split[2])) {
        res.get(file_split[2]).push(file_split[3]);
        res.get(file_split[2]).sort();
      } else {
        res.set(file_split[2], [file_split[3]]);
      }
    }

    // Sorting Map taken from StackOverflow https://stackoverflow.com/a/31159284
    this.homework_list = new Map([...res.entries()].sort());
  },
  methods: {
  }
}
</script>

<style scoped>

</style>