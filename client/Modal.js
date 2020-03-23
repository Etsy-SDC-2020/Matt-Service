import React from "react";

const Modal = props => {
  // console.log(props.close);
  if (!props.show) {
    return null;
  }
  return (
    <div onClick={() => props.close()} className="modal" id="modal">
      <div className="modal-main">
        <svg
          className="close"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="-3 -3 30 30"
          aria-hidden="true"
          focusable="false"
        >
          <path d="M13.414,12l6.293-6.293a1,1,0,0,0-1.414-1.414L12,10.586,5.707,4.293A1,1,0,0,0,4.293,5.707L10.586,12,4.293,18.293a1,1,0,1,0,1.414,1.414L12,13.414l6.293,6.293a1,1,0,0,0,1.414-1.414Z"></path>
        </svg>{" "}
        <img className="modal-image" src={props.image} />
      </div>
    </div>
  );
};

export default Modal;
