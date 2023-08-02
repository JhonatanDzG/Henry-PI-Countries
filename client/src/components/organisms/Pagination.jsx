import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { filterBy } from "../../store/actions";
import "../organisms/pagination.css";

function Pagination({ pagesNumber, filterBy }) {
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
              className="pagination-bt"
              key={i}
              onClick={async () => filterBy("skip", i * 15)}
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
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    filterBy: (key, value) => dispatch(filterBy(key, value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);
