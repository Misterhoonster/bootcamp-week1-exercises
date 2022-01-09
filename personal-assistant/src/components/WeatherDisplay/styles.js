import styled from "styled-components";

export const WeatherContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border: thin solid #52734D;
    border-radius: 15px;

    img {
        width: 10rem;
        height: 10rem;
    }

    h2 {
        margin-left: 2rem;
        font-family: --apple-system, BlinkMacSystemFont;
        font-size: 64px;
        color: #52734D;
        text-align: center;
    }
`