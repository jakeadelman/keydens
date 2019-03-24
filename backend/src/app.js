var google = require("google");
let sanitizeHtml = require("sanitize-html");
let Countable = require("countable");

google.resultsPerPage = 25;
var nextCounter = 0;
let density = require("density");
let density2 = require("density");
// import { fetchHtml } from "./functions";
let request = require("request");
let str = "node";
let totalDensity = 0;
let totalNum = 0;
let totalWords = 0;
let totalCount = 0;
let withoutKeyword = 0;

export const getResults = str => {
  return new Promise(resolve => {
    google(str, async function(err, res) {
      if (err) console.error(err);
      let link;
      let words = WordCount(str);

      for (var i = 0; i < res.links.length; ++i) {
        link = res.links[i].link;
        let cleaned = await fetchAndClean(link);
        if (cleaned != false) {
          let count = (cleaned.match(new RegExp(str, "gi")) || []).length;
          let theDensity;
          // let densy = density(cleaned).setOptions({ minKeywordLength: 5 });
          // densy = densy.getDensity();
          // // console.log(densy);
          // for (let i = 0; i < 50 && i < densy.length; i++) {
          //   let yes = wordDens[densy[i].word];
          //   // console.log(yes);
          //   if (yes == undefined) {
          //     wordDens[densy[i].word] = densy[i].count.toString();
          //   } else {
          //     wordDens[densy[i].word] = (
          //       parseInt(wordDens[densy[i].word]) + densy[i].count
          //     ).toString();
          //   }
          // }
          // console.log(wordDens);
          if (count == 0) {
            withoutKeyword += 1;
          }

          getCount(cleaned).then(counter => {
            theDensity = (count / (counter.words - count * (words - 1))) * 100;
            console.log(counter.words, count, words, theDensity, totalDensity);
            // console.log(counter);
            totalDensity += theDensity;
            totalWords += counter.words;
            totalCount += count;
            totalNum += 1;
            console.log(totalDensity, totalNum, i, link);
          });
          // }
        }
      }

      if (nextCounter < 1) {
        nextCounter += 1;
        if (res.next) res.next();
      } else {
        let dens = totalDensity / totalNum;
        let wrds = totalWords / totalNum;
        let cnt = totalCount / totalNum;
        console.log(cnt);
        totalDensity = 0;
        totalNum = 0;
        nextCounter = 0;
        totalWords = 0;
        totalCount = 0;
        // withoutKeyword = 0;
        // let topDict = {}
        // for(let key in Object.keys(wordDens)){
        //   let newVal = wordDens[key];
        //   for(let i=0; i<10;i++){
        //     let val = topDict[i.toString()]
        //     if(newVal>= val)
        //   }
        //   /* use key/value for intended purpose */
        // }

        let res = {
          density: dens,
          words: wrds
        };
        withoutKeyword = 0;
        resolve(res);
      }
    });
  });
};

const fetchAndClean = link => {
  return new Promise(async (resolve, reject) => {
    if (link) {
      request({ uri: link }, function(error, response, body) {
        if (error) {
          resolve(false);
        }
        let clean = sanitizeHtml(body, {
          allowedTags: ["b", "i", "em", "strong"],
          allowedClasses: {
            p: ["fancy", "simple"]
          }
        });
        resolve(clean);
      });
    } else {
      resolve(false);
    }
  });
};

const getCount = cleanedHtml => {
  return new Promise(async resolve => {
    Countable.count(cleanedHtml, counter => resolve(counter));
  });
};

function WordCount(str) {
  return str.split(" ").length;
}
