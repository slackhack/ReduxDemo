import React from 'react';
import listStore from './ListStore';
import * as Creator from './ActionCreators';

export default class SimpleField extends React.Component {

    constructor() {
        super();
        this.save = this.save.bind(this);
        this.changed = this.changed.bind(this);
        this.state = {data: ""};
    }

    changed(){
        this.setState({data: this.refs.data.value});
    }

    save() {
        listStore.dispatch(Creator.addItemAction(this.refs.data.value));
    }


    render(){
        return(<div>
            <input ref="data" value={this.state.data} onChange={this.changed}/>
            <button onClick={this.save}>Add Item</button>
        </div>);    }
}
