import Data from "../data/data.json";
import { renderData } from "./AlterData.js";
export function SearchBar() {



    return (
        <div>
          <input id="input" type="text" placeholder="Search..." onChange={event => {
            const content = event.target.value.toLowerCase();
            let title = document.querySelector(".songs-container h2");
            title.textContent = "Search Results for " + content + ": ";
            let response = Data.filter(obj => {
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
            console.log(response);
            renderData(response);
            //toggleMenu();
          }}></input>
        
        </div>
    );

}


export default SearchBar;