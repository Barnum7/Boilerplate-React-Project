var React = require('react');

var About = (props) => {
    return (
        <div>
        <h1 className="text-center page-title">About</h1>
        <p>This is my Weather App built with <a href="https://facebook.github.io/react">React.JS</a> and using data from <a href="https://openweathermap.org">the Open Weather Map API</a></p>
    </div>
    );
};

module.exports = About;