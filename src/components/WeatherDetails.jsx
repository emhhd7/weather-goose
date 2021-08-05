import React, { Component } from 'react';
import WeatherCard from './WeatherCard'

let weatherData = {}
const apiKey = '32fb7c7ccc203aa91cd8f42baab88017'

class WeatherDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            data: undefined
        }
    }
    componentDidMount() {
        this._fetchWeather()
    }

    _fetchWeather = async () => {

        const response = await fetch('https://api.openweathermap.org/data/2.5/onecall?lat=33.749&lon=-84.38798&exclude=minutely,hourly,alerts,current&appid=32fb7c7ccc203aa91cd8f42baab88017');
        const data = await response.json();
        this.setState({
            data: data,
            isLoading: false,
        });
    }

    render() {
        return (
            <div>
                <WeatherCard abc={this.state.data} />
            </div>
        )
    }
}

export default WeatherDetails;