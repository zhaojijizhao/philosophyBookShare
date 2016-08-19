'use strict';

var {reqwest, utils} = require('@common');
var Toast = require('@component/toast/toast');

var Article = Vue.extend({
  template: require('./article.html'),

  data() {
    return {
      aid: this.$route.params.id,
      article: {}
    }
  },
  methods: {
  },
  ready() {
    let _this = this;
    reqwest({
      url: utils.APIPrefix() + 'articles/' + this.aid,
      method: 'GET'
    }).then(function (resp) {
      _this.article = resp.article;
    }).catch(function (e) {
      console.error(e);
      Toast.show("获取页面信息失败，请刷新！");
    });
  }
});

module.exports = Article;