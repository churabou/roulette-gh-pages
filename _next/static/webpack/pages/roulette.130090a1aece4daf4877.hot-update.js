webpackHotUpdate_N_E("pages/roulette",{

/***/ "./components/EditMenu.tsx":
/*!*********************************!*\
  !*** ./components/EditMenu.tsx ***!
  \*********************************/
/*! exports provided: EditMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"EditMenu\", function() { return EditMenu; });\n/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ \"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Icon */ \"./components/Icon.tsx\");\n\n\n\n\n\nvar _jsxFileName = \"/Users/churabou/web/roulette-app-hp/lp/components/EditMenu.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n// 衝突が回避できれば何でもよく命名にこだわりはない。\nvar menuInputId = function menuInputId(index) {\n  return \"menu-input-\".concat(index);\n};\n\nvar IconButton = function IconButton(_ref) {\n  var size = _ref.size,\n      rest = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_ref, [\"size\"]);\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__[\"chakra\"].button, _objectSpread(_objectSpread({}, rest), {}, {\n    w: \"32px\",\n    h: \"32px\",\n    p: \"sm\",\n    _hover: {\n      bg: \"red.100\"\n    },\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_Icon__WEBPACK_IMPORTED_MODULE_6__[\"Icon\"], {\n      iconName: \"close\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 5\n    }, _this)\n  }), void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 21,\n    columnNumber: 3\n  }, _this);\n};\n\n_c = IconButton;\n\nvar Input = function Input(props) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__[\"chakra\"].input, _objectSpread({\n    w: \"100%\",\n    p: \"sm\",\n    bg: \"white.100\",\n    rounded: \"md\"\n  }, props), void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 35,\n    columnNumber: 3\n  }, _this);\n}; // const Component: FC<{\n//   slots: SlotItem[];\n//   onChange: (index: number, slot: Partial<SlotItem>) => void;\n//   onEnter: (index: number) => void;\n// }> = ({ slots, onChange, onEnter }) => (\n//   <div className=\"w-6/12 scroll-y border bg-gray-100 overflow-y-auto h-full ml-auto px-5 py-12\">\n//     <div>\n//       <Input />\n//     </div>\n//     <ul>\n//       {slots.map((s: SlotItem, i: number) => (\n//         <li key={`li-${i}`} className=\"flex items-centerpx-3 py-2\">\n//           <Input\n//             id={menuInputId(i)}\n//             value={s.text}\n//             onChange={(e) => onChange(i, { text: e.target.value })}\n//             // onKeyPress={(e) => handleKey(i, e)}\n//           />\n//           <IconButton />\n//         </li>\n//       ))}\n//     </ul>\n//   </div>\n// );\n\n\n_c2 = Input;\nvar EditMenu = function EditMenu(_ref2) {\n  _s();\n\n  var slots = _ref2.slots,\n      setSlots = _ref2.setSlots;\n\n  var updateSlots = function updateSlots(index, slot) {\n    setSlots(function (slots) {\n      var next = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(slots);\n\n      next[index] = _objectSpread(_objectSpread({}, next[index]), slot);\n      return next;\n    });\n  };\n\n  var defaultSlot = {\n    text: \"\",\n    weight: 1\n  };\n\n  var addSlot = function addSlot(slot) {\n    setSlots(function (slots) {\n      // 先頭に追加していく\n      return [slot].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(slots));\n    });\n  };\n\n  var deleteSlots = function deleteSlots(index) {\n    setSlots(function (slots) {\n      return slots.filter(function (_, i) {\n        return i !== index;\n      });\n    });\n  };\n\n  var handleKey = function handleKey(i, e) {\n    if (e.key !== \"Enter\") return; // domをid指定で直接指定しているが\n    // とくにデメリットが無いので、楽している。\n\n    var currentInput = document.getElementById(menuInputId(i));\n    currentInput.blur();\n  };\n\n  var props = {\n    onChange: updateSlots,\n    onEnter: function onEnter(index) {}\n  };\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useState\"])(\"\"),\n      text = _useState[0],\n      setText = _useState[1];\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__[\"Box\"], {\n    w: \"100%\",\n    h: \"100%\",\n    p: \"md\",\n    bg: \"gray.100\",\n    borderLeft: \"1px\",\n    borderBottomColor: \"gray.600\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__[\"VStack\"], {\n      spacing: \"md\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(Input, {\n        value: text,\n        onChange: function onChange(e) {\n          setText(e.target.value);\n        },\n        onKeyPress: function onKeyPress(e) {\n          if (e.key !== \"Enter\") return;\n          addSlot(_objectSpread(_objectSpread({}, defaultSlot), {}, {\n            text: text\n          }));\n          setText(\"\");\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 115,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__[\"Text\"], {\n        fontSize: \"sm\",\n        children: \"\\u9805\\u76EE\\u3092\\u5165\\u529B\\u3057\\u3066Enter\\u3092\\u62BC\\u3057\\u3066\\u304F\\u3060\\u3055\\u3044\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 126,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 114,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__[\"VStack\"], {\n      spacing: \"md\",\n      children: slots.map(function (s, i) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__[\"Flex\"], {\n          as: \"li\",\n          w: \"100%\",\n          align: \"center\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(Input, {\n            id: menuInputId(i) // todo margin left\n            ,\n            value: s.text,\n            onChange: function onChange(e) {\n              return props.onChange(i, {\n                text: e.target.value\n              });\n            },\n            onKeyPress: function onKeyPress(e) {\n              return handleKey(i, e);\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 131,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(IconButton, {\n            size: \"sm\",\n            ml: \"sm\",\n            onClick: function onClick() {\n              return deleteSlots(i);\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 138,\n            columnNumber: 13\n          }, _this)]\n        }, \"li-\".concat(i), true, {\n          fileName: _jsxFileName,\n          lineNumber: 130,\n          columnNumber: 11\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 128,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 106,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(EditMenu, \"3t0DFnMi16eB/7p7iIKtjG5r68g=\");\n\n_c3 = EditMenu;\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"IconButton\");\n$RefreshReg$(_c2, \"Input\");\n$RefreshReg$(_c3, \"EditMenu\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9FZGl0TWVudS50c3g/ZmRmNiJdLCJuYW1lcyI6WyJtZW51SW5wdXRJZCIsImluZGV4IiwiSWNvbkJ1dHRvbiIsInNpemUiLCJyZXN0IiwiYmciLCJJbnB1dCIsInByb3BzIiwiRWRpdE1lbnUiLCJzbG90cyIsInNldFNsb3RzIiwidXBkYXRlU2xvdHMiLCJzbG90IiwibmV4dCIsImRlZmF1bHRTbG90IiwidGV4dCIsIndlaWdodCIsImFkZFNsb3QiLCJkZWxldGVTbG90cyIsImZpbHRlciIsIl8iLCJpIiwiaGFuZGxlS2V5IiwiZSIsImtleSIsImN1cnJlbnRJbnB1dCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJibHVyIiwib25DaGFuZ2UiLCJvbkVudGVyIiwidXNlU3RhdGUiLCJzZXRUZXh0IiwidGFyZ2V0IiwidmFsdWUiLCJtYXAiLCJzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQVFBO0FBQ0E7O0FBR0E7QUFDQSxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxLQUFEO0FBQUEsOEJBQWlDQSxLQUFqQztBQUFBLENBQXBCOztBQU1BLElBQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhO0FBQUEsTUFBR0MsSUFBSCxRQUFHQSxJQUFIO0FBQUEsTUFBWUMsSUFBWjs7QUFBQSxzQkFDakIscUVBQUMsdURBQUQsQ0FBUSxNQUFSLGtDQUNNQSxJQUROO0FBRUUsS0FBQyxFQUFDLE1BRko7QUFHRSxLQUFDLEVBQUMsTUFISjtBQUlFLEtBQUMsRUFBRSxJQUpMO0FBS0UsVUFBTSxFQUFFO0FBQ05DLFFBQUUsRUFBRTtBQURFLEtBTFY7QUFBQSwyQkFTRSxxRUFBQywwQ0FBRDtBQUFNLGNBQVEsRUFBQztBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFURjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRGlCO0FBQUEsQ0FBbkI7O0tBQU1ILFU7O0FBY04sSUFB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LHFFQUFDLFVBQUQ7QUFBWSxnQkFBSSxFQUFDLElBQWpCO0FBQXNCLGNBQUUsRUFBQyxJQUF6QjtBQUE4QixtQkFBTyxFQUFFO0FBQUEscUJBQU1MLFdBQVcsQ0FBQ0csQ0FBRCxDQUFqQjtBQUFBO0FBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBUkY7QUFBQSx3QkFBeUJBLENBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRFM7QUFBQSxPQUFWO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXRCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXVDRCxDQWpGTTs7R0FBTWIsUTs7TUFBQUEsUSIsImZpbGUiOiIuL2NvbXBvbmVudHMvRWRpdE1lbnUudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQm94LFxuICBjaGFrcmEsXG4gIEZsZXgsXG4gIEhUTUxDaGFrcmFQcm9wcyxcbiAgVGV4dCxcbiAgVlN0YWNrLFxufSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuaW1wb3J0IFJlYWN0LCB7IEZDLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgSWNvbiB9IGZyb20gXCIuL0ljb25cIjtcbmltcG9ydCB7IFNsb3RJdGVtIH0gZnJvbSBcIi4vUm91bGV0dGVcIjtcblxuLy8g6KGd56qB44GM5Zue6YG/44Gn44GN44KM44Gw5L2V44Gn44KC44KI44GP5ZG95ZCN44Gr44GT44Gg44KP44KK44Gv44Gq44GE44CCXG5jb25zdCBtZW51SW5wdXRJZCA9IChpbmRleDogbnVtYmVyKSA9PiBgbWVudS1pbnB1dC0ke2luZGV4fWA7XG5cbnR5cGUgSWNvbkJ1dHRvblByb3BzID0ge1xuICBzaXplOiBcInNtXCIgfCBcImJhc2VcIjtcbn0gJiBIVE1MQ2hha3JhUHJvcHM8XCJidXR0b25cIj47XG5cbmNvbnN0IEljb25CdXR0b24gPSAoeyBzaXplLCAuLi5yZXN0IH0pID0+IChcbiAgPGNoYWtyYS5idXR0b25cbiAgICB7Li4ucmVzdH1cbiAgICB3PVwiMzJweFwiXG4gICAgaD1cIjMycHhcIlxuICAgIHA9e1wic21cIn1cbiAgICBfaG92ZXI9e3tcbiAgICAgIGJnOiBcInJlZC4xMDBcIixcbiAgICB9fVxuICA+XG4gICAgPEljb24gaWNvbk5hbWU9XCJjbG9zZVwiIC8+XG4gIDwvY2hha3JhLmJ1dHRvbj5cbik7XG5cbmNvbnN0IElucHV0ID0gKHByb3BzOiBIVE1MQ2hha3JhUHJvcHM8XCJpbnB1dFwiPikgPT4gKFxuICA8Y2hha3JhLmlucHV0IHc9XCIxMDAlXCIgcD1cInNtXCIgYmc9XCJ3aGl0ZS4xMDBcIiByb3VuZGVkPVwibWRcIiB7Li4ucHJvcHN9IC8+XG4pO1xuXG4vLyBjb25zdCBDb21wb25lbnQ6IEZDPHtcbi8vICAgc2xvdHM6IFNsb3RJdGVtW107XG4vLyAgIG9uQ2hhbmdlOiAoaW5kZXg6IG51bWJlciwgc2xvdDogUGFydGlhbDxTbG90SXRlbT4pID0+IHZvaWQ7XG4vLyAgIG9uRW50ZXI6IChpbmRleDogbnVtYmVyKSA9PiB2b2lkO1xuLy8gfT4gPSAoeyBzbG90cywgb25DaGFuZ2UsIG9uRW50ZXIgfSkgPT4gKFxuLy8gICA8ZGl2IGNsYXNzTmFtZT1cInctNi8xMiBzY3JvbGwteSBib3JkZXIgYmctZ3JheS0xMDAgb3ZlcmZsb3cteS1hdXRvIGgtZnVsbCBtbC1hdXRvIHB4LTUgcHktMTJcIj5cbi8vICAgICA8ZGl2PlxuLy8gICAgICAgPElucHV0IC8+XG4vLyAgICAgPC9kaXY+XG4vLyAgICAgPHVsPlxuLy8gICAgICAge3Nsb3RzLm1hcCgoczogU2xvdEl0ZW0sIGk6IG51bWJlcikgPT4gKFxuLy8gICAgICAgICA8bGkga2V5PXtgbGktJHtpfWB9IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVycHgtMyBweS0yXCI+XG4vLyAgICAgICAgICAgPElucHV0XG4vLyAgICAgICAgICAgICBpZD17bWVudUlucHV0SWQoaSl9XG4vLyAgICAgICAgICAgICB2YWx1ZT17cy50ZXh0fVxuLy8gICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBvbkNoYW5nZShpLCB7IHRleHQ6IGUudGFyZ2V0LnZhbHVlIH0pfVxuLy8gICAgICAgICAgICAgLy8gb25LZXlQcmVzcz17KGUpID0+IGhhbmRsZUtleShpLCBlKX1cbi8vICAgICAgICAgICAvPlxuLy8gICAgICAgICAgIDxJY29uQnV0dG9uIC8+XG4vLyAgICAgICAgIDwvbGk+XG4vLyAgICAgICApKX1cbi8vICAgICA8L3VsPlxuLy8gICA8L2Rpdj5cbi8vICk7XG5cbmV4cG9ydCBjb25zdCBFZGl0TWVudSA9ICh7IHNsb3RzLCBzZXRTbG90cyB9KSA9PiB7XG4gIGNvbnN0IHVwZGF0ZVNsb3RzID0gKGluZGV4OiBudW1iZXIsIHNsb3Q6IFBhcnRpYWw8U2xvdEl0ZW0+KSA9PiB7XG4gICAgc2V0U2xvdHMoKHNsb3RzOiBTbG90SXRlbVtdKSA9PiB7XG4gICAgICBsZXQgbmV4dCA9IFsuLi5zbG90c107XG4gICAgICBuZXh0W2luZGV4XSA9IHsgLi4ubmV4dFtpbmRleF0sIC4uLnNsb3QgfTtcbiAgICAgIHJldHVybiBuZXh0O1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGRlZmF1bHRTbG90OiBTbG90SXRlbSA9IHtcbiAgICB0ZXh0OiBcIlwiLFxuICAgIHdlaWdodDogMSxcbiAgfTtcblxuICBjb25zdCBhZGRTbG90ID0gKHNsb3Q6IFNsb3RJdGVtKSA9PiB7XG4gICAgc2V0U2xvdHMoKHNsb3RzKSA9PiB7XG4gICAgICAvLyDlhYjpoK3jgavov73liqDjgZfjgabjgYTjgY9cbiAgICAgIHJldHVybiBbc2xvdCwgLi4uc2xvdHNdO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGRlbGV0ZVNsb3RzID0gKGluZGV4OiBudW1iZXIpID0+IHtcbiAgICBzZXRTbG90cygoc2xvdHMpID0+IHtcbiAgICAgIHJldHVybiBzbG90cy5maWx0ZXIoKF8sIGkpID0+IGkgIT09IGluZGV4KTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVLZXkgPSAoaTogbnVtYmVyLCBlOiBhbnkpID0+IHtcbiAgICBpZiAoZS5rZXkgIT09IFwiRW50ZXJcIikgcmV0dXJuO1xuICAgIC8vIGRvbeOCkmlk5oyH5a6a44Gn55u05o6l5oyH5a6a44GX44Gm44GE44KL44GMXG4gICAgLy8g44Go44GP44Gr44OH44Oh44Oq44OD44OI44GM54Sh44GE44Gu44Gn44CB5qW944GX44Gm44GE44KL44CCXG4gICAgY29uc3QgY3VycmVudElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobWVudUlucHV0SWQoaSkpO1xuICAgIGN1cnJlbnRJbnB1dC5ibHVyKCk7XG4gIH07XG5cbiAgY29uc3QgcHJvcHMgPSB7XG4gICAgb25DaGFuZ2U6IHVwZGF0ZVNsb3RzLFxuICAgIG9uRW50ZXI6IChpbmRleDogbnVtYmVyKSA9PiB7fSxcbiAgfTtcblxuICBjb25zdCBbdGV4dCwgc2V0VGV4dF0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICByZXR1cm4gKFxuICAgIDxCb3hcbiAgICAgIHc9XCIxMDAlXCJcbiAgICAgIGg9XCIxMDAlXCJcbiAgICAgIHA9XCJtZFwiXG4gICAgICBiZz1cImdyYXkuMTAwXCJcbiAgICAgIGJvcmRlckxlZnQ9XCIxcHhcIlxuICAgICAgYm9yZGVyQm90dG9tQ29sb3I9XCJncmF5LjYwMFwiXG4gICAgPlxuICAgICAgPFZTdGFjayBzcGFjaW5nPVwibWRcIj5cbiAgICAgICAgPElucHV0XG4gICAgICAgICAgdmFsdWU9e3RleHR9XG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XG4gICAgICAgICAgICBzZXRUZXh0KGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgICB9fVxuICAgICAgICAgIG9uS2V5UHJlc3M9eyhlKSA9PiB7XG4gICAgICAgICAgICBpZiAoZS5rZXkgIT09IFwiRW50ZXJcIikgcmV0dXJuO1xuICAgICAgICAgICAgYWRkU2xvdCh7IC4uLmRlZmF1bHRTbG90LCB0ZXh0IH0pO1xuICAgICAgICAgICAgc2V0VGV4dChcIlwiKTtcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgICA8VGV4dCBmb250U2l6ZT1cInNtXCI+6aCF55uu44KS5YWl5Yqb44GX44GmRW50ZXLjgpLmirzjgZfjgabjgY/jgaDjgZXjgYQ8L1RleHQ+XG4gICAgICA8L1ZTdGFjaz5cbiAgICAgIDxWU3RhY2sgc3BhY2luZz1cIm1kXCI+XG4gICAgICAgIHtzbG90cy5tYXAoKHM6IFNsb3RJdGVtLCBpOiBudW1iZXIpID0+IChcbiAgICAgICAgICA8RmxleCBhcz1cImxpXCIga2V5PXtgbGktJHtpfWB9IHc9XCIxMDAlXCIgYWxpZ249XCJjZW50ZXJcIj5cbiAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICBpZD17bWVudUlucHV0SWQoaSl9XG4gICAgICAgICAgICAgIC8vIHRvZG8gbWFyZ2luIGxlZnRcbiAgICAgICAgICAgICAgdmFsdWU9e3MudGV4dH1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBwcm9wcy5vbkNoYW5nZShpLCB7IHRleHQ6IGUudGFyZ2V0LnZhbHVlIH0pfVxuICAgICAgICAgICAgICBvbktleVByZXNzPXsoZSkgPT4gaGFuZGxlS2V5KGksIGUpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxJY29uQnV0dG9uIHNpemU9XCJzbVwiIG1sPVwic21cIiBvbkNsaWNrPXsoKSA9PiBkZWxldGVTbG90cyhpKX0gLz5cbiAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgICkpfVxuICAgICAgPC9WU3RhY2s+XG4gICAgPC9Cb3g+XG4gICk7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/EditMenu.tsx\n");

/***/ })

})