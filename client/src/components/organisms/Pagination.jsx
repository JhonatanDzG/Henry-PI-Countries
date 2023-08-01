import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { filterBy, getCountries } from "../../store/actions";
import "../organisms/pagination.css";

function Pagination({ pagesNumber, filters, getCountries, filterBy }) {
  const [pages, setPages] = useState([]);

  async function getCountriesHandler() {
    await getCountries(filters);
  }

  useEffect(() => {
    setPages(() => {
      const arr = new Array(pagesNumber).fill("");
      return arr;
    });
  }, [pagesNumber]);

  return (
    <div className="pagination">
      {pages.length > 1
        ? pages.map((_, i) => (
            <button
              className="pagination-bt"
              key={i}
              onClick={async (i) => {
                console.log(">>", i + " "), filterBy("skip", i * 15);
                await getCountriesHandler();
              }}
            >
              {i + 1}
            </button>
          ))
        : ""}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    pagesNumber: state.pages,
    filters: state.filters,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getCountries: async (page, search) =>
      dispatch(await getCountries(page, search)),
      filterBy: (key, value) => dispatch(filterBy(key, value))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);
