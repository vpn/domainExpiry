function checkDomains(domainsFile) {
    // Read the text file containing the list of domains.
    const domains = process.env.DOMAINS

    // Split the text file into an array of domains.
    const domainsArray = domains.split(",")
    // remove \r from the end of each domain
    domainsArray.forEach((domain, index) => {
        domainsArray[index] = domain.replace("\r", "")
    })
    console.log(`Loaded ${domainsArray.length} domains from .env file`)
    console.log(domainsArray)

    // Return the array of domains.
    return domainsArray
}

module.exports = checkDomains
