/*! This file is created by fooying@qq.com */
webpackJsonp([2],{

/***/ 1250:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(React) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _dec, _dec2, _class;
	
	var _mobxReact = __webpack_require__(257);
	
	var _antd = __webpack_require__(330);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var createForm = _antd.Form.create;
	var FormItem = _antd.Form.Item;
	
	// import './login.less'
	
	var Login = (_dec = createForm(), _dec2 = (0, _mobxReact.inject)("userStore"), _dec(_class = _dec2(_class = (0, _mobxReact.observer)(_class = function (_React$Component) {
	  _inherits(Login, _React$Component);
	
	  function Login(props) {
	    _classCallCheck(this, Login);
	
	    return _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).call(this, props));
	  }
	
	  _createClass(Login, [{
	    key: 'handleReset',
	    value: function handleReset(e) {
	      e.preventDefault();
	      this.props.form.resetFields();
	    }
	  }, {
	    key: 'handleSubmit',
	    value: function handleSubmit(e) {
	      e.preventDefault();
	      var _props = this.props,
	          userStore = _props.userStore,
	          form = _props.form;
	
	
	      form.validateFields(function (errors, values) {
	        if (errors) {
	          console.log('Errors in form!!!');
	          return;
	        }
	        userStore.loginServer(values);
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props$form = this.props.form,
	          getFieldDecorator = _props$form.getFieldDecorator,
	          getFieldError = _props$form.getFieldError,
	          isFieldValidating = _props$form.isFieldValidating;
	
	      var formItemLayout = {
	        labelCol: { span: 7 },
	        wrapperCol: { span: 12 }
	      };
	      return React.createElement(
	        'div',
	        {
	          className: 'login' },
	        React.createElement(
	          _antd.Form,
	          { horizontal: true },
	          React.createElement(
	            FormItem,
	            _extends({}, formItemLayout, {
	              label: 'User name',
	              hasFeedback: true,
	              help: isFieldValidating('username') ? 'validating...' : (getFieldError('name') || []).join(', ')
	            }),
	            getFieldDecorator('username', {
	              rules: [{ required: true, min: 5, message: 'User name for at least 5 characters' }]
	            })(React.createElement(_antd.Input, { placeholder: 'Realtime validation, try to input Jason Wood' }))
	          ),
	          React.createElement(
	            FormItem,
	            _extends({}, formItemLayout, {
	              label: 'Password',
	              hasFeedback: true
	            }),
	            getFieldDecorator('password', {
	              rules: [{ required: true, whitespace: true, message: 'Please enter your password' }]
	            })(React.createElement(_antd.Input, { type: 'password', autoComplete: 'off'
	            }))
	          ),
	          React.createElement(
	            FormItem,
	            { wrapperCol: { span: 12, offset: 7 } },
	            React.createElement(
	              _antd.Button,
	              { type: 'primary', onClick: this.handleSubmit.bind(this) },
	              'OK'
	            ),
	            '\xA0\xA0\xA0',
	            React.createElement(
	              _antd.Button,
	              { type: 'ghost', onClick: this.handleReset.bind(this) },
	              'Reset'
	            )
	          )
	        )
	      );
	    }
	  }]);
	
	  return Login;
	}(React.Component)) || _class) || _class) || _class);
	exports.default = Login;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(241)))

/***/ })

});
//# sourceMappingURL=2.2.ebd541860b8e591e2e7b.js.map