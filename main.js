const { Api, TelegramClient } = require('telegram');
const { StringSession } = require('telegram/sessions');
const dotenv = require('dotenv');
const input = require('input');

dotenv.config();

const API_ID = parseInt(process.env.API_ID);
const API_HASH = process.env.API_HASH;
const PHONE_NUMBER = process.env.PHONE_NUMBER;
const SESSION_STRING = process.env.SESSION_STRING;
const TARGET_CHANNEL = process.env.TARGET_CHANNEL; 
SOURCE_CHANNELS = process.env.SOURCE_CHANNELS.split(',')
keywords = process.env.KEYWORDS.split(',')

const client = new TelegramClient(new StringSession(SESSION_STRING), API_ID, API_HASH, { connectionRetries: 5 });

async function main() {
    console.log('Connecting to Telegram...');
    await client.start({
        phoneNumber: PHONE_NUMBER,
        onError: (err) => console.error('Error during client start:', err),
    });

    console.log('Bot is running...');

    client.addEventHandler(async (event) => {
        if (event.message) {
            const inputString = String(event.message.message).toLowerCase();
            const channel = await client.getEntity(event.message.peerId);
            const channelUsername = channel.username ? channel.username.toLowerCase() : null;

            if (channelUsername && SOURCE_CHANNELS.includes(channelUsername) && keywords.some(keyword => inputString.includes(keyword))) {
                try {
                    await client.sendMessage(TARGET_CHANNEL, { message: inputString });
                } catch (err) {
                    console.error('Error forwarding message:', err);
                }
            }
        }
    });
}

main().catch(console.error);