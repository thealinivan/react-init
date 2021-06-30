const SearchChild = props => {
    const { text } = props;
    return (
        <div>
            <h3>SearchChild</h3>
            <p>Search text is {text}</p>
        </div>
    );
}

export default SearchChild;