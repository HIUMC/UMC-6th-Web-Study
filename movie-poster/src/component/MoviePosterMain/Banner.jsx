import styled from "styled-components";

const BannerContain = styled.div`
  display: flex;
  background-color: #000;
  color: white;
  width: 100%;
  height: 350px;
  font-size: 30px;
  font-weight: bolder;
  justify-content : center;
  align-items : center;
`;

const Banner = () =>{
    return(
        <BannerContain>
                <div>환영합니다!</div>
        </BannerContain>
    )
}


export default Banner