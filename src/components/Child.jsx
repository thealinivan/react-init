const Child = ({ type, size, stuffedCrust }) => {
    return (
        <div>
            <h2>  Pizza type: {type}</h2>
            <h3>  Pizza size: {size}</h3>
            <h4>  Pizza has stuffed crust? : {stuffedCrust.toString()}</h4>
        </div>
    )
}

export default Child;