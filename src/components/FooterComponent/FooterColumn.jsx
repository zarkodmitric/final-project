function Columns(props) {

    return ( 
        <div className="naslov">
            <h3>{props.name}</h3>
            <ul>
                {props.text.map((item) => (
                   <li key={item}><a href="#">{item}</a></li> 
                ))}
            </ul>
        </div>
    );
}

export default Columns;