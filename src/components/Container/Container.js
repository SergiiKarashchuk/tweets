import styled from "@emotion/styled";

const ContainerWrapp = styled.div`
  margin: 40px auto;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Container = ({ children }) => {
  return <ContainerWrapp>{children}</ContainerWrapp>;
};

export default Container;
