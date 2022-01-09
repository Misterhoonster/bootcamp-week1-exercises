import styled from "styled-components";

export const GreetingLayout = styled.div`
    display: flex;
    height: 100vh;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;

    #timeText {
        color: #91C788;
        padding: 0.25em 0.5em;
        margin: 0 auto 3rem auto;
        background-color: white;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
        border-radius: 15px;
        font-family: -apple-system, BlinkMacSystemFont;
        font-size: 30px;
        font-weight: 400;
    }

    #greetingText {
        color: #52734D;
        font-family: --apple-system, BlinkMacSystemFont;
        font-weight: 700;
        font-size: 50px;
    }
`