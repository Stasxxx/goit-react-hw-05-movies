import styled from "styled-components";
import { NavLink } from 'react-router-dom';


export const GoBack = styled(NavLink)`
    display: inline-flex;
    align-items: center;
    gap:10px;
    padding: 8px 16px;
    border-radius: 4px;
    text-decoration: none;
    color: black;
    font-weight: 500;
    text-transform: uppercase;
    background-color: #6495ED;

    
`;

export const Container = styled.div`
padding: 10px;
`
