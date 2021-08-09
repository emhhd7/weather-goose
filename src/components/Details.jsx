import React, { Component } from 'react';
import WeatherCard from './WeatherCard'
require('dotenv').config();

class Details extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            data: undefined,
            zipcode: ''
        }
    }

    _fetchWeather = async () => {
        const { name, lat, lon } = await this._fetchCoordinates();
        const key = process.env.REACT_APP_DB_KEY
        const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts,current&appid=${key}`);
        const data = await response.json();
        this.setState({
            data: data,
            name: name,
            isLoading: false,
        });
    }

    _fetchCoordinates = async () => {
        const key = process.env.REACT_APP_DB_KEY
        const responseCoordinates = await fetch(`http://api.openweathermap.org/geo/1.0/zip?zip=${this.state.zipcode},US&appid=${key}`);
        const dataCoordinates = await responseCoordinates.json();
        return {
            name: dataCoordinates.name,
            lat: dataCoordinates.lat,
            lon: dataCoordinates.lon
        }
    }

    clickHandler = () => {
        this._fetchWeather()
    }

    changeHandler = (event) => {
        this.setState({
            zipcode: event.target.value
        })
    }

    Form = () => {
        return (
            <form>
                <center>
                    <label>Please enter a zip code:
                        <input type="text" data-testid="zipcode" value={this.state.zipcode} onChange={(event) => this.changeHandler(event)}></input>
                    </label>
                    <button type="button" data-testid="weatherButton" onClick={() => { this.clickHandler() }}>Honk!</button>
                    <br></br>
                </center>
            </form>
        )
    }


    render() {
        return (
            <div>
                {this.Form()}
                <center><p>The Forecast in {this.state.name} is...</p></center>
                <WeatherCard abc={this.state.data} />
            </div>
        )
    }
}

export default Details;