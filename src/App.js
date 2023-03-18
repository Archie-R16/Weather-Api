import React from "react";
import Form from "./components/Form";
import Info from "./components/Info";
import Weather from "./components/Weather";

const API_KEY = "4590bdcd2eb1ee30608b89c62dc1ef08";

getingWeather = async () => {
    const api_url = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=Kiev&appid=${API_KEY}&units=metric`
    );
    const data = await api_url.json();
    console.log(data);
};

class App extends React.Component {
    render() {
        return (
            <>
                <Info />
                <Form />
                <Weather />
            </>
        );
    }
}

export default App;
