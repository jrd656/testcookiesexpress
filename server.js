const express = require("express");
const app = express();
const cors = require("cors");

//middleware
var whitelist = [
  'http://localhost:3000',
  'https://testsafaricookies.web.app/',
]

const corsOptions = {
  origin: function (origin,
    callback) {
    console.log("origin", origin);
    if (whitelist.indexOf(origin) !== -1) {
      console.log("matched origin", origin);
      callback(null,
        true)
    } else {
      callback(new Error('Origin not allowed by CORS - ', origin))
    }
  },
  methods: "GET,HEAD,POST,PATCH,DELETE,OPTIONS",
  credentials: true,
  allowedHeaders: "Content-Type, Authorization, X-Requested-With, Accept, xsrf-token, jwt_token",
}

app.use(cors(corsOptions));
app.use(express.json());

//routes

app.use("/authentication", require("./routes/jwtAuth"));

app.use("/dashboard", require("./routes/dashboard"));

app.listen(5000, () => {
  console.log(`Server is starting on port 5000`);
});
