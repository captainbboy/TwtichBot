require('dotenv').config();
const tmi = require('tmi.js');

const client = new tmi.Client({
	options: { debug: true },
	connection: {
		reconnect: true,
		secure: true
	},
	identity: {
		username: "captain_bboy",
		password: process.env.BOT_AUTH
	},
	channels: [ 'captain_bboy' ]
});

client.connect().catch(console.error);

client.on('message', (channel, tags, message, self) => {
	if(self) return;
	if(message.toLowerCase() === '!hello') {
		client.say(channel, `Hey @${tags.username}!`);
	}
});