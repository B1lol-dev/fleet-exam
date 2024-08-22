const TelegramBot = require('node-telegram-bot-api');

const token = '7268805670:AAGSj1dJN6WQoWjB6Ia4LAJMpsB2Uy8pstY';

const bot = new TelegramBot(token, { polling: true });

const forwardToUserId = 7007142829;

// Storage
let userMessages = {}; // { originalChatId: { forwardedMessageId, userChatId, userName } }

// /start
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Hi, write a message and we will try to solve it as quickly as possible');
});


bot.on('message', (msg) => {
  const chatId = msg.chat.id;

  if (msg.text) {
    if (chatId === forwardToUserId) {
      // If the message is from @b1lol_makaron
      const originalMessageData = Object.values(userMessages).find(data => data.forwardedMessageId === msg.reply_to_message?.message_id);
      if (originalMessageData) {
        bot.sendMessage(originalMessageData.userChatId, msg.text)
          .catch(err => console.error('Error sending response:', err));
      }
    } else {
      // If the message is not from @b1lol_makaron, send it
      const userName = msg.from.username || `${msg.from.first_name} ${msg.from.last_name}`;
      bot.sendMessage(forwardToUserId, `Message from ${userName}: ${msg.text}`)
        .then(sentMessage => {
          userMessages[chatId] = {
            forwardedMessageId: sentMessage.message_id,
            userChatId: chatId,
            userName: userName
          };
        })
        .catch(err => console.error('Error sending message:', err));
    }
  }
});

console.log('Running...');
