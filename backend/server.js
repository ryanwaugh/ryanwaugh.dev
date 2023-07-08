//--------------------------------------//
//     IMPORTING REQUIRED PACKAGES      //
//--------------------------------------//
require("dotenv").config(); // Load environment variables from the .env file
const express = require("express"),
  path = require("path"),
  https = require("https"),
  fs = require("fs"),
  helmet = require("helmet"),
  compression = require("compression"),
  subdomain = require("express-subdomain"),
  xr_subdomain = require("./subdomains/xr/xr");

const app = express(); // Create the express app

//--------------------------------------//
//       SETTING UP SOME MIDDLEWARE     //
//--------------------------------------//
app.use(compression()); // Compress certain response bodies using gzip (makes site load quicker)
app.use(express.json()); // Allows express to recognize incoming request objects as JSON objects
app.use(express.urlencoded({ extended: true })); // Allows express to recognize incoming request objects as strings or arrays
app.use(
  helmet({
    contentSecurityPolicy: false,
    crossOriginOpenerPolicy: false,
    crossOriginResourcePolicy: { policy: "cross-origin" },
    crossOriginEmbedderPolicy: false,
  }),
);

//--------------------------------------//
//               ROUTING                //
//--------------------------------------//
app.use(subdomain("xr", xr_subdomain));
// Deliver everything in the /frontend folder as a static file
app.use(express.static(path.join(__dirname, "../frontend")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "../frontend/index.html"));
});

// For any other GET requests, send a 404 page
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/404.html"));
});

//--------------------------------------//
//        STARTING THE SERVER           //
//--------------------------------------//
const credentials = {
  // SSL certificate
  key: fs.readFileSync(process.env.SSL_PRIVATE_KEY),
  cert: fs.readFileSync(process.env.SSL_CERT),
};

const server = https.createServer(credentials, app);
const port = 443;

// Listen on a specific port
server.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
