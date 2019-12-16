var React = require('react');

// var WeatherMessage = React.createClass({
//     render: function () {
//         var {temp, location} = this.props;
//         return (
//             <h3>It is currently {temp} degrees in {location}</h3>
//         );
//     }
// });

var WeatherMessage = (props) => {
    return (
        <h3>It is currently {props.temp} degrees in {props.location} and it feels good</h3>
    )
}

module.exports = WeatherMessage;