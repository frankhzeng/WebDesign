import { Recents } from "./AlterData";
export let SongList = [];
Recents();
export function songs() {
    return (
    <body>
        <div class="titling">
            <h1>H</h1>
            <p>Search, sort, or scroll through over 33,000 songs, all created by artists whose names start with an H.</p>
        </div>
        <div class="songs-container">
            {SongList}
        </div>
    </body>
    );
}