require('dotenv').config();
const fetch = require('node-fetch');
const apiKey = process.env.MXM_API_KEY;

module.exports.getArtistAlbums = async (artistId) => {
    const res = await fetch(`https://api.musixmatch.com/ws/1.1/artist.albums.get?apikey=${apiKey}&artist_id=${artistId}&g_album_name=1`);
    const data = await res.json();
    const albumList = data.message.body.album_list;
    return albumList;
};

module.exports.chooseAlbum = (albumList) => {
    const albumIds = albumList.map(albumObject => albumObject.album.album_id);
    const albumId = albumIds[Math.floor(Math.random() * albumIds.length)];
    return albumId;
};

module.exports.getTrackList = async (albumId) => {
    const res = await fetch(`https://api.musixmatch.com/ws/1.1/album.tracks.get?apikey=${apiKey}&album_id=${albumId}`);
    const data = await res.json();
    const trackList = data.message.body.track_list;
    return trackList;
};

module.exports.chooseTrack = (trackList) => {
    const trackIds = trackList.map(trackObject => trackObject.track.track_id);
    const trackId = trackIds[Math.floor(Math.random() * trackIds.length)];
    return trackId;
};

module.exports.getSnippet = async (trackId) => {
    const res = await fetch(`https://api.musixmatch.com/ws/1.1/track.snippet.get?track_id=${trackId}&apikey=${apiKey}`);
    const data = await res.json();
    const snippet = data.message.body.snippet.snippet_body;
    return snippet;
};

module.exports.verifySnippet = (snippet) => {
    if (!snippet || snippet[0] === undefined) {
        return false;
    } else {
        return true;
    }
};