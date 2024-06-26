import styled from "styled-components";

export const Load = styled.div`
    color: white;
    font-weight: bold;
    display: flex;
    gap: 25px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
`;
const Loading = () => {
    return (
        <Load>
            영화를 불러오는 중입니다! 잠시만 기다려 주세요! 🍿⭐📽️
        </Load>
    )
}

export default Loading;