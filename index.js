const fs = require("fs")

// Read the text file containing the list of domains
const domains = fs.readFileSync("domains.txt", "utf8").split("\n")

// Print the domains to the console
console.log("Domains found in the text file:")
domains.forEach((domain) => console.log(domain))
