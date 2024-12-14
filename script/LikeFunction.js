<script>
function addToLikedSongs(songTitle, songImage) {
    // Create a song object
    const song = {
        title: songTitle,
        image: songImage
    };

    // Get existing liked songs from local storage or create a new array
    let likedSongs = JSON.parse(localStorage.getItem('likedSongs')) || [];

    // Add the song to the array
    likedSongs.push(song);

    // Save the updated array back to local storage
    localStorage.setItem('likedSongs', JSON.stringify(likedSongs));

    // Optionally, redirect to liked-songs page
    window.location.href = 'liked-songs.html';
}
</script>
