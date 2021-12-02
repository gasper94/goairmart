import styled from "styled-components";

export const DropDownWrapper = styled.div`
  position: relative;
  @media screen and (max-width: 1200px) {
    display: none;
  }
`;

export const DropDownButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: white;

  border-width: 1px;
  border-radius: 0.375rem;
  --tw-border-opacity: 1;
  border-color: rgba(209, 213, 219, var(--tw-border-opacity));

  padding: 0.5rem;

  /* Font */
  font-size: 0.8rem;
  /* line-height: 1.4rem; */
  --tw-text-opacity: 1;
  color: rgba(55, 65, 81, var(--tw-text-opacity));

  /* Shadow */
  border: 1px solid #AFB4BB;
  box-sizing: border-box;
  border-radius: 4px;
  /* --tw-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
  var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow); */

  &:focus {
    outline: none;
  }

  &:hover {
    --tw-bg-opacity: 1;
    background-color: rgba(249, 250, 251, var(--tw-bg-opacity));
  }
`;

export const SVG = styled.svg`
  margin-left: 4px;
  height: 1rem;
  width: 1.2rem;

`;

export const OptionMenu = styled.div`
  transform-origin: top bottom;
  position: absolute;
  right: 3px;
  top: 52px;
  background-color: white;
  margin-top: -0.5rem;
  margin-right: -0.25rem;
  min-width: 300px;
  max-height: 16rem;
  /* overflow: -moz-scrollbars-vertical;  */
  overflow-y: scroll;
  z-index: 50;

  /* Shadow */
  --tw-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);

  border-width: 0.5px;
  border-style: solid;
  border-radius: 0.375rem;
  --tw-border-opacity: 1;
  border-color: rgba(209, 213, 219, var(--tw-border-opacity));
  overscroll-behavior: contain;

  &:hover {
    outline: none;
  }

  ::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 10px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background-color: rgba(0, 0, 0, .5);
    -webkit-box-shadow: 0 0 1px rgba(255, 255, 255, .5);
  }

`;

export const OptionRow = styled.div`

  margin-right: 0.25;
  margin-left: 0.25;

  padding-top: 0.25rem;
  padding-bottom: 0.25rem;

  border-top-width: 0px;
  border-left-width: 0px;
  border-right-width: 0px;
  border-bottom-width: 1px;
  border-style: solid;
  --tw-border-opacity: 1;
  border-color: rgba(209, 213, 219, var(--tw-border-opacity));

  &:hover {
    background-color: #73aed4;
  }
`;

export const OptionRowSelected = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #73aed4;
  margin-right: 0.25;
  margin-left: 0.25;

  padding-top: 0.25rem;
  padding-bottom: 0.25rem;

  border-top-width: 0px;
  border-left-width: 0px;
  border-right-width: 0px;
  border-bottom-width: 1px;
  border-style: solid;
  --tw-border-opacity: 1;
  border-color: rgba(209, 213, 219, var(--tw-border-opacity));

  /* &:hover {
    background-color: white;
  } */
`;

export const Label = styled.label`
  display: block;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;

  /* Font */
  font-size: 0.875rem;
  line-height: 1.25rem;

  --tw-text-opacity: 1;
  color: rgba(55, 65, 81, var(--tw-text-opacity));
`;
