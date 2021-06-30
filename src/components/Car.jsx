const Car = ({ car, discounted, discVal }) => {
    return (
        <div>
            <h4>Make: {car.make}</h4>
            <p>Model: {car.model}</p>
            <p>Price: {car.price}</p>
            <p>Discounted: {discounted.toString()}</p>
            <p>Discount value: {discVal}%</p>
        </div>
    )
}

export default Car;