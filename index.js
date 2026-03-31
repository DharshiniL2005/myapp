const http = require("http");

http.createServer((req, res) => {
  res.write("Hello drlg 🚀 Your app is live!");
  res.end();
}).listen(3000, "0.0.0.0");

console.log("Server running on port 3000");
