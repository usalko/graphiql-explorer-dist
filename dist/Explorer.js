"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
exports.defaultValue = defaultValue;
var React = _interopRequireWildcard(require("react"));
var _graphql = require("graphql");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// Names match class names in graphiql app.css
// https://github.com/graphql/graphiql/blob/master/packages/graphiql/css/app.css
var defaultColors = {
  keyword: '#B11A04',
  // OperationName, FragmentName
  def: '#D2054E',
  // FieldName
  property: '#1F61A0',
  // FieldAlias
  qualifier: '#1C92A9',
  // ArgumentName and ObjectFieldName
  attribute: '#8B2BB9',
  number: '#2882F9',
  string: '#D64292',
  // Boolean
  builtin: '#D47509',
  // Enum
  string2: '#0B7FC7',
  variable: '#397D13',
  // Type
  atom: '#CA9800'
};
var defaultArrowOpen = /*#__PURE__*/React.createElement("svg", {
  width: "12",
  height: "9"
}, /*#__PURE__*/React.createElement("path", {
  fill: "#666",
  d: "M 0 2 L 9 2 L 4.5 7.5 z"
}));
var defaultArrowClosed = /*#__PURE__*/React.createElement("svg", {
  width: "12",
  height: "9"
}, /*#__PURE__*/React.createElement("path", {
  fill: "#666",
  d: "M 0 0 L 0 9 L 5.5 4.5 z"
}));
var defaultCheckboxChecked = /*#__PURE__*/React.createElement("svg", {
  style: {
    marginRight: '3px',
    marginLeft: '-3px'
  },
  width: "12",
  height: "12",
  viewBox: "0 0 18 18",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, /*#__PURE__*/React.createElement("path", {
  d: "M16 0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H16C17.1 18 18 17.1 18 16V2C18 0.9 17.1 0 16 0ZM16 16H2V2H16V16ZM14.99 6L13.58 4.58L6.99 11.17L4.41 8.6L2.99 10.01L6.99 14L14.99 6Z",
  fill: "#666"
}));
var defaultCheckboxUnchecked = /*#__PURE__*/React.createElement("svg", {
  style: {
    marginRight: '3px',
    marginLeft: '-3px'
  },
  width: "12",
  height: "12",
  viewBox: "0 0 18 18",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, /*#__PURE__*/React.createElement("path", {
  d: "M16 2V16H2V2H16ZM16 0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H16C17.1 18 18 17.1 18 16V2C18 0.9 17.1 0 16 0Z",
  fill: "#CCC"
}));
function Checkbox(props) {
  return props.checked ? props.styleConfig.checkboxChecked : props.styleConfig.checkboxUnchecked;
}
function defaultGetDefaultFieldNames(type) {
  var fields = type.getFields();

  // Is there an `id` field?
  if (fields['id']) {
    var res = ['id'];
    if (fields['email']) {
      res.push('email');
    } else if (fields['name']) {
      res.push('name');
    }
    return res;
  }

  // Is there an `edges` field?
  if (fields['edges']) {
    return ['edges'];
  }

  // Is there an `node` field?
  if (fields['node']) {
    return ['node'];
  }
  if (fields['nodes']) {
    return ['nodes'];
  }

  // Include all leaf-type fields.
  var leafFieldNames = [];
  Object.keys(fields).forEach(function (fieldName) {
    if ((0, _graphql.isLeafType)(fields[fieldName].type)) {
      leafFieldNames.push(fieldName);
    }
  });
  if (!leafFieldNames.length) {
    // No leaf fields, add typename so that the query stays valid
    return ['__typename'];
  }
  return leafFieldNames.slice(0, 2); // Prevent too many fields from being added
}

function isRequiredArgument(arg) {
  return (0, _graphql.isNonNullType)(arg.type) && arg.defaultValue === undefined;
}
function unwrapOutputType(outputType) {
  var unwrappedType = outputType;
  while ((0, _graphql.isWrappingType)(unwrappedType)) {
    unwrappedType = unwrappedType.ofType;
  }
  return unwrappedType;
}
function unwrapInputType(inputType) {
  var unwrappedType = inputType;
  while ((0, _graphql.isWrappingType)(unwrappedType)) {
    unwrappedType = unwrappedType.ofType;
  }
  return unwrappedType;
}
function coerceArgValue(argType, value) {
  // Handle the case where we're setting a variable as the value
  if (typeof value !== 'string' && value.kind === 'VariableDefinition') {
    return value.variable;
  } else if ((0, _graphql.isScalarType)(argType)) {
    try {
      switch (argType.name) {
        case 'String':
          return {
            kind: 'StringValue',
            value: String(argType.parseValue(value))
          };
        case 'Float':
          return {
            kind: 'FloatValue',
            value: String(argType.parseValue(parseFloat(value)))
          };
        case 'Int':
          return {
            kind: 'IntValue',
            value: String(argType.parseValue(parseInt(value, 10)))
          };
        case 'Boolean':
          try {
            var parsed = JSON.parse(value);
            if (typeof parsed === 'boolean') {
              return {
                kind: 'BooleanValue',
                value: parsed
              };
            } else {
              return {
                kind: 'BooleanValue',
                value: false
              };
            }
          } catch (e) {
            return {
              kind: 'BooleanValue',
              value: false
            };
          }
        default:
          return {
            kind: 'StringValue',
            value: String(argType.parseValue(value))
          };
      }
    } catch (e) {
      console.error('error coercing arg value', e, value);
      return {
        kind: 'StringValue',
        value: value
      };
    }
  } else {
    try {
      var parsedValue = argType.parseValue(value);
      if (parsedValue) {
        return {
          kind: 'EnumValue',
          value: String(parsedValue)
        };
      } else {
        return {
          kind: 'EnumValue',
          value: argType.getValues()[0].name
        };
      }
    } catch (e) {
      return {
        kind: 'EnumValue',
        value: argType.getValues()[0].name
      };
    }
  }
}
var InputArgView = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(InputArgView, _React$PureComponent);
  var _super = _createSuper(InputArgView);
  function InputArgView() {
    var _this;
    _classCallCheck(this, InputArgView);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "_previousArgSelection", void 0);
    _defineProperty(_assertThisInitialized(_this), "_getArgSelection", function () {
      return _this.props.selection.fields.find(function (field) {
        return field.name.value === _this.props.arg.name;
      });
    });
    _defineProperty(_assertThisInitialized(_this), "_removeArg", function () {
      var selection = _this.props.selection;
      var argSelection = _this._getArgSelection();
      _this._previousArgSelection = argSelection;
      _this.props.modifyFields(selection.fields.filter(function (field) {
        return field !== argSelection;
      }), true);
    });
    _defineProperty(_assertThisInitialized(_this), "_addArg", function () {
      var _this$props = _this.props,
        selection = _this$props.selection,
        arg = _this$props.arg,
        getDefaultScalarArgValue = _this$props.getDefaultScalarArgValue,
        parentField = _this$props.parentField,
        makeDefaultArg = _this$props.makeDefaultArg;
      var argType = unwrapInputType(arg.type);
      var argSelection = null;
      if (_this._previousArgSelection) {
        argSelection = _this._previousArgSelection;
      } else if ((0, _graphql.isInputObjectType)(argType)) {
        var _fields = argType.getFields();
        argSelection = {
          kind: 'ObjectField',
          name: {
            kind: 'Name',
            value: arg.name
          },
          value: {
            kind: 'ObjectValue',
            fields: defaultInputObjectFields(getDefaultScalarArgValue, makeDefaultArg, parentField, Object.keys(_fields).map(function (k) {
              return _fields[k];
            }))
          }
        };
      } else if ((0, _graphql.isLeafType)(argType)) {
        argSelection = {
          kind: 'ObjectField',
          name: {
            kind: 'Name',
            value: arg.name
          },
          value: getDefaultScalarArgValue(parentField, arg, argType)
        };
      }
      if (!argSelection) {
        console.error('Unable to add arg for argType', argType);
      } else {
        return _this.props.modifyFields([].concat(_toConsumableArray(selection.fields || []), [argSelection]), true);
      }
    });
    _defineProperty(_assertThisInitialized(_this), "_setArgValue", function (event, options) {
      var settingToNull = false;
      var settingToVariable = false;
      var settingToLiteralValue = false;
      try {
        if (event.kind === 'VariableDefinition') {
          settingToVariable = true;
        } else if (event === null || typeof event === 'undefined') {
          settingToNull = true;
        } else if (typeof event.kind === 'string') {
          settingToLiteralValue = true;
        }
      } catch (e) {}
      var selection = _this.props.selection;
      var argSelection = _this._getArgSelection();
      if (!argSelection) {
        console.error('missing arg selection when setting arg value');
        return;
      }
      var argType = unwrapInputType(_this.props.arg.type);
      var handleable = (0, _graphql.isLeafType)(argType) || settingToVariable || settingToNull || settingToLiteralValue;
      if (!handleable) {
        console.warn('Unable to handle non leaf types in InputArgView.setArgValue', event);
        return;
      }
      var targetValue;
      var value;
      if (event === null || typeof event === 'undefined') {
        value = null;
      } else if (!event.target && !!event.kind && event.kind === 'VariableDefinition') {
        targetValue = event;
        value = targetValue.variable;
      } else if (typeof event.kind === 'string') {
        value = event;
      } else if (event.target && typeof event.target.value === 'string') {
        targetValue = event.target.value;
        value = coerceArgValue(argType, targetValue);
      }
      var newDoc = _this.props.modifyFields((selection.fields || []).map(function (field) {
        var isTarget = field === argSelection;
        var newField = isTarget ? _objectSpread(_objectSpread({}, field), {}, {
          value: value
        }) : field;
        return newField;
      }), options);
      return newDoc;
    });
    _defineProperty(_assertThisInitialized(_this), "_modifyChildFields", function (fields) {
      return _this.props.modifyFields(_this.props.selection.fields.map(function (field) {
        return field.name.value === _this.props.arg.name ? _objectSpread(_objectSpread({}, field), {}, {
          value: {
            kind: 'ObjectValue',
            fields: fields
          }
        }) : field;
      }), true);
    });
    return _this;
  }
  _createClass(InputArgView, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
        arg = _this$props2.arg,
        parentField = _this$props2.parentField;
      var argSelection = this._getArgSelection();
      return /*#__PURE__*/React.createElement(AbstractArgView, {
        argValue: argSelection ? argSelection.value : null,
        arg: arg,
        parentField: parentField,
        addArg: this._addArg,
        removeArg: this._removeArg,
        setArgFields: this._modifyChildFields,
        setArgValue: this._setArgValue,
        getDefaultScalarArgValue: this.props.getDefaultScalarArgValue,
        makeDefaultArg: this.props.makeDefaultArg,
        onRunOperation: this.props.onRunOperation,
        styleConfig: this.props.styleConfig,
        onCommit: this.props.onCommit,
        definition: this.props.definition
      });
    }
  }]);
  return InputArgView;
}(React.PureComponent);
function defaultValue(argType) {
  if ((0, _graphql.isEnumType)(argType)) {
    return {
      kind: 'EnumValue',
      value: argType.getValues()[0].name
    };
  } else {
    switch (argType.name) {
      case 'String':
        return {
          kind: 'StringValue',
          value: ''
        };
      case 'Float':
        return {
          kind: 'FloatValue',
          value: '1.5'
        };
      case 'Int':
        return {
          kind: 'IntValue',
          value: '10'
        };
      case 'Boolean':
        return {
          kind: 'BooleanValue',
          value: false
        };
      default:
        return {
          kind: 'StringValue',
          value: ''
        };
    }
  }
}
function defaultGetDefaultScalarArgValue(parentField, arg, argType) {
  return defaultValue(argType);
}
var ArgView = /*#__PURE__*/function (_React$PureComponent2) {
  _inherits(ArgView, _React$PureComponent2);
  var _super2 = _createSuper(ArgView);
  function ArgView() {
    var _this2;
    _classCallCheck(this, ArgView);
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    _this2 = _super2.call.apply(_super2, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this2), "_previousArgSelection", void 0);
    _defineProperty(_assertThisInitialized(_this2), "_getArgSelection", function () {
      var selection = _this2.props.selection;
      return (selection.arguments || []).find(function (arg) {
        return arg.name.value === _this2.props.arg.name;
      });
    });
    _defineProperty(_assertThisInitialized(_this2), "_removeArg", function (commit) {
      var selection = _this2.props.selection;
      var argSelection = _this2._getArgSelection();
      _this2._previousArgSelection = argSelection;
      return _this2.props.modifyArguments((selection.arguments || []).filter(function (arg) {
        return arg !== argSelection;
      }), commit);
    });
    _defineProperty(_assertThisInitialized(_this2), "_addArg", function (commit) {
      var _this2$props = _this2.props,
        selection = _this2$props.selection,
        getDefaultScalarArgValue = _this2$props.getDefaultScalarArgValue,
        makeDefaultArg = _this2$props.makeDefaultArg,
        parentField = _this2$props.parentField,
        arg = _this2$props.arg;
      var argType = unwrapInputType(arg.type);
      var argSelection = null;
      if (_this2._previousArgSelection) {
        argSelection = _this2._previousArgSelection;
      } else if ((0, _graphql.isInputObjectType)(argType)) {
        var _fields2 = argType.getFields();
        argSelection = {
          kind: 'Argument',
          name: {
            kind: 'Name',
            value: arg.name
          },
          value: {
            kind: 'ObjectValue',
            fields: defaultInputObjectFields(getDefaultScalarArgValue, makeDefaultArg, parentField, Object.keys(_fields2).map(function (k) {
              return _fields2[k];
            }))
          }
        };
      } else if ((0, _graphql.isLeafType)(argType)) {
        argSelection = {
          kind: 'Argument',
          name: {
            kind: 'Name',
            value: arg.name
          },
          value: getDefaultScalarArgValue(parentField, arg, argType)
        };
      }
      if (!argSelection) {
        console.error('Unable to add arg for argType', argType);
        return null;
      } else {
        return _this2.props.modifyArguments([].concat(_toConsumableArray(selection.arguments || []), [argSelection]), commit);
      }
    });
    _defineProperty(_assertThisInitialized(_this2), "_setArgValue", function (event, options) {
      var settingToNull = false;
      var settingToVariable = false;
      var settingToLiteralValue = false;
      try {
        if (event.kind === 'VariableDefinition') {
          settingToVariable = true;
        } else if (event === null || typeof event === 'undefined') {
          settingToNull = true;
        } else if (typeof event.kind === 'string') {
          settingToLiteralValue = true;
        }
      } catch (e) {}
      var selection = _this2.props.selection;
      var argSelection = _this2._getArgSelection();
      if (!argSelection && !settingToVariable) {
        console.error('missing arg selection when setting arg value');
        return;
      }
      var argType = unwrapInputType(_this2.props.arg.type);
      var handleable = (0, _graphql.isLeafType)(argType) || settingToVariable || settingToNull || settingToLiteralValue;
      if (!handleable) {
        console.warn('Unable to handle non leaf types in ArgView._setArgValue');
        return;
      }
      var targetValue;
      var value;
      if (event === null || typeof event === 'undefined') {
        value = null;
      } else if (event.target && typeof event.target.value === 'string') {
        targetValue = event.target.value;
        value = coerceArgValue(argType, targetValue);
      } else if (!event.target && event.kind === 'VariableDefinition') {
        targetValue = event;
        value = targetValue.variable;
      } else if (typeof event.kind === 'string') {
        value = event;
      }
      return _this2.props.modifyArguments((selection.arguments || []).map(function (a) {
        return a === argSelection ? _objectSpread(_objectSpread({}, a), {}, {
          value: value
        }) : a;
      }), options);
    });
    _defineProperty(_assertThisInitialized(_this2), "_setArgFields", function (fields, commit) {
      var selection = _this2.props.selection;
      var argSelection = _this2._getArgSelection();
      if (!argSelection) {
        console.error('missing arg selection when setting arg value');
        return;
      }
      return _this2.props.modifyArguments((selection.arguments || []).map(function (a) {
        return a === argSelection ? _objectSpread(_objectSpread({}, a), {}, {
          value: {
            kind: 'ObjectValue',
            fields: fields
          }
        }) : a;
      }), commit);
    });
    return _this2;
  }
  _createClass(ArgView, [{
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
        arg = _this$props3.arg,
        parentField = _this$props3.parentField;
      var argSelection = this._getArgSelection();
      return /*#__PURE__*/React.createElement(AbstractArgView, {
        argValue: argSelection ? argSelection.value : null,
        arg: arg,
        parentField: parentField,
        addArg: this._addArg,
        removeArg: this._removeArg,
        setArgFields: this._setArgFields,
        setArgValue: this._setArgValue,
        getDefaultScalarArgValue: this.props.getDefaultScalarArgValue,
        makeDefaultArg: this.props.makeDefaultArg,
        onRunOperation: this.props.onRunOperation,
        styleConfig: this.props.styleConfig,
        onCommit: this.props.onCommit,
        definition: this.props.definition
      });
    }
  }]);
  return ArgView;
}(React.PureComponent);
function isRunShortcut(event) {
  return event.ctrlKey && event.key === 'Enter';
}
function canRunOperation(operationName) {
  // it does not make sense to try to execute a fragment
  return operationName !== 'FragmentDefinition';
}
var ScalarInput = /*#__PURE__*/function (_React$PureComponent3) {
  _inherits(ScalarInput, _React$PureComponent3);
  var _super3 = _createSuper(ScalarInput);
  function ScalarInput() {
    var _this3;
    _classCallCheck(this, ScalarInput);
    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }
    _this3 = _super3.call.apply(_super3, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this3), "_ref", void 0);
    _defineProperty(_assertThisInitialized(_this3), "_handleChange", function (event) {
      _this3.props.setArgValue(event, true);
    });
    return _this3;
  }
  _createClass(ScalarInput, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var input = this._ref;
      var activeElement = document.activeElement;
      if (input && activeElement && !(activeElement instanceof HTMLTextAreaElement)) {
        input.focus();
        input.setSelectionRange(0, input.value.length);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;
      var _this$props4 = this.props,
        arg = _this$props4.arg,
        argValue = _this$props4.argValue,
        styleConfig = _this$props4.styleConfig;
      var argType = unwrapInputType(arg.type);
      var value = typeof argValue.value === 'string' ? argValue.value : '';
      var color = this.props.argValue.kind === 'StringValue' ? styleConfig.colors.string : styleConfig.colors.number;
      return /*#__PURE__*/React.createElement("span", {
        style: {
          color: color
        }
      }, argType.name === 'String' ? '"' : '', /*#__PURE__*/React.createElement("input", {
        style: {
          border: 'none',
          borderBottom: '1px solid #888',
          outline: 'none',
          width: "".concat(Math.max(1, Math.min(15, value.length)), "ch"),
          color: color
        },
        ref: function ref(_ref) {
          _this4._ref = _ref;
        },
        type: "text",
        onChange: this._handleChange,
        value: value
      }), argType.name === 'String' ? '"' : '');
    }
  }]);
  return ScalarInput;
}(React.PureComponent);
var AbstractArgView = /*#__PURE__*/function (_React$PureComponent4) {
  _inherits(AbstractArgView, _React$PureComponent4);
  var _super4 = _createSuper(AbstractArgView);
  function AbstractArgView() {
    var _this5;
    _classCallCheck(this, AbstractArgView);
    for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      args[_key4] = arguments[_key4];
    }
    _this5 = _super4.call.apply(_super4, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this5), "state", {
      displayArgActions: false
    });
    return _this5;
  }
  _createClass(AbstractArgView, [{
    key: "render",
    value: function render() {
      var _this6 = this;
      var _this$props5 = this.props,
        argValue = _this$props5.argValue,
        arg = _this$props5.arg,
        styleConfig = _this$props5.styleConfig;
      /* TODO: handle List types*/
      var argType = unwrapInputType(arg.type);
      var input = null;
      if (argValue) {
        if (argValue.kind === 'Variable') {
          input = /*#__PURE__*/React.createElement("span", {
            style: {
              color: styleConfig.colors.variable
            }
          }, "$", argValue.name.value);
        } else if ((0, _graphql.isScalarType)(argType)) {
          if (argType.name === 'Boolean') {
            input = /*#__PURE__*/React.createElement("select", {
              style: {
                color: styleConfig.colors.builtin
              },
              onChange: this.props.setArgValue,
              value: argValue.kind === 'BooleanValue' ? argValue.value : undefined
            }, /*#__PURE__*/React.createElement("option", {
              key: "true",
              value: "true"
            }, "true"), /*#__PURE__*/React.createElement("option", {
              key: "false",
              value: "false"
            }, "false"));
          } else {
            input = /*#__PURE__*/React.createElement(ScalarInput, {
              setArgValue: this.props.setArgValue,
              arg: arg,
              argValue: argValue,
              onRunOperation: this.props.onRunOperation,
              styleConfig: this.props.styleConfig
            });
          }
        } else if ((0, _graphql.isEnumType)(argType)) {
          if (argValue.kind === 'EnumValue') {
            input = /*#__PURE__*/React.createElement("select", {
              style: {
                backgroundColor: 'white',
                color: styleConfig.colors.string2
              },
              onChange: this.props.setArgValue,
              value: argValue.value
            }, argType.getValues().map(function (value) {
              return /*#__PURE__*/React.createElement("option", {
                key: value.name,
                value: value.name
              }, value.name);
            }));
          } else {
            console.error('arg mismatch between arg and selection', argType, argValue);
          }
        } else if ((0, _graphql.isInputObjectType)(argType)) {
          if (argValue.kind === 'ObjectValue') {
            var _fields3 = argType.getFields();
            input = /*#__PURE__*/React.createElement("div", {
              style: {
                marginLeft: 16
              }
            }, Object.keys(_fields3).sort().map(function (fieldName) {
              return /*#__PURE__*/React.createElement(InputArgView, {
                key: fieldName,
                arg: _fields3[fieldName],
                parentField: _this6.props.parentField,
                selection: argValue,
                modifyFields: _this6.props.setArgFields,
                getDefaultScalarArgValue: _this6.props.getDefaultScalarArgValue,
                makeDefaultArg: _this6.props.makeDefaultArg,
                onRunOperation: _this6.props.onRunOperation,
                styleConfig: _this6.props.styleConfig,
                onCommit: _this6.props.onCommit,
                definition: _this6.props.definition
              });
            }));
          } else {
            console.error('arg mismatch between arg and selection', argType, argValue);
          }
        }
      }
      var variablize = function variablize() {
        /**
        1. Find current operation variables
        2. Find current arg value
        3. Create a new variable
        4. Replace current arg value with variable
        5. Add variable to operation
        */

        var baseVariableName = arg.name;
        var conflictingNameCount = (_this6.props.definition.variableDefinitions || []).filter(function (varDef) {
          return varDef.variable.name.value.startsWith(baseVariableName);
        }).length;
        var variableName;
        if (conflictingNameCount > 0) {
          variableName = "".concat(baseVariableName).concat(conflictingNameCount);
        } else {
          variableName = baseVariableName;
        }
        // To get an AST definition of our variable from the instantiated arg,
        // we print it to a string, then parseType to get our AST.
        var argPrintedType = arg.type.toString();
        var argType = (0, _graphql.parseType)(argPrintedType);
        var base = {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: {
              kind: 'Name',
              value: variableName
            }
          },
          type: argType,
          directives: []
        };
        var variableDefinitionByName = function variableDefinitionByName(name) {
          return (_this6.props.definition.variableDefinitions || []).find(function (varDef) {
            return varDef.variable.name.value === name;
          });
        };
        var variable;
        var subVariableUsageCountByName = {};
        if (typeof argValue !== 'undefined' && argValue !== null) {
          /** In the process of devariabilizing descendent selections,
           * we may have caused their variable definitions to become unused.
           * Keep track and remove any variable definitions with 1 or fewer usages.
           * */
          var cleanedDefaultValue = (0, _graphql.visit)(argValue, {
            Variable: function Variable(node) {
              var varName = node.name.value;
              var varDef = variableDefinitionByName(varName);
              subVariableUsageCountByName[varName] = subVariableUsageCountByName[varName] + 1 || 1;
              if (!varDef) {
                return;
              }
              return varDef.defaultValue;
            }
          });
          var isNonNullable = base.type.kind === 'NonNullType';

          // We're going to give the variable definition a default value, so we must make its type nullable
          var unwrappedBase = isNonNullable ? _objectSpread(_objectSpread({}, base), {}, {
            type: base.type.type
          }) : base;
          variable = _objectSpread(_objectSpread({}, unwrappedBase), {}, {
            defaultValue: cleanedDefaultValue
          });
        } else {
          variable = base;
        }
        var newlyUnusedVariables = Object.entries(subVariableUsageCountByName)
        // $FlowFixMe: Can't get Object.entries to realize usageCount *must* be a number
        .filter(function (_ref2) {
          var _ref3 = _slicedToArray(_ref2, 2),
            _ = _ref3[0],
            usageCount = _ref3[1];
          return usageCount < 2;
        }).map(function (_ref4) {
          var _ref5 = _slicedToArray(_ref4, 2),
            varName = _ref5[0],
            _ = _ref5[1];
          return varName;
        });
        if (variable) {
          var _newDoc = _this6.props.setArgValue(variable, false);
          if (_newDoc) {
            var targetOperation = _newDoc.definitions.find(function (definition) {
              if (!!definition.operation && !!definition.name && !!definition.name.value &&
              //
              !!_this6.props.definition.name && !!_this6.props.definition.name.value) {
                return definition.name.value === _this6.props.definition.name.value;
              } else {
                return false;
              }
            });
            var newVariableDefinitions = [].concat(_toConsumableArray(targetOperation.variableDefinitions || []), [variable]).filter(function (varDef) {
              return newlyUnusedVariables.indexOf(varDef.variable.name.value) === -1;
            });
            var newOperation = _objectSpread(_objectSpread({}, targetOperation), {}, {
              variableDefinitions: newVariableDefinitions
            });
            var existingDefs = _newDoc.definitions;
            var newDefinitions = existingDefs.map(function (existingOperation) {
              if (targetOperation === existingOperation) {
                return newOperation;
              } else {
                return existingOperation;
              }
            });
            var finalDoc = _objectSpread(_objectSpread({}, _newDoc), {}, {
              definitions: newDefinitions
            });
            _this6.props.onCommit(finalDoc);
          }
        }
      };
      var devariablize = function devariablize() {
        /**
         * 1. Find the current variable definition in the operation def
         * 2. Extract its value
         * 3. Replace the current arg value
         * 4. Visit the resulting operation to see if there are any other usages of the variable
         * 5. If not, remove the variableDefinition
         */
        if (!argValue || !argValue.name || !argValue.name.value) {
          return;
        }
        var variableName = argValue.name.value;
        var variableDefinition = (_this6.props.definition.variableDefinitions || []).find(function (varDef) {
          return varDef.variable.name.value === variableName;
        });
        if (!variableDefinition) {
          return;
        }
        var defaultValue = variableDefinition.defaultValue;
        var newDoc = _this6.props.setArgValue(defaultValue, {
          commit: false
        });
        if (newDoc) {
          var targetOperation = newDoc.definitions.find(function (definition) {
            return definition.name.value === _this6.props.definition.name.value;
          });
          if (!targetOperation) {
            return;
          }

          // After de-variabilizing, see if the variable is still in use. If not, remove it.
          var variableUseCount = 0;
          (0, _graphql.visit)(targetOperation, {
            Variable: function Variable(node) {
              if (node.name.value === variableName) {
                variableUseCount = variableUseCount + 1;
              }
            }
          });
          var newVariableDefinitions = targetOperation.variableDefinitions || [];

          // A variable is in use if it shows up at least twice (once in the definition, once in the selection)
          if (variableUseCount < 2) {
            newVariableDefinitions = newVariableDefinitions.filter(function (varDef) {
              return varDef.variable.name.value !== variableName;
            });
          }
          var newOperation = _objectSpread(_objectSpread({}, targetOperation), {}, {
            variableDefinitions: newVariableDefinitions
          });
          var existingDefs = newDoc.definitions;
          var newDefinitions = existingDefs.map(function (existingOperation) {
            if (targetOperation === existingOperation) {
              return newOperation;
            } else {
              return existingOperation;
            }
          });
          var finalDoc = _objectSpread(_objectSpread({}, newDoc), {}, {
            definitions: newDefinitions
          });
          _this6.props.onCommit(finalDoc);
        }
      };
      var isArgValueVariable = argValue && argValue.kind === 'Variable';
      var variablizeActionButton = !this.state.displayArgActions ? null : /*#__PURE__*/React.createElement("button", {
        type: "submit",
        className: "toolbar-button",
        title: isArgValueVariable ? 'Remove the variable' : 'Extract the current value into a GraphQL variable',
        onClick: function onClick(event) {
          event.preventDefault();
          event.stopPropagation();
          if (isArgValueVariable) {
            devariablize();
          } else {
            variablize();
          }
        },
        style: styleConfig.styles.actionButtonStyle
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          color: styleConfig.colors.variable
        }
      }, '$'));
      return /*#__PURE__*/React.createElement("div", {
        style: {
          cursor: 'pointer',
          minHeight: '16px',
          WebkitUserSelect: 'none',
          userSelect: 'none'
        },
        "data-arg-name": arg.name,
        "data-arg-type": argType.name,
        className: "graphiql-explorer-".concat(arg.name)
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          cursor: 'pointer'
        },
        onClick: function onClick(event) {
          var shouldAdd = !argValue;
          if (shouldAdd) {
            _this6.props.addArg(true);
          } else {
            _this6.props.removeArg(true);
          }
          _this6.setState({
            displayArgActions: shouldAdd
          });
        }
      }, (0, _graphql.isInputObjectType)(argType) ? /*#__PURE__*/React.createElement("span", null, !!argValue ? this.props.styleConfig.arrowOpen : this.props.styleConfig.arrowClosed) : /*#__PURE__*/React.createElement(Checkbox, {
        checked: !!argValue,
        styleConfig: this.props.styleConfig
      }), /*#__PURE__*/React.createElement("span", {
        style: {
          color: styleConfig.colors.attribute
        },
        title: arg.description,
        onMouseEnter: function onMouseEnter() {
          // Make implementation a bit easier and only show 'variablize' action if arg is already added
          if (argValue !== null && typeof argValue !== 'undefined') {
            _this6.setState({
              displayArgActions: true
            });
          }
        },
        onMouseLeave: function onMouseLeave() {
          return _this6.setState({
            displayArgActions: false
          });
        }
      }, arg.name, isRequiredArgument(arg) ? '*' : '', ": ", variablizeActionButton, ' '), ' '), input || /*#__PURE__*/React.createElement("span", null), ' ');
    }
  }]);
  return AbstractArgView;
}(React.PureComponent);
var AbstractView = /*#__PURE__*/function (_React$PureComponent5) {
  _inherits(AbstractView, _React$PureComponent5);
  var _super5 = _createSuper(AbstractView);
  function AbstractView() {
    var _this7;
    _classCallCheck(this, AbstractView);
    for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
      args[_key5] = arguments[_key5];
    }
    _this7 = _super5.call.apply(_super5, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this7), "_previousSelection", void 0);
    _defineProperty(_assertThisInitialized(_this7), "_addFragment", function () {
      _this7.props.modifySelections([].concat(_toConsumableArray(_this7.props.selections), [_this7._previousSelection || {
        kind: 'InlineFragment',
        typeCondition: {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: _this7.props.implementingType.name
          }
        },
        selectionSet: {
          kind: 'SelectionSet',
          selections: _this7.props.getDefaultFieldNames(_this7.props.implementingType).map(function (fieldName) {
            return {
              kind: 'Field',
              name: {
                kind: 'Name',
                value: fieldName
              }
            };
          })
        }
      }]));
    });
    _defineProperty(_assertThisInitialized(_this7), "_removeFragment", function () {
      var thisSelection = _this7._getSelection();
      _this7._previousSelection = thisSelection;
      _this7.props.modifySelections(_this7.props.selections.filter(function (s) {
        return s !== thisSelection;
      }));
    });
    _defineProperty(_assertThisInitialized(_this7), "_getSelection", function () {
      var selection = _this7.props.selections.find(function (selection) {
        return selection.kind === 'InlineFragment' && selection.typeCondition && _this7.props.implementingType.name === selection.typeCondition.name.value;
      });
      if (!selection) {
        return null;
      }
      if (selection.kind === 'InlineFragment') {
        return selection;
      }
    });
    _defineProperty(_assertThisInitialized(_this7), "_modifyChildSelections", function (selections, options) {
      var thisSelection = _this7._getSelection();
      return _this7.props.modifySelections(_this7.props.selections.map(function (selection) {
        if (selection === thisSelection) {
          return {
            directives: selection.directives,
            kind: 'InlineFragment',
            typeCondition: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: _this7.props.implementingType.name
              }
            },
            selectionSet: {
              kind: 'SelectionSet',
              selections: selections
            }
          };
        }
        return selection;
      }), options);
    });
    return _this7;
  }
  _createClass(AbstractView, [{
    key: "render",
    value: function render() {
      var _this8 = this;
      var _this$props6 = this.props,
        implementingType = _this$props6.implementingType,
        schema = _this$props6.schema,
        getDefaultFieldNames = _this$props6.getDefaultFieldNames,
        styleConfig = _this$props6.styleConfig;
      var selection = this._getSelection();
      var fields = implementingType.getFields();
      var childSelections = selection ? selection.selectionSet ? selection.selectionSet.selections : [] : [];
      return /*#__PURE__*/React.createElement("div", {
        className: "graphiql-explorer-".concat(implementingType.name)
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          cursor: 'pointer'
        },
        onClick: selection ? this._removeFragment : this._addFragment
      }, /*#__PURE__*/React.createElement(Checkbox, {
        checked: !!selection,
        styleConfig: this.props.styleConfig
      }), /*#__PURE__*/React.createElement("span", {
        style: {
          color: styleConfig.colors.atom
        }
      }, this.props.implementingType.name)), selection ? /*#__PURE__*/React.createElement("div", {
        style: {
          marginLeft: 16
        }
      }, Object.keys(fields).sort().map(function (fieldName) {
        return /*#__PURE__*/React.createElement(FieldView, {
          key: fieldName,
          field: fields[fieldName],
          selections: childSelections,
          modifySelections: _this8._modifyChildSelections,
          schema: schema,
          getDefaultFieldNames: getDefaultFieldNames,
          getDefaultScalarArgValue: _this8.props.getDefaultScalarArgValue,
          makeDefaultArg: _this8.props.makeDefaultArg,
          onRunOperation: _this8.props.onRunOperation,
          onCommit: _this8.props.onCommit,
          styleConfig: _this8.props.styleConfig,
          definition: _this8.props.definition,
          availableFragments: _this8.props.availableFragments
        });
      })) : null);
    }
  }]);
  return AbstractView;
}(React.PureComponent);
var FragmentView = /*#__PURE__*/function (_React$PureComponent6) {
  _inherits(FragmentView, _React$PureComponent6);
  var _super6 = _createSuper(FragmentView);
  function FragmentView() {
    var _this9;
    _classCallCheck(this, FragmentView);
    for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
      args[_key6] = arguments[_key6];
    }
    _this9 = _super6.call.apply(_super6, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this9), "_previousSelection", void 0);
    _defineProperty(_assertThisInitialized(_this9), "_addFragment", function () {
      _this9.props.modifySelections([].concat(_toConsumableArray(_this9.props.selections), [_this9._previousSelection || {
        kind: 'FragmentSpread',
        name: _this9.props.fragment.name
      }]));
    });
    _defineProperty(_assertThisInitialized(_this9), "_removeFragment", function () {
      var thisSelection = _this9._getSelection();
      _this9._previousSelection = thisSelection;
      _this9.props.modifySelections(_this9.props.selections.filter(function (s) {
        var isTargetSelection = s.kind === 'FragmentSpread' && s.name.value === _this9.props.fragment.name.value;
        return !isTargetSelection;
      }));
    });
    _defineProperty(_assertThisInitialized(_this9), "_getSelection", function () {
      var selection = _this9.props.selections.find(function (selection) {
        return selection.kind === 'FragmentSpread' && selection.name.value === _this9.props.fragment.name.value;
      });
      return selection;
    });
    return _this9;
  }
  _createClass(FragmentView, [{
    key: "render",
    value: function render() {
      var styleConfig = this.props.styleConfig;
      var selection = this._getSelection();
      return /*#__PURE__*/React.createElement("div", {
        className: "graphiql-explorer-".concat(this.props.fragment.name.value)
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          cursor: 'pointer'
        },
        onClick: selection ? this._removeFragment : this._addFragment
      }, /*#__PURE__*/React.createElement(Checkbox, {
        checked: !!selection,
        styleConfig: this.props.styleConfig
      }), /*#__PURE__*/React.createElement("span", {
        style: {
          color: styleConfig.colors.def
        },
        className: "graphiql-explorer-".concat(this.props.fragment.name.value)
      }, this.props.fragment.name.value)));
    }
  }]);
  return FragmentView;
}(React.PureComponent);
function defaultInputObjectFields(getDefaultScalarArgValue, makeDefaultArg, parentField, fields) {
  var nodes = [];
  var _iterator = _createForOfIteratorHelper(fields),
    _step;
  try {
    var _loop = function _loop() {
      var field = _step.value;
      if ((0, _graphql.isRequiredInputField)(field) || makeDefaultArg && makeDefaultArg(parentField, field)) {
        var fieldType = unwrapInputType(field.type);
        if ((0, _graphql.isInputObjectType)(fieldType)) {
          var _fields4 = fieldType.getFields();
          nodes.push({
            kind: 'ObjectField',
            name: {
              kind: 'Name',
              value: field.name
            },
            value: {
              kind: 'ObjectValue',
              fields: defaultInputObjectFields(getDefaultScalarArgValue, makeDefaultArg, parentField, Object.keys(_fields4).map(function (k) {
                return _fields4[k];
              }))
            }
          });
        } else if ((0, _graphql.isLeafType)(fieldType)) {
          nodes.push({
            kind: 'ObjectField',
            name: {
              kind: 'Name',
              value: field.name
            },
            value: getDefaultScalarArgValue(parentField, field, fieldType)
          });
        }
      }
    };
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      _loop();
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return nodes;
}
function defaultArgs(getDefaultScalarArgValue, makeDefaultArg, field) {
  var args = [];
  var _iterator2 = _createForOfIteratorHelper(field.args),
    _step2;
  try {
    var _loop2 = function _loop2() {
      var arg = _step2.value;
      if (isRequiredArgument(arg) || makeDefaultArg && makeDefaultArg(field, arg)) {
        var argType = unwrapInputType(arg.type);
        if ((0, _graphql.isInputObjectType)(argType)) {
          var _fields5 = argType.getFields();
          args.push({
            kind: 'Argument',
            name: {
              kind: 'Name',
              value: arg.name
            },
            value: {
              kind: 'ObjectValue',
              fields: defaultInputObjectFields(getDefaultScalarArgValue, makeDefaultArg, field, Object.keys(_fields5).map(function (k) {
                return _fields5[k];
              }))
            }
          });
        } else if ((0, _graphql.isLeafType)(argType)) {
          args.push({
            kind: 'Argument',
            name: {
              kind: 'Name',
              value: arg.name
            },
            value: getDefaultScalarArgValue(field, arg, argType)
          });
        }
      }
    };
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      _loop2();
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
  return args;
}
var FieldView = /*#__PURE__*/function (_React$PureComponent7) {
  _inherits(FieldView, _React$PureComponent7);
  var _super7 = _createSuper(FieldView);
  function FieldView() {
    var _this10;
    _classCallCheck(this, FieldView);
    for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
      args[_key7] = arguments[_key7];
    }
    _this10 = _super7.call.apply(_super7, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this10), "state", {
      displayFieldActions: false
    });
    _defineProperty(_assertThisInitialized(_this10), "_previousSelection", void 0);
    _defineProperty(_assertThisInitialized(_this10), "_addAllFieldsToSelections", function (rawSubfields) {
      var subFields = !!rawSubfields ? Object.keys(rawSubfields).map(function (fieldName) {
        return {
          kind: 'Field',
          name: {
            kind: 'Name',
            value: fieldName
          },
          arguments: []
        };
      }) : [];
      var subSelectionSet = {
        kind: 'SelectionSet',
        selections: subFields
      };
      var nextSelections = [].concat(_toConsumableArray(_this10.props.selections.filter(function (selection) {
        if (selection.kind === 'InlineFragment') {
          return true;
        } else {
          // Remove the current selection set for the target field
          return selection.name.value !== _this10.props.field.name;
        }
      })), [{
        kind: 'Field',
        name: {
          kind: 'Name',
          value: _this10.props.field.name
        },
        arguments: defaultArgs(_this10.props.getDefaultScalarArgValue, _this10.props.makeDefaultArg, _this10.props.field),
        selectionSet: subSelectionSet
      }]);
      _this10.props.modifySelections(nextSelections);
    });
    _defineProperty(_assertThisInitialized(_this10), "_addFieldToSelections", function (rawSubfields) {
      var nextSelections = [].concat(_toConsumableArray(_this10.props.selections), [_this10._previousSelection || {
        kind: 'Field',
        name: {
          kind: 'Name',
          value: _this10.props.field.name
        },
        arguments: defaultArgs(_this10.props.getDefaultScalarArgValue, _this10.props.makeDefaultArg, _this10.props.field)
      }]);
      _this10.props.modifySelections(nextSelections);
    });
    _defineProperty(_assertThisInitialized(_this10), "_handleUpdateSelections", function (event) {
      var selection = _this10._getSelection();
      if (selection && !event.altKey) {
        _this10._removeFieldFromSelections();
      } else {
        var fieldType = (0, _graphql.getNamedType)(_this10.props.field.type);
        var rawSubfields = (0, _graphql.isObjectType)(fieldType) && fieldType.getFields();
        var shouldSelectAllSubfields = !!rawSubfields && event.altKey;
        shouldSelectAllSubfields ? _this10._addAllFieldsToSelections(rawSubfields) : _this10._addFieldToSelections(rawSubfields);
      }
    });
    _defineProperty(_assertThisInitialized(_this10), "_removeFieldFromSelections", function () {
      var previousSelection = _this10._getSelection();
      _this10._previousSelection = previousSelection;
      _this10.props.modifySelections(_this10.props.selections.filter(function (selection) {
        return selection !== previousSelection;
      }));
    });
    _defineProperty(_assertThisInitialized(_this10), "_getSelection", function () {
      var selection = _this10.props.selections.find(function (selection) {
        return selection.kind === 'Field' && _this10.props.field.name === selection.name.value;
      });
      if (!selection) {
        return null;
      }
      if (selection.kind === 'Field') {
        return selection;
      }
    });
    _defineProperty(_assertThisInitialized(_this10), "_setArguments", function (argumentNodes, options) {
      var selection = _this10._getSelection();
      if (!selection) {
        console.error('Missing selection when setting arguments', argumentNodes);
        return;
      }
      return _this10.props.modifySelections(_this10.props.selections.map(function (s) {
        return s === selection ? {
          alias: selection.alias,
          arguments: argumentNodes,
          directives: selection.directives,
          kind: 'Field',
          name: selection.name,
          selectionSet: selection.selectionSet
        } : s;
      }), options);
    });
    _defineProperty(_assertThisInitialized(_this10), "_modifyChildSelections", function (selections, options) {
      return _this10.props.modifySelections(_this10.props.selections.map(function (selection) {
        if (selection.kind === 'Field' && _this10.props.field.name === selection.name.value) {
          if (selection.kind !== 'Field') {
            throw new Error('invalid selection');
          }
          return {
            alias: selection.alias,
            arguments: selection.arguments,
            directives: selection.directives,
            kind: 'Field',
            name: selection.name,
            selectionSet: {
              kind: 'SelectionSet',
              selections: selections
            }
          };
        }
        return selection;
      }), options);
    });
    return _this10;
  }
  _createClass(FieldView, [{
    key: "render",
    value: function render() {
      var _this11 = this;
      var _this$props7 = this.props,
        field = _this$props7.field,
        schema = _this$props7.schema,
        getDefaultFieldNames = _this$props7.getDefaultFieldNames,
        styleConfig = _this$props7.styleConfig;
      var selection = this._getSelection();
      var type = unwrapOutputType(field.type);
      var args = field.args.sort(function (a, b) {
        return a.name.localeCompare(b.name);
      });
      var className = "graphiql-explorer-node graphiql-explorer-".concat(field.name);
      if (field.isDeprecated) {
        className += ' graphiql-explorer-deprecated';
      }
      var applicableFragments = (0, _graphql.isObjectType)(type) || (0, _graphql.isInterfaceType)(type) || (0, _graphql.isUnionType)(type) ? this.props.availableFragments && this.props.availableFragments[type.name] : null;
      var node = /*#__PURE__*/React.createElement("div", {
        className: className
      }, /*#__PURE__*/React.createElement("span", {
        title: field.description,
        style: {
          cursor: 'pointer',
          display: 'inline-flex',
          alignItems: 'center',
          minHeight: '16px',
          WebkitUserSelect: 'none',
          userSelect: 'none'
        },
        "data-field-name": field.name,
        "data-field-type": type.name,
        onClick: this._handleUpdateSelections,
        onMouseEnter: function onMouseEnter() {
          var containsMeaningfulSubselection = (0, _graphql.isObjectType)(type) && selection && selection.selectionSet && selection.selectionSet.selections.filter(function (selection) {
            return selection.kind !== 'FragmentSpread';
          }).length > 0;
          if (containsMeaningfulSubselection) {
            _this11.setState({
              displayFieldActions: true
            });
          }
        },
        onMouseLeave: function onMouseLeave() {
          return _this11.setState({
            displayFieldActions: false
          });
        }
      }, (0, _graphql.isObjectType)(type) ? /*#__PURE__*/React.createElement("span", null, !!selection ? this.props.styleConfig.arrowOpen : this.props.styleConfig.arrowClosed) : null, (0, _graphql.isObjectType)(type) ? null : /*#__PURE__*/React.createElement(Checkbox, {
        checked: !!selection,
        styleConfig: this.props.styleConfig
      }), /*#__PURE__*/React.createElement("span", {
        style: {
          color: styleConfig.colors.property
        },
        className: "graphiql-explorer-field-view"
      }, field.name), !this.state.displayFieldActions ? null : /*#__PURE__*/React.createElement("button", {
        type: "submit",
        className: "toolbar-button",
        title: "Extract selections into a new reusable fragment",
        onClick: function onClick(event) {
          event.preventDefault();
          event.stopPropagation();
          // 1. Create a fragment spread node
          // 2. Copy selections from this object to fragment
          // 3. Replace selections in this object with fragment spread
          // 4. Add fragment to document
          var typeName = type.name;
          var newFragmentName = "".concat(typeName, "Fragment");
          var conflictingNameCount = (applicableFragments || []).filter(function (fragment) {
            return fragment.name.value.startsWith(newFragmentName);
          }).length;
          if (conflictingNameCount > 0) {
            newFragmentName = "".concat(newFragmentName).concat(conflictingNameCount);
          }
          var childSelections = selection ? selection.selectionSet ? selection.selectionSet.selections : [] : [];
          var nextSelections = [{
            kind: 'FragmentSpread',
            name: {
              kind: 'Name',
              value: newFragmentName
            },
            directives: []
          }];
          var newFragmentDefinition = {
            kind: 'FragmentDefinition',
            name: {
              kind: 'Name',
              value: newFragmentName
            },
            typeCondition: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: type.name
              }
            },
            directives: [],
            selectionSet: {
              kind: 'SelectionSet',
              selections: childSelections
            }
          };
          var newDoc = _this11._modifyChildSelections(nextSelections, false);
          if (newDoc) {
            var newDocWithFragment = _objectSpread(_objectSpread({}, newDoc), {}, {
              definitions: [].concat(_toConsumableArray(newDoc.definitions), [newFragmentDefinition])
            });
            _this11.props.onCommit(newDocWithFragment);
          } else {
            console.warn('Unable to complete extractFragment operation');
          }
        },
        style: _objectSpread({}, styleConfig.styles.actionButtonStyle)
      }, /*#__PURE__*/React.createElement("span", null, '…'))), selection && args.length ? /*#__PURE__*/React.createElement("div", {
        style: {
          marginLeft: 16
        },
        className: "graphiql-explorer-graphql-arguments"
      }, args.map(function (arg) {
        return /*#__PURE__*/React.createElement(ArgView, {
          key: arg.name,
          parentField: field,
          arg: arg,
          selection: selection,
          modifyArguments: _this11._setArguments,
          getDefaultScalarArgValue: _this11.props.getDefaultScalarArgValue,
          makeDefaultArg: _this11.props.makeDefaultArg,
          onRunOperation: _this11.props.onRunOperation,
          styleConfig: _this11.props.styleConfig,
          onCommit: _this11.props.onCommit,
          definition: _this11.props.definition
        });
      })) : null);
      if (selection && ((0, _graphql.isObjectType)(type) || (0, _graphql.isInterfaceType)(type) || (0, _graphql.isUnionType)(type))) {
        var _fields6 = (0, _graphql.isUnionType)(type) ? {} : type.getFields();
        var childSelections = selection ? selection.selectionSet ? selection.selectionSet.selections : [] : [];
        return /*#__PURE__*/React.createElement("div", {
          className: "graphiql-explorer-".concat(field.name)
        }, node, /*#__PURE__*/React.createElement("div", {
          style: {
            marginLeft: 16
          }
        }, !!applicableFragments ? applicableFragments.map(function (fragment) {
          var type = schema.getType(fragment.typeCondition.name.value);
          var fragmentName = fragment.name.value;
          return !type ? null : /*#__PURE__*/React.createElement(FragmentView, {
            key: fragmentName,
            fragment: fragment,
            selections: childSelections,
            modifySelections: _this11._modifyChildSelections,
            schema: schema,
            styleConfig: _this11.props.styleConfig,
            onCommit: _this11.props.onCommit
          });
        }) : null, Object.keys(_fields6).sort().map(function (fieldName) {
          return /*#__PURE__*/React.createElement(FieldView, {
            key: fieldName,
            field: _fields6[fieldName],
            selections: childSelections,
            modifySelections: _this11._modifyChildSelections,
            schema: schema,
            getDefaultFieldNames: getDefaultFieldNames,
            getDefaultScalarArgValue: _this11.props.getDefaultScalarArgValue,
            makeDefaultArg: _this11.props.makeDefaultArg,
            onRunOperation: _this11.props.onRunOperation,
            styleConfig: _this11.props.styleConfig,
            onCommit: _this11.props.onCommit,
            definition: _this11.props.definition,
            availableFragments: _this11.props.availableFragments
          });
        }), (0, _graphql.isInterfaceType)(type) || (0, _graphql.isUnionType)(type) ? schema.getPossibleTypes(type).map(function (type) {
          return /*#__PURE__*/React.createElement(AbstractView, {
            key: type.name,
            implementingType: type,
            selections: childSelections,
            modifySelections: _this11._modifyChildSelections,
            schema: schema,
            getDefaultFieldNames: getDefaultFieldNames,
            getDefaultScalarArgValue: _this11.props.getDefaultScalarArgValue,
            makeDefaultArg: _this11.props.makeDefaultArg,
            onRunOperation: _this11.props.onRunOperation,
            styleConfig: _this11.props.styleConfig,
            onCommit: _this11.props.onCommit,
            definition: _this11.props.definition
          });
        }) : null));
      }
      return node;
    }
  }]);
  return FieldView;
}(React.PureComponent);
function parseQuery(text) {
  try {
    if (!text.trim()) {
      return null;
    }
    return (0, _graphql.parse)(text,
    // Tell graphql to not bother track locations when parsing, we don't need
    // it and it's a tiny bit more expensive.
    {
      noLocation: true
    });
  } catch (e) {
    return new Error(e);
  }
}
var DEFAULT_OPERATION = {
  kind: 'OperationDefinition',
  operation: 'query',
  variableDefinitions: [],
  name: {
    kind: 'Name',
    value: 'MyQuery'
  },
  directives: [],
  selectionSet: {
    kind: 'SelectionSet',
    selections: []
  }
};
var DEFAULT_DOCUMENT = {
  kind: 'Document',
  definitions: [DEFAULT_OPERATION]
};
var parseQueryMemoize = null;
function memoizeParseQuery(query) {
  if (parseQueryMemoize && parseQueryMemoize[0] === query) {
    return parseQueryMemoize[1];
  } else {
    var result = parseQuery(query);
    if (!result) {
      return DEFAULT_DOCUMENT;
    } else if (result instanceof Error) {
      if (parseQueryMemoize) {
        // Most likely a temporarily invalid query while they type
        return parseQueryMemoize[1];
      } else {
        return DEFAULT_DOCUMENT;
      }
    } else {
      parseQueryMemoize = [query, result];
      return result;
    }
  }
}
var defaultStyles = {
  buttonStyle: {
    fontSize: '1.2em',
    padding: '0px',
    backgroundColor: 'white',
    border: 'none',
    margin: '5px 0px',
    height: '40px',
    width: '100%',
    display: 'block',
    maxWidth: 'none'
  },
  actionButtonStyle: {
    padding: '0px',
    backgroundColor: 'white',
    border: 'none',
    margin: '0px',
    maxWidth: 'none',
    height: '15px',
    width: '15px',
    display: 'inline-block',
    fontSize: 'smaller'
  },
  explorerActionsStyle: {
    margin: '4px -8px -8px',
    paddingLeft: '8px',
    bottom: '0px',
    width: '100%',
    textAlign: 'center',
    background: 'none',
    borderTop: 'none',
    borderBottom: 'none'
  }
};
var RootView = /*#__PURE__*/function (_React$PureComponent8) {
  _inherits(RootView, _React$PureComponent8);
  var _super8 = _createSuper(RootView);
  function RootView() {
    var _this12;
    _classCallCheck(this, RootView);
    for (var _len8 = arguments.length, args = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
      args[_key8] = arguments[_key8];
    }
    _this12 = _super8.call.apply(_super8, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this12), "state", {
      newOperationType: 'query',
      displayTitleActions: false
    });
    _defineProperty(_assertThisInitialized(_this12), "_previousOperationDef", void 0);
    _defineProperty(_assertThisInitialized(_this12), "_modifySelections", function (selections, options) {
      var operationDef = _this12.props.definition;
      if (operationDef.selectionSet.selections.length === 0 && _this12._previousOperationDef) {
        operationDef = _this12._previousOperationDef;
      }
      var newOperationDef;
      if (operationDef.kind === 'FragmentDefinition') {
        newOperationDef = _objectSpread(_objectSpread({}, operationDef), {}, {
          selectionSet: _objectSpread(_objectSpread({}, operationDef.selectionSet), {}, {
            selections: selections
          })
        });
      } else if (operationDef.kind === 'OperationDefinition') {
        var cleanedSelections = selections.filter(function (selection) {
          return !(selection.kind === 'Field' && selection.name.value === '__typename');
        });
        if (cleanedSelections.length === 0) {
          cleanedSelections = [{
            kind: 'Field',
            name: {
              kind: 'Name',
              value: '__typename ## Placeholder value'
            }
          }];
        }
        newOperationDef = _objectSpread(_objectSpread({}, operationDef), {}, {
          selectionSet: _objectSpread(_objectSpread({}, operationDef.selectionSet), {}, {
            selections: cleanedSelections
          })
        });
      }
      return _this12.props.onEdit(newOperationDef, options);
    });
    _defineProperty(_assertThisInitialized(_this12), "_onOperationRename", function (event) {
      return _this12.props.onOperationRename(event.target.value);
    });
    _defineProperty(_assertThisInitialized(_this12), "_handlePotentialRun", function (event) {
      if (isRunShortcut(event) && canRunOperation(_this12.props.definition.kind)) {
        _this12.props.onRunOperation(_this12.props.name);
      }
    });
    _defineProperty(_assertThisInitialized(_this12), "_rootViewElId", function () {
      var _this12$props = _this12.props,
        operationType = _this12$props.operationType,
        name = _this12$props.name;
      var rootViewElId = "".concat(operationType, "-").concat(name || 'unknown');
      return rootViewElId;
    });
    return _this12;
  }
  _createClass(RootView, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var rootViewElId = this._rootViewElId();
      this.props.onMount(rootViewElId);
    }
  }, {
    key: "render",
    value: function render() {
      var _this13 = this;
      var _this$props8 = this.props,
        operationType = _this$props8.operationType,
        definition = _this$props8.definition,
        schema = _this$props8.schema,
        getDefaultFieldNames = _this$props8.getDefaultFieldNames,
        styleConfig = _this$props8.styleConfig;
      var rootViewElId = this._rootViewElId();
      var fields = this.props.fields || {};
      var operationDef = definition;
      var selections = operationDef.selectionSet.selections;
      var operationDisplayName = this.props.name || "".concat(capitalize(operationType), " Name");
      return /*#__PURE__*/React.createElement("div", {
        id: rootViewElId,
        tabIndex: "0",
        onKeyDown: this._handlePotentialRun,
        style: {
          // The actions bar has its own top border
          borderBottom: this.props.isLast ? 'none' : '1px solid #d6d6d6',
          marginBottom: '0em',
          paddingBottom: '1em'
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          color: styleConfig.colors.keyword,
          paddingBottom: 4
        },
        className: "graphiql-operation-title-bar",
        onMouseEnter: function onMouseEnter() {
          return _this13.setState({
            displayTitleActions: true
          });
        },
        onMouseLeave: function onMouseLeave() {
          return _this13.setState({
            displayTitleActions: false
          });
        }
      }, operationType, ' ', /*#__PURE__*/React.createElement("span", {
        style: {
          color: styleConfig.colors.def
        }
      }, /*#__PURE__*/React.createElement("input", {
        style: {
          color: styleConfig.colors.def,
          border: 'none',
          borderBottom: '1px solid #888',
          outline: 'none',
          width: "".concat(Math.max(4, operationDisplayName.length), "ch")
        },
        autoComplete: "false",
        placeholder: "".concat(capitalize(operationType), " Name"),
        value: this.props.name,
        onKeyDown: this._handlePotentialRun,
        onChange: this._onOperationRename
      })), !!this.props.onTypeName ? /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("br", null), "on ".concat(this.props.onTypeName)) : '', !!this.state.displayTitleActions ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
        type: "submit",
        className: "toolbar-button",
        onClick: function onClick() {
          return _this13.props.onOperationDestroy();
        },
        style: _objectSpread({}, styleConfig.styles.actionButtonStyle)
      }, /*#__PURE__*/React.createElement("span", null, "\u2715")), /*#__PURE__*/React.createElement("button", {
        type: "submit",
        className: "toolbar-button",
        onClick: function onClick() {
          return _this13.props.onOperationClone();
        },
        style: _objectSpread({}, styleConfig.styles.actionButtonStyle)
      }, /*#__PURE__*/React.createElement("span", null, '⎘'))) : ''), Object.keys(fields).sort().map(function (fieldName) {
        return /*#__PURE__*/React.createElement(FieldView, {
          key: fieldName,
          field: fields[fieldName],
          selections: selections,
          modifySelections: _this13._modifySelections,
          schema: schema,
          getDefaultFieldNames: getDefaultFieldNames,
          getDefaultScalarArgValue: _this13.props.getDefaultScalarArgValue,
          makeDefaultArg: _this13.props.makeDefaultArg,
          onRunOperation: _this13.props.onRunOperation,
          styleConfig: _this13.props.styleConfig,
          onCommit: _this13.props.onCommit,
          definition: _this13.props.definition,
          availableFragments: _this13.props.availableFragments
        });
      }));
    }
  }]);
  return RootView;
}(React.PureComponent);
function Attribution() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'sans-serif',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      margin: '1em',
      marginTop: 0,
      flexGrow: 1,
      justifyContent: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid #d6d6d6',
      paddingTop: '1em',
      width: '100%',
      textAlign: 'center'
    }
  }, "GraphiQL Explorer by ", /*#__PURE__*/React.createElement("a", {
    href: "https://www.onegraph.com"
  }, "OneGraph")), /*#__PURE__*/React.createElement("div", null, "Contribute on", ' ', /*#__PURE__*/React.createElement("a", {
    href: "https://github.com/OneGraph/graphiql-explorer"
  }, "GitHub")));
}
var Explorer = /*#__PURE__*/function (_React$PureComponent9) {
  _inherits(Explorer, _React$PureComponent9);
  var _super9 = _createSuper(Explorer);
  function Explorer() {
    var _this14;
    _classCallCheck(this, Explorer);
    for (var _len9 = arguments.length, args = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
      args[_key9] = arguments[_key9];
    }
    _this14 = _super9.call.apply(_super9, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this14), "state", {
      newOperationType: 'query',
      operation: null,
      operationToScrollTo: null
    });
    _defineProperty(_assertThisInitialized(_this14), "_ref", void 0);
    _defineProperty(_assertThisInitialized(_this14), "_resetScroll", function () {
      var container = _this14._ref;
      if (container) {
        container.scrollLeft = 0;
      }
    });
    _defineProperty(_assertThisInitialized(_this14), "_onEdit", function (query) {
      return _this14.props.onEdit(query);
    });
    _defineProperty(_assertThisInitialized(_this14), "_setAddOperationType", function (value) {
      _this14.setState({
        newOperationType: value
      });
    });
    _defineProperty(_assertThisInitialized(_this14), "_handleRootViewMount", function (rootViewElId) {
      if (!!_this14.state.operationToScrollTo && _this14.state.operationToScrollTo === rootViewElId) {
        var selector = ".graphiql-explorer-root #".concat(rootViewElId);
        var el = document.querySelector(selector);
        el && el.scrollIntoView();
      }
    });
    return _this14;
  }
  _createClass(Explorer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this._resetScroll();
    }
  }, {
    key: "render",
    value: function render() {
      var _this15 = this;
      var _this$props9 = this.props,
        schema = _this$props9.schema,
        query = _this$props9.query,
        makeDefaultArg = _this$props9.makeDefaultArg;
      if (!schema) {
        return /*#__PURE__*/React.createElement("div", {
          style: {
            fontFamily: 'sans-serif'
          },
          className: "error-container"
        }, "No Schema Available");
      }
      var styleConfig = {
        colors: this.props.colors || defaultColors,
        checkboxChecked: this.props.checkboxChecked || defaultCheckboxChecked,
        checkboxUnchecked: this.props.checkboxUnchecked || defaultCheckboxUnchecked,
        arrowClosed: this.props.arrowClosed || defaultArrowClosed,
        arrowOpen: this.props.arrowOpen || defaultArrowOpen,
        styles: this.props.styles ? _objectSpread(_objectSpread({}, defaultStyles), this.props.styles) : defaultStyles
      };
      var queryType = schema.getQueryType();
      var mutationType = schema.getMutationType();
      var subscriptionType = schema.getSubscriptionType();
      if (!queryType && !mutationType && !subscriptionType) {
        return /*#__PURE__*/React.createElement("div", null, "Missing query type");
      }
      var queryFields = queryType && queryType.getFields();
      var mutationFields = mutationType && mutationType.getFields();
      var subscriptionFields = subscriptionType && subscriptionType.getFields();
      var parsedQuery = memoizeParseQuery(query);
      var getDefaultFieldNames = this.props.getDefaultFieldNames || defaultGetDefaultFieldNames;
      var getDefaultScalarArgValue = this.props.getDefaultScalarArgValue || defaultGetDefaultScalarArgValue;
      var definitions = parsedQuery.definitions;
      var _relevantOperations = definitions.map(function (definition) {
        if (definition.kind === 'FragmentDefinition') {
          return definition;
        } else if (definition.kind === 'OperationDefinition') {
          return definition;
        } else {
          return null;
        }
      }).filter(Boolean);
      var relevantOperations =
      // If we don't have any relevant definitions from the parsed document,
      // then at least show an expanded Query selection
      _relevantOperations.length === 0 ? DEFAULT_DOCUMENT.definitions : _relevantOperations;
      var renameOperation = function renameOperation(targetOperation, name) {
        var newName = name == null || name === '' ? null : {
          kind: 'Name',
          value: name,
          loc: undefined
        };
        var newOperation = _objectSpread(_objectSpread({}, targetOperation), {}, {
          name: newName
        });
        var existingDefs = parsedQuery.definitions;
        var newDefinitions = existingDefs.map(function (existingOperation) {
          if (targetOperation === existingOperation) {
            return newOperation;
          } else {
            return existingOperation;
          }
        });
        return _objectSpread(_objectSpread({}, parsedQuery), {}, {
          definitions: newDefinitions
        });
      };
      var cloneOperation = function cloneOperation(targetOperation) {
        var kind;
        if (targetOperation.kind === 'FragmentDefinition') {
          kind = 'fragment';
        } else {
          kind = targetOperation.operation;
        }
        var newOperationName = (targetOperation.name && targetOperation.name.value || '') + 'Copy';
        var newName = {
          kind: 'Name',
          value: newOperationName,
          loc: undefined
        };
        var newOperation = _objectSpread(_objectSpread({}, targetOperation), {}, {
          name: newName
        });
        var existingDefs = parsedQuery.definitions;
        var newDefinitions = [].concat(_toConsumableArray(existingDefs), [newOperation]);
        _this15.setState({
          operationToScrollTo: "".concat(kind, "-").concat(newOperationName)
        });
        return _objectSpread(_objectSpread({}, parsedQuery), {}, {
          definitions: newDefinitions
        });
      };
      var destroyOperation = function destroyOperation(targetOperation) {
        var existingDefs = parsedQuery.definitions;
        var newDefinitions = existingDefs.filter(function (existingOperation) {
          if (targetOperation === existingOperation) {
            return false;
          } else {
            return true;
          }
        });
        return _objectSpread(_objectSpread({}, parsedQuery), {}, {
          definitions: newDefinitions
        });
      };
      var addOperation = function addOperation(kind) {
        var existingDefs = parsedQuery.definitions;
        var viewingDefaultOperation = parsedQuery.definitions.length === 1 && parsedQuery.definitions[0] === DEFAULT_DOCUMENT.definitions[0];
        var MySiblingDefs = viewingDefaultOperation ? [] : existingDefs.filter(function (def) {
          if (def.kind === 'OperationDefinition') {
            return def.operation === kind;
          } else {
            // Don't support adding fragments from explorer
            return false;
          }
        });
        var newOperationName = "My".concat(capitalize(kind)).concat(MySiblingDefs.length === 0 ? '' : MySiblingDefs.length + 1);

        // Add this as the default field as it guarantees a valid selectionSet
        var firstFieldName = '__typename # Placeholder value';
        var selectionSet = {
          kind: 'SelectionSet',
          selections: [{
            kind: 'Field',
            name: {
              kind: 'Name',
              value: firstFieldName,
              loc: null
            },
            arguments: [],
            directives: [],
            selectionSet: null,
            loc: null
          }],
          loc: null
        };
        var newDefinition = {
          kind: 'OperationDefinition',
          operation: kind,
          name: {
            kind: 'Name',
            value: newOperationName
          },
          variableDefinitions: [],
          directives: [],
          selectionSet: selectionSet,
          loc: null
        };
        var newDefinitions =
        // If we only have our default operation in the document right now, then
        // just replace it with our new definition
        viewingDefaultOperation ? [newDefinition] : [].concat(_toConsumableArray(parsedQuery.definitions), [newDefinition]);
        var newOperationDef = _objectSpread(_objectSpread({}, parsedQuery), {}, {
          definitions: newDefinitions
        });
        _this15.setState({
          operationToScrollTo: "".concat(kind, "-").concat(newOperationName)
        });
        _this15.props.onEdit((0, _graphql.print)(newOperationDef));
      };
      var actionsOptions = [!!queryFields ? /*#__PURE__*/React.createElement("option", {
        key: "query",
        className: 'toolbar-button',
        style: styleConfig.styles.buttonStyle,
        type: "link",
        value: 'query'
      }, "Query") : null, !!mutationFields ? /*#__PURE__*/React.createElement("option", {
        key: "mutation",
        className: 'toolbar-button',
        style: styleConfig.styles.buttonStyle,
        type: "link",
        value: 'mutation'
      }, "Mutation") : null, !!subscriptionFields ? /*#__PURE__*/React.createElement("option", {
        key: "subscription",
        className: 'toolbar-button',
        style: styleConfig.styles.buttonStyle,
        type: "link",
        value: 'subscription'
      }, "Subscription") : null].filter(Boolean);
      var actionsEl = actionsOptions.length === 0 || this.props.hideActions ? null : /*#__PURE__*/React.createElement("div", {
        style: {
          minHeight: '50px',
          maxHeight: '50px',
          overflow: 'none'
        }
      }, /*#__PURE__*/React.createElement("form", {
        className: "variable-editor-title graphiql-explorer-actions",
        style: _objectSpread(_objectSpread({}, styleConfig.styles.explorerActionsStyle), {}, {
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          borderTop: '1px solid rgb(214, 214, 214)'
        }),
        onSubmit: function onSubmit(event) {
          return event.preventDefault();
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          display: 'inline-block',
          flexGrow: '0',
          textAlign: 'right'
        }
      }, "Add new", ' '), /*#__PURE__*/React.createElement("select", {
        onChange: function onChange(event) {
          return _this15._setAddOperationType(event.target.value);
        },
        value: this.state.newOperationType,
        style: {
          flexGrow: '2'
        }
      }, actionsOptions), /*#__PURE__*/React.createElement("button", {
        type: "submit",
        className: "toolbar-button",
        onClick: function onClick() {
          return _this15.state.newOperationType ? addOperation(_this15.state.newOperationType) : null;
        },
        style: _objectSpread(_objectSpread({}, styleConfig.styles.buttonStyle), {}, {
          height: '22px',
          width: '22px'
        })
      }, /*#__PURE__*/React.createElement("span", null, "+"))));
      var externalFragments = this.props.externalFragments && this.props.externalFragments.reduce(function (acc, fragment) {
        if (fragment.kind === 'FragmentDefinition') {
          var fragmentTypeName = fragment.typeCondition.name.value;
          var existingFragmentsForType = acc[fragmentTypeName] || [];
          var newFragmentsForType = [].concat(_toConsumableArray(existingFragmentsForType), [fragment]).sort(function (a, b) {
            return a.name.value.localeCompare(b.name.value);
          });
          return _objectSpread(_objectSpread({}, acc), {}, _defineProperty({}, fragmentTypeName, newFragmentsForType));
        }
        return acc;
      }, {});
      var documentFragments = relevantOperations.reduce(function (acc, operation) {
        if (operation.kind === 'FragmentDefinition') {
          var fragmentTypeName = operation.typeCondition.name.value;
          var existingFragmentsForType = acc[fragmentTypeName] || [];
          var newFragmentsForType = [].concat(_toConsumableArray(existingFragmentsForType), [operation]).sort(function (a, b) {
            return a.name.value.localeCompare(b.name.value);
          });
          return _objectSpread(_objectSpread({}, acc), {}, _defineProperty({}, fragmentTypeName, newFragmentsForType));
        }
        return acc;
      }, {});
      var availableFragments = _objectSpread(_objectSpread({}, documentFragments), externalFragments);
      var attribution = this.props.showAttribution ? /*#__PURE__*/React.createElement(Attribution, null) : null;
      return /*#__PURE__*/React.createElement("div", {
        ref: function ref(_ref6) {
          _this15._ref = _ref6;
        },
        style: {
          fontSize: 12,
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          margin: 0,
          padding: 8,
          fontFamily: 'Consolas, Inconsolata, "Droid Sans Mono", Monaco, monospace',
          display: 'flex',
          flexDirection: 'column',
          height: '100%'
        },
        className: "graphiql-explorer-root"
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          flexGrow: '1',
          overflow: 'scroll'
        }
      }, relevantOperations.map(function (operation, index) {
        var operationName = operation && operation.name && operation.name.value;
        var operationType = operation.kind === 'FragmentDefinition' ? 'fragment' : operation && operation.operation || 'query';
        var onOperationRename = function onOperationRename(newName) {
          var newOperationDef = renameOperation(operation, newName);
          _this15.props.onEdit((0, _graphql.print)(newOperationDef));
        };
        var onOperationClone = function onOperationClone() {
          var newOperationDef = cloneOperation(operation);
          _this15.props.onEdit((0, _graphql.print)(newOperationDef));
        };
        var onOperationDestroy = function onOperationDestroy() {
          var newOperationDef = destroyOperation(operation);
          _this15.props.onEdit((0, _graphql.print)(newOperationDef));
        };
        var fragmentType = operation.kind === 'FragmentDefinition' && operation.typeCondition.kind === 'NamedType' && schema.getType(operation.typeCondition.name.value);
        var fragmentFields = fragmentType instanceof _graphql.GraphQLObjectType ? fragmentType.getFields() : null;
        var fields = operationType === 'query' ? queryFields : operationType === 'mutation' ? mutationFields : operationType === 'subscription' ? subscriptionFields : operation.kind === 'FragmentDefinition' ? fragmentFields : null;
        var fragmentTypeName = operation.kind === 'FragmentDefinition' ? operation.typeCondition.name.value : null;
        var onCommit = function onCommit(parsedDocument) {
          var textualNewDocument = (0, _graphql.print)(parsedDocument);
          _this15.props.onEdit(textualNewDocument);
        };
        return /*#__PURE__*/React.createElement(RootView, {
          key: index,
          isLast: index === relevantOperations.length - 1,
          fields: fields,
          operationType: operationType,
          name: operationName,
          definition: operation,
          onOperationRename: onOperationRename,
          onOperationDestroy: onOperationDestroy,
          onOperationClone: onOperationClone,
          onTypeName: fragmentTypeName,
          onMount: _this15._handleRootViewMount,
          onCommit: onCommit,
          onEdit: function onEdit(newDefinition, options) {
            var commit;
            if (_typeof(options) === 'object' && typeof options.commit !== 'undefined') {
              commit = options.commit;
            } else {
              commit = true;
            }
            if (!!newDefinition) {
              var newQuery = _objectSpread(_objectSpread({}, parsedQuery), {}, {
                definitions: parsedQuery.definitions.map(function (existingDefinition) {
                  return existingDefinition === operation ? newDefinition : existingDefinition;
                })
              });
              if (commit) {
                onCommit(newQuery);
                return newQuery;
              } else {
                return newQuery;
              }
            } else {
              return parsedQuery;
            }
          },
          schema: schema,
          getDefaultFieldNames: getDefaultFieldNames,
          getDefaultScalarArgValue: getDefaultScalarArgValue,
          makeDefaultArg: makeDefaultArg,
          onRunOperation: function onRunOperation() {
            if (!!_this15.props.onRunOperation) {
              _this15.props.onRunOperation(operationName);
            }
          },
          styleConfig: styleConfig,
          availableFragments: availableFragments
        });
      }), attribution), actionsEl);
    }
  }]);
  return Explorer;
}(React.PureComponent);
_defineProperty(Explorer, "defaultProps", {
  getDefaultFieldNames: defaultGetDefaultFieldNames,
  getDefaultScalarArgValue: defaultGetDefaultScalarArgValue
});
var ErrorBoundary = /*#__PURE__*/function (_React$Component) {
  _inherits(ErrorBoundary, _React$Component);
  var _super10 = _createSuper(ErrorBoundary);
  function ErrorBoundary() {
    var _this16;
    _classCallCheck(this, ErrorBoundary);
    for (var _len10 = arguments.length, args = new Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
      args[_key10] = arguments[_key10];
    }
    _this16 = _super10.call.apply(_super10, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this16), "state", {
      hasError: false,
      error: null,
      errorInfo: null
    });
    return _this16;
  }
  _createClass(ErrorBoundary, [{
    key: "componentDidCatch",
    value: function componentDidCatch(error, errorInfo) {
      this.setState({
        hasError: true,
        error: error,
        errorInfo: errorInfo
      });
      console.error('Error in component', error, errorInfo);
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.hasError) {
        return /*#__PURE__*/React.createElement("div", {
          style: {
            padding: 18,
            fontFamily: 'sans-serif'
          }
        }, /*#__PURE__*/React.createElement("div", null, "Something went wrong"), /*#__PURE__*/React.createElement("details", {
          style: {
            whiteSpace: 'pre-wrap'
          }
        }, this.state.error ? this.state.error.toString() : null, /*#__PURE__*/React.createElement("br", null), this.state.errorInfo ? this.state.errorInfo.componentStack : null));
      }
      return this.props.children;
    }
  }]);
  return ErrorBoundary;
}(React.Component);
var ExplorerWrapper = /*#__PURE__*/function (_React$PureComponent10) {
  _inherits(ExplorerWrapper, _React$PureComponent10);
  var _super11 = _createSuper(ExplorerWrapper);
  function ExplorerWrapper() {
    _classCallCheck(this, ExplorerWrapper);
    return _super11.apply(this, arguments);
  }
  _createClass(ExplorerWrapper, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", {
        className: "docExplorerWrap",
        style: {
          height: '100%',
          width: this.props.width,
          minWidth: this.props.width,
          zIndex: 7,
          display: this.props.explorerIsOpen ? 'flex' : 'none',
          flexDirection: 'column',
          overflow: 'hidden'
        }
      }, /*#__PURE__*/React.createElement("div", {
        className: "doc-explorer-title-bar"
      }, /*#__PURE__*/React.createElement("div", {
        className: "doc-explorer-title"
      }, this.props.title), /*#__PURE__*/React.createElement("div", {
        className: "doc-explorer-rhs"
      }, /*#__PURE__*/React.createElement("div", {
        className: "docExplorerHide",
        onClick: this.props.onToggleExplorer
      }, "\u2715"))), /*#__PURE__*/React.createElement("div", {
        className: "doc-explorer-contents",
        style: {
          padding: '0px',
          /* Unset overflowY since docExplorerWrap sets it and it'll
          cause two scrollbars (one for the container and one for the schema tree) */
          overflowY: 'unset'
        }
      }, /*#__PURE__*/React.createElement(ErrorBoundary, null, /*#__PURE__*/React.createElement(Explorer, this.props))));
    }
  }]);
  return ExplorerWrapper;
}(React.PureComponent);
_defineProperty(ExplorerWrapper, "defaultValue", defaultValue);
_defineProperty(ExplorerWrapper, "defaultProps", {
  width: 320,
  title: 'Explorer'
});
var _default = ExplorerWrapper;
exports["default"] = _default;