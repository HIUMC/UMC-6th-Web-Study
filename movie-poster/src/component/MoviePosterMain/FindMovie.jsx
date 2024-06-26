import styled from "styled-components";
export const Findtitle = styled.div`
  color: white;
  font-size: 30px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  margin: 30px;
`;

export const InputBox = styled.input`
  display: inline-block;
  width: 350px;
  height: 30px;
  border-radius: 15px;
  border: none;
`;

export const Click = styled.button`
  display: inline-block;
  font-size: 25px;
  border: none;
  border-radius: 50px;
  background-color: yellow;
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px; 
`;

const FindMovie = () => {
  return (
    <>
      <Findtitle>📽️ Find your movies! 🍿</Findtitle>
      <InputContainer>
        <InputBox type="text" />
        <Click>🔍</Click>
      </InputContainer>
    </>
  );
}

export default FindMovie;