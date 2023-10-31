# DomainExpiry Project

## Description

DomainExpiry is a project in its planning stage that aims to create a tool using Node.js. The purpose of this tool is to check a list of domains for upcoming expiry and notify users via Discord messages when domains are due for renewal. This project will streamline the process of managing domain renewals, ensuring that important renewals are not missed.

## Features

- **Domain Expiry Checking:** The tool will check a list of domains for their expiry dates.
- **Notification via Discord:** Users will receive notifications via Discord messages when domains are due for renewal.
- **Customization:** Users can customize the list of domains to monitor and set notification preferences.

## Technologies

This project will be built using the following technologies:

- **Node.js:** The backend of the application will be developed using Node.js.
- **Discord API:** Discord API will be used to send notifications to users.
- **Domain Expiry API:** An API or library to fetch domain expiry information.

## Getting Started

To get started with the DomainExpiry project, follow these steps:

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/vpn/domainExpiry.git 
   ```

2. **Install Dependencies:**
    ```bash
    cd domainExpiry
    npm install
    ```

3. **Set Up Discord Integration:**
    - Create a Discord bot and obtain the API token.
    - Configure the Discord bot to have the necessary permissions to send messages in your desired server/channel.

4. **Configure Domain List:**
   - Create a list of domains to monitor in a configuration file (e.g., domains.txt).

5. **Run the Application:**
   ```bash 
   npm start
   ```

6. **Configuration**
   ```json
    {
        "discordToken": "YOUR_DISCORD_BOT_TOKEN",
        "domainListPath": "path/to/domains.txt"
    }
   ```
## Contributing
Contributions to the DomainExpiry project are welcome! If you want to contribute:

1. Fork the repository.
2. Create a new branch for your feature: git checkout -b feature-name
3. Commit your changes: git commit -m 'Add new feature'
4. Push to the branch: git push origin feature-name
5. Submit a pull request.
