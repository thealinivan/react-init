const Animal = props => {
    const { animalProp } = props;
    return (
        <div className="animal-card">
            <img src={animalProp.image} alt={animalProp.name} width={400} height={200} />
            <h4>{animalProp.name}</h4>
            <p>I am {animalProp.animalType} animal</p>
            <p>It is {animalProp.isCute.toString()} that I am cute</p>
            <p>My diet:</p>
            {animalProp.diet.map((food, f) => (
                <p>{food}</p>
            ))}
        </div>
    );
}

export default Animal;


