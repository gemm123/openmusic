/* eslint-disable camelcase */
const mapDBToModelAlbum = ({
    id,
    name,
    year,
    created_at,
    updated_at,
}) => ({
    id,
    name,
    year,
    createdAt: created_at,
    updatedAt: updated_at,
});

const mapDBToModelSong = ({
    id,
    title,
    year,
    genre,
    performer,
    duration,
    albumId,
    created_at,
    updated_at,
}) => ({
    id,
    title,
    year,
    genre,
    performer,
    duration,
    albumId,
    createdAt: created_at,
    updatedAt: updated_at,
});

const mapDBToModelPlaylist = ({
    id,
    name,
    owner,
}) => ({
    id,
    name,
    username: owner,
});

const mapDBToModelPlaylistSongs = ({
    id,
    title,
    performer,
}) => ({
    id,
    title,
    performer,
});

module.exports = {
    mapDBToModelAlbum, mapDBToModelSong, mapDBToModelPlaylist, mapDBToModelPlaylistSongs,
};