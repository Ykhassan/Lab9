import { useState } from "react";
import RecipeResults from "./RecipeResults";
import './Search.css'

const Search = () => {
    const [searchQuery, setSearchQuery] = useState(null);
    const [searchResults, setSearchResults] = useState(null);

    function search(e) {
        fetch(`https://api.spoonacular.com/recipes/complexSearch?query=${searchQuery}&apiKey=${process.env.REACT_APP_API_KEY}`)
        .then((reposne) => {
            return reposne.json()
        }).then((data) => {
            setSearchResults(data.results);
        })
    }
    return (
        <div className="search-wrapper">
            <input onChange={(e)=>{setSearchQuery(e.target.value)}}type="text"></input>
            <button onClick={search}>Search</button>
            {searchResults ? <RecipeResults recipes={searchResults}/> : null}
        </div>
    )
}

export default Search;