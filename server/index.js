const express = require("express");
const cors = require("cors"); //for connecting two differnt hosts at once => frontend + backend
const dotenv = require("dotenv"); //allows use of environment variables inside backend and secret keys from the public
dotenv.config();
const Router = require("./Routes/authRoutes");
const mongoose = require("mongoose");


mongoose.connect(process.env.MONGO_BASE_URL)
.then(()=> console.log("databse connected"))
.catch((err)=> console.log("databse disconnected", err));


// const app = express();
const app = express();

app.use(cors());

app.use("/", Router);

const port = 8000;
app.listen(port, () => {
  console.log(`listening on port http://localhost:${port}`);
});
