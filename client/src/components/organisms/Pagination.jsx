import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getCountries } from "../../store/actions";
import "../organisms/pagination.css";

function Pagination({ pagesNumber, search = "", getCountries }) {
  const [pages, setPages] = useState([]);

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
              key={i}
              onClick={async () => await getCountries(i * 15, search)}
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
    search: state.search,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getCountries: async (page, search) =>
      dispatch(await getCountries(page, search)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);
