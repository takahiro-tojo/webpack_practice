import Vue from 'vue';
import VueApp from'./VueApp.vue';
import './reactApp.jsx';
import add from './add.ts';
import my from './my.js';
import '../css/main.scss';

console.log('webpack!');
my();

new Vue({
  el: '#vue-root',
  render: (h) => h(VueApp),
});

console.log(add(3, 9));
