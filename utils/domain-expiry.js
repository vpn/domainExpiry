const sendDiscordMessage = require("./discord.js")

async function getDomainWhois(domain) {
    const axios = require("axios")
    const apiKey = process.env.APIKEY

    if (apiKey === undefined) {
        console.error("APIKEY environment variable not set")
        return null
    }

    const options = {
        method: "GET",
        url: "https://whoisjsonapi.com/v1/" + domain,
        headers: {
            Authorization: "Bearer " + apiKey,
            "Content-type": "application/json",
        },
    }

    try {
        const response = await axios.request(options)
        // console.log(response.data)
        return response.data
    } catch (error) {
        console.error(error)
        return null
    }
}

async function checkDomainExpiry(domain) {
    const whois = await getDomainWhois(domain)
    if (whois === null) {
        console.log(`Error getting whois ${domain}`)
        return null
    }

    // console.log(whois)

    const expiryDate = new Date(whois.domain.expiration_date)

    const today = new Date()
    const daysToExpiry = getDaysBetween(today, expiryDate)

    if (daysToExpiry < 300) {
        console.log(`Domain ${domain} expires in ${daysToExpiry} days`)
        sendDiscordMessage(
            `Domain **${domain}** expires in **${daysToExpiry}** days <@&910131274788786191>`
        )
    }

    return expiryDate
}

function getDaysBetween(startDate, endDate) {
    const diffInMs = endDate.getTime() - startDate.getTime()
    const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24))
    return diffInDays
}

module.exports = checkDomainExpiry
