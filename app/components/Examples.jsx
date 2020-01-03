var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
    return (
        <div>
            <h1 className="text-center page-title">Examples</h1>
            <p>Here are a few example locations to search:</p>
            <ol>
                <li>
                    <Link to="/?location=Toronto,CA">Toronto, CA</Link>
                </li>
                <li>
                    <Link to="/?location=New York City, USA">New York City, USA</Link>
                </li>
            </ol>
        </div>
    );
};

module.exports = Examples;