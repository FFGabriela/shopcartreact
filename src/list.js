import React, { Component } from 'react';
import items from './shoes';
import './list.css';

const ItemShoes = (props) => {
    return (
        <div className="jumbotron">
            <img className="image img-thumbnail" src={props.data.myimg} />
            <h5 className="text-muted">${props.data.myprice}</h5><br />
            <button type="button" className="btn btn-warning" data-toggle="popover" onClick={() => props.add(props.data.myprice)}>Add</button>
        </div>
    );
}

class List extends Component {
    render() {
        return (
            <div>
                {items.map((elements, i) =>
                    <ItemShoes key={i} data={elements} add={this.props.add} />
                )}
            </div>
        );
    }
}

export default List;
