import http from "http";

const hostname = "127.0.0.1";
const port = 3000;
const server = http.createServer((req, res) => {
  let body = "";
  res.setHeader("Content-Type", "text/plain");
  res.statusCode = 200;
  req.on("data", (chunk) => {
    body += chunk;
  });
  req.on("end", () => {
    console.log(body);
    res.end("End received");
  });
  req.on("error", () => {
    console.log("Error received");
    res.end("Error received");
  });
  req.on("close", () =>{
    console.log("Connection closed");
    res.end("Close received");
  });
  req.on("pause", () =>{
    console.log("Connection paused");
  });
  req.on("readable", () =>{
    console.log("readable", req.read());
  });
  req.on("resume", () =>{
    console.log("resume");
  });

});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
