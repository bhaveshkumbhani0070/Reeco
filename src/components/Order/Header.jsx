import React from "react";
import { useNavigate } from "react-router-dom";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import headerStyle from "../../styles/header.styled.js";

const {
  HeaderContainer,
  AppNameAndNavBtnContainer,
  NavBtnContainer,
  AppName,
  CartAndUserNameContainer,
  UserName,
  NavBtn,
  CartIconContainer,
} = headerStyle;

const Header = () => {
  const navigation = useNavigate();

  const handleStoreClick = (route) => {
    navigation(route);
  };
  return (
    <HeaderContainer>
      <AppNameAndNavBtnContainer>
        <AppName onClick={() => handleStoreClick("/")}>Reeco</AppName>
        <NavBtnContainer>
          <NavBtn onClick={() => handleStoreClick("/store")}>Store</NavBtn>
          <NavBtn onClick={() => handleStoreClick("/")}>Orders</NavBtn>
          <NavBtn>Analytics</NavBtn>
        </NavBtnContainer>
      </AppNameAndNavBtnContainer>
      <CartAndUserNameContainer>
        <CartIconContainer>
          <ShoppingCartIcon fontSize="small" />
        </CartIconContainer>
        <UserName>
          Hello, James
          <span>
            <KeyboardArrowDownIcon fontSize="small" />
          </span>
        </UserName>
      </CartAndUserNameContainer>
    </HeaderContainer>
  );
};

export default Header;
