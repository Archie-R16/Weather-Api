import React from "react";

const Weather = (props) => (
    <div>
        {props.city && (
            <>
                <p>
                    Місце розтошування: {props.city},{props.country}
                </p>
                <p>Температура у °с: {props.temp}</p>
                <p>Тиск: {props.pressure}</p>
            </>
        )}
        <p>{props.error}</p>
    </div>
);

export default Weather;
