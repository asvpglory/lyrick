
module.exports.getArtistAlbums = async (artistId) => {
    const apiKey = process.env.API_KEY;
    const res = await fetch(`https://api.musixmatch.com/ws/1.1/artist.albums.get?apikey=${apiKey}&artist_id=${artistId}&g_album_name=1`);
    const data = await res.json();
    const albumList = data.message.body.album_list;
    return albumList;
};

module.exports.chooseAlbum = async (albumList) => {
    console.log(albumList);
};
