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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Loader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Loader */ "./components/main/Loader.js");




var _jsxFileName = "/Users/manx/projects/keyword-density/frontend/components/main/Search.js";






var Cookies = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");

var CryptoJS = __webpack_require__(/*! crypto-js */ "./node_modules/crypto-js/index.js");

function Search() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState, 2),
      keyword = _useState2[0],
      editKeyword = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(false),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState3, 2),
      tooMany = _useState4[0],
      setTooMany = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(false),
      _useState6 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState5, 2),
      wordTooMany = _useState6[0],
      setWordTooMany = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(false),
      _useState8 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState7, 2),
      loading = _useState8[0],
      setLoading = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(),
      _useState10 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState9, 2),
      data = _useState10[0],
      setData = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(),
      _useState12 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState11, 2),
      isData = _useState12[0],
      setIsData = _useState12[1];

  function sub() {
    return _sub.apply(this, arguments);
  }

  function _sub() {
    _sub = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var cookieExists, ciphertext, ciphernum, formattedKw, getStr, kwArray, newText, _ciphertext, i, numCookie, numtext, _formattedKw, _getStr;

      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setTooMany(false);
              setWordTooMany(false);
              cookieExists = get();

              if (!(cookieExists == false)) {
                _context.next = 15;
                break;
              }

              ciphertext = CryptoJS.AES.encrypt(keyword, "//secr/k!!");
              ciphernum = CryptoJS.AES.encrypt("1", "//secr/k!!");
              Cookies.set("num", ciphernum, {
                expires: 0.02083333333
              });
              Cookies.set("wrds", ciphertext, {
                expires: 0.02083333333
              });
              console.log("fetching");
              formattedKw = keyword.replace(" ", "+");
              getStr = "http://localhost:4000/keyword/" + formattedKw;
              setLoading(true);
              axios__WEBPACK_IMPORTED_MODULE_6___default.a.get(getStr).then(function (response) {
                console.log(response);
                setIsData(true);
                setData(response.data);
                setLoading(false);
              });
              _context.next = 42;
              break;

            case 15:
              kwArray = cookieExists.split("+");
              console.log(kwArray);
              newText = cookieExists + "+" + keyword;
              _ciphertext = CryptoJS.AES.encrypt(newText, "//secr/k!!");
              Cookies.set("wrds", _ciphertext, {
                expires: 0.02083333333
              });
              i = 0;

            case 21:
              if (!(i < kwArray.length)) {
                _context.next = 29;
                break;
              }

              if (!(keyword == kwArray[i])) {
                _context.next = 26;
                break;
              }

              console.log("word found");
              setWordTooMany(true);
              return _context.abrupt("return");

            case 26:
              i++;
              _context.next = 21;
              break;

            case 29:
              numCookie = getNumCookie();
              numCookie = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1___default()(numCookie);

              if (!(numCookie == 5)) {
                _context.next = 34;
                break;
              }

              setTooMany(true);
              return _context.abrupt("return");

            case 34:
              numCookie += 1;
              numtext = CryptoJS.AES.encrypt(numCookie.toString(), "//secr/k!!");
              Cookies.set("num", numtext, {
                expires: 0.02083333333
              });
              console.log("found kwArray and fetching");
              setLoading(true);
              _formattedKw = keyword.replace(" ", "+");
              _getStr = "http://localhost:4000/keyword/" + _formattedKw;
              axios__WEBPACK_IMPORTED_MODULE_6___default.a.get(_getStr).then(function (response) {
                setIsData(true);
                setData(response.data);
                setLoading(false);
                console.log(response);
              });

            case 42:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _sub.apply(this, arguments);
  }

  function getNumCookie() {
    var cook = Cookies.get("num");

    if (cook == undefined) {
      var numtext = CryptoJS.AES.encrypt("1", "//secr/k!!");
      Cookies.set("num", numtext, {
        expires: 0.02083333333
      });
      return "1";
    }

    var bytes = CryptoJS.AES.decrypt(cook.toString(), "//secr/k!!");
    var plaintext = bytes.toString(CryptoJS.enc.Utf8);
    console.log(plaintext);
    return plaintext;
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
    _decrypt = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
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
    return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
      className: "outer-search-wrap",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
      className: "jsx-883005859" + " " + "inner-search-wrap",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
      className: "jsx-883005859" + " " + "search-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("strong", {
      className: "jsx-883005859",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104
      },
      __self: this
    }, "enter your keyword")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
      className: "jsx-883005859" + " " + "searchbar-wrap",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
      type: "text",
      onChange: function onChange(e) {
        return editKeyword(e.target.value);
      },
      className: "jsx-883005859" + " " + "keyword-input",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button", {
      onClick: sub,
      className: "jsx-883005859" + " " + "search-button",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112
      },
      __self: this
    }, "Get Metrics")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default.a, {
      id: "883005859",
      __self: this
    }, "div.inner-search-wrap.jsx-883005859{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding:15px;}div.outer-search-wrap.jsx-883005859{padding:10px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}div.search-title.jsx-883005859{margin:auto;margin-bottom:10px;}button.search-button.jsx-883005859{border-radius:0;border:none;padding:8px;font-size:10px;background-color:#e22b2e;color:#fff;text-transform:uppercase;-webkit-letter-spacing:1.5px;-moz-letter-spacing:1.5px;-ms-letter-spacing:1.5px;letter-spacing:1.5px;font-weight:700;}.search-button.jsx-883005859:hover{background:#fff;color:#000;box-shadow:0 12px 60px 0 #e22b2e;}div.searchbar-wrap.jsx-883005859{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;}input.keyword-input.jsx-883005859{font-size:13px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYW54L3Byb2plY3RzL2tleXdvcmQtZGVuc2l0eS9mcm9udGVuZC9jb21wb25lbnRzL21haW4vU2VhcmNoLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9IYSxBQUc4QixBQUtBLEFBS0QsQUFJSSxBQVdBLEFBS0gsQUFJRSxZQXZCSSxDQUxOLEVBNkJmLENBcEJjLEFBV0QsV0FDc0IsQ0FYckIsR0FKZCxTQUtpQixlQUNVLEtBVTNCLGNBM0J3QixBQThCSCxNQVpSLE9BWlcsSUFhRyx5QkFDSiwyQkFXdkIsU0E5QmUsYUFDZixBQUtBLG9EQWNrQixnQkFDbEIiLCJmaWxlIjoiL1VzZXJzL21hbngvcHJvamVjdHMva2V5d29yZC1kZW5zaXR5L2Zyb250ZW5kL2NvbXBvbmVudHMvbWFpbi9TZWFyY2guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IFNwaW5uZXIgZnJvbSBcIi4vTG9hZGVyXCI7XG5jb25zdCBDb29raWVzID0gcmVxdWlyZShcImpzLWNvb2tpZVwiKTtcbnZhciBDcnlwdG9KUyA9IHJlcXVpcmUoXCJjcnlwdG8tanNcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNlYXJjaCgpIHtcbiAgY29uc3QgW2tleXdvcmQsIGVkaXRLZXl3b3JkXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFt0b29NYW55LCBzZXRUb29NYW55XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3dvcmRUb29NYW55LCBzZXRXb3JkVG9vTWFueV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgW2lzRGF0YSwgc2V0SXNEYXRhXSA9IHVzZVN0YXRlKCk7XG5cbiAgYXN5bmMgZnVuY3Rpb24gc3ViKCkge1xuICAgIHNldFRvb01hbnkoZmFsc2UpO1xuICAgIHNldFdvcmRUb29NYW55KGZhbHNlKTtcbiAgICBsZXQgY29va2llRXhpc3RzID0gZ2V0KCk7XG4gICAgaWYgKGNvb2tpZUV4aXN0cyA9PSBmYWxzZSkge1xuICAgICAgbGV0IGNpcGhlcnRleHQgPSBDcnlwdG9KUy5BRVMuZW5jcnlwdChrZXl3b3JkLCBcIi8vc2Vjci9rISFcIik7XG4gICAgICBsZXQgY2lwaGVybnVtID0gQ3J5cHRvSlMuQUVTLmVuY3J5cHQoXCIxXCIsIFwiLy9zZWNyL2shIVwiKTtcbiAgICAgIENvb2tpZXMuc2V0KFwibnVtXCIsIGNpcGhlcm51bSwgeyBleHBpcmVzOiAwLjAyMDgzMzMzMzMzIH0pO1xuICAgICAgQ29va2llcy5zZXQoXCJ3cmRzXCIsIGNpcGhlcnRleHQsIHsgZXhwaXJlczogMC4wMjA4MzMzMzMzMyB9KTtcbiAgICAgIGNvbnNvbGUubG9nKFwiZmV0Y2hpbmdcIik7XG4gICAgICBsZXQgZm9ybWF0dGVkS3cgPSBrZXl3b3JkLnJlcGxhY2UoXCIgXCIsIFwiK1wiKTtcbiAgICAgIGxldCBnZXRTdHIgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6NDAwMC9rZXl3b3JkL1wiICsgZm9ybWF0dGVkS3c7XG4gICAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgICAgYXhpb3MuZ2V0KGdldFN0cikudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICAgICAgc2V0SXNEYXRhKHRydWUpO1xuICAgICAgICBzZXREYXRhKHJlc3BvbnNlLmRhdGEpO1xuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQga3dBcnJheSA9IGNvb2tpZUV4aXN0cy5zcGxpdChcIitcIik7XG4gICAgICBjb25zb2xlLmxvZyhrd0FycmF5KTtcbiAgICAgIGxldCBuZXdUZXh0ID0gY29va2llRXhpc3RzICsgXCIrXCIgKyBrZXl3b3JkO1xuICAgICAgbGV0IGNpcGhlcnRleHQgPSBDcnlwdG9KUy5BRVMuZW5jcnlwdChuZXdUZXh0LCBcIi8vc2Vjci9rISFcIik7XG4gICAgICBDb29raWVzLnNldChcIndyZHNcIiwgY2lwaGVydGV4dCwgeyBleHBpcmVzOiAwLjAyMDgzMzMzMzMzIH0pO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrd0FycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChrZXl3b3JkID09IGt3QXJyYXlbaV0pIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIndvcmQgZm91bmRcIik7XG4gICAgICAgICAgc2V0V29yZFRvb01hbnkodHJ1ZSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsZXQgbnVtQ29va2llID0gZ2V0TnVtQ29va2llKCk7XG4gICAgICBudW1Db29raWUgPSBwYXJzZUludChudW1Db29raWUpO1xuICAgICAgaWYgKG51bUNvb2tpZSA9PSA1KSB7XG4gICAgICAgIHNldFRvb01hbnkodHJ1ZSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIG51bUNvb2tpZSArPSAxO1xuICAgICAgbGV0IG51bXRleHQgPSBDcnlwdG9KUy5BRVMuZW5jcnlwdChudW1Db29raWUudG9TdHJpbmcoKSwgXCIvL3NlY3IvayEhXCIpO1xuICAgICAgQ29va2llcy5zZXQoXCJudW1cIiwgbnVtdGV4dCwgeyBleHBpcmVzOiAwLjAyMDgzMzMzMzMzIH0pO1xuICAgICAgY29uc29sZS5sb2coXCJmb3VuZCBrd0FycmF5IGFuZCBmZXRjaGluZ1wiKTtcbiAgICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgICBsZXQgZm9ybWF0dGVkS3cgPSBrZXl3b3JkLnJlcGxhY2UoXCIgXCIsIFwiK1wiKTtcbiAgICAgIGxldCBnZXRTdHIgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6NDAwMC9rZXl3b3JkL1wiICsgZm9ybWF0dGVkS3c7XG4gICAgICBheGlvcy5nZXQoZ2V0U3RyKS50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgc2V0SXNEYXRhKHRydWUpO1xuICAgICAgICBzZXREYXRhKHJlc3BvbnNlLmRhdGEpO1xuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0TnVtQ29va2llKCkge1xuICAgIGxldCBjb29rID0gQ29va2llcy5nZXQoXCJudW1cIik7XG4gICAgaWYgKGNvb2sgPT0gdW5kZWZpbmVkKSB7XG4gICAgICBsZXQgbnVtdGV4dCA9IENyeXB0b0pTLkFFUy5lbmNyeXB0KFwiMVwiLCBcIi8vc2Vjci9rISFcIik7XG4gICAgICBDb29raWVzLnNldChcIm51bVwiLCBudW10ZXh0LCB7IGV4cGlyZXM6IDAuMDIwODMzMzMzMzMgfSk7XG4gICAgICByZXR1cm4gXCIxXCI7XG4gICAgfVxuICAgIHZhciBieXRlcyA9IENyeXB0b0pTLkFFUy5kZWNyeXB0KGNvb2sudG9TdHJpbmcoKSwgXCIvL3NlY3IvayEhXCIpO1xuICAgIHZhciBwbGFpbnRleHQgPSBieXRlcy50b1N0cmluZyhDcnlwdG9KUy5lbmMuVXRmOCk7XG4gICAgY29uc29sZS5sb2cocGxhaW50ZXh0KTtcbiAgICByZXR1cm4gcGxhaW50ZXh0O1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0KCkge1xuICAgIGxldCB0ZXh0ID0gQ29va2llcy5nZXQoXCJ3cmRzXCIpO1xuICAgIGlmICh0ZXh0ID09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgYnl0ZXMgPSBDcnlwdG9KUy5BRVMuZGVjcnlwdCh0ZXh0LnRvU3RyaW5nKCksIFwiLy9zZWNyL2shIVwiKTtcbiAgICAgIHZhciBwbGFpbnRleHQgPSBieXRlcy50b1N0cmluZyhDcnlwdG9KUy5lbmMuVXRmOCk7XG4gICAgICBjb25zb2xlLmxvZyhwbGFpbnRleHQpO1xuICAgICAgcmV0dXJuIHBsYWludGV4dDtcbiAgICB9XG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiBkZWNyeXB0KHRleHQpIHtcbiAgICB2YXIgYnl0ZXMgPSBDcnlwdG9KUy5BRVMuZGVjcnlwdCh0ZXh0LnRvU3RyaW5nKCksIFwiLy9zZWNyL2shIVwiKTtcbiAgICB2YXIgcGxhaW50ZXh0ID0gYnl0ZXMudG9TdHJpbmcoQ3J5cHRvSlMuZW5jLlV0ZjgpO1xuICAgIHJldHVybiBwbGFpbnRleHQ7XG4gIH1cbiAgaWYgKCFsb2FkaW5nICYmICFpc0RhdGEpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdXRlci1zZWFyY2gtd3JhcFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubmVyLXNlYXJjaC13cmFwXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2gtdGl0bGVcIj5cbiAgICAgICAgICAgIDxzdHJvbmc+ZW50ZXIgeW91ciBrZXl3b3JkPC9zdHJvbmc+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2hiYXItd3JhcFwiPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImtleXdvcmQtaW5wdXRcIlxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IGVkaXRLZXl3b3JkKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInNlYXJjaC1idXR0b25cIiBvbkNsaWNrPXtzdWJ9PlxuICAgICAgICAgICAgICBHZXQgTWV0cmljc1xuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICAgIHtgXG4gICAgICAgICAgICAgIGRpdi5pbm5lci1zZWFyY2gtd3JhcCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZGl2Lm91dGVyLXNlYXJjaC13cmFwIHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBkaXYuc2VhcmNoLXRpdGxlIHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBidXR0b24uc2VhcmNoLWJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogOHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTIyYjJlO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDEuNXB4O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLnNlYXJjaC1idXR0b246aG92ZXIge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgICAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAxMnB4IDYwcHggMCAjZTIyYjJlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGRpdi5zZWFyY2hiYXItd3JhcCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlucHV0LmtleXdvcmQtaW5wdXQge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH1cbiAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH0gZWxzZSBpZiAoISFsb2FkaW5nKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3V0ZXItc2VhcmNoLXdyYXBcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbm5lci1zZWFyY2gtd3JhcFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoLXRpdGxlXCI+XG4gICAgICAgICAgICA8c3Ryb25nPlxuICAgICAgICAgICAgICBmZXRjaGluZyBkYXRhIGZvciB0b3AgNTAgcmVzdWx0cy4uLlxuICAgICAgICAgICAgICA8YnIgLz4gdGhpcyBjb3VsZCB0YWtlIGEgbWludXRlLlxuICAgICAgICAgICAgPC9zdHJvbmc+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkaW5nLXdyYXBcIj5cbiAgICAgICAgICAgIDxTcGlubmVyIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICAgIHtgXG4gICAgICAgICAgICAgIGRpdi5pbm5lci1zZWFyY2gtd3JhcCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZGl2Lm91dGVyLXNlYXJjaC13cmFwIHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBkaXYuc2VhcmNoLXRpdGxlIHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGJ1dHRvbi5zZWFyY2gtYnV0dG9uIHtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA4cHg7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlMjJiMmU7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMS41cHg7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuc2VhcmNoLWJ1dHRvbjpob3ZlciB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDEycHggNjBweCAwICNlMjJiMmU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZGl2LmxvYWRpbmctd3JhcCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlucHV0LmtleXdvcmQtaW5wdXQge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH1cbiAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH0gZWxzZSBpZiAoIWxvYWRpbmcgJiYgISFpc0RhdGEpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdXRlci1zZWFyY2gtd3JhcFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubmVyLXNlYXJjaC13cmFwXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2gtdGl0bGVcIj5cbiAgICAgICAgICAgIDxzdHJvbmc+XG4gICAgICAgICAgICAgIGZldGNoaW5nIGRhdGEgZm9yIHRvcCA1MCByZXN1bHRzLi4uXG4gICAgICAgICAgICAgIDxiciAvPiB0aGlzIGNvdWxkIHRha2UgYSBtaW51dGVcbiAgICAgICAgICAgIDwvc3Ryb25nPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9hZGluZy13cmFwXCI+XG4gICAgICAgICAgICA8ZGl2PmdvdCBkYXRhPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICAgIHtgXG4gICAgICAgICAgICAgIGRpdi5pbm5lci1zZWFyY2gtd3JhcCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZGl2Lm91dGVyLXNlYXJjaC13cmFwIHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBkaXYuc2VhcmNoLXRpdGxlIHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGJ1dHRvbi5zZWFyY2gtYnV0dG9uIHtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA4cHg7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlMjJiMmU7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMS41cHg7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuc2VhcmNoLWJ1dHRvbjpob3ZlciB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDEycHggNjBweCAwICNlMjJiMmU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZGl2LmxvYWRpbmctd3JhcCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlucHV0LmtleXdvcmQtaW5wdXQge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH1cbiAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiJdfQ== */\n/*@ sourceURL=/Users/manx/projects/keyword-density/frontend/components/main/Search.js */")));
  } else if (!!loading) {
    return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
      className: "outer-search-wrap",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
      className: "jsx-3598683652" + " " + "inner-search-wrap",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 163
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
      className: "jsx-3598683652" + " " + "search-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 164
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("strong", {
      className: "jsx-3598683652",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 165
      },
      __self: this
    }, "fetching data for top 50 results...", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
      className: "jsx-3598683652",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167
      },
      __self: this
    }), " this could take a minute.")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
      className: "jsx-3598683652" + " " + "loading-wrap",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 170
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Loader__WEBPACK_IMPORTED_MODULE_7__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 171
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default.a, {
      id: "3598683652",
      __self: this
    }, "div.inner-search-wrap.jsx-3598683652{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding:15px;}div.outer-search-wrap.jsx-3598683652{padding:10px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}div.search-title.jsx-3598683652{margin:auto;margin-bottom:10px;text-align:center;margin-bottom:5px;}button.search-button.jsx-3598683652{border-radius:0;border:none;padding:8px;font-size:10px;background-color:#e22b2e;color:#fff;text-transform:uppercase;-webkit-letter-spacing:1.5px;-moz-letter-spacing:1.5px;-ms-letter-spacing:1.5px;letter-spacing:1.5px;font-weight:700;}.search-button.jsx-3598683652:hover{background:#fff;color:#000;box-shadow:0 12px 60px 0 #e22b2e;}div.loading-wrap.jsx-3598683652{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;}input.keyword-input.jsx-3598683652{font-size:13px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYW54L3Byb2plY3RzL2tleXdvcmQtZGVuc2l0eS9mcm9udGVuZC9jb21wb25lbnRzL21haW4vU2VhcmNoLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZLYSxBQUc4QixBQUtBLEFBS0QsQUFNSSxBQVdBLEFBS0gsQUFJRSxZQXpCSSxDQUxOLEVBK0JmLENBcEJjLEFBV0QsV0FDc0IsQ0FYckIsR0FOTSxTQU9ILFNBTkcsTUFPTyxLQVUzQixPQWhCQSxPQWJ3QixBQWdDSCxNQVpSLE9BZFcsSUFlRyx5QkFDSiwyQkFXdkIsU0FoQ2UsYUFDZixBQUtBLG9EQWdCa0IsZ0JBQ2xCIiwiZmlsZSI6Ii9Vc2Vycy9tYW54L3Byb2plY3RzL2tleXdvcmQtZGVuc2l0eS9mcm9udGVuZC9jb21wb25lbnRzL21haW4vU2VhcmNoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBTcGlubmVyIGZyb20gXCIuL0xvYWRlclwiO1xuY29uc3QgQ29va2llcyA9IHJlcXVpcmUoXCJqcy1jb29raWVcIik7XG52YXIgQ3J5cHRvSlMgPSByZXF1aXJlKFwiY3J5cHRvLWpzXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZWFyY2goKSB7XG4gIGNvbnN0IFtrZXl3b3JkLCBlZGl0S2V5d29yZF0gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbdG9vTWFueSwgc2V0VG9vTWFueV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFt3b3JkVG9vTWFueSwgc2V0V29yZFRvb01hbnldID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFtpc0RhdGEsIHNldElzRGF0YV0gPSB1c2VTdGF0ZSgpO1xuXG4gIGFzeW5jIGZ1bmN0aW9uIHN1YigpIHtcbiAgICBzZXRUb29NYW55KGZhbHNlKTtcbiAgICBzZXRXb3JkVG9vTWFueShmYWxzZSk7XG4gICAgbGV0IGNvb2tpZUV4aXN0cyA9IGdldCgpO1xuICAgIGlmIChjb29raWVFeGlzdHMgPT0gZmFsc2UpIHtcbiAgICAgIGxldCBjaXBoZXJ0ZXh0ID0gQ3J5cHRvSlMuQUVTLmVuY3J5cHQoa2V5d29yZCwgXCIvL3NlY3IvayEhXCIpO1xuICAgICAgbGV0IGNpcGhlcm51bSA9IENyeXB0b0pTLkFFUy5lbmNyeXB0KFwiMVwiLCBcIi8vc2Vjci9rISFcIik7XG4gICAgICBDb29raWVzLnNldChcIm51bVwiLCBjaXBoZXJudW0sIHsgZXhwaXJlczogMC4wMjA4MzMzMzMzMyB9KTtcbiAgICAgIENvb2tpZXMuc2V0KFwid3Jkc1wiLCBjaXBoZXJ0ZXh0LCB7IGV4cGlyZXM6IDAuMDIwODMzMzMzMzMgfSk7XG4gICAgICBjb25zb2xlLmxvZyhcImZldGNoaW5nXCIpO1xuICAgICAgbGV0IGZvcm1hdHRlZEt3ID0ga2V5d29yZC5yZXBsYWNlKFwiIFwiLCBcIitcIik7XG4gICAgICBsZXQgZ2V0U3RyID0gXCJodHRwOi8vbG9jYWxob3N0OjQwMDAva2V5d29yZC9cIiArIGZvcm1hdHRlZEt3O1xuICAgICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICAgIGF4aW9zLmdldChnZXRTdHIpLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgICAgIHNldElzRGF0YSh0cnVlKTtcbiAgICAgICAgc2V0RGF0YShyZXNwb25zZS5kYXRhKTtcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IGt3QXJyYXkgPSBjb29raWVFeGlzdHMuc3BsaXQoXCIrXCIpO1xuICAgICAgY29uc29sZS5sb2coa3dBcnJheSk7XG4gICAgICBsZXQgbmV3VGV4dCA9IGNvb2tpZUV4aXN0cyArIFwiK1wiICsga2V5d29yZDtcbiAgICAgIGxldCBjaXBoZXJ0ZXh0ID0gQ3J5cHRvSlMuQUVTLmVuY3J5cHQobmV3VGV4dCwgXCIvL3NlY3IvayEhXCIpO1xuICAgICAgQ29va2llcy5zZXQoXCJ3cmRzXCIsIGNpcGhlcnRleHQsIHsgZXhwaXJlczogMC4wMjA4MzMzMzMzMyB9KTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwga3dBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoa2V5d29yZCA9PSBrd0FycmF5W2ldKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJ3b3JkIGZvdW5kXCIpO1xuICAgICAgICAgIHNldFdvcmRUb29NYW55KHRydWUpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGV0IG51bUNvb2tpZSA9IGdldE51bUNvb2tpZSgpO1xuICAgICAgbnVtQ29va2llID0gcGFyc2VJbnQobnVtQ29va2llKTtcbiAgICAgIGlmIChudW1Db29raWUgPT0gNSkge1xuICAgICAgICBzZXRUb29NYW55KHRydWUpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBudW1Db29raWUgKz0gMTtcbiAgICAgIGxldCBudW10ZXh0ID0gQ3J5cHRvSlMuQUVTLmVuY3J5cHQobnVtQ29va2llLnRvU3RyaW5nKCksIFwiLy9zZWNyL2shIVwiKTtcbiAgICAgIENvb2tpZXMuc2V0KFwibnVtXCIsIG51bXRleHQsIHsgZXhwaXJlczogMC4wMjA4MzMzMzMzMyB9KTtcbiAgICAgIGNvbnNvbGUubG9nKFwiZm91bmQga3dBcnJheSBhbmQgZmV0Y2hpbmdcIik7XG4gICAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgICAgbGV0IGZvcm1hdHRlZEt3ID0ga2V5d29yZC5yZXBsYWNlKFwiIFwiLCBcIitcIik7XG4gICAgICBsZXQgZ2V0U3RyID0gXCJodHRwOi8vbG9jYWxob3N0OjQwMDAva2V5d29yZC9cIiArIGZvcm1hdHRlZEt3O1xuICAgICAgYXhpb3MuZ2V0KGdldFN0cikudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgIHNldElzRGF0YSh0cnVlKTtcbiAgICAgICAgc2V0RGF0YShyZXNwb25zZS5kYXRhKTtcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGdldE51bUNvb2tpZSgpIHtcbiAgICBsZXQgY29vayA9IENvb2tpZXMuZ2V0KFwibnVtXCIpO1xuICAgIGlmIChjb29rID09IHVuZGVmaW5lZCkge1xuICAgICAgbGV0IG51bXRleHQgPSBDcnlwdG9KUy5BRVMuZW5jcnlwdChcIjFcIiwgXCIvL3NlY3IvayEhXCIpO1xuICAgICAgQ29va2llcy5zZXQoXCJudW1cIiwgbnVtdGV4dCwgeyBleHBpcmVzOiAwLjAyMDgzMzMzMzMzIH0pO1xuICAgICAgcmV0dXJuIFwiMVwiO1xuICAgIH1cbiAgICB2YXIgYnl0ZXMgPSBDcnlwdG9KUy5BRVMuZGVjcnlwdChjb29rLnRvU3RyaW5nKCksIFwiLy9zZWNyL2shIVwiKTtcbiAgICB2YXIgcGxhaW50ZXh0ID0gYnl0ZXMudG9TdHJpbmcoQ3J5cHRvSlMuZW5jLlV0ZjgpO1xuICAgIGNvbnNvbGUubG9nKHBsYWludGV4dCk7XG4gICAgcmV0dXJuIHBsYWludGV4dDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldCgpIHtcbiAgICBsZXQgdGV4dCA9IENvb2tpZXMuZ2V0KFwid3Jkc1wiKTtcbiAgICBpZiAodGV4dCA9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGJ5dGVzID0gQ3J5cHRvSlMuQUVTLmRlY3J5cHQodGV4dC50b1N0cmluZygpLCBcIi8vc2Vjci9rISFcIik7XG4gICAgICB2YXIgcGxhaW50ZXh0ID0gYnl0ZXMudG9TdHJpbmcoQ3J5cHRvSlMuZW5jLlV0ZjgpO1xuICAgICAgY29uc29sZS5sb2cocGxhaW50ZXh0KTtcbiAgICAgIHJldHVybiBwbGFpbnRleHQ7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gZGVjcnlwdCh0ZXh0KSB7XG4gICAgdmFyIGJ5dGVzID0gQ3J5cHRvSlMuQUVTLmRlY3J5cHQodGV4dC50b1N0cmluZygpLCBcIi8vc2Vjci9rISFcIik7XG4gICAgdmFyIHBsYWludGV4dCA9IGJ5dGVzLnRvU3RyaW5nKENyeXB0b0pTLmVuYy5VdGY4KTtcbiAgICByZXR1cm4gcGxhaW50ZXh0O1xuICB9XG4gIGlmICghbG9hZGluZyAmJiAhaXNEYXRhKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3V0ZXItc2VhcmNoLXdyYXBcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbm5lci1zZWFyY2gtd3JhcFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoLXRpdGxlXCI+XG4gICAgICAgICAgICA8c3Ryb25nPmVudGVyIHlvdXIga2V5d29yZDwvc3Ryb25nPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoYmFyLXdyYXBcIj5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJrZXl3b3JkLWlucHV0XCJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBlZGl0S2V5d29yZChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJzZWFyY2gtYnV0dG9uXCIgb25DbGljaz17c3VifT5cbiAgICAgICAgICAgICAgR2V0IE1ldHJpY3NcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgICB7YFxuICAgICAgICAgICAgICBkaXYuaW5uZXItc2VhcmNoLXdyYXAge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGRpdi5vdXRlci1zZWFyY2gtd3JhcCB7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZGl2LnNlYXJjaC10aXRsZSB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYnV0dG9uLnNlYXJjaC1idXR0b24ge1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDhweDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2UyMmIyZTtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxLjVweDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5zZWFyY2gtYnV0dG9uOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMTJweCA2MHB4IDAgI2UyMmIyZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBkaXYuc2VhcmNoYmFyLXdyYXAge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpbnB1dC5rZXl3b3JkLWlucHV0IHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9XG4gICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9IGVsc2UgaWYgKCEhbG9hZGluZykge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm91dGVyLXNlYXJjaC13cmFwXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5uZXItc2VhcmNoLXdyYXBcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC10aXRsZVwiPlxuICAgICAgICAgICAgPHN0cm9uZz5cbiAgICAgICAgICAgICAgZmV0Y2hpbmcgZGF0YSBmb3IgdG9wIDUwIHJlc3VsdHMuLi5cbiAgICAgICAgICAgICAgPGJyIC8+IHRoaXMgY291bGQgdGFrZSBhIG1pbnV0ZS5cbiAgICAgICAgICAgIDwvc3Ryb25nPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9hZGluZy13cmFwXCI+XG4gICAgICAgICAgICA8U3Bpbm5lciAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgICB7YFxuICAgICAgICAgICAgICBkaXYuaW5uZXItc2VhcmNoLXdyYXAge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGRpdi5vdXRlci1zZWFyY2gtd3JhcCB7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZGl2LnNlYXJjaC10aXRsZSB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBidXR0b24uc2VhcmNoLWJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogOHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTIyYjJlO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDEuNXB4O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLnNlYXJjaC1idXR0b246aG92ZXIge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgICAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAxMnB4IDYwcHggMCAjZTIyYjJlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGRpdi5sb2FkaW5nLXdyYXAge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpbnB1dC5rZXl3b3JkLWlucHV0IHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9XG4gICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9IGVsc2UgaWYgKCFsb2FkaW5nICYmICEhaXNEYXRhKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3V0ZXItc2VhcmNoLXdyYXBcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbm5lci1zZWFyY2gtd3JhcFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoLXRpdGxlXCI+XG4gICAgICAgICAgICA8c3Ryb25nPlxuICAgICAgICAgICAgICBmZXRjaGluZyBkYXRhIGZvciB0b3AgNTAgcmVzdWx0cy4uLlxuICAgICAgICAgICAgICA8YnIgLz4gdGhpcyBjb3VsZCB0YWtlIGEgbWludXRlXG4gICAgICAgICAgICA8L3N0cm9uZz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWRpbmctd3JhcFwiPlxuICAgICAgICAgICAgPGRpdj5nb3QgZGF0YTwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgICB7YFxuICAgICAgICAgICAgICBkaXYuaW5uZXItc2VhcmNoLXdyYXAge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGRpdi5vdXRlci1zZWFyY2gtd3JhcCB7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZGl2LnNlYXJjaC10aXRsZSB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBidXR0b24uc2VhcmNoLWJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogOHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTIyYjJlO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDEuNXB4O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLnNlYXJjaC1idXR0b246aG92ZXIge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgICAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAxMnB4IDYwcHggMCAjZTIyYjJlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGRpdi5sb2FkaW5nLXdyYXAge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpbnB1dC5rZXl3b3JkLWlucHV0IHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9XG4gICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iXX0= */\n/*@ sourceURL=/Users/manx/projects/keyword-density/frontend/components/main/Search.js */")));
  } else if (!loading && !!isData) {
    return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
      className: "outer-search-wrap",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 221
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
      className: "jsx-3598683652" + " " + "inner-search-wrap",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 222
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
      className: "jsx-3598683652" + " " + "search-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 223
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("strong", {
      className: "jsx-3598683652",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 224
      },
      __self: this
    }, "fetching data for top 50 results...", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
      className: "jsx-3598683652",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 226
      },
      __self: this
    }), " this could take a minute")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
      className: "jsx-3598683652" + " " + "loading-wrap",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 229
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
      className: "jsx-3598683652",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 230
      },
      __self: this
    }, "got data")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default.a, {
      id: "3598683652",
      __self: this
    }, "div.inner-search-wrap.jsx-3598683652{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding:15px;}div.outer-search-wrap.jsx-3598683652{padding:10px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}div.search-title.jsx-3598683652{margin:auto;margin-bottom:10px;text-align:center;margin-bottom:5px;}button.search-button.jsx-3598683652{border-radius:0;border:none;padding:8px;font-size:10px;background-color:#e22b2e;color:#fff;text-transform:uppercase;-webkit-letter-spacing:1.5px;-moz-letter-spacing:1.5px;-ms-letter-spacing:1.5px;letter-spacing:1.5px;font-weight:700;}.search-button.jsx-3598683652:hover{background:#fff;color:#000;box-shadow:0 12px 60px 0 #e22b2e;}div.loading-wrap.jsx-3598683652{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;}input.keyword-input.jsx-3598683652{font-size:13px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYW54L3Byb2plY3RzL2tleXdvcmQtZGVuc2l0eS9mcm9udGVuZC9jb21wb25lbnRzL21haW4vU2VhcmNoLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdPYSxBQUc4QixBQUtBLEFBS0QsQUFNSSxBQVdBLEFBS0gsQUFJRSxZQXpCSSxDQUxOLEVBK0JmLENBcEJjLEFBV0QsV0FDc0IsQ0FYckIsR0FOTSxTQU9ILFNBTkcsTUFPTyxLQVUzQixPQWhCQSxPQWJ3QixBQWdDSCxNQVpSLE9BZFcsSUFlRyx5QkFDSiwyQkFXdkIsU0FoQ2UsYUFDZixBQUtBLG9EQWdCa0IsZ0JBQ2xCIiwiZmlsZSI6Ii9Vc2Vycy9tYW54L3Byb2plY3RzL2tleXdvcmQtZGVuc2l0eS9mcm9udGVuZC9jb21wb25lbnRzL21haW4vU2VhcmNoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBTcGlubmVyIGZyb20gXCIuL0xvYWRlclwiO1xuY29uc3QgQ29va2llcyA9IHJlcXVpcmUoXCJqcy1jb29raWVcIik7XG52YXIgQ3J5cHRvSlMgPSByZXF1aXJlKFwiY3J5cHRvLWpzXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZWFyY2goKSB7XG4gIGNvbnN0IFtrZXl3b3JkLCBlZGl0S2V5d29yZF0gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbdG9vTWFueSwgc2V0VG9vTWFueV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFt3b3JkVG9vTWFueSwgc2V0V29yZFRvb01hbnldID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFtpc0RhdGEsIHNldElzRGF0YV0gPSB1c2VTdGF0ZSgpO1xuXG4gIGFzeW5jIGZ1bmN0aW9uIHN1YigpIHtcbiAgICBzZXRUb29NYW55KGZhbHNlKTtcbiAgICBzZXRXb3JkVG9vTWFueShmYWxzZSk7XG4gICAgbGV0IGNvb2tpZUV4aXN0cyA9IGdldCgpO1xuICAgIGlmIChjb29raWVFeGlzdHMgPT0gZmFsc2UpIHtcbiAgICAgIGxldCBjaXBoZXJ0ZXh0ID0gQ3J5cHRvSlMuQUVTLmVuY3J5cHQoa2V5d29yZCwgXCIvL3NlY3IvayEhXCIpO1xuICAgICAgbGV0IGNpcGhlcm51bSA9IENyeXB0b0pTLkFFUy5lbmNyeXB0KFwiMVwiLCBcIi8vc2Vjci9rISFcIik7XG4gICAgICBDb29raWVzLnNldChcIm51bVwiLCBjaXBoZXJudW0sIHsgZXhwaXJlczogMC4wMjA4MzMzMzMzMyB9KTtcbiAgICAgIENvb2tpZXMuc2V0KFwid3Jkc1wiLCBjaXBoZXJ0ZXh0LCB7IGV4cGlyZXM6IDAuMDIwODMzMzMzMzMgfSk7XG4gICAgICBjb25zb2xlLmxvZyhcImZldGNoaW5nXCIpO1xuICAgICAgbGV0IGZvcm1hdHRlZEt3ID0ga2V5d29yZC5yZXBsYWNlKFwiIFwiLCBcIitcIik7XG4gICAgICBsZXQgZ2V0U3RyID0gXCJodHRwOi8vbG9jYWxob3N0OjQwMDAva2V5d29yZC9cIiArIGZvcm1hdHRlZEt3O1xuICAgICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICAgIGF4aW9zLmdldChnZXRTdHIpLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgICAgIHNldElzRGF0YSh0cnVlKTtcbiAgICAgICAgc2V0RGF0YShyZXNwb25zZS5kYXRhKTtcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IGt3QXJyYXkgPSBjb29raWVFeGlzdHMuc3BsaXQoXCIrXCIpO1xuICAgICAgY29uc29sZS5sb2coa3dBcnJheSk7XG4gICAgICBsZXQgbmV3VGV4dCA9IGNvb2tpZUV4aXN0cyArIFwiK1wiICsga2V5d29yZDtcbiAgICAgIGxldCBjaXBoZXJ0ZXh0ID0gQ3J5cHRvSlMuQUVTLmVuY3J5cHQobmV3VGV4dCwgXCIvL3NlY3IvayEhXCIpO1xuICAgICAgQ29va2llcy5zZXQoXCJ3cmRzXCIsIGNpcGhlcnRleHQsIHsgZXhwaXJlczogMC4wMjA4MzMzMzMzMyB9KTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwga3dBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoa2V5d29yZCA9PSBrd0FycmF5W2ldKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJ3b3JkIGZvdW5kXCIpO1xuICAgICAgICAgIHNldFdvcmRUb29NYW55KHRydWUpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGV0IG51bUNvb2tpZSA9IGdldE51bUNvb2tpZSgpO1xuICAgICAgbnVtQ29va2llID0gcGFyc2VJbnQobnVtQ29va2llKTtcbiAgICAgIGlmIChudW1Db29raWUgPT0gNSkge1xuICAgICAgICBzZXRUb29NYW55KHRydWUpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBudW1Db29raWUgKz0gMTtcbiAgICAgIGxldCBudW10ZXh0ID0gQ3J5cHRvSlMuQUVTLmVuY3J5cHQobnVtQ29va2llLnRvU3RyaW5nKCksIFwiLy9zZWNyL2shIVwiKTtcbiAgICAgIENvb2tpZXMuc2V0KFwibnVtXCIsIG51bXRleHQsIHsgZXhwaXJlczogMC4wMjA4MzMzMzMzMyB9KTtcbiAgICAgIGNvbnNvbGUubG9nKFwiZm91bmQga3dBcnJheSBhbmQgZmV0Y2hpbmdcIik7XG4gICAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgICAgbGV0IGZvcm1hdHRlZEt3ID0ga2V5d29yZC5yZXBsYWNlKFwiIFwiLCBcIitcIik7XG4gICAgICBsZXQgZ2V0U3RyID0gXCJodHRwOi8vbG9jYWxob3N0OjQwMDAva2V5d29yZC9cIiArIGZvcm1hdHRlZEt3O1xuICAgICAgYXhpb3MuZ2V0KGdldFN0cikudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgIHNldElzRGF0YSh0cnVlKTtcbiAgICAgICAgc2V0RGF0YShyZXNwb25zZS5kYXRhKTtcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGdldE51bUNvb2tpZSgpIHtcbiAgICBsZXQgY29vayA9IENvb2tpZXMuZ2V0KFwibnVtXCIpO1xuICAgIGlmIChjb29rID09IHVuZGVmaW5lZCkge1xuICAgICAgbGV0IG51bXRleHQgPSBDcnlwdG9KUy5BRVMuZW5jcnlwdChcIjFcIiwgXCIvL3NlY3IvayEhXCIpO1xuICAgICAgQ29va2llcy5zZXQoXCJudW1cIiwgbnVtdGV4dCwgeyBleHBpcmVzOiAwLjAyMDgzMzMzMzMzIH0pO1xuICAgICAgcmV0dXJuIFwiMVwiO1xuICAgIH1cbiAgICB2YXIgYnl0ZXMgPSBDcnlwdG9KUy5BRVMuZGVjcnlwdChjb29rLnRvU3RyaW5nKCksIFwiLy9zZWNyL2shIVwiKTtcbiAgICB2YXIgcGxhaW50ZXh0ID0gYnl0ZXMudG9TdHJpbmcoQ3J5cHRvSlMuZW5jLlV0ZjgpO1xuICAgIGNvbnNvbGUubG9nKHBsYWludGV4dCk7XG4gICAgcmV0dXJuIHBsYWludGV4dDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldCgpIHtcbiAgICBsZXQgdGV4dCA9IENvb2tpZXMuZ2V0KFwid3Jkc1wiKTtcbiAgICBpZiAodGV4dCA9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGJ5dGVzID0gQ3J5cHRvSlMuQUVTLmRlY3J5cHQodGV4dC50b1N0cmluZygpLCBcIi8vc2Vjci9rISFcIik7XG4gICAgICB2YXIgcGxhaW50ZXh0ID0gYnl0ZXMudG9TdHJpbmcoQ3J5cHRvSlMuZW5jLlV0ZjgpO1xuICAgICAgY29uc29sZS5sb2cocGxhaW50ZXh0KTtcbiAgICAgIHJldHVybiBwbGFpbnRleHQ7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gZGVjcnlwdCh0ZXh0KSB7XG4gICAgdmFyIGJ5dGVzID0gQ3J5cHRvSlMuQUVTLmRlY3J5cHQodGV4dC50b1N0cmluZygpLCBcIi8vc2Vjci9rISFcIik7XG4gICAgdmFyIHBsYWludGV4dCA9IGJ5dGVzLnRvU3RyaW5nKENyeXB0b0pTLmVuYy5VdGY4KTtcbiAgICByZXR1cm4gcGxhaW50ZXh0O1xuICB9XG4gIGlmICghbG9hZGluZyAmJiAhaXNEYXRhKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3V0ZXItc2VhcmNoLXdyYXBcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbm5lci1zZWFyY2gtd3JhcFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoLXRpdGxlXCI+XG4gICAgICAgICAgICA8c3Ryb25nPmVudGVyIHlvdXIga2V5d29yZDwvc3Ryb25nPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoYmFyLXdyYXBcIj5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJrZXl3b3JkLWlucHV0XCJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBlZGl0S2V5d29yZChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJzZWFyY2gtYnV0dG9uXCIgb25DbGljaz17c3VifT5cbiAgICAgICAgICAgICAgR2V0IE1ldHJpY3NcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgICB7YFxuICAgICAgICAgICAgICBkaXYuaW5uZXItc2VhcmNoLXdyYXAge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGRpdi5vdXRlci1zZWFyY2gtd3JhcCB7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZGl2LnNlYXJjaC10aXRsZSB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYnV0dG9uLnNlYXJjaC1idXR0b24ge1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDhweDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2UyMmIyZTtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxLjVweDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5zZWFyY2gtYnV0dG9uOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMTJweCA2MHB4IDAgI2UyMmIyZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBkaXYuc2VhcmNoYmFyLXdyYXAge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpbnB1dC5rZXl3b3JkLWlucHV0IHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9XG4gICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9IGVsc2UgaWYgKCEhbG9hZGluZykge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm91dGVyLXNlYXJjaC13cmFwXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5uZXItc2VhcmNoLXdyYXBcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC10aXRsZVwiPlxuICAgICAgICAgICAgPHN0cm9uZz5cbiAgICAgICAgICAgICAgZmV0Y2hpbmcgZGF0YSBmb3IgdG9wIDUwIHJlc3VsdHMuLi5cbiAgICAgICAgICAgICAgPGJyIC8+IHRoaXMgY291bGQgdGFrZSBhIG1pbnV0ZS5cbiAgICAgICAgICAgIDwvc3Ryb25nPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9hZGluZy13cmFwXCI+XG4gICAgICAgICAgICA8U3Bpbm5lciAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgICB7YFxuICAgICAgICAgICAgICBkaXYuaW5uZXItc2VhcmNoLXdyYXAge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGRpdi5vdXRlci1zZWFyY2gtd3JhcCB7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZGl2LnNlYXJjaC10aXRsZSB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBidXR0b24uc2VhcmNoLWJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogOHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTIyYjJlO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDEuNXB4O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLnNlYXJjaC1idXR0b246aG92ZXIge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgICAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAxMnB4IDYwcHggMCAjZTIyYjJlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGRpdi5sb2FkaW5nLXdyYXAge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpbnB1dC5rZXl3b3JkLWlucHV0IHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9XG4gICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9IGVsc2UgaWYgKCFsb2FkaW5nICYmICEhaXNEYXRhKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3V0ZXItc2VhcmNoLXdyYXBcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbm5lci1zZWFyY2gtd3JhcFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoLXRpdGxlXCI+XG4gICAgICAgICAgICA8c3Ryb25nPlxuICAgICAgICAgICAgICBmZXRjaGluZyBkYXRhIGZvciB0b3AgNTAgcmVzdWx0cy4uLlxuICAgICAgICAgICAgICA8YnIgLz4gdGhpcyBjb3VsZCB0YWtlIGEgbWludXRlXG4gICAgICAgICAgICA8L3N0cm9uZz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWRpbmctd3JhcFwiPlxuICAgICAgICAgICAgPGRpdj5nb3QgZGF0YTwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgICB7YFxuICAgICAgICAgICAgICBkaXYuaW5uZXItc2VhcmNoLXdyYXAge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGRpdi5vdXRlci1zZWFyY2gtd3JhcCB7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZGl2LnNlYXJjaC10aXRsZSB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBidXR0b24uc2VhcmNoLWJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogOHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTIyYjJlO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDEuNXB4O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLnNlYXJjaC1idXR0b246aG92ZXIge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgICAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAxMnB4IDYwcHggMCAjZTIyYjJlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGRpdi5sb2FkaW5nLXdyYXAge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpbnB1dC5rZXl3b3JkLWlucHV0IHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9XG4gICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iXX0= */\n/*@ sourceURL=/Users/manx/projects/keyword-density/frontend/components/main/Search.js */")));
  }
}

/***/ })

})
//# sourceMappingURL=index.js.3518f4d12dcf037ba9a7.hot-update.js.map