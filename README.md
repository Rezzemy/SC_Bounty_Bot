SC Bounty Bot

The SC Bounty Bot is a specialized bot designed for the game Star Citizen. Its primary function is to facilitate the commissioning and viewing of bounties within the game. The bot is capable of handling bounty details such as RSI names and payment amounts, while ensuring that commissions are automatically deleted after 7 days to maintain data privacy and prevent clutter.
Installation

To install and run the SC Bounty Bot, follow these steps:

    Clone the repository from GitHub
    Navigate to the project directory: cd sc-bounty-bot
    Install the required dependencies: npm install
    Configure the bot settings by editing the config.js file and providing the necessary information, such as API keys, database connection details, and any other required parameters.
    Start the bot: npm start

Please note that the SC Bounty Bot requires Node.js version 12 or higher.
Usage

The SC Bounty Bot has two primary commands: commission and view.
Commissioning a Bounty

To commission a bounty, use the following command:

/commissionbounty <RSI_name> <payment_amount>

Replace <RSI_name> with the RSI (Roberts Space Industries) name of the target player and <payment_amount> with the desired payment amount for the bounty. The bot will create a new entry in the bounty database with the provided information.
Viewing Bounties

To view the existing bounties, use the following command:

/getbounty

This command will display a list of active bounties, including the RSI names and payment amounts.

Please note that the SC Bounty Bot only allows users to view and commission bounties. Any other functionality, such as bounty completion or deletion, is not supported to maintain simplicity and security.
Data Retention

The SC Bounty Bot automatically deletes bounty commissions after 7 days. This feature ensures that outdated bounties are removed from the system and prevents the accumulation of unnecessary data. Therefore, it is recommended to keep track of the bounties you have commissioned separately to avoid losing important information.
Contributing

Contributions to the SC Bounty Bot are welcome! If you have any suggestions, bug fixes, or improvements, please open an issue or submit a pull request on the GitHub repository. Be sure to follow the existing code style and provide detailed information about your changes.
License

The SC Bounty Bot is released under the MIT License. You are free to use, modify, and distribute the bot as per the terms of the license.
Disclaimer

The SC Bounty Bot is a third-party tool and is not affiliated with or endorsed by Cloud Imperium Games, the developers of Star Citizen. The bot is provided as-is, without any warranty or guarantee of its functionality or suitability for any specific purpose. Use the bot responsibly and at your own risk.
