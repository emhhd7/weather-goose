import React from 'react';

class Card extends React.Component {
    constructor(props) {
        super()
        this.state = { displayExtended: true }
    }

    handleClick = () => {
        this.setState({
            displayExtended: !this.state.displayExtended
        })

    }
    render() {
        const { displayExtended } = this.state
        return (
            <div className={this.props.today === true ? "weatherCard firstCardDetails": "weatherCard"} onClick={this.handleClick}>
                <div className="weatherDetails">
                    {!!displayExtended ? (
                        <div>
                            <div>{this.props.day}</div>
                            <div>{this.props.dayTemperature}°</div>
                            <div>{this.props.weather}</div>
                        </div>
                    ) : (
                        <div className="extendedDetails">
                            <div>{this.props.day}</div>
                            <div>Low: {this.props.min}°</div>
                            <div>High: {this.props.max}°</div>
                            <div>{this.props.description}</div>
                        </div>
                    )}

                </div>
                <img src={this.props.image} alt={this.props.weather}></img>
            </div>
        )
    }
}

export default Card;