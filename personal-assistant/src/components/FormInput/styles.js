import styled from "styled-components"

export const StyledInput = styled.input`
    background-color: #FEFFDE;
    border-radius: 15px;
    border: thin solid #91C788;
    padding: 0.7em;
    font-family: --apple-system, BlinkMacSystemFont;
    color: #91C788;
    transition: box-shadow 0.1s;
    width: 25vw;


    &::placeholder {
        color: #91C788;
        opacity: 0.8;
    }

    &:focus {
        outline: none !important;
        border: thin solid #52734D;
        box-shadow: 0 0 5px rgba(82, 115, 77, 0.4);
    }

    @media (max-width: 800px) {
      width: 40vw;
    }

    @media (max-width: 600px) {
        width: 50vw;
    }
    
`