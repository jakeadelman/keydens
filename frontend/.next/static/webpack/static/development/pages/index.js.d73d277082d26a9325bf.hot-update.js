webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/main/Search.js":
/*!***********************************!*\
  !*** ./components/main/Search.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Search; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-float */ "./node_modules/@babel/runtime-corejs2/core-js/parse-float.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Loader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Loader */ "./components/main/Loader.js");





var _jsxFileName = "/Users/manx/projects/keyword-density/frontend/components/main/Search.js";






var Cookies = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");

var CryptoJS = __webpack_require__(/*! crypto-js */ "./node_modules/crypto-js/index.js");

function Search() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_useState, 2),
      keyword = _useState2[0],
      editKeyword = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(false),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_useState3, 2),
      tooMany = _useState4[0],
      setTooMany = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(false),
      _useState6 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_useState5, 2),
      wordTooMany = _useState6[0],
      setWordTooMany = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(false),
      _useState8 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_useState7, 2),
      loading = _useState8[0],
      setLoading = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(),
      _useState10 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_useState9, 2),
      data = _useState10[0],
      setData = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(),
      _useState12 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_useState11, 2),
      isData = _useState12[0],
      setIsData = _useState12[1];

  function sub() {
    return _sub.apply(this, arguments);
  } //   function getNumCookie() {
  //     let cook = Cookies.get("num");
  //     if (cook == undefined) {
  //       let numtext = CryptoJS.AES.encrypt("1", "//secr/k!!");
  //       Cookies.set("num", numtext, { expires: 0.02083333333 });
  //       return "1";
  //     }
  //     var bytes = CryptoJS.AES.decrypt(cook.toString(), "//secr/k!!");
  //     var plaintext = bytes.toString(CryptoJS.enc.Utf8);
  //     console.log(plaintext);
  //     return plaintext;
  //   }


  function _sub() {
    _sub = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var cookieExists, ciphertext, formattedKw, getStr, kwArray, newText, _ciphertext, i, _formattedKw, _getStr;

      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setTooMany(false);
              setWordTooMany(false);
              cookieExists = get();

              if (!(cookieExists == false)) {
                _context.next = 13;
                break;
              }

              ciphertext = CryptoJS.AES.encrypt(keyword, "//secr/k!!"); //   let ciphernum = CryptoJS.AES.encrypt("1", "//secr/k!!");
              //   Cookies.set("num", ciphernum, { expires: 0.02083333333 });

              Cookies.set("wrds", ciphertext, {
                expires: 0.02083333333
              });
              console.log("fetching");
              formattedKw = keyword.replace(" ", "+");
              getStr = "http://localhost:4000/keyword/" + formattedKw;
              setLoading(true);
              axios__WEBPACK_IMPORTED_MODULE_7___default.a.get(getStr).then(function (response) {
                console.log(response);
                setIsData(true);
                setData(response.data);
                setLoading(false);
              });
              _context.next = 35;
              break;

            case 13:
              kwArray = cookieExists.split("+");
              console.log(kwArray);
              newText = cookieExists + "+" + keyword;
              _ciphertext = CryptoJS.AES.encrypt(newText, "//secr/k!!");
              Cookies.set("wrds", _ciphertext, {
                expires: 0.02083333333
              });
              i = 0;

            case 19:
              if (!(i < kwArray.length)) {
                _context.next = 27;
                break;
              }

              if (!(keyword == kwArray[i])) {
                _context.next = 24;
                break;
              }

              console.log("word found");
              setWordTooMany(true);
              return _context.abrupt("return");

            case 24:
              i++;
              _context.next = 19;
              break;

            case 27:
              if (!(kwArray.length >= 5)) {
                _context.next = 30;
                break;
              }

              setTooMany(true);
              return _context.abrupt("return");

            case 30:
              //   let numCookie = getNumCookie();
              //   numCookie = parseInt(numCookie);
              //   if (numCookie == 5) {
              //     setTooMany(true);
              //     return;
              //   }
              //   numCookie += 1;
              //   let numtext = CryptoJS.AES.encrypt(numCookie.toString(), "//secr/k!!");
              //   Cookies.set("num", numtext, { expires: 0.02083333333 });
              console.log("found kwArray and fetching");
              setLoading(true);
              _formattedKw = keyword.replace(" ", "+");
              _getStr = "http://localhost:4000/keyword/" + _formattedKw;
              axios__WEBPACK_IMPORTED_MODULE_7___default.a.get(_getStr).then(function (response) {
                setIsData(true);
                setData(response.data);
                setLoading(false);
                console.log(response);
              });

            case 35:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _sub.apply(this, arguments);
  }

  function get() {
    var text = Cookies.get("wrds");

    if (text == undefined) {
      return false;
    } else {
      var bytes = CryptoJS.AES.decrypt(text.toString(), "//secr/k!!");
      var plaintext = bytes.toString(CryptoJS.enc.Utf8);
      console.log(plaintext);
      return plaintext;
    }
  }

  function decrypt(_x) {
    return _decrypt.apply(this, arguments);
  }

  function _decrypt() {
    _decrypt = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(text) {
      var bytes, plaintext;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              bytes = CryptoJS.AES.decrypt(text.toString(), "//secr/k!!");
              plaintext = bytes.toString(CryptoJS.enc.Utf8);
              return _context2.abrupt("return", plaintext);

            case 3:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
    return _decrypt.apply(this, arguments);
  }

  if (!loading && !isData) {
    return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      className: "outer-search-wrap",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      className: "jsx-883005859" + " " + "inner-search-wrap",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      className: "jsx-883005859" + " " + "search-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("strong", {
      className: "jsx-883005859",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108
      },
      __self: this
    }, "enter your keyword")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      className: "jsx-883005859" + " " + "searchbar-wrap",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
      type: "text",
      onChange: function onChange(e) {
        return editKeyword(e.target.value);
      },
      className: "jsx-883005859" + " " + "keyword-input",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
      onClick: sub,
      className: "jsx-883005859" + " " + "search-button",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116
      },
      __self: this
    }, "Get Metrics")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
      id: "883005859",
      __self: this
    }, "div.inner-search-wrap.jsx-883005859{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding:15px;}div.outer-search-wrap.jsx-883005859{padding:10px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}div.search-title.jsx-883005859{margin:auto;margin-bottom:10px;}button.search-button.jsx-883005859{border-radius:0;border:none;padding:8px;font-size:10px;background-color:#e22b2e;color:#fff;text-transform:uppercase;-webkit-letter-spacing:1.5px;-moz-letter-spacing:1.5px;-ms-letter-spacing:1.5px;letter-spacing:1.5px;font-weight:700;}.search-button.jsx-883005859:hover{background:#fff;color:#000;box-shadow:0 12px 60px 0 #e22b2e;}div.searchbar-wrap.jsx-883005859{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;}input.keyword-input.jsx-883005859{font-size:13px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYW54L3Byb2plY3RzL2tleXdvcmQtZGVuc2l0eS9mcm9udGVuZC9jb21wb25lbnRzL21haW4vU2VhcmNoLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdIYSxBQUc4QixBQUtBLEFBS0QsQUFJSSxBQVdBLEFBS0gsQUFJRSxZQXZCSSxDQUxOLEVBNkJmLENBcEJjLEFBV0QsV0FDc0IsQ0FYckIsR0FKZCxTQUtpQixlQUNVLEtBVTNCLGNBM0J3QixBQThCSCxNQVpSLE9BWlcsSUFhRyx5QkFDSiwyQkFXdkIsU0E5QmUsYUFDZixBQUtBLG9EQWNrQixnQkFDbEIiLCJmaWxlIjoiL1VzZXJzL21hbngvcHJvamVjdHMva2V5d29yZC1kZW5zaXR5L2Zyb250ZW5kL2NvbXBvbmVudHMvbWFpbi9TZWFyY2guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IFNwaW5uZXIgZnJvbSBcIi4vTG9hZGVyXCI7XG5jb25zdCBDb29raWVzID0gcmVxdWlyZShcImpzLWNvb2tpZVwiKTtcbnZhciBDcnlwdG9KUyA9IHJlcXVpcmUoXCJjcnlwdG8tanNcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNlYXJjaCgpIHtcbiAgY29uc3QgW2tleXdvcmQsIGVkaXRLZXl3b3JkXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFt0b29NYW55LCBzZXRUb29NYW55XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3dvcmRUb29NYW55LCBzZXRXb3JkVG9vTWFueV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgW2lzRGF0YSwgc2V0SXNEYXRhXSA9IHVzZVN0YXRlKCk7XG5cbiAgYXN5bmMgZnVuY3Rpb24gc3ViKCkge1xuICAgIHNldFRvb01hbnkoZmFsc2UpO1xuICAgIHNldFdvcmRUb29NYW55KGZhbHNlKTtcbiAgICBsZXQgY29va2llRXhpc3RzID0gZ2V0KCk7XG4gICAgaWYgKGNvb2tpZUV4aXN0cyA9PSBmYWxzZSkge1xuICAgICAgbGV0IGNpcGhlcnRleHQgPSBDcnlwdG9KUy5BRVMuZW5jcnlwdChrZXl3b3JkLCBcIi8vc2Vjci9rISFcIik7XG4gICAgICAvLyAgIGxldCBjaXBoZXJudW0gPSBDcnlwdG9KUy5BRVMuZW5jcnlwdChcIjFcIiwgXCIvL3NlY3IvayEhXCIpO1xuICAgICAgLy8gICBDb29raWVzLnNldChcIm51bVwiLCBjaXBoZXJudW0sIHsgZXhwaXJlczogMC4wMjA4MzMzMzMzMyB9KTtcbiAgICAgIENvb2tpZXMuc2V0KFwid3Jkc1wiLCBjaXBoZXJ0ZXh0LCB7IGV4cGlyZXM6IDAuMDIwODMzMzMzMzMgfSk7XG4gICAgICBjb25zb2xlLmxvZyhcImZldGNoaW5nXCIpO1xuICAgICAgbGV0IGZvcm1hdHRlZEt3ID0ga2V5d29yZC5yZXBsYWNlKFwiIFwiLCBcIitcIik7XG4gICAgICBsZXQgZ2V0U3RyID0gXCJodHRwOi8vbG9jYWxob3N0OjQwMDAva2V5d29yZC9cIiArIGZvcm1hdHRlZEt3O1xuICAgICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICAgIGF4aW9zLmdldChnZXRTdHIpLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgICAgIHNldElzRGF0YSh0cnVlKTtcbiAgICAgICAgc2V0RGF0YShyZXNwb25zZS5kYXRhKTtcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IGt3QXJyYXkgPSBjb29raWVFeGlzdHMuc3BsaXQoXCIrXCIpO1xuICAgICAgY29uc29sZS5sb2coa3dBcnJheSk7XG4gICAgICBsZXQgbmV3VGV4dCA9IGNvb2tpZUV4aXN0cyArIFwiK1wiICsga2V5d29yZDtcbiAgICAgIGxldCBjaXBoZXJ0ZXh0ID0gQ3J5cHRvSlMuQUVTLmVuY3J5cHQobmV3VGV4dCwgXCIvL3NlY3IvayEhXCIpO1xuICAgICAgQ29va2llcy5zZXQoXCJ3cmRzXCIsIGNpcGhlcnRleHQsIHsgZXhwaXJlczogMC4wMjA4MzMzMzMzMyB9KTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwga3dBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoa2V5d29yZCA9PSBrd0FycmF5W2ldKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJ3b3JkIGZvdW5kXCIpO1xuICAgICAgICAgIHNldFdvcmRUb29NYW55KHRydWUpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGt3QXJyYXkubGVuZ3RoID49IDUpIHtcbiAgICAgICAgc2V0VG9vTWFueSh0cnVlKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgLy8gICBsZXQgbnVtQ29va2llID0gZ2V0TnVtQ29va2llKCk7XG4gICAgICAvLyAgIG51bUNvb2tpZSA9IHBhcnNlSW50KG51bUNvb2tpZSk7XG4gICAgICAvLyAgIGlmIChudW1Db29raWUgPT0gNSkge1xuICAgICAgLy8gICAgIHNldFRvb01hbnkodHJ1ZSk7XG4gICAgICAvLyAgICAgcmV0dXJuO1xuICAgICAgLy8gICB9XG4gICAgICAvLyAgIG51bUNvb2tpZSArPSAxO1xuICAgICAgLy8gICBsZXQgbnVtdGV4dCA9IENyeXB0b0pTLkFFUy5lbmNyeXB0KG51bUNvb2tpZS50b1N0cmluZygpLCBcIi8vc2Vjci9rISFcIik7XG4gICAgICAvLyAgIENvb2tpZXMuc2V0KFwibnVtXCIsIG51bXRleHQsIHsgZXhwaXJlczogMC4wMjA4MzMzMzMzMyB9KTtcbiAgICAgIGNvbnNvbGUubG9nKFwiZm91bmQga3dBcnJheSBhbmQgZmV0Y2hpbmdcIik7XG4gICAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgICAgbGV0IGZvcm1hdHRlZEt3ID0ga2V5d29yZC5yZXBsYWNlKFwiIFwiLCBcIitcIik7XG4gICAgICBsZXQgZ2V0U3RyID0gXCJodHRwOi8vbG9jYWxob3N0OjQwMDAva2V5d29yZC9cIiArIGZvcm1hdHRlZEt3O1xuICAgICAgYXhpb3MuZ2V0KGdldFN0cikudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgIHNldElzRGF0YSh0cnVlKTtcbiAgICAgICAgc2V0RGF0YShyZXNwb25zZS5kYXRhKTtcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8vICAgZnVuY3Rpb24gZ2V0TnVtQ29va2llKCkge1xuICAvLyAgICAgbGV0IGNvb2sgPSBDb29raWVzLmdldChcIm51bVwiKTtcbiAgLy8gICAgIGlmIChjb29rID09IHVuZGVmaW5lZCkge1xuICAvLyAgICAgICBsZXQgbnVtdGV4dCA9IENyeXB0b0pTLkFFUy5lbmNyeXB0KFwiMVwiLCBcIi8vc2Vjci9rISFcIik7XG4gIC8vICAgICAgIENvb2tpZXMuc2V0KFwibnVtXCIsIG51bXRleHQsIHsgZXhwaXJlczogMC4wMjA4MzMzMzMzMyB9KTtcbiAgLy8gICAgICAgcmV0dXJuIFwiMVwiO1xuICAvLyAgICAgfVxuICAvLyAgICAgdmFyIGJ5dGVzID0gQ3J5cHRvSlMuQUVTLmRlY3J5cHQoY29vay50b1N0cmluZygpLCBcIi8vc2Vjci9rISFcIik7XG4gIC8vICAgICB2YXIgcGxhaW50ZXh0ID0gYnl0ZXMudG9TdHJpbmcoQ3J5cHRvSlMuZW5jLlV0ZjgpO1xuICAvLyAgICAgY29uc29sZS5sb2cocGxhaW50ZXh0KTtcbiAgLy8gICAgIHJldHVybiBwbGFpbnRleHQ7XG4gIC8vICAgfVxuXG4gIGZ1bmN0aW9uIGdldCgpIHtcbiAgICBsZXQgdGV4dCA9IENvb2tpZXMuZ2V0KFwid3Jkc1wiKTtcbiAgICBpZiAodGV4dCA9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGJ5dGVzID0gQ3J5cHRvSlMuQUVTLmRlY3J5cHQodGV4dC50b1N0cmluZygpLCBcIi8vc2Vjci9rISFcIik7XG4gICAgICB2YXIgcGxhaW50ZXh0ID0gYnl0ZXMudG9TdHJpbmcoQ3J5cHRvSlMuZW5jLlV0ZjgpO1xuICAgICAgY29uc29sZS5sb2cocGxhaW50ZXh0KTtcbiAgICAgIHJldHVybiBwbGFpbnRleHQ7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gZGVjcnlwdCh0ZXh0KSB7XG4gICAgdmFyIGJ5dGVzID0gQ3J5cHRvSlMuQUVTLmRlY3J5cHQodGV4dC50b1N0cmluZygpLCBcIi8vc2Vjci9rISFcIik7XG4gICAgdmFyIHBsYWludGV4dCA9IGJ5dGVzLnRvU3RyaW5nKENyeXB0b0pTLmVuYy5VdGY4KTtcbiAgICByZXR1cm4gcGxhaW50ZXh0O1xuICB9XG4gIGlmICghbG9hZGluZyAmJiAhaXNEYXRhKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3V0ZXItc2VhcmNoLXdyYXBcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbm5lci1zZWFyY2gtd3JhcFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoLXRpdGxlXCI+XG4gICAgICAgICAgICA8c3Ryb25nPmVudGVyIHlvdXIga2V5d29yZDwvc3Ryb25nPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoYmFyLXdyYXBcIj5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJrZXl3b3JkLWlucHV0XCJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBlZGl0S2V5d29yZChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJzZWFyY2gtYnV0dG9uXCIgb25DbGljaz17c3VifT5cbiAgICAgICAgICAgICAgR2V0IE1ldHJpY3NcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgICB7YFxuICAgICAgICAgICAgICBkaXYuaW5uZXItc2VhcmNoLXdyYXAge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGRpdi5vdXRlci1zZWFyY2gtd3JhcCB7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZGl2LnNlYXJjaC10aXRsZSB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYnV0dG9uLnNlYXJjaC1idXR0b24ge1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDhweDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2UyMmIyZTtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxLjVweDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5zZWFyY2gtYnV0dG9uOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMTJweCA2MHB4IDAgI2UyMmIyZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBkaXYuc2VhcmNoYmFyLXdyYXAge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpbnB1dC5rZXl3b3JkLWlucHV0IHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9XG4gICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9IGVsc2UgaWYgKCEhbG9hZGluZykge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm91dGVyLXNlYXJjaC13cmFwXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5uZXItc2VhcmNoLXdyYXBcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC10aXRsZVwiPlxuICAgICAgICAgICAgPHN0cm9uZz5cbiAgICAgICAgICAgICAgZmV0Y2hpbmcgZGF0YSBmb3IgdG9wIDUwIHJlc3VsdHMuLi5cbiAgICAgICAgICAgICAgPGJyIC8+IHRoaXMgY291bGQgdGFrZSBhIG1pbnV0ZS5cbiAgICAgICAgICAgIDwvc3Ryb25nPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9hZGluZy13cmFwXCI+XG4gICAgICAgICAgICA8U3Bpbm5lciAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgICB7YFxuICAgICAgICAgICAgICBkaXYuaW5uZXItc2VhcmNoLXdyYXAge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGRpdi5vdXRlci1zZWFyY2gtd3JhcCB7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZGl2LnNlYXJjaC10aXRsZSB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBidXR0b24uc2VhcmNoLWJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogOHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTIyYjJlO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDEuNXB4O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLnNlYXJjaC1idXR0b246aG92ZXIge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgICAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAxMnB4IDYwcHggMCAjZTIyYjJlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGRpdi5sb2FkaW5nLXdyYXAge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpbnB1dC5rZXl3b3JkLWlucHV0IHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9XG4gICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm91dGVyLXNlYXJjaC13cmFwXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5uZXItc2VhcmNoLXdyYXBcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC10aXRsZVwiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgcmVzdWx0cyBmb3IgPHN0cm9uZz57a2V5d29yZH08L3N0cm9uZz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGF0YS13cmFwXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhdGEtcm93XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGF0YS1kYXRcIj5kZW5zaXR5PC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGF0YS1kYXRcIj5cbiAgICAgICAgICAgICAgICB7cGFyc2VGbG9hdChkYXRhLmRlbnNpdHkpXG4gICAgICAgICAgICAgICAgICAudG9GaXhlZCgyKVxuICAgICAgICAgICAgICAgICAgLnRvU3RyaW5nKCl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhdGEtcm93XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGF0YS1kYXRcIj5hdmcgd29yZGNvdW50PC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGF0YS1kYXRcIj57cGFyc2VJbnQoZGF0YS53b3JkKS50b1N0cmluZygpfTwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2gtYWdhaW4td3JhcFwiPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJzZWFyY2gtYnV0dG9uXCI+c2VhcmNoIGFnYWluPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICAgIHtgXG4gICAgICAgICAgICAgIGRpdi5kYXRhLXdyYXAge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBkaXYuZGF0YS1yb3cge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBkaXYuZGF0YS1kYXQge1xuICAgICAgICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZGl2LmlubmVyLXNlYXJjaC13cmFwIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBkaXYub3V0ZXItc2VhcmNoLXdyYXAge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGRpdi5zZWFyY2gtdGl0bGUge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYnV0dG9uLnNlYXJjaC1idXR0b24ge1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDhweDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2UyMmIyZTtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxLjVweDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5zZWFyY2gtYnV0dG9uOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMTJweCA2MHB4IDAgI2UyMmIyZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBkaXYubG9hZGluZy13cmFwIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaW5wdXQua2V5d29yZC1pbnB1dCB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfVxuICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIl19 */\n/*@ sourceURL=/Users/manx/projects/keyword-density/frontend/components/main/Search.js */")));
  } else if (!!loading) {
    return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      className: "outer-search-wrap",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 166
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      className: "jsx-3598683652" + " " + "inner-search-wrap",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      className: "jsx-3598683652" + " " + "search-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("strong", {
      className: "jsx-3598683652",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 169
      },
      __self: this
    }, "fetching data for top 50 results...", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br", {
      className: "jsx-3598683652",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 171
      },
      __self: this
    }), " this could take a minute.")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      className: "jsx-3598683652" + " " + "loading-wrap",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 174
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_Loader__WEBPACK_IMPORTED_MODULE_8__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 175
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
      id: "3598683652",
      __self: this
    }, "div.inner-search-wrap.jsx-3598683652{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding:15px;}div.outer-search-wrap.jsx-3598683652{padding:10px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}div.search-title.jsx-3598683652{margin:auto;margin-bottom:10px;text-align:center;margin-bottom:5px;}button.search-button.jsx-3598683652{border-radius:0;border:none;padding:8px;font-size:10px;background-color:#e22b2e;color:#fff;text-transform:uppercase;-webkit-letter-spacing:1.5px;-moz-letter-spacing:1.5px;-ms-letter-spacing:1.5px;letter-spacing:1.5px;font-weight:700;}.search-button.jsx-3598683652:hover{background:#fff;color:#000;box-shadow:0 12px 60px 0 #e22b2e;}div.loading-wrap.jsx-3598683652{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;}input.keyword-input.jsx-3598683652{font-size:13px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYW54L3Byb2plY3RzL2tleXdvcmQtZGVuc2l0eS9mcm9udGVuZC9jb21wb25lbnRzL21haW4vU2VhcmNoLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlMYSxBQUc4QixBQUtBLEFBS0QsQUFNSSxBQVdBLEFBS0gsQUFJRSxZQXpCSSxDQUxOLEVBK0JmLENBcEJjLEFBV0QsV0FDc0IsQ0FYckIsR0FOTSxTQU9ILFNBTkcsTUFPTyxLQVUzQixPQWhCQSxPQWJ3QixBQWdDSCxNQVpSLE9BZFcsSUFlRyx5QkFDSiwyQkFXdkIsU0FoQ2UsYUFDZixBQUtBLG9EQWdCa0IsZ0JBQ2xCIiwiZmlsZSI6Ii9Vc2Vycy9tYW54L3Byb2plY3RzL2tleXdvcmQtZGVuc2l0eS9mcm9udGVuZC9jb21wb25lbnRzL21haW4vU2VhcmNoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBTcGlubmVyIGZyb20gXCIuL0xvYWRlclwiO1xuY29uc3QgQ29va2llcyA9IHJlcXVpcmUoXCJqcy1jb29raWVcIik7XG52YXIgQ3J5cHRvSlMgPSByZXF1aXJlKFwiY3J5cHRvLWpzXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZWFyY2goKSB7XG4gIGNvbnN0IFtrZXl3b3JkLCBlZGl0S2V5d29yZF0gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbdG9vTWFueSwgc2V0VG9vTWFueV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFt3b3JkVG9vTWFueSwgc2V0V29yZFRvb01hbnldID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFtpc0RhdGEsIHNldElzRGF0YV0gPSB1c2VTdGF0ZSgpO1xuXG4gIGFzeW5jIGZ1bmN0aW9uIHN1YigpIHtcbiAgICBzZXRUb29NYW55KGZhbHNlKTtcbiAgICBzZXRXb3JkVG9vTWFueShmYWxzZSk7XG4gICAgbGV0IGNvb2tpZUV4aXN0cyA9IGdldCgpO1xuICAgIGlmIChjb29raWVFeGlzdHMgPT0gZmFsc2UpIHtcbiAgICAgIGxldCBjaXBoZXJ0ZXh0ID0gQ3J5cHRvSlMuQUVTLmVuY3J5cHQoa2V5d29yZCwgXCIvL3NlY3IvayEhXCIpO1xuICAgICAgLy8gICBsZXQgY2lwaGVybnVtID0gQ3J5cHRvSlMuQUVTLmVuY3J5cHQoXCIxXCIsIFwiLy9zZWNyL2shIVwiKTtcbiAgICAgIC8vICAgQ29va2llcy5zZXQoXCJudW1cIiwgY2lwaGVybnVtLCB7IGV4cGlyZXM6IDAuMDIwODMzMzMzMzMgfSk7XG4gICAgICBDb29raWVzLnNldChcIndyZHNcIiwgY2lwaGVydGV4dCwgeyBleHBpcmVzOiAwLjAyMDgzMzMzMzMzIH0pO1xuICAgICAgY29uc29sZS5sb2coXCJmZXRjaGluZ1wiKTtcbiAgICAgIGxldCBmb3JtYXR0ZWRLdyA9IGtleXdvcmQucmVwbGFjZShcIiBcIiwgXCIrXCIpO1xuICAgICAgbGV0IGdldFN0ciA9IFwiaHR0cDovL2xvY2FsaG9zdDo0MDAwL2tleXdvcmQvXCIgKyBmb3JtYXR0ZWRLdztcbiAgICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgICBheGlvcy5nZXQoZ2V0U3RyKS50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgICAgICBzZXRJc0RhdGEodHJ1ZSk7XG4gICAgICAgIHNldERhdGEocmVzcG9uc2UuZGF0YSk7XG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBrd0FycmF5ID0gY29va2llRXhpc3RzLnNwbGl0KFwiK1wiKTtcbiAgICAgIGNvbnNvbGUubG9nKGt3QXJyYXkpO1xuICAgICAgbGV0IG5ld1RleHQgPSBjb29raWVFeGlzdHMgKyBcIitcIiArIGtleXdvcmQ7XG4gICAgICBsZXQgY2lwaGVydGV4dCA9IENyeXB0b0pTLkFFUy5lbmNyeXB0KG5ld1RleHQsIFwiLy9zZWNyL2shIVwiKTtcbiAgICAgIENvb2tpZXMuc2V0KFwid3Jkc1wiLCBjaXBoZXJ0ZXh0LCB7IGV4cGlyZXM6IDAuMDIwODMzMzMzMzMgfSk7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGt3QXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGtleXdvcmQgPT0ga3dBcnJheVtpXSkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwid29yZCBmb3VuZFwiKTtcbiAgICAgICAgICBzZXRXb3JkVG9vTWFueSh0cnVlKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChrd0FycmF5Lmxlbmd0aCA+PSA1KSB7XG4gICAgICAgIHNldFRvb01hbnkodHJ1ZSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIC8vICAgbGV0IG51bUNvb2tpZSA9IGdldE51bUNvb2tpZSgpO1xuICAgICAgLy8gICBudW1Db29raWUgPSBwYXJzZUludChudW1Db29raWUpO1xuICAgICAgLy8gICBpZiAobnVtQ29va2llID09IDUpIHtcbiAgICAgIC8vICAgICBzZXRUb29NYW55KHRydWUpO1xuICAgICAgLy8gICAgIHJldHVybjtcbiAgICAgIC8vICAgfVxuICAgICAgLy8gICBudW1Db29raWUgKz0gMTtcbiAgICAgIC8vICAgbGV0IG51bXRleHQgPSBDcnlwdG9KUy5BRVMuZW5jcnlwdChudW1Db29raWUudG9TdHJpbmcoKSwgXCIvL3NlY3IvayEhXCIpO1xuICAgICAgLy8gICBDb29raWVzLnNldChcIm51bVwiLCBudW10ZXh0LCB7IGV4cGlyZXM6IDAuMDIwODMzMzMzMzMgfSk7XG4gICAgICBjb25zb2xlLmxvZyhcImZvdW5kIGt3QXJyYXkgYW5kIGZldGNoaW5nXCIpO1xuICAgICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICAgIGxldCBmb3JtYXR0ZWRLdyA9IGtleXdvcmQucmVwbGFjZShcIiBcIiwgXCIrXCIpO1xuICAgICAgbGV0IGdldFN0ciA9IFwiaHR0cDovL2xvY2FsaG9zdDo0MDAwL2tleXdvcmQvXCIgKyBmb3JtYXR0ZWRLdztcbiAgICAgIGF4aW9zLmdldChnZXRTdHIpLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICBzZXRJc0RhdGEodHJ1ZSk7XG4gICAgICAgIHNldERhdGEocmVzcG9uc2UuZGF0YSk7XG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvLyAgIGZ1bmN0aW9uIGdldE51bUNvb2tpZSgpIHtcbiAgLy8gICAgIGxldCBjb29rID0gQ29va2llcy5nZXQoXCJudW1cIik7XG4gIC8vICAgICBpZiAoY29vayA9PSB1bmRlZmluZWQpIHtcbiAgLy8gICAgICAgbGV0IG51bXRleHQgPSBDcnlwdG9KUy5BRVMuZW5jcnlwdChcIjFcIiwgXCIvL3NlY3IvayEhXCIpO1xuICAvLyAgICAgICBDb29raWVzLnNldChcIm51bVwiLCBudW10ZXh0LCB7IGV4cGlyZXM6IDAuMDIwODMzMzMzMzMgfSk7XG4gIC8vICAgICAgIHJldHVybiBcIjFcIjtcbiAgLy8gICAgIH1cbiAgLy8gICAgIHZhciBieXRlcyA9IENyeXB0b0pTLkFFUy5kZWNyeXB0KGNvb2sudG9TdHJpbmcoKSwgXCIvL3NlY3IvayEhXCIpO1xuICAvLyAgICAgdmFyIHBsYWludGV4dCA9IGJ5dGVzLnRvU3RyaW5nKENyeXB0b0pTLmVuYy5VdGY4KTtcbiAgLy8gICAgIGNvbnNvbGUubG9nKHBsYWludGV4dCk7XG4gIC8vICAgICByZXR1cm4gcGxhaW50ZXh0O1xuICAvLyAgIH1cblxuICBmdW5jdGlvbiBnZXQoKSB7XG4gICAgbGV0IHRleHQgPSBDb29raWVzLmdldChcIndyZHNcIik7XG4gICAgaWYgKHRleHQgPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBieXRlcyA9IENyeXB0b0pTLkFFUy5kZWNyeXB0KHRleHQudG9TdHJpbmcoKSwgXCIvL3NlY3IvayEhXCIpO1xuICAgICAgdmFyIHBsYWludGV4dCA9IGJ5dGVzLnRvU3RyaW5nKENyeXB0b0pTLmVuYy5VdGY4KTtcbiAgICAgIGNvbnNvbGUubG9nKHBsYWludGV4dCk7XG4gICAgICByZXR1cm4gcGxhaW50ZXh0O1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIGRlY3J5cHQodGV4dCkge1xuICAgIHZhciBieXRlcyA9IENyeXB0b0pTLkFFUy5kZWNyeXB0KHRleHQudG9TdHJpbmcoKSwgXCIvL3NlY3IvayEhXCIpO1xuICAgIHZhciBwbGFpbnRleHQgPSBieXRlcy50b1N0cmluZyhDcnlwdG9KUy5lbmMuVXRmOCk7XG4gICAgcmV0dXJuIHBsYWludGV4dDtcbiAgfVxuICBpZiAoIWxvYWRpbmcgJiYgIWlzRGF0YSkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm91dGVyLXNlYXJjaC13cmFwXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5uZXItc2VhcmNoLXdyYXBcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC10aXRsZVwiPlxuICAgICAgICAgICAgPHN0cm9uZz5lbnRlciB5b3VyIGtleXdvcmQ8L3N0cm9uZz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaGJhci13cmFwXCI+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwia2V5d29yZC1pbnB1dFwiXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gZWRpdEtleXdvcmQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwic2VhcmNoLWJ1dHRvblwiIG9uQ2xpY2s9e3N1Yn0+XG4gICAgICAgICAgICAgIEdldCBNZXRyaWNzXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgICAge2BcbiAgICAgICAgICAgICAgZGl2LmlubmVyLXNlYXJjaC13cmFwIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBkaXYub3V0ZXItc2VhcmNoLXdyYXAge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGRpdi5zZWFyY2gtdGl0bGUge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGJ1dHRvbi5zZWFyY2gtYnV0dG9uIHtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA4cHg7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlMjJiMmU7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMS41cHg7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuc2VhcmNoLWJ1dHRvbjpob3ZlciB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDEycHggNjBweCAwICNlMjJiMmU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZGl2LnNlYXJjaGJhci13cmFwIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaW5wdXQua2V5d29yZC1pbnB1dCB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfVxuICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfSBlbHNlIGlmICghIWxvYWRpbmcpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdXRlci1zZWFyY2gtd3JhcFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubmVyLXNlYXJjaC13cmFwXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2gtdGl0bGVcIj5cbiAgICAgICAgICAgIDxzdHJvbmc+XG4gICAgICAgICAgICAgIGZldGNoaW5nIGRhdGEgZm9yIHRvcCA1MCByZXN1bHRzLi4uXG4gICAgICAgICAgICAgIDxiciAvPiB0aGlzIGNvdWxkIHRha2UgYSBtaW51dGUuXG4gICAgICAgICAgICA8L3N0cm9uZz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWRpbmctd3JhcFwiPlxuICAgICAgICAgICAgPFNwaW5uZXIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgICAge2BcbiAgICAgICAgICAgICAgZGl2LmlubmVyLXNlYXJjaC13cmFwIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBkaXYub3V0ZXItc2VhcmNoLXdyYXAge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGRpdi5zZWFyY2gtdGl0bGUge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYnV0dG9uLnNlYXJjaC1idXR0b24ge1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDhweDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2UyMmIyZTtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxLjVweDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5zZWFyY2gtYnV0dG9uOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMTJweCA2MHB4IDAgI2UyMmIyZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBkaXYubG9hZGluZy13cmFwIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaW5wdXQua2V5d29yZC1pbnB1dCB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfVxuICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdXRlci1zZWFyY2gtd3JhcFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubmVyLXNlYXJjaC13cmFwXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2gtdGl0bGVcIj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIHJlc3VsdHMgZm9yIDxzdHJvbmc+e2tleXdvcmR9PC9zdHJvbmc+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhdGEtd3JhcFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXRhLXJvd1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhdGEtZGF0XCI+ZGVuc2l0eTwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhdGEtZGF0XCI+XG4gICAgICAgICAgICAgICAge3BhcnNlRmxvYXQoZGF0YS5kZW5zaXR5KVxuICAgICAgICAgICAgICAgICAgLnRvRml4ZWQoMilcbiAgICAgICAgICAgICAgICAgIC50b1N0cmluZygpfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXRhLXJvd1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhdGEtZGF0XCI+YXZnIHdvcmRjb3VudDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhdGEtZGF0XCI+e3BhcnNlSW50KGRhdGEud29yZCkudG9TdHJpbmcoKX08L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoLWFnYWluLXdyYXBcIj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwic2VhcmNoLWJ1dHRvblwiPnNlYXJjaCBhZ2FpbjwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgICB7YFxuICAgICAgICAgICAgICBkaXYuZGF0YS13cmFwIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZGl2LmRhdGEtcm93IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZGl2LmRhdGEtZGF0IHtcbiAgICAgICAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGRpdi5pbm5lci1zZWFyY2gtd3JhcCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZGl2Lm91dGVyLXNlYXJjaC13cmFwIHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBkaXYuc2VhcmNoLXRpdGxlIHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGJ1dHRvbi5zZWFyY2gtYnV0dG9uIHtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA4cHg7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlMjJiMmU7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMS41cHg7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuc2VhcmNoLWJ1dHRvbjpob3ZlciB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDEycHggNjBweCAwICNlMjJiMmU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZGl2LmxvYWRpbmctd3JhcCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlucHV0LmtleXdvcmQtaW5wdXQge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH1cbiAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiJdfQ== */\n/*@ sourceURL=/Users/manx/projects/keyword-density/frontend/components/main/Search.js */")));
  } else {
    return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      className: "outer-search-wrap",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 225
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      className: "jsx-894933352" + " " + "inner-search-wrap",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 226
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      className: "jsx-894933352" + " " + "search-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 227
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      className: "jsx-894933352",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 228
      },
      __self: this
    }, "results for ", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("strong", {
      className: "jsx-894933352",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 229
      },
      __self: this
    }, keyword))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      className: "jsx-894933352" + " " + "data-wrap",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 232
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      className: "jsx-894933352" + " " + "data-row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 233
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      className: "jsx-894933352" + " " + "data-dat",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 234
      },
      __self: this
    }, "density"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      className: "jsx-894933352" + " " + "data-dat",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 235
      },
      __self: this
    }, _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_2___default()(data.density).toFixed(2).toString())), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      className: "jsx-894933352" + " " + "data-row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 241
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      className: "jsx-894933352" + " " + "data-dat",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 242
      },
      __self: this
    }, "avg wordcount"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      className: "jsx-894933352" + " " + "data-dat",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 243
      },
      __self: this
    }, _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1___default()(data.word).toString()))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      className: "jsx-894933352" + " " + "search-again-wrap",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 246
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
      className: "jsx-894933352" + " " + "search-button",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 247
      },
      __self: this
    }, "search again")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
      id: "894933352",
      __self: this
    }, "div.data-wrap.jsx-894933352{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}div.data-row.jsx-894933352{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;}div.data-dat.jsx-894933352{width:50%;}div.inner-search-wrap.jsx-894933352{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding:15px;}div.outer-search-wrap.jsx-894933352{padding:10px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}div.search-title.jsx-894933352{margin:auto;margin-bottom:10px;text-align:center;margin-bottom:5px;}button.search-button.jsx-894933352{border-radius:0;border:none;padding:8px;font-size:10px;background-color:#e22b2e;color:#fff;text-transform:uppercase;-webkit-letter-spacing:1.5px;-moz-letter-spacing:1.5px;-ms-letter-spacing:1.5px;letter-spacing:1.5px;font-weight:700;}.search-button.jsx-894933352:hover{background:#fff;color:#000;box-shadow:0 12px 60px 0 #e22b2e;}div.loading-wrap.jsx-894933352{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;}input.keyword-input.jsx-894933352{font-size:13px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYW54L3Byb2plY3RzL2tleXdvcmQtZGVuc2l0eS9mcm9udGVuZC9jb21wb25lbnRzL21haW4vU2VhcmNoLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlQYSxBQUc4QixBQUlBLEFBSUgsQUFHRyxBQUtBLEFBS0QsQUFNSSxBQVdBLEFBS0gsQUFJRSxVQXRDakIsRUFhcUIsQ0FMTixFQStCZixDQXBCYyxBQVdELFdBQ3NCLENBWHJCLEdBTk0sU0FPSCxTQU5HLE1BT08sS0FVM0IsT0FoQkEsT0F4QndCLEFBSUgsQUFPRyxBQWdDSCxNQVpSLE9BZFcsSUFlRyx5QkFDSiwyQkE1QnZCLEFBdUNBLFNBM0NBLEFBV2UsYUFDZixBQUtBLG9EQWdCa0IsZ0JBQ2xCIiwiZmlsZSI6Ii9Vc2Vycy9tYW54L3Byb2plY3RzL2tleXdvcmQtZGVuc2l0eS9mcm9udGVuZC9jb21wb25lbnRzL21haW4vU2VhcmNoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBTcGlubmVyIGZyb20gXCIuL0xvYWRlclwiO1xuY29uc3QgQ29va2llcyA9IHJlcXVpcmUoXCJqcy1jb29raWVcIik7XG52YXIgQ3J5cHRvSlMgPSByZXF1aXJlKFwiY3J5cHRvLWpzXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZWFyY2goKSB7XG4gIGNvbnN0IFtrZXl3b3JkLCBlZGl0S2V5d29yZF0gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbdG9vTWFueSwgc2V0VG9vTWFueV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFt3b3JkVG9vTWFueSwgc2V0V29yZFRvb01hbnldID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFtpc0RhdGEsIHNldElzRGF0YV0gPSB1c2VTdGF0ZSgpO1xuXG4gIGFzeW5jIGZ1bmN0aW9uIHN1YigpIHtcbiAgICBzZXRUb29NYW55KGZhbHNlKTtcbiAgICBzZXRXb3JkVG9vTWFueShmYWxzZSk7XG4gICAgbGV0IGNvb2tpZUV4aXN0cyA9IGdldCgpO1xuICAgIGlmIChjb29raWVFeGlzdHMgPT0gZmFsc2UpIHtcbiAgICAgIGxldCBjaXBoZXJ0ZXh0ID0gQ3J5cHRvSlMuQUVTLmVuY3J5cHQoa2V5d29yZCwgXCIvL3NlY3IvayEhXCIpO1xuICAgICAgLy8gICBsZXQgY2lwaGVybnVtID0gQ3J5cHRvSlMuQUVTLmVuY3J5cHQoXCIxXCIsIFwiLy9zZWNyL2shIVwiKTtcbiAgICAgIC8vICAgQ29va2llcy5zZXQoXCJudW1cIiwgY2lwaGVybnVtLCB7IGV4cGlyZXM6IDAuMDIwODMzMzMzMzMgfSk7XG4gICAgICBDb29raWVzLnNldChcIndyZHNcIiwgY2lwaGVydGV4dCwgeyBleHBpcmVzOiAwLjAyMDgzMzMzMzMzIH0pO1xuICAgICAgY29uc29sZS5sb2coXCJmZXRjaGluZ1wiKTtcbiAgICAgIGxldCBmb3JtYXR0ZWRLdyA9IGtleXdvcmQucmVwbGFjZShcIiBcIiwgXCIrXCIpO1xuICAgICAgbGV0IGdldFN0ciA9IFwiaHR0cDovL2xvY2FsaG9zdDo0MDAwL2tleXdvcmQvXCIgKyBmb3JtYXR0ZWRLdztcbiAgICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgICBheGlvcy5nZXQoZ2V0U3RyKS50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgICAgICBzZXRJc0RhdGEodHJ1ZSk7XG4gICAgICAgIHNldERhdGEocmVzcG9uc2UuZGF0YSk7XG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBrd0FycmF5ID0gY29va2llRXhpc3RzLnNwbGl0KFwiK1wiKTtcbiAgICAgIGNvbnNvbGUubG9nKGt3QXJyYXkpO1xuICAgICAgbGV0IG5ld1RleHQgPSBjb29raWVFeGlzdHMgKyBcIitcIiArIGtleXdvcmQ7XG4gICAgICBsZXQgY2lwaGVydGV4dCA9IENyeXB0b0pTLkFFUy5lbmNyeXB0KG5ld1RleHQsIFwiLy9zZWNyL2shIVwiKTtcbiAgICAgIENvb2tpZXMuc2V0KFwid3Jkc1wiLCBjaXBoZXJ0ZXh0LCB7IGV4cGlyZXM6IDAuMDIwODMzMzMzMzMgfSk7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGt3QXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGtleXdvcmQgPT0ga3dBcnJheVtpXSkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwid29yZCBmb3VuZFwiKTtcbiAgICAgICAgICBzZXRXb3JkVG9vTWFueSh0cnVlKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChrd0FycmF5Lmxlbmd0aCA+PSA1KSB7XG4gICAgICAgIHNldFRvb01hbnkodHJ1ZSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIC8vICAgbGV0IG51bUNvb2tpZSA9IGdldE51bUNvb2tpZSgpO1xuICAgICAgLy8gICBudW1Db29raWUgPSBwYXJzZUludChudW1Db29raWUpO1xuICAgICAgLy8gICBpZiAobnVtQ29va2llID09IDUpIHtcbiAgICAgIC8vICAgICBzZXRUb29NYW55KHRydWUpO1xuICAgICAgLy8gICAgIHJldHVybjtcbiAgICAgIC8vICAgfVxuICAgICAgLy8gICBudW1Db29raWUgKz0gMTtcbiAgICAgIC8vICAgbGV0IG51bXRleHQgPSBDcnlwdG9KUy5BRVMuZW5jcnlwdChudW1Db29raWUudG9TdHJpbmcoKSwgXCIvL3NlY3IvayEhXCIpO1xuICAgICAgLy8gICBDb29raWVzLnNldChcIm51bVwiLCBudW10ZXh0LCB7IGV4cGlyZXM6IDAuMDIwODMzMzMzMzMgfSk7XG4gICAgICBjb25zb2xlLmxvZyhcImZvdW5kIGt3QXJyYXkgYW5kIGZldGNoaW5nXCIpO1xuICAgICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICAgIGxldCBmb3JtYXR0ZWRLdyA9IGtleXdvcmQucmVwbGFjZShcIiBcIiwgXCIrXCIpO1xuICAgICAgbGV0IGdldFN0ciA9IFwiaHR0cDovL2xvY2FsaG9zdDo0MDAwL2tleXdvcmQvXCIgKyBmb3JtYXR0ZWRLdztcbiAgICAgIGF4aW9zLmdldChnZXRTdHIpLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICBzZXRJc0RhdGEodHJ1ZSk7XG4gICAgICAgIHNldERhdGEocmVzcG9uc2UuZGF0YSk7XG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvLyAgIGZ1bmN0aW9uIGdldE51bUNvb2tpZSgpIHtcbiAgLy8gICAgIGxldCBjb29rID0gQ29va2llcy5nZXQoXCJudW1cIik7XG4gIC8vICAgICBpZiAoY29vayA9PSB1bmRlZmluZWQpIHtcbiAgLy8gICAgICAgbGV0IG51bXRleHQgPSBDcnlwdG9KUy5BRVMuZW5jcnlwdChcIjFcIiwgXCIvL3NlY3IvayEhXCIpO1xuICAvLyAgICAgICBDb29raWVzLnNldChcIm51bVwiLCBudW10ZXh0LCB7IGV4cGlyZXM6IDAuMDIwODMzMzMzMzMgfSk7XG4gIC8vICAgICAgIHJldHVybiBcIjFcIjtcbiAgLy8gICAgIH1cbiAgLy8gICAgIHZhciBieXRlcyA9IENyeXB0b0pTLkFFUy5kZWNyeXB0KGNvb2sudG9TdHJpbmcoKSwgXCIvL3NlY3IvayEhXCIpO1xuICAvLyAgICAgdmFyIHBsYWludGV4dCA9IGJ5dGVzLnRvU3RyaW5nKENyeXB0b0pTLmVuYy5VdGY4KTtcbiAgLy8gICAgIGNvbnNvbGUubG9nKHBsYWludGV4dCk7XG4gIC8vICAgICByZXR1cm4gcGxhaW50ZXh0O1xuICAvLyAgIH1cblxuICBmdW5jdGlvbiBnZXQoKSB7XG4gICAgbGV0IHRleHQgPSBDb29raWVzLmdldChcIndyZHNcIik7XG4gICAgaWYgKHRleHQgPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBieXRlcyA9IENyeXB0b0pTLkFFUy5kZWNyeXB0KHRleHQudG9TdHJpbmcoKSwgXCIvL3NlY3IvayEhXCIpO1xuICAgICAgdmFyIHBsYWludGV4dCA9IGJ5dGVzLnRvU3RyaW5nKENyeXB0b0pTLmVuYy5VdGY4KTtcbiAgICAgIGNvbnNvbGUubG9nKHBsYWludGV4dCk7XG4gICAgICByZXR1cm4gcGxhaW50ZXh0O1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIGRlY3J5cHQodGV4dCkge1xuICAgIHZhciBieXRlcyA9IENyeXB0b0pTLkFFUy5kZWNyeXB0KHRleHQudG9TdHJpbmcoKSwgXCIvL3NlY3IvayEhXCIpO1xuICAgIHZhciBwbGFpbnRleHQgPSBieXRlcy50b1N0cmluZyhDcnlwdG9KUy5lbmMuVXRmOCk7XG4gICAgcmV0dXJuIHBsYWludGV4dDtcbiAgfVxuICBpZiAoIWxvYWRpbmcgJiYgIWlzRGF0YSkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm91dGVyLXNlYXJjaC13cmFwXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5uZXItc2VhcmNoLXdyYXBcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC10aXRsZVwiPlxuICAgICAgICAgICAgPHN0cm9uZz5lbnRlciB5b3VyIGtleXdvcmQ8L3N0cm9uZz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaGJhci13cmFwXCI+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwia2V5d29yZC1pbnB1dFwiXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gZWRpdEtleXdvcmQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwic2VhcmNoLWJ1dHRvblwiIG9uQ2xpY2s9e3N1Yn0+XG4gICAgICAgICAgICAgIEdldCBNZXRyaWNzXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgICAge2BcbiAgICAgICAgICAgICAgZGl2LmlubmVyLXNlYXJjaC13cmFwIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBkaXYub3V0ZXItc2VhcmNoLXdyYXAge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGRpdi5zZWFyY2gtdGl0bGUge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGJ1dHRvbi5zZWFyY2gtYnV0dG9uIHtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA4cHg7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlMjJiMmU7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMS41cHg7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuc2VhcmNoLWJ1dHRvbjpob3ZlciB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDEycHggNjBweCAwICNlMjJiMmU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZGl2LnNlYXJjaGJhci13cmFwIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaW5wdXQua2V5d29yZC1pbnB1dCB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfVxuICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfSBlbHNlIGlmICghIWxvYWRpbmcpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdXRlci1zZWFyY2gtd3JhcFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubmVyLXNlYXJjaC13cmFwXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2gtdGl0bGVcIj5cbiAgICAgICAgICAgIDxzdHJvbmc+XG4gICAgICAgICAgICAgIGZldGNoaW5nIGRhdGEgZm9yIHRvcCA1MCByZXN1bHRzLi4uXG4gICAgICAgICAgICAgIDxiciAvPiB0aGlzIGNvdWxkIHRha2UgYSBtaW51dGUuXG4gICAgICAgICAgICA8L3N0cm9uZz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWRpbmctd3JhcFwiPlxuICAgICAgICAgICAgPFNwaW5uZXIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgICAge2BcbiAgICAgICAgICAgICAgZGl2LmlubmVyLXNlYXJjaC13cmFwIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBkaXYub3V0ZXItc2VhcmNoLXdyYXAge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGRpdi5zZWFyY2gtdGl0bGUge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYnV0dG9uLnNlYXJjaC1idXR0b24ge1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDhweDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2UyMmIyZTtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxLjVweDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5zZWFyY2gtYnV0dG9uOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMTJweCA2MHB4IDAgI2UyMmIyZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBkaXYubG9hZGluZy13cmFwIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaW5wdXQua2V5d29yZC1pbnB1dCB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfVxuICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdXRlci1zZWFyY2gtd3JhcFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubmVyLXNlYXJjaC13cmFwXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2gtdGl0bGVcIj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIHJlc3VsdHMgZm9yIDxzdHJvbmc+e2tleXdvcmR9PC9zdHJvbmc+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhdGEtd3JhcFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXRhLXJvd1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhdGEtZGF0XCI+ZGVuc2l0eTwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhdGEtZGF0XCI+XG4gICAgICAgICAgICAgICAge3BhcnNlRmxvYXQoZGF0YS5kZW5zaXR5KVxuICAgICAgICAgICAgICAgICAgLnRvRml4ZWQoMilcbiAgICAgICAgICAgICAgICAgIC50b1N0cmluZygpfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXRhLXJvd1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhdGEtZGF0XCI+YXZnIHdvcmRjb3VudDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhdGEtZGF0XCI+e3BhcnNlSW50KGRhdGEud29yZCkudG9TdHJpbmcoKX08L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoLWFnYWluLXdyYXBcIj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwic2VhcmNoLWJ1dHRvblwiPnNlYXJjaCBhZ2FpbjwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgICB7YFxuICAgICAgICAgICAgICBkaXYuZGF0YS13cmFwIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZGl2LmRhdGEtcm93IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZGl2LmRhdGEtZGF0IHtcbiAgICAgICAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGRpdi5pbm5lci1zZWFyY2gtd3JhcCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZGl2Lm91dGVyLXNlYXJjaC13cmFwIHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBkaXYuc2VhcmNoLXRpdGxlIHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGJ1dHRvbi5zZWFyY2gtYnV0dG9uIHtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA4cHg7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlMjJiMmU7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMS41cHg7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuc2VhcmNoLWJ1dHRvbjpob3ZlciB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDEycHggNjBweCAwICNlMjJiMmU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZGl2LmxvYWRpbmctd3JhcCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlucHV0LmtleXdvcmQtaW5wdXQge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH1cbiAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiJdfQ== */\n/*@ sourceURL=/Users/manx/projects/keyword-density/frontend/components/main/Search.js */")));
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/parse-float.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/parse-float.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/parse-float */ "./node_modules/core-js/library/fn/parse-float.js");

/***/ }),

/***/ "./node_modules/core-js/library/fn/parse-float.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/library/fn/parse-float.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../modules/es6.parse-float */ "./node_modules/core-js/library/modules/es6.parse-float.js");
module.exports = __webpack_require__(/*! ../modules/_core */ "./node_modules/core-js/library/modules/_core.js").parseFloat;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_parse-float.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_parse-float.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $parseFloat = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js").parseFloat;
var $trim = __webpack_require__(/*! ./_string-trim */ "./node_modules/core-js/library/modules/_string-trim.js").trim;

module.exports = 1 / $parseFloat(__webpack_require__(/*! ./_string-ws */ "./node_modules/core-js/library/modules/_string-ws.js") + '-0') !== -Infinity ? function parseFloat(str) {
  var string = $trim(String(str), 3);
  var result = $parseFloat(string);
  return result === 0 && string.charAt(0) == '-' ? -0 : result;
} : $parseFloat;


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.parse-float.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.parse-float.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var $parseFloat = __webpack_require__(/*! ./_parse-float */ "./node_modules/core-js/library/modules/_parse-float.js");
// 18.2.4 parseFloat(string)
$export($export.G + $export.F * (parseFloat != $parseFloat), { parseFloat: $parseFloat });


/***/ })

})
//# sourceMappingURL=index.js.d73d277082d26a9325bf.hot-update.js.map