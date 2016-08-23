'use strict';

var {reqwest, utils} = require('@common');
var Toast = require('@component/toast/toast');
var PageSide = require('@module/pageside/pageside');
var Abstract = require('@module/abstract/abstract');
var Share = require('@module/share/share');

var About = Vue.extend({
  template: require('./about.html'),

  data() {
    return {
      sideList: [
        {
          "name": "老子, 春秋，生卒年不详",
          "img": "http://7xu36i.com1.z0.glb.clouddn.com/%E8%80%81%E5%AD%90.jpg"
        },
        {
          "name": "孔子，约前551 - 约前479年",
          "img": "http://7xu36i.com1.z0.glb.clouddn.com/%E5%AD%94%E5%AD%90.jpg"
        }
      ],
      count: 0
    }
  },
  methods: {
  },
  ready() {
  },
  components: {
    PageSide: PageSide,
    Abstract: Abstract,
    Share: Share
  }
});

module.exports = About;