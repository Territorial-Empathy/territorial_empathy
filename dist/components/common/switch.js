"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _checkbox = _interopRequireDefault(require("./checkbox"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var propTypes = {
  checked: _propTypes["default"].bool,
  id: _propTypes["default"].string.isRequired,
  label: _propTypes["default"].node,
  error: _propTypes["default"].string,
  onBlur: _propTypes["default"].func,
  onChange: _propTypes["default"].func,
  onFocus: _propTypes["default"].func,
  value: _propTypes["default"].string
};

var Switch = function Switch(props) {
  var switchProps = _objectSpread({}, props, {
    "switch": props.type !== 'checkbox'
  });

  return _react["default"].createElement(_checkbox["default"], switchProps);
};

Switch.propTypes = propTypes;
var _default = Switch;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9zd2l0Y2guanMiXSwibmFtZXMiOlsicHJvcFR5cGVzIiwiY2hlY2tlZCIsIlByb3BUeXBlcyIsImJvb2wiLCJpZCIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJsYWJlbCIsIm5vZGUiLCJlcnJvciIsIm9uQmx1ciIsImZ1bmMiLCJvbkNoYW5nZSIsIm9uRm9jdXMiLCJ2YWx1ZSIsIlN3aXRjaCIsInByb3BzIiwic3dpdGNoUHJvcHMiLCJ0eXBlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFDQTs7Ozs7O0FBRUEsSUFBTUEsU0FBUyxHQUFHO0FBQ2hCQyxFQUFBQSxPQUFPLEVBQUVDLHNCQUFVQyxJQURIO0FBRWhCQyxFQUFBQSxFQUFFLEVBQUVGLHNCQUFVRyxNQUFWLENBQWlCQyxVQUZMO0FBR2hCQyxFQUFBQSxLQUFLLEVBQUVMLHNCQUFVTSxJQUhEO0FBSWhCQyxFQUFBQSxLQUFLLEVBQUVQLHNCQUFVRyxNQUpEO0FBS2hCSyxFQUFBQSxNQUFNLEVBQUVSLHNCQUFVUyxJQUxGO0FBTWhCQyxFQUFBQSxRQUFRLEVBQUVWLHNCQUFVUyxJQU5KO0FBT2hCRSxFQUFBQSxPQUFPLEVBQUVYLHNCQUFVUyxJQVBIO0FBUWhCRyxFQUFBQSxLQUFLLEVBQUVaLHNCQUFVRztBQVJELENBQWxCOztBQVdBLElBQU1VLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUFDLEtBQUssRUFBSTtBQUN0QixNQUFNQyxXQUFXLHFCQUNaRCxLQURZO0FBRWYsY0FBUUEsS0FBSyxDQUFDRSxJQUFOLEtBQWU7QUFGUixJQUFqQjs7QUFLQSxTQUFPLGdDQUFDLG9CQUFELEVBQWNELFdBQWQsQ0FBUDtBQUNELENBUEQ7O0FBU0FGLE1BQU0sQ0FBQ2YsU0FBUCxHQUFtQkEsU0FBbkI7ZUFFZWUsTSIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMCBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IENoZWNrYm94IGZyb20gJy4vY2hlY2tib3gnO1xuXG5jb25zdCBwcm9wVHlwZXMgPSB7XG4gIGNoZWNrZWQ6IFByb3BUeXBlcy5ib29sLFxuICBpZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBsYWJlbDogUHJvcFR5cGVzLm5vZGUsXG4gIGVycm9yOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBvbkJsdXI6IFByb3BUeXBlcy5mdW5jLFxuICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uRm9jdXM6IFByb3BUeXBlcy5mdW5jLFxuICB2YWx1ZTogUHJvcFR5cGVzLnN0cmluZ1xufTtcblxuY29uc3QgU3dpdGNoID0gcHJvcHMgPT4ge1xuICBjb25zdCBzd2l0Y2hQcm9wcyA9IHtcbiAgICAuLi5wcm9wcyxcbiAgICBzd2l0Y2g6IHByb3BzLnR5cGUgIT09ICdjaGVja2JveCdcbiAgfTtcblxuICByZXR1cm4gPENoZWNrYm94IHsuLi5zd2l0Y2hQcm9wc30gLz47XG59O1xuXG5Td2l0Y2gucHJvcFR5cGVzID0gcHJvcFR5cGVzO1xuXG5leHBvcnQgZGVmYXVsdCBTd2l0Y2g7XG4iXX0=