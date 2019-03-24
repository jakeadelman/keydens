import { useState } from "react";
import axios from "axios";
import Spinner from "./Loader";
const Cookies = require("js-cookie");
var CryptoJS = require("crypto-js");

export default function Search() {
  const [keyword, editKeyword] = useState();
  const [tooMany, setTooMany] = useState(false);
  const [wordTooMany, setWordTooMany] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();
  const [isData, setIsData] = useState();

  async function sub() {
    setTooMany(false);
    setWordTooMany(false);
    let cookieExists = get();
    if (cookieExists == false) {
      let ciphertext = CryptoJS.AES.encrypt(keyword, "//secr/k!!");
      Cookies.set("wrds", ciphertext, { expires: 0.02083333333 });
      console.log("fetching");
      let formattedKw = keyword.split(" ").join("+");
      let getStr = "https://api.keydens.urldoctor.com/keyword/" + formattedKw;
      setLoading(true);
      fetch(getStr);
    } else {
      let kwArray = cookieExists.split("+");
      console.log(kwArray);
      for (let i = 0; i < kwArray.length; i++) {
        if (keyword == kwArray[i]) {
          console.log("word found");
          setWordTooMany(true);
          return;
        }
      }
      if (kwArray.length >= 5) {
        setTooMany(true);
        return;
      }

      let newText = cookieExists + "+" + keyword;
      let ciphertext = CryptoJS.AES.encrypt(newText, "//secr/k!!");
      Cookies.set("wrds", ciphertext, { expires: 0.02083333333 });
      setLoading(true);
      let formattedKw = keyword.split(" ").join("+");
      let getStr = "https://api.keydens.urldoctor.com/keyword/" + formattedKw;
      fetch(getStr);
    }
  }

  function fetch(getStr) {
    axios.get(getStr).then(response => {
      let dens = parseFloat(response.data.density);
      dens = dens.toFixed(2);
      dens = dens.toString();
      let wrds = parseInt(response.data.words);
      wrds = wrds.toString();
      let times = parseFloat(response.data.count);
      times = times.toFixed(2);
      times = times.toString();
      let newDat = {};
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
    let text = Cookies.get("wrds");
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

  async function decrypt(text) {
    var bytes = CryptoJS.AES.decrypt(text.toString(), "//secr/k!!");
    var plaintext = bytes.toString(CryptoJS.enc.Utf8);
    return plaintext;
  }
  if (!loading && !isData) {
    return (
      <div className="outer-search-wrap">
        <div className="inner-search-wrap">
          <div className="search-title">
            <strong>enter your keyword</strong>
          </div>
          <div className="searchbar-wrap">
            <input
              className="keyword-input"
              type="text"
              onChange={e => editKeyword(e.target.value)}
            />
            <button className="search-button" onClick={sub}>
              Get Metrics
            </button>
          </div>

          {!!wordTooMany ? (
            <div className="alert-bar">
              <div className="inner-alert">
                You can only search the same keyword once every 30 mins. Try
                another keyword.
              </div>
            </div>
          ) : null}
          {!!tooMany ? (
            <div className="alert-bar">
              <div className="inner-alert">
                You only have 5 searches every 30 mins. Please try again later.
              </div>
            </div>
          ) : null}

          <style jsx>
            {`
              div.alert-bar {
                max-width: 200px;
                font-size: 12px;
                padding: 5px;
                margin: 12px;
                border: 1px solid #e22b2e;
              }
              div.inner-search-wrap {
                display: flex;
                flex-direction: column;
                padding: 15px;
              }
              div.outer-search-wrap {
                padding: 10px;
                display: flex;
                flex-direction: column;
              }
              div.search-title {
                margin: auto;
                margin-bottom: 14px;
              }
              button.search-button {
                border-radius: 0;
                border: none;
                padding: 8px;
                font-size: 10px;
                background-color: #e22b2e;
                color: #fff;
                text-transform: uppercase;
                letter-spacing: 1.5px;
                font-weight: 700;
              }
              .search-button:hover {
                background: #fff;
                color: #000;
                box-shadow: 0 12px 60px 0 #e22b2e;
              }
              div.searchbar-wrap {
                display: flex;
                flex-direction: row;
              }
              input.keyword-input {
                font-size: 13px;
              }
            `}
          </style>
        </div>
      </div>
    );
  } else if (!!loading) {
    return (
      <div className="outer-search-wrap">
        <div className="inner-search-wrap">
          <div className="search-title">
            <strong>
              fetching data for top 50 results...
              <br /> this could take a minute.
            </strong>
          </div>
          <div className="loading-wrap">
            <Spinner />
          </div>
          <style jsx>
            {`
              div.inner-search-wrap {
                display: flex;
                flex-direction: column;
                padding: 15px;
              }
              div.outer-search-wrap {
                padding: 10px;
                display: flex;
                flex-direction: column;
              }
              div.search-title {
                margin: auto;
                margin-bottom: 10px;
                text-align: center;
                margin-bottom: 5px;
              }
              button.search-button {
                border-radius: 0;
                border: none;
                padding: 8px;
                font-size: 10px;
                background-color: #e22b2e;
                color: #fff;
                text-transform: uppercase;
                letter-spacing: 1.5px;
                font-weight: 700;
              }
              .search-button:hover {
                background: #fff;
                color: #000;
                box-shadow: 0 12px 60px 0 #e22b2e;
              }
              div.loading-wrap {
                display: flex;
                flex-direction: row;
              }
              input.keyword-input {
                font-size: 13px;
              }
            `}
          </style>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div className="outer-data-wrap">
          <div className="data-search-wrap">
            <div className="search-title">
              <div>
                results for <strong>{keyword}</strong>
              </div>
            </div>
            <div className="data-wrap">
              <div className="data-row">
                <div className="data-dat">kw density</div>
                <div className="data-dat-right">{data.density}%</div>
              </div>
              <div className="data-row-2">
                <div className="data-dat">avg wordcount</div>
                <div className="data-dat-right">{data.words}</div>
              </div>
            </div>
            <div className="search-again-wrap">
              <button className="search-button" onClick={searchAgain}>
                search again
              </button>
            </div>
          </div>
        </div>
        <style jsx>
          {`
            .sub-search-title {
              font-size: 10px;
            }
            div.data-wrap {
              display: flex;
              flex-direction: column;
              border: 1px solid rgba(0, 0, 0, 0.5);
              margin: 12px 0;
            }
            .search-again-wrap {
              display: flex;
            }
            div.data-row {
              display: flex;
              flex-direction: row;
              max-width: 100%;
              padding: 5px;
            }
            div.data-row-2 {
              display: flex;
              flex-direction: row;
              max-width: 100%;
              border-top: 1px solid rgba(0, 0, 0, 0.5);
              padding: 5px;
            }
            div.data-dat {
              width: 50%;
            }
            div.data-dat-right {
              width: 50%;
              text-align: right;
            }
            div.data-search-wrap {
              display: flex;
              flex-direction: column;
              padding: 15px;
              max-width: 100%;
            }
            .outer-data-wrap {
              padding: 10px;
              display: flex;
              flex-direction: column;
              min-width: 300px;
            }
            div.search-title {
              margin: auto;
              margin-bottom: 10px;
              text-align: center;
              margin-bottom: 5px;
            }
            button.search-button {
              border-radius: 0;
              border: none;
              padding: 8px;
              font-size: 10px;
              background-color: #e22b2e;
              color: #fff;
              text-transform: uppercase;
              letter-spacing: 1.5px;
              font-weight: 700;
              margin: auto;
            }
            .search-button:hover {
              background: #fff;
              color: #e22b2e;
              border: 1px solid #e22b2e;
              box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.4);
            }
            div.loading-wrap {
              display: flex;
              flex-direction: row;
            }
            input.keyword-input {
              font-size: 13px;
            }
          `}
        </style>
      </div>
    );
  }
}
