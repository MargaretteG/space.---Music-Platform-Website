
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


