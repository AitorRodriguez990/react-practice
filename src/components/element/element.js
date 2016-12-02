import React, { Component } from 'react';
import './element.css';

class Element extends Component {
    /*propTypes: {
        company: React.PropTypes.shape({
            name: React.PropTypes.string,
            value: React.PropTypes.number,
            stock: React.PropTypes.number
        }).isRequired
    }*/

    render() {
        var elementClasses = this.props.company.stock === 0 ? 'element red' : 'element';

        return (
            <li className={elementClasses} >{this.props.company.name} ({this.props.company.value} €) - Stock: {this.props.company.stock}</li>
        );
    }
}

export default Element;
