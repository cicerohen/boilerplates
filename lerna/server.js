const express = require("express");
const http = require("http");
const path = require("path");
const app = express();

//Admin paths
app.use("/admin", express.static(path.join(__dirname, "packages/admin/build")));
app.get("/admin/*", (req, res) => {
  res.sendFile(path.join(__dirname, "packages/admin/build", "index.html"));
});

// App paths
app.use("/", express.static(path.join(__dirname, "packages/app/build")));
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "packages/app/build", "index.html"));
});

console.log("process.env.", process.env.PORT);

const port = process.env.PORT || "8080";

app.set("port", port);
const server = http.createServer(app);
server.listen(port, () => console.log(`Running on localhost:${port}`));
