const checkDomains = require("./utils/domain-loader")

// Get the list of domains from the domains.txt file.
const domains = checkDomains("domains.txt")

// Print each domain to the console.
domains.forEach((domain) => {
    console.log(domain)
})
