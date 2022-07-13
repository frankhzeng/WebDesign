import React, {useState} from '../node_modules/react';
import _ from 'lodash';

function AboutNav() {
    return (
        <nav id="aboutLinks">
          <h2>About</h2>
          <ul className="list-unstyled">
            <li><a href="#/">How to Adopt</a></li>
            <li><a href="#/">Volunteering</a></li>
            <li><a href="#/">Events</a></li>
            <li><a href="#/">Donate</a></li>
            <li><a href="#/">About Us</a></li>
          </ul>
        </nav>
    );
}
function BreedNav(props) {
    let arr = props.list.map(x => <li key={x}><a href="/#">{x}</a></li>);
    return (<nav id="breedLinks">
          <h2>Pick a Breed</h2>
          <ul className="list-unstyled">
            {arr}
          </ul>            
        </nav>);
}
function PetCard(prop) {
    let props = prop.obj;
    let name = props.name;
    let breed = props.sex + " " + props.breed;
    let img = props.img;
    return (<div className="card">
            <img className="card-img-top" src={img} alt={name} />
            <div className="card-body">
              <h3 className="card-title">{name}</h3>
              <p className="card-text">{breed}</p>
            </div>
          </div>);
}
function PetList(prop) {
    let arr = prop.pets.map(x => <PetCard obj={x} key={x.name} setName={prop.setName}/>);

    return (
    <div id="petList" className="col-9">
        <h2>Dogs for Adoption</h2>
        <div className="card-deck">
            {arr}
        </div>
    </div>)
}
export default function App(props) {
    let breeds = _.groupBy(props.pets, 'breed');
    breeds = Object.keys(breeds);
    const [name, setName] = useState(props.pets);
    return (
    <body>
        <header className="jumbotron jumbotron-fluid py-4">
            <div className="container">
                <h1>Adopt a Pet</h1>
            </div>
        </header>

        <main className="container">
            <div className="row">
            <div id="navs" className="col-3">
                <BreedNav list={breeds}/>
                <AboutNav/>
            </div>

                <PetList pets={name}/>
            </div> 
        </main>

        <footer className="container">
            <small>Images from <a href="http://www.seattlehumane.org/adoption/dogs">Seattle Humane Society</a></small>
        </footer>
    </body>);
}