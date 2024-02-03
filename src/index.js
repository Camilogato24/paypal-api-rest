import express from "express";
import route from "../src/routes/payments.route";
const app = express();
app.listen(3000);
console.log("server on port 3000")