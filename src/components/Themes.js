import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Actions from "../redux/actions";

function Themes() {
  const tema = useSelector((state) => state.temaReducer);
  const dispatch = useDispatch();
  const lololo1 = {
    backgroundColor: "yellow",
    height: "300px",
    width: "100%",
  };
  const lololo2 = {
    backgroundColor: "orange",
    height: "300px",
    width: "100%",
  };
  return (
    <div>
      {/* <button>KOYU TEMA</button>
      <button></button> */}
      <div style={tema}>
        <button
          onClick={() => dispatch(Actions.temaAksiyon.koyu_tema(lololo1))}
          type="button"
          className="btn btn-dark"
        >
          KOYU TEMA
        </button>
        <button
          onClick={() => dispatch(Actions.temaAksiyon.acik_tema(lololo2))}
          type="button"
          className="btn btn-light"
        >
          AÇIK TEMA
        </button>
      </div>
    </div>
  );
}

export default Themes;
