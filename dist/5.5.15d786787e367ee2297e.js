/*! This file is created by fooying@qq.com */
webpackJsonp([5],{869:function(e,t,r){(function(e){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function n(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s,i,l,c=Object.assign||function(e){for(var t=1;arguments.length>t;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},u=function(){function e(e,t){for(var r=0;t.length>r;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,r,o){return r&&e(t.prototype,r),o&&e(t,o),t}}(),p=r(14),d=r(13),f=d.Form.create,h=d.Form.Item,m=(s=f(),i=(0,p.inject)("userStore"),s(l=i(l=(0,p.observer)(l=function(t){function r(e){return o(this,r),a(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,e))}return n(r,t),u(r,[{key:"handleReset",value:function(e){e.preventDefault(),this.props.form.resetFields()}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault();var r=this.props.userStore;this.props.form.validateFields(function(e,o){return e?void console.log("Errors in form!!!"):(console.log("Submit!!!"),console.log(r.registerServer),console.log(o),delete o[rePassword],console.log(r.registerServer(o)),void console.log(t.props))})}},{key:"userExists",value:function(e,t,r){t?setTimeout(function(){"Jason Wood"===t?r([Error("Sorry, the user name is already in use.")]):r()},800):r()}},{key:"checkPass",value:function(e,t,r){var o=this.props.form.validateFields;t&&o(["rePassword"],{force:!0}),r()}},{key:"checkPass2",value:function(e,t,r){var o=this.props.form.getFieldValue;t&&t!==o("password")?r("The two passwords you enter are inconsistent!"):r()}},{key:"render",value:function(){var t=this.props.form,r=t.getFieldDecorator,o=t.getFieldError,a=t.isFieldValidating,n={labelCol:{span:7},wrapperCol:{span:12}};return e.createElement("div",{className:"register"},e.createElement(d.Form,{horizontal:!0},e.createElement(h,c({},n,{label:"User name",hasFeedback:!0,help:a("username")?"validating...":(o("name")||[]).join(", ")}),r("username",{rules:[{required:!0,min:5,message:"User name for at least 5 characters"},{validator:this.userExists.bind(this)}]})(e.createElement(d.Input,{placeholder:"Realtime validation, try to input Jason Wood"}))),e.createElement(h,c({},n,{label:"Email",hasFeedback:!0}),r("email",{validate:[{rules:[{required:!0}],trigger:"onBlur"},{rules:[{type:"email",message:"Please input the correct email"}],trigger:["onBlur","onChange"]}]})(e.createElement(d.Input,{type:"email",placeholder:"This control uses onBlur and onChange"}))),e.createElement(h,c({},n,{label:"Password",hasFeedback:!0}),r("password",{rules:[{required:!0,whitespace:!0,message:"Please enter your password"},{validator:this.checkPass.bind(this)}]})(e.createElement(d.Input,{type:"password",autoComplete:"off"}))),e.createElement(h,c({},n,{label:"Confirm password",hasFeedback:!0}),r("rePassword",{rules:[{required:!0,whitespace:!0,message:"Please confirm your password"},{validator:this.checkPass2.bind(this)}]})(e.createElement(d.Input,{type:"password",autoComplete:"off",placeholder:"password"}))),e.createElement(h,{wrapperCol:{span:12,offset:7}},e.createElement(d.Button,{type:"primary",onClick:this.handleSubmit.bind(this)},"OK"),"   ",e.createElement(d.Button,{type:"ghost",onClick:this.handleReset.bind(this)},"Reset"))))}}]),r}(e.Component))||l)||l)||l);t.default=m}).call(t,r(1))}});