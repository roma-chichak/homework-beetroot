let currentColorIndex = 0;

function changeColor() {
    let lightsItem = document.querySelectorAll(".lights li");
    
    for(let i = 0; i < lightsItem.length; i++) {
        lightsItem[i].style.opacity = "0.3";
    }

    lightsItem[currentColorIndex].style.opacity = "1";
    currentColorIndex = (currentColorIndex + 1) % lightsItem.length;
}

var playList = [
    {
     author: "LED ZEPPELIN",
     song:"STAIRWAY TO HEAVEN"
    },
    {
     author: "QUEEN",
     song:"BOHEMIAN RHAPSODY"
    },
    {
     author: "LYNYRD SKYNYRD",
     song:"FREE BIRD"
    },
    {
     author: "DEEP PURPLE",
     song:"SMOKE ON THE WATER"
    },
    {
     author: "JIMI HENDRIX",
     song:"ALL ALONG THE WATCHTOWER"
    },
    {
     author: "AC/DC",
     song:"BACK IN BLACK"
    },
    {
     author: "QUEEN",
     song:"WE WILL ROCK YOU"
    },
    {
     author: "METALLICA",
     song:"ENTER SANDMAN"
    }
    ];

    let songsList = document.getElementById("songs-list");
    let songsItem;
    
    for (let i in playList) {
        songsItem += `<li>${playList[i]["author"]} - ${playList[i]["song"]}</li>`;
    }
    songsList.innerHTML = songsItem;
    
    function closeModal() {
        let modalWindow = document.getElementById("window-content");
        modalWindow.style.display = "none";
    }
    function openModal() {
        let modalWindow = document.getElementById("window-content");
        modalWindow.style.display = "block";
    }

   