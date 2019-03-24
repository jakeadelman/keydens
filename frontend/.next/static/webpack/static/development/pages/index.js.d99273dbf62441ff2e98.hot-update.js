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
  }

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
              fetch(getStr); //   axios.get(getStr).then(response => {
              //     console.log(response);
              //     setIsData(true);
              //     setData(response.data);
              //     setLoading(false);
              //   });

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
              fetch(_getStr);

            case 35:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _sub.apply(this, arguments);
  }

  function fetch(getStr) {
    axios__WEBPACK_IMPORTED_MODULE_7___default.a.get(getStr).then(function (response) {
      var dens = _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_2___default()(response.data.density);

      dens = dens.toFixed(2);
      dens = dens.toString();

      var wrds = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1___default()(response.data.words);

      wrds = wrds.toString();
      var newDat = {};
      newDat["density"] = dens;
      newDat["words"] = wrds;
      console.log(newDat);
      setData(newDat);
      setIsData(true);
      setLoading(false);
      console.log(response);
    });
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
        lineNumber: 119
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      className: "jsx-883005859" + " " + "inner-search-wrap",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      className: "jsx-883005859" + " " + "search-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("strong", {
      className: "jsx-883005859",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122
      },
      __self: this
    }, "enter your keyword")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      className: "jsx-883005859" + " " + "searchbar-wrap",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124
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
        lineNumber: 125
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
      onClick: sub,
      className: "jsx-883005859" + " " + "search-button",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130
      },
      __self: this
    }, "Get Metrics")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
      id: "883005859",
      __self: this
    }, "div.inner-search-wrap.jsx-883005859{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding:15px;}div.outer-search-wrap.jsx-883005859{padding:10px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}div.search-title.jsx-883005859{margin:auto;margin-bottom:10px;}button.search-button.jsx-883005859{border-radius:0;border:none;padding:8px;font-size:10px;background-color:#e22b2e;color:#fff;text-transform:uppercase;-webkit-letter-spacing:1.5px;-moz-letter-spacing:1.5px;-ms-letter-spacing:1.5px;letter-spacing:1.5px;font-weight:700;}.search-button.jsx-883005859:hover{background:#fff;color:#000;box-shadow:0 12px 60px 0 #e22b2e;}div.searchbar-wrap.jsx-883005859{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;}input.keyword-input.jsx-883005859{font-size:13px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYW54L3Byb2plY3RzL2tleXdvcmQtZGVuc2l0eS9mcm9udGVuZC9jb21wb25lbnRzL21haW4vU2VhcmNoLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNJYSxBQUc4QixBQUtBLEFBS0QsQUFJSSxBQVdBLEFBS0gsQUFJRSxZQXZCSSxDQUxOLEVBNkJmLENBcEJjLEFBV0QsV0FDc0IsQ0FYckIsR0FKZCxTQUtpQixlQUNVLEtBVTNCLGNBM0J3QixBQThCSCxNQVpSLE9BWlcsSUFhRyx5QkFDSiwyQkFXdkIsU0E5QmUsYUFDZixBQUtBLG9EQWNrQixnQkFDbEIiLCJmaWxlIjoiL1VzZXJzL21hbngvcHJvamVjdHMva2V5d29yZC1kZW5zaXR5L2Zyb250ZW5kL2NvbXBvbmVudHMvbWFpbi9TZWFyY2guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IFNwaW5uZXIgZnJvbSBcIi4vTG9hZGVyXCI7XG5jb25zdCBDb29raWVzID0gcmVxdWlyZShcImpzLWNvb2tpZVwiKTtcbnZhciBDcnlwdG9KUyA9IHJlcXVpcmUoXCJjcnlwdG8tanNcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNlYXJjaCgpIHtcbiAgY29uc3QgW2tleXdvcmQsIGVkaXRLZXl3b3JkXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFt0b29NYW55LCBzZXRUb29NYW55XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3dvcmRUb29NYW55LCBzZXRXb3JkVG9vTWFueV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgW2lzRGF0YSwgc2V0SXNEYXRhXSA9IHVzZVN0YXRlKCk7XG5cbiAgYXN5bmMgZnVuY3Rpb24gc3ViKCkge1xuICAgIHNldFRvb01hbnkoZmFsc2UpO1xuICAgIHNldFdvcmRUb29NYW55KGZhbHNlKTtcbiAgICBsZXQgY29va2llRXhpc3RzID0gZ2V0KCk7XG4gICAgaWYgKGNvb2tpZUV4aXN0cyA9PSBmYWxzZSkge1xuICAgICAgbGV0IGNpcGhlcnRleHQgPSBDcnlwdG9KUy5BRVMuZW5jcnlwdChrZXl3b3JkLCBcIi8vc2Vjci9rISFcIik7XG4gICAgICAvLyAgIGxldCBjaXBoZXJudW0gPSBDcnlwdG9KUy5BRVMuZW5jcnlwdChcIjFcIiwgXCIvL3NlY3IvayEhXCIpO1xuICAgICAgLy8gICBDb29raWVzLnNldChcIm51bVwiLCBjaXBoZXJudW0sIHsgZXhwaXJlczogMC4wMjA4MzMzMzMzMyB9KTtcbiAgICAgIENvb2tpZXMuc2V0KFwid3Jkc1wiLCBjaXBoZXJ0ZXh0LCB7IGV4cGlyZXM6IDAuMDIwODMzMzMzMzMgfSk7XG4gICAgICBjb25zb2xlLmxvZyhcImZldGNoaW5nXCIpO1xuICAgICAgbGV0IGZvcm1hdHRlZEt3ID0ga2V5d29yZC5yZXBsYWNlKFwiIFwiLCBcIitcIik7XG4gICAgICBsZXQgZ2V0U3RyID0gXCJodHRwOi8vbG9jYWxob3N0OjQwMDAva2V5d29yZC9cIiArIGZvcm1hdHRlZEt3O1xuICAgICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICAgIGZldGNoKGdldFN0cik7XG4gICAgICAvLyAgIGF4aW9zLmdldChnZXRTdHIpLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgLy8gICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICAgIC8vICAgICBzZXRJc0RhdGEodHJ1ZSk7XG4gICAgICAvLyAgICAgc2V0RGF0YShyZXNwb25zZS5kYXRhKTtcbiAgICAgIC8vICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgIC8vICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBrd0FycmF5ID0gY29va2llRXhpc3RzLnNwbGl0KFwiK1wiKTtcbiAgICAgIGNvbnNvbGUubG9nKGt3QXJyYXkpO1xuICAgICAgbGV0IG5ld1RleHQgPSBjb29raWVFeGlzdHMgKyBcIitcIiArIGtleXdvcmQ7XG4gICAgICBsZXQgY2lwaGVydGV4dCA9IENyeXB0b0pTLkFFUy5lbmNyeXB0KG5ld1RleHQsIFwiLy9zZWNyL2shIVwiKTtcbiAgICAgIENvb2tpZXMuc2V0KFwid3Jkc1wiLCBjaXBoZXJ0ZXh0LCB7IGV4cGlyZXM6IDAuMDIwODMzMzMzMzMgfSk7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGt3QXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGtleXdvcmQgPT0ga3dBcnJheVtpXSkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwid29yZCBmb3VuZFwiKTtcbiAgICAgICAgICBzZXRXb3JkVG9vTWFueSh0cnVlKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChrd0FycmF5Lmxlbmd0aCA+PSA1KSB7XG4gICAgICAgIHNldFRvb01hbnkodHJ1ZSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIC8vICAgbGV0IG51bUNvb2tpZSA9IGdldE51bUNvb2tpZSgpO1xuICAgICAgLy8gICBudW1Db29raWUgPSBwYXJzZUludChudW1Db29raWUpO1xuICAgICAgLy8gICBpZiAobnVtQ29va2llID09IDUpIHtcbiAgICAgIC8vICAgICBzZXRUb29NYW55KHRydWUpO1xuICAgICAgLy8gICAgIHJldHVybjtcbiAgICAgIC8vICAgfVxuICAgICAgLy8gICBudW1Db29raWUgKz0gMTtcbiAgICAgIC8vICAgbGV0IG51bXRleHQgPSBDcnlwdG9KUy5BRVMuZW5jcnlwdChudW1Db29raWUudG9TdHJpbmcoKSwgXCIvL3NlY3IvayEhXCIpO1xuICAgICAgLy8gICBDb29raWVzLnNldChcIm51bVwiLCBudW10ZXh0LCB7IGV4cGlyZXM6IDAuMDIwODMzMzMzMzMgfSk7XG4gICAgICBjb25zb2xlLmxvZyhcImZvdW5kIGt3QXJyYXkgYW5kIGZldGNoaW5nXCIpO1xuICAgICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICAgIGxldCBmb3JtYXR0ZWRLdyA9IGtleXdvcmQucmVwbGFjZShcIiBcIiwgXCIrXCIpO1xuICAgICAgbGV0IGdldFN0ciA9IFwiaHR0cDovL2xvY2FsaG9zdDo0MDAwL2tleXdvcmQvXCIgKyBmb3JtYXR0ZWRLdztcbiAgICAgIGZldGNoKGdldFN0cik7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZmV0Y2goZ2V0U3RyKSB7XG4gICAgYXhpb3MuZ2V0KGdldFN0cikudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICBsZXQgZGVucyA9IHBhcnNlRmxvYXQocmVzcG9uc2UuZGF0YS5kZW5zaXR5KTtcbiAgICAgIGRlbnMgPSBkZW5zLnRvRml4ZWQoMik7XG4gICAgICBkZW5zID0gZGVucy50b1N0cmluZygpO1xuICAgICAgbGV0IHdyZHMgPSBwYXJzZUludChyZXNwb25zZS5kYXRhLndvcmRzKTtcbiAgICAgIHdyZHMgPSB3cmRzLnRvU3RyaW5nKCk7XG4gICAgICBsZXQgbmV3RGF0ID0ge307XG4gICAgICBuZXdEYXRbXCJkZW5zaXR5XCJdID0gZGVucztcbiAgICAgIG5ld0RhdFtcIndvcmRzXCJdID0gd3JkcztcbiAgICAgIGNvbnNvbGUubG9nKG5ld0RhdCk7XG4gICAgICBzZXREYXRhKG5ld0RhdCk7XG4gICAgICBzZXRJc0RhdGEodHJ1ZSk7XG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vICAgZnVuY3Rpb24gZ2V0TnVtQ29va2llKCkge1xuICAvLyAgICAgbGV0IGNvb2sgPSBDb29raWVzLmdldChcIm51bVwiKTtcbiAgLy8gICAgIGlmIChjb29rID09IHVuZGVmaW5lZCkge1xuICAvLyAgICAgICBsZXQgbnVtdGV4dCA9IENyeXB0b0pTLkFFUy5lbmNyeXB0KFwiMVwiLCBcIi8vc2Vjci9rISFcIik7XG4gIC8vICAgICAgIENvb2tpZXMuc2V0KFwibnVtXCIsIG51bXRleHQsIHsgZXhwaXJlczogMC4wMjA4MzMzMzMzMyB9KTtcbiAgLy8gICAgICAgcmV0dXJuIFwiMVwiO1xuICAvLyAgICAgfVxuICAvLyAgICAgdmFyIGJ5dGVzID0gQ3J5cHRvSlMuQUVTLmRlY3J5cHQoY29vay50b1N0cmluZygpLCBcIi8vc2Vjci9rISFcIik7XG4gIC8vICAgICB2YXIgcGxhaW50ZXh0ID0gYnl0ZXMudG9TdHJpbmcoQ3J5cHRvSlMuZW5jLlV0ZjgpO1xuICAvLyAgICAgY29uc29sZS5sb2cocGxhaW50ZXh0KTtcbiAgLy8gICAgIHJldHVybiBwbGFpbnRleHQ7XG4gIC8vICAgfVxuXG4gIGZ1bmN0aW9uIGdldCgpIHtcbiAgICBsZXQgdGV4dCA9IENvb2tpZXMuZ2V0KFwid3Jkc1wiKTtcbiAgICBpZiAodGV4dCA9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGJ5dGVzID0gQ3J5cHRvSlMuQUVTLmRlY3J5cHQodGV4dC50b1N0cmluZygpLCBcIi8vc2Vjci9rISFcIik7XG4gICAgICB2YXIgcGxhaW50ZXh0ID0gYnl0ZXMudG9TdHJpbmcoQ3J5cHRvSlMuZW5jLlV0ZjgpO1xuICAgICAgY29uc29sZS5sb2cocGxhaW50ZXh0KTtcbiAgICAgIHJldHVybiBwbGFpbnRleHQ7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gZGVjcnlwdCh0ZXh0KSB7XG4gICAgdmFyIGJ5dGVzID0gQ3J5cHRvSlMuQUVTLmRlY3J5cHQodGV4dC50b1N0cmluZygpLCBcIi8vc2Vjci9rISFcIik7XG4gICAgdmFyIHBsYWludGV4dCA9IGJ5dGVzLnRvU3RyaW5nKENyeXB0b0pTLmVuYy5VdGY4KTtcbiAgICByZXR1cm4gcGxhaW50ZXh0O1xuICB9XG4gIGlmICghbG9hZGluZyAmJiAhaXNEYXRhKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3V0ZXItc2VhcmNoLXdyYXBcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbm5lci1zZWFyY2gtd3JhcFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoLXRpdGxlXCI+XG4gICAgICAgICAgICA8c3Ryb25nPmVudGVyIHlvdXIga2V5d29yZDwvc3Ryb25nPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoYmFyLXdyYXBcIj5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJrZXl3b3JkLWlucHV0XCJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBlZGl0S2V5d29yZChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJzZWFyY2gtYnV0dG9uXCIgb25DbGljaz17c3VifT5cbiAgICAgICAgICAgICAgR2V0IE1ldHJpY3NcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgICB7YFxuICAgICAgICAgICAgICBkaXYuaW5uZXItc2VhcmNoLXdyYXAge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGRpdi5vdXRlci1zZWFyY2gtd3JhcCB7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZGl2LnNlYXJjaC10aXRsZSB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYnV0dG9uLnNlYXJjaC1idXR0b24ge1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDhweDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2UyMmIyZTtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxLjVweDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5zZWFyY2gtYnV0dG9uOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMTJweCA2MHB4IDAgI2UyMmIyZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBkaXYuc2VhcmNoYmFyLXdyYXAge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpbnB1dC5rZXl3b3JkLWlucHV0IHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9XG4gICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9IGVsc2UgaWYgKCEhbG9hZGluZykge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm91dGVyLXNlYXJjaC13cmFwXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5uZXItc2VhcmNoLXdyYXBcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC10aXRsZVwiPlxuICAgICAgICAgICAgPHN0cm9uZz5cbiAgICAgICAgICAgICAgZmV0Y2hpbmcgZGF0YSBmb3IgdG9wIDUwIHJlc3VsdHMuLi5cbiAgICAgICAgICAgICAgPGJyIC8+IHRoaXMgY291bGQgdGFrZSBhIG1pbnV0ZS5cbiAgICAgICAgICAgIDwvc3Ryb25nPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9hZGluZy13cmFwXCI+XG4gICAgICAgICAgICA8U3Bpbm5lciAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgICB7YFxuICAgICAgICAgICAgICBkaXYuaW5uZXItc2VhcmNoLXdyYXAge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGRpdi5vdXRlci1zZWFyY2gtd3JhcCB7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZGl2LnNlYXJjaC10aXRsZSB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBidXR0b24uc2VhcmNoLWJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogOHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTIyYjJlO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDEuNXB4O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLnNlYXJjaC1idXR0b246aG92ZXIge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgICAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAxMnB4IDYwcHggMCAjZTIyYjJlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGRpdi5sb2FkaW5nLXdyYXAge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpbnB1dC5rZXl3b3JkLWlucHV0IHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9XG4gICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm91dGVyLWRhdGEtd3JhcFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGF0YS1zZWFyY2gtd3JhcFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2gtdGl0bGVcIj5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICByZXN1bHRzIGZvciA8c3Ryb25nPntrZXl3b3JkfTwvc3Ryb25nPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXRhLXdyYXBcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXRhLXJvd1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGF0YS1kYXRcIj5kZW5zaXR5PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXRhLWRhdFwiPntkYXRhLmRlbnNpdHl9PC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhdGEtcm93XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXRhLWRhdFwiPmF2ZyB3b3JkY291bnQ8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhdGEtZGF0XCI+e2RhdGEud29yZHN9PC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC1hZ2Fpbi13cmFwXCI+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwic2VhcmNoLWJ1dHRvblwiPnNlYXJjaCBhZ2FpbjwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgIHtgXG4gICAgICAgICAgICBkaXYuZGF0YS13cmFwIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRpdi5kYXRhLXJvdyB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkaXYuZGF0YS1kYXQge1xuICAgICAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGl2LmRhdGEtc2VhcmNoLXdyYXAge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5vdXRlci1kYXRhLXdyYXAge1xuICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICBtaW4td2lkdGg6IDI1MHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGl2LnNlYXJjaC10aXRsZSB7XG4gICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBidXR0b24uc2VhcmNoLWJ1dHRvbiB7XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgICAgcGFkZGluZzogOHB4O1xuICAgICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlMjJiMmU7XG4gICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMS41cHg7XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuc2VhcmNoLWJ1dHRvbjpob3ZlciB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDEycHggNjBweCAwICNlMjJiMmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkaXYubG9hZGluZy13cmFwIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlucHV0LmtleXdvcmQtaW5wdXQge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiJdfQ== */\n/*@ sourceURL=/Users/manx/projects/keyword-density/frontend/components/main/Search.js */")));
  } else if (!!loading) {
    return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      className: "outer-search-wrap",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 180
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      className: "jsx-3598683652" + " " + "inner-search-wrap",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 181
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      className: "jsx-3598683652" + " " + "search-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 182
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("strong", {
      className: "jsx-3598683652",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 183
      },
      __self: this
    }, "fetching data for top 50 results...", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br", {
      className: "jsx-3598683652",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 185
      },
      __self: this
    }), " this could take a minute.")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      className: "jsx-3598683652" + " " + "loading-wrap",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 188
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_Loader__WEBPACK_IMPORTED_MODULE_8__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 189
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
      id: "3598683652",
      __self: this
    }, "div.inner-search-wrap.jsx-3598683652{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding:15px;}div.outer-search-wrap.jsx-3598683652{padding:10px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}div.search-title.jsx-3598683652{margin:auto;margin-bottom:10px;text-align:center;margin-bottom:5px;}button.search-button.jsx-3598683652{border-radius:0;border:none;padding:8px;font-size:10px;background-color:#e22b2e;color:#fff;text-transform:uppercase;-webkit-letter-spacing:1.5px;-moz-letter-spacing:1.5px;-ms-letter-spacing:1.5px;letter-spacing:1.5px;font-weight:700;}.search-button.jsx-3598683652:hover{background:#fff;color:#000;box-shadow:0 12px 60px 0 #e22b2e;}div.loading-wrap.jsx-3598683652{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;}input.keyword-input.jsx-3598683652{font-size:13px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYW54L3Byb2plY3RzL2tleXdvcmQtZGVuc2l0eS9mcm9udGVuZC9jb21wb25lbnRzL21haW4vU2VhcmNoLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStMYSxBQUc4QixBQUtBLEFBS0QsQUFNSSxBQVdBLEFBS0gsQUFJRSxZQXpCSSxDQUxOLEVBK0JmLENBcEJjLEFBV0QsV0FDc0IsQ0FYckIsR0FOTSxTQU9ILFNBTkcsTUFPTyxLQVUzQixPQWhCQSxPQWJ3QixBQWdDSCxNQVpSLE9BZFcsSUFlRyx5QkFDSiwyQkFXdkIsU0FoQ2UsYUFDZixBQUtBLG9EQWdCa0IsZ0JBQ2xCIiwiZmlsZSI6Ii9Vc2Vycy9tYW54L3Byb2plY3RzL2tleXdvcmQtZGVuc2l0eS9mcm9udGVuZC9jb21wb25lbnRzL21haW4vU2VhcmNoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBTcGlubmVyIGZyb20gXCIuL0xvYWRlclwiO1xuY29uc3QgQ29va2llcyA9IHJlcXVpcmUoXCJqcy1jb29raWVcIik7XG52YXIgQ3J5cHRvSlMgPSByZXF1aXJlKFwiY3J5cHRvLWpzXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZWFyY2goKSB7XG4gIGNvbnN0IFtrZXl3b3JkLCBlZGl0S2V5d29yZF0gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbdG9vTWFueSwgc2V0VG9vTWFueV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFt3b3JkVG9vTWFueSwgc2V0V29yZFRvb01hbnldID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFtpc0RhdGEsIHNldElzRGF0YV0gPSB1c2VTdGF0ZSgpO1xuXG4gIGFzeW5jIGZ1bmN0aW9uIHN1YigpIHtcbiAgICBzZXRUb29NYW55KGZhbHNlKTtcbiAgICBzZXRXb3JkVG9vTWFueShmYWxzZSk7XG4gICAgbGV0IGNvb2tpZUV4aXN0cyA9IGdldCgpO1xuICAgIGlmIChjb29raWVFeGlzdHMgPT0gZmFsc2UpIHtcbiAgICAgIGxldCBjaXBoZXJ0ZXh0ID0gQ3J5cHRvSlMuQUVTLmVuY3J5cHQoa2V5d29yZCwgXCIvL3NlY3IvayEhXCIpO1xuICAgICAgLy8gICBsZXQgY2lwaGVybnVtID0gQ3J5cHRvSlMuQUVTLmVuY3J5cHQoXCIxXCIsIFwiLy9zZWNyL2shIVwiKTtcbiAgICAgIC8vICAgQ29va2llcy5zZXQoXCJudW1cIiwgY2lwaGVybnVtLCB7IGV4cGlyZXM6IDAuMDIwODMzMzMzMzMgfSk7XG4gICAgICBDb29raWVzLnNldChcIndyZHNcIiwgY2lwaGVydGV4dCwgeyBleHBpcmVzOiAwLjAyMDgzMzMzMzMzIH0pO1xuICAgICAgY29uc29sZS5sb2coXCJmZXRjaGluZ1wiKTtcbiAgICAgIGxldCBmb3JtYXR0ZWRLdyA9IGtleXdvcmQucmVwbGFjZShcIiBcIiwgXCIrXCIpO1xuICAgICAgbGV0IGdldFN0ciA9IFwiaHR0cDovL2xvY2FsaG9zdDo0MDAwL2tleXdvcmQvXCIgKyBmb3JtYXR0ZWRLdztcbiAgICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgICBmZXRjaChnZXRTdHIpO1xuICAgICAgLy8gICBheGlvcy5nZXQoZ2V0U3RyKS50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgIC8vICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgICAvLyAgICAgc2V0SXNEYXRhKHRydWUpO1xuICAgICAgLy8gICAgIHNldERhdGEocmVzcG9uc2UuZGF0YSk7XG4gICAgICAvLyAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAvLyAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQga3dBcnJheSA9IGNvb2tpZUV4aXN0cy5zcGxpdChcIitcIik7XG4gICAgICBjb25zb2xlLmxvZyhrd0FycmF5KTtcbiAgICAgIGxldCBuZXdUZXh0ID0gY29va2llRXhpc3RzICsgXCIrXCIgKyBrZXl3b3JkO1xuICAgICAgbGV0IGNpcGhlcnRleHQgPSBDcnlwdG9KUy5BRVMuZW5jcnlwdChuZXdUZXh0LCBcIi8vc2Vjci9rISFcIik7XG4gICAgICBDb29raWVzLnNldChcIndyZHNcIiwgY2lwaGVydGV4dCwgeyBleHBpcmVzOiAwLjAyMDgzMzMzMzMzIH0pO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrd0FycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChrZXl3b3JkID09IGt3QXJyYXlbaV0pIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIndvcmQgZm91bmRcIik7XG4gICAgICAgICAgc2V0V29yZFRvb01hbnkodHJ1ZSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoa3dBcnJheS5sZW5ndGggPj0gNSkge1xuICAgICAgICBzZXRUb29NYW55KHRydWUpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICAvLyAgIGxldCBudW1Db29raWUgPSBnZXROdW1Db29raWUoKTtcbiAgICAgIC8vICAgbnVtQ29va2llID0gcGFyc2VJbnQobnVtQ29va2llKTtcbiAgICAgIC8vICAgaWYgKG51bUNvb2tpZSA9PSA1KSB7XG4gICAgICAvLyAgICAgc2V0VG9vTWFueSh0cnVlKTtcbiAgICAgIC8vICAgICByZXR1cm47XG4gICAgICAvLyAgIH1cbiAgICAgIC8vICAgbnVtQ29va2llICs9IDE7XG4gICAgICAvLyAgIGxldCBudW10ZXh0ID0gQ3J5cHRvSlMuQUVTLmVuY3J5cHQobnVtQ29va2llLnRvU3RyaW5nKCksIFwiLy9zZWNyL2shIVwiKTtcbiAgICAgIC8vICAgQ29va2llcy5zZXQoXCJudW1cIiwgbnVtdGV4dCwgeyBleHBpcmVzOiAwLjAyMDgzMzMzMzMzIH0pO1xuICAgICAgY29uc29sZS5sb2coXCJmb3VuZCBrd0FycmF5IGFuZCBmZXRjaGluZ1wiKTtcbiAgICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgICBsZXQgZm9ybWF0dGVkS3cgPSBrZXl3b3JkLnJlcGxhY2UoXCIgXCIsIFwiK1wiKTtcbiAgICAgIGxldCBnZXRTdHIgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6NDAwMC9rZXl3b3JkL1wiICsgZm9ybWF0dGVkS3c7XG4gICAgICBmZXRjaChnZXRTdHIpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGZldGNoKGdldFN0cikge1xuICAgIGF4aW9zLmdldChnZXRTdHIpLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgbGV0IGRlbnMgPSBwYXJzZUZsb2F0KHJlc3BvbnNlLmRhdGEuZGVuc2l0eSk7XG4gICAgICBkZW5zID0gZGVucy50b0ZpeGVkKDIpO1xuICAgICAgZGVucyA9IGRlbnMudG9TdHJpbmcoKTtcbiAgICAgIGxldCB3cmRzID0gcGFyc2VJbnQocmVzcG9uc2UuZGF0YS53b3Jkcyk7XG4gICAgICB3cmRzID0gd3Jkcy50b1N0cmluZygpO1xuICAgICAgbGV0IG5ld0RhdCA9IHt9O1xuICAgICAgbmV3RGF0W1wiZGVuc2l0eVwiXSA9IGRlbnM7XG4gICAgICBuZXdEYXRbXCJ3b3Jkc1wiXSA9IHdyZHM7XG4gICAgICBjb25zb2xlLmxvZyhuZXdEYXQpO1xuICAgICAgc2V0RGF0YShuZXdEYXQpO1xuICAgICAgc2V0SXNEYXRhKHRydWUpO1xuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgfSk7XG4gIH1cblxuICAvLyAgIGZ1bmN0aW9uIGdldE51bUNvb2tpZSgpIHtcbiAgLy8gICAgIGxldCBjb29rID0gQ29va2llcy5nZXQoXCJudW1cIik7XG4gIC8vICAgICBpZiAoY29vayA9PSB1bmRlZmluZWQpIHtcbiAgLy8gICAgICAgbGV0IG51bXRleHQgPSBDcnlwdG9KUy5BRVMuZW5jcnlwdChcIjFcIiwgXCIvL3NlY3IvayEhXCIpO1xuICAvLyAgICAgICBDb29raWVzLnNldChcIm51bVwiLCBudW10ZXh0LCB7IGV4cGlyZXM6IDAuMDIwODMzMzMzMzMgfSk7XG4gIC8vICAgICAgIHJldHVybiBcIjFcIjtcbiAgLy8gICAgIH1cbiAgLy8gICAgIHZhciBieXRlcyA9IENyeXB0b0pTLkFFUy5kZWNyeXB0KGNvb2sudG9TdHJpbmcoKSwgXCIvL3NlY3IvayEhXCIpO1xuICAvLyAgICAgdmFyIHBsYWludGV4dCA9IGJ5dGVzLnRvU3RyaW5nKENyeXB0b0pTLmVuYy5VdGY4KTtcbiAgLy8gICAgIGNvbnNvbGUubG9nKHBsYWludGV4dCk7XG4gIC8vICAgICByZXR1cm4gcGxhaW50ZXh0O1xuICAvLyAgIH1cblxuICBmdW5jdGlvbiBnZXQoKSB7XG4gICAgbGV0IHRleHQgPSBDb29raWVzLmdldChcIndyZHNcIik7XG4gICAgaWYgKHRleHQgPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBieXRlcyA9IENyeXB0b0pTLkFFUy5kZWNyeXB0KHRleHQudG9TdHJpbmcoKSwgXCIvL3NlY3IvayEhXCIpO1xuICAgICAgdmFyIHBsYWludGV4dCA9IGJ5dGVzLnRvU3RyaW5nKENyeXB0b0pTLmVuYy5VdGY4KTtcbiAgICAgIGNvbnNvbGUubG9nKHBsYWludGV4dCk7XG4gICAgICByZXR1cm4gcGxhaW50ZXh0O1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIGRlY3J5cHQodGV4dCkge1xuICAgIHZhciBieXRlcyA9IENyeXB0b0pTLkFFUy5kZWNyeXB0KHRleHQudG9TdHJpbmcoKSwgXCIvL3NlY3IvayEhXCIpO1xuICAgIHZhciBwbGFpbnRleHQgPSBieXRlcy50b1N0cmluZyhDcnlwdG9KUy5lbmMuVXRmOCk7XG4gICAgcmV0dXJuIHBsYWludGV4dDtcbiAgfVxuICBpZiAoIWxvYWRpbmcgJiYgIWlzRGF0YSkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm91dGVyLXNlYXJjaC13cmFwXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5uZXItc2VhcmNoLXdyYXBcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC10aXRsZVwiPlxuICAgICAgICAgICAgPHN0cm9uZz5lbnRlciB5b3VyIGtleXdvcmQ8L3N0cm9uZz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaGJhci13cmFwXCI+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwia2V5d29yZC1pbnB1dFwiXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gZWRpdEtleXdvcmQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwic2VhcmNoLWJ1dHRvblwiIG9uQ2xpY2s9e3N1Yn0+XG4gICAgICAgICAgICAgIEdldCBNZXRyaWNzXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgICAge2BcbiAgICAgICAgICAgICAgZGl2LmlubmVyLXNlYXJjaC13cmFwIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBkaXYub3V0ZXItc2VhcmNoLXdyYXAge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGRpdi5zZWFyY2gtdGl0bGUge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGJ1dHRvbi5zZWFyY2gtYnV0dG9uIHtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA4cHg7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlMjJiMmU7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMS41cHg7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuc2VhcmNoLWJ1dHRvbjpob3ZlciB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDEycHggNjBweCAwICNlMjJiMmU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZGl2LnNlYXJjaGJhci13cmFwIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaW5wdXQua2V5d29yZC1pbnB1dCB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfVxuICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfSBlbHNlIGlmICghIWxvYWRpbmcpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdXRlci1zZWFyY2gtd3JhcFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubmVyLXNlYXJjaC13cmFwXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2gtdGl0bGVcIj5cbiAgICAgICAgICAgIDxzdHJvbmc+XG4gICAgICAgICAgICAgIGZldGNoaW5nIGRhdGEgZm9yIHRvcCA1MCByZXN1bHRzLi4uXG4gICAgICAgICAgICAgIDxiciAvPiB0aGlzIGNvdWxkIHRha2UgYSBtaW51dGUuXG4gICAgICAgICAgICA8L3N0cm9uZz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWRpbmctd3JhcFwiPlxuICAgICAgICAgICAgPFNwaW5uZXIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgICAge2BcbiAgICAgICAgICAgICAgZGl2LmlubmVyLXNlYXJjaC13cmFwIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBkaXYub3V0ZXItc2VhcmNoLXdyYXAge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGRpdi5zZWFyY2gtdGl0bGUge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYnV0dG9uLnNlYXJjaC1idXR0b24ge1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDhweDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2UyMmIyZTtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxLjVweDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5zZWFyY2gtYnV0dG9uOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMTJweCA2MHB4IDAgI2UyMmIyZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBkaXYubG9hZGluZy13cmFwIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaW5wdXQua2V5d29yZC1pbnB1dCB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfVxuICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdXRlci1kYXRhLXdyYXBcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhdGEtc2VhcmNoLXdyYXBcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoLXRpdGxlXCI+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgcmVzdWx0cyBmb3IgPHN0cm9uZz57a2V5d29yZH08L3N0cm9uZz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGF0YS13cmFwXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGF0YS1yb3dcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhdGEtZGF0XCI+ZGVuc2l0eTwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGF0YS1kYXRcIj57ZGF0YS5kZW5zaXR5fTwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXRhLXJvd1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGF0YS1kYXRcIj5hdmcgd29yZGNvdW50PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXRhLWRhdFwiPntkYXRhLndvcmRzfTwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2gtYWdhaW4td3JhcFwiPlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInNlYXJjaC1idXR0b25cIj5zZWFyY2ggYWdhaW48L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICB7YFxuICAgICAgICAgICAgZGl2LmRhdGEtd3JhcCB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkaXYuZGF0YS1yb3cge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGl2LmRhdGEtZGF0IHtcbiAgICAgICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRpdi5kYXRhLXNlYXJjaC13cmFwIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAub3V0ZXItZGF0YS13cmFwIHtcbiAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgbWluLXdpZHRoOiAyNTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRpdi5zZWFyY2gtdGl0bGUge1xuICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnV0dG9uLnNlYXJjaC1idXR0b24ge1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDhweDtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTIyYjJlO1xuICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDEuNXB4O1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnNlYXJjaC1idXR0b246aG92ZXIge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAxMnB4IDYwcHggMCAjZTIyYjJlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGl2LmxvYWRpbmctd3JhcCB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpbnB1dC5rZXl3b3JkLWlucHV0IHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iXX0= */\n/*@ sourceURL=/Users/manx/projects/keyword-density/frontend/components/main/Search.js */")));
  } else {
    return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      className: "jsx-2678722305",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 239
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      className: "jsx-2678722305" + " " + "outer-data-wrap",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 240
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      className: "jsx-2678722305" + " " + "data-search-wrap",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 241
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      className: "jsx-2678722305" + " " + "search-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 242
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      className: "jsx-2678722305",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 243
      },
      __self: this
    }, "results for ", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("strong", {
      className: "jsx-2678722305",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 244
      },
      __self: this
    }, keyword))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      className: "jsx-2678722305" + " " + "data-wrap",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 247
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      className: "jsx-2678722305" + " " + "data-row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 248
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      className: "jsx-2678722305" + " " + "data-dat",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 249
      },
      __self: this
    }, "density"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      className: "jsx-2678722305" + " " + "data-dat",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 250
      },
      __self: this
    }, data.density)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      className: "jsx-2678722305" + " " + "data-row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 252
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      className: "jsx-2678722305" + " " + "data-dat",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 253
      },
      __self: this
    }, "avg wordcount"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      className: "jsx-2678722305" + " " + "data-dat",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 254
      },
      __self: this
    }, data.words))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      className: "jsx-2678722305" + " " + "search-again-wrap",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 257
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
      className: "jsx-2678722305" + " " + "search-button",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 258
      },
      __self: this
    }, "search again")))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
      id: "2678722305",
      __self: this
    }, "div.data-wrap.jsx-2678722305{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}div.data-row.jsx-2678722305{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;}div.data-dat.jsx-2678722305{width:50%;}div.data-search-wrap.jsx-2678722305{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding:15px;width:100%;}.outer-data-wrap.jsx-2678722305{padding:10px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;min-width:250px;}div.search-title.jsx-2678722305{margin:auto;margin-bottom:10px;text-align:center;margin-bottom:5px;}button.search-button.jsx-2678722305{border-radius:0;border:none;padding:8px;font-size:10px;background-color:#e22b2e;color:#fff;text-transform:uppercase;-webkit-letter-spacing:1.5px;-moz-letter-spacing:1.5px;-ms-letter-spacing:1.5px;letter-spacing:1.5px;font-weight:700;}.search-button.jsx-2678722305:hover{background:#fff;color:#000;box-shadow:0 12px 60px 0 #e22b2e;}div.loading-wrap.jsx-2678722305{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;}input.keyword-input.jsx-2678722305{font-size:13px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYW54L3Byb2plY3RzL2tleXdvcmQtZGVuc2l0eS9mcm9udGVuZC9jb21wb25lbnRzL21haW4vU2VhcmNoLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNRVyxBQUc0QixBQUlBLEFBSUgsQUFHRyxBQU1BLEFBTUQsQUFNSSxBQVdBLEFBS0gsQUFJRSxVQXhDakIsRUFlcUIsQ0FOTixFQWdDZixDQXBCYyxBQVdELFdBQ3NCLENBWHJCLEdBTk0sU0FPSCxTQU5HLE1BT08sS0FVM0IsT0FoQkEsT0ExQndCLEFBSUgsQUFPRyxBQWtDSCxNQVpSLE9BZlcsSUFnQkcseUJBQ0osMkJBOUJ2QixBQXlDQSxTQTdDQSxBQVdlLGFBQ0YsQUFNSyxXQUxsQixLQU1BLG9DQWdCa0IsZ0JBQ2xCIiwiZmlsZSI6Ii9Vc2Vycy9tYW54L3Byb2plY3RzL2tleXdvcmQtZGVuc2l0eS9mcm9udGVuZC9jb21wb25lbnRzL21haW4vU2VhcmNoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBTcGlubmVyIGZyb20gXCIuL0xvYWRlclwiO1xuY29uc3QgQ29va2llcyA9IHJlcXVpcmUoXCJqcy1jb29raWVcIik7XG52YXIgQ3J5cHRvSlMgPSByZXF1aXJlKFwiY3J5cHRvLWpzXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZWFyY2goKSB7XG4gIGNvbnN0IFtrZXl3b3JkLCBlZGl0S2V5d29yZF0gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbdG9vTWFueSwgc2V0VG9vTWFueV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFt3b3JkVG9vTWFueSwgc2V0V29yZFRvb01hbnldID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFtpc0RhdGEsIHNldElzRGF0YV0gPSB1c2VTdGF0ZSgpO1xuXG4gIGFzeW5jIGZ1bmN0aW9uIHN1YigpIHtcbiAgICBzZXRUb29NYW55KGZhbHNlKTtcbiAgICBzZXRXb3JkVG9vTWFueShmYWxzZSk7XG4gICAgbGV0IGNvb2tpZUV4aXN0cyA9IGdldCgpO1xuICAgIGlmIChjb29raWVFeGlzdHMgPT0gZmFsc2UpIHtcbiAgICAgIGxldCBjaXBoZXJ0ZXh0ID0gQ3J5cHRvSlMuQUVTLmVuY3J5cHQoa2V5d29yZCwgXCIvL3NlY3IvayEhXCIpO1xuICAgICAgLy8gICBsZXQgY2lwaGVybnVtID0gQ3J5cHRvSlMuQUVTLmVuY3J5cHQoXCIxXCIsIFwiLy9zZWNyL2shIVwiKTtcbiAgICAgIC8vICAgQ29va2llcy5zZXQoXCJudW1cIiwgY2lwaGVybnVtLCB7IGV4cGlyZXM6IDAuMDIwODMzMzMzMzMgfSk7XG4gICAgICBDb29raWVzLnNldChcIndyZHNcIiwgY2lwaGVydGV4dCwgeyBleHBpcmVzOiAwLjAyMDgzMzMzMzMzIH0pO1xuICAgICAgY29uc29sZS5sb2coXCJmZXRjaGluZ1wiKTtcbiAgICAgIGxldCBmb3JtYXR0ZWRLdyA9IGtleXdvcmQucmVwbGFjZShcIiBcIiwgXCIrXCIpO1xuICAgICAgbGV0IGdldFN0ciA9IFwiaHR0cDovL2xvY2FsaG9zdDo0MDAwL2tleXdvcmQvXCIgKyBmb3JtYXR0ZWRLdztcbiAgICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgICBmZXRjaChnZXRTdHIpO1xuICAgICAgLy8gICBheGlvcy5nZXQoZ2V0U3RyKS50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgIC8vICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgICAvLyAgICAgc2V0SXNEYXRhKHRydWUpO1xuICAgICAgLy8gICAgIHNldERhdGEocmVzcG9uc2UuZGF0YSk7XG4gICAgICAvLyAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAvLyAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQga3dBcnJheSA9IGNvb2tpZUV4aXN0cy5zcGxpdChcIitcIik7XG4gICAgICBjb25zb2xlLmxvZyhrd0FycmF5KTtcbiAgICAgIGxldCBuZXdUZXh0ID0gY29va2llRXhpc3RzICsgXCIrXCIgKyBrZXl3b3JkO1xuICAgICAgbGV0IGNpcGhlcnRleHQgPSBDcnlwdG9KUy5BRVMuZW5jcnlwdChuZXdUZXh0LCBcIi8vc2Vjci9rISFcIik7XG4gICAgICBDb29raWVzLnNldChcIndyZHNcIiwgY2lwaGVydGV4dCwgeyBleHBpcmVzOiAwLjAyMDgzMzMzMzMzIH0pO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrd0FycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChrZXl3b3JkID09IGt3QXJyYXlbaV0pIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIndvcmQgZm91bmRcIik7XG4gICAgICAgICAgc2V0V29yZFRvb01hbnkodHJ1ZSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoa3dBcnJheS5sZW5ndGggPj0gNSkge1xuICAgICAgICBzZXRUb29NYW55KHRydWUpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICAvLyAgIGxldCBudW1Db29raWUgPSBnZXROdW1Db29raWUoKTtcbiAgICAgIC8vICAgbnVtQ29va2llID0gcGFyc2VJbnQobnVtQ29va2llKTtcbiAgICAgIC8vICAgaWYgKG51bUNvb2tpZSA9PSA1KSB7XG4gICAgICAvLyAgICAgc2V0VG9vTWFueSh0cnVlKTtcbiAgICAgIC8vICAgICByZXR1cm47XG4gICAgICAvLyAgIH1cbiAgICAgIC8vICAgbnVtQ29va2llICs9IDE7XG4gICAgICAvLyAgIGxldCBudW10ZXh0ID0gQ3J5cHRvSlMuQUVTLmVuY3J5cHQobnVtQ29va2llLnRvU3RyaW5nKCksIFwiLy9zZWNyL2shIVwiKTtcbiAgICAgIC8vICAgQ29va2llcy5zZXQoXCJudW1cIiwgbnVtdGV4dCwgeyBleHBpcmVzOiAwLjAyMDgzMzMzMzMzIH0pO1xuICAgICAgY29uc29sZS5sb2coXCJmb3VuZCBrd0FycmF5IGFuZCBmZXRjaGluZ1wiKTtcbiAgICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgICBsZXQgZm9ybWF0dGVkS3cgPSBrZXl3b3JkLnJlcGxhY2UoXCIgXCIsIFwiK1wiKTtcbiAgICAgIGxldCBnZXRTdHIgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6NDAwMC9rZXl3b3JkL1wiICsgZm9ybWF0dGVkS3c7XG4gICAgICBmZXRjaChnZXRTdHIpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGZldGNoKGdldFN0cikge1xuICAgIGF4aW9zLmdldChnZXRTdHIpLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgbGV0IGRlbnMgPSBwYXJzZUZsb2F0KHJlc3BvbnNlLmRhdGEuZGVuc2l0eSk7XG4gICAgICBkZW5zID0gZGVucy50b0ZpeGVkKDIpO1xuICAgICAgZGVucyA9IGRlbnMudG9TdHJpbmcoKTtcbiAgICAgIGxldCB3cmRzID0gcGFyc2VJbnQocmVzcG9uc2UuZGF0YS53b3Jkcyk7XG4gICAgICB3cmRzID0gd3Jkcy50b1N0cmluZygpO1xuICAgICAgbGV0IG5ld0RhdCA9IHt9O1xuICAgICAgbmV3RGF0W1wiZGVuc2l0eVwiXSA9IGRlbnM7XG4gICAgICBuZXdEYXRbXCJ3b3Jkc1wiXSA9IHdyZHM7XG4gICAgICBjb25zb2xlLmxvZyhuZXdEYXQpO1xuICAgICAgc2V0RGF0YShuZXdEYXQpO1xuICAgICAgc2V0SXNEYXRhKHRydWUpO1xuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgfSk7XG4gIH1cblxuICAvLyAgIGZ1bmN0aW9uIGdldE51bUNvb2tpZSgpIHtcbiAgLy8gICAgIGxldCBjb29rID0gQ29va2llcy5nZXQoXCJudW1cIik7XG4gIC8vICAgICBpZiAoY29vayA9PSB1bmRlZmluZWQpIHtcbiAgLy8gICAgICAgbGV0IG51bXRleHQgPSBDcnlwdG9KUy5BRVMuZW5jcnlwdChcIjFcIiwgXCIvL3NlY3IvayEhXCIpO1xuICAvLyAgICAgICBDb29raWVzLnNldChcIm51bVwiLCBudW10ZXh0LCB7IGV4cGlyZXM6IDAuMDIwODMzMzMzMzMgfSk7XG4gIC8vICAgICAgIHJldHVybiBcIjFcIjtcbiAgLy8gICAgIH1cbiAgLy8gICAgIHZhciBieXRlcyA9IENyeXB0b0pTLkFFUy5kZWNyeXB0KGNvb2sudG9TdHJpbmcoKSwgXCIvL3NlY3IvayEhXCIpO1xuICAvLyAgICAgdmFyIHBsYWludGV4dCA9IGJ5dGVzLnRvU3RyaW5nKENyeXB0b0pTLmVuYy5VdGY4KTtcbiAgLy8gICAgIGNvbnNvbGUubG9nKHBsYWludGV4dCk7XG4gIC8vICAgICByZXR1cm4gcGxhaW50ZXh0O1xuICAvLyAgIH1cblxuICBmdW5jdGlvbiBnZXQoKSB7XG4gICAgbGV0IHRleHQgPSBDb29raWVzLmdldChcIndyZHNcIik7XG4gICAgaWYgKHRleHQgPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBieXRlcyA9IENyeXB0b0pTLkFFUy5kZWNyeXB0KHRleHQudG9TdHJpbmcoKSwgXCIvL3NlY3IvayEhXCIpO1xuICAgICAgdmFyIHBsYWludGV4dCA9IGJ5dGVzLnRvU3RyaW5nKENyeXB0b0pTLmVuYy5VdGY4KTtcbiAgICAgIGNvbnNvbGUubG9nKHBsYWludGV4dCk7XG4gICAgICByZXR1cm4gcGxhaW50ZXh0O1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIGRlY3J5cHQodGV4dCkge1xuICAgIHZhciBieXRlcyA9IENyeXB0b0pTLkFFUy5kZWNyeXB0KHRleHQudG9TdHJpbmcoKSwgXCIvL3NlY3IvayEhXCIpO1xuICAgIHZhciBwbGFpbnRleHQgPSBieXRlcy50b1N0cmluZyhDcnlwdG9KUy5lbmMuVXRmOCk7XG4gICAgcmV0dXJuIHBsYWludGV4dDtcbiAgfVxuICBpZiAoIWxvYWRpbmcgJiYgIWlzRGF0YSkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm91dGVyLXNlYXJjaC13cmFwXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5uZXItc2VhcmNoLXdyYXBcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC10aXRsZVwiPlxuICAgICAgICAgICAgPHN0cm9uZz5lbnRlciB5b3VyIGtleXdvcmQ8L3N0cm9uZz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaGJhci13cmFwXCI+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwia2V5d29yZC1pbnB1dFwiXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gZWRpdEtleXdvcmQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwic2VhcmNoLWJ1dHRvblwiIG9uQ2xpY2s9e3N1Yn0+XG4gICAgICAgICAgICAgIEdldCBNZXRyaWNzXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgICAge2BcbiAgICAgICAgICAgICAgZGl2LmlubmVyLXNlYXJjaC13cmFwIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBkaXYub3V0ZXItc2VhcmNoLXdyYXAge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGRpdi5zZWFyY2gtdGl0bGUge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGJ1dHRvbi5zZWFyY2gtYnV0dG9uIHtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA4cHg7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlMjJiMmU7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMS41cHg7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuc2VhcmNoLWJ1dHRvbjpob3ZlciB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDEycHggNjBweCAwICNlMjJiMmU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZGl2LnNlYXJjaGJhci13cmFwIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaW5wdXQua2V5d29yZC1pbnB1dCB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfVxuICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfSBlbHNlIGlmICghIWxvYWRpbmcpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdXRlci1zZWFyY2gtd3JhcFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubmVyLXNlYXJjaC13cmFwXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2gtdGl0bGVcIj5cbiAgICAgICAgICAgIDxzdHJvbmc+XG4gICAgICAgICAgICAgIGZldGNoaW5nIGRhdGEgZm9yIHRvcCA1MCByZXN1bHRzLi4uXG4gICAgICAgICAgICAgIDxiciAvPiB0aGlzIGNvdWxkIHRha2UgYSBtaW51dGUuXG4gICAgICAgICAgICA8L3N0cm9uZz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWRpbmctd3JhcFwiPlxuICAgICAgICAgICAgPFNwaW5uZXIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgICAge2BcbiAgICAgICAgICAgICAgZGl2LmlubmVyLXNlYXJjaC13cmFwIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBkaXYub3V0ZXItc2VhcmNoLXdyYXAge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGRpdi5zZWFyY2gtdGl0bGUge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYnV0dG9uLnNlYXJjaC1idXR0b24ge1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDhweDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2UyMmIyZTtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxLjVweDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5zZWFyY2gtYnV0dG9uOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMTJweCA2MHB4IDAgI2UyMmIyZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBkaXYubG9hZGluZy13cmFwIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaW5wdXQua2V5d29yZC1pbnB1dCB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfVxuICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdXRlci1kYXRhLXdyYXBcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhdGEtc2VhcmNoLXdyYXBcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoLXRpdGxlXCI+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgcmVzdWx0cyBmb3IgPHN0cm9uZz57a2V5d29yZH08L3N0cm9uZz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGF0YS13cmFwXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGF0YS1yb3dcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhdGEtZGF0XCI+ZGVuc2l0eTwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGF0YS1kYXRcIj57ZGF0YS5kZW5zaXR5fTwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXRhLXJvd1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGF0YS1kYXRcIj5hdmcgd29yZGNvdW50PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXRhLWRhdFwiPntkYXRhLndvcmRzfTwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2gtYWdhaW4td3JhcFwiPlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInNlYXJjaC1idXR0b25cIj5zZWFyY2ggYWdhaW48L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICB7YFxuICAgICAgICAgICAgZGl2LmRhdGEtd3JhcCB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkaXYuZGF0YS1yb3cge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGl2LmRhdGEtZGF0IHtcbiAgICAgICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRpdi5kYXRhLXNlYXJjaC13cmFwIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAub3V0ZXItZGF0YS13cmFwIHtcbiAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgbWluLXdpZHRoOiAyNTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRpdi5zZWFyY2gtdGl0bGUge1xuICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnV0dG9uLnNlYXJjaC1idXR0b24ge1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDhweDtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTIyYjJlO1xuICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDEuNXB4O1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnNlYXJjaC1idXR0b246aG92ZXIge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAxMnB4IDYwcHggMCAjZTIyYjJlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGl2LmxvYWRpbmctd3JhcCB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpbnB1dC5rZXl3b3JkLWlucHV0IHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iXX0= */\n/*@ sourceURL=/Users/manx/projects/keyword-density/frontend/components/main/Search.js */"));
  }
}

/***/ })

})
//# sourceMappingURL=index.js.d99273dbf62441ff2e98.hot-update.js.map