const fs = require("fs")

function checkDomains(domainsFile) {
    // Read the text file containing the list of domains.
    const domains = fs.readFileSync(domainsFile, "utf8")

    // Split the text file into an array of domains.
    const domainsArray = domains.split("\n")

    // Return the array of domains.
    return domainsArray
}

module.exports = checkDomains
