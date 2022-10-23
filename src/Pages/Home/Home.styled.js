import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Section = styled.section`
padding-left: 30px;
`
export const LinkMovie = styled(NavLink)`
text-decoration: none;
color: black;
font-weight: 400;
font-size: 18px;
line-height: 1.2px;
background-color: none;

&:hover {
    color: #6495ED;
}
`;

export const Item = styled.li`
margin-bottom: 5px;

`