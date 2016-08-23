'use strict';

var {reqwest, utils} = require('@common');
var Toast = require('@component/toast/toast');

var Contribute = Vue.extend({
  template: require('./contribute.html'),

  data() {
    return {
      name: localStorage.getItem('NAME'),
      token: localStorage.getItem('TOKEN'),
      article: {
        author: "",
        title: "",
        sub_title: "",
        reviewer: "",
        category: "英美哲学",
        content: "",
        contact: "",
        remark: ""
      }
    }
  },
  methods: {
    submit() {
      let _this = this;
      if (!this.name || !this.token) {
        Toast.show('请先登录');
        setTimeout(() => {
          _this.$router.go('/index/login');
        }, 2000);
        return;
      }
      _this.content = window.CKEDITOR.instances.TextArea1.getData();
      reqwest({
        url: utils.APIPrefix() + 'articles',
        method: 'POST',
        data: {
          article: this.article
        },
        headers: {
          'Authorization': 'Token token=' + this.token + ',name=' + this.name
        }
      }).then(function (resp) {
        Toast.show("投稿成功！");
      }).catch(function (e) {
        console.error(e);
        Toast.show("投稿失败，请重试！");
      });
    }
  },
  ready() {
  }
});

module.exports = Contribute;