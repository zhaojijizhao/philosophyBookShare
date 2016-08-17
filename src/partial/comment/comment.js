'use strict';

var {reqwest, utils} = require('@common');
var Toast = require('@component/toast/toast');

var Comment = Vue.extend({
  template: require('./comment.html'),

  data() {
    return {
      aid: this.$route.params.id,
      comment: '',
      name: localStorage.getItem('NAME'),
      token: localStorage.getItem('TOKEN')
    }
  },
  methods: {
    submit: function() {
      if (!this.token) {
        Toast.show('请先登录');
        setTimeout(() => {
          location.hash = "#!/index/login";
        }, 2000);
        return;
      }
      if (!this.comment) {
        Toast.show('请填写评论');
        return;
      }
      reqwest({
        url: 'http://www.zhexueshuping.com/api/comments?comment=' + this.comment + '&article_id=' + this.aid,
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
          location.reload();
        }, 2000);
      }).catch(function (e) {
        console.error(e);
        Toast.show("发布评论失败");
      });
    }
  },
  ready() {
    reqwest({
      url: 'http://www.zhexueshuping.com/api/artilces/' + this.aid + '/comments',
      method: 'GET'
    }).then(function (resp) {
      console.log(resp);
    }).catch(function (e) {
      console.error(e);
      Toast.show("获取评论失败");
    });
  }
});

module.exports = Comment;