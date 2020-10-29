// var MongoClient = require("mongodb").MongoClient;
// const ObjectId = require("mongodb").ObjectID;
// const assert = require("assert");
// const url = "mongodb://127.0.0.1:27017/coffee";
// let db;

// MongoClient.connect(url, (err, database) => {
//   if (err) {
//     console.error("MongoDB 연결 실패", err);
//     return;
//   }
//   db = database;
// });

// const coffee = db.Collection("coffee");
// console.log(coffee);

// var mongoose = require("mongoose");
// mongoose.connect("mongodb://localhost:27017/coffee");
// var db = mongoose.connection;

// db.on("error", () => {
//   console.log("Connection Failed!");
// });

// db.once("open", () => {
//   console.log("Connected!");
// });
// import mongoose from "mongoose";

// mongoose.connect("mongodb://localhost:27017/coffee");
