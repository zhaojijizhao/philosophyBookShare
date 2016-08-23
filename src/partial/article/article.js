'use strict';

var {reqwest, utils} = require('@common');
var Toast = require('@component/toast/toast');
var Share = require('@module/share/share');

var Article = Vue.extend({
  template: require('./article.html'),

  data() {
    return {
      aid: this.$route.params.id,
      article: {},
      comment: '',
      comments: [],
      name: localStorage.getItem('NAME'),
      token: localStorage.getItem('TOKEN')
    }
  },
  methods: {
    submit() {
      var _this = this;
      if (!this.token) {
        Toast.show('请先登录');
        setTimeout(() => {
          _this.$router.go('/index/login');
        }, 2000);
        return;
      }
      if (!this.comment) {
        Toast.show('请填写评论');
        return;
      }
      reqwest({
        url: utils.APIPrefix() + 'comments?comment=' + this.comment + '&article_id=' + this.aid,
        method: 'POST',
        data: {
          comment: this.comment,
          article_id: this.aid
        },
        headers: {
          'Authorization': 'Token token=' + this.token + ',name=' + this.name
        }
      }).then(function (resp) {
        Toast.show("发布评论成功");
        setTimeout(() => {
          _this.update();
        }, 2000);
      }).catch(function (e) {
        console.error(e);
        Toast.show("发布评论失败");
      });
    },
    update() {
      let _this = this;
      reqwest({
        url: utils.APIPrefix() + 'articles/' + this.aid,
        method: 'GET'
      }).then(function (resp) {
        _this.article = resp.article;
        _this.comments = resp.comments;
      }).catch(function (e) {
        console.error(e);
        Toast.show("获取页面信息失败，请刷新！");
      });
      reqwest({
        url: utils.APIPrefix() + 'articles/' + this.aid + '/comments',
        method: 'GET'
      }).then(function (resp) {
        console.log(resp);
      }).catch(function (e) {
        console.error(e);
        Toast.show("获取评论失败");
      });
    }
  },
  ready() {
    this.update();
  },
  components: {
    Share: Share
  }
});

module.exports = Article;