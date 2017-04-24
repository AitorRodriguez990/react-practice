import React, { Component } from 'react';
import './list.css';
import Element from '../element/element';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inStockOnly: false
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange() {
        this.setState({inStockOnly: !this.state.inStockOnly});
    }

    render() {
        var companies = [
            {name: 'Mercedes Benz', value: 30000, stock: 2},
            {name: 'Bmw', value: 27000, stock: 0},
            {name: 'Audi', value: 24500, stock: 5},
            {name: 'Seat', value: 22000, stock: 6},
            {name: 'Kia', value: 19500, stock: 0},
            {name: 'Honda', value: 23200, stock: 1}
        ];

        var companiesToShow = [];

        companies.forEach((company, index) => {
            if(this.state.inStockOnly && company.stock === 0) {
                return;
            } else {
                companiesToShow.push(<Element key={index} company={company} inStockOnly={this.state.inStockOnly} />);
            }
        });

        return (
            <div>
                <div className="in-stock-only">
                    <input type="checkbox" name="stock" onChange={this.handleChange} /> Only show companies with stock
                </div>
                <ul className="list">
                    {companiesToShow}
                </ul>
                <p className="red">* Companies in red color have no stock</p>
            </div>
        );

        /*
        Sort: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
        */
    }
}

export default List;
