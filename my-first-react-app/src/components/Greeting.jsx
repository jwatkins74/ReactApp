function List(props) {
    return (
        <ul>
            {props.peoples.map((people) => 
                {if (people.startsWith("J")) 
                    return <li key={people}>{people}</li>})}
        </ul>
    )
}
function Greeting() {
    const peoples = ["Bob", "Riley", "Dave", "John"];
    
    return <div> 
        <h1>&quot;Hellllloooo, nice to meet you!&quot;</h1>
        <p>This is my first react App!</p>
        People:
        <ul>
            <List peoples ={peoples}/>
        </ul>
        <button onClick= {() =>window.location.href= 'https://www.google.com'}>Go to Google</button>
        </div>
}
export default Greeting;