(function(e){function t(t){for(var n,o,c=t[0],i=t[1],l=t[2],h=0,u=[];h<c.length;h++)o=c[h],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&u.push(r[o][0]),r[o]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);d&&d(t);while(u.length)u.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],n=!0,o=1;o<a.length;o++){var c=a[o];0!==r[c]&&(n=!1)}n&&(s.splice(t--,1),e=i(i.s=a[0]))}return e}var n={},o={app:0},r={app:0},s=[];function c(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"3bf71a05"}[e]+".js"}function i(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.e=function(e){var t=[],a={about:1};o[e]?t.push(o[e]):0!==o[e]&&a[e]&&t.push(o[e]=new Promise((function(t,a){for(var n="css/"+({about:"about"}[e]||e)+"."+{about:"c9a05393"}[e]+".css",r=i.p+n,s=document.getElementsByTagName("link"),c=0;c<s.length;c++){var l=s[c],h=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(h===n||h===r))return t()}var u=document.getElementsByTagName("style");for(c=0;c<u.length;c++){l=u[c],h=l.getAttribute("data-href");if(h===n||h===r)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var n=t&&t.target&&t.target.src||r,s=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=n,delete o[e],d.parentNode.removeChild(d),a(s)},d.href=r;var b=document.getElementsByTagName("head")[0];b.appendChild(d)})).then((function(){o[e]=0})));var n=r[e];if(0!==n)if(n)t.push(n[2]);else{var s=new Promise((function(t,a){n=r[e]=[t,a]}));t.push(n[2]=s);var l,h=document.createElement("script");h.charset="utf-8",h.timeout=120,i.nc&&h.setAttribute("nonce",i.nc),h.src=c(e);var u=new Error;l=function(t){h.onerror=h.onload=null,clearTimeout(d);var a=r[e];if(0!==a){if(a){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",u.name="ChunkLoadError",u.type=n,u.request=o,a[1](u)}r[e]=void 0}};var d=setTimeout((function(){l({type:"timeout",target:h})}),12e4);h.onerror=h.onload=l,document.head.appendChild(h)}return Promise.all(t)},i.m=e,i.c=n,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(a,n,function(t){return e[t]}.bind(null,n));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/WE_Semesterprojekt/",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],h=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var d=h;s.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"2dbf":function(e,t,a){},"3b94":function(e,t,a){"use strict";a("2dbf")},"4d7c":function(e,t,a){"use strict";a("d8ab")},"4f36":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("7a23"),o={id:"nav"},r=Object(n["f"])("Home"),s=Object(n["f"])(" | "),c=Object(n["f"])("Homework"),i=Object(n["f"])(" | "),l=Object(n["f"])("Hexapawn"),h=Object(n["f"])(" | "),u=Object(n["f"])("About");function d(e,t){var a=Object(n["w"])("router-link"),d=Object(n["w"])("router-view");return Object(n["p"])(),Object(n["d"])(n["a"],null,[Object(n["g"])("div",o,[Object(n["g"])(a,{to:"/"},{default:Object(n["B"])((function(){return[r]})),_:1}),s,Object(n["g"])(a,{to:"/homework"},{default:Object(n["B"])((function(){return[c]})),_:1}),i,Object(n["g"])(a,{to:"/hexapawn"},{default:Object(n["B"])((function(){return[l]})),_:1}),h,Object(n["g"])(a,{to:"/about"},{default:Object(n["B"])((function(){return[u]})),_:1})]),Object(n["g"])(d)],64)}a("ea17");const b={};b.render=d;var f=b,p=(a("4f36"),a("d3b7"),a("3ca3"),a("ddb0"),a("6c02")),g={class:"home"};function m(e,t,a,o,r,s){var c=Object(n["w"])("HelloWorld");return Object(n["p"])(),Object(n["d"])("div",g,[Object(n["g"])(c,{msg:"Welcome to my Web-Engineering Semesterprojekt"})])}var v=Object(n["C"])("data-v-a6b43750");Object(n["s"])("data-v-a6b43750");var w={class:"hello"},_=Object(n["e"])('<h3 data-v-a6b43750>Website by Niklas Fritzsche</h3><p data-v-a6b43750> This Website is purely for educational purposes<br data-v-a6b43750> This Page was created using Vue (Version 3.1.5) </p><h3 data-v-a6b43750>Installed CLI Plugins</h3><ul data-v-a6b43750><li data-v-a6b43750><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener" data-v-a6b43750>babel</a></li><li data-v-a6b43750><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener" data-v-a6b43750>eslint</a></li><li data-v-a6b43750><a href="https://github.com/vuejs/vue-router" target="_blank" rel="noopener" data-v-a6b43750>router</a></li><li data-v-a6b43750><a href="https://github.com/isaacs/rimraf" target="_blank" rel="noopener" data-v-a6b43750>rimraf</a></li></ul><h3 data-v-a6b43750>Other Installed 3rd Party Packages etc.</h3><ul data-v-a6b43750><li data-v-a6b43750><a href="https://vuejs.org" target="_blank" rel="noopener" data-v-a6b43750>fontawesome</a></li><li data-v-a6b43750><a href="https://forum.vuejs.org" target="_blank" rel="noopener" data-v-a6b43750>axios</a></li><li data-v-a6b43750><a href="https://chat.vuejs.org" target="_blank" rel="noopener" data-v-a6b43750>webpack</a></li></ul><h3 data-v-a6b43750>Link to my GitHub-Pages</h3><ul data-v-a6b43750><li data-v-a6b43750><a href="https://github.com/nf6863s/WE_Semesterprojekt" target="_blank" data-v-a6b43750>GitHub for this Site</a></li><li data-v-a6b43750><a href="https://github.com/nf6863s/Web_Engineering_Homepage" target="_blank" data-v-a6b43750>GitHub for all Homework during the Semester</a></li></ul>',8);Object(n["q"])();var j=v((function(e,t,a,o,r,s){return Object(n["p"])(),Object(n["d"])("div",w,[Object(n["g"])("h1",null,Object(n["y"])(a.msg),1),_])})),O={name:"HelloWorld",props:{msg:String}};a("d8fb");O.render=j,O.__scopeId="data-v-a6b43750";var k=O,y={name:"Home",components:{HelloWorld:k}};y.render=m;var E=y,C=Object(n["C"])("data-v-f0a2f3e0");Object(n["s"])("data-v-f0a2f3e0");var x={id:"hierarchy"},I={class:"folder"};Object(n["q"])();var P=C((function(e,t,a,o,r,s){var c=Object(n["w"])("font-awesome-icon");return Object(n["p"])(),Object(n["d"])("div",x,[(Object(n["p"])(!0),Object(n["d"])(n["a"],null,Object(n["v"])(r.homework_list,(function(e){return Object(n["p"])(),Object(n["d"])("div",{class:"folderContainer",key:e[0]},[Object(n["g"])("span",I,[Object(n["g"])(c,{icon:"folder"}),Object(n["f"])(Object(n["y"])(e[0]),1)]),(Object(n["p"])(!0),Object(n["d"])(n["a"],null,Object(n["v"])(e[1],(function(t){return Object(n["p"])(),Object(n["d"])("span",{class:"file",key:e[0]+t,onClick:function(a){return s.routerPush(e[0],t)}},[Object(n["g"])(c,{icon:"file-code"}),Object(n["f"])(" "+Object(n["y"])(t),1)],8,["onClick"])})),128))])})),128))])})),T=a("2909"),A=a("b85c"),B=(a("99af"),a("4ec9"),a("4e82"),a("ac1f"),a("1276"),a("f54e")),H={name:"Homework",data:function(){return{homework_list:[],test:["fas","folder-open"]}},methods:{routerPush:function(e,t){console.log(e,t),ht.push({path:"/homework/".concat(e,"/").concat(t)})}},created:function(){var e,t=new Map,a=Object(A["a"])(B.files);try{for(a.s();!(e=a.n()).done;){var n=e.value,o=n.split("/");t.has(o[2])?(t.get(o[2]).push(o[3]),t.get(o[2]).sort()):t.set(o[2],[o[3]])}}catch(r){a.e(r)}finally{a.f()}this.homework_list=new Map(Object(T["a"])(t.entries()).sort())}};a("f94b");H.render=P,H.__scopeId="data-v-f0a2f3e0";var S=H,W=Object(n["C"])("data-v-5ea93edc");Object(n["s"])("data-v-5ea93edc");var q={class:"body"},M={class:"code-div"},N=Object(n["g"])("h3",null,"HTML-Code",-1),L={class:"prettyprint"},U={class:"prettyprint"},G={class:"iframe-div"},J=Object(n["g"])("h3",null,"Preview",-1);Object(n["q"])();var D=W((function(e,t,a,o,r,s){return Object(n["p"])(),Object(n["d"])("div",null,[Object(n["g"])("h2",null,"Übersicht für "+Object(n["y"])(a.task.toUpperCase()),1),Object(n["g"])("div",q,[Object(n["g"])("div",M,[N,Object(n["g"])("pre",L,"            "+Object(n["y"])(r.content)+"\r\n        ",1),(Object(n["p"])(!0),Object(n["d"])(n["a"],null,Object(n["v"])(r.js_files,(function(e,t){return Object(n["p"])(),Object(n["d"])("div",{key:t},[Object(n["g"])("h3",null,Object(n["y"])(e[0]),1),Object(n["g"])("pre",U,"            "+Object(n["y"])(e[1])+"\r\n          ",1)])})),128))]),Object(n["g"])("div",G,[J,Object(n["g"])("iframe",{src:"https://www2.inf.h-brs.de/~nfrit12s/homework/"+a.folder+"/"+a.task},null,8,["src"])])])])})),F=a("1da1"),R=(a("96cf"),a("a1f0"),{name:"HomeworkDetailView",data:function(){return{content:"",js_files:new Map}},props:["folder","task"],methods:{fetchJs:function(e){var t=this;return Object(F["a"])(regeneratorRuntime.mark((function a(){var n,o;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return console.log(e),a.next=3,fetch("https://www2.inf.h-brs.de/~nfrit12s/"+e);case 3:if(n=a.sent,!n.ok){a.next=9;break}return a.next=7,n.text();case 7:o=a.sent,t.js_files.set(e,o);case 9:case"end":return a.stop()}}),a)})))()}},created:function(){var e=this,t="https://www2.inf.h-brs.de/~nfrit12s/homework/"+this.folder+"/"+this.task;fetch(t).then((function(e){return e.text()})).then((function(t){e.content=t;var a,n=e.content.matchAll(/<script src=(.*?)<\/script>/gi),o=e.content.matchAll(/new Worker\((.*?)\);/gi),r=Object(A["a"])(n);try{for(r.s();!(a=r.n()).done;){var s=a.value,c=s[1].replaceAll("../","").replaceAll('"',"").replaceAll(">","");e.fetchJs(c)}}catch(d){r.e(d)}finally{r.f()}var i,l=Object(A["a"])(o);try{for(l.s();!(i=l.n()).done;){var h=i.value,u=h[1].replaceAll('"',"").replaceAll("'","");console.log(u),e.fetchJs(u)}}catch(d){l.e(d)}finally{l.f()}}))},mounted:function(){var e=document.createElement("script");setTimeout((function(){e.setAttribute("src","https://cdn.jsdelivr.net/gh/google/code-prettify@master/loader/run_prettify.js?lang=html&lang=css&lang=js&skin=sunburst"),document.head.appendChild(e)}),0)}});a("4d7c");R.render=D,R.__scopeId="data-v-5ea93edc";var z=R,V=Object(n["C"])("data-v-317917ff");Object(n["s"])("data-v-317917ff");var Y=Object(n["g"])("h1",null,"Hexapawn",-1),$=Object(n["g"])("h3",null,"How to build a game-learning machine and then teach it to play and to win",-1),K=Object(n["f"])("For a tutorial click here "),Q=Object(n["g"])("h3",null,"How to Play",-1),X=Object(n["f"])(" Hexapawn is basically Chess, but smaller (and maybe even better). "),Z=Object(n["g"])("br",null,null,-1),ee=Object(n["f"])("It is played on a 3x3 Board with 3 Pawns each. "),te=Object(n["g"])("br",null,null,-1),ae=Object(n["f"])(" The Pawns can move just like a normal Pawn could in Chess. "),ne=Object(n["g"])("br",null,null,-1),oe=Object(n["f"])(" So one field ahead if it is empty or one field diagonally forward, if there is an opponents Pawn to attack. "),re={class:"chessboard"},se={class:"tutorial-field black highlight"},ce=Object(n["g"])("td",{class:"tutorial-field white highlight"},null,-1),ie=Object(n["g"])("td",{class:"tutorial-field white"},null,-1),le={class:"tutorial-field black"},he=Object(n["g"])("br",null,null,-1),ue=Object(n["f"])(" White (You) will always have the first move. "),de=Object(n["g"])("br",null,null,-1),be=Object(n["g"])("br",null,null,-1),fe=Object(n["f"])(" There are three possible ways to win the Game: "),pe={class:"tutorial-list"},ge=Object(n["g"])("span",null,"Get your Pawn to the other Side of the field",-1),me={class:"chessboard"},ve={class:"tutorial-field black"},we={class:"tutorial-field white selected"},_e=Object(n["g"])("tr",null,[Object(n["g"])("td",{class:"tutorial-field white"}),Object(n["g"])("td",{class:"tutorial-field black"})],-1),je=Object(n["g"])("span",null,"Leave the Opponent with no legal moves on his next turn",-1),Oe={class:"chessboard"},ke={class:"tutorial-field black"},ye=Object(n["g"])("td",{class:"tutorial-field white"},null,-1),Ee={class:"tutorial-field white"},Ce=Object(n["g"])("td",{class:"tutorial-field black"},null,-1),xe=Object(n["g"])("span",null,"Take all of the Opponents Pawns",-1),Ie={class:"chessboard"},Pe=Object(n["g"])("tr",null,[Object(n["g"])("td",{class:"tutorial-field black"}),Object(n["g"])("td",{class:"tutorial-field white"})],-1),Te={class:"tutorial-field white"},Ae={class:"tutorial-field black"},Be=Object(n["e"])('<h3 data-v-317917ff>How the Opponent learns</h3><div data-v-317917ff> The Game Hexapawn was invented by American Mathematician Martin Gardner,<br data-v-317917ff> who was the Author for the Column &quot;Mathematical Games&quot; in the Journal &quot;Scientific American&quot; <br data-v-317917ff> The Article that first mentioned Hexapawn was titled<br data-v-317917ff> &quot;How to build a game-learning machine and then teach it to play and win&quot;,<br data-v-317917ff> which was about a reinforcement-learning machine called &quot;MENACE&quot; that was build out of 300 Matchboxes and was able to play Noughts and Crosses (Tic-Tac-Toe)<br data-v-317917ff> You can find the Article from Martin Gardner <a href="http://cs.williams.edu/~freund/cs136-073/GardnerHexapawn.pdf" target="_blank" data-v-317917ff>here</a> and another Article about &quot;MENACE&quot; <a href="https://medium.com/@ODSC/how-300-matchboxes-learned-to-play-tic-tac-toe-using-menace-35e0e4c29fc" target="_blank" data-v-317917ff>here</a>.<br data-v-317917ff><br data-v-317917ff> This implementation mirrors that of the original approach with matchboxes, where for every possible board-state, a matchbox with colored marbles each corresponding to a legal move were created.<br data-v-317917ff> The &quot;AI&quot; would then pick the matchbox for the current board-state and pick one marble at random to decide which move to use.<br data-v-317917ff> If the move lead to a loss for the &quot;AI&quot;, the marble that corresponded to the loosing move was removed and the game was restarted, resulting in a continuous learning Algorithm.<br data-v-317917ff><br data-v-317917ff> To try out this method, feel free to try and beat the computer in the Game below. The Score is automatically tallied and the Win-Rate for the Computer is shown for the last 10 Matches. <br data-v-317917ff> If you refresh the Browser, all learning progress is reset. </div>',2),He=Object(n["f"])("Hide Tutorial "),Se={class:"container"},We={class:"chessboard"},qe=Object(n["g"])("td",null,"3",-1),Me={class:"field black",id:"20"},Ne={class:"field white",id:"21"},Le={class:"field black",id:"22"},Ue=Object(n["g"])("tr",null,[Object(n["g"])("td",null,"2"),Object(n["g"])("td",{class:"field white",id:"10"}),Object(n["g"])("td",{class:"field black",id:"11"}),Object(n["g"])("td",{class:"field white",id:"12"})],-1),Ge=Object(n["g"])("td",null,"1",-1),Je={class:"field black",id:"00"},De={class:"field white",id:"01"},Fe={class:"field black",id:"02"},Re=Object(n["g"])("tr",null,[Object(n["g"])("td"),Object(n["g"])("td",null,"A"),Object(n["g"])("td",null,"B"),Object(n["g"])("td",null,"C")],-1);Object(n["q"])();var ze=V((function(e,t,a,o,r,s){var c=Object(n["w"])("font-awesome-icon"),i=Object(n["w"])("scoreboard");return Object(n["p"])(),Object(n["d"])(n["a"],null,[Y,$,Object(n["g"])("h3",{class:"tutorial-expand",onClick:t[1]||(t[1]=function(e){return s.toggle_tutorial()})},[K,Object(n["g"])(c,{class:{hidden:r.show_tutorial},icon:"chevron-down"},null,8,["class"]),Object(n["g"])(c,{class:{hidden:!r.show_tutorial},icon:"chevron-up"},null,8,["class"])]),Object(n["g"])("div",{class:["how-to-play",{hidden:!r.show_tutorial}]},[Q,Object(n["g"])("div",null,[X,Z,ee,te,ae,ne,oe,Object(n["g"])("div",null,[Object(n["g"])("table",re,[Object(n["g"])("tr",null,[Object(n["g"])("td",se,[Object(n["g"])(c,{class:"pawn pawn-black",icon:"chess-pawn"})]),ce]),Object(n["g"])("tr",null,[ie,Object(n["g"])("td",le,[Object(n["g"])(c,{class:"pawn pawn-white",icon:"chess-pawn"})])])])]),he,ue,de,be,fe,Object(n["g"])("ol",pe,[Object(n["g"])("li",null,[ge,Object(n["g"])("div",null,[Object(n["g"])("table",me,[Object(n["g"])("tr",null,[Object(n["g"])("td",ve,[Object(n["g"])(c,{class:"pawn pawn-black",icon:"chess-pawn"})]),Object(n["g"])("td",we,[Object(n["g"])(c,{class:"pawn pawn-white",icon:"chess-pawn"})])]),_e])])]),Object(n["g"])("li",null,[je,Object(n["g"])("div",null,[Object(n["g"])("table",Oe,[Object(n["g"])("tr",null,[Object(n["g"])("td",ke,[Object(n["g"])(c,{class:"pawn pawn-black",icon:"chess-pawn"})]),ye]),Object(n["g"])("tr",null,[Object(n["g"])("td",Ee,[Object(n["g"])(c,{class:"pawn pawn-white",icon:"chess-pawn"})]),Ce])])])]),Object(n["g"])("li",null,[xe,Object(n["g"])("div",null,[Object(n["g"])("table",Ie,[Pe,Object(n["g"])("tr",null,[Object(n["g"])("td",Te,[Object(n["g"])(c,{class:"pawn pawn-white",icon:"chess-pawn"})]),Object(n["g"])("td",Ae,[Object(n["g"])(c,{class:"pawn pawn-white",icon:"chess-pawn"})])])])])])])]),Be,Object(n["g"])("h3",{class:"tutorial-expand",onClick:t[2]||(t[2]=function(e){return s.toggle_tutorial()})},[He,Object(n["g"])(c,{icon:"chevron-up"})])],2),Object(n["g"])("div",Se,[Object(n["g"])("table",We,[Object(n["g"])("tr",null,[qe,Object(n["g"])("td",Me,[Object(n["g"])(c,{class:"pawn pawn-black",id:"4",icon:"chess-pawn"})]),Object(n["g"])("td",Ne,[Object(n["g"])(c,{class:"pawn pawn-black",id:"5",icon:"chess-pawn"})]),Object(n["g"])("td",Le,[Object(n["g"])(c,{class:"pawn pawn-black",id:"6",icon:"chess-pawn"})])]),Ue,Object(n["g"])("tr",null,[Ge,Object(n["g"])("td",Je,[Object(n["g"])(c,{class:"pawn pawn-white",id:"1",icon:"chess-pawn",onClick:t[3]||(t[3]=function(e){return s.click_pawn(1)})})]),Object(n["g"])("td",De,[Object(n["g"])(c,{class:"pawn pawn-white",id:"2",icon:"chess-pawn",onClick:t[4]||(t[4]=function(e){return s.click_pawn(2)})})]),Object(n["g"])("td",Fe,[Object(n["g"])(c,{class:"pawn pawn-white",id:"3",icon:"chess-pawn",onClick:t[5]||(t[5]=function(e){return s.click_pawn(3)})})])]),Re]),Object(n["g"])(i,{ref:"scoreboard",class:"scoreboard"},null,512)])],64)})),Ve=(a("2af1"),a("a434"),Object(n["C"])("data-v-6a26ceb6"));Object(n["s"])("data-v-6a26ceb6");var Ye={class:"scoreboard"},$e={class:"score"},Ke=Object(n["g"])("span",{class:"score-title"},"Black",-1),Qe=Object(n["g"])("span",{class:"score-separator"},":",-1),Xe=Object(n["g"])("span",{class:"score-title"},"White",-1),Ze=Object(n["g"])("hr",{class:"line"},null,-1),et={class:"winrate"},tt=Object(n["f"])("Win-Rate Black: "),at=Object(n["g"])("span",null,"(Winrate of last 10 Games)",-1);Object(n["q"])();var nt=Ve((function(e,t,a,o,r,s){return Object(n["p"])(),Object(n["d"])("div",Ye,[Object(n["g"])("div",$e,[Object(n["g"])("div",null,[Ke,Object(n["g"])("span",null,Object(n["y"])(r.black),1)]),Qe,Object(n["g"])("div",null,[Xe,Object(n["g"])("span",null,Object(n["y"])(r.white),1)])]),Ze,Object(n["g"])("div",et,[Object(n["g"])("span",null,[tt,Object(n["g"])("span",null,Object(n["y"])(s.get_wr_for_last_ten_games()),1)]),at])])})),ot=(a("fb6a"),a("159b"),a("b680"),{name:"Scoreboard",data:function(){return{white:0,black:0,history:[]}},methods:{updateScore:function(e){0===e?this.white++:this.black++,this.history.push(e)},get_wr_for_last_ten_games:function(){var e=[];if(0===this.history.length)return"0%";e=this.history.length>10?this.history.slice(this.history.length-10):this.history;var t=0;return e.forEach((function(e){return t+=e})),console.log(t,t/e.length),parseFloat(t/e.length*100).toFixed(0)+"%"}}});a("ef60");ot.render=nt,ot.__scopeId="data-v-6a26ceb6";var rt=ot,st={name:"Hexapawn",components:{Scoreboard:rt},data:function(){return{board:[],pawns:[],pawn_icons:[],selected_pawn:0,highlighted_fields:[],move_pawn_function:new Map,move_number:0,last_move_black:[],winner:"",show_tutorial:!1,move_response_list:{}}},methods:{click_pawn:function(e){var t=this;if(this.selected_pawn>0){var a=document.getElementById(this.selected_pawn);a.parentElement.classList.remove("selected"),this.remove_highlighting()}if(this.selected_pawn!==e){var n=document.getElementById(e);n.parentElement.classList.add("selected"),this.selected_pawn=e;var o,r=this.get_legal_moves(this.board,this.pawns.get(this.selected_pawn).pos,!0),s=Object(A["a"])(r);try{var c=function(){var e=o.value,a=e[0]+""+e[1],n=document.getElementById(a);n.classList.add("highlight"),t.highlighted_fields.push(a);var r=function(){return t.move_pawn(t.selected_pawn,a,!0)};n.addEventListener("click",r,{once:!0}),t.move_pawn_function.set(a,r)};for(s.s();!(o=s.n()).done;)c()}catch(i){s.e(i)}finally{s.f()}}else this.selected_pawn=0},init_pawns:function(){this.pawns=new Map,this.pawns.set(1,this.pawn_object_factory(1,[0,0],!0)),this.pawns.set(2,this.pawn_object_factory(2,[0,1],!0)),this.pawns.set(3,this.pawn_object_factory(3,[0,2],!0)),this.pawns.set(4,this.pawn_object_factory(4,[2,0],!1)),this.pawns.set(5,this.pawn_object_factory(5,[2,1],!1)),this.pawns.set(6,this.pawn_object_factory(6,[2,2],!1)),this.pawn_icons=new Map,this.pawn_icons.set(1,document.getElementById("1").cloneNode(!0)),this.pawn_icons.set(2,document.getElementById("2").cloneNode(!0)),this.pawn_icons.set(3,document.getElementById("3").cloneNode(!0)),this.pawn_icons.set(4,document.getElementById("4").cloneNode(!0)),this.pawn_icons.set(5,document.getElementById("5").cloneNode(!0)),this.pawn_icons.set(6,document.getElementById("6").cloneNode(!0))},pawn_object_factory:function(e,t,a){var n={};return n.id=e,n.pos=t,n.white=a,n.setPos=function(e){n.pos=e},n.getPos=function(){return n.pos},n.getId=function(){return n.id},n.isWhite=function(){return n.white},n},init_board:function(){this.board[0]=[1,2,3],this.board[1]=[0,0,0],this.board[2]=[4,5,6]},get_legal_moves:function(e,t,a){var n=[];if(a){0===e[t[0]+1][t[1]]&&n.push([t[0]+1,t[1]]);var o=e[t[0]+1][t[1]-1];t[1]>0&&0!==o&&o>3&&n.push([t[0]+1,t[1]-1]),o=e[t[0]+1][t[1]+1],t[1]<2&&0!==o&&o>3&&n.push([t[0]+1,t[1]+1])}else{0===e[t[0]-1][t[1]]&&n.push([t[0]-1,t[1]]);var r=e[t[0]-1][t[1]-1];t[1]>0&&0!==r&&r<4&&n.push([t[0]-1,t[1]-1]),r=e[t[0]-1][t[1]+1],t[1]<2&&0!==r&&r<4&&n.push([t[0]-1,t[1]+1])}return n},get_pawn_at_pos:function(e,t){var a=this.board[e][t];return 0===a?0:a},remove_highlighting:function(){var e,t=Object(A["a"])(this.highlighted_fields);try{for(t.s();!(e=t.n()).done;){var a=e.value,n=document.getElementById(a);n.classList.remove("highlight");var o=this.move_pawn_function.get(a);n.removeEventListener("click",o,{once:!0}),this.move_pawn_function.delete(a)}}catch(r){t.e(r)}finally{t.f()}this.highlighted_fields=[]},move_pawn:function(e,t,a){var n=this,o=document.getElementById(t),r=parseInt(t[0]),s=parseInt(t[1]),c=this.get_pawn_at_pos(r,s);0!==c&&(this.pawns.delete(c),document.getElementById(c).remove());var i=document.getElementById(e);null!==i&&(i.parentElement.classList.remove("selected"),i.remove(),o.appendChild(i));var l=this.pawns.get(e),h=l.getPos(),u=[r,s];this.board[h[0]][h[1]]=0,this.board[r][s]=e,l.setPos(u),a&&(this.remove_highlighting(),this.selected_pawn=0),this.move_number++;var d=this.check_win_conditions(a);setTimeout((function(){d?(n.winner=a?"white":"black",n.game_over()):a&&n.make_opponent_move()}),250)},check_win_conditions:function(e){for(var t=0;t<3;t++){var a=this.get_pawn_at_pos(0,t);if(a>0&&!this.pawns.get(a).isWhite())return!0;if(a=this.get_pawn_at_pos(2,t),a>0&&this.pawns.get(a).isWhite())return!0}var n,o=null,r=!0,s=!0,c=Object(A["a"])(this.pawns.values());try{for(c.s();!(n=c.n()).done;){var i=n.value;null===o?o=i.isWhite():o^i.isWhite()&&(r=!1),s&&i.isWhite()!==e&&this.get_legal_moves(this.board,i.getPos(),i.isWhite()).length>0&&(s=!1)}}catch(l){c.e(l)}finally{c.f()}return r||s},make_opponent_move:function(){for(var e=0;e<this.move_response_list.moves.length;e++){var t=this.move_response_list.moves[e];if(t.move===this.move_number+1&&this.compareToCurrentBoard(t.board)&&t.possible_moves.length>0){var a=parseInt(Math.random()*t.possible_moves.length),n=t.possible_moves[a];this.last_move_black=[e,a],this.move_pawn(n.id,n.move_to[0]+""+n.move_to[1],!1)}else t.move===this.move_number+1&&this.compareToCurrentBoard(t.board)&&t.possible_moves.length}},init_opponent_move_list:function(){var e=this.deep_copy_array(this.board);this.move_response_list={moves:[]},this.recursively_init_move_response_list(e,this.move_response_list,2),console.log(this.move_response_list.moves.sort((function(e,t){return Math.sign(e.move-t.move)})))},recursively_init_move_response_list:function(e,t,a){for(var n=this.deep_copy_array(e),o=this.get_pawn_positions(n),r=0,s=0,c=0;c<3;c++)r+=o[c].length>0?1:0,s+=o[c+3].length>0?1:0;if(0!==r&&0!==s)for(var i=0;i<3;i++)if(0!==o[i].length){var l,h=this.get_legal_moves(n,o[i],!0),u=Object(A["a"])(h);try{for(u.s();!(l=u.n()).done;){var d=l.value;o=this.get_pawn_positions(n);var b=this.simulate_game_state(n,o[i],d);if(!this.check_board_for_promotion(b)){o=this.get_pawn_positions(b);for(var f=[],p=[],g=3;g<6;g++)if(0!==o[g].length){var m,v=this.get_legal_moves(b,o[g],!1),w=Object(A["a"])(v);try{for(w.s();!(m=w.n()).done;){var _=m.value;f.push({id:g+1,move_to:_}),p.push(this.simulate_game_state(b,o[g],_))}}catch(y){w.e(y)}finally{w.f()}}if(f.length>0&&(t.moves.push({move:a,board:b,possible_moves:f}),a<6)){var j,O=Object(A["a"])(p);try{for(O.s();!(j=O.n()).done;){var k=j.value;this.check_board_for_promotion(k)||this.recursively_init_move_response_list(k,t,a+2)}}catch(y){O.e(y)}finally{O.f()}}}}}catch(y){u.e(y)}finally{u.f()}}},get_pawn_positions:function(e){for(var t=[[],[],[],[],[],[]],a=0;a<3;a++)for(var n=0;n<3;n++)e[a][n]>0&&(t[parseInt(e[a][n])-1]=[a,n]);return t},simulate_game_state:function(e,t,a){var n=this.deep_copy_array(e),o=e[t[0]][t[1]];return n[t[0]][t[1]]=0,n[a[0]][a[1]]=o,n},deep_copy_array:function(e){return JSON.parse(JSON.stringify(e))},check_board_for_promotion:function(e){for(var t=0;t<3;t++)if(e[0][t]>3||e[2][t]<4&&e[2][t]>0)return!0;return!1},compareToCurrentBoard:function(e){for(var t=0;t<3;t++)for(var a=0;a<3;a++)if(this.board[t][a]!==e[t][a])return!1;return!0},game_over:function(){var e=this;if(alert(this.winner+" has won"),"white"===this.winner){var t=this.last_move_black[0],a=this.last_move_black[1];a>-1&&this.move_response_list.moves[t].possible_moves.splice(a,1),this.last_move_black=[],this.winner="",this.$refs.scoreboard.updateScore(0)}else this.$refs.scoreboard.updateScore(1);for(var n=function(t){var a=document.getElementById(t+1+""),n=e.pawn_icons.get(t+1);if(null!==a&&a.remove(),t<3){var o=function(){return e.click_pawn(t+1)};n.addEventListener("click",o)}var r=document.getElementById(t<3?"0"+t:"2"+t-3);r.appendChild(n)},o=0;o<6;o++)n(o);this.move_number=0,this.init_pawns(),this.init_board()},toggle_tutorial:function(){this.show_tutorial=!this.show_tutorial}},mounted:function(){this.init_pawns(),this.init_board(),this.init_opponent_move_list()}};a("3b94");st.render=ze,st.__scopeId="data-v-317917ff";var ct=st,it=[{path:"/",name:"Home",component:E},{path:"/homework",name:"Homework",component:S},{path:"/homework/:folder/:task",name:"Detail",component:z,props:!0},{path:"/hexapawn",name:"Hexapawn",component:ct},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}}],lt=Object(p["a"])({history:Object(p["b"])(),routes:it}),ht=lt,ut=a("5502"),dt=Object(ut["a"])({state:{},mutations:{},actions:{},modules:{}}),bt=a("ecee"),ft=a("c074"),pt=a("ad3d");bt["c"].add(ft["e"],ft["d"],ft["f"],ft["a"],ft["b"],ft["c"]),Object(n["c"])(f).component("font-awesome-icon",pt["a"]).use(dt).use(ht).mount("#app")},c7f2:function(e,t,a){},cbaf:function(e,t,a){},cd4b:function(e,t,a){},d652:function(e,t,a){},d8ab:function(e,t,a){},d8fb:function(e,t,a){"use strict";a("d652")},ea17:function(e,t,a){"use strict";a("c7f2")},ef60:function(e,t,a){"use strict";a("cbaf")},f54e:function(e){e.exports=JSON.parse('{"files":["./homework/Uebung_1/task1_4.html","./homework/Uebung_1/task1_3.html","./homework/Uebung_1/task1_5.html","./homework/Uebung_4/Rednerliste.html","./homework/Uebung_4/Einkaufsliste.html","./homework/Uebung_2/Task2_3_grid.html","./homework/Uebung_2/Task2_3_flex.html","./homework/Uebung_2/Task2_4.html","./homework/Uebung_2/Task2_1.html","./homework/Uebung_2/Task2_2.html","./homework/Uebung_5/AsyncAwait.html","./homework/Uebung_5/WWWNavigator.html","./homework/Uebung_5/Promises.html","./homework/Uebung_5/PrimzahlenWebworker.html","./homework/Uebung_5/Primzahlen.html"]}')},f94b:function(e,t,a){"use strict";a("cd4b")}});
//# sourceMappingURL=app.8f2a8ed1.js.map