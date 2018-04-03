var playlist = {'sublime':'what i got'}
function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  return playlist
  }
  updatePlaylist(playlist, "311", "Love Song")
  