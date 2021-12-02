import React, { useState, useRef, useEffect, useLayoutEffect } from "react";
import {
  DropDownWrapper,
  DropDownButton,
  OptionMenu,
  OptionRow,
  Label
} from "./styles.jsx";

function DropDown({ defaultText = "", options = [], changeOptionName , optionsKey = "", filterCollection}) {
  const [actionDropDown, setActionDropDown] = useState(false);
  const dropdownEl = useRef(null);
  const [mainDefaultText, setMainDefaultText] = useState(defaultText);

  const dropdown = () => {
    setActionDropDown(!actionDropDown);
  };

  const handleClickClose = (event) => {
    const path = event.composedPath();

    let isClickInside = path.find((element) => element === dropdownEl.current);

    if (isClickInside === undefined) {
      if (actionDropDown) {
        setActionDropDown(false);
      }
    }
  };

  const selectOption = (option) => {
    setActionDropDown(false);
  };

  const selectOutsideOption = (classId) => {
    changeOptionName(classId);
    selectOption();
  };

  // Set Default Text on Button
  useEffect(() => {
    setMainDefaultText(defaultText);
  }, [defaultText]);

  // Click event listener to close dropdown
  useEffect(() => {
    document.addEventListener("mouseup", handleClickClose);
    return () => {
      document.removeEventListener("mouseup", handleClickClose);
    };
  });

  return (
    <DropDownWrapper>
      <div ref={dropdownEl}>
        <DropDownButton onClick={dropdown}>
          {mainDefaultText}
        </DropDownButton>

        {actionDropDown ? (
          <OptionMenuItem options={options} selectOutsideOption={selectOutsideOption} filterCollection={filterCollection}/>

        ) : null}
      </div>
    </DropDownWrapper>
  );
}

export default DropDown;

function OptionMenuItem({options, selectOutsideOption, filterCollection}) {
  
  // Call hook to lock body scroll
  useLayoutEffect(() => {
    // Get original body overflow
    const originalStyle = window.getComputedStyle(document.body).overflow;
    // Prevent scrolling on mount
    document.body.style.overflow = "hidden";
    // Re-enable scrolling when component unmounts
    return () => (document.body.style.overflow = originalStyle);
  }); // Empty array ensures effect is only run on mount and unmount

  useEffect(() => {
    console.log("option:", options);
  })

  return (
    <OptionMenu role="menu">
    {options.map((option, key) => (
      <>

          <OptionRow key={key} onClick={() => selectOutsideOption(option)}>
            <Label>{`${option}`}</Label>
          </OptionRow>
        
      </>
    ))}
    </OptionMenu>
  );
}

