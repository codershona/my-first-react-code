function People(props) {
    return ( <
        div class = "people" >
        <
        h1 > {
            props.client
        } < /h1> <
        p > Your weight: {
            props.weight
        } < /p> <
        /div>
    );
}


var people = ( <
    div >
    <
    People client = "Manjit Kumar"
    weight = "78kg" / >

    <
    People client = "Lilia gen"
    weight = "66kg" / >
    <
    /div>
);



ReactDOM.render(people, document.querySelector('#people'));

// ReactDOM.render(<Name client="Jessica Gomes" weight="54kg"/>, document.querySelector('#n2'));