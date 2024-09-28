const { TelegramClient } = require('telegram');
const { StringSession } = require('telegram/sessions');
const dotenv = require('dotenv');

dotenv.config();

const API_ID = parseInt(process.env.API_ID);
const API_HASH = process.env.API_HASH;
const PHONE_NUMBER = process.env.PHONE_NUMBER;

async function main() {
   const stringSession = new StringSession('');
   const client = new TelegramClient(stringSession, API_ID, API_HASH, {
      connectionRetries: 5,
   });

   await client.start({
      phoneNumber: PHONE_NUMBER,
      phoneCode: async () => {
         const code = await prompt('Please enter the code you received: ');
         return code;
      },
      onError: (err) => console.log(err),
   });

   console.log('Session string:', client.session.save());

   return;
}

function prompt(query) {
   return new Promise((resolve) => {
      process.stdout.write(query);
      process.stdin.on('data', (data) => {
         resolve(data.toString().trim());
      });
   });
}

main().catch(console.error);