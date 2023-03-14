import express from "express";
import cors from "cors";

import did from "./routes/did.js";
import config from "./config/index.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/dids", did);

app.all("*", (req, res) => {
  res.status(404).send({
    message: "Such endpoint does not exists",
  });
});

app
  .listen(config.PORT, async () => {
    console.log(`👌Express Server Running on PORT ${config.PORT}`);
  })
  .on("error", (err) => {
    console.error(err);
    process.exit(1);
  });
