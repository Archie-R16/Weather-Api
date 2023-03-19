import React from "react";

class Weather extends React.Component {
    render() {
        return (
            <div>
                {this.props.city && (
                    <>
                        <p>
                            Місце розтошування: {this.props.city},
                            {this.props.country}
                        </p>
                        <p>Температура у °с: {this.props.temp}</p>
                        <p>Тиск: {this.props.pressure}</p>
                    </>
                )}
            </div>
        );
    }
}

export default Weather;
