const { getArtistAlbums, chooseAlbum, getTrackList, chooseTrack, getSnippet, verifySnippet } = require('./modules');

async function lyrick() {
    // setInterval(async () => {
    //     const albumList = await getArtistAlbums(13928405);
    //     const albumId = chooseAlbum(albumList);
    //     const trackList = await getTrackList(albumId);
    //     const trackId = chooseTrack(trackList);
    //     const snippet = await getSnippet(trackId);
    //     if (verifySnippet(snippet)) {
    //         console.log(snippet);
    //     }
    // }, 2000);
    while (true) {
        const albumList = await getArtistAlbums(13928405);
        const albumId = chooseAlbum(albumList);
        const trackList = await getTrackList(albumId);
        const trackId = chooseTrack(trackList);
        const snippet = await getSnippet(trackId);

        if (verifySnippet(snippet)) {
            setTimeout(async () => {
                await console.log(snippet);
            }, 3000);
        }
    }
}

lyrick();