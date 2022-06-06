const { TwitterApi } = require('twitter-api-v2');
require('dotenv').config();
const lyrick = require('./index');

const client = new TwitterApi({
    appKey: process.env.TWITTER_API_KEY,
    appSecret: process.env.API_KEY_SECRET,
    accessToken: process.env.LYRICK_ACCESS,
    accessSecret: process.env.LYRICK_SECRET
});

async function tweet() {
    const snippet = await lyrick();
    // console.log(snippet);
    // const { data: createdTweet } = await client.v2.tweet('Hello');
    // console.log('Tweet', createdTweet.id, ':', createdTweet.text);
    return snippet;
}

tweet().then((res) => console.log(res));