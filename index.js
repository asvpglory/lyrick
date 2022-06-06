const tweet = require('./tweet');
const musixmatch = require('./musixmatch');

let snippet;
musixmatch()
    .then((res) => {
        snippet = res;
        return snippet;
    })
    .then((res) => {
        tweet(res);
    });
