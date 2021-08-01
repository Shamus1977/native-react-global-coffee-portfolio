import React, { Component } from 'react';
import HistoryDirectory from './HistoryDirectoryComponent';
import { REGIONS_HISTORY } from '../shared/regionsHistory';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            regionsHistory: REGIONS_HISTORY
        };
    }

    render() {
        return <HistoryDirectory regionsHistory={this.state.regionsHistory} />;
    }
}

export default Main;