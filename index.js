/**
 * 💫Butterfly🦋 Sizu💟 Messenger Bot
 * Owner: Maruf Billah | Credit: Butterfly Sizu💟🦋 & Maruf System💫
 */

const express = require('express');
const app = express();
const config = require('./config');

app.use(express.json());

app.get('/', (req, res) => {
  res.send('💫Butterfly🦋 Sizu💟 Bot is Live! (Owner: Maruf Billah)');
});

// Event handler example (message)
const messageEvent = require('./events/message');
app.post('/webhook', (req, res) => {
  messageEvent(req, res);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`💫Butterfly🦋 Sizu💟 is running on port ${PORT}`);
});
