const cheerio = require("cherio");
const { default: axios } = require("axios");

const { getIndiaStatData } = require("./IndiaStats");
const { getStateWiseStats } = require("./StateWiseStats");
const urlToScrape = "https://www.mohfw.gov.in/";

(async function () {
  const { data } = await axios.get(urlToScrape); // add try catch later
  const $ = cheerio.load(data);

  const IndiaStat = getIndiaStatData($);
  const stateWiseState = getStateWiseStats($);
  // console.log("stateWiseState: ", stateWiseState, IndiaStat);
})();
