import Chl from './Chl';
import ChlPenguin from './ChlPenguin';

const ChlManager = props => {
    const { numProp, colorProp, penguinProp, penguinListProp } = props;
    return (
        <div>
            <h4>Child manager with number {props.numProp}</h4>

            {colorProp.map((color, c) => (
                <Chl key={c} colorProp={color} />
            ))}

            {penguinListProp.map((penguin, p) => (
                <ChlPenguin key={p} penguinProp={penguin} />
            ))}

        </div>
    );
}

export default ChlManager;