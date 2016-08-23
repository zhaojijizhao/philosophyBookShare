'use strict';

var {reqwest, utils} = require('@common');
var Toast = require('@component/toast/toast');
var PageSide = require('@module/pageside/pageside');
var Abstract = require('@module/abstract/abstract');
var Share = require('@module/share/share');

var Expert = Vue.extend({
  template: require('./expert.html'),

  data() {
    return {
      articles: [],
      sideList: [
        {
          "name": "[美籍华裔]成中英，夏威夷大学教授",
          "img": "http://7xu36i.com1.z0.glb.clouddn.com/%E6%88%90%E4%B8%AD%E8%8B%B1.jpg"
        },
        {
          "name": "杜维明，哈佛大学教授",
          "img": "http://7xu36i.com1.z0.glb.clouddn.com/%E6%9D%9C%E7%BB%B4%E6%98%8E.jpg"
        },
        {
          "name": "刘放桐，复旦大学教授",
          "img": "http://7xu36i.com1.z0.glb.clouddn.com/%E5%88%98%E6%94%BE%E6%A1%90.jpg"
        },
        {
          "name": "叶秀山，中国社会科学院教授",
          "img": "http://7xu36i.com1.z0.glb.clouddn.com/%E5%8F%B6%E7%A7%80%E5%B1%B1.jpg"
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
      url: utils.APIPrefix() + 'articles?channel=名家访谈&page=1&per_page=10',
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

module.exports = Expert;