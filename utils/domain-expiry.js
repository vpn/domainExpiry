async function checkDomainExpiry(domain) {
    //Mocked for now
    const expiryDate = generateRandomDateInNextYear()

    // Return the domain's expiry date.
    return expiryDate
}

function generateRandomDateInNextYear() {
    const nextYearStart = new Date(new Date().getFullYear() + 1, 0, 1)
    const nextYearEnd = new Date(new Date().getFullYear() + 1, 11, 31)
    const timeDiff = nextYearEnd.getTime() - nextYearStart.getTime()
    const randomTime = Math.random() * timeDiff
    const randomDate = new Date(nextYearStart.getTime() + randomTime)
    return randomDate
}

module.exports = checkDomainExpiry
