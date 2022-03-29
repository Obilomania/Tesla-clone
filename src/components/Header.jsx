import React, { useState } from 'react'
import styled from 'styled-components'
import CloseIcon from '@mui/icons-material/Close';
import { selectCars } from '../features/TheCars/theCars';
import { useSelector } from 'react-redux';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const cars = useSelector(selectCars)
  console.log(cars);

  return (
    <Container>
      <a>
        <img src="/images/logo.svg" alt="logo" />
      </a>
     
      <Menu>
        {cars && cars.map((car, index) => (
          <a href="#">{car}</a>
        ) )}
         <a href="#">Solar Roof</a>
        <a href="#">Solar Panel</a>
      </Menu>
      <MenuRight className='right__menu'>
        <a href="#">Shop</a>
        <a href="#">Account</a>
      </MenuRight>
      <MainMenu>
        <button onClick={()=>setMenuOpen(true)}>Menu</button>
      </MainMenu>
      <BurgerNav show = {menuOpen}>
        <NavClose>
          <CustomClose onClick={()=>setMenuOpen(false)} />
        </NavClose>
        <a href="#">Existing Inventory</a>
        <a href="#">Used Inventory</a>
        <a href="#">Trade-in</a>
        <a href="#">Test Drive</a>
        <a href="#">Cybertruck</a>
        <a href="#">Roadster</a>
        <a href="#">Semi</a>
        <a href="#">Charging</a>
        <a href="#">Powerwall</a>
        <a href="#">Commercial Energy</a>
        <a href="#">Utilities</a>
        <a href="#">Find Us</a>
        <a href="#">Support</a>
        <a href="#">Investor Relations</a>
      </BurgerNav>
      
    </Container>
  )
}

export default Header

const Container = styled.div`
  min-height:3.1rem;
  position:fixed;
  display:flex;
  justify-content:space-between;
  align-items:center;
  padding: 0 1.2rem;
  top:0; 
  left:0; 
  right:0; 
  z-index:1;
  img{
    padding-left:2rem
  }
`
const Menu = styled.div`
  display: flex;
  align-items:center;
  justify-content:center;
  flex:1;

  a{
    font-weight:400;
    padding:0 .8rem;
    flex-wrap: nowrap;  
    color:black;
  }
  @media(max-width:900px){
    display:none;
  }
  `
const MenuRight = styled.div`
    display:flex;
  a{
    font-weight:400;
    padding:0 .8rem;
    flex-wrap: nowrap;  
    color:black;
  }
  @media(max-width:1024px){
    display:none;
  }
`
const MainMenu = styled.div`

button{
  background:none;
  border:none;
  font-size:1rem;
  display:block;
padding: 0 1.2rem;
cursor:pointer;
color:black;
}

@media(max-width:1024px){
    display:block;
    background:rgba(255, 255, 255, 0.3);
    border-radius:1rem;
    padding:.2rem 1rem;
  }
`
const BurgerNav = styled.div`
  position: fixed;
  top:0;
  bottom:0;
  right:0;
  background:white;
  width:18.5rem;
  list-style:none;
  padding: 1rem 2.25rem;
  display:flex;
  flex-direction:column;
  text-align:start;
  transform: ${ props => props.show ? 'translateX(0)' : 'translateX(100%)'};
  transition: 500ms all ease-in;

  a{
    
    font-weight:500;
    padding:.4rem;
    margin:.5rem 1rem;
    width:100%;
    transition:400ms all ease-in;

    &:hover{
      background: rgba(119, 118, 118, 0.1);
      border-radius:1.5rem;
    }
  }
  
`
const NavClose = styled.div`
  display:flex;
  justify-content:flex-end;
`
const CustomClose = styled(CloseIcon)`
  cursor:pointer;

`
