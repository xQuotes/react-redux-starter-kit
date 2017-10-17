/*! This file is created by fooying@qq.com */
webpackJsonp([1],{

/***/ 329:
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
	
	// import './register.less'
	
	var Register = (_dec = createForm(), _dec2 = (0, _mobxReact.inject)("userStore"), _dec(_class = _dec2(_class = (0, _mobxReact.observer)(_class = function (_React$Component) {
	  _inherits(Register, _React$Component);
	
	  function Register(props) {
	    _classCallCheck(this, Register);
	
	    return _possibleConstructorReturn(this, (Register.__proto__ || Object.getPrototypeOf(Register)).call(this, props));
	  }
	
	  _createClass(Register, [{
	    key: 'handleReset',
	    value: function handleReset(e) {
	      e.preventDefault();
	      this.props.form.resetFields();
	    }
	  }, {
	    key: 'handleSubmit',
	    value: function handleSubmit(e) {
	      var _this2 = this;
	
	      e.preventDefault();
	      var userStore = this.props.userStore;
	
	
	      this.props.form.validateFields(function (errors, values) {
	        if (errors) {
	          console.log('Errors in form!!!');
	          return;
	        }
	        console.log('Submit!!!');
	        console.log(userStore.registerServer);
	        console.log(values);
	        delete values[rePassword];
	        console.log(userStore.registerServer(values));
	        console.log(_this2.props);
	      });
	    }
	  }, {
	    key: 'userExists',
	    value: function userExists(rule, value, callback) {
	      if (!value) {
	        callback();
	      } else {
	        setTimeout(function () {
	          if (value === 'Jason Wood') {
	            callback([new Error('Sorry, the user name is already in use.')]);
	          } else {
	            callback();
	          }
	        }, 800);
	      }
	    }
	  }, {
	    key: 'checkPass',
	    value: function checkPass(rule, value, callback) {
	      var validateFields = this.props.form.validateFields;
	
	      if (value) {
	        validateFields(['rePassword'], { force: true });
	      }
	      callback();
	    }
	  }, {
	    key: 'checkPass2',
	    value: function checkPass2(rule, value, callback) {
	      var getFieldValue = this.props.form.getFieldValue;
	
	      if (value && value !== getFieldValue('password')) {
	        callback('The two passwords you enter are inconsistent!');
	      } else {
	        callback();
	      }
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
	        { className: 'register' },
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
	              rules: [{ required: true, min: 5, message: 'User name for at least 5 characters' }, { validator: this.userExists.bind(this) }]
	            })(React.createElement(_antd.Input, { placeholder: 'Realtime validation, try to input Jason Wood' }))
	          ),
	          React.createElement(
	            FormItem,
	            _extends({}, formItemLayout, {
	              label: 'Email',
	              hasFeedback: true
	            }),
	            getFieldDecorator('email', {
	              validate: [{
	                rules: [{ required: true }],
	                trigger: 'onBlur'
	              }, {
	                rules: [{ type: 'email', message: 'Please input the correct email' }],
	                trigger: ['onBlur', 'onChange']
	              }]
	            })(React.createElement(_antd.Input, { type: 'email', placeholder: 'This control uses onBlur and onChange' }))
	          ),
	          React.createElement(
	            FormItem,
	            _extends({}, formItemLayout, {
	              label: 'Password',
	              hasFeedback: true
	            }),
	            getFieldDecorator('password', {
	              rules: [{ required: true, whitespace: true, message: 'Please enter your password' }, { validator: this.checkPass.bind(this) }]
	            })(React.createElement(_antd.Input, { type: 'password', autoComplete: 'off'
	            }))
	          ),
	          React.createElement(
	            FormItem,
	            _extends({}, formItemLayout, {
	              label: 'Confirm password',
	              hasFeedback: true
	            }),
	            getFieldDecorator('rePassword', {
	              rules: [{
	                required: true,
	                whitespace: true,
	                message: 'Please confirm your password'
	              }, {
	                validator: this.checkPass2.bind(this)
	              }]
	            })(React.createElement(_antd.Input, { type: 'password', autoComplete: 'off', placeholder: 'password'
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
	
	  return Register;
	}(React.Component)) || _class) || _class) || _class);
	exports.default = Register;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(241)))

/***/ })

});
//# sourceMappingURL=1.1.ebd541860b8e591e2e7b.js.map