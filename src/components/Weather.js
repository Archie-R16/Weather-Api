import React from "react";

const Weather = (props) => (
    <div className="infoWeath">
        {props.city && (
            <>
                <p>
                    Місце розтошування: {props.city},{props.country}
                </p>
                <p>Температура: {props.temp} °c</p>
                <p>Тиск: {props.pressure}</p>
            </>
        )}
        <p className="error">{props.error}</p>
    </div>
);

export default Weather;
