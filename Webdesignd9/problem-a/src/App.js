import React from 'react'; //import React library


/* Your code goes here */
export function TableHeader(prop) {
  let arr = prop.elements.map(x => <th key={x}>{x}</th>);
  return (<thead>
    <tr>
      {arr}
    </tr>
  </thead>)
}

export function SenatorRow (senator) {
  let phone = "tel:" + senator.phone;
  let state = senator.party.charAt(0) + " - " + senator.state;
  let twitter = "https://twitter.com/" + senator.twitter;
  let displayTwitter = "@" + senator.twitter;
  let cells = [<td key={senator.name}>{senator.name}</td>, 
                <td key={state}>{state}</td>, 
                <td key={senator.phone}><a href={phone}>{senator.phone}</a></td>,
                <td key={senator.twitter}><a href={twitter}>{displayTwitter}</a></td>
              ]
  return (<tr key={senator.id}>
    {cells}
  </tr>)
}



export function SenatorTable (props) {
  let head = ["Name", "State", "Phone", "Twitter"];
  let SenatorRows = props.senators.map(x => SenatorRow(x));
  return (
  <table className="table table-bordered">
    <TableHeader elements={head}/>
    <tbody>
      {SenatorRows}
    </tbody>
  </table>);
}



export function App (props) { 
  return (<div className="container">
    <h1>US Senators (Oct 2020)</h1>
    <SenatorTable senators={props.senatorsArr}/>
  </div>);
}


