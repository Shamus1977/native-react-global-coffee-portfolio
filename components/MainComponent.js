import React, { Component } from 'react';
import Directory from './DirectoryComponent';
import { REGIONS_HISTORY } from '../shared/regionsHistory';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            regionsHistory: REGIONS_HISTORY
        };
    }

    render() {
        return <Directory regions={this.state.regionsHistory} />;
    }
}

export default Main;