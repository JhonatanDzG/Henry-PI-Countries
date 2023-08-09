import React, { useEffect } from "react";
import { connect } from "react-redux";
import { clearMessage } from "../../../constants/notify.constant";
import { notify } from "../../../store/actions";

function Notify({ notify, clearNotify }) {
  useEffect(() => {
    setTimeout(() => {
      clearNotify();
    }, 5000);
  }, [notify]);

  if (!notify.title) return <></>;

  return (
    <div className={"notify " + notify.type}>
      <h1>{notify.title}</h1>
      <p>{notify.content}</p>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    clearNotify: () => dispatch(notify(clearMessage)),
  };
};

const mapStateToProps = (state) => {
  return {
    notify: state.notify,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Notify);
