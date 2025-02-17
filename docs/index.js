const fs = require("fs");
const path = require("path");

const basePath = path.join(__dirname, "swaggerBase.json");
const authPath = path.join(__dirname, "authDocs.json");

// Read JSON files
const base = JSON.parse(fs.readFileSync(basePath, "utf8"));
const authDocs = JSON.parse(fs.readFileSync(authPath, "utf8"));

// Merge Paths
base.paths = { ...authDocs };

// Export the merged Swagger JSON
module.exports = base;
