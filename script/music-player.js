
    let progress = document.getElementById("progress");
    let music = document.getElementById("music");
    let ctrlIcon = document.getElementById("ctrlIcon");

    music.onloadedmetadata = function(){
        progress.max = music.duration;
        progress.value = music.currentTime;
    }


    function playPause() {
    const ctrlIcon = document.getElementById("ctrlIcon"); 
    if (ctrlIcon.classList.contains("fa-pause")) {
        music.pause(); 
        ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.classList.add("fa-play");
    } else {
        music.play();
        ctrlIcon.classList.add("fa-pause");
        ctrlIcon.classList.remove("fa-play");
    }
}


    if(music.play()){
        setInterval(()=>{
            progress.value = music.currentTime;
        },500);
    }

    progress.onchange = function(){
        music.play();
        music.currentTime = progress.value;
        ctrlIcon.classList.add("fa-pause");
        ctrlIcon.classList.remove("fa-play");
    }


    
    window.addEventListener("scroll", function () {
        const navbar = document.getElementById("navbar");
        const player = document.getElementById("player");
        if (window.scrollY > 20) { 
            navbar.classList.add("scrolled");
            player.classList.add("scrolled")
            

        } else {
            navbar.style.backgroundColor = "transparent";
            navbar.style.color = "";
            navbar.classList.remove("scrolled");
            player.classList.remove("scrolled")
        }
    });

    function playSong(button) {
        // Get song details from data attributes
        const title = button.getAttribute('data-title');
        const artist = button.getAttribute('data-artist');
        const thumbnail = button.getAttribute('data-thumbnail');
        const audioSrc = button.getAttribute('data-audio');
        
        // Update bottom player elements
        document.getElementById('song-title').textContent = title;
        document.getElementById('song-artist').textContent = artist;
        document.querySelector('#player .song-thumbnail').src = thumbnail;
    
        const musicPlayer = document.getElementById('music');
        musicPlayer.src = audioSrc;
        musicPlayer.play();
    
        // Update play/pause button in bottom player
        const ctrlIcon = document.getElementById('ctrlIcon');
        ctrlIcon.classList.add('fa-pause');
        ctrlIcon.classList.remove('fa-play');
    
        // Optional: Pause other songs in the list
        const otherButtons = document.querySelectorAll('.play-pause-btn i');
        otherButtons.forEach(icon => {
            if (icon !== button.querySelector('i')) {
                icon.classList.add('fa-play');
                icon.classList.remove('fa-pause');
            }
        });
    
        // Update play/pause icon for the clicked button
        const buttonIcon = button.querySelector('i');
        buttonIcon.classList.remove('fa-play');
        buttonIcon.classList.add('fa-pause');
    }
    
    // Toggle play/pause in the bottom player
    function playPause() {
        const ctrlIcon = document.getElementById('ctrlIcon');
        const music = document.getElementById('music');
        if (ctrlIcon.classList.contains('fa-pause')) {
            music.pause();
            ctrlIcon.classList.remove('fa-pause');
            ctrlIcon.classList.add('fa-play');
        } else {
            music.play();
            ctrlIcon.classList.add('fa-pause');
            ctrlIcon.classList.remove('fa-play');
        }
    }
    window.addEventListener("scroll", function () {
        const navbar = document.getElementById("navbar");
        const player = document.getElementById("player");
        if (window.scrollY > 20) { 
            navbar.classList.add("scrolled");
            player.classList.add("scrolled")
            

        } else {
            navbar.style.backgroundColor = "transparent";
            navbar.style.color = "";
            navbar.classList.remove("scrolled");
            player.classList.remove("scrolled")
        }
    });
    


