import SearchBar from './SearchBar';


function GenerateLinks() {
    let links = []
    for (let i = 65; i <= 90; i++) {
        
        let string = String.fromCharCode(i);
        let content = string;
        string = String.fromCharCode(i+32);
        let link = "#" + string;

        links.push(<a key={content} href={link}>{content}</a>)
    }
    links.push(<a key="#" href="##">#</a>);
    return (
        <div className="links">
            {links}
        </div>
    )
}

function navbar() {
    return (
        <header>
        <nav className="navbar">
            <button className="hamburger">
              <i className="menuIcon material-icons">menu</i>
              <i className="closeIcon material-icons">close</i>
            </button>
            <div className="topnav menu">
              <div id="links">
                <a href="#" className="home"><i className="home material-icons">home</i></a>
                <GenerateLinks/>
              </div>
              <form>
                <SearchBar/>
              </form>
            </div>
  
        </nav> 
      </header>
    );
}

export default navbar;