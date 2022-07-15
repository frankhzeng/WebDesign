import Data from "../data/data.json";
import { renderData } from "./AlterData.js";
import { useState } from "react";
export function SearchBar() {

    const [query, setQuery] = useState("")


    return (
        <div>
        <input id="input" type="text" placeholder="Search..." onChange={event => setQuery(event.target.value)}></input>
        {
            renderData(Data.filter(song => {
              if (query === '') {
                return song;
              } else if (song.Song_Title.toLowerCase().includes(query.toLowerCase())) {
                return song;
              }
            }))
          }
          </div>
    );

}


export default SearchBar;