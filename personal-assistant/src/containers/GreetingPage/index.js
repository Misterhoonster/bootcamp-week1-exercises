import React from "react";

import { GreetingLayout } from "./styles";
import WeatherDisplay from "../../components/WeatherDisplay";

const GreetingPage = () => {

    const now = new Date();
    const formattedTime = now.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
    const greetingMessage = () => {
        const curHr = now.getHours();
        if (curHr < 12) {
            return 'Good morning!'
        } else if (curHr < 18) {
            return 'Good afternoon!'
        }
        return 'Good evening!'
    }

    return (
            <GreetingLayout>
                <h2 id="greetingText">{greetingMessage()}</h2>
                <h2 id="timeText">{formattedTime}</h2>

                <WeatherDisplay />
            </GreetingLayout>
    );
}

export default GreetingPage;