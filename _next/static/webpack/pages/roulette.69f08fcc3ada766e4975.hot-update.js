webpackHotUpdate_N_E("pages/roulette",{

/***/ "./pages/roulette.tsx":
/*!****************************!*\
  !*** ./pages/roulette.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Roulette__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Roulette */ \"./components/Roulette.tsx\");\n/* harmony import */ var _components_EditMenu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/EditMenu */ \"./components/EditMenu.tsx\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/esm/index.js\");\n\n\n\nvar _jsxFileName = \"/Users/churabou/web/roulette-app-hp/lp/pages/roulette.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n// max-width: 70vh 的なのがtailwindにない。\n// 1. そもそも指定するシチュー絵ションが少ない\n// 2. 別の解決法が一般的\n// 3. tailwindが微妙\n// const ContentWrapper = styled.div`\n//   width: 80%;\n//   max-width: 75vh;\n//   @media screen and (max-width: 768px) {\n//     width: 100%;\n//     max-width: 100%;\n//   }\n// `;\nvar RouletteView = function RouletteView() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(_components_Roulette__WEBPACK_IMPORTED_MODULE_4__[\"initialItem\"]),\n      slots = _useState[0],\n      setSlots = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(true),\n      showEditMenu = _useState2[0],\n      setShowEditMenu = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      playing = _useState3[0],\n      setPlaying = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(null),\n      result = _useState4[0],\n      setResult = _useState4[1];\n\n  var startRoulette = function startRoulette() {\n    if (playing) return;\n    setPlaying(true);\n    var roulette = document.getElementById(\"roulette\");\n    var result = Object(_components_Roulette__WEBPACK_IMPORTED_MODULE_4__[\"hitItem\"])(slots);\n    var animationToAngle = Object(_components_Roulette__WEBPACK_IMPORTED_MODULE_4__[\"rotateAngle\"])(slots, result);\n    var anim = roulette.animate([{\n      transform: \"rotate(0deg)\",\n      offset: 0\n    }, {\n      transform: \"rotate(\".concat(-animationToAngle + 3600, \"deg)\"),\n      offset: 1\n    }], {\n      duration: 3050,\n      easing: \"cubic-bezier(0.42, 0, 0.58, 1)\",\n      fill: \"forwards\"\n    });\n\n    anim.onfinish = function () {\n      setPlaying(false);\n      setResult(slots[result]);\n    };\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__[\"Flex\"], {\n    direction: \"column\",\n    h: \"100vh\",\n    bg: \"gray.50\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__[\"Flex\"], {\n      as: \"header\",\n      align: \"center\",\n      bg: \"white\",\n      p: \"md\",\n      h: \"60px\",\n      borderBottom: \"1px\",\n      borderColor: \"gray.400\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__[\"Heading\"], {\n        as: \"h1\",\n        color: \"gray.800\",\n        fontSize: \"20px\",\n        children: \"WEB \\u30EB\\u30FC\\u30EC\\u30C3\\u30C8\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 80,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__[\"Spacer\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 83,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__[\"Flex\"], {\n      w: \"100%\",\n      h: \"100%\",\n      position: \"relative\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__[\"Center\"], {\n        w: \"100%\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__[\"Box\"], {\n          w: [\"100vw\", \"100vw\", \"80vh\", \"80vh\"],\n          p: \"md\",\n          bg: \"white\",\n          rounded: \"lg\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__[\"Text\"], {\n            as: \"h3\",\n            style: {\n              opacity: playing ? \"0\" : \"1\"\n            },\n            fontSize: \"3xl\",\n            color: \"gray.600\",\n            children: \"\\u7D50\\u679C: \".concat(result && result.text)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 93,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__[\"Box\"], {\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_components_Roulette__WEBPACK_IMPORTED_MODULE_4__[\"Roulette\"], {\n              slots: Object(_components_Roulette__WEBPACK_IMPORTED_MODULE_4__[\"convertItem\"])(slots)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 102,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 101,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__[\"Button\"], {\n            onClick: startRoulette,\n            opacity: playing ? \"0\" : \"1\",\n            children: \"Play\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 104,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 87,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 86,\n        columnNumber: 9\n      }, _this), showEditMenu && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__[\"Box\"], {\n        width: [\"100%\", \"100%\", \"30%\", \"30%\"],\n        height: \"100%\",\n        position: [\"absolute\", \"absolute\", \"relative\", \"relative\"],\n        top: \"0\",\n        left: \"0\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_components_EditMenu__WEBPACK_IMPORTED_MODULE_5__[\"EditMenu\"], _objectSpread({}, {\n          slots: slots,\n          setSlots: setSlots\n        }), void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 117,\n          columnNumber: 13\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 110,\n        columnNumber: 11\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 70,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(RouletteView, \"BAkPyZcxGBHMp3UJc6WMx27mmg0=\");\n\n_c = RouletteView;\n\nvar Page = function Page() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"title\", {\n        children: \"WEB \\u30EB\\u30FC\\u30EC\\u30C3\\u30C8\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 128,\n        columnNumber: 7\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"meta\", {\n        property: \"og:title\",\n        content: \"WEB \\u30EB\\u30FC\\u30EC\\u30C3\\u30C8\"\n      }, \"title\", false, {\n        fileName: _jsxFileName,\n        lineNumber: 129,\n        columnNumber: 7\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"meta\", {\n        name: \"description\",\n        content: \"WEB\\u3067\\u7C21\\u5358\\u306B\\u4F7F\\u3048\\u308B\\u30EB\\u30FC\\u30EC\\u30C3\\u30C8\\u30A2\\u30D7\\u30EA\\u3067\\u3059\"\n      }, \"description\", false, {\n        fileName: _jsxFileName,\n        lineNumber: 130,\n        columnNumber: 7\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 127,\n      columnNumber: 5\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(RouletteView, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 136,\n      columnNumber: 5\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 126,\n    columnNumber: 3\n  }, _this);\n};\n\n_c2 = Page;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Page);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"RouletteView\");\n$RefreshReg$(_c2, \"Page\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcm91bGV0dGUudHN4PzI0YjMiXSwibmFtZXMiOlsiUm91bGV0dGVWaWV3IiwidXNlU3RhdGUiLCJpbml0aWFsSXRlbSIsInNsb3RzIiwic2V0U2xvdHMiLCJzaG93RWRpdE1lbnUiLCJzZXRTaG93RWRpdE1lbnUiLCJwbGF5aW5nIiwic2V0UGxheWluZyIsInJlc3VsdCIsInNldFJlc3VsdCIsInN0YXJ0Um91bGV0dGUiLCJyb3VsZXR0ZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJoaXRJdGVtIiwiYW5pbWF0aW9uVG9BbmdsZSIsInJvdGF0ZUFuZ2xlIiwiYW5pbSIsImFuaW1hdGUiLCJ0cmFuc2Zvcm0iLCJvZmZzZXQiLCJkdXJhdGlvbiIsImVhc2luZyIsImZpbGwiLCJvbmZpbmlzaCIsIm9wYWNpdHkiLCJ0ZXh0IiwiY29udmVydEl0ZW0iLCJQYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBT0E7QUFFQTs7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQUE7O0FBQUEsa0JBQ0NDLHNEQUFRLENBQUNDLGdFQUFELENBRFQ7QUFBQSxNQUNsQkMsS0FEa0I7QUFBQSxNQUNYQyxRQURXOztBQUFBLG1CQUVlSCxzREFBUSxDQUFDLElBQUQsQ0FGdkI7QUFBQSxNQUVsQkksWUFGa0I7QUFBQSxNQUVKQyxlQUZJOztBQUFBLG1CQUdLTCxzREFBUSxDQUFDLEtBQUQsQ0FIYjtBQUFBLE1BR2xCTSxPQUhrQjtBQUFBLE1BR1RDLFVBSFM7O0FBQUEsbUJBSUdQLHNEQUFRLENBQUMsSUFBRCxDQUpYO0FBQUEsTUFJbEJRLE1BSmtCO0FBQUEsTUFJVkMsU0FKVTs7QUFNekIsTUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixH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QWYiLCJmaWxlIjoiLi9wYWdlcy9yb3VsZXR0ZS50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCB7IEljb24gfSBmcm9tIFwiLi4vY29tcG9uZW50cy9JY29uXCI7XG5pbXBvcnQge1xuICBjb252ZXJ0SXRlbSxcbiAgaGl0SXRlbSxcbiAgaW5pdGlhbEl0ZW0sXG4gIHJvdGF0ZUFuZ2xlLFxuICBSb3VsZXR0ZSxcbn0gZnJvbSBcIi4uL2NvbXBvbmVudHMvUm91bGV0dGVcIjtcbmltcG9ydCB7IEVkaXRNZW51IH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvRWRpdE1lbnVcIjtcblxuaW1wb3J0IHtcbiAgQnV0dG9uLFxuICBGbGV4LFxuICBIZWFkaW5nLFxuICBDZW50ZXIsXG4gIEJveCxcbiAgVGV4dCxcbiAgU3BhY2VyLFxufSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuaW1wb3J0IHsgSWNvbkJ1dHRvbiB9IGZyb20gXCIuLi9jb21wb25lbnRzL0ljb25CdXR0b25cIjtcblxuLy8gbWF4LXdpZHRoOiA3MHZoIOeahOOBquOBruOBjHRhaWx3aW5k44Gr44Gq44GE44CCXG4vLyAxLiDjgZ3jgoLjgZ3jgoLmjIflrprjgZnjgovjgrfjg4Hjg6Xjg7zntbXjgrfjg6fjg7PjgYzlsJHjgarjgYRcbi8vIDIuIOWIpeOBruino+axuuazleOBjOS4gOiIrOeahFxuLy8gMy4gdGFpbHdpbmTjgYzlvq7lpplcblxuLy8gY29uc3QgQ29udGVudFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuLy8gICB3aWR0aDogODAlO1xuLy8gICBtYXgtd2lkdGg6IDc1dmg7XG4vLyAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4vLyAgICAgd2lkdGg6IDEwMCU7XG4vLyAgICAgbWF4LXdpZHRoOiAxMDAlO1xuLy8gICB9XG4vLyBgO1xuXG5jb25zdCBSb3VsZXR0ZVZpZXcgPSAoKSA9PiB7XG4gIGNvbnN0IFtzbG90cywgc2V0U2xvdHNdID0gdXNlU3RhdGUoaW5pdGlhbEl0ZW0pO1xuICBjb25zdCBbc2hvd0VkaXRNZW51LCBzZXRTaG93RWRpdE1lbnVdID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IFtwbGF5aW5nLCBzZXRQbGF5aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3Jlc3VsdCwgc2V0UmVzdWx0XSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gIGNvbnN0IHN0YXJ0Um91bGV0dGUgPSAoKSA9PiB7XG4gICAgaWYgKHBsYXlpbmcpIHJldHVybjtcbiAgICBzZXRQbGF5aW5nKHRydWUpO1xuICAgIGNvbnN0IHJvdWxldHRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb3VsZXR0ZVwiKTtcbiAgICBjb25zdCByZXN1bHQgPSBoaXRJdGVtKHNsb3RzKTtcbiAgICBjb25zdCBhbmltYXRpb25Ub0FuZ2xlID0gcm90YXRlQW5nbGUoc2xvdHMsIHJlc3VsdCk7XG5cbiAgICBjb25zdCBhbmltID0gcm91bGV0dGUuYW5pbWF0ZShcbiAgICAgIFtcbiAgICAgICAgeyB0cmFuc2Zvcm06IFwicm90YXRlKDBkZWcpXCIsIG9mZnNldDogMCB9LFxuICAgICAgICB7IHRyYW5zZm9ybTogYHJvdGF0ZSgkey1hbmltYXRpb25Ub0FuZ2xlICsgMzYwMH1kZWcpYCwgb2Zmc2V0OiAxIH0sXG4gICAgICBdLFxuICAgICAge1xuICAgICAgICBkdXJhdGlvbjogMzA1MCxcbiAgICAgICAgZWFzaW5nOiBcImN1YmljLWJlemllcigwLjQyLCAwLCAwLjU4LCAxKVwiLFxuICAgICAgICBmaWxsOiBcImZvcndhcmRzXCIsXG4gICAgICB9XG4gICAgKTtcblxuICAgIGFuaW0ub25maW5pc2ggPSAoKSA9PiB7XG4gICAgICBzZXRQbGF5aW5nKGZhbHNlKTtcbiAgICAgIHNldFJlc3VsdChzbG90c1tyZXN1bHRdKTtcbiAgICB9O1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPEZsZXggZGlyZWN0aW9uPVwiY29sdW1uXCIgaD1cIjEwMHZoXCIgYmc9XCJncmF5LjUwXCI+XG4gICAgICA8RmxleFxuICAgICAgICBhcz1cImhlYWRlclwiXG4gICAgICAgIGFsaWduPVwiY2VudGVyXCJcbiAgICAgICAgYmc9XCJ3aGl0ZVwiXG4gICAgICAgIHA9XCJtZFwiXG4gICAgICAgIGg9XCI2MHB4XCJcbiAgICAgICAgYm9yZGVyQm90dG9tPVwiMXB4XCJcbiAgICAgICAgYm9yZGVyQ29sb3I9XCJncmF5LjQwMFwiXG4gICAgICA+XG4gICAgICAgIDxIZWFkaW5nIGFzPVwiaDFcIiBjb2xvcj1cImdyYXkuODAwXCIgZm9udFNpemU9XCIyMHB4XCI+XG4gICAgICAgICAgV0VCIOODq+ODvOODrOODg+ODiFxuICAgICAgICA8L0hlYWRpbmc+XG4gICAgICAgIDxTcGFjZXIgLz5cbiAgICAgIDwvRmxleD5cbiAgICAgIDxGbGV4IHc9XCIxMDAlXCIgaD1cIjEwMCVcIiBwb3NpdGlvbj1cInJlbGF0aXZlXCI+XG4gICAgICAgIDxDZW50ZXIgdz1cIjEwMCVcIj5cbiAgICAgICAgICA8Qm94XG4gICAgICAgICAgICB3PXtbXCIxMDB2d1wiLCBcIjEwMHZ3XCIsIFwiODB2aFwiLCBcIjgwdmhcIl19XG4gICAgICAgICAgICBwPXtcIm1kXCJ9XG4gICAgICAgICAgICBiZz1cIndoaXRlXCJcbiAgICAgICAgICAgIHJvdW5kZWQ9XCJsZ1wiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPFRleHRcbiAgICAgICAgICAgICAgYXM9XCJoM1wiXG4gICAgICAgICAgICAgIHN0eWxlPXt7IG9wYWNpdHk6IHBsYXlpbmcgPyBcIjBcIiA6IFwiMVwiIH19XG4gICAgICAgICAgICAgIGZvbnRTaXplPVwiM3hsXCJcbiAgICAgICAgICAgICAgY29sb3I9XCJncmF5LjYwMFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtg57WQ5p6cOiAke3Jlc3VsdCAmJiByZXN1bHQudGV4dH1gfVxuICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgPEJveD5cbiAgICAgICAgICAgICAgPFJvdWxldHRlIHNsb3RzPXtjb252ZXJ0SXRlbShzbG90cyl9IC8+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17c3RhcnRSb3VsZXR0ZX0gb3BhY2l0eT17cGxheWluZyA/IFwiMFwiIDogXCIxXCJ9PlxuICAgICAgICAgICAgICBQbGF5XG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgPC9DZW50ZXI+XG4gICAgICAgIHtzaG93RWRpdE1lbnUgJiYgKFxuICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgIHdpZHRoPXtbXCIxMDAlXCIsIFwiMTAwJVwiLCBcIjMwJVwiLCBcIjMwJVwiXX1cbiAgICAgICAgICAgIGhlaWdodD1cIjEwMCVcIlxuICAgICAgICAgICAgcG9zaXRpb249e1tcImFic29sdXRlXCIsIFwiYWJzb2x1dGVcIiwgXCJyZWxhdGl2ZVwiLCBcInJlbGF0aXZlXCJdfVxuICAgICAgICAgICAgdG9wPVwiMFwiXG4gICAgICAgICAgICBsZWZ0PVwiMFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEVkaXRNZW51IHsuLi57IHNsb3RzLCBzZXRTbG90cyB9fSAvPlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICApfVxuICAgICAgPC9GbGV4PlxuICAgIDwvRmxleD5cbiAgKTtcbn07XG5cbmNvbnN0IFBhZ2UgPSAoKSA9PiAoXG4gIDxkaXY+XG4gICAgPEhlYWQ+XG4gICAgICA8dGl0bGU+V0VCIOODq+ODvOODrOODg+ODiDwvdGl0bGU+XG4gICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnRpdGxlXCIgY29udGVudD1cIldFQiDjg6vjg7zjg6zjg4Pjg4hcIiBrZXk9XCJ0aXRsZVwiIC8+XG4gICAgICA8bWV0YVxuICAgICAgICBuYW1lPVwiZGVzY3JpcHRpb25cIlxuICAgICAgICBjb250ZW50PVwiV0VC44Gn57Ch5Y2Y44Gr5L2/44GI44KL44Or44O844Os44OD44OI44Ki44OX44Oq44Gn44GZXCJcbiAgICAgICAga2V5PVwiZGVzY3JpcHRpb25cIlxuICAgICAgLz5cbiAgICA8L0hlYWQ+XG4gICAgPFJvdWxldHRlVmlldyAvPlxuICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IFBhZ2U7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/roulette.tsx\n");

/***/ })

})