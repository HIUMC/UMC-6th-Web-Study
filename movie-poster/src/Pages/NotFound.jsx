import styled from "styled-components"
import { Link } from "react-router-dom";

export const Container = styled.div`
    color: white;
    font-weight: bold;
    display: flex;
    gap: 25px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
`;

export const Oops = styled.div`
    font-size: 50px;
`;
export const Not = styled.div`
    font-style: italic;
`;
export const StyledLink = styled(Link)`
    border-bottom: none;
    font-size: 25px;
    color: white;
    text-decoration: none;

    &:hover {
        color: lightgray; /* 마우스를 올렸을 때 색상 변경 */
    }

    &.active {
        font-weight: bold; /* active 클래스가 적용될 때 폰트 굵기 변경 */
    }
`;
const NotFound = () => {
    return(
        <Container>
            <Oops>Oops!</Oops>
            <div>예상치 못한 에러가 발생했습니다 🥲 </div>
            <Not>Not Found !</Not>
            <StyledLink to="/" isActive={(match, location) => {
                if (!match) return false;
                return true;
            }}>메인화면으로 이동하기</StyledLink>
        </Container>
    )
}

export default NotFound