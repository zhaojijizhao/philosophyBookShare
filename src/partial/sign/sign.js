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
    sign: function(event) {
      location.hash = "#!/index/login";
      // reqwest({
      //   url: '/sign',
      //   method: 'POST',
      //   data: {
      //     name: this.name,
      //     password: this.password
      //   },
      //   contentType: false,
      //   processData: false
      // }).then(function (resp) {
      //   Toast.show('注册成功');
      // }).catch(function (e) {
      //   console.error(e);
      //   Toast.show(JSON.stringify(e));
      // });
    },
    validate: function() {

    }
  },
  computed: {
  },
  ready() {
  }
});

module.exports = Sign;


