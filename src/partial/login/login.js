'use strict';

var {reqwest, utils} = require('@common');
var Toast = require('@component/toast/toast');

var Login = Vue.extend({
  template: require('./login.html'),

  data() {
    return {
      name: '',
      password: ''
    }
  },
  methods: {
    login: function() {
      var _this = this;
      if (!this.validate()) {
        return;
      }
      reqwest({
        url: utils.APIPrefix() + 'login?name=' + this.name + "&password=" + this.password,
        method: 'POST'
      }).then(function (resp) {
        Toast.show('登陆成功');
        localStorage.setItem('TOKEN', resp.token);
        localStorage.setItem('NAME', resp.name);
        setTimeout(() => {
          _this.$router.go('/index/news');
        }, 2000);
      }).catch(function (e) {
        console.error(e);
        Toast.show("登陆失败");
      });
    },

    validate: function() {
      if (!this.name) {
        Toast.show('请填写名字');
        return false;
      }
      if (!this.password) {
        Toast.show('请填写密码');
        return false;
      }
      return true;
    }
  }
});

module.exports = Login;


