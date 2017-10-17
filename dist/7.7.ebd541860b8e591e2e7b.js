/*! This file is created by fooying@qq.com */
webpackJsonp([7],{

/***/ 1276:
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	//IP地址正则
	
	var ipReg = exports.ipReg = /^((\d|[1-9]\d|[1]\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|[1]\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|[1]\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|[1]\d\d|2[0-4]\d|25[0-5]))$/;
	
	//端口号正则
	
	var portReg = exports.portReg = /^[1-9]$|(^[1-9][0-9]$)|(^[1-9][0-9][0-9]$)|(^[1-9][0-9][0-9][0-9]$)|(^[1-6][0-5][0-5][0-3][0-5]$)/;
	
	//手机号验证
	var phoneReg = exports.phoneReg = /^(((13[0-9]{1})|(17[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;

/***/ }),

/***/ 1283:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(React, _) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _dec, _class;
	
	var _mobxReact = __webpack_require__(257);
	
	var _commonInfoAdd = __webpack_require__(1275);
	
	var _commonInfoAdd2 = _interopRequireDefault(_commonInfoAdd);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var AddUser = (_dec = (0, _mobxReact.inject)('userStore'), _dec(_class = (0, _mobxReact.observer)(_class = function (_React$Component) {
	  _inherits(AddUser, _React$Component);
	
	  function AddUser(props) {
	    _classCallCheck(this, AddUser);
	
	    return _possibleConstructorReturn(this, (AddUser.__proto__ || Object.getPrototypeOf(AddUser)).call(this, props));
	  }
	
	  _createClass(AddUser, [{
	    key: 'userIpExists',
	    value: function userIpExists(rule, value, callback) {
	      if (!value) {
	        callback();
	      } else {
	        if (!ipReg.test(value)) {
	          callback([new Error('IP 格式不正确')]);
	        } else {
	          callback();
	        }
	      }
	    }
	  }, {
	    key: 'userPortExists',
	    value: function userPortExists(rule, value, callback) {
	      if (!value) {
	        callback();
	      } else {
	        if (!portReg.test(value)) {
	          callback([new Error('端口格式不正确')]);
	        } else {
	          callback();
	        }
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var userStore = this.props.userStore;
	
	      var paramsData = userStore.params;
	      var user = userStore.list.getById(paramsData.id) || {};
	      var formDataTitileServer = _.map(userStore.updateFields, function (v, k) {
	        return _.assign({}, {
	          name: k,
	          label: v,
	          fieldOptions: {
	            initialValue: user[k],
	            rules: [
	              // { required: true, whitespace: true, message: '请输入主机名' }
	            ]
	          },
	          placeholder: '\u8BF7\u8F93\u5165' + v
	        });
	      });
	      formDataTitileServer = [{
	        type: 'hidden',
	        name: 'id',
	        label: 'id',
	        fieldOptions: {
	          initialValue: paramsData.actionType == 'clone' ? undefined : user.id
	        }
	      }].concat(_toConsumableArray(formDataTitileServer));
	
	      return React.createElement(_commonInfoAdd2.default, { store: userStore, title: formDataTitileServer });
	    }
	  }]);
	
	  return AddUser;
	}(React.Component)) || _class) || _class);
	exports.default = AddUser;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(241), __webpack_require__(1257)))

/***/ }),

/***/ 1282:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(React) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _dec, _class;
	
	var _mobxReact = __webpack_require__(257);
	
	var _Api = __webpack_require__(1265);
	
	var _Api2 = _interopRequireDefault(_Api);
	
	var _commonInfoList = __webpack_require__(1268);
	
	var _commonInfoList2 = _interopRequireDefault(_commonInfoList);
	
	var _add = __webpack_require__(1283);
	
	var _add2 = _interopRequireDefault(_add);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Users = (_dec = (0, _mobxReact.inject)('userStore'), _dec(_class = (0, _mobxReact.observer)(_class = function (_React$Component) {
	  _inherits(Users, _React$Component);
	
	  function Users(props) {
	    _classCallCheck(this, Users);
	
	    return _possibleConstructorReturn(this, (Users.__proto__ || Object.getPrototypeOf(Users)).call(this, props));
	  }
	
	  _createClass(Users, [{
	    key: 'render',
	    value: function render() {
	      var bcData = ['首页', '用户管理', '列表'];
	      return React.createElement(
	        'div',
	        { className: 'switches-network' },
	        React.createElement(_commonInfoList2.default, {
	          store: this.props.userStore,
	          bcData: bcData,
	          downloadCSV: _Api2.default.downloadUserCSV,
	          funcEnName: 'user'
	        }),
	        React.createElement(_add2.default, null)
	      );
	    }
	  }]);
	
	  return Users;
	}(React.Component)) || _class) || _class);
	exports.default = Users;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(241)))

/***/ }),

/***/ 1271:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(React) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _class;
	
	var _mobxReact = __webpack_require__(257);
	
	var _antd = __webpack_require__(330);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var DownloadBtn = (0, _mobxReact.observer)(_class = function (_React$Component) {
	  _inherits(DownloadBtn, _React$Component);
	
	  function DownloadBtn(props) {
	    _classCallCheck(this, DownloadBtn);
	
	    return _possibleConstructorReturn(this, (DownloadBtn.__proto__ || Object.getPrototypeOf(DownloadBtn)).call(this, props));
	  }
	
	  _createClass(DownloadBtn, [{
	    key: 'render',
	    value: function render() {
	      var downloadUrl = this.props.downloadUrl;
	
	
	      return React.createElement(
	        'div',
	        { className: 'download-btn' },
	        React.createElement(
	          'a',
	          { href: downloadUrl, target: '_blank' },
	          React.createElement(
	            _antd.Button,
	            { type: 'ghost' },
	            React.createElement(_antd.Icon, { type: 'download' }),
	            ' \u4E0B\u8F7D\u6A21\u7248'
	          )
	        )
	      );
	    }
	  }]);
	
	  return DownloadBtn;
	}(React.Component)) || _class;
	
	exports.default = DownloadBtn;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(241)))

/***/ }),

/***/ 1272:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(React) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _class;
	
	var _mobxReact = __webpack_require__(257);
	
	var _classnames = __webpack_require__(433);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _antd = __webpack_require__(330);
	
	var _Url = __webpack_require__(1252);
	
	var _Url2 = _interopRequireDefault(_Url);
	
	var _Auth = __webpack_require__(1264);
	
	var _Auth2 = _interopRequireDefault(_Auth);
	
	var _Api = __webpack_require__(1265);
	
	var _Api2 = _interopRequireDefault(_Api);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Option = _antd.Select.Option;
	
	var exportBtn = (0, _mobxReact.observer)(_class = function (_React$Component) {
	  _inherits(exportBtn, _React$Component);
	
	  function exportBtn(props) {
	    _classCallCheck(this, exportBtn);
	
	    var _this = _possibleConstructorReturn(this, (exportBtn.__proto__ || Object.getPrototypeOf(exportBtn)).call(this, props));
	
	    _this.state = {
	      visible: false,
	      url: ''
	    };
	    return _this;
	  }
	
	  _createClass(exportBtn, [{
	    key: 'hideModal',
	    value: function hideModal() {
	      this.setState({ visible: false });
	    }
	  }, {
	    key: 'handleChange',
	    value: function handleChange(e) {
	      this.setState({
	        insertType: e
	      });
	    }
	  }, {
	    key: 'handleExport',
	    value: function handleExport() {
	      var store = this.props.store;
	
	
	      store.exportServers();
	
	      this.setState({
	        visible: true
	      });
	    }
	  }, {
	    key: 'handleDownload',
	    value: function handleDownload(e) {
	      this.hideModal();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _state = this.state,
	          visible = _state.visible,
	          url = _state.url;
	      var store = this.props.store;
	
	      return React.createElement(
	        'div',
	        { className: 'upload-btn' },
	        React.createElement(
	          'div',
	          { className: 'action-type' },
	          React.createElement(
	            _antd.Button,
	            { type: 'ghost', onClick: this.handleExport.bind(this) },
	            React.createElement(_antd.Icon, { type: 'export' }),
	            ' \u5BFC\u51FA\u6570\u636E'
	          )
	        ),
	        React.createElement(
	          _antd.Modal,
	          { title: '\u4E0B\u8F7D\u6587\u4EF6',
	            visible: !!store.exportUrl && visible,
	            width: '400',
	            footer: [React.createElement(
	              _antd.Button,
	              {
	                key: 'cancel',
	                type: 'ghost',
	                size: 'large',
	                onClick: this.hideModal.bind(this) },
	              '取消'
	            ), React.createElement(
	              'a',
	              { href: store.exportUrl, target: '_blank' },
	              React.createElement(
	                _antd.Button,
	                {
	                  key: 'confirm',
	                  type: 'primary',
	                  size: 'large',
	                  onClick: this.handleDownload.bind(this) },
	                '确定'
	              )
	            )] },
	          React.createElement(_antd.Alert, { message: '\u6570\u636E\u6587\u4EF6\u751F\u6210\u6210\u529F\uFF0C\u70B9\u51FB \u786E\u5B9A \u4E0B\u8F7D\u6587\u4EF6!', type: 'warning' })
	        )
	      );
	    }
	  }]);
	
	  return exportBtn;
	}(React.Component)) || _class;
	
	exports.default = exportBtn;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(241)))

/***/ }),

/***/ 1277:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(React, _) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _class, _temp;
	
	var _moment = __webpack_require__(533);
	
	var _moment2 = _interopRequireDefault(_moment);
	
	var _antd = __webpack_require__(330);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var FormItem = _antd.Form.Item;
	var Option = _antd.Select.Option;
	
	var ModalForm = (_temp = _class = function (_React$Component) {
	  _inherits(ModalForm, _React$Component);
	
	  function ModalForm(props) {
	    _classCallCheck(this, ModalForm);
	
	    return _possibleConstructorReturn(this, (ModalForm.__proto__ || Object.getPrototypeOf(ModalForm)).call(this, props));
	  }
	
	  _createClass(ModalForm, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var store = this.props.store;
	
	      store.getServers(store.searchDatas);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          form = _props.form,
	          store = _props.store,
	          title = _props.title;
	      var getFieldDecorator = form.getFieldDecorator;
	
	
	      var searchDataTitile = _.map(title, function (value, key) {
	        return _.assign({
	          formType: 'Input',
	          name: '',
	          label: '',
	          type: 'text',
	          sm: 4,
	          labelCol: 6,
	          wrapperCol: 18,
	          fieldOptions: {
	            initialValue: ''
	          },
	          placeholder: ''
	        }, value);
	      });
	
	      function formJsxType(formType, placeholder, optionData) {
	        if (formType == 'DatePicker') {
	          return React.createElement(_antd.DatePicker, { format: 'YYYY-MM-DD' });
	        } else if (formType == 'select') {
	          return React.createElement(
	            _antd.Select,
	            { id: 'select', size: 'large' },
	            _.map(optionData, function (v, k) {
	              return React.createElement(
	                Option,
	                { key: k + "", value: v.id + "" },
	                v.value
	              );
	            })
	          );
	        } else if (formType == 'multipleSelect') {
	          return React.createElement(
	            _antd.Select,
	            { multiple: true, id: 'select', size: 'large' },
	            _.map(optionData, function (v, k) {
	              return React.createElement(
	                Option,
	                { key: k + "", value: v.id + "" },
	                v.value
	              );
	            })
	          );
	        } else {
	          return React.createElement(_antd.Input, { autoCapitalize: 'off',
	            placeholder: placeholder,
	            size: 'default' });
	        }
	      }
	
	      return React.createElement(
	        'div',
	        null,
	        _.map(searchDataTitile, function (v, key) {
	          return React.createElement(
	            FormItem,
	            {
	              hasFeedback: true,
	              style: {
	                display: v.type == 'hidden' ? 'none' : 'block'
	              },
	              key: key,
	              label: v.label,
	              labelCol: { span: v.labelCol },
	              wrapperCol: { span: v.wrapperCol } },
	            getFieldDecorator(v.name, v.fieldOptions)(formJsxType(v.formType, v.placeholder, v.optionData))
	          );
	        })
	      );
	    }
	  }]);
	
	  return ModalForm;
	}(React.Component), _class.propTypes = {
	  form: React.PropTypes.object,
	  store: React.PropTypes.object,
	  title: React.PropTypes.array
	}, _temp);
	exports.default = ModalForm;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(241), __webpack_require__(1257)))

/***/ }),

/***/ 1273:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(React, _) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _dec, _class, _class2, _temp;
	
	var _mobxReact = __webpack_require__(257);
	
	var _moment = __webpack_require__(533);
	
	var _moment2 = _interopRequireDefault(_moment);
	
	var _antd = __webpack_require__(330);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var FormItem = _antd.Form.Item;
	
	var SearchForm = (_dec = _antd.Form.create(), _dec(_class = (0, _mobxReact.observer)(_class = (_temp = _class2 = function (_React$Component) {
	  _inherits(SearchForm, _React$Component);
	
	  function SearchForm(props) {
	    _classCallCheck(this, SearchForm);
	
	    return _possibleConstructorReturn(this, (SearchForm.__proto__ || Object.getPrototypeOf(SearchForm)).call(this, props));
	  }
	
	  _createClass(SearchForm, [{
	    key: 'handleSubmit',
	    value: function handleSubmit(e) {
	      e.preventDefault();
	      var _props = this.props,
	          form = _props.form,
	          store = _props.store;
	
	      form.validateFields(function (errors, values) {
	        if (!!errors) {
	          console.log('Errors in form!!!');
	          return;
	        }
	        var searchData = _.pickBy(values);
	        store.getServers(searchData);
	      });
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var store = this.props.store;
	
	      store.getServers(store.searchDatas);
	    }
	  }, {
	    key: 'handleReset',
	    value: function handleReset(e) {
	      e.preventDefault();
	      var _props2 = this.props,
	          form = _props2.form,
	          store = _props2.store;
	
	      form.resetFields();
	      store.setSearchDatas({});
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props3 = this.props,
	          form = _props3.form,
	          store = _props3.store,
	          title = _props3.title;
	      var getFieldDecorator = form.getFieldDecorator;
	
	
	      var searchDataTitile = _.map(title, function (value, key) {
	        return _.assign({
	          formType: 'Input',
	          type: 'text',
	          sm: 4,
	          labelCol: 10,
	          wrapperCol: 14,
	          fieldOptions: {
	            initialValue: ''
	          },
	          placeholder: ''
	        }, value);
	      });
	
	      function formJsxType(formType, placeholder, optionData) {
	        if (formType == 'DatePicker') {
	          return React.createElement(_antd.DatePicker, { format: 'YYYY-MM-DD' });
	        } else if (formType == 'select') {
	          return React.createElement(
	            Select,
	            { id: 'select', size: 'large' },
	            _.map(optionData, function (v, k) {
	              return React.createElement(
	                Option,
	                { key: k + "", value: v.id + "" },
	                v.value
	              );
	            })
	          );
	        } else if (formType == 'multipleSelect') {
	          return React.createElement(
	            Select,
	            { multiple: true, id: 'select', size: 'large' },
	            _.map(optionData, function (v, k) {
	              return React.createElement(
	                Option,
	                { key: k + "", value: v.id + "" },
	                v.value
	              );
	            })
	          );
	        } else {
	          return React.createElement(_antd.Input, { autoCapitalize: 'off',
	            placeholder: placeholder,
	            size: 'default' });
	        }
	      }
	
	      return React.createElement(
	        _antd.Form,
	        { horizontal: true, className: 'ant-advanced-search-form' },
	        React.createElement(
	          _antd.Row,
	          { gutter: 5 },
	          _.map(searchDataTitile, function (v, key) {
	            return React.createElement(
	              _antd.Col,
	              { sm: v.sm, key: key },
	              React.createElement(
	                FormItem,
	                {
	                  label: v.label,
	                  labelCol: { span: v.labelCol },
	                  wrapperCol: { span: v.wrapperCol } },
	                getFieldDecorator(v.name, v.fieldOptions)(formJsxType(v.formType, v.placeholder, v.type))
	              )
	            );
	          })
	        ),
	        React.createElement(
	          _antd.Row,
	          null,
	          React.createElement(
	            _antd.Col,
	            { span: 12, offset: 12, style: { textAlign: 'right' } },
	            React.createElement(
	              _antd.Button,
	              { type: 'primary', htmlType: 'submit', onClick: this.handleSubmit.bind(this) },
	              '\u641C\u7D22'
	            ),
	            React.createElement(
	              _antd.Button,
	              { onClick: this.handleReset.bind(this) },
	              '\u6E05\u9664\u6761\u4EF6'
	            )
	          )
	        )
	      );
	    }
	  }]);
	
	  return SearchForm;
	}(React.Component), _class2.propTypes = {
	  form: React.PropTypes.object,
	  store: React.PropTypes.object,
	  title: React.PropTypes.array
	}, _temp)) || _class) || _class);
	exports.default = SearchForm;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(241), __webpack_require__(1257)))

/***/ }),

/***/ 1275:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(React, _) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _dec, _class;
	
	var _mobx = __webpack_require__(258);
	
	var _mobxReact = __webpack_require__(257);
	
	var _antd = __webpack_require__(330);
	
	var _regex = __webpack_require__(1276);
	
	var _form = __webpack_require__(1277);
	
	var _form2 = _interopRequireDefault(_form);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var FormItem = _antd.Form.Item;
	var Option = _antd.Select.Option;
	
	var AddForm = (_dec = _antd.Form.create(), _dec(_class = (0, _mobxReact.observer)(_class = function (_React$Component) {
	  _inherits(AddForm, _React$Component);
	
	  function AddForm(props) {
	    _classCallCheck(this, AddForm);
	
	    return _possibleConstructorReturn(this, (AddForm.__proto__ || Object.getPrototypeOf(AddForm)).call(this, props));
	  }
	
	  _createClass(AddForm, [{
	    key: 'handleSubmit',
	    value: function handleSubmit(e) {
	      var _this2 = this;
	
	      var _props = this.props,
	          form = _props.form,
	          store = _props.store;
	      var validateFields = form.validateFields;
	      var params = store.params;
	
	
	      validateFields(function (errors, values) {
	        if (!!errors) {
	          console.log('Errors in form!!!');
	          return;
	        }
	
	        //var data = _.pickBy(values)
	        var data = values;
	        form.resetFields();
	        _this2.hideModal();
	
	        if (!_.isEmpty((0, _mobx.toJS)(store.params.ids))) {
	          store.putServers({
	            ids: (0, _mobx.toJS)(store.params.ids),
	            data: _.pickBy(values)
	          });
	        } else if (values.id) {
	          store.putServer(data);
	        } else {
	          store.postServer(data);
	        }
	      });
	    }
	  }, {
	    key: 'hideModal',
	    value: function hideModal() {
	      var store = this.props.store;
	
	      store.toggleVisible();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props2 = this.props,
	          form = _props2.form,
	          store = _props2.store,
	          title = _props2.title;
	
	      var ids = (0, _mobx.toJS)(store.params.ids) || [];
	
	      return React.createElement(
	        _antd.Modal,
	        { title: '\u64CD\u4F5C\u6620\u5C04',
	          visible: store.visible,
	          onCancel: this.hideModal.bind(this),
	          onOk: this.handleSubmit.bind(this) },
	        !_.isEmpty(ids) && React.createElement(
	          'div',
	          { className: 'update-ids' },
	          '\u6279\u91CF\u4FEE\u6539\u7684\u5BF9\u8C61 ID \u4E3A\uFF1A',
	          React.createElement(
	            'span',
	            { className: 'ids-span' },
	            ids.join(',  ')
	          ),
	          '\uFF0C',
	          React.createElement('br', null),
	          '\u8BF7\u4FEE\u6539\u5BF9\u5E94\u7684\u5B57\u6BB5\uFF0C\u4E0D\u586B\u5199\u5B57\u6BB5\u4E3A\u4E0D\u4FEE\u6539\u5B57\u6BB5\u3002'
	        ),
	        React.createElement(
	          _antd.Form,
	          { horizontal: true },
	          React.createElement(_form2.default, { form: form,
	            store: store,
	            title: title })
	        )
	      );
	    }
	  }]);
	
	  return AddForm;
	}(React.Component)) || _class) || _class);
	exports.default = AddForm;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(241), __webpack_require__(1257)))

/***/ }),

/***/ 1268:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(React, _, classNames) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _dec, _class;
	
	var _mobx = __webpack_require__(258);
	
	var _mobxReact = __webpack_require__(257);
	
	var _antd = __webpack_require__(330);
	
	var _table = __webpack_require__(1269);
	
	var _table2 = _interopRequireDefault(_table);
	
	var _uploadBtn = __webpack_require__(1270);
	
	var _uploadBtn2 = _interopRequireDefault(_uploadBtn);
	
	var _downloadBtn = __webpack_require__(1271);
	
	var _downloadBtn2 = _interopRequireDefault(_downloadBtn);
	
	var _exportBtn = __webpack_require__(1272);
	
	var _exportBtn2 = _interopRequireDefault(_exportBtn);
	
	var _search = __webpack_require__(1273);
	
	var _search2 = _interopRequireDefault(_search);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var FuncList = (_dec = (0, _mobxReact.inject)('dashboardStore'), _dec(_class = (0, _mobxReact.observer)(_class = function (_React$Component) {
	  _inherits(FuncList, _React$Component);
	
	  function FuncList(props) {
	    _classCallCheck(this, FuncList);
	
	    return _possibleConstructorReturn(this, (FuncList.__proto__ || Object.getPrototypeOf(FuncList)).call(this, props));
	  }
	
	  _createClass(FuncList, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      var _props = this.props,
	          dashboardStore = _props.dashboardStore,
	          bcData = _props.bcData;
	
	      dashboardStore.putDashboard(bcData);
	    }
	  }, {
	    key: 'addFunc',
	    value: function addFunc(e) {
	      var store = this.props.store;
	
	      store.toggleVisible();
	      store.setParams({});
	    }
	  }, {
	    key: 'updateFunc',
	    value: function updateFunc(formData) {
	      var store = this.props.store;
	
	      store.toggleVisible();
	      store.setParams(formData);
	    }
	  }, {
	    key: 'handleDeleteConfirm',
	    value: function handleDeleteConfirm(formData) {
	      var store = this.props.store;
	
	      store.deleteServer(formData);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      var that = this;
	      var _props2 = this.props,
	          store = _props2.store,
	          funcEnName = _props2.funcEnName,
	          funcCnName = _props2.funcCnName,
	          downloadCSV = _props2.downloadCSV;
	
	      var dataList = _.map(store.toJS(), function (v, k) {
	        return _extends({
	          key: v.id
	        }, v);
	      });
	      var fields = store.fields;
	      var searchFields = _.map(store.searchFields, function (v, k) {
	        return {
	          name: k,
	          label: v,
	          fieldOptions: {
	            initialValue: store.searchDatas[k]
	          },
	          placeholder: '\u8BF7\u8F93\u5165' + v
	        };
	      });
	
	      var tableHeader = _.map(fields, function (v, k) {
	        return {
	          title: v,
	          dataIndex: k,
	          key: k,
	          width: 105,
	          render: function render(text, record, index) {
	            return text;
	          }
	        };
	      });
	      var columns = _.isEmpty(tableHeader) ? [] : [].concat(_toConsumableArray(tableHeader), [{
	        title: '操作',
	        key: 'operation',
	        width: 150,
	        render: function render(text, record, index) {
	          return React.createElement(
	            'div',
	            null,
	            React.createElement(
	              'a',
	              {
	                href: '#',
	                onClick: that.updateFunc.bind(_this2, {
	                  id: record.id
	                })
	              },
	              '\u4FEE\u6539'
	            ),
	            React.createElement(
	              _antd.Button,
	              {
	                type: 'dashed',
	                onClick: that.updateFunc.bind(_this2, {
	                  id: record.id,
	                  actionType: 'clone'
	                })
	              },
	              '\u514B\u9686'
	            ),
	            React.createElement(
	              _antd.Popconfirm,
	              {
	                title: '\u786E\u5B9A\u8981\u5220\u9664\u8FD9\u4E2A\u64CD\u4F5C\u7C7B\u578B\u5417\uFF1F',
	                onConfirm: that.handleDeleteConfirm.bind(_this2, {
	                  id: record.id
	                })
	              },
	              React.createElement(
	                'a',
	                { href: '#' },
	                '\u5220\u9664'
	              )
	            )
	          );
	        }
	      }]);
	
	      return React.createElement(
	        'div',
	        null,
	        React.createElement(
	          'div',
	          { className: 'switches-action-type' },
	          React.createElement(
	            _antd.Button,
	            { type: 'primary', onClick: this.addFunc.bind(this) },
	            '\u6DFB\u52A0'
	          )
	        ),
	        React.createElement(
	          'div',
	          { className: classNames({ tables: true }) },
	          React.createElement(_table2.default, { columns: columns, dataSource: dataList, store: store })
	        )
	      );
	    }
	  }]);
	
	  return FuncList;
	}(React.Component)) || _class) || _class);
	exports.default = FuncList;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(241), __webpack_require__(1257), __webpack_require__(433)))

/***/ }),

/***/ 1269:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(React) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _class;
	
	var _mobxReact = __webpack_require__(257);
	
	var _antd = __webpack_require__(330);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var DataTable = (0, _mobxReact.observer)(_class = function (_React$Component) {
	  _inherits(DataTable, _React$Component);
	
	  function DataTable(props) {
	    _classCallCheck(this, DataTable);
	
	    return _possibleConstructorReturn(this, (DataTable.__proto__ || Object.getPrototypeOf(DataTable)).call(this, props));
	  }
	
	  _createClass(DataTable, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          columns = _props.columns,
	          dataSource = _props.dataSource;
	
	      var pagination = {
	        total: dataSource.length,
	        showTotal: function showTotal(total) {
	          return '\u603B\u5171 ' + dataSource.length + ' \u6761';
	        },
	        showSizeChanger: true,
	        pageSizeOptions: [dataSource.length + '', '10', '20', '50', '100']
	        // onShowSizeChange(current, pageSize) {
	        //   console.log('Current: ', current, '; PageSize: ', pageSize);
	        // },
	        // onChange(current) {
	        //   console.log('Current: ', current);
	        // },
	      };
	
	      return React.createElement(_antd.Table, { columns: columns,
	        dataSource: dataSource,
	        pagination: pagination,
	        scroll: { x: 1200 } });
	    }
	  }]);
	
	  return DataTable;
	}(React.Component)) || _class;
	
	exports.default = DataTable;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(241)))

/***/ }),

/***/ 1270:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(React, _) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _class;
	
	var _mobxReact = __webpack_require__(257);
	
	var _classnames = __webpack_require__(433);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _antd = __webpack_require__(330);
	
	var _Url = __webpack_require__(1252);
	
	var _Url2 = _interopRequireDefault(_Url);
	
	var _Auth = __webpack_require__(1264);
	
	var _Auth2 = _interopRequireDefault(_Auth);
	
	var _Api = __webpack_require__(1265);
	
	var _Api2 = _interopRequireDefault(_Api);
	
	var _table = __webpack_require__(1269);
	
	var _table2 = _interopRequireDefault(_table);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Option = _antd.Select.Option;
	
	var UploadBtn = (0, _mobxReact.observer)(_class = function (_React$Component) {
	  _inherits(UploadBtn, _React$Component);
	
	  function UploadBtn(props) {
	    _classCallCheck(this, UploadBtn);
	
	    var _this = _possibleConstructorReturn(this, (UploadBtn.__proto__ || Object.getPrototypeOf(UploadBtn)).call(this, props));
	
	    _this.state = {
	      visible: false,
	      validate: true,
	
	      insertType: '',
	      uploadData: {
	        columns: [],
	        dataList: []
	      }
	    };
	    return _this;
	  }
	
	  _createClass(UploadBtn, [{
	    key: 'hideModal',
	    value: function hideModal() {
	      this.setState({ visible: false });
	    }
	  }, {
	    key: 'handleChange',
	    value: function handleChange(e) {
	      this.setState({
	        insertType: e
	      });
	    }
	  }, {
	    key: 'handleSubmit',
	    value: function handleSubmit(e) {
	      var _props = this.props,
	          store = _props.store,
	          params = _props.params;
	
	      var paramsData = params || {};
	      var _state = this.state,
	          uploadData = _state.uploadData,
	          validate = _state.validate,
	          insertType = _state.insertType;
	
	      !insertType && _antd.Modal.error({
	        title: ' ',
	        content: '导入方式不能为空'
	      });
	      insertType && validate && store.postServers({
	        type: paramsData.type,
	        list: uploadData.dataList
	      }, {
	        insert_type: insertType
	      });
	      insertType && validate && this.hideModal();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      var params = this.props.params;
	
	      var paramsData = params || {};
	
	      var uploadProps = {
	        multiple: false,
	        name: 'uploadfile',
	        action: _Api2.default.uploadCsvFile,
	        data: {
	          type: paramsData.type
	        },
	        accept: ".csv",
	        headers: {
	          authorization: 'authorization-text',
	          AuthToken: _Auth2.default.getAuthCookie('UserIfosSession') || ''
	        },
	        onChange: function onChange(info) {
	          if (info.file.status === 'done') {
	            var _info$file$response = info.file.response,
	                statuscode = _info$file$response.statuscode,
	                msg = _info$file$response.msg,
	                data = _info$file$response.data;
	
	            if (statuscode == '200') {
	              _antd.message.success(info.file.name + ' \u4E0A\u4F20\u6210\u529F\u3002');
	              var conf = data.conf,
	                  list = data.list,
	                  rsError = data.error;
	
	
	              var tableHeader = _.map(conf, function (v, k) {
	                return {
	                  title: v,
	                  dataIndex: k,
	                  key: k,
	                  width: 80,
	                  render: function render(text, record, index) {
	                    return !!text ? React.createElement(
	                      'div',
	                      { className: (0, _classnames2.default)({ 'item-error': !text.validate }) },
	                      text.value
	                    ) : text;
	                  }
	                };
	              });
	
	              _this2.setState({
	                visible: true,
	                validate: rsError,
	                uploadData: {
	                  columns: tableHeader,
	                  dataList: list
	                }
	              });
	            } else {
	              _antd.Modal.error({
	                title: '',
	                content: msg
	              });
	            }
	          } else if (info.file.status === 'error') {
	            _antd.Modal.error({
	              title: '',
	              content: info.file.name + ' \u4E0A\u4F20\u5931\u8D25\u3002'
	            });
	            // message.error(`${info.file.name} 上传失败。`);
	          }
	        }
	      };
	
	      var _state2 = this.state,
	          visible = _state2.visible,
	          validate = _state2.validate,
	          uploadData = _state2.uploadData,
	          fileList = _state2.fileList;
	
	      return React.createElement(
	        'div',
	        { className: 'upload-btn' },
	        React.createElement(
	          'div',
	          { className: 'action-type' },
	          React.createElement(
	            _antd.Upload,
	            uploadProps,
	            React.createElement(
	              _antd.Button,
	              { type: 'ghost' },
	              React.createElement(_antd.Icon, { type: 'upload' }),
	              ' \u4E0A\u4F20\u6587\u4EF6'
	            )
	          )
	        ),
	        React.createElement(
	          _antd.Modal,
	          { title: '\u4E0A\u4F20\u5185\u5BB9',
	            visible: visible,
	            cancelText: '\u91CD\u65B0\u4E0A\u4F20',
	            okText: '\u786E\u8BA4\u63D0\u4EA4',
	            width: '800',
	            onOk: this.handleSubmit.bind(this),
	            onCancel: this.hideModal.bind(this) },
	          !validate && React.createElement(
	            'div',
	            { className: 'table-header-warning' },
	            React.createElement(
	              'span',
	              { className: 'item-error' },
	              '\u6A59\u8272'
	            ),
	            '\u4E3A\u9A8C\u8BC1\u6709\u9519\u7684\u5B57\u6BB5\uFF0C\u8BF7\u5728CSV\u4E2D\u4FEE\u6539\u540E\u91CD\u65B0\u4E0A\u4F20\uFF01'
	          ),
	          React.createElement(
	            'div',
	            { style: {
	                margin: '10px 0'
	              } },
	            React.createElement(
	              _antd.Select,
	              { size: 'large', defaultValue: '', style: { width: 200 }, onChange: this.handleChange.bind(this) },
	              React.createElement(
	                Option,
	                { value: '' },
	                '\u8BF7\u9009\u62E9\u5BFC\u5165\u65B9\u5F0F'
	              ),
	              React.createElement(
	                Option,
	                { value: 'just_insert' },
	                '\u8FFD\u52A0\u5BFC\u5165'
	              ),
	              React.createElement(
	                Option,
	                { value: 'delete_before_insert' },
	                '\u6E05\u7A7A\u5BFC\u5165'
	              )
	            )
	          ),
	          React.createElement(_table2.default, {
	            columns: uploadData.columns,
	            dataSource: uploadData.dataList })
	        )
	      );
	    }
	  }]);
	
	  return UploadBtn;
	}(React.Component)) || _class;
	
	exports.default = UploadBtn;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(241), __webpack_require__(1257)))

/***/ })

});
//# sourceMappingURL=7.7.ebd541860b8e591e2e7b.js.map