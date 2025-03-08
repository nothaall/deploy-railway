const TelegramBot = require('node-telegram-bot-api');

const { getItems } = require('./parsing.js');

const TELEGRAM_BOT_TOKEN = '7917289090:AAFqCO5N5z9eQbnnJo9blwlhWPC6pFVJvG4';

const bot = new TelegramBot(
    TELEGRAM_BOT_TOKEN,
    { polling: true }
);

const getData = async (n, chatId) => {
    const date = Date.now();
    const promise = await fetch(`https://odds.stagbet.site/v1/events/${n}/0/sub/2000/line/ru`, {
        "method": "GET",
        "headers": {
            "Package": "testbeapidemokey"
        },
        signal
    });
    console.log(Date.now() - date);

    await bot.sendMessage(chatId, Date.now() - date);

    return promise;
};

bot.onText(/\/start (.+)/, async (message, match) => {
    const sports_ids = [1, 2, 3, 4, 6, 10, 86, 97];

    while (true) {
        for (let index = 0; index < sports_ids.length; index++) {
            const sport_id = sports_ids[index];

            getData(sport_id, message.chat.id);

            await new Promise(resolve => setTimeout(resolve, 100));
        }
    }
});
