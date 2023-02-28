import express from "express";
import morgan from "morgan";

const PORT = 4000;

const app = express();

const logger = morgan("dev");

app.use(logger);

const handleListening = () => {
  console.log(`✅ MarsTube server listening on port: ${PORT}🚀`);
};

app.listen(PORT, handleListening);
