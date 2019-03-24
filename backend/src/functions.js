const ineed = require("ineed");

export const fetchHtml = url => {
  return new Promise(async (resolve, reject) => {
    if (url.includes("https")) {
      await ineed.collect.from({ url: url }, function(err, response, result) {
        console.log(result);
        resolve(result);
      });
    } else resolve(false);
  });
};

// fetchHtml("https://google.com");
// module.exports = fetchHtml;
