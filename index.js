const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 3000;

const db = require("./config/db");
db.then(() => {
  console.log("Database connected...");
}).catch(() => {
  console.log("Failed connect database");
});

const rootRouter = require("./routes/index");

const app = express();
app.use(cors());
app.use(express.json());

app.use(rootRouter);

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
