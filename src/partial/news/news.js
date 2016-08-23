'use strict';

var {reqwest, utils} = require('@common');
var Toast = require('@component/toast/toast');
var PageSide = require('@module/pageside/pageside');
var Abstract = require('@module/abstract/abstract');
var Share = require('@module/share/share');

var News = Vue.extend({
  template: require('./news.html'),

  data() {
    return {
      articles: [],
      sideList: [
        {
          "name": "[古希腊]柏拉图和亚里士多德",
          "img": "http://7xu36i.com1.z0.glb.clouddn.com/%E6%9F%8F%E6%8B%89%E5%9B%BE%E4%B8%8E%E4%BA%9A%E9%87%8C%E5%A3%AB%E5%A4%9A%E5%BE%B7.jpg"
        },
        {
          "name": "[法]笛卡尔，1596年 - 1650年",
          "img": "http://7xu36i.com1.z0.glb.clouddn.com/%E7%AC%9B%E5%8D%A1%E5%B0%94.png"
        },
        {
          "name": "[德]康德，1724年 - 1804年",
          "img": "http://7xu36i.com1.z0.glb.clouddn.com/%E5%BA%B7%E5%BE%B7.jpg"
        },
        {
          "name": "[德]黑格尔，1770年 - 1831年",
          "img": "http://7xu36i.com1.z0.glb.clouddn.com/%E9%BB%91%E6%A0%BC%E5%B0%94.jpg"
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
      url: utils.APIPrefix() + 'articles/last_ten',
      method: 'GET'
    }).then(function (resp) {
      _this.articles = resp.articles;
    }).catch(function (e) {
      console.error(e);
      Toast.show("获取页面信息失败，请刷新！");
    });
    setTimeout(() => {}, 2000);
  },
  components: {
    PageSide: PageSide,
    Abstract: Abstract,
    Share: Share
  }
});

module.exports = News;