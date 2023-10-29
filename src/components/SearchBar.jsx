/* eslint-disable react/prop-types */
import "./SearchBar.css"
const SearchBar = (props) => {
    return (
        <div className="searchContainer">
            <input 
                type="text" 
                className="search" 
                placeholder="Search..."
                value={props.searchVal} 
                name="search"
                onChange={(e) => {props.change(e)}}/>
        </div>
    );
}

export default SearchBar;