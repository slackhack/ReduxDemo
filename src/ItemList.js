import React from 'react';
import listStore from './ListStore';

export default class ItemList extends React.Component {

    constructor() {
        super();
        this.handleUpdate = this.handleUpdate.bind(this);
        this.state = {items: []};
    }

    /**
     *
     */
    componentWillMount() {
        listStore.subscribe(this.handleUpdate);
    }

    /**
     *
     */
    handleUpdate() {
        let items = listStore.getState().itemList;
        this.setState({items: items});
    }


    /**
     *
     */
    render() {
        let itemList = this.state.items.map((i) => {
            return <li key={i.id}>{i.data}</li>
        });

        return (<div className="item-panel">
                <p> List of Added Items</p>
                <div className="items">
                    <ul>
                        {itemList}
                    </ul>
                </div>
            </div>
        );
    }
}