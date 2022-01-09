import React from "react";
import { StyledLink, StyledNav } from "./styles";

const NavBar = () => (
    <StyledNav>
        <div>
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="/todo">Todo</StyledLink>
        </div>
    </StyledNav>
);

export default NavBar;