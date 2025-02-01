const checkDomains = require("./utils/domain-loader")
const checkDomainExpiry = require("./utils/domain-expiry")

// Get the list of domains from the domains.txt file.
const domains = checkDomains("domains.txt")

// Print each domain to the console.
domains.forEach(async (domain) => {
    const expiryDate = await checkDomainExpiry(domain)

    if (expiryDate === null) {
        console.log(`Error checking ${domain}`)
        return
    }

    // Print the domain and its expiry date to the console.
    console.log(
        `Domain ${domain} expires on ${expiryDate.toLocaleString("en-GB", {
            timeZone: "UTC",
        })}`
    )
})
