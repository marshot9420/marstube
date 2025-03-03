import mongoose from "mongoose";

mongoose.connect("mongodb://127.0.0.1:27017/marstube");

const database = mongoose.connection;

const handleSuccessDatabaseConnection = () =>
  console.log("✅ 데이터베이스 연결");
const handleFailDatabaseConnection = (error) =>
  console.log("❌ 데이터베이스 연결 실패: ", error);

database.once("open", handleSuccessDatabaseConnection);
database.on("error", handleFailDatabaseConnection);
