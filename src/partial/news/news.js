'use strict';

var {reqwest, utils} = require('@common');
var Toast = require('@component/toast/toast');

var News = Vue.extend({
  template: require('./news.html'),

  data() {
    return {
      articles: []
    }
  },
  methods: {
  },
  ready() {
    let _this = this;
    reqwest({
      url: utils.APIPrefix() + 'articles/last_ten',
      method: 'GET'
    }).then(function (resp) {
      _this.articles = resp.articles;
    }).catch(function (e) {
      console.error(e);
      Toast.show("获取页面信息失败，请刷新！");
    });
  }
});

module.exports = News;