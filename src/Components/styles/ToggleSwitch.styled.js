import styled from "styled-components";

export const StyledToggleSwitch = styled.label`
  /* The switch - the box around the slider */
  & {
    position: relative;
    display: inline-block;
    width: 50px;
    height: 28px;
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
    height: 20px;
    width: 20px;
    left: 4px;
    bottom: 4px;
    background-color: var(--clr-bg-card-dark);
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 50%;
  }

  input:checked + span {
    background-color: #2196f3;
    background-image: linear-gradient(to right, var(--clr-toggle-gradient));
  }

  input:focus + span {
    box-shadow: 0 0 1px #2196f3;
  }

  input:checked + span:before {
    -webkit-transform: translateX(20px);
    -ms-transform: translateX(20px);
    transform: translateX(20px);
    background-color: var(--clr-white);
  }
`;
