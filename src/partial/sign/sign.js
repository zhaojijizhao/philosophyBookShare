'use strict';

var {reqwest, utils} = require('@common');
var Toast = require('@component/toast/toast');

var Sign = Vue.extend({
  template: require('./sign.html'),

  data() {
    return {
      name: '',
      password: '',
      check: ''
    }
  },

  methods: {
    sign: function() {
      var _this = this;
      if (!this.validate()) {
        return;
      }
      let name = this.name;
      reqwest({
        url: utils.APIPrefix() + 'vvsignup',
        method: 'POST',
        data: {
          user: this.user
        }
      }).then(function (resp) {
        Toast.show('注册成功');
        localStorage.setItem('TOKEN', resp.token);
        localStorage.setItem('NAME', name);
        setTimeout(() => {
          _this.$router.go('/index/login');
        }, 2000);
      }).catch(function (e) {
        console.error(e);
        Toast.show("注册失败");
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
      if (this.password != this.check) {
        Toast.show('密码和确认密码保持一致');
        return false;
      }
      return true;
    }
  },
  computed: {
    user: function() {
      return {
        name: this.name,
        password: this.password
      };
    }
  }
});

module.exports = Sign;


