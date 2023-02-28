const Search = ({searchBar}) => {
    const handleChange = (event) => {
      searchBar(event.target.value)
    }

    return (
            <div>
               <input type='text-box' placeholder="Search here" onChange={handleChange}></input>
        
            </div>
        );
    }
    
    export default Search;