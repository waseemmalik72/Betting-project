import express from "express";
import axios from "axios";

const BETTING_API_KEY = process.env.BETTING_API_KEY;
const baseURL = process.env.baseURL;
const big_bash_key = "cricket_big_bash";
const cricket_odi_key = "cricket_odi";
const router = express.Router();

router.get("/sports/live", async (req, res, next) => {
  try {
    const bigBashResponse = await axios.get(
      `${baseURL}/${big_bash_key}/odds/`,
      {
        params: {
          apiKey: BETTING_API_KEY,
          regions: "eu",
          bookmakers: "betfair_ex_eu",
        },
      }
    );
    const cricketOdiResponse = await axios.get(
      `${baseURL}/${cricket_odi_key}/odds/`,
      {
        params: {
          apiKey: BETTING_API_KEY,
          regions: "eu",
          bookmakers: "betfair_ex_eu",
        },
      }
    );

    const mergeResponse = [...cricketOdiResponse.data, ...bigBashResponse.data];

    res.send(mergeResponse);
    // console.log(sportsResponse.data.length);
    console.log(bigBashResponse.headers);
    console.log(cricketOdiResponse.headers);
  } catch (err) {
    console.log(err);
  }
});

export default router;

// const currentTime = new Date("1/6/2024, 1:15:00 PM");
//     const formatCurrentTime = currentTime.toLocaleString();

//     sportsResponse.data.forEach((time) => {
//       const commenceTime = new Date(time.commence_time);
//       const option = {
//         timeZone: "Asia/Karachi",
//         year: "numeric",
//         month: "numeric",
//         day: "numeric",
//         hour: "numeric",
//         minute: "numeric",
//         second: "numeric",
//       };
//       const formatCommenceTime = new Intl.DateTimeFormat(
//         "en-US",
//         option
//       ).format(commenceTime);

//       if (formatCurrentTime === formatCommenceTime) {
//         console.log("hello world");
//       } else {
//         console.log("no hello world");
//       }

//       console.log(dateFormatting);
//     });
