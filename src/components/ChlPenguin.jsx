const ChlPenguin = props => {
    const { penguinProp } = props;
    return (
        <div>
            <h3>Penguin</h3>
            <p>Name: {penguinProp.name}</p>
            <p>Age: {penguinProp.age}</p>
            <p>Has flippers: {penguinProp.flippers.toString()}</p>
        </div>
    );
}

export default ChlPenguin;