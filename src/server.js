import express from "express";

const PORT = 4000;

const app = express();

const handleListening = () => {
  console.log(`✅ MarsTube server listening on port: ${PORT}🚀`);
};

app.listen(PORT, handleListening);
