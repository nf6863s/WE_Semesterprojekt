<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h3>Website by Niklas Fritzsche</h3>
    <p>
      This Website is purely for educational purposes<br>
      This Page was created using Vue (Version 3.1.5)
    </p>
    <h3>Installed CLI Plugins</h3>
    <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">eslint</a></li>
      <li><a href="https://github.com/vuejs/vue-router" target="_blank" rel="noopener">router</a></li>
      <li><a href="https://github.com/isaacs/rimraf" target="_blank" rel="noopener">rimraf</a></li>
    </ul>
    <h3>Other Installed 3rd Party Packages etc.</h3>
    <ul>
      <li><a href="https://vuejs.org" target="_blank" rel="noopener">fontawesome</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">axios</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">webpack</a></li>
    </ul>
    <h3>Link to my GitHub-Pages</h3>
    <ul>
      <li><a href="https://github.com/nf6863s/WE_Semesterprojekt" target="_blank">GitHub for this Site</a></li>
      <li><a href="https://github.com/nf6863s/Web_Engineering_Homepage" target="_blank">GitHub for all Homework during the Semester</a></li>

    </ul>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
