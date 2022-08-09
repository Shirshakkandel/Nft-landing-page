"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["components_Hero_tsx"],{

/***/ "./components/Hero.tsx":
/*!*****************************!*\
  !*** ./components/Hero.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _util_styledComponents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/styledComponents */ \"./util/styledComponents.tsx\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var _util_ContextProvider_CurrentSectionContextProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/ContextProvider/CurrentSectionContextProvider */ \"./util/ContextProvider/CurrentSectionContextProvider.jsx\");\n/* harmony import */ var _util_animation_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/animation.js */ \"./util/animation.js\");\n/* harmony import */ var _hooks_useScroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/useScroll */ \"./hooks/useScroll.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\nvar _jsxFileName = \"S:\\\\blockchain\\\\nft\\\\sayuri\\\\components\\\\Hero.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nvar Hero = function Hero() {\n  _s();\n\n  //@ts-ignore\n  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_util_ContextProvider_CurrentSectionContextProvider__WEBPACK_IMPORTED_MODULE_2__.SectionContext),\n      currentSection = _useContext.currentSection,\n      setCurrentSection = _useContext.setCurrentSection;\n\n  var _useScroll = (0,_hooks_useScroll__WEBPACK_IMPORTED_MODULE_4__.useScroll)(),\n      ref = _useScroll.ref,\n      inView = _useScroll.inView;\n\n  if (inView) {\n    setCurrentSection('home');\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"section\", {\n    className: \"bg-secondary \",\n    ref: ref,\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_util_styledComponents__WEBPACK_IMPORTED_MODULE_1__.Flex, {\n      variants: _util_animation_js__WEBPACK_IMPORTED_MODULE_3__.sectionAnimation,\n      initial: \"hidden\",\n      animate: \"show\",\n      id: \"home\",\n      className: \"flex justify-between items-center h-[calc(100vh-5rem)] max-h-[800px] overflow-hidden section-wrapper\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {\n        variants: _util_animation_js__WEBPACK_IMPORTED_MODULE_3__.photoAnim,\n        className: \"flex-1 hidden w-auto h-full mt-4   lg:block basis-[45%] self-end\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"img\", {\n          src: \"images\\\\heroImage.png\",\n          alt: \"Nft Image\",\n          className: \"object-cover w-full h-full\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 29,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_util_styledComponents__WEBPACK_IMPORTED_MODULE_1__.FlexCol, {\n        variants: _util_animation_js__WEBPACK_IMPORTED_MODULE_3__.sectionAnimation,\n        initial: \"hidden\",\n        animate: \"show\",\n        className: \"flex flex-col items-center flex-1 gap-10 basis-[55%] lg:mr-[10%]\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.h1, {\n          variants: _util_animation_js__WEBPACK_IMPORTED_MODULE_3__.titleAnim,\n          style: {\n            WebkitTextStroke: '2px white'\n          },\n          className: \" font-[400] text-7xl md:text-[136px]  tracking-[1.275px] font-Futura text-secondary\",\n          children: \"Sayuri\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 35,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {\n          variants: _util_animation_js__WEBPACK_IMPORTED_MODULE_3__.titleAnim,\n          className: \"w-[75%] h-[7px] bg-primary mt-[-20px] rounded-sm\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 42,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.p, {\n          variants: _util_animation_js__WEBPACK_IMPORTED_MODULE_3__.titleAnim,\n          className: \"items-start self-start w-11/12 mx-auto text-center paragraph text-[14px] font-poppins\",\n          children: \"A collection of anime style Nft. 777 NFT collection. Connect yor wallet and get the NFT before the hype up.\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 43,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 19,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Hero, \"Xbmn5rO8V43Hu5iVtL49Tj5lUBk=\", false, function () {\n  return [_hooks_useScroll__WEBPACK_IMPORTED_MODULE_4__.useScroll];\n});\n\n_c = Hero;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Hero);\n\nvar _c;\n\n$RefreshReg$(_c, \"Hero\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0hlcm8udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7QUFDQSxJQUFNVSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQUE7O0FBQ2pCO0FBQ0Esb0JBQThDVCxpREFBVSxDQUFDSSwrRkFBRCxDQUF4RDtBQUFBLE1BQVFNLGNBQVIsZUFBUUEsY0FBUjtBQUFBLE1BQXdCQyxpQkFBeEIsZUFBd0JBLGlCQUF4Qjs7QUFDQSxtQkFBd0JILDJEQUFTLEVBQWpDO0FBQUEsTUFBUUksR0FBUixjQUFRQSxHQUFSO0FBQUEsTUFBYUMsTUFBYixjQUFhQSxNQUFiOztBQUVBLE1BQUlBLE1BQUosRUFBWTtBQUNWRixJQUFBQSxpQkFBaUIsQ0FBQyxNQUFELENBQWpCO0FBQ0Q7O0FBRUQsc0JBQ0U7QUFBUyxhQUFTLEVBQUMsZUFBbkI7QUFBbUMsT0FBRyxFQUFFQyxHQUF4QztBQUFBLDJCQUNFLDhEQUFDLHdEQUFEO0FBQ0UsY0FBUSxFQUFFTixnRUFEWjtBQUVFLGFBQU8sRUFBQyxRQUZWO0FBR0UsYUFBTyxFQUFDLE1BSFY7QUFJRSxRQUFFLEVBQUMsTUFKTDtBQUtFLGVBQVMsRUFBQyxzR0FMWjtBQUFBLDhCQVFFLDhEQUFDLHFEQUFEO0FBQVksZ0JBQVEsRUFBRUQseURBQXRCO0FBQWlDLGlCQUFTLEVBQUMsa0VBQTNDO0FBQUEsK0JBQ0U7QUFBSyxhQUFHLEVBQUMsdUJBQVQ7QUFBZ0MsYUFBRyxFQUFDLFdBQXBDO0FBQWdELG1CQUFTLEVBQUM7QUFBMUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFSRixlQWNFLDhEQUFDLDJEQUFEO0FBQVMsZ0JBQVEsRUFBRUMsZ0VBQW5CO0FBQXFDLGVBQU8sRUFBQyxRQUE3QztBQUFzRCxlQUFPLEVBQUMsTUFBOUQ7QUFBcUUsaUJBQVMsRUFBQyxrRUFBL0U7QUFBQSxnQ0FDRSw4REFBQyxvREFBRDtBQUNFLGtCQUFRLEVBQUVDLHlEQURaO0FBRUUsZUFBSyxFQUFFO0FBQUVPLFlBQUFBLGdCQUFnQixFQUFFO0FBQXBCLFdBRlQ7QUFHRSxtQkFBUyxFQUFDLHFGQUhaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBUUUsOERBQUMscURBQUQ7QUFBWSxrQkFBUSxFQUFFUCx5REFBdEI7QUFBaUMsbUJBQVMsRUFBQztBQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVJGLGVBU0UsOERBQUMsbURBQUQ7QUFBVSxrQkFBUSxFQUFFQSx5REFBcEI7QUFBK0IsbUJBQVMsRUFBQyx1RkFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBZEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBZ0NELENBekNEOztHQUFNRTtVQUdvQkQ7OztLQUhwQkM7QUEyQ04sK0RBQWVBLElBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZXJvLnRzeD9lNzc5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IHsgRml4ZWQsIEZsZXgsIEZsZXhDb2wgfSBmcm9tICcuLi91dGlsL3N0eWxlZENvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcclxuaW1wb3J0IHsgdXNlSW5WaWV3IH0gZnJvbSAncmVhY3QtaW50ZXJzZWN0aW9uLW9ic2VydmVyJztcclxuaW1wb3J0IHsgU2VjdGlvbkNvbnRleHQgfSBmcm9tICcuLi91dGlsL0NvbnRleHRQcm92aWRlci9DdXJyZW50U2VjdGlvbkNvbnRleHRQcm92aWRlcic7XHJcbmltcG9ydCB7IGZhZGUsIHBob3RvQW5pbSwgc2VjdGlvbkFuaW1hdGlvbiwgdGl0bGVBbmltIH0gZnJvbSAnLi4vdXRpbC9hbmltYXRpb24uanMnO1xyXG5pbXBvcnQgeyB1c2VTY3JvbGwgfSBmcm9tICcuLi9ob29rcy91c2VTY3JvbGwnO1xyXG5jb25zdCBIZXJvID0gKCkgPT4ge1xyXG4gIC8vQHRzLWlnbm9yZVxyXG4gIGNvbnN0IHsgY3VycmVudFNlY3Rpb24sIHNldEN1cnJlbnRTZWN0aW9uIH0gPSB1c2VDb250ZXh0KFNlY3Rpb25Db250ZXh0KTtcclxuICBjb25zdCB7IHJlZiwgaW5WaWV3IH0gPSB1c2VTY3JvbGwoKTtcclxuXHJcbiAgaWYgKGluVmlldykge1xyXG4gICAgc2V0Q3VycmVudFNlY3Rpb24oJ2hvbWUnKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJiZy1zZWNvbmRhcnkgXCIgcmVmPXtyZWZ9PlxyXG4gICAgICA8RmxleFxyXG4gICAgICAgIHZhcmlhbnRzPXtzZWN0aW9uQW5pbWF0aW9ufVxyXG4gICAgICAgIGluaXRpYWw9XCJoaWRkZW5cIlxyXG4gICAgICAgIGFuaW1hdGU9XCJzaG93XCJcclxuICAgICAgICBpZD1cImhvbWVcIlxyXG4gICAgICAgIGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciBoLVtjYWxjKDEwMHZoLTVyZW0pXSBtYXgtaC1bODAwcHhdIG92ZXJmbG93LWhpZGRlbiBzZWN0aW9uLXdyYXBwZXJcIlxyXG4gICAgICA+XHJcbiAgICAgICAgey8qIExlZnQgaW1hZ2UgcGFydCBoaWRkZW4gaW4gTW9iaWxlICovfVxyXG4gICAgICAgIDxtb3Rpb24uZGl2IHZhcmlhbnRzPXtwaG90b0FuaW19IGNsYXNzTmFtZT1cImZsZXgtMSBoaWRkZW4gdy1hdXRvIGgtZnVsbCBtdC00ICAgbGc6YmxvY2sgYmFzaXMtWzQ1JV0gc2VsZi1lbmRcIj5cclxuICAgICAgICAgIDxpbWcgc3JjPVwiaW1hZ2VzXFxoZXJvSW1hZ2UucG5nXCIgYWx0PVwiTmZ0IEltYWdlXCIgY2xhc3NOYW1lPVwib2JqZWN0LWNvdmVyIHctZnVsbCBoLWZ1bGxcIiAvPlxyXG4gICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGgtZnVsbCBiZy1jZW50ZXIgYmctY292ZXIgYmctaGVyb1wiIC8+ICovfVxyXG4gICAgICAgIDwvbW90aW9uLmRpdj5cclxuXHJcbiAgICAgICAgey8qIFJpZ2h0IFBhcnQgICovfVxyXG4gICAgICAgIDxGbGV4Q29sIHZhcmlhbnRzPXtzZWN0aW9uQW5pbWF0aW9ufSBpbml0aWFsPVwiaGlkZGVuXCIgYW5pbWF0ZT1cInNob3dcIiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBmbGV4LTEgZ2FwLTEwIGJhc2lzLVs1NSVdIGxnOm1yLVsxMCVdXCI+XHJcbiAgICAgICAgICA8bW90aW9uLmgxXHJcbiAgICAgICAgICAgIHZhcmlhbnRzPXt0aXRsZUFuaW19XHJcbiAgICAgICAgICAgIHN0eWxlPXt7IFdlYmtpdFRleHRTdHJva2U6ICcycHggd2hpdGUnIH19XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIiBmb250LVs0MDBdIHRleHQtN3hsIG1kOnRleHQtWzEzNnB4XSAgdHJhY2tpbmctWzEuMjc1cHhdIGZvbnQtRnV0dXJhIHRleHQtc2Vjb25kYXJ5XCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgU2F5dXJpXHJcbiAgICAgICAgICA8L21vdGlvbi5oMT5cclxuICAgICAgICAgIDxtb3Rpb24uZGl2IHZhcmlhbnRzPXt0aXRsZUFuaW19IGNsYXNzTmFtZT1cInctWzc1JV0gaC1bN3B4XSBiZy1wcmltYXJ5IG10LVstMjBweF0gcm91bmRlZC1zbVwiIC8+XHJcbiAgICAgICAgICA8bW90aW9uLnAgdmFyaWFudHM9e3RpdGxlQW5pbX0gY2xhc3NOYW1lPVwiaXRlbXMtc3RhcnQgc2VsZi1zdGFydCB3LTExLzEyIG14LWF1dG8gdGV4dC1jZW50ZXIgcGFyYWdyYXBoIHRleHQtWzE0cHhdIGZvbnQtcG9wcGluc1wiPlxyXG4gICAgICAgICAgICBBIGNvbGxlY3Rpb24gb2YgYW5pbWUgc3R5bGUgTmZ0LiA3NzcgTkZUIGNvbGxlY3Rpb24uIENvbm5lY3QgeW9yIHdhbGxldCBhbmQgZ2V0IHRoZSBORlQgYmVmb3JlIHRoZSBoeXBlIHVwLlxyXG4gICAgICAgICAgPC9tb3Rpb24ucD5cclxuICAgICAgICA8L0ZsZXhDb2w+XHJcbiAgICAgIDwvRmxleD5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVybztcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlQ29udGV4dCIsIkZsZXgiLCJGbGV4Q29sIiwibW90aW9uIiwiU2VjdGlvbkNvbnRleHQiLCJwaG90b0FuaW0iLCJzZWN0aW9uQW5pbWF0aW9uIiwidGl0bGVBbmltIiwidXNlU2Nyb2xsIiwiSGVybyIsImN1cnJlbnRTZWN0aW9uIiwic2V0Q3VycmVudFNlY3Rpb24iLCJyZWYiLCJpblZpZXciLCJXZWJraXRUZXh0U3Ryb2tlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Hero.tsx\n");

/***/ })

}]);