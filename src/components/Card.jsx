import React from 'react';

class Card extends React.Component {
    constructor(props) {
        super()
        this.state = { display: true }
    }

    render() {
        return (
            <div class="weatherCard">
                <div class="weatherDetails">
                    <div>{this.props.weather}</div>
                    <div>{this.props.description}</div>
                </div>
                <img src={this.props.image}></img>
            </div >
        )
    }
}

export default Card;


// <div>
// <p>81</p>
// <p>Partly cloud</p>
// <p>Atlanta, Georga, United States</p>
// <p>Thursday, 2:15pm</p>
// </div>