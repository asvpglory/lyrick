require('dotenv').config();
const apiKey = process.env.API_KEY;

module.exports.getArtistAlbums = async (artistId) => {
    const res = await fetch(`https://api.musixmatch.com/ws/1.1/artist.albums.get?apikey=${apiKey}&artist_id=${artistId}&g_album_name=1`);
    const data = await res.json();
    const albumList = data.message.body.album_list;
    return albumList;
};

module.exports.chooseAlbumId = (albumList) => {
    const albumIds = albumList.map(albumObject => albumObject.album.album_id);
    const albumId = albumIds[Math.floor(Math.random() * albumIds.length)];
    return albumId;
};

module.exports.chooseTrackId = async (albumId) => {
    const res = await fetch(`https://api.musixmatch.com/ws/1.1/album.tracks.get?apikey=${apiKey}&album_id=${albumId}`);
    const data = await res.json();
    const trackList = data.message.body.track_list;
    return trackList;
};
