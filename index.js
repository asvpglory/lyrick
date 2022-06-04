const { getArtistAlbums, chooseAlbum, getTrackList, chooseTrack, getSnippet, verifySnippet } = require('./modules');

async function lyrick() {
    setInterval(async () => {
        let validSnippet = false;
        while (!validSnippet) {
            const albumList = await getArtistAlbums(13928405);
            const albumId = chooseAlbum(albumList);
            const trackList = await getTrackList(albumId);
            const trackId = chooseTrack(trackList);
            const snippet = await getSnippet(trackId);
            if (verifySnippet(snippet)) {
                validSnippet = true;
                console.log(snippet);
            } else {
                console.log('undefined...');
            }
        }
    }, 2000);
}

lyrick();