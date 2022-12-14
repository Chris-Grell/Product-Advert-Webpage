import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute } from './sidebarElements'

const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon />
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to="about" onClick={toggle}>About </SidebarLink>
                <SidebarLink to="news" onClick={toggle}>News </SidebarLink>
                <SidebarLink to="gallery" onClick={toggle}>Gallery </SidebarLink>
                <SidebarLink to="signup" onClick={toggle}>Sign Up </SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to="/signin" onClick={toggle}>Sign in</SidebarRoute>
            </SideBtnWrap>
        </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar