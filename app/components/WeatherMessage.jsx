var React = require('react');

var WeatherMessage = ({temp, location}) => {
    return (
        <h3>It is currently {temp} degrees in {location} and it feels good</h3>
    )
}

module.exports = WeatherMessage;