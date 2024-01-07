import express from "express";
import axios from "axios";

// All Environment Variable Here
const BETTING_API_KEY = process.env.BETTING_API_KEY;
const baseURL = process.env.baseURL;

// All Sports Key here
const big_bash_key = "cricket_big_bash";
const cricket_odi_key = "cricket_odi";
const cricket_test_match_key = "cricket_test_match";
const cricket_asia_cup_key = "cricket_asia_cup";
const cricket_icc_world_cup_key = "cricket_icc_world_cup";
const cricket_international_t20_key = "cricket_international_t20";
const cricket_t20_blast_key = "cricket_t20_blast";
const cricket_ipl_key = "cricket_ipl";
const cricket_psl_key = "cricket_psl";

const router = express.Router();

// All Routes Define Here

router.get("/sports", async (req, res, next) => {
  try {
    const sportsResponse = await axios.get(`${baseURL}`, {
      params: {
        apiKey: BETTING_API_KEY,
        all: true,
      },
    });
    res.send(sportsResponse.data);
    console.log(sportsResponse.headers);
  } catch (err) {
    console.log(err);
  }
});

router.get("/sports/key/big_bash", async (req, res, next) => {
  try {
    const sportsResponse = await axios.get(`${baseURL}/${big_bash_key}/odds/`, {
      params: {
        apiKey: BETTING_API_KEY,
        regions: "eu",
        bookmakers: "betfair_ex_eu",
      },
    });

    res.send(sportsResponse.data);
    console.log(sportsResponse.headers);
  } catch (err) {
    console.log(err);
  }
});

router.get("/sports/key/cricket_odi", async (req, res, next) => {
  try {
    const sportsResponse = await axios.get(
      `${baseURL}/${cricket_odi_key}/odds/`,
      {
        params: {
          apiKey: BETTING_API_KEY,
          regions: "eu",
          bookmakers: "betfair_ex_eu",
        },
      }
    );

    res.send(sportsResponse.data);
    console.log(sportsResponse.data.length);
    console.log(sportsResponse.headers);
  } catch (err) {
    console.log(err);
  }
});

router.get("/sports/key/cricket_test_match", async (req, res, next) => {
  try {
    const sportsResponse = await axios.get(
      `${baseURL}/${cricket_test_match_key}/odds/`,
      {
        params: {
          apiKey: BETTING_API_KEY,
          regions: "eu",
          bookmakers: "betfair_ex_eu",
        },
      }
    );
    res.send(sportsResponse.data);
    // console.log(sportsResponse.data.length);
    console.log(sportsResponse.headers);
  } catch (err) {
    console.log(err);
  }
});

router.get("/sports/key/cricket_asia_cup", async (req, res, next) => {
  try {
    const sportsResponse = await axios.get(
      `${baseURL}/${cricket_asia_cup_key}/odds/`,
      {
        params: {
          apiKey: BETTING_API_KEY,
          regions: "eu",
          bookmakers: "betfair_ex_eu",
        },
      }
    );
    res.send(sportsResponse.data);
    // console.log(sportsResponse.data.length);
    console.log(sportsResponse.headers);
  } catch (err) {
    console.log(err);
  }
});

router.get("/sports/key/cricket_icc_world_cup", async (req, res, next) => {
  try {
    const sportsResponse = await axios.get(
      `${baseURL}/${cricket_icc_world_cup_key}/odds/`,
      {
        params: {
          apiKey: BETTING_API_KEY,
          regions: "eu",
          bookmakers: "betfair_ex_eu",
        },
      }
    );
    res.send(sportsResponse.data);
    // console.log(sportsResponse.data.length);
    console.log(sportsResponse.headers);
  } catch (err) {
    console.log(err);
  }
});

router.get("/sports/key/cricket_international_t20", async (req, res, next) => {
  try {
    const sportsResponse = await axios.get(
      `${baseURL}/${cricket_international_t20_key}/odds/`,
      {
        params: {
          apiKey: BETTING_API_KEY,
          regions: "eu",
          bookmakers: "betfair_ex_eu",
        },
      }
    );
    res.send(sportsResponse.data);
    // console.log(sportsResponse.data.length);
    console.log(sportsResponse.headers);
  } catch (err) {
    console.log(err);
  }
});

router.get("/sports/key/cricket_t20_blast", async (req, res, next) => {
  try {
    const sportsResponse = await axios.get(
      `${baseURL}/${cricket_t20_blast_key}/odds/`,
      {
        params: {
          apiKey: BETTING_API_KEY,
          regions: "eu",
          bookmakers: "betfair_ex_eu",
        },
      }
    );
    res.send(sportsResponse.data);
    // console.log(sportsResponse.data.length);
    console.log(sportsResponse.headers);
  } catch (err) {
    console.log(err);
  }
});

router.get("/sports/key/cricket_ipl", async (req, res, next) => {
  try {
    const sportsResponse = await axios.get(
      `${baseURL}/${cricket_ipl_key}/odds/`,
      {
        params: {
          apiKey: BETTING_API_KEY,
          regions: "eu",
          bookmakers: "betfair_ex_eu",
        },
      }
    );
    res.send(sportsResponse.data);
    // console.log(sportsResponse.data.length);
    console.log(sportsResponse.headers);
  } catch (err) {
    console.log(err);
  }
});

router.get("/sports/key/cricket_psl", async (req, res, next) => {
  try {
    const sportsResponse = await axios.get(
      `${baseURL}/${cricket_psl_key}/odds/`,
      {
        params: {
          apiKey: BETTING_API_KEY,
          regions: "eu",
          bookmakers: "betfair_ex_eu",
        },
      }
    );
    res.send(sportsResponse.data);
    // console.log(sportsResponse.data.length);
    console.log(sportsResponse.headers);
  } catch (err) {
    console.log(err);
  }
});

export default router;
