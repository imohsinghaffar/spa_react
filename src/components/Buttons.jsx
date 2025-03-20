import React from "react";

const Buttons = ({ btnText, textColor, bg, textHoverColor, borderWidth }) => {
  return (
    <>
      <button
        className={`${textColor} ${bg} hover:bg-transparent outline-none hover:outline-solid ${borderWidth}  ${textHoverColor} cursor-pointer font-medium rounded-sm text-sm px-5 py-3`}
      >
        {btnText}
      </button>
    </>
  );
};

export default Buttons;
