import React from "react";
import styled from "styled-components";

const SidebarContainer = styled.div`
    position: fixed;
    width: 250px;
    height: 100dvh;
    background-color: #333;
    color:white;
    padding: 20px;
    transition: transform 0.3s ease-in-out;
    transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(-100%)')};

    @media (max-width: 768px){
        width:200px
    }
`;

const MenuItem = styled.div`
    margin: 15px 0;
    cursor: pointer;

    &:hover {
        color: #aaa;
    }
`

const Sidebar = ({ isOpen, toggleSidebar, onSelect }) => {
        return (
            <SidebarContainer isOpen={isOpen}>
            <MenuItem onClick={() => { onSelect('home'); toggleSidebar(); }}>Home</MenuItem>
            <MenuItem onClick={() => { onSelect('language'); toggleSidebar(); }}>Language Translator</MenuItem>
            <MenuItem onClick={() => { onSelect('movies'); toggleSidebar(); }}>Movie Search Engine</MenuItem>
            </SidebarContainer>
        );
    };

export default Sidebar;