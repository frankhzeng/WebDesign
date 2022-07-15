import Data from "../data/data.json"

const CreateImage = async (props) => {
    let element = props;
    let link = "";
    let data = await fetch ("https://itunes.apple.com/search?limit=1&term=" + element.Artist_Name + " " + element.Song_Title);
    let response = await data.json();
    if (response.results.length == 0) {
        return <p id="image">album cover not found</p>;
    } else {
        link = response.results[0].artworkUrl100;
        return (<img src={link} className={{width: '50%', display: 'inline-block'}} id="image"></img>)

    }
}

function Image(props) {
    let image = CreateImage(props.element);
    console.log(image);
    return <p>abc</p>;
}
function addElement(element) {
    //add div
    
    
    let content = "Lyrics >>";
    const styleObj = {
        width: "40%"
    }
    // let a = [];
    // CreateImage(element).then(response => {
    //     a.push(response);
        
    // });
    // console.log(a);
    return (
    <div style={styleObj} key={element.Song_Title}>
        <Image element={element}/>
        <p style={{fontSize: '25px'}}>{element.Song_Title}</p>
        <p>{element.Artist_Name}</p>
        <a href={element.Lyrics_URL}>{content}</a>
    </div>);
}

export function renderData(arr) {

    if (arr.length == 0) {
        
        let None = <p>No results found</p>;

        return (<div><None/></div>)

    }
    let SongList = [];
    for (let i = 0; i < arr.length; i++) {
        SongList.push(addElement(arr[i]));
    }
    return SongList;
}

export function Recents() {
    // console.log(Data);
    // Data.sort((a, b) => {
    //     return a.Year > b.Year;
    // });
    let arr = []
    for (let i = 0; i < 10; i++) {
        arr.push(Data[i]); //load most recent
    }
    return renderData(arr);
}