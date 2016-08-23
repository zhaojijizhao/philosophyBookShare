webpackJsonp([1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(85);


/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Vue) {'use strict';
	
	__webpack_require__(86);
	var VueRouter = __webpack_require__(89);
	
	//框架
	var Layout = __webpack_require__(90);
	
	//商品页面
	var Sign = __webpack_require__(99);
	var Login = __webpack_require__(101);
	var News = __webpack_require__(103);
	var Book = __webpack_require__(113);
	var Expert = __webpack_require__(115);
	var Qa = __webpack_require__(117);
	var Contribute = __webpack_require__(119);
	var About = __webpack_require__(121);
	var Donate = __webpack_require__(123);
	var Comment = __webpack_require__(125);
	var Article = __webpack_require__(127);
	
	Vue.use(VueRouter);
	
	var RootComponent = Vue.extend({
	  template: __webpack_require__(129),
	  data: function data() {
	    return {};
	  },
	
	  methods: {},
	  computed: {},
	  ready: function ready() {}
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
	});
	
	router.start(RootComponent, '#app');
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(87);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(12)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js?sourceMap&-autoprefixer!./../../../node_modules/postcss-loader/index.js!./../../../node_modules/resolve-url-loader/index.js?sourceMap!./../../../node_modules/sass-loader/index.js?sourceMap!./index.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js?sourceMap&-autoprefixer!./../../../node_modules/postcss-loader/index.js!./../../../node_modules/resolve-url-loader/index.js?sourceMap!./../../../node_modules/sass-loader/index.js?sourceMap!./index.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(11)();
	// imports
	
	
	// module
	exports.push([module.id, "@charset \"UTF-8\";\n\nbody {\n  background: #fff;\n}\n\n#wrapper {\n  min-height: auto;\n  max-height: none;\n  width: 957px;\n  margin: 0 auto 20px;\n  padding: 0;\n  background: #fff url(http://7xu36i.com1.z0.glb.clouddn.com/new_header.png) 0 0 no-repeat;\n}\n\n#header {\n  display: block;\n  position: relative;\n  background-color: transparent;\n  width: 100%;\n  height: 310px;\n  background-position: 5px 40px;\n  background-repeat: no-repeat;\n}\n\n#content {\n  -webkit-box-flex: none;\n  -webkit-flex: none;\n  flex: none;\n}\n\nnav ul {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n\n.sitenav li {\n  float: left;\n  display: inline;\n}\n\n.sitenav li.last {\n  margin-left: -2px;\n}\n\n.sitenav a {\n  display: block;\n  float: left;\n  width: 137px;\n  height: 89px;\n  text-indent: -9999px;\n  overflow: hidden;\n  background: 0 0 no-repeat;\n}\n\n.sitenav .nav-rec {\n  background-position: -160px 0;\n}\n\n.form {\n  display: block;\n  box-sizing: border-box;\n  width: 100%;\n  margin: 40px auto 0 auto;\n  padding: 20px;\n  text-align: center;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  overflow: hidden;\n}\n\n.form div {\n  margin: 10px 0;\n}\n\n.form label {\n  display: inline-block;\n  width: 80px;\n  text-align: right;\n  padding-right: 10px;\n}\n\n.form button {\n  width: 80px;\n}\n\n.form textarea {\n  margin: 0 0 10px 0;\n  width: 100%;\n  height: 90px;\n  border: 1px solid #ccc;\n  outline: none;\n  resize: none;\n}\n\n/* FOOTER\n   ----------------------------------------------------*/\n\n#footer {\n  clear: both;\n  position: relative;\n  width: 857px;\n  height: 89px;\n  margin: 0 auto;\n  padding: 30px 50px 0;\n  font-size: 75%;\n  color: #fff;\n  background: url(http://7xu36i.com1.z0.glb.clouddn.com/footer.png) 0 0 no-repeat;\n}\n\n#footer p {\n  margin: 0;\n}\n\n#footer a {\n  color: #fff;\n}\n\n#footer .tel,\n#footer .fax,\n#footer .email {\n  margin: 0 0 0 10px;\n}\n\n#footer #mark {\n  display: block;\n  position: absolute;\n  top: 15px;\n  right: 70px;\n  width: 139px;\n  height: 93px;\n  border: none;\n  background: url(http://7xu36i.com1.z0.glb.clouddn.com/%E4%BA%8C%E7%BB%B4%E7%A0%81.jpg) 0 0 no-repeat;\n}\n\n#footer #mark img {\n  display: none;\n}\n\n#contact-info {\n  display: none;\n}\n\n#addthis:hover {\n  background-position: 0 -30px;\n}\n\nul {\n  margin: 0;\n  padding: 0;\n}\n\nli {\n  list-style-type: none;\n}\n\n.mainpage {\n  overflow: hidden;\n  margin-bottom: 20px;\n}\n\n.mainpage .mainleft {\n  float: left;\n  width: 75%;\n  padding: 40px 20px 20px 100px;\n  box-sizing: border-box;\n}\n\n.mainpage .mainright {\n  float: left;\n  width: 25%;\n  border-left: 1px solid #cca955;\n  padding: 40px 0 20px 20px;\n  box-sizing: border-box;\n}\n\n.page-side .side-list li {\n  margin-bottom: 20px;\n}\n\n.page-side .side-list li img {\n  display: block;\n  width: 100%;\n}\n\n.page-side .side-list li p {\n  font-size: 13px;\n  line-height: 20px;\n}\n\n.search-area {\n  float: right;\n  overflow: hidden;\n  width: 195px;\n  margin: 0 0 4px;\n  padding: 1px;\n  border-radius: 5px;\n  background-color: #fff;\n  border: 1px solid #dadada;\n}\n\n.search-area .search-q {\n  float: left;\n  width: 165px;\n  height: 22px;\n  margin: 0;\n  padding: 0 3px;\n  border: none;\n  font-size: 90%;\n  color: #444;\n  -webkit-appearance: textfield;\n  background: transparent;\n}\n\n.search-area .search-button {\n  float: right;\n  text-indent: -9999px;\n  overflow: hidden;\n  width: 22px;\n  height: 22px;\n  margin: 0;\n  border: 1px solid #adadad;\n  cursor: pointer;\n  border-radius: 5px;\n  background: #d3d3d3 url(" + __webpack_require__(88) + ") center center no-repeat;\n  background: url(" + __webpack_require__(88) + ") center center no-repeat, -webkit-gradient(linear, left top, left bottom, from(rgba(255, 255, 255, 0.9)), to(rgba(255, 255, 255, 0))), #a6a6a6;\n  background: url(" + __webpack_require__(88) + ") center center no-repeat, -moz-linear-gradient(top, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0)), #a6a6a6;\n  -webkit-transition: all .15s ease-in-out;\n  transition: all .15s ease-in-out;\n}\n\n.search-key {\n  clear: both;\n  float: right;\n  padding: 0.1em;\n  margin-bottom: 20px;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin: 1.8em 0 8px;\n  color: #1c3042;\n  line-height: 1.1em;\n  font-weight: bold;\n  text-rendering: optimizeLegibility;\n  /* font-family: Georgia, Times, \"Times New Roman\", serif; */\n}\n\n.most-recent {\n  margin: 35px 0 30px;\n  font-size: 124%;\n  text-transform: uppercase;\n  color: #1c3042;\n  line-height: 1.1em;\n  font-weight: bold;\n  text-rendering: optimizeLegibility;\n}\n\n.summary {\n  margin: 0 0 30px;\n}\n\n.summary .author {\n  margin: 0 0 6px;\n  text-transform: uppercase;\n  font-weight: bold;\n  font-size: 100%;\n  color: #000;\n}\n\n.summary .entry-title,\n.summary .entry-title a {\n  font-size: 13px;\n  font-weight: normal !important;\n  text-decoration: underline;\n  margin: 0 0 7px !important;\n  padding: 0 !important;\n  border: none;\n  background: none !important;\n  font-weight: bold !important;\n  text-align: left;\n  color: #1768cc !important;\n}\n\n.summary .publisher,\n.summary .reviewers {\n  margin: 0;\n  line-height: 1em;\n  font-size: 100%;\n  font-weight: normal;\n  line-height: 1.6em;\n  color: black;\n}\n\n.summary .publisher .reviewed-by,\n.summary .reviewers .reviewed-by {\n  float: left;\n  margin-right: 5px;\n}\n\n.summary .edition {\n  width: 510px;\n  padding: 0 60px 0 0;\n  font-size: 15px;\n  line-height: 1.5em;\n}\n\nbody {\n  width: 100%;\n  width: 100%;\n  color: #000;\n  line-height: 1.6em;\n  -webkit-font-smoothing: antialiased;\n  font-family: 微软雅黑;\n  background: 0 0 repeat-x;\n}\n\n.hide {\n  display: none !important;\n}\n\n.contri {\n  padding: 10px 40px;\n}\n\n.contri li {\n  margin: 20px 0;\n}\n\n.contri li h2 {\n  font-size: 13px;\n  font-weight: bold;\n  line-height: 28px;\n}\n\n.contri li input {\n  display: block;\n  width: 300px;\n  height: 24px;\n  font-size: 13px;\n}\n\n.contri li span {\n  font-size: 13px;\n  line-height: 20px;\n}\n\n.contri li textarea {\n  display: block;\n  width: 100%;\n  height: 60px;\n}\n\n.contri li select {\n  display: block;\n}\n\n.contri .entry-title {\n  margin: 0 0 7px !important;\n  padding: 0 !important;\n  text-transform: none;\n  text-decoration: none;\n  border: none;\n  background: none !important;\n  font-weight: bold !important;\n  font-size: 140%;\n  text-align: left;\n  color: #1768cc !important;\n  font-family: \"Lucida Sans\", \"Lucida Grande\", \"Lucida Sans Unicode\", \"Helvetica Neue\", Helvetica, Arial, Verdana, sans-serif;\n}\n\n.contri .bibliography {\n  font-size: 100%;\n  font-weight: normal;\n  line-height: 1.6em;\n  color: black;\n}\n\n.contri .bibliography p {\n  margin: 0;\n}\n\n.contri .reviewers {\n  margin-bottom: 20px;\n}\n\n.bshare-custom {\n  margin: 20px 0;\n}\n\n", "", {"version":3,"sources":["/./src/pages/index/index.scss"],"names":[],"mappings":"AAAA,iBAAA;;AAGA;EACI,iBAAA;CAAH;;AAED;EACI,iBAAA;EACA,iBAAA;EACA,aAAA;EACA,oBAAA;EACA,WAAA;EACA,yFAAA;CACH;;AACD;EACI,eAAA;EACA,mBAAA;EACA,8BAAA;EACA,YAAA;EACA,cAAA;EACA,8BAAA;EACA,6BAAA;CAEH;;AAAD;EACI,uBAAA;EACA,mBAAA;EACA,WAAA;CAGH;;AADG;EACA,UAAA;EACA,WAAA;EACA,iBAAA;CAIH;;AAFD;EACI,YAAA;EACA,gBAAA;CAKH;;AAHU;EACP,kBAAA;CAMH;;AAJD;EACI,eAAA;EACA,YAAA;EACA,aAAA;EACA,aAAA;EACA,qBAAA;EACA,iBAAA;EACA,0BAAA;CAOH;;AALD;EACI,8BAAA;CAQH;;AAND;EACI,eAAA;EACA,uBAAA;EACA,YAAA;EACA,yBAAA;EACA,cAAA;EACA,mBAAA;EACA,uBAAA;EACA,mBAAA;EACA,iBAAA;CASH;;AAPD;EACI,eAAA;CAUH;;AARD;EACI,sBAAA;EACA,YAAA;EACA,kBAAA;EACA,oBAAA;CAWH;;AATD;EACI,YAAA;CAYH;;AAVD;EACI,mBAAA;EACA,YAAA;EACA,aAAA;EACA,uBAAA;EACA,cAAA;EACA,aAAA;CAaH;;AAVD;yDAayD;;AAXzD;EAAS,YAAA;EAAa,mBAAA;EAAoB,aAAA;EAAc,aAAA;EAAc,eAAA;EAAgB,qBAAA;EAAsB,eAAA;EAAgB,YAAA;EAAa,gFAAA;CAuBxI;;AAtBD;EAAW,UAAA;CA0BV;;AAzBD;EAAW,YAAA;CA6BV;;AA5BD;;;EAEgB,mBAAA;CAgCf;;AA/BD;EAAe,eAAA;EAAgB,mBAAA;EAAoB,UAAA;EAAW,YAAA;EAAa,aAAA;EAAc,aAAA;EAAc,aAAA;EAAc,qGAAA;CA0CpH;;AAzCa;EAAK,cAAA;CA6ClB;;AA5CD;EAAe,cAAA;CAgDd;;AA9CD;EAAgB,6BAAA;CAkDf;;AAhDD;EACI,UAAA;EACA,WAAA;CAmDH;;AAjDD;EACI,sBAAA;CAoDH;;AAjDD;EACI,iBAAA;EACA,oBAAA;CAoDH;;AAnDG;EACI,YAAA;EACA,WAAA;EACA,8BAAA;EACA,uBAAA;CAsDP;;AA7DD;EAUQ,YAAA;EACA,WAAA;EACA,+BAAA;EACA,0BAAA;EACA,uBAAA;CAuDP;;AApDD;EAGY,oBAAA;CAqDX;;AApDW;EACI,eAAA;EACA,YAAA;CAuDf;;AArDW;EACI,gBAAA;EACA,kBAAA;CAwDf;;AAnDD;EACI,aAAA;EACA,iBAAA;EACA,aAAA;EACA,gBAAA;EACA,aAAA;EAEA,mBAAA;EACA,uBAAA;EACA,0BAAA;CAsDH;;AArDG;EACI,YAAA;EACA,aAAA;EACA,aAAA;EACA,UAAA;EACA,eAAA;EACA,aAAA;EACA,eAAA;EACA,YAAA;EACA,8BAAA;EACA,wBAAA;CAwDP;;AA5ED;EAuBQ,aAAA;EACA,qBAAA;EACA,iBAAA;EACA,YAAA;EACA,aAAA;EACA,UAAA;EACA,0BAAA;EACA,gBAAA;EAEA,mBAAA;EACA,0EAAA;EACA,wLAAA;EACA,wJAAA;EACA,yCAAA;EAGA,iCAAA;CAyDP;;AAtDD;EACI,YAAA;EACA,aAAA;EACA,eAAA;EACA,oBAAA;CAyDH;;AAtDD;;;;;;EACI,oBAAA;EACA,eAAA;EACA,mBAAA;EACA,kBAAA;EACA,mCAAA;EACA,4DAAA;CA8DH;;AA3DD;EACI,oBAAA;EACA,gBAAA;EACA,0BAAA;EACA,eAAA;EACA,mBAAA;EACA,kBAAA;EACA,mCAAA;CA8DH;;AA5DD;EACI,iBAAA;CA+DH;;AAhED;EAGQ,gBAAA;EACA,0BAAA;EACA,kBAAA;EACA,gBAAA;EACA,YAAA;CAiEP;;AAxED;;EAUQ,gBAAA;EACA,+BAAA;EACA,2BAAA;EACA,2BAAA;EACA,sBAAA;EACA,aAAA;EACA,4BAAA;EACA,6BAAA;EACA,iBAAA;EACA,0BAAA;CAmEP;;AAtFD;;EAsBQ,UAAA;EACA,iBAAA;EACA,gBAAA;EACA,oBAAA;EACA,mBAAA;EACA,aAAA;CAqEP;;AAhGD;;EA6BY,YAAA;EACA,kBAAA;CAwEX;;AAtGD;EAkCQ,aAAA;EACA,oBAAA;EACA,gBAAA;EACA,mBAAA;CAwEP;;AApED;EACI,YAAA;EACA,YAAA;EACA,YAAA;EACA,mBAAA;EACA,oCAAA;EACA,kBAAA;EACA,yBAAA;CAuEH;;AArED;EACI,yBAAA;CAwEH;;AAtED;EACI,mBAAA;CAyEH;;AA1ED;EAGQ,eAAA;CA2EP;;AA1EO;EACI,gBAAA;EACA,kBAAA;EACA,kBAAA;CA6EX;;AA3EO;EACI,eAAA;EACA,aAAA;EACA,aAAA;EACA,gBAAA;CA8EX;;AA3FD;EAgBY,gBAAA;EACA,kBAAA;CA+EX;;AA7EO;EACI,eAAA;EACA,YAAA;EACA,aAAA;CAgFX;;AA9EO;EACI,eAAA;CAiFX;;AA1GD;EA6BQ,2BAAA;EACA,sBAAA;EACA,qBAAA;EACA,sBAAA;EACA,aAAA;EACA,4BAAA;EACA,6BAAA;EACA,gBAAA;EACA,iBAAA;EACA,0BAAA;EACA,4HAAA;CAiFP;;AAxHD;EA0CQ,gBAAA;EACA,oBAAA;EACA,mBAAA;EACA,aAAA;CAkFP;;AAjFO;EACI,UAAA;CAoFX;;AAjFG;EACI,oBAAA;CAoFP;;AAjFD;EACI,eAAA;CAoFH","file":"index.scss","sourcesContent":["@import \"_var.scss\";\n@import \"../../common/_common.scss\";\n\nbody{\n    background: #fff;\n}\n#wrapper {\n    min-height: auto;\n    max-height: none;\n    width: 957px;\n    margin: 0 auto 20px;\n    padding: 0;\n    background: #fff url(http://7xu36i.com1.z0.glb.clouddn.com/new_header.png) 0 0 no-repeat;\n}\n#header {\n    display: block;\n    position: relative;\n    background-color: transparent;\n    width: 100%;\n    height: 310px;\n    background-position: 5px 40px;\n    background-repeat: no-repeat;\n}\n#content{\n    -webkit-box-flex: none;\n    -webkit-flex: none;\n    flex: none;\n}\nnav ul {\n    margin: 0;\n    padding: 0;\n    list-style: none;\n}\n.sitenav li {\n    float: left;\n    display: inline;\n}\n.sitenav li.last{\n    margin-left: -2px;\n}\n.sitenav a {\n    display: block;\n    float: left;\n    width: 137px;\n    height: 89px;\n    text-indent: -9999px;\n    overflow: hidden;\n    background: 0 0 no-repeat;\n}\n.sitenav .nav-rec {\n    background-position: -160px 0;\n}\n.form{\n    display: block;\n    box-sizing:border-box;\n    width: 100%;\n    margin: 40px auto 0 auto;\n    padding: 20px;\n    text-align: center;\n    border: 1px solid #ccc;\n    border-radius: 5px;\n    overflow: hidden;\n}\n.form div{\n    margin: 10px 0;\n}\n.form label{\n    display: inline-block;\n    width: 80px;\n    text-align: right;\n    padding-right:10px;\n}\n.form button{\n    width: 80px;\n}\n.form textarea{\n    margin: 0 0 10px 0;\n    width: 100%;\n    height: 90px;\n    border: 1px solid #ccc;\n    outline: none;\n    resize: none;\n}\n\n/* FOOTER\n   ----------------------------------------------------*/\n#footer {clear:both; position:relative; width:857px; height:89px; margin:0 auto; padding:30px 50px 0; font-size:75%; color:#fff; background:url(http://7xu36i.com1.z0.glb.clouddn.com/footer.png) 0 0 no-repeat;}\n#footer p {margin:0;}\n#footer a {color:#fff;}\n#footer .tel,\n#footer .fax,\n#footer .email {margin:0 0 0 10px;}\n#footer #mark {display:block; position:absolute; top:15px; right:70px; width:139px; height:93px; border:none; background:url(http://7xu36i.com1.z0.glb.clouddn.com/%E4%BA%8C%E7%BB%B4%E7%A0%81.jpg) 0 0 no-repeat;}\n#footer #mark img {display:none;}\n#contact-info {display:none;}\n#footer #site-link {}\n#addthis:hover {background-position:0 -30px;}\n\nul{\n    margin: 0;\n    padding: 0;\n}\nli{\n    list-style-type: none;\n}\n\n.mainpage{\n    overflow:hidden;\n    margin-bottom: 20px;\n    .mainleft{\n        float: left;\n        width: 75%;\n        padding: 40px 20px 20px 100px;\n        box-sizing:border-box;\n    }\n    .mainright{\n        float: left;\n        width: 25%;\n        border-left: 1px solid #cca955;\n        padding:40px 0 20px 20px;\n        box-sizing:border-box;\n    }\n}\n.page-side{\n    .side-list{\n        li{\n            margin-bottom: 20px;\n            img{\n                display: block;\n                width: 100%;\n            }\n            p{\n                font-size: 13px;\n                line-height: 20px;\n            }\n        }\n    }\n}\n.search-area{\n    float: right;\n    overflow: hidden;\n    width: 195px;\n    margin: 0 0 4px;\n    padding: 1px;\n    -moz-border-radius: 5px;\n    border-radius: 5px;\n    background-color: #fff;\n    border: 1px solid #dadada;\n    .search-q{\n        float: left;\n        width: 165px;\n        height: 22px;\n        margin: 0;\n        padding: 0 3px;\n        border: none;\n        font-size: 90%;\n        color: #444;\n        -webkit-appearance: textfield;\n        background: transparent;\n    }\n    .search-button{\n        float: right;\n        text-indent: -9999px;\n        overflow: hidden;\n        width: 22px;\n        height: 22px;\n        margin: 0;\n        border: 1px solid #adadad;\n        cursor: pointer;\n        -moz-border-radius: 5px;\n        border-radius: 5px;\n        background: #d3d3d3 url(./searchmag.png) center center no-repeat;\n        background: url(./searchmag.png) center center no-repeat, -webkit-gradient(linear, left top, left bottom, from(rgba(255, 255, 255, .9)), to(rgba(255, 255, 255, .0))), hsl(0, 0%, 65%);\n        background: url(./searchmag.png) center center no-repeat, -moz-linear-gradient(top, rgba(255, 255, 255, .9), rgba(255, 255, 255, .0)), hsl(0, 0%, 65%);\n        -webkit-transition: all .15s ease-in-out;\n        -moz-transition: all .15s ease-in-out;\n        -o-transition: all .15s ease-in-out;\n        transition: all .15s ease-in-out;\n    }\n}\n.search-key{\n    clear: both;\n    float: right;\n    padding: 0.1em;\n    margin-bottom: 20px;\n}\n\nh1, h2, h3, h4, h5, h6 {\n    margin: 1.8em 0 8px;\n    color: #1c3042;\n    line-height: 1.1em;\n    font-weight: bold;\n    text-rendering: optimizeLegibility;\n    /* font-family: Georgia, Times, \"Times New Roman\", serif; */\n}\n\n.most-recent{\n    margin: 35px 0 30px;\n    font-size: 124%;\n    text-transform: uppercase;\n    color: #1c3042;\n    line-height: 1.1em;\n    font-weight: bold;\n    text-rendering: optimizeLegibility;\n}\n.summary{\n    margin: 0 0 30px;\n    .author{\n        margin: 0 0 6px;\n        text-transform: uppercase;\n        font-weight: bold;\n        font-size: 100%;\n        color: #000;\n    }\n    .entry-title,.entry-title a{\n        font-size: 13px;\n        font-weight: normal !important;\n        text-decoration: underline;\n        margin: 0 0 7px !important;\n        padding: 0 !important;\n        border: none;\n        background: none !important;\n        font-weight: bold !important;\n        text-align: left;\n        color: #1768cc !important;\n    }\n    .publisher,.reviewers{\n        margin: 0;\n        line-height: 1em;\n        font-size: 100%;\n        font-weight: normal;\n        line-height: 1.6em;\n        color: black;\n        .reviewed-by {\n            float: left;\n            margin-right: 5px;\n        }\n    }\n    .edition{\n        width: 510px;\n        padding: 0 60px 0 0;\n        font-size: 15px;\n        line-height: 1.5em;\n    }\n}\n\nbody{\n    width: 100%;\n    width: 100%;\n    color: #000;\n    line-height: 1.6em;\n    -webkit-font-smoothing: antialiased;\n    font-family: å¾®è½¯éé»;\n    background: 0 0 repeat-x;\n}\n.hide{\n    display: none !important;\n}\n.contri{\n    padding: 10px 40px;\n    li{\n        margin: 20px 0;\n        h2{\n            font-size: 13px;\n            font-weight: bold;\n            line-height: 28px;\n        }\n        input{\n            display:block;\n            width: 300px;\n            height:24px;\n            font-size:13px;\n        }\n        span{\n            font-size:13px;\n            line-height:20px;\n        }\n        textarea{\n            display:block;\n            width: 100%;\n            height:60px;\n        }\n        select{\n            display:block;\n        }\n    }\n    .entry-title{\n        margin: 0 0 7px !important;\n        padding: 0 !important;\n        text-transform: none;\n        text-decoration: none;\n        border: none;\n        background: none !important;\n        font-weight: bold !important;\n        font-size: 140%;\n        text-align: left;\n        color: #1768cc !important;\n        font-family: \"Lucida Sans\", \"Lucida Grande\", \"Lucida Sans Unicode\", \"Helvetica Neue\", Helvetica, Arial, Verdana, sans-serif;\n    }\n    .bibliography{\n        font-size: 100%;\n        font-weight: normal;\n        line-height: 1.6em;\n        color: black;\n        p{\n            margin: 0;\n        }\n    }\n    .reviewers{\n        margin-bottom: 20px;\n    }\n}\n.bshare-custom{\n    margin: 20px 0;\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 88 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAARCAMAAADjcdz2AAAAA3NCSVQICAjb4U/gAAAAn1BMVEX///////8zMzP///+ioqJ8fHxBQUEzMzP///8zMzP////MzMwzMzP29vb///9BQUE6OjozMzP////29vY6OjozMzP////w8PDMzMwzMzP////w8PA6OjozMzOrq6ufn5/n5+fU1NQzMzPMzMyrq6tBQUE6OjozMzN8fHxycnJubm5mZmZXV1dTU1NBQUE6OjozMzNNTU1BQUE6OjozMzPhjpV7AAAANXRSTlMAEREiIiIiIjMzREREZnd3d3eIiIiImZmZmaqqqqq7u8zMzN3d3d3d7u7u7u7u7u7u/////85U1sgAAAAJcEhZcwAACxIAAAsSAdLdfvwAAAAcdEVYdFNvZnR3YXJlAEFkb2JlIEZpcmV3b3JrcyBDUzOY1kYDAAAAoElEQVQYlVWQ2RaCMAxEU1BrEXFBUXFfULQoCPP/32YXRJyX6dzm5CQh0uKCWnJWBVBs+TfzG/B+KuTX/1fIYxwf7ihszRgydInY9IGNAQl2tnSJ3HiFgQVuiZ72Et26e4WONomRzT5Kpn2P3HR3Erwc/fAkMBdioobDyZBFikaGsOCcZll6yRpC/SCKAm9tyOy3I9NEDumPyLB9BkVU/gC3mhNgIwCrgAAAAABJRU5ErkJggg=="

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * vue-router v0.7.13
	 * (c) 2016 Evan You
	 * Released under the MIT License.
	 */
	(function (global, factory) {
	   true ? module.exports = factory() :
	  typeof define === 'function' && define.amd ? define(factory) :
	  global.VueRouter = factory();
	}(this, function () { 'use strict';
	
	  var babelHelpers = {};
	
	  babelHelpers.classCallCheck = function (instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	      throw new TypeError("Cannot call a class as a function");
	    }
	  };
	  function Target(path, matcher, delegate) {
	    this.path = path;
	    this.matcher = matcher;
	    this.delegate = delegate;
	  }
	
	  Target.prototype = {
	    to: function to(target, callback) {
	      var delegate = this.delegate;
	
	      if (delegate && delegate.willAddRoute) {
	        target = delegate.willAddRoute(this.matcher.target, target);
	      }
	
	      this.matcher.add(this.path, target);
	
	      if (callback) {
	        if (callback.length === 0) {
	          throw new Error("You must have an argument in the function passed to `to`");
	        }
	        this.matcher.addChild(this.path, target, callback, this.delegate);
	      }
	      return this;
	    }
	  };
	
	  function Matcher(target) {
	    this.routes = {};
	    this.children = {};
	    this.target = target;
	  }
	
	  Matcher.prototype = {
	    add: function add(path, handler) {
	      this.routes[path] = handler;
	    },
	
	    addChild: function addChild(path, target, callback, delegate) {
	      var matcher = new Matcher(target);
	      this.children[path] = matcher;
	
	      var match = generateMatch(path, matcher, delegate);
	
	      if (delegate && delegate.contextEntered) {
	        delegate.contextEntered(target, match);
	      }
	
	      callback(match);
	    }
	  };
	
	  function generateMatch(startingPath, matcher, delegate) {
	    return function (path, nestedCallback) {
	      var fullPath = startingPath + path;
	
	      if (nestedCallback) {
	        nestedCallback(generateMatch(fullPath, matcher, delegate));
	      } else {
	        return new Target(startingPath + path, matcher, delegate);
	      }
	    };
	  }
	
	  function addRoute(routeArray, path, handler) {
	    var len = 0;
	    for (var i = 0, l = routeArray.length; i < l; i++) {
	      len += routeArray[i].path.length;
	    }
	
	    path = path.substr(len);
	    var route = { path: path, handler: handler };
	    routeArray.push(route);
	  }
	
	  function eachRoute(baseRoute, matcher, callback, binding) {
	    var routes = matcher.routes;
	
	    for (var path in routes) {
	      if (routes.hasOwnProperty(path)) {
	        var routeArray = baseRoute.slice();
	        addRoute(routeArray, path, routes[path]);
	
	        if (matcher.children[path]) {
	          eachRoute(routeArray, matcher.children[path], callback, binding);
	        } else {
	          callback.call(binding, routeArray);
	        }
	      }
	    }
	  }
	
	  function map (callback, addRouteCallback) {
	    var matcher = new Matcher();
	
	    callback(generateMatch("", matcher, this.delegate));
	
	    eachRoute([], matcher, function (route) {
	      if (addRouteCallback) {
	        addRouteCallback(this, route);
	      } else {
	        this.add(route);
	      }
	    }, this);
	  }
	
	  var specials = ['/', '.', '*', '+', '?', '|', '(', ')', '[', ']', '{', '}', '\\'];
	
	  var escapeRegex = new RegExp('(\\' + specials.join('|\\') + ')', 'g');
	
	  var noWarning = false;
	  function warn(msg) {
	    if (!noWarning && typeof console !== 'undefined') {
	      console.error('[vue-router] ' + msg);
	    }
	  }
	
	  function tryDecode(uri, asComponent) {
	    try {
	      return asComponent ? decodeURIComponent(uri) : decodeURI(uri);
	    } catch (e) {
	      warn('malformed URI' + (asComponent ? ' component: ' : ': ') + uri);
	    }
	  }
	
	  function isArray(test) {
	    return Object.prototype.toString.call(test) === "[object Array]";
	  }
	
	  // A Segment represents a segment in the original route description.
	  // Each Segment type provides an `eachChar` and `regex` method.
	  //
	  // The `eachChar` method invokes the callback with one or more character
	  // specifications. A character specification consumes one or more input
	  // characters.
	  //
	  // The `regex` method returns a regex fragment for the segment. If the
	  // segment is a dynamic of star segment, the regex fragment also includes
	  // a capture.
	  //
	  // A character specification contains:
	  //
	  // * `validChars`: a String with a list of all valid characters, or
	  // * `invalidChars`: a String with a list of all invalid characters
	  // * `repeat`: true if the character specification can repeat
	
	  function StaticSegment(string) {
	    this.string = string;
	  }
	  StaticSegment.prototype = {
	    eachChar: function eachChar(callback) {
	      var string = this.string,
	          ch;
	
	      for (var i = 0, l = string.length; i < l; i++) {
	        ch = string.charAt(i);
	        callback({ validChars: ch });
	      }
	    },
	
	    regex: function regex() {
	      return this.string.replace(escapeRegex, '\\$1');
	    },
	
	    generate: function generate() {
	      return this.string;
	    }
	  };
	
	  function DynamicSegment(name) {
	    this.name = name;
	  }
	  DynamicSegment.prototype = {
	    eachChar: function eachChar(callback) {
	      callback({ invalidChars: "/", repeat: true });
	    },
	
	    regex: function regex() {
	      return "([^/]+)";
	    },
	
	    generate: function generate(params) {
	      var val = params[this.name];
	      return val == null ? ":" + this.name : val;
	    }
	  };
	
	  function StarSegment(name) {
	    this.name = name;
	  }
	  StarSegment.prototype = {
	    eachChar: function eachChar(callback) {
	      callback({ invalidChars: "", repeat: true });
	    },
	
	    regex: function regex() {
	      return "(.+)";
	    },
	
	    generate: function generate(params) {
	      var val = params[this.name];
	      return val == null ? ":" + this.name : val;
	    }
	  };
	
	  function EpsilonSegment() {}
	  EpsilonSegment.prototype = {
	    eachChar: function eachChar() {},
	    regex: function regex() {
	      return "";
	    },
	    generate: function generate() {
	      return "";
	    }
	  };
	
	  function parse(route, names, specificity) {
	    // normalize route as not starting with a "/". Recognition will
	    // also normalize.
	    if (route.charAt(0) === "/") {
	      route = route.substr(1);
	    }
	
	    var segments = route.split("/"),
	        results = [];
	
	    // A routes has specificity determined by the order that its different segments
	    // appear in. This system mirrors how the magnitude of numbers written as strings
	    // works.
	    // Consider a number written as: "abc". An example would be "200". Any other number written
	    // "xyz" will be smaller than "abc" so long as `a > z`. For instance, "199" is smaller
	    // then "200", even though "y" and "z" (which are both 9) are larger than "0" (the value
	    // of (`b` and `c`). This is because the leading symbol, "2", is larger than the other
	    // leading symbol, "1".
	    // The rule is that symbols to the left carry more weight than symbols to the right
	    // when a number is written out as a string. In the above strings, the leading digit
	    // represents how many 100's are in the number, and it carries more weight than the middle
	    // number which represents how many 10's are in the number.
	    // This system of number magnitude works well for route specificity, too. A route written as
	    // `a/b/c` will be more specific than `x/y/z` as long as `a` is more specific than
	    // `x`, irrespective of the other parts.
	    // Because of this similarity, we assign each type of segment a number value written as a
	    // string. We can find the specificity of compound routes by concatenating these strings
	    // together, from left to right. After we have looped through all of the segments,
	    // we convert the string to a number.
	    specificity.val = '';
	
	    for (var i = 0, l = segments.length; i < l; i++) {
	      var segment = segments[i],
	          match;
	
	      if (match = segment.match(/^:([^\/]+)$/)) {
	        results.push(new DynamicSegment(match[1]));
	        names.push(match[1]);
	        specificity.val += '3';
	      } else if (match = segment.match(/^\*([^\/]+)$/)) {
	        results.push(new StarSegment(match[1]));
	        specificity.val += '2';
	        names.push(match[1]);
	      } else if (segment === "") {
	        results.push(new EpsilonSegment());
	        specificity.val += '1';
	      } else {
	        results.push(new StaticSegment(segment));
	        specificity.val += '4';
	      }
	    }
	
	    specificity.val = +specificity.val;
	
	    return results;
	  }
	
	  // A State has a character specification and (`charSpec`) and a list of possible
	  // subsequent states (`nextStates`).
	  //
	  // If a State is an accepting state, it will also have several additional
	  // properties:
	  //
	  // * `regex`: A regular expression that is used to extract parameters from paths
	  //   that reached this accepting state.
	  // * `handlers`: Information on how to convert the list of captures into calls
	  //   to registered handlers with the specified parameters
	  // * `types`: How many static, dynamic or star segments in this route. Used to
	  //   decide which route to use if multiple registered routes match a path.
	  //
	  // Currently, State is implemented naively by looping over `nextStates` and
	  // comparing a character specification against a character. A more efficient
	  // implementation would use a hash of keys pointing at one or more next states.
	
	  function State(charSpec) {
	    this.charSpec = charSpec;
	    this.nextStates = [];
	  }
	
	  State.prototype = {
	    get: function get(charSpec) {
	      var nextStates = this.nextStates;
	
	      for (var i = 0, l = nextStates.length; i < l; i++) {
	        var child = nextStates[i];
	
	        var isEqual = child.charSpec.validChars === charSpec.validChars;
	        isEqual = isEqual && child.charSpec.invalidChars === charSpec.invalidChars;
	
	        if (isEqual) {
	          return child;
	        }
	      }
	    },
	
	    put: function put(charSpec) {
	      var state;
	
	      // If the character specification already exists in a child of the current
	      // state, just return that state.
	      if (state = this.get(charSpec)) {
	        return state;
	      }
	
	      // Make a new state for the character spec
	      state = new State(charSpec);
	
	      // Insert the new state as a child of the current state
	      this.nextStates.push(state);
	
	      // If this character specification repeats, insert the new state as a child
	      // of itself. Note that this will not trigger an infinite loop because each
	      // transition during recognition consumes a character.
	      if (charSpec.repeat) {
	        state.nextStates.push(state);
	      }
	
	      // Return the new state
	      return state;
	    },
	
	    // Find a list of child states matching the next character
	    match: function match(ch) {
	      // DEBUG "Processing `" + ch + "`:"
	      var nextStates = this.nextStates,
	          child,
	          charSpec,
	          chars;
	
	      // DEBUG "  " + debugState(this)
	      var returned = [];
	
	      for (var i = 0, l = nextStates.length; i < l; i++) {
	        child = nextStates[i];
	
	        charSpec = child.charSpec;
	
	        if (typeof (chars = charSpec.validChars) !== 'undefined') {
	          if (chars.indexOf(ch) !== -1) {
	            returned.push(child);
	          }
	        } else if (typeof (chars = charSpec.invalidChars) !== 'undefined') {
	          if (chars.indexOf(ch) === -1) {
	            returned.push(child);
	          }
	        }
	      }
	
	      return returned;
	    }
	
	    /** IF DEBUG
	    , debug: function() {
	      var charSpec = this.charSpec,
	          debug = "[",
	          chars = charSpec.validChars || charSpec.invalidChars;
	       if (charSpec.invalidChars) { debug += "^"; }
	      debug += chars;
	      debug += "]";
	       if (charSpec.repeat) { debug += "+"; }
	       return debug;
	    }
	    END IF **/
	  };
	
	  /** IF DEBUG
	  function debug(log) {
	    console.log(log);
	  }
	
	  function debugState(state) {
	    return state.nextStates.map(function(n) {
	      if (n.nextStates.length === 0) { return "( " + n.debug() + " [accepting] )"; }
	      return "( " + n.debug() + " <then> " + n.nextStates.map(function(s) { return s.debug() }).join(" or ") + " )";
	    }).join(", ")
	  }
	  END IF **/
	
	  // Sort the routes by specificity
	  function sortSolutions(states) {
	    return states.sort(function (a, b) {
	      return b.specificity.val - a.specificity.val;
	    });
	  }
	
	  function recognizeChar(states, ch) {
	    var nextStates = [];
	
	    for (var i = 0, l = states.length; i < l; i++) {
	      var state = states[i];
	
	      nextStates = nextStates.concat(state.match(ch));
	    }
	
	    return nextStates;
	  }
	
	  var oCreate = Object.create || function (proto) {
	    function F() {}
	    F.prototype = proto;
	    return new F();
	  };
	
	  function RecognizeResults(queryParams) {
	    this.queryParams = queryParams || {};
	  }
	  RecognizeResults.prototype = oCreate({
	    splice: Array.prototype.splice,
	    slice: Array.prototype.slice,
	    push: Array.prototype.push,
	    length: 0,
	    queryParams: null
	  });
	
	  function findHandler(state, path, queryParams) {
	    var handlers = state.handlers,
	        regex = state.regex;
	    var captures = path.match(regex),
	        currentCapture = 1;
	    var result = new RecognizeResults(queryParams);
	
	    for (var i = 0, l = handlers.length; i < l; i++) {
	      var handler = handlers[i],
	          names = handler.names,
	          params = {};
	
	      for (var j = 0, m = names.length; j < m; j++) {
	        params[names[j]] = captures[currentCapture++];
	      }
	
	      result.push({ handler: handler.handler, params: params, isDynamic: !!names.length });
	    }
	
	    return result;
	  }
	
	  function addSegment(currentState, segment) {
	    segment.eachChar(function (ch) {
	      var state;
	
	      currentState = currentState.put(ch);
	    });
	
	    return currentState;
	  }
	
	  function decodeQueryParamPart(part) {
	    // http://www.w3.org/TR/html401/interact/forms.html#h-17.13.4.1
	    part = part.replace(/\+/gm, '%20');
	    return tryDecode(part, true);
	  }
	
	  // The main interface
	
	  var RouteRecognizer = function RouteRecognizer() {
	    this.rootState = new State();
	    this.names = {};
	  };
	
	  RouteRecognizer.prototype = {
	    add: function add(routes, options) {
	      var currentState = this.rootState,
	          regex = "^",
	          specificity = {},
	          handlers = [],
	          allSegments = [],
	          name;
	
	      var isEmpty = true;
	
	      for (var i = 0, l = routes.length; i < l; i++) {
	        var route = routes[i],
	            names = [];
	
	        var segments = parse(route.path, names, specificity);
	
	        allSegments = allSegments.concat(segments);
	
	        for (var j = 0, m = segments.length; j < m; j++) {
	          var segment = segments[j];
	
	          if (segment instanceof EpsilonSegment) {
	            continue;
	          }
	
	          isEmpty = false;
	
	          // Add a "/" for the new segment
	          currentState = currentState.put({ validChars: "/" });
	          regex += "/";
	
	          // Add a representation of the segment to the NFA and regex
	          currentState = addSegment(currentState, segment);
	          regex += segment.regex();
	        }
	
	        var handler = { handler: route.handler, names: names };
	        handlers.push(handler);
	      }
	
	      if (isEmpty) {
	        currentState = currentState.put({ validChars: "/" });
	        regex += "/";
	      }
	
	      currentState.handlers = handlers;
	      currentState.regex = new RegExp(regex + "$");
	      currentState.specificity = specificity;
	
	      if (name = options && options.as) {
	        this.names[name] = {
	          segments: allSegments,
	          handlers: handlers
	        };
	      }
	    },
	
	    handlersFor: function handlersFor(name) {
	      var route = this.names[name],
	          result = [];
	      if (!route) {
	        throw new Error("There is no route named " + name);
	      }
	
	      for (var i = 0, l = route.handlers.length; i < l; i++) {
	        result.push(route.handlers[i]);
	      }
	
	      return result;
	    },
	
	    hasRoute: function hasRoute(name) {
	      return !!this.names[name];
	    },
	
	    generate: function generate(name, params) {
	      var route = this.names[name],
	          output = "";
	      if (!route) {
	        throw new Error("There is no route named " + name);
	      }
	
	      var segments = route.segments;
	
	      for (var i = 0, l = segments.length; i < l; i++) {
	        var segment = segments[i];
	
	        if (segment instanceof EpsilonSegment) {
	          continue;
	        }
	
	        output += "/";
	        output += segment.generate(params);
	      }
	
	      if (output.charAt(0) !== '/') {
	        output = '/' + output;
	      }
	
	      if (params && params.queryParams) {
	        output += this.generateQueryString(params.queryParams);
	      }
	
	      return output;
	    },
	
	    generateQueryString: function generateQueryString(params) {
	      var pairs = [];
	      var keys = [];
	      for (var key in params) {
	        if (params.hasOwnProperty(key)) {
	          keys.push(key);
	        }
	      }
	      keys.sort();
	      for (var i = 0, len = keys.length; i < len; i++) {
	        key = keys[i];
	        var value = params[key];
	        if (value == null) {
	          continue;
	        }
	        var pair = encodeURIComponent(key);
	        if (isArray(value)) {
	          for (var j = 0, l = value.length; j < l; j++) {
	            var arrayPair = key + '[]' + '=' + encodeURIComponent(value[j]);
	            pairs.push(arrayPair);
	          }
	        } else {
	          pair += "=" + encodeURIComponent(value);
	          pairs.push(pair);
	        }
	      }
	
	      if (pairs.length === 0) {
	        return '';
	      }
	
	      return "?" + pairs.join("&");
	    },
	
	    parseQueryString: function parseQueryString(queryString) {
	      var pairs = queryString.split("&"),
	          queryParams = {};
	      for (var i = 0; i < pairs.length; i++) {
	        var pair = pairs[i].split('='),
	            key = decodeQueryParamPart(pair[0]),
	            keyLength = key.length,
	            isArray = false,
	            value;
	        if (pair.length === 1) {
	          value = 'true';
	        } else {
	          //Handle arrays
	          if (keyLength > 2 && key.slice(keyLength - 2) === '[]') {
	            isArray = true;
	            key = key.slice(0, keyLength - 2);
	            if (!queryParams[key]) {
	              queryParams[key] = [];
	            }
	          }
	          value = pair[1] ? decodeQueryParamPart(pair[1]) : '';
	        }
	        if (isArray) {
	          queryParams[key].push(value);
	        } else {
	          queryParams[key] = value;
	        }
	      }
	      return queryParams;
	    },
	
	    recognize: function recognize(path, silent) {
	      noWarning = silent;
	      var states = [this.rootState],
	          pathLen,
	          i,
	          l,
	          queryStart,
	          queryParams = {},
	          isSlashDropped = false;
	
	      queryStart = path.indexOf('?');
	      if (queryStart !== -1) {
	        var queryString = path.substr(queryStart + 1, path.length);
	        path = path.substr(0, queryStart);
	        if (queryString) {
	          queryParams = this.parseQueryString(queryString);
	        }
	      }
	
	      path = tryDecode(path);
	      if (!path) return;
	
	      // DEBUG GROUP path
	
	      if (path.charAt(0) !== "/") {
	        path = "/" + path;
	      }
	
	      pathLen = path.length;
	      if (pathLen > 1 && path.charAt(pathLen - 1) === "/") {
	        path = path.substr(0, pathLen - 1);
	        isSlashDropped = true;
	      }
	
	      for (i = 0, l = path.length; i < l; i++) {
	        states = recognizeChar(states, path.charAt(i));
	        if (!states.length) {
	          break;
	        }
	      }
	
	      // END DEBUG GROUP
	
	      var solutions = [];
	      for (i = 0, l = states.length; i < l; i++) {
	        if (states[i].handlers) {
	          solutions.push(states[i]);
	        }
	      }
	
	      states = sortSolutions(solutions);
	
	      var state = solutions[0];
	
	      if (state && state.handlers) {
	        // if a trailing slash was dropped and a star segment is the last segment
	        // specified, put the trailing slash back
	        if (isSlashDropped && state.regex.source.slice(-5) === "(.+)$") {
	          path = path + "/";
	        }
	        return findHandler(state, path, queryParams);
	      }
	    }
	  };
	
	  RouteRecognizer.prototype.map = map;
	
	  var genQuery = RouteRecognizer.prototype.generateQueryString;
	
	  // export default for holding the Vue reference
	  var exports$1 = {};
	  /**
	   * Warn stuff.
	   *
	   * @param {String} msg
	   */
	
	  function warn$1(msg) {
	    /* istanbul ignore next */
	    if (typeof console !== 'undefined') {
	      console.error('[vue-router] ' + msg);
	    }
	  }
	
	  /**
	   * Resolve a relative path.
	   *
	   * @param {String} base
	   * @param {String} relative
	   * @param {Boolean} append
	   * @return {String}
	   */
	
	  function resolvePath(base, relative, append) {
	    var query = base.match(/(\?.*)$/);
	    if (query) {
	      query = query[1];
	      base = base.slice(0, -query.length);
	    }
	    // a query!
	    if (relative.charAt(0) === '?') {
	      return base + relative;
	    }
	    var stack = base.split('/');
	    // remove trailing segment if:
	    // - not appending
	    // - appending to trailing slash (last segment is empty)
	    if (!append || !stack[stack.length - 1]) {
	      stack.pop();
	    }
	    // resolve relative path
	    var segments = relative.replace(/^\//, '').split('/');
	    for (var i = 0; i < segments.length; i++) {
	      var segment = segments[i];
	      if (segment === '.') {
	        continue;
	      } else if (segment === '..') {
	        stack.pop();
	      } else {
	        stack.push(segment);
	      }
	    }
	    // ensure leading slash
	    if (stack[0] !== '') {
	      stack.unshift('');
	    }
	    return stack.join('/');
	  }
	
	  /**
	   * Forgiving check for a promise
	   *
	   * @param {Object} p
	   * @return {Boolean}
	   */
	
	  function isPromise(p) {
	    return p && typeof p.then === 'function';
	  }
	
	  /**
	   * Retrive a route config field from a component instance
	   * OR a component contructor.
	   *
	   * @param {Function|Vue} component
	   * @param {String} name
	   * @return {*}
	   */
	
	  function getRouteConfig(component, name) {
	    var options = component && (component.$options || component.options);
	    return options && options.route && options.route[name];
	  }
	
	  /**
	   * Resolve an async component factory. Have to do a dirty
	   * mock here because of Vue core's internal API depends on
	   * an ID check.
	   *
	   * @param {Object} handler
	   * @param {Function} cb
	   */
	
	  var resolver = undefined;
	
	  function resolveAsyncComponent(handler, cb) {
	    if (!resolver) {
	      resolver = {
	        resolve: exports$1.Vue.prototype._resolveComponent,
	        $options: {
	          components: {
	            _: handler.component
	          }
	        }
	      };
	    } else {
	      resolver.$options.components._ = handler.component;
	    }
	    resolver.resolve('_', function (Component) {
	      handler.component = Component;
	      cb(Component);
	    });
	  }
	
	  /**
	   * Map the dynamic segments in a path to params.
	   *
	   * @param {String} path
	   * @param {Object} params
	   * @param {Object} query
	   */
	
	  function mapParams(path, params, query) {
	    if (params === undefined) params = {};
	
	    path = path.replace(/:([^\/]+)/g, function (_, key) {
	      var val = params[key];
	      /* istanbul ignore if */
	      if (!val) {
	        warn$1('param "' + key + '" not found when generating ' + 'path for "' + path + '" with params ' + JSON.stringify(params));
	      }
	      return val || '';
	    });
	    if (query) {
	      path += genQuery(query);
	    }
	    return path;
	  }
	
	  var hashRE = /#.*$/;
	
	  var HTML5History = (function () {
	    function HTML5History(_ref) {
	      var root = _ref.root;
	      var onChange = _ref.onChange;
	      babelHelpers.classCallCheck(this, HTML5History);
	
	      if (root && root !== '/') {
	        // make sure there's the starting slash
	        if (root.charAt(0) !== '/') {
	          root = '/' + root;
	        }
	        // remove trailing slash
	        this.root = root.replace(/\/$/, '');
	        this.rootRE = new RegExp('^\\' + this.root);
	      } else {
	        this.root = null;
	      }
	      this.onChange = onChange;
	      // check base tag
	      var baseEl = document.querySelector('base');
	      this.base = baseEl && baseEl.getAttribute('href');
	    }
	
	    HTML5History.prototype.start = function start() {
	      var _this = this;
	
	      this.listener = function (e) {
	        var url = location.pathname + location.search;
	        if (_this.root) {
	          url = url.replace(_this.rootRE, '');
	        }
	        _this.onChange(url, e && e.state, location.hash);
	      };
	      window.addEventListener('popstate', this.listener);
	      this.listener();
	    };
	
	    HTML5History.prototype.stop = function stop() {
	      window.removeEventListener('popstate', this.listener);
	    };
	
	    HTML5History.prototype.go = function go(path, replace, append) {
	      var url = this.formatPath(path, append);
	      if (replace) {
	        history.replaceState({}, '', url);
	      } else {
	        // record scroll position by replacing current state
	        history.replaceState({
	          pos: {
	            x: window.pageXOffset,
	            y: window.pageYOffset
	          }
	        }, '', location.href);
	        // then push new state
	        history.pushState({}, '', url);
	      }
	      var hashMatch = path.match(hashRE);
	      var hash = hashMatch && hashMatch[0];
	      path = url
	      // strip hash so it doesn't mess up params
	      .replace(hashRE, '')
	      // remove root before matching
	      .replace(this.rootRE, '');
	      this.onChange(path, null, hash);
	    };
	
	    HTML5History.prototype.formatPath = function formatPath(path, append) {
	      return path.charAt(0) === '/'
	      // absolute path
	      ? this.root ? this.root + '/' + path.replace(/^\//, '') : path : resolvePath(this.base || location.pathname, path, append);
	    };
	
	    return HTML5History;
	  })();
	
	  var HashHistory = (function () {
	    function HashHistory(_ref) {
	      var hashbang = _ref.hashbang;
	      var onChange = _ref.onChange;
	      babelHelpers.classCallCheck(this, HashHistory);
	
	      this.hashbang = hashbang;
	      this.onChange = onChange;
	    }
	
	    HashHistory.prototype.start = function start() {
	      var self = this;
	      this.listener = function () {
	        var path = location.hash;
	        var raw = path.replace(/^#!?/, '');
	        // always
	        if (raw.charAt(0) !== '/') {
	          raw = '/' + raw;
	        }
	        var formattedPath = self.formatPath(raw);
	        if (formattedPath !== path) {
	          location.replace(formattedPath);
	          return;
	        }
	        // determine query
	        // note it's possible to have queries in both the actual URL
	        // and the hash fragment itself.
	        var query = location.search && path.indexOf('?') > -1 ? '&' + location.search.slice(1) : location.search;
	        self.onChange(path.replace(/^#!?/, '') + query);
	      };
	      window.addEventListener('hashchange', this.listener);
	      this.listener();
	    };
	
	    HashHistory.prototype.stop = function stop() {
	      window.removeEventListener('hashchange', this.listener);
	    };
	
	    HashHistory.prototype.go = function go(path, replace, append) {
	      path = this.formatPath(path, append);
	      if (replace) {
	        location.replace(path);
	      } else {
	        location.hash = path;
	      }
	    };
	
	    HashHistory.prototype.formatPath = function formatPath(path, append) {
	      var isAbsoloute = path.charAt(0) === '/';
	      var prefix = '#' + (this.hashbang ? '!' : '');
	      return isAbsoloute ? prefix + path : prefix + resolvePath(location.hash.replace(/^#!?/, ''), path, append);
	    };
	
	    return HashHistory;
	  })();
	
	  var AbstractHistory = (function () {
	    function AbstractHistory(_ref) {
	      var onChange = _ref.onChange;
	      babelHelpers.classCallCheck(this, AbstractHistory);
	
	      this.onChange = onChange;
	      this.currentPath = '/';
	    }
	
	    AbstractHistory.prototype.start = function start() {
	      this.onChange('/');
	    };
	
	    AbstractHistory.prototype.stop = function stop() {
	      // noop
	    };
	
	    AbstractHistory.prototype.go = function go(path, replace, append) {
	      path = this.currentPath = this.formatPath(path, append);
	      this.onChange(path);
	    };
	
	    AbstractHistory.prototype.formatPath = function formatPath(path, append) {
	      return path.charAt(0) === '/' ? path : resolvePath(this.currentPath, path, append);
	    };
	
	    return AbstractHistory;
	  })();
	
	  /**
	   * Determine the reusability of an existing router view.
	   *
	   * @param {Directive} view
	   * @param {Object} handler
	   * @param {Transition} transition
	   */
	
	  function canReuse(view, handler, transition) {
	    var component = view.childVM;
	    if (!component || !handler) {
	      return false;
	    }
	    // important: check view.Component here because it may
	    // have been changed in activate hook
	    if (view.Component !== handler.component) {
	      return false;
	    }
	    var canReuseFn = getRouteConfig(component, 'canReuse');
	    return typeof canReuseFn === 'boolean' ? canReuseFn : canReuseFn ? canReuseFn.call(component, {
	      to: transition.to,
	      from: transition.from
	    }) : true; // defaults to true
	  }
	
	  /**
	   * Check if a component can deactivate.
	   *
	   * @param {Directive} view
	   * @param {Transition} transition
	   * @param {Function} next
	   */
	
	  function canDeactivate(view, transition, next) {
	    var fromComponent = view.childVM;
	    var hook = getRouteConfig(fromComponent, 'canDeactivate');
	    if (!hook) {
	      next();
	    } else {
	      transition.callHook(hook, fromComponent, next, {
	        expectBoolean: true
	      });
	    }
	  }
	
	  /**
	   * Check if a component can activate.
	   *
	   * @param {Object} handler
	   * @param {Transition} transition
	   * @param {Function} next
	   */
	
	  function canActivate(handler, transition, next) {
	    resolveAsyncComponent(handler, function (Component) {
	      // have to check due to async-ness
	      if (transition.aborted) {
	        return;
	      }
	      // determine if this component can be activated
	      var hook = getRouteConfig(Component, 'canActivate');
	      if (!hook) {
	        next();
	      } else {
	        transition.callHook(hook, null, next, {
	          expectBoolean: true
	        });
	      }
	    });
	  }
	
	  /**
	   * Call deactivate hooks for existing router-views.
	   *
	   * @param {Directive} view
	   * @param {Transition} transition
	   * @param {Function} next
	   */
	
	  function deactivate(view, transition, next) {
	    var component = view.childVM;
	    var hook = getRouteConfig(component, 'deactivate');
	    if (!hook) {
	      next();
	    } else {
	      transition.callHooks(hook, component, next);
	    }
	  }
	
	  /**
	   * Activate / switch component for a router-view.
	   *
	   * @param {Directive} view
	   * @param {Transition} transition
	   * @param {Number} depth
	   * @param {Function} [cb]
	   */
	
	  function activate(view, transition, depth, cb, reuse) {
	    var handler = transition.activateQueue[depth];
	    if (!handler) {
	      saveChildView(view);
	      if (view._bound) {
	        view.setComponent(null);
	      }
	      cb && cb();
	      return;
	    }
	
	    var Component = view.Component = handler.component;
	    var activateHook = getRouteConfig(Component, 'activate');
	    var dataHook = getRouteConfig(Component, 'data');
	    var waitForData = getRouteConfig(Component, 'waitForData');
	
	    view.depth = depth;
	    view.activated = false;
	
	    var component = undefined;
	    var loading = !!(dataHook && !waitForData);
	
	    // "reuse" is a flag passed down when the parent view is
	    // either reused via keep-alive or as a child of a kept-alive view.
	    // of course we can only reuse if the current kept-alive instance
	    // is of the correct type.
	    reuse = reuse && view.childVM && view.childVM.constructor === Component;
	
	    if (reuse) {
	      // just reuse
	      component = view.childVM;
	      component.$loadingRouteData = loading;
	    } else {
	      saveChildView(view);
	
	      // unbuild current component. this step also destroys
	      // and removes all nested child views.
	      view.unbuild(true);
	
	      // build the new component. this will also create the
	      // direct child view of the current one. it will register
	      // itself as view.childView.
	      component = view.build({
	        _meta: {
	          $loadingRouteData: loading
	        },
	        created: function created() {
	          this._routerView = view;
	        }
	      });
	
	      // handle keep-alive.
	      // when a kept-alive child vm is restored, we need to
	      // add its cached child views into the router's view list,
	      // and also properly update current view's child view.
	      if (view.keepAlive) {
	        component.$loadingRouteData = loading;
	        var cachedChildView = component._keepAliveRouterView;
	        if (cachedChildView) {
	          view.childView = cachedChildView;
	          component._keepAliveRouterView = null;
	        }
	      }
	    }
	
	    // cleanup the component in case the transition is aborted
	    // before the component is ever inserted.
	    var cleanup = function cleanup() {
	      component.$destroy();
	    };
	
	    // actually insert the component and trigger transition
	    var insert = function insert() {
	      if (reuse) {
	        cb && cb();
	        return;
	      }
	      var router = transition.router;
	      if (router._rendered || router._transitionOnLoad) {
	        view.transition(component);
	      } else {
	        // no transition on first render, manual transition
	        /* istanbul ignore if */
	        if (view.setCurrent) {
	          // 0.12 compat
	          view.setCurrent(component);
	        } else {
	          // 1.0
	          view.childVM = component;
	        }
	        component.$before(view.anchor, null, false);
	      }
	      cb && cb();
	    };
	
	    var afterData = function afterData() {
	      // activate the child view
	      if (view.childView) {
	        activate(view.childView, transition, depth + 1, null, reuse || view.keepAlive);
	      }
	      insert();
	    };
	
	    // called after activation hook is resolved
	    var afterActivate = function afterActivate() {
	      view.activated = true;
	      if (dataHook && waitForData) {
	        // wait until data loaded to insert
	        loadData(component, transition, dataHook, afterData, cleanup);
	      } else {
	        // load data and insert at the same time
	        if (dataHook) {
	          loadData(component, transition, dataHook);
	        }
	        afterData();
	      }
	    };
	
	    if (activateHook) {
	      transition.callHooks(activateHook, component, afterActivate, {
	        cleanup: cleanup,
	        postActivate: true
	      });
	    } else {
	      afterActivate();
	    }
	  }
	
	  /**
	   * Reuse a view, just reload data if necessary.
	   *
	   * @param {Directive} view
	   * @param {Transition} transition
	   */
	
	  function reuse(view, transition) {
	    var component = view.childVM;
	    var dataHook = getRouteConfig(component, 'data');
	    if (dataHook) {
	      loadData(component, transition, dataHook);
	    }
	  }
	
	  /**
	   * Asynchronously load and apply data to component.
	   *
	   * @param {Vue} component
	   * @param {Transition} transition
	   * @param {Function} hook
	   * @param {Function} cb
	   * @param {Function} cleanup
	   */
	
	  function loadData(component, transition, hook, cb, cleanup) {
	    component.$loadingRouteData = true;
	    transition.callHooks(hook, component, function () {
	      component.$loadingRouteData = false;
	      component.$emit('route-data-loaded', component);
	      cb && cb();
	    }, {
	      cleanup: cleanup,
	      postActivate: true,
	      processData: function processData(data) {
	        // handle promise sugar syntax
	        var promises = [];
	        if (isPlainObject(data)) {
	          Object.keys(data).forEach(function (key) {
	            var val = data[key];
	            if (isPromise(val)) {
	              promises.push(val.then(function (resolvedVal) {
	                component.$set(key, resolvedVal);
	              }));
	            } else {
	              component.$set(key, val);
	            }
	          });
	        }
	        if (promises.length) {
	          return promises[0].constructor.all(promises);
	        }
	      }
	    });
	  }
	
	  /**
	   * Save the child view for a kept-alive view so that
	   * we can restore it when it is switched back to.
	   *
	   * @param {Directive} view
	   */
	
	  function saveChildView(view) {
	    if (view.keepAlive && view.childVM && view.childView) {
	      view.childVM._keepAliveRouterView = view.childView;
	    }
	    view.childView = null;
	  }
	
	  /**
	   * Check plain object.
	   *
	   * @param {*} val
	   */
	
	  function isPlainObject(val) {
	    return Object.prototype.toString.call(val) === '[object Object]';
	  }
	
	  /**
	   * A RouteTransition object manages the pipeline of a
	   * router-view switching process. This is also the object
	   * passed into user route hooks.
	   *
	   * @param {Router} router
	   * @param {Route} to
	   * @param {Route} from
	   */
	
	  var RouteTransition = (function () {
	    function RouteTransition(router, to, from) {
	      babelHelpers.classCallCheck(this, RouteTransition);
	
	      this.router = router;
	      this.to = to;
	      this.from = from;
	      this.next = null;
	      this.aborted = false;
	      this.done = false;
	    }
	
	    /**
	     * Abort current transition and return to previous location.
	     */
	
	    RouteTransition.prototype.abort = function abort() {
	      if (!this.aborted) {
	        this.aborted = true;
	        // if the root path throws an error during validation
	        // on initial load, it gets caught in an infinite loop.
	        var abortingOnLoad = !this.from.path && this.to.path === '/';
	        if (!abortingOnLoad) {
	          this.router.replace(this.from.path || '/');
	        }
	      }
	    };
	
	    /**
	     * Abort current transition and redirect to a new location.
	     *
	     * @param {String} path
	     */
	
	    RouteTransition.prototype.redirect = function redirect(path) {
	      if (!this.aborted) {
	        this.aborted = true;
	        if (typeof path === 'string') {
	          path = mapParams(path, this.to.params, this.to.query);
	        } else {
	          path.params = path.params || this.to.params;
	          path.query = path.query || this.to.query;
	        }
	        this.router.replace(path);
	      }
	    };
	
	    /**
	     * A router view transition's pipeline can be described as
	     * follows, assuming we are transitioning from an existing
	     * <router-view> chain [Component A, Component B] to a new
	     * chain [Component A, Component C]:
	     *
	     *  A    A
	     *  | => |
	     *  B    C
	     *
	     * 1. Reusablity phase:
	     *   -> canReuse(A, A)
	     *   -> canReuse(B, C)
	     *   -> determine new queues:
	     *      - deactivation: [B]
	     *      - activation: [C]
	     *
	     * 2. Validation phase:
	     *   -> canDeactivate(B)
	     *   -> canActivate(C)
	     *
	     * 3. Activation phase:
	     *   -> deactivate(B)
	     *   -> activate(C)
	     *
	     * Each of these steps can be asynchronous, and any
	     * step can potentially abort the transition.
	     *
	     * @param {Function} cb
	     */
	
	    RouteTransition.prototype.start = function start(cb) {
	      var transition = this;
	
	      // determine the queue of views to deactivate
	      var deactivateQueue = [];
	      var view = this.router._rootView;
	      while (view) {
	        deactivateQueue.unshift(view);
	        view = view.childView;
	      }
	      var reverseDeactivateQueue = deactivateQueue.slice().reverse();
	
	      // determine the queue of route handlers to activate
	      var activateQueue = this.activateQueue = toArray(this.to.matched).map(function (match) {
	        return match.handler;
	      });
	
	      // 1. Reusability phase
	      var i = undefined,
	          reuseQueue = undefined;
	      for (i = 0; i < reverseDeactivateQueue.length; i++) {
	        if (!canReuse(reverseDeactivateQueue[i], activateQueue[i], transition)) {
	          break;
	        }
	      }
	      if (i > 0) {
	        reuseQueue = reverseDeactivateQueue.slice(0, i);
	        deactivateQueue = reverseDeactivateQueue.slice(i).reverse();
	        activateQueue = activateQueue.slice(i);
	      }
	
	      // 2. Validation phase
	      transition.runQueue(deactivateQueue, canDeactivate, function () {
	        transition.runQueue(activateQueue, canActivate, function () {
	          transition.runQueue(deactivateQueue, deactivate, function () {
	            // 3. Activation phase
	
	            // Update router current route
	            transition.router._onTransitionValidated(transition);
	
	            // trigger reuse for all reused views
	            reuseQueue && reuseQueue.forEach(function (view) {
	              return reuse(view, transition);
	            });
	
	            // the root of the chain that needs to be replaced
	            // is the top-most non-reusable view.
	            if (deactivateQueue.length) {
	              var _view = deactivateQueue[deactivateQueue.length - 1];
	              var depth = reuseQueue ? reuseQueue.length : 0;
	              activate(_view, transition, depth, cb);
	            } else {
	              cb();
	            }
	          });
	        });
	      });
	    };
	
	    /**
	     * Asynchronously and sequentially apply a function to a
	     * queue.
	     *
	     * @param {Array} queue
	     * @param {Function} fn
	     * @param {Function} cb
	     */
	
	    RouteTransition.prototype.runQueue = function runQueue(queue, fn, cb) {
	      var transition = this;
	      step(0);
	      function step(index) {
	        if (index >= queue.length) {
	          cb();
	        } else {
	          fn(queue[index], transition, function () {
	            step(index + 1);
	          });
	        }
	      }
	    };
	
	    /**
	     * Call a user provided route transition hook and handle
	     * the response (e.g. if the user returns a promise).
	     *
	     * If the user neither expects an argument nor returns a
	     * promise, the hook is assumed to be synchronous.
	     *
	     * @param {Function} hook
	     * @param {*} [context]
	     * @param {Function} [cb]
	     * @param {Object} [options]
	     *                 - {Boolean} expectBoolean
	     *                 - {Boolean} postActive
	     *                 - {Function} processData
	     *                 - {Function} cleanup
	     */
	
	    RouteTransition.prototype.callHook = function callHook(hook, context, cb) {
	      var _ref = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];
	
	      var _ref$expectBoolean = _ref.expectBoolean;
	      var expectBoolean = _ref$expectBoolean === undefined ? false : _ref$expectBoolean;
	      var _ref$postActivate = _ref.postActivate;
	      var postActivate = _ref$postActivate === undefined ? false : _ref$postActivate;
	      var processData = _ref.processData;
	      var cleanup = _ref.cleanup;
	
	      var transition = this;
	      var nextCalled = false;
	
	      // abort the transition
	      var abort = function abort() {
	        cleanup && cleanup();
	        transition.abort();
	      };
	
	      // handle errors
	      var onError = function onError(err) {
	        postActivate ? next() : abort();
	        if (err && !transition.router._suppress) {
	          warn$1('Uncaught error during transition: ');
	          throw err instanceof Error ? err : new Error(err);
	        }
	      };
	
	      // since promise swallows errors, we have to
	      // throw it in the next tick...
	      var onPromiseError = function onPromiseError(err) {
	        try {
	          onError(err);
	        } catch (e) {
	          setTimeout(function () {
	            throw e;
	          }, 0);
	        }
	      };
	
	      // advance the transition to the next step
	      var next = function next() {
	        if (nextCalled) {
	          warn$1('transition.next() should be called only once.');
	          return;
	        }
	        nextCalled = true;
	        if (transition.aborted) {
	          cleanup && cleanup();
	          return;
	        }
	        cb && cb();
	      };
	
	      var nextWithBoolean = function nextWithBoolean(res) {
	        if (typeof res === 'boolean') {
	          res ? next() : abort();
	        } else if (isPromise(res)) {
	          res.then(function (ok) {
	            ok ? next() : abort();
	          }, onPromiseError);
	        } else if (!hook.length) {
	          next();
	        }
	      };
	
	      var nextWithData = function nextWithData(data) {
	        var res = undefined;
	        try {
	          res = processData(data);
	        } catch (err) {
	          return onError(err);
	        }
	        if (isPromise(res)) {
	          res.then(next, onPromiseError);
	        } else {
	          next();
	        }
	      };
	
	      // expose a clone of the transition object, so that each
	      // hook gets a clean copy and prevent the user from
	      // messing with the internals.
	      var exposed = {
	        to: transition.to,
	        from: transition.from,
	        abort: abort,
	        next: processData ? nextWithData : next,
	        redirect: function redirect() {
	          transition.redirect.apply(transition, arguments);
	        }
	      };
	
	      // actually call the hook
	      var res = undefined;
	      try {
	        res = hook.call(context, exposed);
	      } catch (err) {
	        return onError(err);
	      }
	
	      if (expectBoolean) {
	        // boolean hooks
	        nextWithBoolean(res);
	      } else if (isPromise(res)) {
	        // promise
	        if (processData) {
	          res.then(nextWithData, onPromiseError);
	        } else {
	          res.then(next, onPromiseError);
	        }
	      } else if (processData && isPlainOjbect(res)) {
	        // data promise sugar
	        nextWithData(res);
	      } else if (!hook.length) {
	        next();
	      }
	    };
	
	    /**
	     * Call a single hook or an array of async hooks in series.
	     *
	     * @param {Array} hooks
	     * @param {*} context
	     * @param {Function} cb
	     * @param {Object} [options]
	     */
	
	    RouteTransition.prototype.callHooks = function callHooks(hooks, context, cb, options) {
	      var _this = this;
	
	      if (Array.isArray(hooks)) {
	        this.runQueue(hooks, function (hook, _, next) {
	          if (!_this.aborted) {
	            _this.callHook(hook, context, next, options);
	          }
	        }, cb);
	      } else {
	        this.callHook(hooks, context, cb, options);
	      }
	    };
	
	    return RouteTransition;
	  })();
	
	  function isPlainOjbect(val) {
	    return Object.prototype.toString.call(val) === '[object Object]';
	  }
	
	  function toArray(val) {
	    return val ? Array.prototype.slice.call(val) : [];
	  }
	
	  var internalKeysRE = /^(component|subRoutes|fullPath)$/;
	
	  /**
	   * Route Context Object
	   *
	   * @param {String} path
	   * @param {Router} router
	   */
	
	  var Route = function Route(path, router) {
	    var _this = this;
	
	    babelHelpers.classCallCheck(this, Route);
	
	    var matched = router._recognizer.recognize(path);
	    if (matched) {
	      // copy all custom fields from route configs
	      [].forEach.call(matched, function (match) {
	        for (var key in match.handler) {
	          if (!internalKeysRE.test(key)) {
	            _this[key] = match.handler[key];
	          }
	        }
	      });
	      // set query and params
	      this.query = matched.queryParams;
	      this.params = [].reduce.call(matched, function (prev, cur) {
	        if (cur.params) {
	          for (var key in cur.params) {
	            prev[key] = cur.params[key];
	          }
	        }
	        return prev;
	      }, {});
	    }
	    // expose path and router
	    this.path = path;
	    // for internal use
	    this.matched = matched || router._notFoundHandler;
	    // internal reference to router
	    Object.defineProperty(this, 'router', {
	      enumerable: false,
	      value: router
	    });
	    // Important: freeze self to prevent observation
	    Object.freeze(this);
	  };
	
	  function applyOverride (Vue) {
	    var _Vue$util = Vue.util;
	    var extend = _Vue$util.extend;
	    var isArray = _Vue$util.isArray;
	    var defineReactive = _Vue$util.defineReactive;
	
	    // override Vue's init and destroy process to keep track of router instances
	    var init = Vue.prototype._init;
	    Vue.prototype._init = function (options) {
	      options = options || {};
	      var root = options._parent || options.parent || this;
	      var router = root.$router;
	      var route = root.$route;
	      if (router) {
	        // expose router
	        this.$router = router;
	        router._children.push(this);
	        /* istanbul ignore if */
	        if (this._defineMeta) {
	          // 0.12
	          this._defineMeta('$route', route);
	        } else {
	          // 1.0
	          defineReactive(this, '$route', route);
	        }
	      }
	      init.call(this, options);
	    };
	
	    var destroy = Vue.prototype._destroy;
	    Vue.prototype._destroy = function () {
	      if (!this._isBeingDestroyed && this.$router) {
	        this.$router._children.$remove(this);
	      }
	      destroy.apply(this, arguments);
	    };
	
	    // 1.0 only: enable route mixins
	    var strats = Vue.config.optionMergeStrategies;
	    var hooksToMergeRE = /^(data|activate|deactivate)$/;
	
	    if (strats) {
	      strats.route = function (parentVal, childVal) {
	        if (!childVal) return parentVal;
	        if (!parentVal) return childVal;
	        var ret = {};
	        extend(ret, parentVal);
	        for (var key in childVal) {
	          var a = ret[key];
	          var b = childVal[key];
	          // for data, activate and deactivate, we need to merge them into
	          // arrays similar to lifecycle hooks.
	          if (a && hooksToMergeRE.test(key)) {
	            ret[key] = (isArray(a) ? a : [a]).concat(b);
	          } else {
	            ret[key] = b;
	          }
	        }
	        return ret;
	      };
	    }
	  }
	
	  function View (Vue) {
	
	    var _ = Vue.util;
	    var componentDef =
	    // 0.12
	    Vue.directive('_component') ||
	    // 1.0
	    Vue.internalDirectives.component;
	    // <router-view> extends the internal component directive
	    var viewDef = _.extend({}, componentDef);
	
	    // with some overrides
	    _.extend(viewDef, {
	
	      _isRouterView: true,
	
	      bind: function bind() {
	        var route = this.vm.$route;
	        /* istanbul ignore if */
	        if (!route) {
	          warn$1('<router-view> can only be used inside a ' + 'router-enabled app.');
	          return;
	        }
	        // force dynamic directive so v-component doesn't
	        // attempt to build right now
	        this._isDynamicLiteral = true;
	        // finally, init by delegating to v-component
	        componentDef.bind.call(this);
	
	        // locate the parent view
	        var parentView = undefined;
	        var parent = this.vm;
	        while (parent) {
	          if (parent._routerView) {
	            parentView = parent._routerView;
	            break;
	          }
	          parent = parent.$parent;
	        }
	        if (parentView) {
	          // register self as a child of the parent view,
	          // instead of activating now. This is so that the
	          // child's activate hook is called after the
	          // parent's has resolved.
	          this.parentView = parentView;
	          parentView.childView = this;
	        } else {
	          // this is the root view!
	          var router = route.router;
	          router._rootView = this;
	        }
	
	        // handle late-rendered view
	        // two possibilities:
	        // 1. root view rendered after transition has been
	        //    validated;
	        // 2. child view rendered after parent view has been
	        //    activated.
	        var transition = route.router._currentTransition;
	        if (!parentView && transition.done || parentView && parentView.activated) {
	          var depth = parentView ? parentView.depth + 1 : 0;
	          activate(this, transition, depth);
	        }
	      },
	
	      unbind: function unbind() {
	        if (this.parentView) {
	          this.parentView.childView = null;
	        }
	        componentDef.unbind.call(this);
	      }
	    });
	
	    Vue.elementDirective('router-view', viewDef);
	  }
	
	  var trailingSlashRE = /\/$/;
	  var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;
	  var queryStringRE = /\?.*$/;
	
	  // install v-link, which provides navigation support for
	  // HTML5 history mode
	  function Link (Vue) {
	    var _Vue$util = Vue.util;
	    var _bind = _Vue$util.bind;
	    var isObject = _Vue$util.isObject;
	    var addClass = _Vue$util.addClass;
	    var removeClass = _Vue$util.removeClass;
	
	    var onPriority = Vue.directive('on').priority;
	    var LINK_UPDATE = '__vue-router-link-update__';
	
	    var activeId = 0;
	
	    Vue.directive('link-active', {
	      priority: 9999,
	      bind: function bind() {
	        var _this = this;
	
	        var id = String(activeId++);
	        // collect v-links contained within this element.
	        // we need do this here before the parent-child relationship
	        // gets messed up by terminal directives (if, for, components)
	        var childLinks = this.el.querySelectorAll('[v-link]');
	        for (var i = 0, l = childLinks.length; i < l; i++) {
	          var link = childLinks[i];
	          var existingId = link.getAttribute(LINK_UPDATE);
	          var value = existingId ? existingId + ',' + id : id;
	          // leave a mark on the link element which can be persisted
	          // through fragment clones.
	          link.setAttribute(LINK_UPDATE, value);
	        }
	        this.vm.$on(LINK_UPDATE, this.cb = function (link, path) {
	          if (link.activeIds.indexOf(id) > -1) {
	            link.updateClasses(path, _this.el);
	          }
	        });
	      },
	      unbind: function unbind() {
	        this.vm.$off(LINK_UPDATE, this.cb);
	      }
	    });
	
	    Vue.directive('link', {
	      priority: onPriority - 2,
	
	      bind: function bind() {
	        var vm = this.vm;
	        /* istanbul ignore if */
	        if (!vm.$route) {
	          warn$1('v-link can only be used inside a router-enabled app.');
	          return;
	        }
	        this.router = vm.$route.router;
	        // update things when the route changes
	        this.unwatch = vm.$watch('$route', _bind(this.onRouteUpdate, this));
	        // check v-link-active ids
	        var activeIds = this.el.getAttribute(LINK_UPDATE);
	        if (activeIds) {
	          this.el.removeAttribute(LINK_UPDATE);
	          this.activeIds = activeIds.split(',');
	        }
	        // no need to handle click if link expects to be opened
	        // in a new window/tab.
	        /* istanbul ignore if */
	        if (this.el.tagName === 'A' && this.el.getAttribute('target') === '_blank') {
	          return;
	        }
	        // handle click
	        this.handler = _bind(this.onClick, this);
	        this.el.addEventListener('click', this.handler);
	      },
	
	      update: function update(target) {
	        this.target = target;
	        if (isObject(target)) {
	          this.append = target.append;
	          this.exact = target.exact;
	          this.prevActiveClass = this.activeClass;
	          this.activeClass = target.activeClass;
	        }
	        this.onRouteUpdate(this.vm.$route);
	      },
	
	      onClick: function onClick(e) {
	        // don't redirect with control keys
	        /* istanbul ignore if */
	        if (e.metaKey || e.ctrlKey || e.shiftKey) return;
	        // don't redirect when preventDefault called
	        /* istanbul ignore if */
	        if (e.defaultPrevented) return;
	        // don't redirect on right click
	        /* istanbul ignore if */
	        if (e.button !== 0) return;
	
	        var target = this.target;
	        if (target) {
	          // v-link with expression, just go
	          e.preventDefault();
	          this.router.go(target);
	        } else {
	          // no expression, delegate for an <a> inside
	          var el = e.target;
	          while (el.tagName !== 'A' && el !== this.el) {
	            el = el.parentNode;
	          }
	          if (el.tagName === 'A' && sameOrigin(el)) {
	            e.preventDefault();
	            var path = el.pathname;
	            if (this.router.history.root) {
	              path = path.replace(this.router.history.rootRE, '');
	            }
	            this.router.go({
	              path: path,
	              replace: target && target.replace,
	              append: target && target.append
	            });
	          }
	        }
	      },
	
	      onRouteUpdate: function onRouteUpdate(route) {
	        // router.stringifyPath is dependent on current route
	        // and needs to be called again whenver route changes.
	        var newPath = this.router.stringifyPath(this.target);
	        if (this.path !== newPath) {
	          this.path = newPath;
	          this.updateActiveMatch();
	          this.updateHref();
	        }
	        if (this.activeIds) {
	          this.vm.$emit(LINK_UPDATE, this, route.path);
	        } else {
	          this.updateClasses(route.path, this.el);
	        }
	      },
	
	      updateActiveMatch: function updateActiveMatch() {
	        this.activeRE = this.path && !this.exact ? new RegExp('^' + this.path.replace(/\/$/, '').replace(queryStringRE, '').replace(regexEscapeRE, '\\$&') + '(\\/|$)') : null;
	      },
	
	      updateHref: function updateHref() {
	        if (this.el.tagName !== 'A') {
	          return;
	        }
	        var path = this.path;
	        var router = this.router;
	        var isAbsolute = path.charAt(0) === '/';
	        // do not format non-hash relative paths
	        var href = path && (router.mode === 'hash' || isAbsolute) ? router.history.formatPath(path, this.append) : path;
	        if (href) {
	          this.el.href = href;
	        } else {
	          this.el.removeAttribute('href');
	        }
	      },
	
	      updateClasses: function updateClasses(path, el) {
	        var activeClass = this.activeClass || this.router._linkActiveClass;
	        // clear old class
	        if (this.prevActiveClass && this.prevActiveClass !== activeClass) {
	          toggleClasses(el, this.prevActiveClass, removeClass);
	        }
	        // remove query string before matching
	        var dest = this.path.replace(queryStringRE, '');
	        path = path.replace(queryStringRE, '');
	        // add new class
	        if (this.exact) {
	          if (dest === path ||
	          // also allow additional trailing slash
	          dest.charAt(dest.length - 1) !== '/' && dest === path.replace(trailingSlashRE, '')) {
	            toggleClasses(el, activeClass, addClass);
	          } else {
	            toggleClasses(el, activeClass, removeClass);
	          }
	        } else {
	          if (this.activeRE && this.activeRE.test(path)) {
	            toggleClasses(el, activeClass, addClass);
	          } else {
	            toggleClasses(el, activeClass, removeClass);
	          }
	        }
	      },
	
	      unbind: function unbind() {
	        this.el.removeEventListener('click', this.handler);
	        this.unwatch && this.unwatch();
	      }
	    });
	
	    function sameOrigin(link) {
	      return link.protocol === location.protocol && link.hostname === location.hostname && link.port === location.port;
	    }
	
	    // this function is copied from v-bind:class implementation until
	    // we properly expose it...
	    function toggleClasses(el, key, fn) {
	      key = key.trim();
	      if (key.indexOf(' ') === -1) {
	        fn(el, key);
	        return;
	      }
	      var keys = key.split(/\s+/);
	      for (var i = 0, l = keys.length; i < l; i++) {
	        fn(el, keys[i]);
	      }
	    }
	  }
	
	  var historyBackends = {
	    abstract: AbstractHistory,
	    hash: HashHistory,
	    html5: HTML5History
	  };
	
	  // late bind during install
	  var Vue = undefined;
	
	  /**
	   * Router constructor
	   *
	   * @param {Object} [options]
	   */
	
	  var Router = (function () {
	    function Router() {
	      var _this = this;
	
	      var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	      var _ref$hashbang = _ref.hashbang;
	      var hashbang = _ref$hashbang === undefined ? true : _ref$hashbang;
	      var _ref$abstract = _ref.abstract;
	      var abstract = _ref$abstract === undefined ? false : _ref$abstract;
	      var _ref$history = _ref.history;
	      var history = _ref$history === undefined ? false : _ref$history;
	      var _ref$saveScrollPosition = _ref.saveScrollPosition;
	      var saveScrollPosition = _ref$saveScrollPosition === undefined ? false : _ref$saveScrollPosition;
	      var _ref$transitionOnLoad = _ref.transitionOnLoad;
	      var transitionOnLoad = _ref$transitionOnLoad === undefined ? false : _ref$transitionOnLoad;
	      var _ref$suppressTransitionError = _ref.suppressTransitionError;
	      var suppressTransitionError = _ref$suppressTransitionError === undefined ? false : _ref$suppressTransitionError;
	      var _ref$root = _ref.root;
	      var root = _ref$root === undefined ? null : _ref$root;
	      var _ref$linkActiveClass = _ref.linkActiveClass;
	      var linkActiveClass = _ref$linkActiveClass === undefined ? 'v-link-active' : _ref$linkActiveClass;
	      babelHelpers.classCallCheck(this, Router);
	
	      /* istanbul ignore if */
	      if (!Router.installed) {
	        throw new Error('Please install the Router with Vue.use() before ' + 'creating an instance.');
	      }
	
	      // Vue instances
	      this.app = null;
	      this._children = [];
	
	      // route recognizer
	      this._recognizer = new RouteRecognizer();
	      this._guardRecognizer = new RouteRecognizer();
	
	      // state
	      this._started = false;
	      this._startCb = null;
	      this._currentRoute = {};
	      this._currentTransition = null;
	      this._previousTransition = null;
	      this._notFoundHandler = null;
	      this._notFoundRedirect = null;
	      this._beforeEachHooks = [];
	      this._afterEachHooks = [];
	
	      // trigger transition on initial render?
	      this._rendered = false;
	      this._transitionOnLoad = transitionOnLoad;
	
	      // history mode
	      this._root = root;
	      this._abstract = abstract;
	      this._hashbang = hashbang;
	
	      // check if HTML5 history is available
	      var hasPushState = typeof window !== 'undefined' && window.history && window.history.pushState;
	      this._history = history && hasPushState;
	      this._historyFallback = history && !hasPushState;
	
	      // create history object
	      var inBrowser = Vue.util.inBrowser;
	      this.mode = !inBrowser || this._abstract ? 'abstract' : this._history ? 'html5' : 'hash';
	
	      var History = historyBackends[this.mode];
	      this.history = new History({
	        root: root,
	        hashbang: this._hashbang,
	        onChange: function onChange(path, state, anchor) {
	          _this._match(path, state, anchor);
	        }
	      });
	
	      // other options
	      this._saveScrollPosition = saveScrollPosition;
	      this._linkActiveClass = linkActiveClass;
	      this._suppress = suppressTransitionError;
	    }
	
	    /**
	     * Allow directly passing components to a route
	     * definition.
	     *
	     * @param {String} path
	     * @param {Object} handler
	     */
	
	    // API ===================================================
	
	    /**
	    * Register a map of top-level paths.
	    *
	    * @param {Object} map
	    */
	
	    Router.prototype.map = function map(_map) {
	      for (var route in _map) {
	        this.on(route, _map[route]);
	      }
	      return this;
	    };
	
	    /**
	     * Register a single root-level path
	     *
	     * @param {String} rootPath
	     * @param {Object} handler
	     *                 - {String} component
	     *                 - {Object} [subRoutes]
	     *                 - {Boolean} [forceRefresh]
	     *                 - {Function} [before]
	     *                 - {Function} [after]
	     */
	
	    Router.prototype.on = function on(rootPath, handler) {
	      if (rootPath === '*') {
	        this._notFound(handler);
	      } else {
	        this._addRoute(rootPath, handler, []);
	      }
	      return this;
	    };
	
	    /**
	     * Set redirects.
	     *
	     * @param {Object} map
	     */
	
	    Router.prototype.redirect = function redirect(map) {
	      for (var path in map) {
	        this._addRedirect(path, map[path]);
	      }
	      return this;
	    };
	
	    /**
	     * Set aliases.
	     *
	     * @param {Object} map
	     */
	
	    Router.prototype.alias = function alias(map) {
	      for (var path in map) {
	        this._addAlias(path, map[path]);
	      }
	      return this;
	    };
	
	    /**
	     * Set global before hook.
	     *
	     * @param {Function} fn
	     */
	
	    Router.prototype.beforeEach = function beforeEach(fn) {
	      this._beforeEachHooks.push(fn);
	      return this;
	    };
	
	    /**
	     * Set global after hook.
	     *
	     * @param {Function} fn
	     */
	
	    Router.prototype.afterEach = function afterEach(fn) {
	      this._afterEachHooks.push(fn);
	      return this;
	    };
	
	    /**
	     * Navigate to a given path.
	     * The path can be an object describing a named path in
	     * the format of { name: '...', params: {}, query: {}}
	     * The path is assumed to be already decoded, and will
	     * be resolved against root (if provided)
	     *
	     * @param {String|Object} path
	     * @param {Boolean} [replace]
	     */
	
	    Router.prototype.go = function go(path) {
	      var replace = false;
	      var append = false;
	      if (Vue.util.isObject(path)) {
	        replace = path.replace;
	        append = path.append;
	      }
	      path = this.stringifyPath(path);
	      if (path) {
	        this.history.go(path, replace, append);
	      }
	    };
	
	    /**
	     * Short hand for replacing current path
	     *
	     * @param {String} path
	     */
	
	    Router.prototype.replace = function replace(path) {
	      if (typeof path === 'string') {
	        path = { path: path };
	      }
	      path.replace = true;
	      this.go(path);
	    };
	
	    /**
	     * Start the router.
	     *
	     * @param {VueConstructor} App
	     * @param {String|Element} container
	     * @param {Function} [cb]
	     */
	
	    Router.prototype.start = function start(App, container, cb) {
	      /* istanbul ignore if */
	      if (this._started) {
	        warn$1('already started.');
	        return;
	      }
	      this._started = true;
	      this._startCb = cb;
	      if (!this.app) {
	        /* istanbul ignore if */
	        if (!App || !container) {
	          throw new Error('Must start vue-router with a component and a ' + 'root container.');
	        }
	        /* istanbul ignore if */
	        if (App instanceof Vue) {
	          throw new Error('Must start vue-router with a component, not a ' + 'Vue instance.');
	        }
	        this._appContainer = container;
	        var Ctor = this._appConstructor = typeof App === 'function' ? App : Vue.extend(App);
	        // give it a name for better debugging
	        Ctor.options.name = Ctor.options.name || 'RouterApp';
	      }
	
	      // handle history fallback in browsers that do not
	      // support HTML5 history API
	      if (this._historyFallback) {
	        var _location = window.location;
	        var _history = new HTML5History({ root: this._root });
	        var path = _history.root ? _location.pathname.replace(_history.rootRE, '') : _location.pathname;
	        if (path && path !== '/') {
	          _location.assign((_history.root || '') + '/' + this.history.formatPath(path) + _location.search);
	          return;
	        }
	      }
	
	      this.history.start();
	    };
	
	    /**
	     * Stop listening to route changes.
	     */
	
	    Router.prototype.stop = function stop() {
	      this.history.stop();
	      this._started = false;
	    };
	
	    /**
	     * Normalize named route object / string paths into
	     * a string.
	     *
	     * @param {Object|String|Number} path
	     * @return {String}
	     */
	
	    Router.prototype.stringifyPath = function stringifyPath(path) {
	      var generatedPath = '';
	      if (path && typeof path === 'object') {
	        if (path.name) {
	          var extend = Vue.util.extend;
	          var currentParams = this._currentTransition && this._currentTransition.to.params;
	          var targetParams = path.params || {};
	          var params = currentParams ? extend(extend({}, currentParams), targetParams) : targetParams;
	          generatedPath = encodeURI(this._recognizer.generate(path.name, params));
	        } else if (path.path) {
	          generatedPath = encodeURI(path.path);
	        }
	        if (path.query) {
	          // note: the generated query string is pre-URL-encoded by the recognizer
	          var query = this._recognizer.generateQueryString(path.query);
	          if (generatedPath.indexOf('?') > -1) {
	            generatedPath += '&' + query.slice(1);
	          } else {
	            generatedPath += query;
	          }
	        }
	      } else {
	        generatedPath = encodeURI(path ? path + '' : '');
	      }
	      return generatedPath;
	    };
	
	    // Internal methods ======================================
	
	    /**
	    * Add a route containing a list of segments to the internal
	    * route recognizer. Will be called recursively to add all
	    * possible sub-routes.
	    *
	    * @param {String} path
	    * @param {Object} handler
	    * @param {Array} segments
	    */
	
	    Router.prototype._addRoute = function _addRoute(path, handler, segments) {
	      guardComponent(path, handler);
	      handler.path = path;
	      handler.fullPath = (segments.reduce(function (path, segment) {
	        return path + segment.path;
	      }, '') + path).replace('//', '/');
	      segments.push({
	        path: path,
	        handler: handler
	      });
	      this._recognizer.add(segments, {
	        as: handler.name
	      });
	      // add sub routes
	      if (handler.subRoutes) {
	        for (var subPath in handler.subRoutes) {
	          // recursively walk all sub routes
	          this._addRoute(subPath, handler.subRoutes[subPath],
	          // pass a copy in recursion to avoid mutating
	          // across branches
	          segments.slice());
	        }
	      }
	    };
	
	    /**
	     * Set the notFound route handler.
	     *
	     * @param {Object} handler
	     */
	
	    Router.prototype._notFound = function _notFound(handler) {
	      guardComponent('*', handler);
	      this._notFoundHandler = [{ handler: handler }];
	    };
	
	    /**
	     * Add a redirect record.
	     *
	     * @param {String} path
	     * @param {String} redirectPath
	     */
	
	    Router.prototype._addRedirect = function _addRedirect(path, redirectPath) {
	      if (path === '*') {
	        this._notFoundRedirect = redirectPath;
	      } else {
	        this._addGuard(path, redirectPath, this.replace);
	      }
	    };
	
	    /**
	     * Add an alias record.
	     *
	     * @param {String} path
	     * @param {String} aliasPath
	     */
	
	    Router.prototype._addAlias = function _addAlias(path, aliasPath) {
	      this._addGuard(path, aliasPath, this._match);
	    };
	
	    /**
	     * Add a path guard.
	     *
	     * @param {String} path
	     * @param {String} mappedPath
	     * @param {Function} handler
	     */
	
	    Router.prototype._addGuard = function _addGuard(path, mappedPath, _handler) {
	      var _this2 = this;
	
	      this._guardRecognizer.add([{
	        path: path,
	        handler: function handler(match, query) {
	          var realPath = mapParams(mappedPath, match.params, query);
	          _handler.call(_this2, realPath);
	        }
	      }]);
	    };
	
	    /**
	     * Check if a path matches any redirect records.
	     *
	     * @param {String} path
	     * @return {Boolean} - if true, will skip normal match.
	     */
	
	    Router.prototype._checkGuard = function _checkGuard(path) {
	      var matched = this._guardRecognizer.recognize(path, true);
	      if (matched) {
	        matched[0].handler(matched[0], matched.queryParams);
	        return true;
	      } else if (this._notFoundRedirect) {
	        matched = this._recognizer.recognize(path);
	        if (!matched) {
	          this.replace(this._notFoundRedirect);
	          return true;
	        }
	      }
	    };
	
	    /**
	     * Match a URL path and set the route context on vm,
	     * triggering view updates.
	     *
	     * @param {String} path
	     * @param {Object} [state]
	     * @param {String} [anchor]
	     */
	
	    Router.prototype._match = function _match(path, state, anchor) {
	      var _this3 = this;
	
	      if (this._checkGuard(path)) {
	        return;
	      }
	
	      var currentRoute = this._currentRoute;
	      var currentTransition = this._currentTransition;
	
	      if (currentTransition) {
	        if (currentTransition.to.path === path) {
	          // do nothing if we have an active transition going to the same path
	          return;
	        } else if (currentRoute.path === path) {
	          // We are going to the same path, but we also have an ongoing but
	          // not-yet-validated transition. Abort that transition and reset to
	          // prev transition.
	          currentTransition.aborted = true;
	          this._currentTransition = this._prevTransition;
	          return;
	        } else {
	          // going to a totally different path. abort ongoing transition.
	          currentTransition.aborted = true;
	        }
	      }
	
	      // construct new route and transition context
	      var route = new Route(path, this);
	      var transition = new RouteTransition(this, route, currentRoute);
	
	      // current transition is updated right now.
	      // however, current route will only be updated after the transition has
	      // been validated.
	      this._prevTransition = currentTransition;
	      this._currentTransition = transition;
	
	      if (!this.app) {
	        (function () {
	          // initial render
	          var router = _this3;
	          _this3.app = new _this3._appConstructor({
	            el: _this3._appContainer,
	            created: function created() {
	              this.$router = router;
	            },
	            _meta: {
	              $route: route
	            }
	          });
	        })();
	      }
	
	      // check global before hook
	      var beforeHooks = this._beforeEachHooks;
	      var startTransition = function startTransition() {
	        transition.start(function () {
	          _this3._postTransition(route, state, anchor);
	        });
	      };
	
	      if (beforeHooks.length) {
	        transition.runQueue(beforeHooks, function (hook, _, next) {
	          if (transition === _this3._currentTransition) {
	            transition.callHook(hook, null, next, {
	              expectBoolean: true
	            });
	          }
	        }, startTransition);
	      } else {
	        startTransition();
	      }
	
	      if (!this._rendered && this._startCb) {
	        this._startCb.call(null);
	      }
	
	      // HACK:
	      // set rendered to true after the transition start, so
	      // that components that are acitvated synchronously know
	      // whether it is the initial render.
	      this._rendered = true;
	    };
	
	    /**
	     * Set current to the new transition.
	     * This is called by the transition object when the
	     * validation of a route has succeeded.
	     *
	     * @param {Transition} transition
	     */
	
	    Router.prototype._onTransitionValidated = function _onTransitionValidated(transition) {
	      // set current route
	      var route = this._currentRoute = transition.to;
	      // update route context for all children
	      if (this.app.$route !== route) {
	        this.app.$route = route;
	        this._children.forEach(function (child) {
	          child.$route = route;
	        });
	      }
	      // call global after hook
	      if (this._afterEachHooks.length) {
	        this._afterEachHooks.forEach(function (hook) {
	          return hook.call(null, {
	            to: transition.to,
	            from: transition.from
	          });
	        });
	      }
	      this._currentTransition.done = true;
	    };
	
	    /**
	     * Handle stuff after the transition.
	     *
	     * @param {Route} route
	     * @param {Object} [state]
	     * @param {String} [anchor]
	     */
	
	    Router.prototype._postTransition = function _postTransition(route, state, anchor) {
	      // handle scroll positions
	      // saved scroll positions take priority
	      // then we check if the path has an anchor
	      var pos = state && state.pos;
	      if (pos && this._saveScrollPosition) {
	        Vue.nextTick(function () {
	          window.scrollTo(pos.x, pos.y);
	        });
	      } else if (anchor) {
	        Vue.nextTick(function () {
	          var el = document.getElementById(anchor.slice(1));
	          if (el) {
	            window.scrollTo(window.scrollX, el.offsetTop);
	          }
	        });
	      }
	    };
	
	    return Router;
	  })();
	
	  function guardComponent(path, handler) {
	    var comp = handler.component;
	    if (Vue.util.isPlainObject(comp)) {
	      comp = handler.component = Vue.extend(comp);
	    }
	    /* istanbul ignore if */
	    if (typeof comp !== 'function') {
	      handler.component = null;
	      warn$1('invalid component for route "' + path + '".');
	    }
	  }
	
	  /* Installation */
	
	  Router.installed = false;
	
	  /**
	   * Installation interface.
	   * Install the necessary directives.
	   */
	
	  Router.install = function (externalVue) {
	    /* istanbul ignore if */
	    if (Router.installed) {
	      warn$1('already installed.');
	      return;
	    }
	    Vue = externalVue;
	    applyOverride(Vue);
	    View(Vue);
	    Link(Vue);
	    exports$1.Vue = Vue;
	    Router.installed = true;
	  };
	
	  // auto install
	  /* istanbul ignore if */
	  if (typeof window !== 'undefined' && window.Vue) {
	    window.Vue.use(Router);
	  }
	
	  return Router;
	
	}));

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Vue) {'use strict';
	
	var _require = __webpack_require__(13);
	
	var reqwest = _require.reqwest;
	var utils = _require.utils;
	
	var Toast = __webpack_require__(91);
	var PageHead = __webpack_require__(94);
	var PageFoot = __webpack_require__(96);
	
	var Layout = Vue.extend({
	  template: __webpack_require__(98),
	
	  data: function data() {
	    return {};
	  },
	
	  methods: {},
	  computed: {},
	  ready: function ready() {},
	
	  components: {
	    PageHead: PageHead,
	    PageFoot: PageFoot
	  }
	});
	
	module.exports = Layout;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Vue) {'use strict';
	
	var _classCallCheck2 = __webpack_require__(81);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(82);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	__webpack_require__(92);
	
	var ToastComp = {
	  data: function data() {
	    return {
	      content: ''
	    };
	  },
	
	  template: '\n  <div class="toast-container" transition="toast-anim">\n    <div class="content">{{content}}</div>\n  </div>\n  '
	};
	
	var Toast = function () {
	  function Toast() {
	    (0, _classCallCheck3.default)(this, Toast);
	  }
	
	  (0, _createClass3.default)(Toast, [{
	    key: 'show',
	    value: function show(msg) {
	      var comp = new Vue(ToastComp);
	      comp.content = msg;
	      comp.$mount().$appendTo('body');
	      setTimeout(function () {
	        comp.$destroy(true);
	      }, 2000);
	    }
	  }]);
	  return Toast;
	}();
	
	module.exports = new Toast();
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(93);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(12)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js?sourceMap&-autoprefixer!./../../../node_modules/postcss-loader/index.js!./../../../node_modules/resolve-url-loader/index.js?sourceMap!./../../../node_modules/sass-loader/index.js?sourceMap!./toast.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js?sourceMap&-autoprefixer!./../../../node_modules/postcss-loader/index.js!./../../../node_modules/resolve-url-loader/index.js?sourceMap!./../../../node_modules/sass-loader/index.js?sourceMap!./toast.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(11)();
	// imports
	
	
	// module
	exports.push([module.id, ".toast-container {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n          justify-content: center;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n          align-items: center;\n}\n\n.toast-container .content {\n  font-size: 0.875rem;\n  padding: 0.625rem;\n  border-radius: 5px;\n  background: #000;\n  color: #fff;\n  max-width: 90%;\n}\n\n.toast-anim-transition {\n  -webkit-transition: all .3s ease;\n  transition: all .3s ease;\n  opacity: 1;\n}\n\n.toast-anim-enter,\n.toast-anim-leave {\n  opacity: 0;\n}\n\n", "", {"version":3,"sources":["/./src/components/toast/toast.scss"],"names":[],"mappings":"AAEA;EACE,gBAAA;EACA,OAAA;EACA,SAAA;EACA,UAAA;EACA,QAAA;EACA,qBAAA;EAAA,sBAAA;EAAA,cAAA;EACA,yBAAA;EAAA,gCAAA;UAAA,wBAAA;EACA,0BAAA;EAAA,4BAAA;UAAA,oBAAA;CADD;;AAPD;EAYI,oBAAA;EACA,kBAAA;EACA,mBAAA;EACA,iBAAA;EACA,YAAA;EACA,eAAA;CADH;;AAKD;EACE,iCAAA;EAAA,yBAAA;EACA,WAAA;CAFD;;AAKD;;EACE,WAAA;CADD","file":"toast.scss","sourcesContent":["@import \"~@common/_common.scss\";\n\n.toast-container {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n\n  .content {\n    font-size: rem(14);\n    padding: rem(10);\n    border-radius: 5px;\n    background: #000;\n    color: #fff;\n    max-width: 90%;\n  }\n}\n\n.toast-anim-transition {\n  transition: all .3s ease;\n  opacity: 1;\n}\n\n.toast-anim-enter, .toast-anim-leave {\n  opacity: 0;\n}\n\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Vue) {'use strict';
	
	var _require = __webpack_require__(13);
	
	var reqwest = _require.reqwest;
	var utils = _require.utils;
	
	var Toast = __webpack_require__(91);
	
	var PageHead = Vue.component('page-head', {
	  template: __webpack_require__(95),
	  data: function data() {
	    return {
	      navs: [{
	        name: "最新文章",
	        link: "/index/news"
	      }, {
	        name: "哲学书平",
	        link: "/index/book"
	      }, {
	        name: "名家访谈",
	        link: "/index/expert"
	      }, {
	        name: "学子问答",
	        link: "/index/qa"
	      }, {
	        name: "在线投稿",
	        link: "/index/contribute"
	      }, {
	        name: "关于我们",
	        link: "/index/about"
	      }, {
	        name: "捐赠",
	        link: "/index/donate"
	      }]
	    };
	  },
	
	  methods: {},
	  computed: {},
	  ready: function ready() {}
	});
	
	module.exports = PageHead;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 95 */
/***/ function(module, exports) {

	module.exports = "<header id=\"header\" role=\"banner\">\n  <nav id=\"nav\" role=\"navigation\" style=\"\n    padding: 200px 0 0 0;\">\n    <ul class=\"sitenav depth_1\">\n      <li v-for=\"(index,nav) in navs\" :class=\"{last:index==navs.length-1,first:index==0}\" >\n        <a v-link=\"nav.link\" >{{nav.name}}</a>\n      </li>\n    </ul>\n  </nav>\n</header>";

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Vue) {'use strict';
	
	var _require = __webpack_require__(13);
	
	var reqwest = _require.reqwest;
	var utils = _require.utils;
	
	var Toast = __webpack_require__(91);
	
	var PageFoot = Vue.component('page-foot', {
	  template: __webpack_require__(97),
	  data: function data() {
	    return {};
	  },
	
	  methods: {},
	  computed: {},
	  ready: function ready() {}
	});
	
	module.exports = PageFoot;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 97 */
/***/ function(module, exports) {

	module.exports = "<footer id=\"footer\" class=\"vcard\" role=\"contentinfo\">\n  <p id=\"copyright\" class=\"url fn org\">\n  <a href=\"http://www.zhexueshuping.com/\">Copyright</a> © 2016 <a href=\"/\" id=\"site-link\" class=\"url fn prg\">哲学书评</a> <br>\n  <a href=\"http://www.miitbeian.gov.cn\">苏ICP备16021344号</a>\n  </p>\n  <a href=\"https://site.douban.com/274863/widget/notes/191688682/note/558693421/\" id=\"mark\"><img src=\"http://7xu36i.com1.z0.glb.clouddn.com/%E4%BA%8C%E7%BB%B4%E7%A0%81.jpg\" class=\"ndmark\" alt=\"二维码\"></a>\n</footer>";

/***/ },
/* 98 */
/***/ function(module, exports) {

	module.exports = "<div id=\"wrapper\">\n  <page-head></page-head>\n  <div id=\"content\" role=\"main\">\n    <router-view></router-view>\n  </div>\n  <page-foot></page-foot>\n</div>";

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Vue) {'use strict';
	
	var _require = __webpack_require__(13);
	
	var reqwest = _require.reqwest;
	var utils = _require.utils;
	
	var Toast = __webpack_require__(91);
	
	var Sign = Vue.extend({
	  template: __webpack_require__(100),
	
	  data: function data() {
	    return {
	      name: '',
	      password: '',
	      check: ''
	    };
	  },
	
	
	  methods: {
	    sign: function sign() {
	      var _this = this;
	      if (!this.validate()) {
	        return;
	      }
	      var name = this.name;
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
	        setTimeout(function () {
	          _this.$router.go('/index/login');
	        }, 2000);
	      }).catch(function (e) {
	        console.error(e);
	        Toast.show("注册失败");
	      });
	    },
	
	    validate: function validate() {
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
	    user: function user() {
	      return {
	        name: this.name,
	        password: this.password
	      };
	    }
	  }
	});
	
	module.exports = Sign;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 100 */
/***/ function(module, exports) {

	module.exports = "<div>\n  <form  class=\"form\">\n    <div><label>姓名</label><input v-model=\"name\" type=\"text\" /></div>\n    <div><label>密码</label><input v-model=\"password\" type=\"password\" /></div>\n    <div><label>确认密码</label><input v-model=\"check\" type=\"password\" /></div>\n    <button @click=\"sign()\">注册</button>\n  </form>\n</div>";

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Vue) {'use strict';
	
	var _require = __webpack_require__(13);
	
	var reqwest = _require.reqwest;
	var utils = _require.utils;
	
	var Toast = __webpack_require__(91);
	
	var Login = Vue.extend({
	  template: __webpack_require__(102),
	
	  data: function data() {
	    return {
	      name: '',
	      password: ''
	    };
	  },
	
	  methods: {
	    login: function login() {
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
	        setTimeout(function () {
	          _this.$router.go('/index/news');
	        }, 2000);
	      }).catch(function (e) {
	        console.error(e);
	        Toast.show("登陆失败");
	      });
	    },
	
	    validate: function validate() {
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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 102 */
/***/ function(module, exports) {

	module.exports = "<div>\n  <form class=\"form\">\n    <div><label>姓名</label><input v-model=\"name\" type=\"text\" /></div>\n    <div><label>密码</label><input v-model=\"password\" type=\"password\" /></div>\n    <button @click=\"login()\">登陆</button>\n  </form>\n</div>";

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Vue) {'use strict';
	
	var _require = __webpack_require__(13);
	
	var reqwest = _require.reqwest;
	var utils = _require.utils;
	
	var Toast = __webpack_require__(91);
	var PageSide = __webpack_require__(104);
	var Abstract = __webpack_require__(108);
	var Share = __webpack_require__(110);
	
	var News = Vue.extend({
	  template: __webpack_require__(112),
	
	  data: function data() {
	    return {
	      articles: [],
	      sideList: [{
	        "name": "[古希腊]柏拉图和亚里士多德",
	        "img": "http://7xu36i.com1.z0.glb.clouddn.com/%E6%9F%8F%E6%8B%89%E5%9B%BE%E4%B8%8E%E4%BA%9A%E9%87%8C%E5%A3%AB%E5%A4%9A%E5%BE%B7.jpg"
	      }, {
	        "name": "[法]笛卡尔，1596年 - 1650年",
	        "img": "http://7xu36i.com1.z0.glb.clouddn.com/%E7%AC%9B%E5%8D%A1%E5%B0%94.png"
	      }, {
	        "name": "[德]康德，1724年 - 1804年",
	        "img": "http://7xu36i.com1.z0.glb.clouddn.com/%E5%BA%B7%E5%BE%B7.jpg"
	      }, {
	        "name": "[德]黑格尔，1770年 - 1831年",
	        "img": "http://7xu36i.com1.z0.glb.clouddn.com/%E9%BB%91%E6%A0%BC%E5%B0%94.jpg"
	      }],
	      count: 0
	    };
	  },
	
	  methods: {},
	  ready: function ready() {
	    var _this = this;
	    reqwest({
	      url: utils.APIPrefix() + 'articles/last_ten',
	      method: 'GET'
	    }).then(function (resp) {
	      _this.articles = resp.articles;
	    }).catch(function (e) {
	      console.error(e);
	      Toast.show("获取页面信息失败，请刷新！");
	    });
	    setTimeout(function () {}, 2000);
	  },
	
	  components: {
	    PageSide: PageSide,
	    Abstract: Abstract,
	    Share: Share
	  }
	});
	
	module.exports = News;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Vue) {'use strict';
	
	var _require = __webpack_require__(13);
	
	var reqwest = _require.reqwest;
	var utils = _require.utils;
	
	var Toast = __webpack_require__(91);
	
	var SearchArea = __webpack_require__(105);
	
	var PageSide = Vue.component('page-side', {
	  template: __webpack_require__(107),
	  props: {
	    list: {
	      default: []
	    }
	  },
	  data: function data() {
	    return {};
	  },
	
	  methods: {},
	  computed: {},
	  ready: function ready() {},
	
	  components: {
	    SearchArea: SearchArea
	  }
	});
	
	module.exports = PageSide;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Vue) {'use strict';
	
	var _require = __webpack_require__(13);
	
	var reqwest = _require.reqwest;
	var utils = _require.utils;
	
	var Toast = __webpack_require__(91);
	
	var SearchArea = Vue.component('search-area', {
	  template: __webpack_require__(106),
	  props: {
	    action: {
	      default: ''
	    }
	  },
	  data: function data() {
	    return {
	      types: [{
	        "name": "作者",
	        "value": "search_authors"
	      }, {
	        "name": "书名",
	        "value": "search_title"
	      }],
	      search: {
	        type: "search_authors",
	        key: ''
	      }
	    };
	  },
	
	  methods: {
	    submit: function submit() {
	      return;
	    }
	  },
	  computed: {},
	  ready: function ready() {}
	});
	
	module.exports = SearchArea;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 106 */
/***/ function(module, exports) {

	module.exports = "<div>\n  <div class=\"search-area\">\n    <input type=\"search\" class=\"search-q\" placeholder=\"搜索\" v-model=\"search.key\" />\n    <button class=\"search-button\" @click=\"submit\">搜索</button>\n  </div>\n  <select class=\"search-key\" v-model=\"search.type\">\n    <option v-for=\"type in types\" :value=\"type.value\">{{type.name}}</option>\n  </select>\n</div>";

/***/ },
/* 107 */
/***/ function(module, exports) {

	module.exports = "<div class=\"page-side\">\n  <search-area></search-area>\n  <ul class=\"side-list\">\n    <li v-for=\"item in list\">\n      <img :src=\"item.img\" />\n      <p>{{item.name}}</p>\n    </li>\n  </ul>\n</div>";

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Vue) {'use strict';
	
	var _require = __webpack_require__(13);
	
	var reqwest = _require.reqwest;
	var utils = _require.utils;
	
	var Toast = __webpack_require__(91);
	
	var Abstract = Vue.extend({
	  template: __webpack_require__(109),
	  props: {
	    article: {
	      default: {}
	    }
	  },
	  data: function data() {
	    return {};
	  },
	
	  methods: {},
	  ready: function ready() {}
	});
	
	module.exports = Abstract;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 109 */
/***/ function(module, exports) {

	module.exports = "<article class=\"hentry summary\">\n  <header>\n    <hgroup>\n      <h2 class=\"author\">{{article.author}}</h2>\n      <h1 class=\"entry-title\"><a v-link=\"{path:'/index/article/'+article.id}\">{{article.title}}</a></h1>\n      <h3 class=\"publisher\">{{article.sub_title}}</h3>\n      <h4 class=\"reviewers\"><span class=\"reviewed-by\"></span>{{article.reviewer}}</h4>\n    </hgroup>\n  </header>\n  <div class=\"edition\">{{article.published_at}}</div>\n</article>";

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Vue) {'use strict';
	
	var _require = __webpack_require__(13);
	
	var reqwest = _require.reqwest;
	var utils = _require.utils;
	
	var Toast = __webpack_require__(91);
	
	var Share = Vue.component('share', {
	  template: __webpack_require__(111),
	  props: {
	    title: {
	      default: "哲学书评"
	    },
	    desc: {
	      default: "哲学书评主要关注对汉语哲学界出版的新书、重要文章的评论，以及对学术名家的访谈。欢迎关注我们并向我们投稿！"
	    }
	  },
	  data: function data() {
	    return {};
	  },
	
	  methods: {},
	  computed: {},
	  ready: function ready() {
	    var _this = this;
	    var interval = setInterval(function () {
	      if (window.bShare) {
	        window.bShare.addEntry({
	          title: _this.title,
	          url: location.href,
	          summary: _this.desc
	        });
	        window.bShare.init();
	        clearInterval(interval);
	      }
	    }, 200);
	  }
	});
	
	module.exports = Share;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 111 */
/***/ function(module, exports) {

	module.exports = "<div>\n  <div class=\"bshare-custom\"><a title=\"分享到QQ空间\" class=\"bshare-qzone\"></a><a title=\"分享到新浪微博\" class=\"bshare-sinaminiblog\"></a><a title=\"分享到人人网\" class=\"bshare-renren\"></a><a title=\"分享到腾讯微博\" class=\"bshare-qqmb\"></a><a title=\"分享到网易微博\" class=\"bshare-neteasemb\"></a><a title=\"更多平台\" class=\"bshare-more bshare-more-icon more-style-addthis\"></a><span class=\"BSHARE_COUNT bshare-share-count\">0</span></div><script type=\"text/javascript\" charset=\"utf-8\" src=\"http://static.bshare.cn/b/buttonLite.js#style=-1&amp;uuid=&amp;pophcol=3&amp;lang=zh\"></script><script type=\"text/javascript\" charset=\"utf-8\" src=\"http://static.bshare.cn/b/bshareC0.js\"></script>\n  <script type=\"text/javascript\" charset=\"utf-8\">\n    bShare.init();\n  </script>\n</div>";

/***/ },
/* 112 */
/***/ function(module, exports) {

	module.exports = "<div class=\"mainpage\">\n  <div class=\"mainleft\">\n    <h2 class=\"most-recent\">最新文章</h2>\n    <abstract v-for=\"article in articles\" :article=\"article\"></abstract>\n    <share></share>\n  </div>\n  <div class=\"mainright\">\n    <page-side :list=\"sideList\"></page-side>\n  </div>\n</div>";

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Vue) {'use strict';
	
	var _require = __webpack_require__(13);
	
	var reqwest = _require.reqwest;
	var utils = _require.utils;
	
	var Toast = __webpack_require__(91);
	var PageSide = __webpack_require__(104);
	var Abstract = __webpack_require__(108);
	var Share = __webpack_require__(110);
	
	var Book = Vue.extend({
	  template: __webpack_require__(114),
	
	  data: function data() {
	    return {
	      articles: [],
	      sideList: [{
	        "name": "[德]尼采，1844年－1900年",
	        "img": "http://7xu36i.com1.z0.glb.clouddn.com/%E5%B0%BC%E9%87%87.jpg"
	      }, {
	        "name": "[美]杜威，1859年－1952年",
	        "img": "http://7xu36i.com1.z0.glb.clouddn.com/%E6%9D%9C%E5%A8%81.jpg"
	      }, {
	        "name": "[美]罗蒂，1931年－2007年",
	        "img": "http://7xu36i.com1.z0.glb.clouddn.com/%E7%BD%97%E8%92%82.jpg"
	      }, {
	        "name": "[美]布兰顿，1950年－",
	        "img": "http://7xu36i.com1.z0.glb.clouddn.com/%E5%B8%83%E5%85%B0%E9%A1%BF.jpg"
	      }],
	      count: 0
	    };
	  },
	
	  methods: {},
	  ready: function ready() {
	    var _this = this;
	    reqwest({
	      url: utils.APIPrefix() + 'articles?channel=哲学书评&page=1&per_page=10',
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
	
	module.exports = Book;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 114 */
/***/ function(module, exports) {

	module.exports = "<div class=\"mainpage\">\n  <div class=\"mainleft\">\n    <h2 class=\"most-recent\">哲学书评</h2>\n    <abstract v-for=\"article in articles\" :article=\"article\"></abstract>\n    <share></share>\n  </div>\n  <div class=\"mainright\">\n    <page-side :list=\"sideList\"></page-side>\n  </div>\n</div>";

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Vue) {'use strict';
	
	var _require = __webpack_require__(13);
	
	var reqwest = _require.reqwest;
	var utils = _require.utils;
	
	var Toast = __webpack_require__(91);
	var PageSide = __webpack_require__(104);
	var Abstract = __webpack_require__(108);
	var Share = __webpack_require__(110);
	
	var Expert = Vue.extend({
	  template: __webpack_require__(116),
	
	  data: function data() {
	    return {
	      articles: [],
	      sideList: [{
	        "name": "[美籍华裔]成中英，夏威夷大学教授",
	        "img": "http://7xu36i.com1.z0.glb.clouddn.com/%E6%88%90%E4%B8%AD%E8%8B%B1.jpg"
	      }, {
	        "name": "杜维明，哈佛大学教授",
	        "img": "http://7xu36i.com1.z0.glb.clouddn.com/%E6%9D%9C%E7%BB%B4%E6%98%8E.jpg"
	      }, {
	        "name": "刘放桐，复旦大学教授",
	        "img": "http://7xu36i.com1.z0.glb.clouddn.com/%E5%88%98%E6%94%BE%E6%A1%90.jpg"
	      }, {
	        "name": "叶秀山，中国社会科学院教授",
	        "img": "http://7xu36i.com1.z0.glb.clouddn.com/%E5%8F%B6%E7%A7%80%E5%B1%B1.jpg"
	      }],
	      count: 0
	    };
	  },
	
	  methods: {},
	  ready: function ready() {
	    var _this = this;
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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 116 */
/***/ function(module, exports) {

	module.exports = "<div class=\"mainpage\">\n  <div class=\"mainleft\">\n    <h2 class=\"most-recent\">名家访谈</h2>\n    <abstract v-for=\"article in articles\" :article=\"article\"></abstract>\n    <share></share>\n  </div>\n  <div class=\"mainright\">\n    <page-side :list=\"sideList\"></page-side>\n  </div>\n</div>";

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Vue) {'use strict';
	
	var _require = __webpack_require__(13);
	
	var reqwest = _require.reqwest;
	var utils = _require.utils;
	
	var Toast = __webpack_require__(91);
	var PageSide = __webpack_require__(104);
	var Abstract = __webpack_require__(108);
	var Share = __webpack_require__(110);
	
	var Qa = Vue.extend({
	  template: __webpack_require__(118),
	
	  data: function data() {
	    return {
	      articles: [],
	      sideList: [{
	        "name": "[德]尼采，1844年－1900年",
	        "img": "http://7xu36i.com1.z0.glb.clouddn.com/%E5%B0%BC%E9%87%87.jpg"
	      }, {
	        "name": "[美]杜威，1859年－1952年",
	        "img": "http://7xu36i.com1.z0.glb.clouddn.com/%E6%9D%9C%E5%A8%81.jpg"
	      }, {
	        "name": "[美]罗蒂，1931年－2007年",
	        "img": "http://7xu36i.com1.z0.glb.clouddn.com/%E7%BD%97%E8%92%82.jpg"
	      }, {
	        "name": "[美]布兰顿，1950年－",
	        "img": "http://7xu36i.com1.z0.glb.clouddn.com/%E5%B8%83%E5%85%B0%E9%A1%BF.jpg"
	      }],
	      count: 0
	    };
	  },
	
	  methods: {},
	  ready: function ready() {
	    var _this = this;
	    reqwest({
	      url: utils.APIPrefix() + 'articles?channel=学子问答&page=1&per_page=10',
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
	
	module.exports = Qa;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 118 */
/***/ function(module, exports) {

	module.exports = "<div class=\"mainpage\">\n  <div class=\"mainleft\">\n    <h2 class=\"most-recent\">学子问答</h2>\n    <abstract v-for=\"article in articles\" :article=\"article\"></abstract>\n    <share></share>\n  </div>\n  <div class=\"mainright\">\n    <page-side :list=\"sideList\"></page-side>\n  </div>\n</div>";

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Vue) {'use strict';
	
	var _require = __webpack_require__(13);
	
	var reqwest = _require.reqwest;
	var utils = _require.utils;
	
	var Toast = __webpack_require__(91);
	
	var Contribute = Vue.extend({
	  template: __webpack_require__(120),
	
	  data: function data() {
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
	    };
	  },
	
	  methods: {
	    submit: function submit() {
	      var _this = this;
	      if (!this.name || !this.token) {
	        Toast.show('请先登录');
	        setTimeout(function () {
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
	  ready: function ready() {}
	});
	
	module.exports = Contribute;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 120 */
/***/ function(module, exports) {

	module.exports = "<form class=\"contri\">\n  <ul>\n    <li>\n      <h2>原书作者</h2>\n      <input type=\"text\" v-model='article.author' />\n      <span>书评请填所评著作作者姓名，访谈请填“单位、被访谈人姓名与职称”，示例：“XX大学哲学系王小明教授专访”，学子问答请填写学子姓名</span>\n    </li>\n    <li>\n      <h2>标题</h2>\n      <input type=\"text\" v-model='article.title' />\n      <span>书评为所评著作名称，示例：《超越经验主义与理性主义》，包含书名号；访谈为访谈主题；学子问答为问答中标志性的一句话或座右铭</span>\n    </li>\n    <li>\n      <h2>书籍基本参数</h2>\n      <textarea v-model='article.sub_title' >\n      </textarea>\n      <span>书评请填写所评书籍详细参数，示例：陈亚军：《超越经验主义与理性主义》，南京：江苏人民出版社，2014年12月，279页，39元(平装)；访谈请填写被访谈人简介，包括出生日期，研究方向等基本情况；学子问答请填写学子简介</span>\n    </li>\n    <li>\n      <h2>书评撰稿人</h2>\n      <input type=\"text\" v-model='article.reviewer' />\n      <span>书评请填写“书评人 | 撰稿人姓名，工作单位与职称”，例如“书评人 | 小明，南京大学哲学系博士候选人”，访谈请填写“访谈人 | 撰稿人姓名，工作单位与职称”；学子问答请填写“访谈人 | 撰稿人姓名，工作单位与职称”</span>\n    </li>\n    <li>\n      <h2>投稿方向</h2>\n      <select v-model='article.category'>\n        <option value=\"英美哲学\">英美哲学</option>\n        <option value=\"欧陆哲学\">欧陆哲学</option>\n        <option value=\"中世纪古希腊哲学\">中世纪古希腊哲学</option>\n        <option value=\"宗教哲学\">宗教哲学</option>\n        <option value=\"马克思主义哲学\">马克思主义哲学</option>\n        <option value=\"政治和社会哲学\">政治和社会哲学</option>\n        <option value=\"中国哲学\">中国哲学</option>\n        <option value=\"伦理学\">伦理学</option>\n        <option value=\"比较哲学\">比较哲学</option>\n        <option value=\"艺术哲学\">艺术哲学</option>\n        <option value=\"其他\">其他</option>\n        <option value=\"名家访谈\">名家访谈</option>\n        <option value=\"学子问答\">学子问答</option>\n      </select>\n      <span>\n        学术书评需紧扣所评书籍、条理清晰、论述严密、行文晓畅，3000字左右为宜，文章建议布局：书籍总评、每一章概述（或按主题概述，可对思路、观点以及创新之处做出总结和论述）以及书籍存在的问题或不足之处。请采用文中注，避免脚注，所有论述均在正文中完成。如有参考文献，请采用APA格式排版好放置在正文尾部。访谈请保证一定的学术性，并添加被访谈人与访谈人简介，在正文前部。如有特殊情况说明或背景交代，请放置在简介与正文之间。段前不缩进，段与段之间不空行。\n      </span>\n    </li>\n    <li>\n      <h2>正文</h2>\n      <textarea id=\"TextArea1\" cols=\"20\" rows=\"2\" class=\"ckeditor\"></textarea>\n    </li>\n    <li>\n      <h2>联系方式</h2>\n      <input type=\"text\" v-model='article.contact' />\n      <span>请留下邮箱、手机号等常用联系方式，以便取得联系</span>\n    </li>\n    <li>\n      <h2>备注</h2>\n      <textarea v-model='article.remark' >\n      </textarea>\n      <span>如有特殊情况，请说明；如无，则可不填</span>\n    </li>\n  </ul>\n  <button @click=\"submit\">确认投稿</button>\n</form>\n\n\n\n";

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Vue) {'use strict';
	
	var _require = __webpack_require__(13);
	
	var reqwest = _require.reqwest;
	var utils = _require.utils;
	
	var Toast = __webpack_require__(91);
	var PageSide = __webpack_require__(104);
	var Abstract = __webpack_require__(108);
	var Share = __webpack_require__(110);
	
	var About = Vue.extend({
	  template: __webpack_require__(122),
	
	  data: function data() {
	    return {
	      sideList: [{
	        "name": "老子, 春秋，生卒年不详",
	        "img": "http://7xu36i.com1.z0.glb.clouddn.com/%E8%80%81%E5%AD%90.jpg"
	      }, {
	        "name": "孔子，约前551 - 约前479年",
	        "img": "http://7xu36i.com1.z0.glb.clouddn.com/%E5%AD%94%E5%AD%90.jpg"
	      }],
	      count: 0
	    };
	  },
	
	  methods: {},
	  ready: function ready() {},
	
	  components: {
	    PageSide: PageSide,
	    Abstract: Abstract,
	    Share: Share
	  }
	});
	
	module.exports = About;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 122 */
/***/ function(module, exports) {

	module.exports = "<div class=\"mainpage\">\n  <div class=\"mainleft\">\n    <p>《哲学书评》成立于2016年4月，主要关注对汉语哲学界出版的新书、重要文章的评论，我们亦接受对国外出版的书籍的评论以及对学术名家的访谈。我们希望通过我们的努力能够为大家传递学术前沿思想，促进哲学业内思想交流，同时对学术环境的积淀与成熟学术系统的建构尽绵薄之力。 </p>\n    <p>本站所发文章均获得投稿作者本人授权，可在《哲学书评》其他各平台上发布。文章可自由转载与引用，转载与引用请注明出处以及作者的各项信息。所发稿件最终版权归《哲学书评》和作者所有。 </p>\n    <p>投稿请登录“投稿系统”按要求操作，接受与退稿均回复。我们尤为青睐紧扣所评书籍、条理清晰、论述严密、行文晓畅，3000字左右篇幅的学术书评。书评建议包含但不限于如下三个部分：书籍总评、每章概述（或按主题概述，可对思路、观点以及创新之处做出总结和论述），以及书籍存在的问题或不足之处。 </p>\n    <p>来稿均默认允许我们在各个平台上发布，并接受其他方可能的转载、引用等传播行为。来稿一经录用，在有资助的情况下即付稿酬，稿酬一般为所评书籍当当网定价。</p>\n    <p>团队成员均为义务性劳动，资助金充足时，会设有组稿补贴。如果您对我们的事业有兴趣，并有意加入我们，请发简历至：zhexueshuping@sina.com。目前我们接受“审稿编辑”一职的申请。我们期待您的加入！ </p>\n    <p>欢迎关注我们其他平台：</br>\n    微信公众号：zhexueshuping</br>\n    <a href=\"http://www.zhihu.com/people/zhexueshuping\">知乎专栏</a></br>\n    <a href=\"https://site.douban.com/274863/\">豆瓣小站</a></p>\n    <share></share>\n  </div>\n  <div class=\"mainright\">\n    <page-side :list=\"sideList\"></page-side>\n  </div>\n</div>";

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Vue) {'use strict';
	
	var _require = __webpack_require__(13);
	
	var reqwest = _require.reqwest;
	var utils = _require.utils;
	
	var Toast = __webpack_require__(91);
	var SearchArea = __webpack_require__(105);
	
	var Donate = Vue.extend({
	  template: __webpack_require__(124),
	
	  data: function data() {
	    return {};
	  },
	
	  methods: {},
	  ready: function ready() {},
	
	  components: {
	    SearchArea: SearchArea
	  }
	});
	
	module.exports = Donate;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 124 */
/***/ function(module, exports) {

	module.exports = "<div class='contri'>\n  <search-area></search-area>\n  <h2>捐助《哲学书评》的意义</h2>\n  <p>写作哲学书评在国外学界是一件蔚然成风的事情，国外的学生往往以写作哲学书评作为自己的学术起点。在写作时，作者可以认真、细致地读一本书，并带着批判性的眼光阅读著作，由此逐步形成自己的思维方式。反观国内，学生往往有着在有级别的刊物上发文的硬性指标，即便在少数没有指标的高校，学生也会因为考虑到未来的发展而功利性地写作，这导致了种种学术问题。</p>\n  <p>写作哲学书评不仅对于青年学生、学者有着重要的意义，它还有助于传递前沿动态、促进思想交流、帮助建构一个成熟的学术系统。国人往往对自己学术同仁的著作缺乏关注，一味地追求国外新颖的文献，而忽略自身学术环境的累积。通过哲学书评，我们会形成对彼此思想最基本的关注、认知和尊重。</p>\n  <p>如果您代表相关机构、从事与哲学相关的工作，或是哲学爱好者，或只是热心人，希望您在有经济基础的情况下，予以我们任意金额的资助，我们不胜感激。</p>\n  <h2>我们为什么寻求捐助</h2>\n  <p>我们希望通过予以作者一定金额的稿费的方式鼓励作者为我们提供稿件。同时，支付稿酬，也是对作者劳动基本的尊重。另外，我们平时的网站管理，以及其他与哲学相关的活动都需要经费支持。</p>\n  <h5>资金用途</h5>\n  <p>我们将筹得的资金基本用于稿酬的发放，在资金充足的情况下，印刷一定数量的《哲学书评》（不定期刊）赠送作者。</p>\n  <p>稿酬发放规则：<br/>\n  1.一般情况下，稿费为书评人所评的书籍定价；<br/>\n  2.69元封顶； <br/>\n  3.对英文书籍的书评统一稿费为50元。</p>\n  <p>在资助金充足的情况下会适当调高稿费。相反，如无资助时，则无稿费，敬请谅解。</p>\n  <h2>捐助方式</h2>\n  <p>1.您可以直接支付宝转账至：18251930226， 请说明您的转账用于资助哲学书评；如果您愿意，请留下您的基本信息；<br/>\n  2.您可以发邮件至：zhexueshuping@sina.com, 我们安排人与您主动取得联系，洽谈具体事宜；<br/>\n  3.您可以加主编微信KingChou0528（加好友时，请备注，“资助哲学书评”，与主编直接商谈）。</p>\n  <h5>我们的回报</h5>\n  <p>如果您愿意，我们将以以下方式回馈您：<br/>\n  1. 如果您资助金额较小，我们将您列入致谢名单；<br/>\n  2. 如果您资助金额在500元及以上，我们将以您的名义设立专项稿费； <br/>\n  3. 如果您是企业、机构资助者，我们将在我们各种平台上为您提供恰当的宣传或进行恰当的合作。</p>\n</div>";

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Vue) {'use strict';
	
	var _require = __webpack_require__(13);
	
	var reqwest = _require.reqwest;
	var utils = _require.utils;
	
	var Toast = __webpack_require__(91);
	
	var Comment = Vue.extend({
	  template: __webpack_require__(126),
	
	  data: function data() {
	    return {
	      aid: this.$route.params.id,
	      comment: '',
	      name: localStorage.getItem('NAME'),
	      token: localStorage.getItem('TOKEN')
	    };
	  },
	
	  methods: {
	    submit: function submit() {
	      if (!this.token) {
	        Toast.show('请先登录');
	        setTimeout(function () {
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
	        setTimeout(function () {
	          location.reload();
	        }, 2000);
	      }).catch(function (e) {
	        console.error(e);
	        Toast.show("发布评论失败");
	      });
	    }
	  },
	  ready: function ready() {
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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 126 */
/***/ function(module, exports) {

	module.exports = "<div>\n  <form class='form'>\n    <textarea name=\"\" v-model=\"critic\"></textarea>\n    <button @click=\"submit()\">发表评论</button>\n  </form>\n</div>";

/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Vue) {'use strict';
	
	var _require = __webpack_require__(13);
	
	var reqwest = _require.reqwest;
	var utils = _require.utils;
	
	var Toast = __webpack_require__(91);
	var Share = __webpack_require__(110);
	
	var Article = Vue.extend({
	  template: __webpack_require__(128),
	
	  data: function data() {
	    return {
	      aid: this.$route.params.id,
	      article: {},
	      comment: '',
	      comments: [],
	      name: localStorage.getItem('NAME'),
	      token: localStorage.getItem('TOKEN')
	    };
	  },
	
	  methods: {
	    submit: function submit() {
	      var _this = this;
	      if (!this.token) {
	        Toast.show('请先登录');
	        setTimeout(function () {
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
	        setTimeout(function () {
	          location.reload();
	        }, 2000);
	      }).catch(function (e) {
	        console.error(e);
	        Toast.show("发布评论失败");
	      });
	    }
	  },
	  ready: function ready() {
	    var _this = this;
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
	  },
	
	  components: {
	    Share: Share
	  }
	});
	
	module.exports = Article;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 128 */
/***/ function(module, exports) {

	module.exports = "<div class=\"contri\">\n  <article class=\"hentry\">\n    <header>\n      <hgroup>\n        <h2 class=\"author\">{{article.author}}</h2>\n        <h1 class=\"entry-title\">{{article.title}}</h1>\n        <h4 class=\"bibliography\"><p>{{article.sub_title}}</p></h4>\n        <h3 class=\"reviewers\">{{article.reviewer}}</h3>\n      </hgroup>\n    </header>\n    <div class=\"entry-content\">\n      {{{article.content}}}\n    </div>\n  </article>\n  <div>\n    <h2>评论</h2>\n    <ul>\n      <li v-for=\"com in comments\">\n        \n      </li>\n    </ul>\n  </div>\n  <form class='form'>\n    <textarea name=\"\" v-model=\"comment\"></textarea>\n    <button @click=\"submit()\">发表评论</button>\n  </form>\n  \n  <share></share>\n</div>";

/***/ },
/* 129 */
/***/ function(module, exports) {

	module.exports = "<div>\n  <router-view></router-view>\n</div>";

/***/ }
]);
//# sourceMappingURL=index.js.map