import Animal from './Animal';

const AnimalsManager = props => {
    const { animalsProp } = props;

    return (
        <div className="animal-container">
            {animalsProp.map((animal, a) => (
                <Animal key={a} animalProp={animal} />
            ))}
        </div>
    );
}

export default AnimalsManager;