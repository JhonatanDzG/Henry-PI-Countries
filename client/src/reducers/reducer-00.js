const fetchUserData = () => {
    return (dispatch) => {
      dispatch({ type: 'FETCH_USER_DATA_REQUEST' });
  
      fetch('http://localhost:3001/')
        .then((response) => response.json())
        .then((data) => {
          dispatch({
            type: 'FETCH_USER_DATA_SUCCESS',
            payload: data
          });
        })
        .catch((error) => {
          dispatch({
            type: 'FETCH_USER_DATA_FAILURE',
            error: error.message
          });
        });
    };
  };
  