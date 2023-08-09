import "./searchBar.css";
import { connect } from "react-redux";
import { searchCountries } from "../../store/actions"
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";


 function SearchBar({search}) {

  const location = useLocation();

  const [searchValue, setSearchValue] = useState(""); // Estado para el valor del input


  const handleInputChange = async(event) => {
    setSearchValue(event.target.value.trim())
   await search(event.target.value.trim());
  };


  useEffect(() => {
    setSearchValue("");
  }, [location.pathname]);

  return (
    <div className="search-container">
      <input
        className="input-search"
        type="text"
        onChange={handleInputChange}
        placeholder="Try typing: col"
        value={searchValue}
      />
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return{
    search: async (search) => dispatch(await searchCountries(search))
  }
}

export default connect(null, mapDispatchToProps)(SearchBar) ;
