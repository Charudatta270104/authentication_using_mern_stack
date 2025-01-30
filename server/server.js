const express = require("express");

const app = express();
const PORT = 4000;

//middlewares
app.use(express.json());

//routes
app.get("/", (req, res) => {
  res.send("Hello User API is Working");
});

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
