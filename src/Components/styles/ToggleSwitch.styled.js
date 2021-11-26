import styled from "styled-components";

export const StyledToggleSwitch = styled.label`
  /* The switch - the box around the slider */
  & {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
  }

  /* Hide default HTML checkbox */
  & input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  /* The slider */
  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    background-image: linear-gradient(
      to right,
      hsl(210, 78%, 56%),
      hsl(146, 68%, 55%)
    );
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 20px;
  }

  span:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: var(--clr-bg-card-dark);
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 50%;
  }

  input:checked + span {
    background-color: #2196f3;
    background-image: linear-gradient(
      to right,
      hsl(210, 78%, 56%),
      hsl(146, 68%, 55%)
    );
  }

  input:focus + span {
    box-shadow: 0 0 1px #2196f3;
  }

  input:checked + span:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
    background-color: var(--clr-white);
  }
`;
