import { useState } from "react"
import styled from "styled-components"

//constants
import { NAVIGATION_ITEMS } from "../../constants"

//icons
import { FaBars, FaX } from "react-icons/fa6"

//styled utils
import { media } from "../../styled/utils"

export const Nav = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleDrawer = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div>
      <MenuIcon isActive={isOpen} onClick={toggleDrawer}>
        {isOpen ? <FaX /> : <FaBars />}
      </MenuIcon>
      <NavOverlay isOpen={isOpen}>
        {NAVIGATION_ITEMS.map((navItems, index) => (
          <a key={index} href={navItems.url}>
            {navItems.title}
          </a>
        ))}
      </NavOverlay>
    </div>
  )
}

export default Nav

const MenuIcon = styled.div<{ isActive: boolean }>`
  cursor: pointer;
  width: 25px;
  height: 25px;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 2;
  background: ${({ isActive }) => (isActive ? "transparent" : "#00000070")};
  padding: 16px;
  svg {
    width: 100%;
    height: 100%;
    fill: #fff;
    transition: 0.5s;
  }
`

const NavOverlay = styled.div<{ isOpen: boolean }>`
  height: 100%;
  width: 250px;
  position: fixed;
  z-index: 1;
  top: 0;
  right: ${({ isOpen }) => (isOpen ? "0" : "-250px")};
  background-color: #e02a3b;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;

  a {
    padding: 10px 15px;
    text-decoration: none;
    font-size: 25px;
    color: white;
    display: block;
    transition: 0.3s;

    &:hover {
      color: #313131;
    }
  }
`

export const HamburgerWrapper = styled.div`
  display: none;

  ${media.tablet`
  display: block;
`};
`
