import app from "./server";
import "./db";

const PORT = 4000;

const handleListening = () => {
  console.log(`✅ MarsTube server listening on port: ${PORT}🚀`);
};

app.listen(PORT, handleListening);
