const TelegramBot = require('node-telegram-bot-api');

const { getItems } = require('./parsing.js');

const TELEGRAM_BOT_TOKEN = '7917289090:AAFqCO5N5z9eQbnnJo9blwlhWPC6pFVJvG4';

const bot = new TelegramBot(
    TELEGRAM_BOT_TOKEN,
    { polling: true }
);

bot.onText(/\/get_items (.+)/, async (message, match) => {
    const chatId = message.chat.id;

    const hashTag = match[1];

    const sections = await getItems(hashTag, 'eb8556fa40534a0aa949c91d3169a6bd');

    let count = 0;

    for (const section of sections) {
        if (section.layout_type.startsWith('two_by_two')) {
            for (const item of section.layout_content.fill_items) {
                await bot.sendMessage(chatId, `https://www.instagram.com/p/${item.media.code}/`);
                count++;
            }

            console.log(section);

            await bot.sendMessage(chatId, `https://www.instagram.com/p/${section.layout_content.two_by_two_item.channel.media.code}/`);
            count++;
        } else {
            for (const item of section.layout_content.medias) {
                await bot.sendMessage(chatId, `https://www.instagram.com/p/${item.media.code}/`);
                count++;
            }
        }
    }

    await bot.sendMessage(chatId, count);
  });