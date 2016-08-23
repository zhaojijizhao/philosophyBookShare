'use strict';

var {reqwest, utils} = require('@common');
var Toast = require('@component/toast/toast');
var PageSide = require('@module/pageside/pageside');
var Abstract = require('@module/abstract/abstract');
var Share = require('@module/share/share');

var Book = Vue.extend({
  template: require('./book.html'),

  data() {
    return {
      articles: [],
      sideList: [
        {
          "name": "[德]尼采，1844年－1900年",
          "img": "http://7xu36i.com1.z0.glb.clouddn.com/%E5%B0%BC%E9%87%87.jpg"
        },
        {
          "name": "[美]杜威，1859年－1952年",
          "img": "http://7xu36i.com1.z0.glb.clouddn.com/%E6%9D%9C%E5%A8%81.jpg"
        },
        {
          "name": "[美]罗蒂，1931年－2007年",
          "img": "http://7xu36i.com1.z0.glb.clouddn.com/%E7%BD%97%E8%92%82.jpg"
        },
        {
          "name": "[美]布兰顿，1950年－",
          "img": "http://7xu36i.com1.z0.glb.clouddn.com/%E5%B8%83%E5%85%B0%E9%A1%BF.jpg"
        }
      ],
      count: 0
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
  },
  components: {
    PageSide: PageSide,
    Abstract: Abstract,
    Share: Share
  }
});

module.exports = Book;