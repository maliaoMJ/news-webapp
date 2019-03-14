const path = require("path");
const express = require("express");
const fs = require("fs");
const app = express();
app.use(express.static(path.join(__dirname, "dist")));
app.use(function(req, res) {
  fs.readFile(
    path.join(__dirname, "dist/index.html"),
    "utf-8",
    (err, content) => {
      if (err) {
        console.log('We Cannot open "dist/index.html" file.');
      }
      res.writeHead(200, {
        "Content-Type": "text/html; charset=utf-8"
      });
      res.end(content);
    }
  );
});
app.listen("3107", function() {
  console.log("启动服务器完成");
});
