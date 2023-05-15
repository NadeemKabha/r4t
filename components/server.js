const http = require("http");
const fs = require("fs");

const hostname = ""; // IP
const port = 3000;

const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/data") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    const data = fs.readFileSync("./data.json");
    res.end(data);
  
  }else if  (req.method === "GET" && req.url === "/olddata") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    const data = fs.readFileSync("./oldData.json");
    res.end(data);
  } else if (req.method === "POST" && req.url === "/olddata") {
    let body = "";
    req.on("olddata", (chunk) => {
      body += chunk.toString();
    });
    req.on("end", () => {
      const updatedData = JSON.parse(body);
      const data = fs.readFileSync("./oldData.json");
      const currentData = JSON.parse(data);
      const newData = Object.assign({}, currentData, updatedData);
      fs.writeFileSync("./oldData.json", JSON.stringify(newData));
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify(newData));
    });
  } else {
    res.statusCode = 404;
    res.end();
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
