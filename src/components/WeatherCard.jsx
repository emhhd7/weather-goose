import React from 'react';
import './styles/WeatherCard.css';
import Card from './Card';

class WeatherCard extends React.Component {
    constructor(props) {
        super()
        this.state = { display: true }
    }

    createCards = () => {
        if (!!this.props.abc) {
            return this.props.abc.daily.map(day => {
                return (
                    <Card
                        weather={day.weather[0].main}
                        description={day.weather[0].description}
                        image={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
                    />
                )
            })
        } else {
            return null;
        }

    }

    render() {
        return (
            <div className="weeklyCards">
                {this.createCards()}
            </div>
        )
    }
}

export default WeatherCard;