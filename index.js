const express = require("express");
const axios = require("axios");
const cheerio = require("cheerio");

const ILOKIVI_URL = "https://www.ilokivi.fi/ravintola/lounas";

const app = express();

app.get("/lunch/today", async (req, res) => {
  res.set("Content-Type", "application/json; charset=utf-8");

  try {
    const { data: htmlString } = await axios(ILOKIVI_URL);
    const $ = cheerio.load(htmlString, {
      decodeEntities: false
    });

    const day = $(".block-lunch-wrapper .col-lunch .lunch-box .head h3").text();
    const lunchContent = $(
      ".block-lunch-wrapper .col-lunch .lunch-box .content p"
    ).html();
    const lunchArray = lunchContent
      .trim()
      .replace(/\n/, "")
      .split("<br>");
    const lunches = lunchArray.map(lunch => {
      const [dish, allergens] = lunch.replace("</i>", "").split(" <i>");
      return { dish, allergens };
    });

    if (req.query.semmaFormat) {
      const LunchTime = $(".lunch-time").text();
      const now = new Date();
      const date = now.toISOString();

      const SetMenus = lunches.map(lunch => {
        return {
          Name: "LOUNAS",
          Price: "2,60",
          Components: [`${lunch.dish} (${lunch.allergens})`]
        };
      });

      res.json({
        RestaurantName: "Ravintola Ilokivi",
        MenusForDays: [
          {
            Date: date,
            LunchTime,
            SetMenus
          }
        ]
      });
    } else {
      res.json({
        day,
        lunches
      });
    }
  } catch (error) {
    console.log(error);
    res.json({
      error
    });
  }
});

app.listen(3000, () => {
  console.log();
});

module.exports = app;
