import { NavLink } from "react-router-dom";
import styled from "@emotion/styled";

export const Container = styled.div`
  margin: 0 auto;
  padding: 0 16px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;

  width: 100%;
  padding: 12px 0;
  margin-bottom: 16px;
  border-bottom: 1px solid black;
  > nav {
    display: flex;
  }
`;

export const StyledLink = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 15px;
  border: 1px solid black;
  text-decoration: none;
  color: black;
  font-weight: 500;
  margin: 0 40px;
  &.active {
    color: white;
    background-color: ${(p) => p.theme.colors.tomato};
  }
  :hover,
  :focus {
    color: white;
    background-color: ${(p) => p.theme.colors.tomato};
  }
`;
