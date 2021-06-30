import Car from './Car';
const Garage = () => {
    const cars = [{
        make: "BMW",
        model: "520"
    },
    {
        make: "BMW",
        model: "520"
    },
    {
        make: "BMW",
        model: "520"
    }];
    const discounted = true;
    const discVal = 10;
    return (
        cars.map(car => {
            return <Car car={car}
                discounted={discounted}
                discVal={discVal}
            />
        })
    )
}

export default Garage;