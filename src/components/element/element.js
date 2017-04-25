import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './element.css';

class Element extends Component {
    render() {
        var elementClasses = this.props.company.stock === 0 ? 'element red' : 'element';

        return (
            <li className={elementClasses} >{this.props.company.name} ({this.props.company.value} €) - Stock: {this.props.company.stock}</li>
        );
    }
}

Element.propTypes = {
    company: PropTypes.shape({
        name: PropTypes.string,
        value: PropTypes.number,
        stock: PropTypes.number
    })
}

export default Element;
