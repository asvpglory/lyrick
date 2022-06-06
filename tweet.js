const { TwitterApi } = require('twitter-api-v2');
require('dotenv').config();

const client = new TwitterApi({
    appKey: process.env.TWITTER_API_KEY,
    appSecret: process.env.API_KEY_SECRET,
    accessToken: process.env.LYRICK_ACCESS,
    accessSecret: process.env.LYRICK_SECRET
});

module.exports = async (text) => {
    const { data: createdTweet } = await client.v2.tweet(text);
    console.log('Tweet', createdTweet.id, ':', createdTweet.text);
    return createdTweet;
};
