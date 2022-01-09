import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
    color: green;
    font-family: ---apple-system, BlinkMacSystemFont;
	text-decoration: none;
    margin: 0em 5rem;
	
	&:hover {
		color: orange;
	}
`

export const StyledNav = styled.nav`
    width: fit-content;
    height: 3rem;
    margin: 1rem auto;
    background-color: #EDF6E5;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
    border-radius: 50px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: relative;
`