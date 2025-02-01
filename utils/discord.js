require("dotenv").config()
const { WebhookClient } = require("discord.js")

function sendDiscordMessage(message) {
    const webhookURL = process.env.DISCORD_WEBHOOK_URL

    // Create a new WebhookClient with the provided webhook URL
    const webhookClient = new WebhookClient({ url: webhookURL })

    // Send the message to the Discord channel using the webhook
    webhookClient
        .send(message)
        .then(() => {
            console.log("Message sent successfully!")
            // Do something after the message is sent, if needed
        })
        .catch((error) => {
            console.error("Error sending message:", error)
            // Handle the error, if any
        })
}

module.exports = sendDiscordMessage
