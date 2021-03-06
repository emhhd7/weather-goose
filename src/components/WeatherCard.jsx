import React from 'react';
import Card from './Card';

// Date Conversion plugins
const dayjs = require('dayjs');
const utc = require('dayjs/plugin/utc');
const timezone = require('dayjs/plugin/timezone');
const isoWeek = require('dayjs/plugin/isoWeek')
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(isoWeek);

class WeatherCard extends React.Component {
    constructor(props) {
        super()
        this.state = {
            display: true,
            firstDay: {}
        }
    }



    createCards = () => {
        let weatherList;
        if (!!this.props.abc) {
            const timezone = this.props.abc.timezone
            weatherList = this.props.abc.daily.map((day, id) => {
                return (
                    <Card
                        key={id}
                        day={this.convertDate(day.dt, timezone).day}
                        dayTemperature={this.convertTemp(day.temp.day)}
                        weather={day.weather[0].main}
                        description={day.weather[0].description}
                        image={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}

                        min={this.convertTemp(day.temp.min)}
                        max={this.convertTemp(day.temp.max)}
                    />
                )
            })
                .filter((_, id) => id < 7);
            weatherList.shift()
            return weatherList;

        } else {
            return null;
        }
    }

    createFirstCard = () => {
        if (!!this.props.abc) {
            const timezone = this.props.abc.timezone
            const firstDay = this.props.abc.daily[0];
            return (
                <Card
                    day={"Today"}
                    today={true}
                    dayTemperature={this.convertTemp(firstDay.temp.day)}
                    weather={firstDay.weather[0].main}
                    description={firstDay.weather[0].description}
                    image={`https://openweathermap.org/img/wn/${firstDay.weather[0].icon}@4x.png`}

                    min={this.convertTemp(firstDay.temp.min)}
                    max={this.convertTemp(firstDay.temp.max)}
                />
            )
        } else {
            return null;
        }
    }

    convertDate = (milliseconds, timezone) => {
        const specificDay = {
            0: "Sunday",
            1: "Monday",
            2: "Tuesday",
            3: "Wednesday",
            4: "Thursday",
            5: "Friday",
            6: "Saturday",
            7: "Sunday"
        }
        return {
            time: dayjs(milliseconds).tz(timezone).format("DD-MM-YYYYTHH:mm:ss"),
            day: specificDay[dayjs.unix(milliseconds).tz(timezone).isoWeekday()],
            number: dayjs.unix(milliseconds).tz(timezone).isoWeekday()
        }
    }

    convertTemp = (kelvin) => {
        const temperature = (kelvin - 273.15) * 9 / 5 + 32
        return Math.trunc(temperature);
    }

    render() {
        return (
            <div className="allCards">
                <div className="firstCard">
                    {this.createFirstCard()}
                </div>
                <div className="weeklyCards">
                    {this.createCards()}
                </div>
            </div>
        )
    }
}

export default WeatherCard;