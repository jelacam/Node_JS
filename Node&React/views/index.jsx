var React = require('react');

var DefaultLayout = require('./layout/master');



// React 16 izbacuje createClass - koriste se JavaScript klase 
class IndexComponent extends React.Component{
    render() {
        return (
            <DefaultLayout name={this.props.name}>
                <div>
                    <h1> this was built using react </h1>
                    <h2> By Marko Jelaca </h2>
                    <h2> 26.6.2017 </h2>
                </div>
            </DefaultLayout>
        )
    }
};

module.exports = IndexComponent;
