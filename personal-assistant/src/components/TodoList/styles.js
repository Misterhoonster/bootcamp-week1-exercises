import styled from "styled-components";

export const StyledTodoList = styled.ul`
    background-color: #91C788;
    border-radius: 15px;
    padding: 1em 0;
    width: 33vw;
    list-style-type: none;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    @media (max-width: 800px) {
        width: 50vw;
    }

    @media (max-width: 600px) {
        width: 70vw;
    }

`