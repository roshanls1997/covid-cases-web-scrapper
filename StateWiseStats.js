const pretty = require("pretty");

const getStateWiseStats = (cheerio$) => {
  const results = [];

  //   const tableDiv = cheerio$(".data-table, .table-responsive");
  //   console.log("tableDic", tableDiv.length, tableDiv.children().length);

  const table = cheerio$("tbody > tr");
  console.log(
    pretty(cheerio$(table).text()),
    typeof cheerio$(table).children(),
    table.length
  );
  //   const tableBody = cheerio$(table).find("tbody").children();
  //   console.log(table.children().length);
  return results;
};

// {
//     state: "India",
//     totalActive: 697802,
//     dayChangeActive: 92987,
//     totalCured: 41331158,
//     dayChangeCured: 150407,
//     totalDeaths: 507177,
//     duringDayDeaths: null,
//     reconciledDeaths: null,
//     secondaryTotalDeaths: 657,
//   }

module.exports = {
  getStateWiseStats,
};
