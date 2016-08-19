'use strict';

var {reqwest, utils} = require('@common');
var Toast = require('@component/toast/toast');

var Book = Vue.extend({
  template: require('./book.html'),

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
      url: utils.APIPrefix() + 'articles?channel=哲学书评&page=1&per_page=10',
      method: 'GET'
    }).then(function (resp) {
      _this.articles = resp.articles;
    }).catch(function (e) {
      console.error(e);
      Toast.show("获取页面信息失败，请刷新！");
    });
  }
});

module.exports = Book;