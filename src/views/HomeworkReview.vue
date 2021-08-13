<template>
  <div v-html="''"></div>
</template>

<script>
import axios from "axios";

export default {
  name: "HomeworkReview",
  data() {
    return {
      content: ""
    };
  },
  props: [
      'folder',
      'task'
  ],
  created() {
    this.loadFile()
  },
  methods: {
    loadFile() {
      axios({
        method: "get",
        url: "../assets/homework/Uebung_1/task1_3.html"
      })
          .then(result => {
            this.content = result.data;
          })
          .catch(error => {
            console.error("error getting file", error);
          });
    }
  }
}
</script>

<style scoped>

</style>