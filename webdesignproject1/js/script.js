'use strict';

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
        menuItems.style.display = "none";
    } else {
        menu.classList.add("showMenu");
        closeIcon.style.display = "block";
        menuIcon.style.display = "none";
        menuItems.style.display = "block";
    }
}

hamburger.addEventListener("click", toggleMenu);
menuItems.forEach( 
    function(menuItem) { 
      menuItem.addEventListener("click", toggleMenu);
    }
  );
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
        img.style.width = "10%";
        img.style.height = "50%";
        img.style.display = "inline-block";
        img.id = "image";
        div.appendChild(img);
        console.log(img);
        
    })
    url.textContent = "Lyrics >>"
    div.appendChild(titleP);
    div.appendChild(artistP);
    div.appendChild(url);
    parent.appendChild(div);
}
fetch("./data/data.json")
    .then(response => {
        return response.json();
    }).then(response =>{
        for (let i = 0; i < 15; i++) {
            addElement(response[i]);
        }
    });


function renderData(arr) {
    while (parent.firstChild) {
        parent.removeChild(parent.lastChild);
    }
    for (let i = 0; i < arr.length; i++) {
        addElement(arr[i]);
    }
}