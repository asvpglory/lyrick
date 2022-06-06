const { TwitterApi } = require('twitter-api-v2');
require('dotenv').config();

const client = new TwitterApi({
    appKey: process.env.TWITTER_API_KEY,
    appSecret: process.env.API_KEY_SECRET,
    accessToken: process.env.LYRICK_ACCESS,
    accessSecret: process.env.LYRICK_SECRET
});

async function tweet() {
    const { data: createdTweet } = await client.v2.tweet('twitter-api-v2 is awesome!', {
        poll: { duration_minutes: 120, options: ['Absolutely', 'For sure!'] },
    });
    console.log('Tweet', createdTweet.id, ':', createdTweet.text);
}

tweet();