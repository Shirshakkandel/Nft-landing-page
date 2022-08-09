"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "components_RoadMap_tsx";
exports.ids = ["components_RoadMap_tsx"];
exports.modules = {

/***/ "./components/RoadMap.tsx":
/*!********************************!*\
  !*** ./components/RoadMap.tsx ***!
  \********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _util_styledComponents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/styledComponents */ \"./util/styledComponents.tsx\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"framer-motion\");\n/* harmony import */ var _util_ContextProvider_CurrentSectionContextProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/ContextProvider/CurrentSectionContextProvider */ \"./util/ContextProvider/CurrentSectionContextProvider.jsx\");\n/* harmony import */ var _util_animation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/animation */ \"./util/animation.js\");\n/* harmony import */ var _hooks_useScroll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hooks/useScroll */ \"./hooks/useScroll.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_util_styledComponents__WEBPACK_IMPORTED_MODULE_1__, framer_motion__WEBPACK_IMPORTED_MODULE_2__, _hooks_useScroll__WEBPACK_IMPORTED_MODULE_5__]);\n([_util_styledComponents__WEBPACK_IMPORTED_MODULE_1__, framer_motion__WEBPACK_IMPORTED_MODULE_2__, _hooks_useScroll__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\nvar _jsxFileName = \"S:\\\\blockchain\\\\nft\\\\sayuri\\\\components\\\\RoadMap.tsx\";\n\n\n\n\n\n\n\n\nconst RoadMap = () => {\n  const {\n    setCurrentSection\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_util_ContextProvider_CurrentSectionContextProvider__WEBPACK_IMPORTED_MODULE_3__.SectionContext); // const { ref, inView, entry } = useInView({ threshold: 0.1 });\n\n  const {\n    ref,\n    controls,\n    inView\n  } = (0,_hooks_useScroll__WEBPACK_IMPORTED_MODULE_5__.useScroll)();\n\n  if (inView) {\n    setCurrentSection('roadmap');\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"section\", {\n    id: \"roadmap\",\n    className: \" text-primary bg-secondary pt-[85px]\",\n    ref: ref,\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_util_styledComponents__WEBPACK_IMPORTED_MODULE_1__.FlexCol, {\n      className: \"flex flex-col items-center gap-3 pb-10\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"h2\", {\n        className: \"text-center heading\",\n        children: \"Roadmap\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"img\", {\n        src: \"/images/underline.png\",\n        alt: \"\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_util_styledComponents__WEBPACK_IMPORTED_MODULE_1__.Flex, {\n      className: \"flex pb-10 section-wrapper\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n        variants: _util_animation__WEBPACK_IMPORTED_MODULE_4__.fade,\n        className: \"basis-[100%] lg:basis-[40%] \",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n          variants: _util_animation__WEBPACK_IMPORTED_MODULE_4__.staggerLate,\n          animate: controls,\n          initial: \"hidden\",\n          className: \"container relative mt-[80px]\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_util_styledComponents__WEBPACK_IMPORTED_MODULE_1__.FlexCol, {\n            variants: _util_animation__WEBPACK_IMPORTED_MODULE_4__.fadeInUp,\n            className: \"relative first-roadmap pl-10  py-2 roadmap min-h-[300px] w-[80%] flex flex-col justify-center   border-primary border-t-[7px]  border-l-[7px] \",\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"h2\", {\n              className: \"heading\",\n              children: \"Goal One:\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 32,\n              columnNumber: 15\n            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"p\", {\n              className: \"roadmap-subheading\",\n              children: \"List it on marketplace\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 33,\n              columnNumber: 15\n            }, undefined)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 28,\n            columnNumber: 13\n          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_util_styledComponents__WEBPACK_IMPORTED_MODULE_1__.FlexCol, {\n            variants: _util_animation__WEBPACK_IMPORTED_MODULE_4__.fadeInUp,\n            className: \"relative second-roadmap pl-10 py-2 roadmap min-h-[250px] w-[60%] flex flex-col justify-center  border-primary border-t-[7px]  border-l-[7px]\",\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"h2\", {\n              className: \"heading\",\n              children: \"Goal Two:\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 40,\n              columnNumber: 15\n            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"p\", {\n              className: \"roadmap-subheading\",\n              children: \"Collaboration with other anime project\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 41,\n              columnNumber: 15\n            }, undefined)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 36,\n            columnNumber: 13\n          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_util_styledComponents__WEBPACK_IMPORTED_MODULE_1__.FlexCol, {\n            variants: _util_animation__WEBPACK_IMPORTED_MODULE_4__.fadeInUp,\n            className: \"relative third-roadmap pl-10  py-2 roadmap min-h-[250px] w-[60%] flex flex-col justify-center  border-primary border-t-[7px]  border-l-[7px]\",\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"h2\", {\n              className: \"heading\",\n              children: \"Goal Three:\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 48,\n              columnNumber: 15\n            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"p\", {\n              className: \"roadmap-subheading\",\n              children: \"Second version of Sayuri with dark past reveal, airdrop and mint. TBD.\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 49,\n              columnNumber: 15\n            }, undefined)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 44,\n            columnNumber: 13\n          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_util_styledComponents__WEBPACK_IMPORTED_MODULE_1__.FlexCol, {\n            variants: _util_animation__WEBPACK_IMPORTED_MODULE_4__.fadeInUp,\n            className: \"relative roadmap py-2  min-h-[250px] w-[80%] flex flex-col justify-center pl-10  border-primary border-y-[7px]  border-l-[7px]\",\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n              className: \"absolute bottom-[-20px] right-[-20px] rounded-full bg-primary w-[40px] h-[40px] \"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 56,\n              columnNumber: 15\n            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n              className: \"absolute bottom-[-20px] left-[-20px] rounded-full bg-primary w-[40px] h-[40px] \"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 57,\n              columnNumber: 15\n            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"h2\", {\n              className: \"heading\",\n              children: \"Goal Four:\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 58,\n              columnNumber: 15\n            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"p\", {\n              className: \"roadmap-subheading w-[100%]\",\n              children: \"Integrate Sayuri on Redverse. Details coming soon.\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 59,\n              columnNumber: 15\n            }, undefined)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 52,\n            columnNumber: 13\n          }, undefined)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 27,\n          columnNumber: 11\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_util_styledComponents__WEBPACK_IMPORTED_MODULE_1__.MobileHidden, {\n        className: \" hidden lg:block lg:basis-[60%] object-cover \",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n          className: \"w-auto h-[calc(100%+2.5rem)] bg-right-bottom bg-cover bg-roadmap\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 65,\n          columnNumber: 11\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 64,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 19,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RoadMap);\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUcsdUJBQVMsRUFBQyw2QkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBekJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUF1Q0UsOERBQUMsZ0VBQUQ7QUFBYyxpQkFBUyxFQUFDLCtDQUF4QjtBQUFBLCtCQUNFO0FBQUssbUJBQVMsRUFBQztBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQXZDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFvREQsQ0E1REQ7O0FBOERBLGlFQUFlRyxPQUFmLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1JvYWRNYXAudHN4PzI2YzkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEZsZXgsIEZsZXhDb2wsIE1vYmlsZUhpZGRlbiB9IGZyb20gJy4uL3V0aWwvc3R5bGVkQ29tcG9uZW50cyc7XHJcbmltcG9ydCB7IHVzZUluVmlldyB9IGZyb20gJ3JlYWN0LWludGVyc2VjdGlvbi1vYnNlcnZlcic7XHJcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xyXG5pbXBvcnQgeyBTZWN0aW9uQ29udGV4dCB9IGZyb20gJy4uL3V0aWwvQ29udGV4dFByb3ZpZGVyL0N1cnJlbnRTZWN0aW9uQ29udGV4dFByb3ZpZGVyJztcclxuXHJcbmltcG9ydCB7IGZhZGUsIGZhZGVJblVwLCBwaG90b0FuaW0sIHN0YWdnZXIsIHN0YWdnZXJMYXRlIH0gZnJvbSAnLi4vdXRpbC9hbmltYXRpb24nO1xyXG5pbXBvcnQgeyB1c2VTY3JvbGwgfSBmcm9tICcuLi9ob29rcy91c2VTY3JvbGwnO1xyXG5cclxuY29uc3QgUm9hZE1hcCA9ICgpID0+IHtcclxuICBjb25zdCB7IHNldEN1cnJlbnRTZWN0aW9uIH0gPSB1c2VDb250ZXh0KFNlY3Rpb25Db250ZXh0KTtcclxuICAvLyBjb25zdCB7IHJlZiwgaW5WaWV3LCBlbnRyeSB9ID0gdXNlSW5WaWV3KHsgdGhyZXNob2xkOiAwLjEgfSk7XHJcbiAgY29uc3QgeyByZWYsIGNvbnRyb2xzLCBpblZpZXcgfSA9IHVzZVNjcm9sbCgpO1xyXG5cclxuICBpZiAoaW5WaWV3KSB7XHJcbiAgICBzZXRDdXJyZW50U2VjdGlvbigncm9hZG1hcCcpO1xyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gaWQ9XCJyb2FkbWFwXCIgY2xhc3NOYW1lPVwiIHRleHQtcHJpbWFyeSBiZy1zZWNvbmRhcnkgcHQtWzg1cHhdXCIgcmVmPXtyZWZ9PlxyXG4gICAgICA8RmxleENvbCBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBnYXAtMyBwYi0xMFwiPlxyXG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBoZWFkaW5nXCI+Um9hZG1hcDwvaDI+XHJcbiAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL3VuZGVybGluZS5wbmdcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICA8L0ZsZXhDb2w+XHJcblxyXG4gICAgICA8RmxleCBjbGFzc05hbWU9XCJmbGV4IHBiLTEwIHNlY3Rpb24td3JhcHBlclwiPlxyXG4gICAgICAgIDxtb3Rpb24uZGl2IHZhcmlhbnRzPXtmYWRlfSBjbGFzc05hbWU9XCJiYXNpcy1bMTAwJV0gbGc6YmFzaXMtWzQwJV0gXCI+XHJcbiAgICAgICAgICA8bW90aW9uLmRpdiB2YXJpYW50cz17c3RhZ2dlckxhdGV9IGFuaW1hdGU9e2NvbnRyb2xzfSBpbml0aWFsPVwiaGlkZGVuXCIgY2xhc3NOYW1lPVwiY29udGFpbmVyIHJlbGF0aXZlIG10LVs4MHB4XVwiPlxyXG4gICAgICAgICAgICA8RmxleENvbFxyXG4gICAgICAgICAgICAgIHZhcmlhbnRzPXtmYWRlSW5VcH1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyZWxhdGl2ZSBmaXJzdC1yb2FkbWFwIHBsLTEwICBweS0yIHJvYWRtYXAgbWluLWgtWzMwMHB4XSB3LVs4MCVdIGZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgICBib3JkZXItcHJpbWFyeSBib3JkZXItdC1bN3B4XSAgYm9yZGVyLWwtWzdweF0gXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJoZWFkaW5nXCI+R29hbCBPbmU6PC9oMj5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJyb2FkbWFwLXN1YmhlYWRpbmdcIj5MaXN0IGl0IG9uIG1hcmtldHBsYWNlPC9wPlxyXG4gICAgICAgICAgICA8L0ZsZXhDb2w+XHJcblxyXG4gICAgICAgICAgICA8RmxleENvbFxyXG4gICAgICAgICAgICAgIHZhcmlhbnRzPXtmYWRlSW5VcH1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyZWxhdGl2ZSBzZWNvbmQtcm9hZG1hcCBwbC0xMCBweS0yIHJvYWRtYXAgbWluLWgtWzI1MHB4XSB3LVs2MCVdIGZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgIGJvcmRlci1wcmltYXJ5IGJvcmRlci10LVs3cHhdICBib3JkZXItbC1bN3B4XVwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiaGVhZGluZ1wiPkdvYWwgVHdvOjwvaDI+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicm9hZG1hcC1zdWJoZWFkaW5nXCI+Q29sbGFib3JhdGlvbiB3aXRoIG90aGVyIGFuaW1lIHByb2plY3Q8L3A+XHJcbiAgICAgICAgICAgIDwvRmxleENvbD5cclxuXHJcbiAgICAgICAgICAgIDxGbGV4Q29sXHJcbiAgICAgICAgICAgICAgdmFyaWFudHM9e2ZhZGVJblVwfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlbGF0aXZlIHRoaXJkLXJvYWRtYXAgcGwtMTAgIHB5LTIgcm9hZG1hcCBtaW4taC1bMjUwcHhdIHctWzYwJV0gZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciAgYm9yZGVyLXByaW1hcnkgYm9yZGVyLXQtWzdweF0gIGJvcmRlci1sLVs3cHhdXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJoZWFkaW5nXCI+R29hbCBUaHJlZTo8L2gyPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInJvYWRtYXAtc3ViaGVhZGluZ1wiPlNlY29uZCB2ZXJzaW9uIG9mIFNheXVyaSB3aXRoIGRhcmsgcGFzdCByZXZlYWwsIGFpcmRyb3AgYW5kIG1pbnQuIFRCRC48L3A+XHJcbiAgICAgICAgICAgIDwvRmxleENvbD5cclxuXHJcbiAgICAgICAgICAgIDxGbGV4Q29sXHJcbiAgICAgICAgICAgICAgdmFyaWFudHM9e2ZhZGVJblVwfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlbGF0aXZlIHJvYWRtYXAgcHktMiAgbWluLWgtWzI1MHB4XSB3LVs4MCVdIGZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgcGwtMTAgIGJvcmRlci1wcmltYXJ5IGJvcmRlci15LVs3cHhdICBib3JkZXItbC1bN3B4XVwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGJvdHRvbS1bLTIwcHhdIHJpZ2h0LVstMjBweF0gcm91bmRlZC1mdWxsIGJnLXByaW1hcnkgdy1bNDBweF0gaC1bNDBweF0gXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBib3R0b20tWy0yMHB4XSBsZWZ0LVstMjBweF0gcm91bmRlZC1mdWxsIGJnLXByaW1hcnkgdy1bNDBweF0gaC1bNDBweF0gXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImhlYWRpbmdcIj5Hb2FsIEZvdXI6PC9oMj5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJyb2FkbWFwLXN1YmhlYWRpbmcgdy1bMTAwJV1cIj5JbnRlZ3JhdGUgU2F5dXJpIG9uIFJlZHZlcnNlLiBEZXRhaWxzIGNvbWluZyBzb29uLjwvcD5cclxuICAgICAgICAgICAgPC9GbGV4Q29sPlxyXG4gICAgICAgICAgPC9tb3Rpb24uZGl2PlxyXG4gICAgICAgIDwvbW90aW9uLmRpdj5cclxuXHJcbiAgICAgICAgPE1vYmlsZUhpZGRlbiBjbGFzc05hbWU9XCIgaGlkZGVuIGxnOmJsb2NrIGxnOmJhc2lzLVs2MCVdIG9iamVjdC1jb3ZlciBcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1hdXRvIGgtW2NhbGMoMTAwJSsyLjVyZW0pXSBiZy1yaWdodC1ib3R0b20gYmctY292ZXIgYmctcm9hZG1hcFwiIC8+XHJcbiAgICAgICAgPC9Nb2JpbGVIaWRkZW4+XHJcbiAgICAgIDwvRmxleD5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUm9hZE1hcDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlQ29udGV4dCIsIkZsZXgiLCJGbGV4Q29sIiwiTW9iaWxlSGlkZGVuIiwibW90aW9uIiwiU2VjdGlvbkNvbnRleHQiLCJmYWRlIiwiZmFkZUluVXAiLCJzdGFnZ2VyTGF0ZSIsInVzZVNjcm9sbCIsIlJvYWRNYXAiLCJzZXRDdXJyZW50U2VjdGlvbiIsInJlZiIsImNvbnRyb2xzIiwiaW5WaWV3Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/RoadMap.tsx\n");

/***/ }),

/***/ "./util/ContextProvider/CurrentSectionContextProvider.jsx":
/*!****************************************************************!*\
  !*** ./util/ContextProvider/CurrentSectionContextProvider.jsx ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SectionContext\": () => (/* binding */ SectionContext),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"S:\\\\blockchain\\\\nft\\\\sayuri\\\\util\\\\ContextProvider\\\\CurrentSectionContextProvider.jsx\";\n\n\nconst SectionContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();\n\nconst SectionContextProvider = props => {\n  const {\n    0: currentSection,\n    1: setCurrentSection\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('home');\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(SectionContext.Provider, {\n    value: {\n      currentSection,\n      setCurrentSection\n    },\n    children: props.children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 10\n  }, undefined);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SectionContextProvider);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlsL0NvbnRleHRQcm92aWRlci9DdXJyZW50U2VjdGlvbkNvbnRleHRQcm92aWRlci5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOztBQUNPLE1BQU1HLGNBQWMsZ0JBQUdGLG9EQUFhLEVBQXBDOztBQUVQLE1BQU1HLHNCQUFzQixHQUFHQyxLQUFLLElBQUk7QUFDdEMsUUFBTTtBQUFBLE9BQUNDLGNBQUQ7QUFBQSxPQUFpQkM7QUFBakIsTUFBc0NMLCtDQUFRLENBQUMsTUFBRCxDQUFwRDtBQUNBLHNCQUFPLDhEQUFDLGNBQUQsQ0FBZ0IsUUFBaEI7QUFBeUIsU0FBSyxFQUFFO0FBQUVJLE1BQUFBLGNBQUY7QUFBa0JDLE1BQUFBO0FBQWxCLEtBQWhDO0FBQUEsY0FBd0VGLEtBQUssQ0FBQ0c7QUFBOUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFQO0FBQ0QsQ0FIRDs7QUFLQSxpRUFBZUosc0JBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlsL0NvbnRleHRQcm92aWRlci9DdXJyZW50U2VjdGlvbkNvbnRleHRQcm92aWRlci5qc3g/ZDgzMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgY3JlYXRlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmV4cG9ydCBjb25zdCBTZWN0aW9uQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcclxuXHJcbmNvbnN0IFNlY3Rpb25Db250ZXh0UHJvdmlkZXIgPSBwcm9wcyA9PiB7XHJcbiAgY29uc3QgW2N1cnJlbnRTZWN0aW9uLCBzZXRDdXJyZW50U2VjdGlvbl0gPSB1c2VTdGF0ZSgnaG9tZScpO1xyXG4gIHJldHVybiA8U2VjdGlvbkNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgY3VycmVudFNlY3Rpb24sIHNldEN1cnJlbnRTZWN0aW9uIH19Pntwcm9wcy5jaGlsZHJlbn08L1NlY3Rpb25Db250ZXh0LlByb3ZpZGVyPjtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlY3Rpb25Db250ZXh0UHJvdmlkZXI7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VTdGF0ZSIsIlNlY3Rpb25Db250ZXh0IiwiU2VjdGlvbkNvbnRleHRQcm92aWRlciIsInByb3BzIiwiY3VycmVudFNlY3Rpb24iLCJzZXRDdXJyZW50U2VjdGlvbiIsImNoaWxkcmVuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./util/ContextProvider/CurrentSectionContextProvider.jsx\n");

/***/ })

};
;