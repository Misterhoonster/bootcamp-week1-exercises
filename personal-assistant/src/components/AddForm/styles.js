import styled from 'styled-components'

export const StyledButton = styled.button`
  background-color: #91C788;
  border: none;
  border-radius: 25px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.4);
  cursor: pointer;
  transition: background-color 0.2s;
  font-family: "Segoe UI", sans-serif;
  font-size: 16px;
  color: #FEFFDE;
  width: 2em;
  height: 2em;
  margin-left: 10px;

  &:hover {
    background-color: #52734D;
  }
`
