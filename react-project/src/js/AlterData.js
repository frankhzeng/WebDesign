import { SongList } from "./Songs";
import Data from "../data/data.json"
function addElement(element) {
    //add div
    let Image;
    fetch ("https://itunes.apple.com/search?limit=1&term=" + element.Artist_Name + " " + element.Song_Title)
        .then(response => response.json())
        .then(response => {
            if (response.results.length == 0) {
                Image = <p id="image">album cover not found</p>
            }
            Image = <img src={response.results[0].artworkUrl100} style="width: 50%; display: inline-block" id="image"></img>
        })
    let content = "Lyrics >>";
    return (
    <div style="width: 40%">
        <Image/>
        <p style="font-size: 25px">{element.Song_Title}</p>
        <p>{element.Artist_Name}</p>
        <a href="element.Lyrics_URL">{content}</a>
    </div>);
}

export function renderData(arr) {
    while (SongList.length > 1) {
        SongList.pop();
    }
    if (arr.length == 0) {
        
        let None = <p>No results found</p>;

        return (<div><None/></div>)

    }
    SongList = []
    for (let i = 0; i < arr.length; i++) {
        SongList.push(addElement(arr[i]));
    }
}

export function Recents() {
    console.log(Data);
    Data.sort((a, b) => {
        return a.Year > b.Year;
    })
    let arr = []
    for (let i = 0; i < 10; i++) {
        arr.push(Data[i]); //load most recent
    }
    renderData(arr);
}