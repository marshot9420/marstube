import "dotenv/config";
import "./database";

import app from "./server";

const HOST = process.env.HOST || "http://localhost";
const PORT = process.env.PORT || 4000;

const handleServerListening = () =>
  console.log(`✅ 서버 수신 중 - ${HOST}:${PORT}`);

app.listen(PORT, handleServerListening);
