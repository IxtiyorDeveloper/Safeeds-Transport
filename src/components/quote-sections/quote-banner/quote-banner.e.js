import styled from "styled-components";
import PhoneInput from 'react-phone-number-input'

export const StyledPhoneInput = styled(PhoneInput)`
  //padding: 10px 20px;
  outline: none;
  width: 100%;
  color: var(--black);
  font-family: var(--neue__regular);
  background-color: white;
  //padding: 4px 11px;
  box-sizing: border-box;

  input {
    border: 1px solid ${props => props.iserr ? "#ff4d4f" : "#d9d9d9"};
    padding: 4px 11px;
    color: rgba(0, 0, 0, 0.85);
    font-size: 14px;
    line-height: 1.5715;
    height: 39px !important;
    box-sizing: border-box;
    border-radius: 2px;
    transition: all 0.3s;
    outline: none;

    &:hover {
      border-color: ${props => props.iserr ? "#ff4d4f" : "#40a9ff "} !important;
      border-right-width: 1px;
    }

    &:focus {
      border-color: ${props => props.iserr ? "#ff4d4f" : "#40a9ff "} !important;
      border-right-width: 1px;
      -webkit-box-shadow: 0 0 3px ${props => props.iserr ? "#ff4d4f" :  "#00a1ef"};
      box-shadow: 0 0 3px ${props => props.iserr ? "#ff4d4f" :  "#00a1ef"};
    }
  }
`
