import { Recents } from "./AlterData";
import Navbar from './navbar.js';

export let SongList = Recents();

export default function songs() {
    return (
    <div id="body">
        <Navbar/>
        <div className  ="titling">
            <h1>H</h1>
            <p>Search, sort, or scroll through over 33,000 songs, all created by artists whose names start with an H.</p>
        </div>
        <div className="songs-container">
            <h2>stuff</h2>
            <div id="songs">
                {SongList}
            </div>
        </div>
    </div>
    );
}
//