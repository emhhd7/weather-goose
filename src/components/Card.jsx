import React from 'react';

class Card extends React.Component {
    constructor(props) {
        super()
        this.state = { display: true }
    }

    render() {
        return (
            <div className="weatherCard">
                <div className="weatherDetails">
                    <div>{this.props.day}</div>
                    <div>{this.props.dayTemperature}°</div>
                    <div>{this.props.weather}</div>
                </div>
                <img src={this.props.image} alt={this.props.weather}></img>
            </div >
        )
    }
}

export default Card;