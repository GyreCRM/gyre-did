import express from "express";
import cors from "cors";

import did from "./routes/did";
import config from "./config/index";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/dids", did);

/// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error("Not Found");
  err["status"] = 404;
  next(err);
});

/// error handlers
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    errors: {
      message: err.message,
    },
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
