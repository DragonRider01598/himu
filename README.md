# Telegram Message Forwarder Bot

This project is a Telegram bot that forwards messages from specified source channels to a target channel when the message includes a certain number of keywords. It is built using the Telegram API, Node.js, and Express.

## Features

- Connects to Telegram and listens for messages in specified source channels.
- Forwards messages to a target channel if they contain at least three specified keywords.
- Runs as a simple Express web server.

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v14 or higher)
- npm (Node package manager)

## Installation

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd <repository-name>
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Create a `.env` file** in the root of your project with the following structure:

   ```env
   API_ID=<your_api_id>
   API_HASH=<your_api_hash>
   PHONE_NUMBER=<your_phone_number>
   SESSION_STRING=<your_session_string>
   TARGET_CHANNEL=<your_target_channel>
   SOURCE_CHANNELS=<source_channel_1>,<source_channel_2>
   KEYWORDS=<keyword1>,<keyword2>,<keyword3>
   PORT=3000
   ```

   Replace the placeholders with your actual values:

   - `API_ID`: Your Telegram API ID.
   - `API_HASH`: Your Telegram API hash.
   - `PHONE_NUMBER`: Your phone number associated with your Telegram account (including country code).
   - `SESSION_STRING`: Your session string generated from the Telegram client.
   - `TARGET_CHANNEL`: The id of the target recepient (will be an integer).
   - `SOURCE_CHANNELS`: Comma-separated usernames of source channels (e.g., `t.me/example_channel` -> `example_channel`) which are found in telegram links.
   - `KEYWORDS`: Comma-separated keywords that should trigger message forwarding.

   You may create API ID and hash on [telegram](https://my.telegram.org/) website, get the session string by running the util.js file and the target id by using other bots. 

## Running the Bot

To run the bot locally, execute the following command:

```bash
node util.js
```

You should see output that has the session string save it in the .env file.

```bash
node main.js
```
Now you should get an output indicating that the bot is connecting to Telegram and running.

## Deploying on Render

1. **Create a new web service on Render:**
   - Go to the [Render dashboard](https://dashboard.render.com/) and log in or sign up.
   - Click on "New" and select "Web Service."

2. **Configure your web service:**
   - Connect your GitHub account and select the repository for this project.
   - Choose a name for your service.
   - Set the build command to `npm install` and the start command to `node index.js`.
   - Set the environment to Node.js.

3. **Add environment variables:**
   - In the Render dashboard, go to the "Environment" section of your web service.
   - Add each key-value pair from your `.env` file as environment variables.

4. **Deploy the service:**
   - Click "Create Web Service" to deploy your bot. Render will build and start your service.

5. **Access your bot:**
   - Once the deployment is complete, your bot will be live and you can monitor it from the Render dashboard.

## Contributing

Feel free to submit issues or pull requests for improvements and features.