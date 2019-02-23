import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

export const SliderMenu = ({ active }) => {
  let location = window.location.pathname || '';
  let home = '';
  let visit = '';
  let reviews = '';
  // Prevents a flash of visible menu items when the entrance is triggered
  let extraClasses;
  if (active === null) {
    extraClasses = "dn";
  } else {
    extraClasses = (active ? "fadeIn" : "fadeOut");
  }

  switch(location) {
    case '/':
    home = 'active';
    break;
    case '/visit':
    visit = 'active';
    break;
    case '/reviews':
    reviews = 'active';
    break;
    default:
    home = 'active';
  }
  return (
    <Menu className={active && 'active'}>
      <MenuLink to="/" className={`${extraClasses} ${home}`}>HOME</MenuLink>
      <MenuLink to="/visit" className={`${extraClasses} ${visit}`}>VISIT</MenuLink>
      <MenuLink to="/reviews" className={`${extraClasses} ${reviews}`}>REVIEWS</MenuLink>
    </Menu>
  )
}

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #333;
  position: fixed;
  z-index: 10;
  width: 100%;
  height: 0;
  transition: all 0.4s ease;

  &.active {
    height: 93vh;
  }
`;

const MenuLink = styled(Link)`
  font-size: 1.65rem;
  color: #fff;
  text-decoration: none;
  padding: 1rem 0;

  &.active {
    color: gray;
  }
`;
