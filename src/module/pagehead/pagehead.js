'use strict';

var {reqwest, utils} = require('@common');
var Toast = require('@component/toast/toast');

var PageHead = Vue.component('page-head', {
  template: require('./pagehead.html'),
  data() {
    return {
      navs: [
        {
          name: "最新文章",
          link: "/index/news"
        },
        {
          name: "哲学书平",
          link: "/index/book"
        },
        {
          name: "名家访谈",
          link: "/index/expert"
        },
        {
          name: "学子问答",
          link: "/index/qa"
        },
        {
          name: "在线投稿",
          link: "/index/contribute"
        },
        {
          name: "关于我们",
          link: "/index/about"
        },
        {
          name: "捐赠",
          link: "/index/donate"
        }
      ]
    }
  },
  methods: {
  },
  computed: {
  },
  ready() {
  }
});

module.exports = PageHead;


