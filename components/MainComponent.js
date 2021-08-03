import React, { Component } from 'react';
import HistoryGeographyDirectory from './HistoryGeographyDirectoryComponent';
import { REGIONS_HISTORY } from '../shared/regionsHistory';


class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            regionsHistory: REGIONS_HISTORY
        };
    }

    render() {
        return (
            <HistoryGeographyDirectory
                regions={this.state.regionsHistory}
            />
        )
    }
}

export default Main;