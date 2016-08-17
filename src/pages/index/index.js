'use strict';
require('./index.scss');
var VueRouter = require('vue-router');

//框架
var Layout = require('@partial/layout/layout');

//商品页面
var Sign = require('@partial/sign/sign');
var Login = require('@partial/login/login');
var News = require('@partial/news/news');
var Book = require('@partial/book/book');
var Expert = require('@partial/expert/expert');
var Qa = require('@partial/qa/qa');
var Contribute = require('@partial/contribute/contribute');
var About = require('@partial/about/about');
var Donate = require('@partial/donate/donate');
var Comment = require('@partial/comment/comment');
var Article = require('@partial/article/article');


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
      '/news': {
        component: News
      },
      '/book': {
        component: Book
      },
      '/expert': {
        component: Expert
      },
      '/qa': {
        component: Qa
      },
      '/contribute': {
        component: Contribute
      },
      '/about': {
        component: About
      },
      '/donate': {
        component: Donate
      },
      '/comment/:id': {
        component: Comment
      },
      '/article/:id': {
        component: Article
      }
    }
  }
});

router.redirect({
  '*': '/index/login'
})

router.start(RootComponent, '#app');
