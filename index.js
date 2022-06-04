const { getArtistAlbums, chooseAlbumId, chooseTrackId } = require('./modules');

async function lyrick() {
    const albumList = await getArtistAlbums(13928405);
    const albumId = chooseAlbumId(albumList);
    const trackList = await chooseTrackId(albumId);
}

lyrick();