import React, { Component } from 'react';
import ButtonDirectory from './ButtonDirectoryComponent';
import { REGIONS_HISTORY } from '../shared/regionsHistory';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            regionsHistory: REGIONS_HISTORY
        };
    }

    render() {
        return <ButtonDirectory 
            regions={this.state.regionsHistory}
            buttonRight='Geography'
            buttonLeft='History'
        />;
    }
}

export default Main;