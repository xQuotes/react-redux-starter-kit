/*! This file is created by fooying@qq.com */
webpackJsonp([22],{873:function(e,t,n){(function(e,r){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u,c,s=function(){function e(e,t){for(var n=0;t.length>n;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),f=n(6),p=n(20),d=o(p),h=n(29),y=o(h),m=n(895),b=o(m),v=(u=(0,f.inject)("QAStore"),u(c=(0,f.observer)(c=function(t){function n(e){return a(this,n),i(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e))}return l(n,t),s(n,[{key:"componentWillMount",value:function(){var e=this.props.QAStore;e.getServers()}},{key:"render",value:function(){var t=this.props.QAStore,n=["首页","资讯管理","列表"],o=r.map(t.fields,function(t,n){return"answerContent"===n?{title:t,dataIndex:n,key:n,width:105,render:function(t,n,r){return e.createElement("div",{className:"preview",dangerouslySetInnerHTML:{__html:t}})}}:{title:t,dataIndex:n,key:n,width:105,render:function(e,t,n){return e}}});return e.createElement("div",{className:"switches-network"},e.createElement(b.default,{tableHeader:o,store:this.props.QAStore,bcData:n,downloadCSV:d.default.downloadQACSV,funcEnName:"QA",addUrl:y.default.QAAdd}))}}]),n}(e.Component))||c)||c);t.default=v}).call(t,n(1),n(15))},37:function(e,t,n){(function(e){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i,l=function(){function e(e,t){for(var n=0;t.length>n;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(6),c=n(5),s=(0,u.observer)(i=function(t){function n(e){return r(this,n),o(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e))}return a(n,t),l(n,[{key:"render",value:function(){var t=this.props.downloadUrl;return e.createElement("div",{className:"download-btn"},e.createElement("a",{href:t,target:"_blank"},e.createElement(c.Button,{type:"ghost"},e.createElement(c.Icon,{type:"download"})," 下载模版")))}}]),n}(e.Component))||i;t.default=s}).call(t,n(1))},38:function(e,t,n){(function(e){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l,u=function(){function e(e,t){for(var n=0;t.length>n;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(6),s=n(2),f=(r(s),n(5)),p=n(29),d=(r(p),n(32)),h=(r(d),n(20)),y=(r(h),(0,c.observer)(l=function(t){function n(e){o(this,n);var t=a(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.state={visible:!1,url:""},t}return i(n,t),u(n,[{key:"hideModal",value:function(){this.setState({visible:!1})}},{key:"handleChange",value:function(e){this.setState({insertType:e})}},{key:"handleExport",value:function(){var e=this.props.store;e.exportServers(),this.setState({visible:!0})}},{key:"handleDownload",value:function(e){this.hideModal()}},{key:"render",value:function(){var t=this.state,n=t.visible,r=this.props.store;return e.createElement("div",{className:"upload-btn"},e.createElement("div",{className:"action-type"},e.createElement(f.Button,{type:"ghost",onClick:this.handleExport.bind(this)},e.createElement(f.Icon,{type:"export"})," 导出数据")),e.createElement(f.Modal,{title:"下载文件",visible:!!r.exportUrl&&n,width:"400",footer:[e.createElement(f.Button,{key:"cancel",type:"ghost",size:"large",onClick:this.hideModal.bind(this)},"取消"),e.createElement("a",{href:r.exportUrl,target:"_blank"},e.createElement(f.Button,{key:"confirm",type:"primary",size:"large",onClick:this.handleDownload.bind(this)},"确定"))]},e.createElement(f.Alert,{message:"数据文件生成成功，点击 确定 下载文件!",type:"warning"})))}}]),n}(e.Component))||l);t.default=y}).call(t,n(1))},34:function(e,t,n){(function(e,r){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u,c,s,f,p=function(){function e(e,t){for(var n=0;t.length>n;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),d=n(6),h=n(3),y=(o(h),n(5)),m=y.Form.Item,b=(u=y.Form.create(),u(c=(0,d.observer)((f=s=function(t){function n(e){return a(this,n),i(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e))}return l(n,t),p(n,[{key:"handleSubmit",value:function(e){e.preventDefault();var t=this.props,n=t.form,o=t.store;n.validateFields(function(e,t){if(e)return void console.log("Errors in form!!!");var n=r.pickBy(t);o.getServers(n)})}},{key:"componentDidMount",value:function(){var e=this.props.store;e.getServers(e.searchDatas)}},{key:"handleReset",value:function(e){e.preventDefault();var t=this.props,n=t.form,r=t.store;n.resetFields(),r.setSearchDatas({})}},{key:"render",value:function(){function t(t,n,o){return"DatePicker"==t?e.createElement(y.DatePicker,{format:"YYYY-MM-DD"}):"select"==t?e.createElement(Select,{id:"select",size:"large"},r.map(o,function(t,n){return e.createElement(Option,{key:n+"",value:t.id+""},t.value)})):"multipleSelect"==t?e.createElement(Select,{multiple:!0,id:"select",size:"large"},r.map(o,function(t,n){return e.createElement(Option,{key:n+"",value:t.id+""},t.value)})):e.createElement(y.Input,{autoCapitalize:"off",placeholder:n,size:"default"})}var n=this.props,o=n.form,a=n.title,i=o.getFieldDecorator,l=r.map(a,function(e,t){return r.assign({formType:"Input",type:"text",sm:4,labelCol:10,wrapperCol:14,fieldOptions:{initialValue:""},placeholder:""},e)});return e.createElement(y.Form,{horizontal:!0,className:"ant-advanced-search-form"},e.createElement(y.Row,{gutter:5},r.map(l,function(n,r){return e.createElement(y.Col,{sm:n.sm,key:r},e.createElement(m,{label:n.label,labelCol:{span:n.labelCol},wrapperCol:{span:n.wrapperCol}},i(n.name,n.fieldOptions)(t(n.formType,n.placeholder,n.type))))})),e.createElement(y.Row,null,e.createElement(y.Col,{span:12,offset:12,style:{textAlign:"right"}},e.createElement(y.Button,{type:"primary",htmlType:"submit",onClick:this.handleSubmit.bind(this)},"搜索"),e.createElement(y.Button,{onClick:this.handleReset.bind(this)},"清除条件"))))}}]),n}(e.Component),s.propTypes={form:e.PropTypes.object,store:e.PropTypes.object,title:e.PropTypes.array},c=f))||c)||c);t.default=b}).call(t,n(1),n(15))},895:function(e,t,n){(function(e,r,o){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function i(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);e.length>t;t++)n[t]=e[t];return n}return Array.from(e)}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s,f,p=Object.assign||function(e){for(var t=1;arguments.length>t;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},d=function(){function e(e,t){for(var n=0;t.length>n;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),h=(n(24),n(6)),y=n(5),m=n(123),b=n(27),v=a(b),w=n(40),_=(a(w),n(37)),E=(a(_),n(38)),g=(a(E),n(34)),O=(a(g),s=(0,h.inject)("dashboardStore"),s(f=(0,h.observer)(f=function(t){function n(e){return l(this,n),u(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e))}return c(n,t),d(n,[{key:"componentWillMount",value:function(){var e=this.props,t=e.dashboardStore,n=e.bcData;t.putDashboard(n)}},{key:"addFunc",value:function(e){var t=this.props.store;t.toggleVisible(),t.setParams({})}},{key:"updateFunc",value:function(e){var t=this.props.store;t.toggleVisible(),t.setParams(e)}},{key:"handleDeleteConfirm",value:function(e){var t=this.props.store;t.deleteServer(e)}},{key:"render",value:function(){var t=this,n=this,a=this.props,l=a.store,u=a.actions,c=a.deleteAction,s=a.expandedRowRender,f=a.addUrl,d=r.map(l.toJS(),function(e,t){return p({key:e.id},e)}),h=l.fields,b=(r.map(l.searchFields,function(e,t){return{name:t,label:e,fieldOptions:{initialValue:l.searchDatas[t]},placeholder:"请输入"+e}}),this.props.tableHeader||r.map(h,function(e,t){return{title:e,dataIndex:t,key:t,width:105,render:function(e,t,n){return e}}})),w=r.isEmpty(b)?[]:[].concat(i(b),[{title:"操作",key:"operation",width:200,render:function(r,o,a){return c?u?u(o):null:e.createElement("div",{className:"table-actions"},u&&u(o),e.createElement(m.Link,{to:f+"/"+o.id},e.createElement(y.Button,{type:"primary"},"修改")),e.createElement(m.Link,{to:f+"/"+o.id+"?type=clone"},e.createElement(y.Button,{type:"primary"},"克隆")),e.createElement(y.Popconfirm,{title:"确定要删除这个操作类型吗？",onConfirm:n.handleDeleteConfirm.bind(t,{id:o.id})},e.createElement("a",{href:"#"},"删除")))}}]);return e.createElement("div",null,e.createElement("div",{className:"switches-action-type"},e.createElement(m.Link,{to:""+f},e.createElement(y.Button,{type:"primary"},"添加"))),e.createElement("div",{className:o({tables:!0})},e.createElement(v.default,{columns:w,dataSource:d,store:l,expandedRowRender:s})))}}]),n}(e.Component))||f)||f);t.default=O}).call(t,n(1),n(15),n(2))},27:function(e,t,n){(function(e){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i,l=function(){function e(e,t){for(var n=0;t.length>n;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(6),c=n(5),s=(0,u.observer)(i=function(t){function n(e){return r(this,n),o(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e))}return a(n,t),l(n,[{key:"render",value:function(){var t=this.props,n=t.columns,r=t.dataSource,o=t.expandedRowRender,a={total:r.length,showTotal:function(e){return"总共 "+r.length+" 条"},showSizeChanger:!0,pageSizeOptions:[r.length+"","10","20","50","100"]};return e.createElement(c.Table,{columns:n,dataSource:r,pagination:a,expandedRowRender:o,scroll:{x:1200}})}}]),n}(e.Component))||i;t.default=s}).call(t,n(1))},40:function(e,t,n){(function(e,r){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u,c=function(){function e(e,t){for(var n=0;t.length>n;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(6),f=n(2),p=o(f),d=n(5),h=n(29),y=(o(h),n(32)),m=o(y),b=n(20),v=o(b),w=n(27),_=o(w),E=d.Select.Option,g=(0,s.observer)(u=function(t){function n(e){a(this,n);var t=i(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.state={visible:!1,validate:!0,insertType:"",uploadData:{columns:[],dataList:[]}},t}return l(n,t),c(n,[{key:"hideModal",value:function(){this.setState({visible:!1})}},{key:"handleChange",value:function(e){this.setState({insertType:e})}},{key:"handleSubmit",value:function(e){var t=this.props,n=t.store,r=t.params,o=r||{},a=this.state,i=a.uploadData,l=a.validate,u=a.insertType;!u&&d.Modal.error({title:" ",content:"导入方式不能为空"}),u&&l&&n.postServers({type:o.type,list:i.dataList},{insert_type:u}),u&&l&&this.hideModal()}},{key:"render",value:function(){var t=this,n=this.props.params,o=n||{},a={multiple:!1,name:"uploadfile",action:v.default.uploadCsvFile,data:{type:o.type},accept:".csv",headers:{authorization:"authorization-text",AuthToken:m.default.getAuthCookie("UserIfosSession")||""},onChange:function(n){if("done"===n.file.status){var o=n.file.response,a=o.statuscode,i=o.msg,l=o.data;if("200"==a){d.message.success(n.file.name+" 上传成功。");var u=l.conf,c=l.list,s=l.error,f=r.map(u,function(t,n){return{title:t,dataIndex:n,key:n,width:80,render:function(t,n,r){return t?e.createElement("div",{className:(0,p.default)({"item-error":!t.validate})},t.value):t}}});t.setState({visible:!0,validate:s,uploadData:{columns:f,dataList:c}})}else d.Modal.error({title:"",content:i})}else"error"===n.file.status&&d.Modal.error({title:"",content:n.file.name+" 上传失败。"})}},i=this.state,l=i.visible,u=i.validate,c=i.uploadData;return e.createElement("div",{className:"upload-btn"},e.createElement("div",{className:"action-type"},e.createElement(d.Upload,a,e.createElement(d.Button,{type:"ghost"},e.createElement(d.Icon,{type:"upload"})," 上传文件"))),e.createElement(d.Modal,{title:"上传内容",visible:l,cancelText:"重新上传",okText:"确认提交",width:"800",onOk:this.handleSubmit.bind(this),onCancel:this.hideModal.bind(this)},!u&&e.createElement("div",{className:"table-header-warning"},e.createElement("span",{className:"item-error"},"橙色"),"为验证有错的字段，请在CSV中修改后重新上传！"),e.createElement("div",{style:{margin:"10px 0"}},e.createElement(d.Select,{size:"large",defaultValue:"",style:{width:200},onChange:this.handleChange.bind(this)},e.createElement(E,{value:""},"请选择导入方式"),e.createElement(E,{value:"just_insert"},"追加导入"),e.createElement(E,{value:"delete_before_insert"},"清空导入"))),e.createElement(_.default,{columns:c.columns,dataSource:c.dataList})))}}]),n}(e.Component))||u;t.default=g}).call(t,n(1),n(15))}});