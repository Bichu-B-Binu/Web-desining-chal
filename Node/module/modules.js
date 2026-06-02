// console.log("Hi");
// console.log(clc.blue("This is red text"));

// const fs = require("fs");

// fs.readFile("module\node_modules\bson\index.js", "utf8", (err, data) => {
//     if (err) throw err;
//     console.log(data);
// });

// const fs = require("fs");

// fs.readFile("data.txt", "utf8", (err, data) => {
//     if (err) throw err;
//     console.log(data);
// });

// const fs = require("fs");

// fs.writeFile("test.txt", "Hello Node.js", (err) => {
//     if (err) throw err;
//     console.log("File written successfully");
// });

// fs.readFile("test.txt", "utf8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// fs.appendFile("data.txt", "\nNew line added", (err) => {
//     if (err) throw err;
//     console.log("Data appended");
// });

// fs.writeFile("sync.txt", "This is synchronous file writing");

// const data = fs.readFile("sync.txt", "utf8");
// console.log(data);/

// console.log("This is the end of the file");
// console.log("This is the end of the file");

// import fs from "fs";

// fs.writeFileSync("sync.txt", "This is synchronous file writing");

// const data = fs.readFileSync("sync.txt", "utf8");
// console.log(data);

// fs.writeFile("syncs.txt", "This is synchronous file writing", (err) => {
//   if (err) throw err;
//   console.log("File written successfully");
// });
//  fs.readFile("syncs.txt", "utf8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });
// fs.appendFile("syncs.txt", "\nNew note added", (err) => {
//     if (err) {
//         console.log(err);
//         return;
//     }

//     console.log("Data appended successfully");
// });

// Create a new directory
// fs.mkdir("myFolder", (err) => {
//   if (err) {
//     console.log("Error creating directory:", err);
//     return;
//   }

//   console.log("Directory created successfully");

//   // Read contents of current directory
// });
// fs.readdir(".", (err, files) => {
//   if (err) {
//     console.log("Error reading directory:", err);
//     return;
//   }

//   console.log("Files and folders:");

//   files.forEach((file) => {
//     console.log(file);
//   });
// });

// import path from "path";

// const absPath = path.resolve("folder", "file.txt");

// console.log(absPath);

// console.log(path.basename("/home/user/file.txt"));
// console.log(path.dirname("/home/user/file.txt"));
// import fs from "fs";

// const numbers = [2, 7, 11, 15];

// var twoSum = function (nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         return [i, j];
//       }
//     }
//   }
// };

// twoSum(numbers, 9);

// import path from "path";

// const filePath = path.join("documents", "notes", "file.txt");

// console.log(filePath);
// const path = require("path");

// const filePath = "/home/user/documents/report.pdf";

// const fileName = path.basename(filePath);

// console.log(fileName);

// const fileName2 = path.basename(filePath, ".pdf");

// console.log(fileName2);

// const dirName = path.dirname(filePath);

// console.log(dirName);

// const filePath2 = "C:\\Users\\Bichu\\Desktop\\notes.txt";

// const dirName2 = path.dirname(filePath2);

// console.log(dirName2);

// const absolutePath = path.resolve("users", "bichu", "documents", "file.txt");

// console.log(absolutePath);

// const resolvedPath = path.resolve("src", "../public", "index.html");

// console.log(resolvedPath);
// import path from "path";
// import fs from "fs";

// const paths = path.join( "myfolder", "file.txt");
// console.log(paths);

// const hello = "Hello Node.js!!!!!!!!!!!!!!!!!";
// fs.writeFile(paths, hello, (err) => {
//     if (err) {
//         console.log(err);
//         return;
//     }

//     console.log("File created successfully");
// });

// const filePathss = path.join("module", "modules.js");

// console.log(filePathss);

// const badPath = "users//bichu/../documents///file.txt";

// const cleanPath = path.normalize(badPath);

// console.log(cleanPath);
// console.log("This is the end of the file");

import http from "http";
// import url from "url";
// const server = http.createServer((req, res) => {
//   const RequestUrl = url.parse(req.url, true).pathname;

//   console.log("URL:", req.url);
//   if (RequestUrl === "/") {
//     res.write("Welcome to the Home Page");
//     res.end();
//   } else if (RequestUrl === "/about") {
//     res.write("This is the About Page");
//     res.end();
//   } else if (RequestUrl === "/contact") {
//     res.write("This is the Contact Page");
//     res.end();
//   }
// });

// server.listen(3000, () => {
//   console.log("Server is running on http://localhost:3000");
// });
// const server = http.createServer((req, res) => {
//   console.log(req.url);
//   console.log(req.method);

//   res.end("Request received");
//   res.setHeader("Content-Type", "text/plain");
// });

// server.listen(3000);
const server = http.createServer((req, res) => {
    console.log("Requested URL:", req.url);

    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");

    res.end("Hello, World!");
});

server.listen(3000, () => {
    console.log("Server running on port 3000");
});