'use strict';

var {reqwest, utils} = require('@common');
var Toast = require('@component/toast/toast');

var Contribute = Vue.extend({
  template: require('./contribute.html'),

  data() {
    return {
      name: localStorage.getItem('NAME'),
      token: localStorage.getItem('TOKEN'),
      article: {}
    }
  },
  methods: {
    submit() {
      let _this = this;
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
        Toast.show("投稿成功，请重试！");
      });
    }
  },
  ready() {
  }
});

module.exports = Contribute;