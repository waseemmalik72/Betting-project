import express from "express";
import path from "path";
import "dotenv/config";
import cors from "cors";

const app = express();
const port = 3000;
const __dirname = path.resolve();

app.use(cors());
app.use(express.json());

//All Routes Import Here
import liveSport from "./routes/livesport.mjs";
import cricket from "./routes/cricket.mjs";

//All Routes Middleware Here
app.use("/api/v1", cricket);
app.use("/api/v1", liveSport);

//Static File here
app.use(express.static(path.join(__dirname, "public")));

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
