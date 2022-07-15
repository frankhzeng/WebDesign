'use strict';

//toggling menu function ======================================
let parent = document.querySelector("#songs");
const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menu a");
const hamburger= document.querySelector(".hamburger");
const closeIcon= document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");
const search = document.querySelector(".topnav input");
function toggleMenu() {
    if (menu.classList.contains("showMenu")) {
        menu.classList.remove("showMenu");
        closeIcon.style.display = "none";
        menuIcon.style.display = "block";
    } else {
        menu.classList.add("showMenu");
        closeIcon.style.display = "block";
        menuIcon.style.display = "none";
    }
}
//add an element to div ==============================================
function addElement(element) {
    //add div
    let div = document.createElement("div");
    //add properties to it
    //artist, title, year, url (url links to lyrics)
    let artistP = document.createElement("p");
    artistP.textContent = element.Artist_Name;
    let titleP = document.createElement("p");
    titleP.textContent = element.Song_Title;
    titleP.style.fontSize = "25px";
    let url = document.createElement("a");
    
    url.href = element.Lyrics_URL;
    let search_term = "" + artistP.textContent + " " + titleP.textContent;
    fetch ("https://itunes.apple.com/search?limit=1&term=" + search_term)
    .then(response => response.json())
    .then(response => {
        if (response.results.length == 0) {
            const err = document.createElement("p");
            err.textContent = "album cover not found";
            err.id = "image";
            div.appendChild(err);
            return;
        }
        let img = document.createElement("img");
        img.src = response.results[0].artworkUrl100;
        img.style.width = "50%";
        img.style.display = "inline-block";
        img.id = "image";
        div.appendChild(img);
        
    })
    url.textContent = "Lyrics >>"
    div.appendChild(titleP);
    div.appendChild(artistP);
    div.appendChild(url);
    div.style.width = "40%";
    parent.appendChild(div);
}
//load home page =================================================
function loadRecents() {
    while (parent.firstChild) {
        parent.removeChild(parent.lastChild);
    }
    let title = document.querySelector(".songs-container h2");
    title.textContent = "Most Recent Songs: ";
    fetch("./data/data.json")
        .then(response => {
            return response.json();
        }).then(response =>{
            response.sort((a, b) => {
                return a.Year > b.Year;
            })
            for (let i = 0; i < 10; i++) {
                addElement(response[i]); //load most recent
            }
        });
}

//to load inital page
loadRecents();

//convenience function to render data =================================
function renderData(arr) {
    while (parent.firstChild) {
        parent.removeChild(parent.lastChild);
    }
    if (arr.length == 0) {
        let pl = document.createElement("p");
        let div = document.createElement("div");

        pl.textContent = "No results found";
        div.appendChild(pl);
        parent.appendChild(div);

    }
    for (let i = 0; i < arr.length; i++) {
        addElement(arr[i]);
    }
}
//toggling menu, and filtering by button =============================
hamburger.addEventListener("click", toggleMenu);
menuItems.forEach( 
    function(menuItem) { 
      menuItem.addEventListener("click", toggleMenu);
      menuItem.addEventListener("click", x => {
        if (menuItem.classList.contains("home")) {
            loadRecents();
            return;
        }

        let char1 = menuItem.textContent.charAt(0);
        let title = document.querySelector(".songs-container h2");
        title.textContent = "Songs starting with " + char1 + ": ";
        fetch("./data/data.json")
            .then(response => response.json())
            .then(response => {
                if (char1 == "#") {
                    response = response.filter(obj => {
                        let char2 = obj.Song_Title.charAt(0);

                        return !(/[a-zA-Z]/).test(char2);
                    });

                } else {
                    response = response.filter(obj => {
                        let char2 = obj.Song_Title.charAt(0);
                        return (char1 === char2) || (char1.toUpperCase() == char2) || (char1.toLowerCase() == char2);
                    });
                }
                response.sort((a, b) => {
                    const at = a.Song_Title;
                    const bt = b.Song_Title;
                    if (at < bt) {
                        return -1;
                    }
                    if (at > bt) {
                        return 1;
                    }
                    return 0;
                });
                renderData(response);
            })
      });
    }
  );


//process search bar ========================================
const form = document.querySelector("#form");
const input = document.querySelector("#input");

form.addEventListener("submit", function() {
    fetch("./data/data.json")
    .then(response => response.json())
    .then(response => {
        const content = input.value.toLowerCase();
        let title = document.querySelector(".songs-container h2");
        title.textContent = "Search Results for " + content + ": ";
        response = response.filter(obj => {
            let artistName = obj.Artist_Name.toLowerCase();
            let songTitle = obj.Song_Title.toLowerCase();
            if (artistName.includes(content)) {
                return true;
            }
            if (songTitle.includes(content)) {
                return true;
            }

            return false;
        })
        response.sort((a, b) => {
            const at = a.Song_Title;
            const bt = b.Song_Title;
            if (at < bt) {
                return -1;
            }
            if (at > bt) {
                return 1;
            }
            return 0;
        });
        renderData(response);
        toggleMenu();
    });
})


