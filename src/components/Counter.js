import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Actions from "../redux/actions";

function Counter() {
  const count = useSelector((state) => state.countReducer);
  const dispatch = useDispatch();
  return (
    <div>
      <button
        onClick={() => dispatch(Actions.sayiAksiyon.sayiAzalt(5))}
        type="button"
        className="btn btn-danger"
      >
        AZALT(-)
      </button>
      <button
        onClick={() => dispatch(Actions.sayiAksiyon.sayiArttir(5))}
        type="button"
        className="btn btn-success"
      >
        ARTTIR(+)
      </button>

      <div>{count}</div>
    </div>
  );
}

export default Counter;
