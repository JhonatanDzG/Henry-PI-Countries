import "./searchBar.css";
import { connect } from "react-redux";
import { searchCountries } from "../../store/actions"


 function SearchBar({search}) {

  const handleInputChange = async(event) => {
   await search(event.target.value.trim());
  };

  return (
    <div className="search-container">
      <input
        className="input-search"
        type="text"
        onChange={handleInputChange}
        placeholder="Try typing... COL"
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
