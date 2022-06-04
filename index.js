const { getArtistAlbums, chooseAlbum } = require('./modules');

async function lyrick() {
    const albumList = await getArtistAlbums(118);
    console.log(albumList);
}

lyrick();

