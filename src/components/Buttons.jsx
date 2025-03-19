import React from "react";

const Buttons = ({ btnText, textColor, bg, textHoverColor, borderWidth }) => {
  return (
    <>
      <button
        className={`text-${textColor} bg-${bg} hover:bg-transparent outline-none hover:outline-solid hover:outline-${borderWidth} hover:text-${textHoverColor} cursor-pointer font-medium rounded-sm text-sm px-4 py-3`}
      >
        {btnText}
      </button>
    </>
  );
};

export default Buttons;
