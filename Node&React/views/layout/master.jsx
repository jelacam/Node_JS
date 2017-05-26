var React = require('react');

class MasterLayout extends React.Component {
    render() {
        return (
        <html>
            <head>
                <meta httpEquiv='Content-Type' content='text/html'/>
                <title>{this.props.name}</title>

            </head>

            <body>
                {this.props.children}
            </body>
        </html>
        )
    }
}

module.exports = MasterLayout;