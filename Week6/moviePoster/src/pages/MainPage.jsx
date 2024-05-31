import Banner from "../components/Banner";
import styled from "styled-components";

export const MainPage_wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 90vh;
`;

export const Search_wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  flex-grow: 1;
`;

export const H2 = styled.div`
  color: white;
  font-size: 36px;
  font-weight: 700;
  margin-top: 50px;
`;

export const Input = styled.input`
  background-color: white;
  border-style: none;
  border-radius: 20px;
  width: 400px;
  height: 40px;
  margin-top: 40px;
  margin-right: 20px;
`;

export const Btn = styled.button`
  width: 30px;
  height: 30px;
  border: none;
  background-color: #fee068;
  border-radius: 20px;
`;

export default function MainPage() {
  return (
    <MainPage_wrapper>
      <Banner />
      <Search_wrapper>
        <H2>📽️ Find your movies !</H2>
        <div>
          <Input />
          <Btn>🔍</Btn>
        </div>
      </Search_wrapper>
    </MainPage_wrapper>
  );
}
