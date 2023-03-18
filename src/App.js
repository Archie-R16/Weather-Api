import React from "react";
import Form from "./components/Form";
import Info from "./components/Info";
import Weather from "./components/Weather";

const API_KEY = "4590bdcd2eb1ee30608b89c62dc1ef08";

class App extends React.Component {
    getingWeather = async (e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;
        const api_url = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
        );
        const data = await api_url.json();
        console.log(data);
    };
    render() {
        return (
            <>
                <Info />
                <Form weatherMetod={this.getingWeather} />
                <Weather />
            </>
        );
    }
}

export default App;
