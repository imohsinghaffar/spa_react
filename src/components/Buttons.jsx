import React from "react";

const Buttons = ({
  btnText,
  textColor,
  bg,
  textHoverColor,
  borderWidth,
  bgHoverColor,
  paddingX,
  paddingY
}) => {
  return (
    <button
      className={`
        ${textColor} 
        ${bg} 
        transition-colors duration-300 
        ${bgHoverColor ? bgHoverColor : "hover:bg-transparent"} 
        outline-none 
        hover:outline-solid 
        ${borderWidth} 
        ${textHoverColor} 
        ${paddingX}
        cursor-pointer 
        font-medium 
        rounded-sm 
        text-sm
        ${paddingY}
      `}
    >
      {btnText}
    </button>
  );
};

export default Buttons;