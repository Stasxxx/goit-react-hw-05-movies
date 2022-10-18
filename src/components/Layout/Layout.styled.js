import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
margin: 0 auto;
padding: 0 15px;
`;

export const Header = styled.header`

padding: 10px;
border-bottom: 2px solid black;

`;

export const Link = styled(NavLink)`
padding: 8px 16px;
border-radius: 4px;
text-decoration: none;
color: black;
font-weight: 500;

&.active {
    color: white;
    background-color: pink;
}

`