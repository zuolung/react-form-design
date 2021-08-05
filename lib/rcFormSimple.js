(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["plugin"] = factory();
	else
		root["plugin"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Form", function() { return _form__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _formItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormItem", function() { return _formItem__WEBPACK_IMPORTED_MODULE_1__["default"]; });



_form__WEBPACK_IMPORTED_MODULE_0__["default"].FormItem = _formItem__WEBPACK_IMPORTED_MODULE_1__["default"];

/* harmony default export */ __webpack_exports__["default"] = (_form__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _formContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _useForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
var _excluded = ["setCallback", "dispatch"];

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





function Form(_ref, ref) {
  var form = _ref.form,
      onFinish = _ref.onFinish,
      onFinishFailed = _ref.onFinishFailed,
      _ref$initValues = _ref.initValues,
      initValues = _ref$initValues === void 0 ? {} : _ref$initValues,
      children = _ref.children,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className;
  var formInstance = Object(_useForm__WEBPACK_IMPORTED_MODULE_2__["default"])(form, initValues);

  var setCallback = formInstance.setCallback,
      dispatch = formInstance.dispatch,
      providerFormInstance = _objectWithoutProperties(formInstance, _excluded);
  /* 向 form 中注册回调函数 */


  setCallback({
    onFinish: onFinish,
    onFinishFailed: onFinishFailed
  });
  /* Form 能够被 ref 标记，并操作实例。 */

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useImperativeHandle"])(ref, function () {
    return providerFormInstance;
  }, []);
  /* 传递 */

  var RenderChildren = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_formContext__WEBPACK_IMPORTED_MODULE_1__["default"].Provider, {
    value: formInstance
  }, " ", children, " ");
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    className: className,
    onReset: function onReset(e) {
      e.preventDefault();
      e.stopPropagation();
      formInstance.resetFields();
      /* 重置表单 */
    },
    onSubmit: function onSubmit(e) {
      e.preventDefault();
      e.stopPropagation();
      formInstance.submit();
      /* 提交表单 */
    }
  }, RenderChildren);
}

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(Form));

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var FormContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(null);
/* harmony default export */ __webpack_exports__["default"] = (FormContext);

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useForm; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _formStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



function useForm(form) {
  var defaultFormValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var formRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.useRef(null);

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState({}),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      forceUpdate = _React$useState2[1];

  if (!formRef.current) {
    if (form) {
      formRef.current = form;
      /* 如果已经有 form，那么复用当前 form  */
    } else {
      /* 没有 form 创建一个 form */
      var formStoreCurrent = new _formStore__WEBPACK_IMPORTED_MODULE_1__["default"](forceUpdate, defaultFormValue);
      /* 获取实例方法 */

      formRef.current = formStoreCurrent.getForm();
    }
  }

  return formRef.current;
}

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


/* 对外接口  */

var formInstanceApi = ['setCallback', 'dispatch', 'registerValidateFields', 'resetFields', 'setFields', 'setFieldsValue', 'getFieldsValue', 'getFieldValue', 'validateFields', 'submit', 'unRegisterValidate'];

var isReg = function isReg(value) {
  return value instanceof RegExp;
};

var FormStore = /*#__PURE__*/function () {
  function FormStore(forceUpdate) {
    var defaultFormValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, FormStore);

    this.FormUpdate = forceUpdate;
    /* 为 Form 的更新函数，目前没有用到 */

    this.model = {};
    /* 表单状态层 */

    this.control = {};
    /* 控制每个 formItem 的控制器  */

    this.isSchedule = false;
    /* 开启调度 */

    this.callback = {};
    /* 存放监听函数 callback */

    this.penddingValidateQueue = [];
    /* 批量更新队列 */

    this.defaultFormValue = defaultFormValue;
    /* 表单初始化的值 */
  }
  /* 提供操作form的方法 */


  _createClass(FormStore, [{
    key: "getForm",
    value: function getForm() {
      var _this = this;

      return formInstanceApi.reduce(function (map, item) {
        map[item] = _this[item].bind(_this);
        return map;
      }, {});
    }
    /* 创建一个验证模块 */

  }, {
    key: "setCallback",
    value:
    /* 处理回调函数 */
    function setCallback(callback) {
      if (callback) this.callback = callback;
    }
    /* 触发事件 */

  }, {
    key: "dispatch",
    value: function dispatch(action) {
      if (!action && _typeof(action) !== 'object') return null;
      var type = action.type;

      for (var _len = arguments.length, arg = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        arg[_key - 1] = arguments[_key];
      }

      if (~formInstanceApi.indexOf(type)) {
        return this[type].apply(this, arg);
      } else if (typeof this[type] === 'function') {
        return this[type].apply(this, arg);
      }
    }
    /* 注册表单单元项 */

  }, {
    key: "registerValidateFields",
    value: function registerValidateFields(name, control, model) {
      if (this.defaultFormValue[name]) model.value = this.defaultFormValue[name];
      /* 如果存在默认值的情况 */

      var validate = FormStore.createValidate(model);
      this.model[name] = validate;
      this.control[name] = control;
    }
    /* 卸载注册表单单元项 */

  }, {
    key: "unRegisterValidate",
    value: function unRegisterValidate(name) {
      delete this.model[name];
      delete this.control[name];
    }
    /* 通知对应FormItem更新 */

  }, {
    key: "notifyChange",
    value: function notifyChange(name) {
      var controller = this.control[name];
      if (controller) controller === null || controller === void 0 ? void 0 : controller.changeValue();
    }
    /* 重置表单 */

  }, {
    key: "resetFields",
    value: function resetFields() {
      var _this2 = this;

      Object.keys(this.model).forEach(function (modelName) {
        _this2.setValueClearStatus(_this2.model[modelName], modelName, null);
      });
    }
    /* 设置一组字段状态	  */

  }, {
    key: "setFields",
    value: function setFields(object) {
      var _this3 = this;

      if (_typeof(object) !== 'object') return;
      Object.keys(object).forEach(function (modelName) {
        _this3.setFieldsValue(modelName, object[modelName]);
      });
    }
    /* 设置表单值 */

  }, {
    key: "setFieldsValue",
    value: function setFieldsValue(name, modelValue) {
      var model = this.model[name];
      if (!model) return false;

      if (toString.call(modelValue) === '[Object, object]') {
        /* 设置表单项 */
        var message = modelValue.message,
            rule = modelValue.rule,
            value = modelValue.value;
        if (message) model.message = message;
        if (rule) model.rule = rule;
        if (value) model.value = value;
        model.status = 'pendding';
        this.validateFieldValue(name, true);
        /* 如果重新设置了验证规则，那么重新验证一次 */
      } else {
        this.setValueClearStatus(model, name, modelValue);
      }
    }
    /* 复制并清空状态 */

  }, {
    key: "setValueClearStatus",
    value: function setValueClearStatus(model, name, value) {
      model.value = value;
      model.status = 'pendding';
      this.notifyChange(name);
    }
    /* 获取表单数据层的值 */

  }, {
    key: "getFieldsValue",
    value: function getFieldsValue() {
      var _this4 = this;

      var formData = {};
      Object.keys(this.model).forEach(function (modelName) {
        formData[modelName] = _this4.model[modelName].value;
      });
      return formData;
    }
    /* 获取表单模型 */

  }, {
    key: "getFieldModel",
    value: function getFieldModel(name) {
      var model = this.model[name];
      return model ? model : {};
    }
    /* 获取对应字段名的值 */

  }, {
    key: "getFieldValue",
    value: function getFieldValue(name) {
      var model = this.model[name];
      if (!model && this.defaultFormValue[name]) return this.defaultFormValue[name];
      /* 没有注册，但是存在默认值的情况 */

      return model ? model.value : null;
    }
    /* 单一表单单元项验证 */

  }, {
    key: "validateFieldValue",
    value: function validateFieldValue(name) {
      var _this5 = this;

      var forceUpdate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var model = this.model[name];
      /* 记录上次状态 */

      var lastStatus = model.status;
      if (!model) return null;
      var required = model.required,
          rule = model.rule,
          value = model.value;
      var status = 'resolve';

      if (required && !value && value !== 0) {
        status = 'reject';
      }

      if (value || value === 0) {
        if (isReg(rule)) {
          /* 正则校验规则 */
          status = rule.test(value) ? 'resolve' : 'reject';
        } else if (typeof rule === 'function') {
          /* 自定义校验规则 */
          rule(value, function (message) {
            _this5.model[name].message = message;
            status = !message ? 'resolve' : 'reject';
          });
        }
      }

      model.status = status;

      if (lastStatus !== status || forceUpdate) {
        var notify = this.notifyChange.bind(this, name);
        this.penddingValidateQueue.push(notify);
      }

      this.scheduleValidate();
      return status;
    }
    /* 批量调度验证更新任务 */

  }, {
    key: "scheduleValidate",
    value: function scheduleValidate() {
      var _this6 = this;

      if (this.isSchedule) return;
      this.isSchedule = true;
      Promise.resolve().then(function () {
        Object(react_dom__WEBPACK_IMPORTED_MODULE_0__["unstable_batchedUpdates"])(function () {
          do {
            var notify = _this6.penddingValidateQueue.shift();

            notify && notify();
          } while (_this6.penddingValidateQueue.length > 0);

          _this6.isSchedule = false;
        });
      });
    }
    /* 表单整体验证 */

  }, {
    key: "validateFields",
    value: function validateFields(callback) {
      var _this7 = this;

      var errorsMess = [];
      Object.keys(this.model).forEach(function (modelName) {
        var modelStates = _this7.validateFieldValue(modelName, true);

        if (modelStates === 'reject') errorsMess.push(_this7.model[modelName].message);
      });
      callback(errorsMess);
    }
    /* 提交表单 */

  }, {
    key: "submit",
    value: function submit(cb) {
      var _this8 = this;

      this.validateFields(function (errorMess) {
        var _this8$callback = _this8.callback,
            onFinish = _this8$callback.onFinish,
            onFinishFailed = _this8$callback.onFinishFailed;

        var fieldValues = _this8.getFieldsValue();

        cb && cb(errorMess.length ? errorMess : null, fieldValues);
        if (!errorMess) onFinishFailed && typeof onFinishFailed === 'function' && onFinishFailed();
        /* 验证失败 */

        onFinish && typeof onFinish === 'function' && onFinish(_this8.getFieldsValue());
        /* 验证成功 */
      });
    }
  }], [{
    key: "createValidate",
    value: function createValidate(validateModal) {
      var value = validateModal.value,
          rule = validateModal.rule,
          required = validateModal.required,
          message = validateModal.message;
      return {
        value: value,
        rule: rule || function () {
          return true;
        },
        required: required || false,
        message: message || '',
        status: 'pendding'
      };
    }
  }]);

  return FormStore;
}();

/* harmony default export */ __webpack_exports__["default"] = (FormStore);

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FormItem; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _formContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _label__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8);
/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13);
/* harmony import */ var _formItem_less__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16);
/* harmony import */ var _formItem_less__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_formItem_less__WEBPACK_IMPORTED_MODULE_4__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var prefixCls = 'react-form-design-formItem';
function FormItem(_ref) {
  var name = _ref.name,
      children = _ref.children,
      label = _ref.label,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 50 : _ref$height,
      labelWidth = _ref.labelWidth,
      _ref$required = _ref.required,
      required = _ref$required === void 0 ? false : _ref$required,
      _ref$rules = _ref.rules,
      rules = _ref$rules === void 0 ? {} : _ref$rules,
      _ref$trigger = _ref.trigger,
      trigger = _ref$trigger === void 0 ? 'onChange' : _ref$trigger,
      _ref$validateTrigger = _ref.validateTrigger,
      validateTrigger = _ref$validateTrigger === void 0 ? 'onChange' : _ref$validateTrigger,
      _ref$labelClassName = _ref.labelClassName,
      labelClassName = _ref$labelClassName === void 0 ? '' : _ref$labelClassName,
      _ref$requiredClassNam = _ref.requiredClassName,
      requiredClassName = _ref$requiredClassNam === void 0 ? '' : _ref$requiredClassNam,
      _ref$controllClassNam = _ref.controllClassName,
      controllClassName = _ref$controllClassNam === void 0 ? '' : _ref$controllClassNam,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$requiredIcon = _ref.requiredIcon,
      requiredIcon = _ref$requiredIcon === void 0 ? '' : _ref$requiredIcon,
      _ref$messageShow = _ref.messageShow,
      messageShow = _ref$messageShow === void 0 ? 'all' : _ref$messageShow;
  var formInstance = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_formContext__WEBPACK_IMPORTED_MODULE_1__["default"]);
  var registerValidateFields = formInstance.registerValidateFields,
      dispatch = formInstance.dispatch,
      unRegisterValidate = formInstance.unRegisterValidate;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({}),
      _useState2 = _slicedToArray(_useState, 2),
      forceUpdate = _useState2[1];

  var onStoreChange = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    var onStoreChange = {
      changeValue: function changeValue() {
        forceUpdate({});
      }
    };
    return onStoreChange;
  }, [formInstance]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    /* 注册表单 */
    name && registerValidateFields(name, onStoreChange, _objectSpread(_objectSpread({}, rules), {}, {
      required: required
    }));
    return function () {
      name && unRegisterValidate(name);
    };
  }, [onStoreChange]);
  /* 使表单控件变成可控制的 */

  var getControlled = function getControlled(child) {
    var mergeChildrenProps = _objectSpread({}, child.props);

    if (!name) return mergeChildrenProps;
    /* 改变表单单元项的值 */

    var handleChange = function handleChange(e) {
      var value = Object.prototype.toString.call(e) === '[Object, object]' ? e.target.value : e;
      dispatch({
        type: 'setFieldsValue'
      }, name, value);
    };

    mergeChildrenProps[trigger] = handleChange;

    if (required || rules) {
      mergeChildrenProps[validateTrigger] = function (e) {
        /* 当改变值和验证表单，用统一一个事件 */
        if (validateTrigger === trigger) {
          handleChange(e);
        }
        /* 触发表单验证 */


        dispatch({
          type: 'validateFieldValue'
        }, name);
      };
    }
    /* 获取 value */


    mergeChildrenProps.value = dispatch({
      type: 'getFieldValue'
    }, name) || '';
    return mergeChildrenProps;
  };

  var renderChildren;

  if ( /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["isValidElement"])(children)) {
    renderChildren = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["cloneElement"])(children, getControlled(children));
  } else {
    renderChildren = children;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "".concat(prefixCls, " ").concat(className)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_label__WEBPACK_IMPORTED_MODULE_2__["default"], {
    height: height,
    label: label,
    labelWidth: labelWidth,
    required: required,
    className: labelClassName,
    requiredClassName: requiredClassName,
    requiredIcon: requiredIcon
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "".concat(prefixCls, "-controll ").concat(controllClassName)
  }, renderChildren, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_message__WEBPACK_IMPORTED_MODULE_3__["default"], _extends({
    name: label,
    messageShow: messageShow
  }, dispatch({
    type: 'getFieldModel'
  }, name)))));
}

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Label; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _label_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);
/* harmony import */ var _label_less__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_label_less__WEBPACK_IMPORTED_MODULE_1__);


var prefixCls = 'react-form-design';
function Label(_ref) {
  var label = _ref.label,
      required = _ref.required,
      requiredClassName = _ref.requiredClassName,
      requiredIcon = _ref.requiredIcon,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "".concat(prefixCls, "-label ").concat(className)
  }, required ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, requiredIcon || /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: requiredClassName,
    style: {
      color: 'red'
    }
  }, "*")) : null, label);
}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(10);
            var content = __webpack_require__(11);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".react-form-design-label {\n  width: 68px;\n  font-size: 14px;\n  line-height: 44px;\n}\n", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Message; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _message_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14);
/* harmony import */ var _message_less__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_message_less__WEBPACK_IMPORTED_MODULE_1__);


function Message(_ref) {
  var status = _ref.status,
      message = _ref.message,
      required = _ref.required,
      name = _ref.name,
      value = _ref.value,
      messageShow = _ref.messageShow;
  var config = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    var mess = '';
    var color = '#fff';
    var ifShow = true;

    if (required && !value && status === 'reject') {
      mess = "".concat(name, " \u4E0D\u80FD\u4E3A\u7A7A");
      color = 'red';
    } else if (status === 'reject') {
      mess = message;
      color = 'red';
    } else if (status === 'pendding') {
      mess = null;
    } else if (status === 'resolve') {
      mess = '校验通过';
      color = 'green';
    }

    if (messageShow === 'success' && status === 'resolve') {
      ifShow = true;
    } else ifShow = false;

    if (messageShow === 'failed' && status === 'reject') {
      ifShow = true;
    } else ifShow = false;

    if (messageShow === 'all') ifShow = true;
    if (messageShow === 'hidden') ifShow = false;
    return {
      color: color,
      mess: mess,
      ifShow: ifShow
    };
  }, [status, message, required, name, value, messageShow]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, config.ifShow ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "react-form-design-message"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    style: {
      color: config.color
    }
  }, config.mess)) : '');
}

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(10);
            var content = __webpack_require__(15);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".react-form-design-message {\n  font-size: 12px;\n  margin-top: 4px;\n}\n", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(10);
            var content = __webpack_require__(17);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".react-form-design-formItem {\n  display: flex;\n  flex-direction: row;\n  align-items: flex-start;\n  height: 60px;\n  margin-bottom: 20px;\n}\n.react-form-design-formItem-controll {\n  margin-left: 20px;\n}\n", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ })
/******/ ])["default"];
});