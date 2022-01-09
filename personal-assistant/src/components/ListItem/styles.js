import styled from 'styled-components'

export const StyledListItem = styled.div`
    background-color: #DDFFBC;
    border-radius: 15px;
    height: 3em;
    width: 90%;
    
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    font-family: --apple-system, BlinkMacSystemFont;

    &:not(:first-of-type) {
        margin-top: 1em;
    }

    p {
        margin-left: 1em;
        color: #91C788;
    }

    button {
        all: unset;
    }

    #trashIcon {
        margin-right: 1em;
        color: #52734D;
        transition: box-shadow 0.2s;

        &:hover {
            box-shadow: 0 0 5px rgba(0, 0, 0, 0.4)
        }
    }

  
`
