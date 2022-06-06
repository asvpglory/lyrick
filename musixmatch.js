const { getArtistAlbums, chooseAlbum, getTrackList, chooseTrack, getSnippet, verifySnippet } = require('./modules');

module.exports = async () => {
    let validSnippet = false;
    while (!validSnippet) {
        const albumList = await getArtistAlbums(13928405);
        const albumId = chooseAlbum(albumList);
        const trackList = await getTrackList(albumId);
        const trackId = chooseTrack(trackList);
        const snippet = await getSnippet(trackId);
        if (verifySnippet(snippet)) {
            validSnippet = true;
            return snippet;
        }
    }
};