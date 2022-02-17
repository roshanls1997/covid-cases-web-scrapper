const puppeteer = require("puppeteer");

const getStateWiseStats = async () => {
  const results = [];
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://www.mohfw.gov.in/");
  await page.waitForTimeout(2000);

  const tr = await page.evaluate(() => {
    const a = document.querySelectorAll(
      "#state-data > div > div > div > div > table > tbody > tr > td"
    ).textContent;
    console.log("a", a);
    return a;
  });

  console.log("tr:", tr);
  await browser.close();

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
