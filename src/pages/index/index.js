'use strict';
require('./index.scss');
var VueRouter = require('vue-router');

//框架
var Layout = require('@partial/layout/layout');

//商品页面
var Sign = require('@partial/sign/sign');
var Login = require('@partial/login/login');
var Critic = require('@partial/critic/critic');

Vue.use(VueRouter);

var RootComponent = Vue.extend({
  template: require('./index.html'),
  data() {
    return {}
  },
  methods: {
  },
  computed: {
  },
  ready() {
  }
});

var router = new VueRouter();
router.map({
  '/index': {
    component: Layout,
    subRoutes: {
      '/sign': {
        component: Sign
      },
      '/login': {
        component: Login
      },
      '/critic/:id': {
        component: Critic
      }
    }
  }
});

router.redirect({
  '*': '/index/login'
})

router.start(RootComponent, '#app');




