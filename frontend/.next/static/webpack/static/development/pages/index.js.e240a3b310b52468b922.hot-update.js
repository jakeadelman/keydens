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
      var cookieExists, ciphertext, formattedKw, getStr, kwArray, i, newText, _ciphertext, _formattedKw, _getStr;

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

              ciphertext = CryptoJS.AES.encrypt(keyword, "//secr/k!!");
              Cookies.set("wrds", ciphertext, {
                expires: 0.02083333333
              });
              console.log("fetching");
              formattedKw = keyword.split(" ").join("+");
              getStr = "http://localhost:4000/keyword/" + formattedKw;
              setLoading(true);
              fetch(getStr);
              _context.next = 34;
              break;

            case 13:
              kwArray = cookieExists.split("+");
              console.log(kwArray);
              i = 0;

            case 16:
              if (!(i < kwArray.length)) {
                _context.next = 24;
                break;
              }

              if (!(keyword == kwArray[i])) {
                _context.next = 21;
                break;
              }

              console.log("word found");
              setWordTooMany(true);
              return _context.abrupt("return");

            case 21:
              i++;
              _context.next = 16;
              break;

            case 24:
              if (!(kwArray.length >= 5)) {
                _context.next = 27;
                break;
              }

              setTooMany(true);
              return _context.abrupt("return");

            case 27:
              newText = cookieExists + "+" + keyword;
              _ciphertext = CryptoJS.AES.encrypt(newText, "//secr/k!!");
              Cookies.set("wrds", _ciphertext, {
                expires: 0.02083333333
              });
              setLoading(true);
              _formattedKw = keyword.split(" ").join("+");
              _getStr = "http://localhost:4000/keyword/" + _formattedKw;
              fetch(_getStr);

            case 34:
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

      var times = _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_2___default()(response.data.count);

      times = times.toFixed(2);
      times = times.toString();
      var newDat = {};
      newDat["density"] = dens;
      newDat["words"] = wrds;
      newDat["count"] = times;
      console.log(newDat);
      setData(newDat);
      setIsData(true);
      setLoading(false);
      console.log(response);
    });
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

  function searchAgain() {
    setIsData(false);
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
        lineNumber: 96
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      className: "jsx-3558232615" + " " + "inner-search-wrap",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      className: "jsx-3558232615" + " " + "search-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("strong", {
      className: "jsx-3558232615",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99
      },
      __self: this
    }, "enter your keyword")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      className: "jsx-3558232615" + " " + "searchbar-wrap",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
      type: "text",
      onChange: function onChange(e) {
        return editKeyword(e.target.value);
      },
      className: "jsx-3558232615" + " " + "keyword-input",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
      onClick: sub,
      className: "jsx-3558232615" + " " + "search-button",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107
      },
      __self: this
    }, "Get Metrics")), !!wordTooMany ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      className: "jsx-3558232615" + " " + "alert-bar",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      className: "jsx-3558232615" + " " + "inner-alert",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114
      },
      __self: this
    }, "you can only search a given keyword once every 30 mins... try another keyword")) : null, !!tooMany ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      className: "jsx-3558232615" + " " + "alert-bar",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      className: "jsx-3558232615" + " " + "inner-alert",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122
      },
      __self: this
    }, "too many searches")) : null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
      id: "3558232615",
      __self: this
    }, "div.alert-bar.jsx-3558232615{max-width:200px;font-size:12px;padding:5px;margin:12px;}div.inner-search-wrap.jsx-3558232615{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding:15px;}div.outer-search-wrap.jsx-3558232615{padding:10px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}div.search-title.jsx-3558232615{margin:auto;margin-bottom:14px;}button.search-button.jsx-3558232615{border-radius:0;border:none;padding:8px;font-size:10px;background-color:#e22b2e;color:#fff;text-transform:uppercase;-webkit-letter-spacing:1.5px;-moz-letter-spacing:1.5px;-ms-letter-spacing:1.5px;letter-spacing:1.5px;font-weight:700;}.search-button.jsx-3558232615:hover{background:#fff;color:#000;box-shadow:0 12px 60px 0 #e22b2e;}div.searchbar-wrap.jsx-3558232615{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;}input.keyword-input.jsx-3558232615{font-size:13px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYW54L3Byb2plY3RzL2tleXdvcmQtZGVuc2l0eS9mcm9udGVuZC9jb21wb25lbnRzL21haW4vU2VhcmNoLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThIYSxBQUdpQyxBQU1ILEFBS0EsQUFLRCxBQUlJLEFBV0EsQUFLSCxBQUlFLFlBdkJJLENBTE4sRUE2QmYsQ0F4Q2lCLEFBb0JILEFBV0QsV0FDc0IsQ0FYckIsR0FwQkEsQUFnQmQsU0FLaUIsR0FwQkgsWUFDZCxBQW9CMkIsS0FVM0IsY0EzQndCLEFBOEJILE1BWlIsT0FaVyxJQWFHLHlCQUNKLDJCQVd2QixTQTlCZSxhQUNmLEFBS0Esb0RBY2tCLGdCQUNsQiIsImZpbGUiOiIvVXNlcnMvbWFueC9wcm9qZWN0cy9rZXl3b3JkLWRlbnNpdHkvZnJvbnRlbmQvY29tcG9uZW50cy9tYWluL1NlYXJjaC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgU3Bpbm5lciBmcm9tIFwiLi9Mb2FkZXJcIjtcbmNvbnN0IENvb2tpZXMgPSByZXF1aXJlKFwianMtY29va2llXCIpO1xudmFyIENyeXB0b0pTID0gcmVxdWlyZShcImNyeXB0by1qc1wiKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2VhcmNoKCkge1xuICBjb25zdCBba2V5d29yZCwgZWRpdEtleXdvcmRdID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgW3Rvb01hbnksIHNldFRvb01hbnldID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbd29yZFRvb01hbnksIHNldFdvcmRUb29NYW55XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbaXNEYXRhLCBzZXRJc0RhdGFdID0gdXNlU3RhdGUoKTtcblxuICBhc3luYyBmdW5jdGlvbiBzdWIoKSB7XG4gICAgc2V0VG9vTWFueShmYWxzZSk7XG4gICAgc2V0V29yZFRvb01hbnkoZmFsc2UpO1xuICAgIGxldCBjb29raWVFeGlzdHMgPSBnZXQoKTtcbiAgICBpZiAoY29va2llRXhpc3RzID09IGZhbHNlKSB7XG4gICAgICBsZXQgY2lwaGVydGV4dCA9IENyeXB0b0pTLkFFUy5lbmNyeXB0KGtleXdvcmQsIFwiLy9zZWNyL2shIVwiKTtcbiAgICAgIENvb2tpZXMuc2V0KFwid3Jkc1wiLCBjaXBoZXJ0ZXh0LCB7IGV4cGlyZXM6IDAuMDIwODMzMzMzMzMgfSk7XG4gICAgICBjb25zb2xlLmxvZyhcImZldGNoaW5nXCIpO1xuICAgICAgbGV0IGZvcm1hdHRlZEt3ID0ga2V5d29yZC5zcGxpdChcIiBcIikuam9pbihcIitcIik7XG4gICAgICBsZXQgZ2V0U3RyID0gXCJodHRwOi8vbG9jYWxob3N0OjQwMDAva2V5d29yZC9cIiArIGZvcm1hdHRlZEt3O1xuICAgICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICAgIGZldGNoKGdldFN0cik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBrd0FycmF5ID0gY29va2llRXhpc3RzLnNwbGl0KFwiK1wiKTtcbiAgICAgIGNvbnNvbGUubG9nKGt3QXJyYXkpO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrd0FycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChrZXl3b3JkID09IGt3QXJyYXlbaV0pIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIndvcmQgZm91bmRcIik7XG4gICAgICAgICAgc2V0V29yZFRvb01hbnkodHJ1ZSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoa3dBcnJheS5sZW5ndGggPj0gNSkge1xuICAgICAgICBzZXRUb29NYW55KHRydWUpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBsZXQgbmV3VGV4dCA9IGNvb2tpZUV4aXN0cyArIFwiK1wiICsga2V5d29yZDtcbiAgICAgIGxldCBjaXBoZXJ0ZXh0ID0gQ3J5cHRvSlMuQUVTLmVuY3J5cHQobmV3VGV4dCwgXCIvL3NlY3IvayEhXCIpO1xuICAgICAgQ29va2llcy5zZXQoXCJ3cmRzXCIsIGNpcGhlcnRleHQsIHsgZXhwaXJlczogMC4wMjA4MzMzMzMzMyB9KTtcbiAgICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgICBsZXQgZm9ybWF0dGVkS3cgPSBrZXl3b3JkLnNwbGl0KFwiIFwiKS5qb2luKFwiK1wiKTtcbiAgICAgIGxldCBnZXRTdHIgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6NDAwMC9rZXl3b3JkL1wiICsgZm9ybWF0dGVkS3c7XG4gICAgICBmZXRjaChnZXRTdHIpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGZldGNoKGdldFN0cikge1xuICAgIGF4aW9zLmdldChnZXRTdHIpLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgbGV0IGRlbnMgPSBwYXJzZUZsb2F0KHJlc3BvbnNlLmRhdGEuZGVuc2l0eSk7XG4gICAgICBkZW5zID0gZGVucy50b0ZpeGVkKDIpO1xuICAgICAgZGVucyA9IGRlbnMudG9TdHJpbmcoKTtcbiAgICAgIGxldCB3cmRzID0gcGFyc2VJbnQocmVzcG9uc2UuZGF0YS53b3Jkcyk7XG4gICAgICB3cmRzID0gd3Jkcy50b1N0cmluZygpO1xuICAgICAgbGV0IHRpbWVzID0gcGFyc2VGbG9hdChyZXNwb25zZS5kYXRhLmNvdW50KTtcbiAgICAgIHRpbWVzID0gdGltZXMudG9GaXhlZCgyKTtcbiAgICAgIHRpbWVzID0gdGltZXMudG9TdHJpbmcoKTtcbiAgICAgIGxldCBuZXdEYXQgPSB7fTtcbiAgICAgIG5ld0RhdFtcImRlbnNpdHlcIl0gPSBkZW5zO1xuICAgICAgbmV3RGF0W1wid29yZHNcIl0gPSB3cmRzO1xuICAgICAgbmV3RGF0W1wiY291bnRcIl0gPSB0aW1lcztcbiAgICAgIGNvbnNvbGUubG9nKG5ld0RhdCk7XG4gICAgICBzZXREYXRhKG5ld0RhdCk7XG4gICAgICBzZXRJc0RhdGEodHJ1ZSk7XG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldCgpIHtcbiAgICBsZXQgdGV4dCA9IENvb2tpZXMuZ2V0KFwid3Jkc1wiKTtcbiAgICBpZiAodGV4dCA9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGJ5dGVzID0gQ3J5cHRvSlMuQUVTLmRlY3J5cHQodGV4dC50b1N0cmluZygpLCBcIi8vc2Vjci9rISFcIik7XG4gICAgICB2YXIgcGxhaW50ZXh0ID0gYnl0ZXMudG9TdHJpbmcoQ3J5cHRvSlMuZW5jLlV0ZjgpO1xuICAgICAgY29uc29sZS5sb2cocGxhaW50ZXh0KTtcbiAgICAgIHJldHVybiBwbGFpbnRleHQ7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gc2VhcmNoQWdhaW4oKSB7XG4gICAgc2V0SXNEYXRhKGZhbHNlKTtcbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIGRlY3J5cHQodGV4dCkge1xuICAgIHZhciBieXRlcyA9IENyeXB0b0pTLkFFUy5kZWNyeXB0KHRleHQudG9TdHJpbmcoKSwgXCIvL3NlY3IvayEhXCIpO1xuICAgIHZhciBwbGFpbnRleHQgPSBieXRlcy50b1N0cmluZyhDcnlwdG9KUy5lbmMuVXRmOCk7XG4gICAgcmV0dXJuIHBsYWludGV4dDtcbiAgfVxuICBpZiAoIWxvYWRpbmcgJiYgIWlzRGF0YSkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm91dGVyLXNlYXJjaC13cmFwXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5uZXItc2VhcmNoLXdyYXBcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC10aXRsZVwiPlxuICAgICAgICAgICAgPHN0cm9uZz5lbnRlciB5b3VyIGtleXdvcmQ8L3N0cm9uZz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaGJhci13cmFwXCI+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwia2V5d29yZC1pbnB1dFwiXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gZWRpdEtleXdvcmQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwic2VhcmNoLWJ1dHRvblwiIG9uQ2xpY2s9e3N1Yn0+XG4gICAgICAgICAgICAgIEdldCBNZXRyaWNzXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIHshIXdvcmRUb29NYW55ID8gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbGVydC1iYXJcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbm5lci1hbGVydFwiPlxuICAgICAgICAgICAgICAgIHlvdSBjYW4gb25seSBzZWFyY2ggYSBnaXZlbiBrZXl3b3JkIG9uY2UgZXZlcnkgMzAgbWlucy4uLiB0cnlcbiAgICAgICAgICAgICAgICBhbm90aGVyIGtleXdvcmRcbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICB7ISF0b29NYW55ID8gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbGVydC1iYXJcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbm5lci1hbGVydFwiPnRvbyBtYW55IHNlYXJjaGVzPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApIDogbnVsbH1cblxuICAgICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgICB7YFxuICAgICAgICAgICAgICBkaXYuYWxlcnQtYmFyIHtcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDIwMHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAxMnB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGRpdi5pbm5lci1zZWFyY2gtd3JhcCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZGl2Lm91dGVyLXNlYXJjaC13cmFwIHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBkaXYuc2VhcmNoLXRpdGxlIHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTRweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBidXR0b24uc2VhcmNoLWJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogOHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTIyYjJlO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDEuNXB4O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLnNlYXJjaC1idXR0b246aG92ZXIge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgICAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAxMnB4IDYwcHggMCAjZTIyYjJlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGRpdi5zZWFyY2hiYXItd3JhcCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlucHV0LmtleXdvcmQtaW5wdXQge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH1cbiAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH0gZWxzZSBpZiAoISFsb2FkaW5nKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3V0ZXItc2VhcmNoLXdyYXBcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbm5lci1zZWFyY2gtd3JhcFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoLXRpdGxlXCI+XG4gICAgICAgICAgICA8c3Ryb25nPlxuICAgICAgICAgICAgICBmZXRjaGluZyBkYXRhIGZvciB0b3AgNTAgcmVzdWx0cy4uLlxuICAgICAgICAgICAgICA8YnIgLz4gdGhpcyBjb3VsZCB0YWtlIGEgbWludXRlLlxuICAgICAgICAgICAgPC9zdHJvbmc+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkaW5nLXdyYXBcIj5cbiAgICAgICAgICAgIDxTcGlubmVyIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICAgIHtgXG4gICAgICAgICAgICAgIGRpdi5pbm5lci1zZWFyY2gtd3JhcCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZGl2Lm91dGVyLXNlYXJjaC13cmFwIHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBkaXYuc2VhcmNoLXRpdGxlIHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGJ1dHRvbi5zZWFyY2gtYnV0dG9uIHtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA4cHg7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlMjJiMmU7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMS41cHg7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuc2VhcmNoLWJ1dHRvbjpob3ZlciB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDEycHggNjBweCAwICNlMjJiMmU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZGl2LmxvYWRpbmctd3JhcCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlucHV0LmtleXdvcmQtaW5wdXQge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH1cbiAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3V0ZXItZGF0YS13cmFwXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXRhLXNlYXJjaC13cmFwXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC10aXRsZVwiPlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIHJlc3VsdHMgZm9yIDxzdHJvbmc+e2tleXdvcmR9PC9zdHJvbmc+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhdGEtd3JhcFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhdGEtcm93XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXRhLWRhdFwiPmt3IGRlbnNpdHk8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhdGEtZGF0LXJpZ2h0XCI+e2RhdGEuZGVuc2l0eX0lPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhdGEtcm93LTJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhdGEtZGF0XCI+YXZnIHdvcmRjb3VudDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGF0YS1kYXQtcmlnaHRcIj57ZGF0YS53b3Jkc308L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoLWFnYWluLXdyYXBcIj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJzZWFyY2gtYnV0dG9uXCIgb25DbGljaz17c2VhcmNoQWdhaW59PlxuICAgICAgICAgICAgICAgIHNlYXJjaCBhZ2FpblxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICB7YFxuICAgICAgICAgICAgZGl2LmRhdGEtd3JhcCB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgICAgICAgICAgICAgbWFyZ2luOiAxMnB4IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuc2VhcmNoLWFnYWluLXdyYXAge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGl2LmRhdGEtcm93IHtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkaXYuZGF0YS1yb3ctMiB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgICAgICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGl2LmRhdGEtZGF0IHtcbiAgICAgICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRpdi5kYXRhLWRhdC1yaWdodCB7XG4gICAgICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGl2LmRhdGEtc2VhcmNoLXdyYXAge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAub3V0ZXItZGF0YS13cmFwIHtcbiAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgbWluLXdpZHRoOiAzMDBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRpdi5zZWFyY2gtdGl0bGUge1xuICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnV0dG9uLnNlYXJjaC1idXR0b24ge1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDhweDtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTIyYjJlO1xuICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDEuNXB4O1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuc2VhcmNoLWJ1dHRvbjpob3ZlciB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgICAgICAgIGNvbG9yOiAjZTIyYjJlO1xuICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZTIyYjJlO1xuICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDRweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGl2LmxvYWRpbmctd3JhcCB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpbnB1dC5rZXl3b3JkLWlucHV0IHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iXX0= */\n/*@ sourceURL=/Users/manx/projects/keyword-density/frontend/components/main/Search.js */")));
  } else if (!!loading) {
    return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      className: "outer-search-wrap",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 178
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      className: "jsx-3598683652" + " " + "inner-search-wrap",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 179
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      className: "jsx-3598683652" + " " + "search-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 180
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("strong", {
      className: "jsx-3598683652",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 181
      },
      __self: this
    }, "fetching data for top 50 results...", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br", {
      className: "jsx-3598683652",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 183
      },
      __self: this
    }), " this could take a minute.")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      className: "jsx-3598683652" + " " + "loading-wrap",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 186
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_Loader__WEBPACK_IMPORTED_MODULE_8__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 187
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
      id: "3598683652",
      __self: this
    }, "div.inner-search-wrap.jsx-3598683652{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding:15px;}div.outer-search-wrap.jsx-3598683652{padding:10px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}div.search-title.jsx-3598683652{margin:auto;margin-bottom:10px;text-align:center;margin-bottom:5px;}button.search-button.jsx-3598683652{border-radius:0;border:none;padding:8px;font-size:10px;background-color:#e22b2e;color:#fff;text-transform:uppercase;-webkit-letter-spacing:1.5px;-moz-letter-spacing:1.5px;-ms-letter-spacing:1.5px;letter-spacing:1.5px;font-weight:700;}.search-button.jsx-3598683652:hover{background:#fff;color:#000;box-shadow:0 12px 60px 0 #e22b2e;}div.loading-wrap.jsx-3598683652{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;}input.keyword-input.jsx-3598683652{font-size:13px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYW54L3Byb2plY3RzL2tleXdvcmQtZGVuc2l0eS9mcm9udGVuZC9jb21wb25lbnRzL21haW4vU2VhcmNoLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZMYSxBQUc4QixBQUtBLEFBS0QsQUFNSSxBQVdBLEFBS0gsQUFJRSxZQXpCSSxDQUxOLEVBK0JmLENBcEJjLEFBV0QsV0FDc0IsQ0FYckIsR0FOTSxTQU9ILFNBTkcsTUFPTyxLQVUzQixPQWhCQSxPQWJ3QixBQWdDSCxNQVpSLE9BZFcsSUFlRyx5QkFDSiwyQkFXdkIsU0FoQ2UsYUFDZixBQUtBLG9EQWdCa0IsZ0JBQ2xCIiwiZmlsZSI6Ii9Vc2Vycy9tYW54L3Byb2plY3RzL2tleXdvcmQtZGVuc2l0eS9mcm9udGVuZC9jb21wb25lbnRzL21haW4vU2VhcmNoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBTcGlubmVyIGZyb20gXCIuL0xvYWRlclwiO1xuY29uc3QgQ29va2llcyA9IHJlcXVpcmUoXCJqcy1jb29raWVcIik7XG52YXIgQ3J5cHRvSlMgPSByZXF1aXJlKFwiY3J5cHRvLWpzXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZWFyY2goKSB7XG4gIGNvbnN0IFtrZXl3b3JkLCBlZGl0S2V5d29yZF0gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbdG9vTWFueSwgc2V0VG9vTWFueV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFt3b3JkVG9vTWFueSwgc2V0V29yZFRvb01hbnldID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFtpc0RhdGEsIHNldElzRGF0YV0gPSB1c2VTdGF0ZSgpO1xuXG4gIGFzeW5jIGZ1bmN0aW9uIHN1YigpIHtcbiAgICBzZXRUb29NYW55KGZhbHNlKTtcbiAgICBzZXRXb3JkVG9vTWFueShmYWxzZSk7XG4gICAgbGV0IGNvb2tpZUV4aXN0cyA9IGdldCgpO1xuICAgIGlmIChjb29raWVFeGlzdHMgPT0gZmFsc2UpIHtcbiAgICAgIGxldCBjaXBoZXJ0ZXh0ID0gQ3J5cHRvSlMuQUVTLmVuY3J5cHQoa2V5d29yZCwgXCIvL3NlY3IvayEhXCIpO1xuICAgICAgQ29va2llcy5zZXQoXCJ3cmRzXCIsIGNpcGhlcnRleHQsIHsgZXhwaXJlczogMC4wMjA4MzMzMzMzMyB9KTtcbiAgICAgIGNvbnNvbGUubG9nKFwiZmV0Y2hpbmdcIik7XG4gICAgICBsZXQgZm9ybWF0dGVkS3cgPSBrZXl3b3JkLnNwbGl0KFwiIFwiKS5qb2luKFwiK1wiKTtcbiAgICAgIGxldCBnZXRTdHIgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6NDAwMC9rZXl3b3JkL1wiICsgZm9ybWF0dGVkS3c7XG4gICAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgICAgZmV0Y2goZ2V0U3RyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IGt3QXJyYXkgPSBjb29raWVFeGlzdHMuc3BsaXQoXCIrXCIpO1xuICAgICAgY29uc29sZS5sb2coa3dBcnJheSk7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGt3QXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGtleXdvcmQgPT0ga3dBcnJheVtpXSkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwid29yZCBmb3VuZFwiKTtcbiAgICAgICAgICBzZXRXb3JkVG9vTWFueSh0cnVlKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChrd0FycmF5Lmxlbmd0aCA+PSA1KSB7XG4gICAgICAgIHNldFRvb01hbnkodHJ1ZSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGxldCBuZXdUZXh0ID0gY29va2llRXhpc3RzICsgXCIrXCIgKyBrZXl3b3JkO1xuICAgICAgbGV0IGNpcGhlcnRleHQgPSBDcnlwdG9KUy5BRVMuZW5jcnlwdChuZXdUZXh0LCBcIi8vc2Vjci9rISFcIik7XG4gICAgICBDb29raWVzLnNldChcIndyZHNcIiwgY2lwaGVydGV4dCwgeyBleHBpcmVzOiAwLjAyMDgzMzMzMzMzIH0pO1xuICAgICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICAgIGxldCBmb3JtYXR0ZWRLdyA9IGtleXdvcmQuc3BsaXQoXCIgXCIpLmpvaW4oXCIrXCIpO1xuICAgICAgbGV0IGdldFN0ciA9IFwiaHR0cDovL2xvY2FsaG9zdDo0MDAwL2tleXdvcmQvXCIgKyBmb3JtYXR0ZWRLdztcbiAgICAgIGZldGNoKGdldFN0cik7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZmV0Y2goZ2V0U3RyKSB7XG4gICAgYXhpb3MuZ2V0KGdldFN0cikudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICBsZXQgZGVucyA9IHBhcnNlRmxvYXQocmVzcG9uc2UuZGF0YS5kZW5zaXR5KTtcbiAgICAgIGRlbnMgPSBkZW5zLnRvRml4ZWQoMik7XG4gICAgICBkZW5zID0gZGVucy50b1N0cmluZygpO1xuICAgICAgbGV0IHdyZHMgPSBwYXJzZUludChyZXNwb25zZS5kYXRhLndvcmRzKTtcbiAgICAgIHdyZHMgPSB3cmRzLnRvU3RyaW5nKCk7XG4gICAgICBsZXQgdGltZXMgPSBwYXJzZUZsb2F0KHJlc3BvbnNlLmRhdGEuY291bnQpO1xuICAgICAgdGltZXMgPSB0aW1lcy50b0ZpeGVkKDIpO1xuICAgICAgdGltZXMgPSB0aW1lcy50b1N0cmluZygpO1xuICAgICAgbGV0IG5ld0RhdCA9IHt9O1xuICAgICAgbmV3RGF0W1wiZGVuc2l0eVwiXSA9IGRlbnM7XG4gICAgICBuZXdEYXRbXCJ3b3Jkc1wiXSA9IHdyZHM7XG4gICAgICBuZXdEYXRbXCJjb3VudFwiXSA9IHRpbWVzO1xuICAgICAgY29uc29sZS5sb2cobmV3RGF0KTtcbiAgICAgIHNldERhdGEobmV3RGF0KTtcbiAgICAgIHNldElzRGF0YSh0cnVlKTtcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0KCkge1xuICAgIGxldCB0ZXh0ID0gQ29va2llcy5nZXQoXCJ3cmRzXCIpO1xuICAgIGlmICh0ZXh0ID09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgYnl0ZXMgPSBDcnlwdG9KUy5BRVMuZGVjcnlwdCh0ZXh0LnRvU3RyaW5nKCksIFwiLy9zZWNyL2shIVwiKTtcbiAgICAgIHZhciBwbGFpbnRleHQgPSBieXRlcy50b1N0cmluZyhDcnlwdG9KUy5lbmMuVXRmOCk7XG4gICAgICBjb25zb2xlLmxvZyhwbGFpbnRleHQpO1xuICAgICAgcmV0dXJuIHBsYWludGV4dDtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBzZWFyY2hBZ2FpbigpIHtcbiAgICBzZXRJc0RhdGEoZmFsc2UpO1xuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gZGVjcnlwdCh0ZXh0KSB7XG4gICAgdmFyIGJ5dGVzID0gQ3J5cHRvSlMuQUVTLmRlY3J5cHQodGV4dC50b1N0cmluZygpLCBcIi8vc2Vjci9rISFcIik7XG4gICAgdmFyIHBsYWludGV4dCA9IGJ5dGVzLnRvU3RyaW5nKENyeXB0b0pTLmVuYy5VdGY4KTtcbiAgICByZXR1cm4gcGxhaW50ZXh0O1xuICB9XG4gIGlmICghbG9hZGluZyAmJiAhaXNEYXRhKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3V0ZXItc2VhcmNoLXdyYXBcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbm5lci1zZWFyY2gtd3JhcFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoLXRpdGxlXCI+XG4gICAgICAgICAgICA8c3Ryb25nPmVudGVyIHlvdXIga2V5d29yZDwvc3Ryb25nPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoYmFyLXdyYXBcIj5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJrZXl3b3JkLWlucHV0XCJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBlZGl0S2V5d29yZChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJzZWFyY2gtYnV0dG9uXCIgb25DbGljaz17c3VifT5cbiAgICAgICAgICAgICAgR2V0IE1ldHJpY3NcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgeyEhd29yZFRvb01hbnkgPyAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0LWJhclwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubmVyLWFsZXJ0XCI+XG4gICAgICAgICAgICAgICAgeW91IGNhbiBvbmx5IHNlYXJjaCBhIGdpdmVuIGtleXdvcmQgb25jZSBldmVyeSAzMCBtaW5zLi4uIHRyeVxuICAgICAgICAgICAgICAgIGFub3RoZXIga2V5d29yZFxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgIHshIXRvb01hbnkgPyAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0LWJhclwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubmVyLWFsZXJ0XCI+dG9vIG1hbnkgc2VhcmNoZXM8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkgOiBudWxsfVxuXG4gICAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICAgIHtgXG4gICAgICAgICAgICAgIGRpdi5hbGVydC1iYXIge1xuICAgICAgICAgICAgICAgIG1heC13aWR0aDogMjAwcHg7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDEycHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZGl2LmlubmVyLXNlYXJjaC13cmFwIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBkaXYub3V0ZXItc2VhcmNoLXdyYXAge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGRpdi5zZWFyY2gtdGl0bGUge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNHB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGJ1dHRvbi5zZWFyY2gtYnV0dG9uIHtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA4cHg7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlMjJiMmU7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMS41cHg7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuc2VhcmNoLWJ1dHRvbjpob3ZlciB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDEycHggNjBweCAwICNlMjJiMmU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZGl2LnNlYXJjaGJhci13cmFwIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaW5wdXQua2V5d29yZC1pbnB1dCB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfVxuICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfSBlbHNlIGlmICghIWxvYWRpbmcpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdXRlci1zZWFyY2gtd3JhcFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubmVyLXNlYXJjaC13cmFwXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2gtdGl0bGVcIj5cbiAgICAgICAgICAgIDxzdHJvbmc+XG4gICAgICAgICAgICAgIGZldGNoaW5nIGRhdGEgZm9yIHRvcCA1MCByZXN1bHRzLi4uXG4gICAgICAgICAgICAgIDxiciAvPiB0aGlzIGNvdWxkIHRha2UgYSBtaW51dGUuXG4gICAgICAgICAgICA8L3N0cm9uZz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWRpbmctd3JhcFwiPlxuICAgICAgICAgICAgPFNwaW5uZXIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgICAge2BcbiAgICAgICAgICAgICAgZGl2LmlubmVyLXNlYXJjaC13cmFwIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBkaXYub3V0ZXItc2VhcmNoLXdyYXAge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGRpdi5zZWFyY2gtdGl0bGUge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYnV0dG9uLnNlYXJjaC1idXR0b24ge1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDhweDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2UyMmIyZTtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxLjVweDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5zZWFyY2gtYnV0dG9uOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMTJweCA2MHB4IDAgI2UyMmIyZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBkaXYubG9hZGluZy13cmFwIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaW5wdXQua2V5d29yZC1pbnB1dCB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfVxuICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdXRlci1kYXRhLXdyYXBcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhdGEtc2VhcmNoLXdyYXBcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoLXRpdGxlXCI+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgcmVzdWx0cyBmb3IgPHN0cm9uZz57a2V5d29yZH08L3N0cm9uZz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGF0YS13cmFwXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGF0YS1yb3dcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhdGEtZGF0XCI+a3cgZGVuc2l0eTwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGF0YS1kYXQtcmlnaHRcIj57ZGF0YS5kZW5zaXR5fSU8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGF0YS1yb3ctMlwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGF0YS1kYXRcIj5hdmcgd29yZGNvdW50PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXRhLWRhdC1yaWdodFwiPntkYXRhLndvcmRzfTwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2gtYWdhaW4td3JhcFwiPlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInNlYXJjaC1idXR0b25cIiBvbkNsaWNrPXtzZWFyY2hBZ2Fpbn0+XG4gICAgICAgICAgICAgICAgc2VhcmNoIGFnYWluXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgIHtgXG4gICAgICAgICAgICBkaXYuZGF0YS13cmFwIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAgICAgICAgICAgICBtYXJnaW46IDEycHggMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5zZWFyY2gtYWdhaW4td3JhcCB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkaXYuZGF0YS1yb3cge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRpdi5kYXRhLXJvdy0yIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAgICAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkaXYuZGF0YS1kYXQge1xuICAgICAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGl2LmRhdGEtZGF0LXJpZ2h0IHtcbiAgICAgICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkaXYuZGF0YS1zZWFyY2gtd3JhcCB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5vdXRlci1kYXRhLXdyYXAge1xuICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICBtaW4td2lkdGg6IDMwMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGl2LnNlYXJjaC10aXRsZSB7XG4gICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBidXR0b24uc2VhcmNoLWJ1dHRvbiB7XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgICAgcGFkZGluZzogOHB4O1xuICAgICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlMjJiMmU7XG4gICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMS41cHg7XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5zZWFyY2gtYnV0dG9uOmhvdmVyIHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgICAgICAgY29sb3I6ICNlMjJiMmU7XG4gICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlMjJiMmU7XG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkaXYubG9hZGluZy13cmFwIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlucHV0LmtleXdvcmQtaW5wdXQge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiJdfQ== */\n/*@ sourceURL=/Users/manx/projects/keyword-density/frontend/components/main/Search.js */")));
  } else {
    return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      className: "jsx-522248683",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 237
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      className: "jsx-522248683" + " " + "outer-data-wrap",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 238
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      className: "jsx-522248683" + " " + "data-search-wrap",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 239
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      className: "jsx-522248683" + " " + "search-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 240
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      className: "jsx-522248683",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 241
      },
      __self: this
    }, "results for ", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("strong", {
      className: "jsx-522248683",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 242
      },
      __self: this
    }, keyword))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      className: "jsx-522248683" + " " + "data-wrap",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 245
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      className: "jsx-522248683" + " " + "data-row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 246
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      className: "jsx-522248683" + " " + "data-dat",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 247
      },
      __self: this
    }, "kw density"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      className: "jsx-522248683" + " " + "data-dat-right",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 248
      },
      __self: this
    }, data.density, "%")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      className: "jsx-522248683" + " " + "data-row-2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 250
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      className: "jsx-522248683" + " " + "data-dat",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 251
      },
      __self: this
    }, "avg wordcount"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      className: "jsx-522248683" + " " + "data-dat-right",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 252
      },
      __self: this
    }, data.words))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      className: "jsx-522248683" + " " + "search-again-wrap",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 255
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
      onClick: searchAgain,
      className: "jsx-522248683" + " " + "search-button",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 256
      },
      __self: this
    }, "search again")))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
      id: "522248683",
      __self: this
    }, "div.data-wrap.jsx-522248683{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;border:1px solid rgba(0,0,0,0.5);margin:12px 0;}.search-again-wrap.jsx-522248683{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}div.data-row.jsx-522248683{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;max-width:100%;padding:5px;}div.data-row-2.jsx-522248683{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;max-width:100%;border-top:1px solid rgba(0,0,0,0.5);padding:5px;}div.data-dat.jsx-522248683{width:50%;}div.data-dat-right.jsx-522248683{width:50%;text-align:right;}div.data-search-wrap.jsx-522248683{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding:15px;max-width:100%;}.outer-data-wrap.jsx-522248683{padding:10px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;min-width:300px;}div.search-title.jsx-522248683{margin:auto;margin-bottom:10px;text-align:center;margin-bottom:5px;}button.search-button.jsx-522248683{border-radius:0;border:none;padding:8px;font-size:10px;background-color:#e22b2e;color:#fff;text-transform:uppercase;-webkit-letter-spacing:1.5px;-moz-letter-spacing:1.5px;-ms-letter-spacing:1.5px;letter-spacing:1.5px;font-weight:700;margin:auto;}.search-button.jsx-522248683:hover{background:#fff;color:#e22b2e;border:1px solid #e22b2e;box-shadow:0 4px 10px 0 rgba(0,0,0,0.4);}div.loading-wrap.jsx-522248683{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;}input.keyword-input.jsx-522248683{font-size:13px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYW54L3Byb2plY3RzL2tleXdvcmQtZGVuc2l0eS9mcm9udGVuZC9jb21wb25lbnRzL21haW4vU2VhcmNoLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNRVyxBQUc0QixBQU1BLEFBR0EsQUFNQSxBQU9ILEFBR0EsQUFJRyxBQU1BLEFBTUQsQUFNSSxBQVlBLEFBTUgsQUFJRSxVQTlDakIsQUFHbUIsRUFnQkUsQ0FOTixFQWtDZixDQXRCYyxBQVlFLFdBakNoQixDQXNCYyxFQVlhLENBbEJQLFNBT0gsU0FORyxNQU9PLEFBV2tCLFlBakI3QyxPQTVDd0IsQUFNeEIsQUFHcUIsQUFNQSxBQWNHLEFBb0NILE1BZFIsT0FmVyxJQWdCRyxJQVUzQixxQkFUdUIsMkJBM0NOLEFBTUEsQUFrRGpCLFNBakVzQyxBQTZCdkIsTUFuQkQsQUFNNEIsT0FjekIsQUFNQyxLQXpCbEIsVUFvQkEsQ0FNQSxJQXBDZ0IsVUFnQkYsSUFmZCxRQWdCQSxVQW1Da0IsZ0JBQ0osWUFDZCIsImZpbGUiOiIvVXNlcnMvbWFueC9wcm9qZWN0cy9rZXl3b3JkLWRlbnNpdHkvZnJvbnRlbmQvY29tcG9uZW50cy9tYWluL1NlYXJjaC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgU3Bpbm5lciBmcm9tIFwiLi9Mb2FkZXJcIjtcbmNvbnN0IENvb2tpZXMgPSByZXF1aXJlKFwianMtY29va2llXCIpO1xudmFyIENyeXB0b0pTID0gcmVxdWlyZShcImNyeXB0by1qc1wiKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2VhcmNoKCkge1xuICBjb25zdCBba2V5d29yZCwgZWRpdEtleXdvcmRdID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgW3Rvb01hbnksIHNldFRvb01hbnldID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbd29yZFRvb01hbnksIHNldFdvcmRUb29NYW55XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbaXNEYXRhLCBzZXRJc0RhdGFdID0gdXNlU3RhdGUoKTtcblxuICBhc3luYyBmdW5jdGlvbiBzdWIoKSB7XG4gICAgc2V0VG9vTWFueShmYWxzZSk7XG4gICAgc2V0V29yZFRvb01hbnkoZmFsc2UpO1xuICAgIGxldCBjb29raWVFeGlzdHMgPSBnZXQoKTtcbiAgICBpZiAoY29va2llRXhpc3RzID09IGZhbHNlKSB7XG4gICAgICBsZXQgY2lwaGVydGV4dCA9IENyeXB0b0pTLkFFUy5lbmNyeXB0KGtleXdvcmQsIFwiLy9zZWNyL2shIVwiKTtcbiAgICAgIENvb2tpZXMuc2V0KFwid3Jkc1wiLCBjaXBoZXJ0ZXh0LCB7IGV4cGlyZXM6IDAuMDIwODMzMzMzMzMgfSk7XG4gICAgICBjb25zb2xlLmxvZyhcImZldGNoaW5nXCIpO1xuICAgICAgbGV0IGZvcm1hdHRlZEt3ID0ga2V5d29yZC5zcGxpdChcIiBcIikuam9pbihcIitcIik7XG4gICAgICBsZXQgZ2V0U3RyID0gXCJodHRwOi8vbG9jYWxob3N0OjQwMDAva2V5d29yZC9cIiArIGZvcm1hdHRlZEt3O1xuICAgICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICAgIGZldGNoKGdldFN0cik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBrd0FycmF5ID0gY29va2llRXhpc3RzLnNwbGl0KFwiK1wiKTtcbiAgICAgIGNvbnNvbGUubG9nKGt3QXJyYXkpO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrd0FycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChrZXl3b3JkID09IGt3QXJyYXlbaV0pIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIndvcmQgZm91bmRcIik7XG4gICAgICAgICAgc2V0V29yZFRvb01hbnkodHJ1ZSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoa3dBcnJheS5sZW5ndGggPj0gNSkge1xuICAgICAgICBzZXRUb29NYW55KHRydWUpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBsZXQgbmV3VGV4dCA9IGNvb2tpZUV4aXN0cyArIFwiK1wiICsga2V5d29yZDtcbiAgICAgIGxldCBjaXBoZXJ0ZXh0ID0gQ3J5cHRvSlMuQUVTLmVuY3J5cHQobmV3VGV4dCwgXCIvL3NlY3IvayEhXCIpO1xuICAgICAgQ29va2llcy5zZXQoXCJ3cmRzXCIsIGNpcGhlcnRleHQsIHsgZXhwaXJlczogMC4wMjA4MzMzMzMzMyB9KTtcbiAgICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgICBsZXQgZm9ybWF0dGVkS3cgPSBrZXl3b3JkLnNwbGl0KFwiIFwiKS5qb2luKFwiK1wiKTtcbiAgICAgIGxldCBnZXRTdHIgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6NDAwMC9rZXl3b3JkL1wiICsgZm9ybWF0dGVkS3c7XG4gICAgICBmZXRjaChnZXRTdHIpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGZldGNoKGdldFN0cikge1xuICAgIGF4aW9zLmdldChnZXRTdHIpLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgbGV0IGRlbnMgPSBwYXJzZUZsb2F0KHJlc3BvbnNlLmRhdGEuZGVuc2l0eSk7XG4gICAgICBkZW5zID0gZGVucy50b0ZpeGVkKDIpO1xuICAgICAgZGVucyA9IGRlbnMudG9TdHJpbmcoKTtcbiAgICAgIGxldCB3cmRzID0gcGFyc2VJbnQocmVzcG9uc2UuZGF0YS53b3Jkcyk7XG4gICAgICB3cmRzID0gd3Jkcy50b1N0cmluZygpO1xuICAgICAgbGV0IHRpbWVzID0gcGFyc2VGbG9hdChyZXNwb25zZS5kYXRhLmNvdW50KTtcbiAgICAgIHRpbWVzID0gdGltZXMudG9GaXhlZCgyKTtcbiAgICAgIHRpbWVzID0gdGltZXMudG9TdHJpbmcoKTtcbiAgICAgIGxldCBuZXdEYXQgPSB7fTtcbiAgICAgIG5ld0RhdFtcImRlbnNpdHlcIl0gPSBkZW5zO1xuICAgICAgbmV3RGF0W1wid29yZHNcIl0gPSB3cmRzO1xuICAgICAgbmV3RGF0W1wiY291bnRcIl0gPSB0aW1lcztcbiAgICAgIGNvbnNvbGUubG9nKG5ld0RhdCk7XG4gICAgICBzZXREYXRhKG5ld0RhdCk7XG4gICAgICBzZXRJc0RhdGEodHJ1ZSk7XG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldCgpIHtcbiAgICBsZXQgdGV4dCA9IENvb2tpZXMuZ2V0KFwid3Jkc1wiKTtcbiAgICBpZiAodGV4dCA9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGJ5dGVzID0gQ3J5cHRvSlMuQUVTLmRlY3J5cHQodGV4dC50b1N0cmluZygpLCBcIi8vc2Vjci9rISFcIik7XG4gICAgICB2YXIgcGxhaW50ZXh0ID0gYnl0ZXMudG9TdHJpbmcoQ3J5cHRvSlMuZW5jLlV0ZjgpO1xuICAgICAgY29uc29sZS5sb2cocGxhaW50ZXh0KTtcbiAgICAgIHJldHVybiBwbGFpbnRleHQ7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gc2VhcmNoQWdhaW4oKSB7XG4gICAgc2V0SXNEYXRhKGZhbHNlKTtcbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIGRlY3J5cHQodGV4dCkge1xuICAgIHZhciBieXRlcyA9IENyeXB0b0pTLkFFUy5kZWNyeXB0KHRleHQudG9TdHJpbmcoKSwgXCIvL3NlY3IvayEhXCIpO1xuICAgIHZhciBwbGFpbnRleHQgPSBieXRlcy50b1N0cmluZyhDcnlwdG9KUy5lbmMuVXRmOCk7XG4gICAgcmV0dXJuIHBsYWludGV4dDtcbiAgfVxuICBpZiAoIWxvYWRpbmcgJiYgIWlzRGF0YSkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm91dGVyLXNlYXJjaC13cmFwXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5uZXItc2VhcmNoLXdyYXBcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC10aXRsZVwiPlxuICAgICAgICAgICAgPHN0cm9uZz5lbnRlciB5b3VyIGtleXdvcmQ8L3N0cm9uZz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaGJhci13cmFwXCI+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwia2V5d29yZC1pbnB1dFwiXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gZWRpdEtleXdvcmQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwic2VhcmNoLWJ1dHRvblwiIG9uQ2xpY2s9e3N1Yn0+XG4gICAgICAgICAgICAgIEdldCBNZXRyaWNzXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIHshIXdvcmRUb29NYW55ID8gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbGVydC1iYXJcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbm5lci1hbGVydFwiPlxuICAgICAgICAgICAgICAgIHlvdSBjYW4gb25seSBzZWFyY2ggYSBnaXZlbiBrZXl3b3JkIG9uY2UgZXZlcnkgMzAgbWlucy4uLiB0cnlcbiAgICAgICAgICAgICAgICBhbm90aGVyIGtleXdvcmRcbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICB7ISF0b29NYW55ID8gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbGVydC1iYXJcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbm5lci1hbGVydFwiPnRvbyBtYW55IHNlYXJjaGVzPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApIDogbnVsbH1cblxuICAgICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgICB7YFxuICAgICAgICAgICAgICBkaXYuYWxlcnQtYmFyIHtcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDIwMHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAxMnB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGRpdi5pbm5lci1zZWFyY2gtd3JhcCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZGl2Lm91dGVyLXNlYXJjaC13cmFwIHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBkaXYuc2VhcmNoLXRpdGxlIHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTRweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBidXR0b24uc2VhcmNoLWJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogOHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTIyYjJlO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDEuNXB4O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLnNlYXJjaC1idXR0b246aG92ZXIge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgICAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAxMnB4IDYwcHggMCAjZTIyYjJlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGRpdi5zZWFyY2hiYXItd3JhcCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlucHV0LmtleXdvcmQtaW5wdXQge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH1cbiAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH0gZWxzZSBpZiAoISFsb2FkaW5nKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3V0ZXItc2VhcmNoLXdyYXBcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbm5lci1zZWFyY2gtd3JhcFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoLXRpdGxlXCI+XG4gICAgICAgICAgICA8c3Ryb25nPlxuICAgICAgICAgICAgICBmZXRjaGluZyBkYXRhIGZvciB0b3AgNTAgcmVzdWx0cy4uLlxuICAgICAgICAgICAgICA8YnIgLz4gdGhpcyBjb3VsZCB0YWtlIGEgbWludXRlLlxuICAgICAgICAgICAgPC9zdHJvbmc+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkaW5nLXdyYXBcIj5cbiAgICAgICAgICAgIDxTcGlubmVyIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICAgIHtgXG4gICAgICAgICAgICAgIGRpdi5pbm5lci1zZWFyY2gtd3JhcCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZGl2Lm91dGVyLXNlYXJjaC13cmFwIHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBkaXYuc2VhcmNoLXRpdGxlIHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGJ1dHRvbi5zZWFyY2gtYnV0dG9uIHtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA4cHg7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlMjJiMmU7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMS41cHg7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuc2VhcmNoLWJ1dHRvbjpob3ZlciB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDEycHggNjBweCAwICNlMjJiMmU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZGl2LmxvYWRpbmctd3JhcCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlucHV0LmtleXdvcmQtaW5wdXQge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH1cbiAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3V0ZXItZGF0YS13cmFwXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXRhLXNlYXJjaC13cmFwXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC10aXRsZVwiPlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIHJlc3VsdHMgZm9yIDxzdHJvbmc+e2tleXdvcmR9PC9zdHJvbmc+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhdGEtd3JhcFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhdGEtcm93XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXRhLWRhdFwiPmt3IGRlbnNpdHk8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhdGEtZGF0LXJpZ2h0XCI+e2RhdGEuZGVuc2l0eX0lPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhdGEtcm93LTJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhdGEtZGF0XCI+YXZnIHdvcmRjb3VudDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGF0YS1kYXQtcmlnaHRcIj57ZGF0YS53b3Jkc308L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoLWFnYWluLXdyYXBcIj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJzZWFyY2gtYnV0dG9uXCIgb25DbGljaz17c2VhcmNoQWdhaW59PlxuICAgICAgICAgICAgICAgIHNlYXJjaCBhZ2FpblxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICB7YFxuICAgICAgICAgICAgZGl2LmRhdGEtd3JhcCB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgICAgICAgICAgICAgbWFyZ2luOiAxMnB4IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuc2VhcmNoLWFnYWluLXdyYXAge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGl2LmRhdGEtcm93IHtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkaXYuZGF0YS1yb3ctMiB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgICAgICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGl2LmRhdGEtZGF0IHtcbiAgICAgICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRpdi5kYXRhLWRhdC1yaWdodCB7XG4gICAgICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGl2LmRhdGEtc2VhcmNoLXdyYXAge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAub3V0ZXItZGF0YS13cmFwIHtcbiAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgbWluLXdpZHRoOiAzMDBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRpdi5zZWFyY2gtdGl0bGUge1xuICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnV0dG9uLnNlYXJjaC1idXR0b24ge1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDhweDtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTIyYjJlO1xuICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDEuNXB4O1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuc2VhcmNoLWJ1dHRvbjpob3ZlciB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgICAgICAgIGNvbG9yOiAjZTIyYjJlO1xuICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZTIyYjJlO1xuICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDRweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGl2LmxvYWRpbmctd3JhcCB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpbnB1dC5rZXl3b3JkLWlucHV0IHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iXX0= */\n/*@ sourceURL=/Users/manx/projects/keyword-density/frontend/components/main/Search.js */"));
  }
}

/***/ })

})
//# sourceMappingURL=index.js.e240a3b310b52468b922.hot-update.js.map