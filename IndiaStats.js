const { convertTheDataForIndiaLevel } = require("./utils");

const getIndiaStatData = (cheerio$) => {
  const siteStats = cheerio$(".site-stats-count");
  const siteStatsUl = siteStats.find("ul");
  const siteStatsLi = siteStatsUl.find("li");
  let obj = {
    state: "India",
    duringDayDeaths: null,
    reconciledDeaths: null,
  };
  const keyMaps = {
    active: ["totalActive", "dayChangeActive"],
    discharged: ["totalCured", "dayChangeCured"],
    deaths: ["totalDeaths", "secondaryTotalDeaths"],
  };
  siteStatsLi.each((_, li) => {
    const LiChildren = cheerio$(li).find(".mob-hide");
    const key = cheerio$(LiChildren[0]).text().trim().toLowerCase();
    const vals = convertTheDataForIndiaLevel(cheerio$(LiChildren[1]).text());
    obj = {
      ...obj,
      [`${keyMaps[key][0]}`]: Number(vals[0]),
      [`${keyMaps[key][1]}`]: Number(vals[1]),
    };
  });
  return obj;
};

module.exports = {
  getIndiaStatData,
};
