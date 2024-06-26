import styled from "styled-components";
<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>

export const Header = styled.div`
    display: flex;
    gap: 20px;
    background-color: rgb(23, 23, 58);
    padding: 20px;`
;
export const EndButton = styled.div`
    display: flex;
    gap: 30px;
    margin-left: auto;
`;

const Navor = ({title, login, popular, upcoming, toprated, nowplaying}) => {
    return(
        <Header className="Navor">
            <div>{title}</div>
            <EndButton>
                <div>{login}</div>
                <div>{popular}</div>
                <div>{upcoming}</div>
                <div>{toprated}</div>
                <div>{nowplaying}</div>
            </EndButton>
        </Header>
    )
}

export default Navor;