import express from "express";
import cors from "cors";
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Coffee server is getting ready");
});

app.listen(port, () => {
  console.log(`coffee server is running on port ${port}`);
});
