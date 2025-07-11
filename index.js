// 💫Butterfly🦋 Sizu💟 Personal Messenger Bot
// Owner: Maruf Billah | Credit: Butterfly Sizu💟🦋 & Maruf System💫

const login = require('fca-unofficial');
const fs = require('fs');

const appState = JSON.parse(fs.readFileSync('fbstate.json', 'utf-8'));

login({ appState }, (err, api) => {
  if(err) {
    console.error("❌ Login error:", err);
    return;
  }
  console.log('💫Butterfly🦋 Sizu💟 Bot (Personal) is online!');

  api.listen((err, event) => {
    if(err) return console.error(err);

    // শুধু টেক্সট মেসেজে রিপ্লাই দেবে
    if(event.type === 'message' && event.body) {
      let msg = event.body.toLowerCase();
      let reply = '';

      // কাস্টম রিপ্লাই লজিক
      if(msg === 'hi' || msg === 'hello') {
        reply = 'Hello! 💫Butterfly🦋 Sizu💟 here (Owner: Maruf Billah)';
      } else if(msg === '/help') {
        reply = 'Available commands: hi, hello, /help';
      } else {
        reply = `আপনি লিখেছেন: ${event.body}`;
      }

      api.sendMessage(reply, event.threadID, (err) => {
        if(err) console.error("❌ Message send failed:", err);
      });
    }
  });
});
