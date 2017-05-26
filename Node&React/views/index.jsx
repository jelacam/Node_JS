var React = require('react');

// React 16 izbacuje createClass - koriste se JavaScript klase 
class IndexComponent extends React.Component{
    render() {
        return (
            <div>
                <h1> this was built using react </h1>
                <h2> By Marko Jelaca </h2>
                <h2> 26.6.2017 </h2>
            </div>
        )
    }
};

module.exports = IndexComponent;
