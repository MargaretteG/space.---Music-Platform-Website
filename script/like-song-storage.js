
    // Function to update the heart icon based on the liked status
function updateHeartIcon(songTitle, songImage, songArtist) {
    const heartIcons = document.querySelectorAll('.like-song-btn-icon');

    heartIcons.forEach(heart => {
        const title = heart.getAttribute('data-song-title');
        const artist = heart.getAttribute('data-song-artist');
        const image = heart.getAttribute('data-song-image');
        const likedSongs = JSON.parse(localStorage.getItem('likedSongs')) || [];
        const isLiked = likedSongs.some(song => song.title === title && song.image === image && song.artist === artist);

        if (title === songTitle && image === songImage && artist === songArtist) {
            if (isLiked) {
                heart.classList.remove('fa-regular');
                heart.classList.add('fa-solid', 'fa-heart');
            } else {
                heart.classList.remove('fa-solid');
                heart.classList.add('fa-regular', 'fa-heart');
            }
        }
    });
}

// Function to toggle like status
function addToLikedSongs(songTitle, songImage, songArtist) {
    const likedSongs = JSON.parse(localStorage.getItem('likedSongs')) || [];
    const songIndex = likedSongs.findIndex(song => song.title === songTitle && song.image === songImage && song.artist === songArtist);

    if (songIndex === -1) {
        // Add song to liked list
        likedSongs.push({ title: songTitle, image: songImage, artist: songArtist });
    } else {
        // Remove song from liked list
        likedSongs.splice(songIndex, 1);
    }

    localStorage.setItem('likedSongs', JSON.stringify(likedSongs));
    updateHeartIcon(songTitle, songImage, songArtist);
}

// Update all icons on page load
window.onload = function () {
    const heartIcons = document.querySelectorAll('.like-song-btn-icon');
    heartIcons.forEach(heart => {
        const songTitle = heart.getAttribute('data-song-title');
        const songImage = heart.getAttribute('data-song-image');
        const songArtist = heart.getAttribute('data-song-artist');
        updateHeartIcon(songTitle, songImage, songArtist);
    });
};



