<template>
  <div>
    <h2>Übersicht für {{task.toUpperCase()}}</h2>
    <div class="body">
      <div class="code-div">
        <h3>HTML-Code</h3>
        <pre class="prettyprint">
            {{content}}
        </pre>
        <div v-for="(value, index) of js_files" v-bind:key="index">
          <h3>{{value[0]}}</h3>
          <pre class="prettyprint">
            {{value[1]}}
          </pre>
        </div>
      </div>
      <div class="iframe-div">
        <h3>Preview</h3>
        <iframe :src="'http://www2.inf.h-brs.de/~nfrit12s/homework/' + folder + '/' + task"></iframe>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeworkDetailView",
  data() {
    return {
      content: "",
      js_files: new Map()
    };
  },
  props: [
      'folder',
      'task'
  ],
  methods: {
    async fetchJs(path) {
      console.log(path);
      const response = await fetch('http://www2.inf.h-brs.de/~nfrit12s/' + path);

      if (response.ok) {
        let text = await response.text();
        this.js_files.set(path, text);
      }
    }
  },
  created() {
    let html_string = 'http://www2.inf.h-brs.de/~nfrit12s/homework/' + this.folder + '/' + this.task;

    fetch(html_string)
        .then( r => r.text())
        .then( t => {
          this.content = t;
          let check_for_external_script = this.content.matchAll(/<script src=(.*?)<\/script>/gi);
          let check_for_external_WebWorker = this.content.matchAll(/new Worker\((.*?)\);/gi);
          for (let el of check_for_external_script) {
            let js_source = el[1]
                .replaceAll('../', '')
                .replaceAll('"', '')
                .replaceAll('>', '');
            this.fetchJs(js_source);
          }
          for (let el of check_for_external_WebWorker) {
            let ww_source = el[1]
                .replaceAll('"', '')
                .replaceAll("'", "");
            console.log(ww_source);
            this.fetchJs(ww_source);
          }
        });
  },
  mounted() {
    // Inject Google Code Prettifier as external Script as described here: https://vue-view.com/how-to-load-an-external-script-in-vue-component/
    let externalScript = document.createElement('script');
    externalScript.setAttribute('src',
        'https://cdn.jsdelivr.net/gh/google/code-prettify@master/loader/run_prettify.js?lang=html&lang=css&lang=js&skin=sunburst');
    document.head.appendChild(externalScript);
  }
}
</script>

<style scoped>
  .body {
    display: flex;
    justify-content: space-between;
  }

  .code-div {
    margin-left: 30px;
    display: flex;
    flex-direction: column;
  }

  .iframe-div {
    margin-right: 30px;
    display: flex;
    flex-direction: column;
  }

  pre {
    text-align: left;
    width: 45vw !important;
    font-size: small;
  }

  iframe {
    width: 45vw;
    border: none;
    height: 100%;
    max-height: 75vh;
  }
</style>