'use strict';

var {reqwest, utils} = require('@common');
var Toast = require('@component/toast/toast');
var SearchArea = require('@module/searcharea/searcharea');

var Donate = Vue.extend({
  template: require('./donate.html'),

  data() {
    return {
      
    }
  },
  methods: {
  },
  ready() {
  },
  components: {
    SearchArea: SearchArea
  }
});

module.exports = Donate;