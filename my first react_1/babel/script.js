function Name(props) {
    return (
        <div class="name">
            <h1>{props.client} </h1>
            <p>Your weight : {props.weight}</p>
        </div>
    );
}

ReactDOM.render(<Name client="Manjit Kumar" weight="78kg" />, document.querySelector('#n1'));

ReactDOM.render(<Name client="Jessica Gomes" weight="54kg" />, document.querySelector('#n2'));