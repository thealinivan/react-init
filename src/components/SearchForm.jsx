const SearchForm = props => {
    const { handleSearch } = props;
    return (
        <div>
            <h3>SearchForm</h3>
            <form onSubmit={handleSearch}>
                <input type="text" name="search" />
                <button type='submit'>Search</button>
            </form>
        </div>
    );
}

export default SearchForm;