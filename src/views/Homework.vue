<template>
  <!-- Folder hierarchy html inspired by https://stackoverflow.com/a/51617657 and fixed for Vue -->
  <div id="hierarchy">
    <div class="folderContainer" v-for="task_no of homework_list" v-bind:key="task_no[0]">
      <span class="folder"><font-awesome-icon icon="folder" />{{task_no[0]}}</span>
      <span class="file" v-for="file_name in task_no[1]" v-bind:key="task_no[0] + file_name" v-on:click="routerPush(task_no[0], file_name)">
        <font-awesome-icon icon="file-code" />
        {{file_name}}
      </span>
    </div>
  </div>
</template>

<script>
import Homework from '../../homework/hw.json';
import router from "@/router";

export default {
  name: "Homework",
  data() {
    return {
      homework_list: [],
      test: ['fas', 'folder-open']
    };
  },
  methods: {
    routerPush(folder, task) {
      console.log(folder, task);
      router.push({path: `/homework/${folder}/${task}`});
    }
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

  }
}
</script>

<style scoped>
#hierarchy
{
  font-family: FontAwesome;
  text-align: left;
  margin: 0 30vh;
}
.folderContainer, .file
{
  display: block;
  padding: 5px 5px 5px 50px;
}
.folder
{
  color: red;
}
.file
{
  color: green;
}
.folder, .file
{
  cursor: pointer;
}
.folder > * {
  margin-right: 10px;
}
.file:hover
{
  background: yellow;
}
.folder:before, .file:before
{
  padding-right: 10px;
}
</style>